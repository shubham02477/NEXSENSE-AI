"""
Endpoints that the ESP32 device itself calls (no user login involved).
Secured with a simple shared device key instead of JWT, since the ESP32
can't easily do an OAuth login flow.
"""
from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.device import Device, DeviceStatus
from app.models.detection import Detection
from app.schemas.detection import DetectionOut
from app.ai.predictor import predict_from_sensor_payload
from app.services.notification_service import create_detection_notification
from app.websocket.manager import manager
from app.config import settings

router = APIRouter(prefix="/api/esp32", tags=["ESP32"])


def verify_device_key(x_device_key: str = Header(...)):
    """
    Very simple shared-secret check. Swap this for per-device API keys
    stored in the Device table once you're ready for multi-device auth.
    """
    if x_device_key != settings.SECRET_KEY:
        raise HTTPException(status_code=401, detail="Invalid device key")
    return True


@router.post("/detect", response_model=DetectionOut)
async def receive_detection(
    payload: dict,
    db: Session = Depends(get_db),
    _: bool = Depends(verify_device_key),
):
    """
    ESP32 posts raw sensor data here, e.g.:
        {
            "device_uid": "esp32-front-door",
            "motion_detected": true,
            "distance_m": 2.3
        }
    """
    device_uid = payload.get("device_uid")
    if not device_uid:
        raise HTTPException(status_code=400, detail="device_uid is required")

    device = db.query(Device).filter(Device.device_uid == device_uid).first()
    if not device:
        # Auto-register unknown devices so setup is plug-and-play
        device = Device(name=device_uid, device_uid=device_uid, status=DeviceStatus.ONLINE)
        db.add(device)
        db.commit()
        db.refresh(device)
    else:
        device.status = DeviceStatus.ONLINE
        db.commit()

    prediction = predict_from_sensor_payload(payload)

    detection = Detection(
        device_id=device.id,
        is_human=prediction["is_human"],
        confidence=prediction["confidence"],
        distance_m=prediction["distance_m"],
        motion=prediction["motion"],
    )
    db.add(detection)
    db.commit()
    db.refresh(detection)

    if detection.is_human:
        notification = create_detection_notification(db, detection)
        await manager.broadcast(
            {
                "type": "detection",
                "device_uid": device_uid,
                "is_human": detection.is_human,
                "confidence": detection.confidence,
                "distance_m": detection.distance_m,
                "motion": detection.motion,
                "notification_title": notification.title,
                "notification_message": notification.message,
                "created_at": detection.created_at,
            }
        )

    return detection
