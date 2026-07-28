import datetime as dt
from typing import Optional
from pydantic import BaseModel, ConfigDict


class DetectionCreate(BaseModel):
    device_uid: str
    is_human: bool = True
    confidence: float
    distance_m: Optional[float] = None
    motion: Optional[str] = None


class DetectionOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    device_id: int
    is_human: bool
    confidence: float
    distance_m: Optional[float]
    motion: Optional[str]
    created_at: dt.datetime
