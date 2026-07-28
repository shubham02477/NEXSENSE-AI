import datetime as dt
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database.database import get_db
from app.models.detection import Detection
from app.models.notification import Notification
from app.models.device import Device, DeviceStatus
from app.models.user import User
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/api/dashboard", tags=["Dashboard"])


@router.get("/summary")
def dashboard_summary(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    today_start = dt.datetime.combine(dt.date.today(), dt.time.min)

    latest_detection = db.query(Detection).order_by(Detection.created_at.desc()).first()

    today_detections = (
        db.query(func.count(Detection.id))
        .filter(Detection.created_at >= today_start)
        .scalar()
    )

    unread_notifications = (
        db.query(func.count(Notification.id)).filter(Notification.is_read == False).scalar()  # noqa: E712
    )

    total_devices = db.query(func.count(Device.id)).scalar()
    online_devices = (
        db.query(func.count(Device.id)).filter(Device.status == DeviceStatus.ONLINE).scalar()
    )

    status = "SAFE"
    if latest_detection and latest_detection.is_human:
        status = "HUMAN DETECTED"

    return {
        "status": status,
        "latest_detection": {
            "confidence": latest_detection.confidence if latest_detection else None,
            "distance_m": latest_detection.distance_m if latest_detection else None,
            "motion": latest_detection.motion if latest_detection else None,
            "created_at": latest_detection.created_at if latest_detection else None,
        } if latest_detection else None,
        "today_detections": today_detections,
        "unread_notifications": unread_notifications,
        "total_devices": total_devices,
        "online_devices": online_devices,
    }
