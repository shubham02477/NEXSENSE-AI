from sqlalchemy import String, Float, ForeignKey, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.database.database import Base
from app.models.mixins import TimestampMixin


class Detection(Base, TimestampMixin):
    __tablename__ = "detections"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    device_id: Mapped[int] = mapped_column(ForeignKey("devices.id"))
    is_human: Mapped[bool] = mapped_column(Boolean, default=True)
    confidence: Mapped[float] = mapped_column(Float, default=0.0)
    distance_m: Mapped[float] = mapped_column(Float, nullable=True)
    motion: Mapped[str] = mapped_column(String(50), nullable=True)
