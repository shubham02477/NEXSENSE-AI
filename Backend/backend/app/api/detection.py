from typing import List, Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.detection import Detection
from app.models.user import User
from app.schemas.detection import DetectionOut
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/api/detections", tags=["Detections"])


@router.get("/", response_model=List[DetectionOut])
def list_detections(
    device_id: Optional[int] = None,
    limit: int = Query(50, le=500),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = db.query(Detection)
    if device_id is not None:
        query = query.filter(Detection.device_id == device_id)
    return query.order_by(Detection.created_at.desc()).limit(limit).all()


@router.get("/latest", response_model=Optional[DetectionOut])
def latest_detection(
    device_id: Optional[int] = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = db.query(Detection)
    if device_id is not None:
        query = query.filter(Detection.device_id == device_id)
    return query.order_by(Detection.created_at.desc()).first()
