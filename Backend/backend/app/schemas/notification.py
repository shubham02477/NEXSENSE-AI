import datetime as dt
from typing import Optional
from pydantic import BaseModel, ConfigDict


class NotificationOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    message: str
    is_read: bool
    detection_id: Optional[int]
    created_at: dt.datetime


class NotificationUpdate(BaseModel):
    is_read: bool
