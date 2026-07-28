from fastapi import APIRouter, Depends

from app.models.user import User
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/api/settings", tags=["Settings"])

# In-memory placeholder settings store (swap for a DB table when needed)
_settings_store = {
    "notification_confidence_threshold": 80.0,
    "detection_alerts_enabled": True,
}


@router.get("/")
def get_settings(current_user: User = Depends(get_current_user)):
    return _settings_store


@router.patch("/")
def update_settings(payload: dict, current_user: User = Depends(get_current_user)):
    _settings_store.update(payload)
    return _settings_store
