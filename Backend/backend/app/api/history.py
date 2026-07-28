import datetime as dt
from typing import List, Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.detection import Detection
from app.models.user import User
from app.schemas.detection import DetectionOut
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/api/history", tags=["History"])


@router.get("/", response_model=List[DetectionOut])
def get_history(
    device_id: Optional[int] = None,
    start_date: Optional[dt.date] = None,
    end_date: Optional[dt.date] = None,
    limit: int = Query(200, le=1000),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = db.query(Detection)

    if device_id is not None:
        query = query.filter(Detection.device_id == device_id)
    if start_date is not None:
        query = query.filter(Detection.created_at >= start_date)
    if end_date is not None:
        query = query.filter(Detection.created_at <= end_date)

    return query.order_by(Detection.created_at.desc()).limit(limit).all()
