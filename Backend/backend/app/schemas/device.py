import datetime as dt
from typing import Optional
from pydantic import BaseModel, ConfigDict

from app.models.device import DeviceStatus


class DeviceCreate(BaseModel):
    name: str
    device_uid: str
    location: Optional[str] = None


class DeviceUpdate(BaseModel):
    name: Optional[str] = None
    location: Optional[str] = None
    status: Optional[DeviceStatus] = None


class DeviceOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    device_uid: str
    location: Optional[str]
    status: DeviceStatus
    created_at: dt.datetime
