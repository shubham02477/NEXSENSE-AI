import enum
from sqlalchemy import String, Enum, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from app.database.database import Base
from app.models.mixins import TimestampMixin


class DeviceStatus(str, enum.Enum):
    ONLINE = "online"
    OFFLINE = "offline"


class Device(Base, TimestampMixin):
    __tablename__ = "devices"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(120))
    device_uid: Mapped[str] = mapped_column(String(120), unique=True, index=True)
    location: Mapped[str] = mapped_column(String(255), nullable=True)
    status: Mapped[DeviceStatus] = mapped_column(Enum(DeviceStatus), default=DeviceStatus.OFFLINE)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=True)
