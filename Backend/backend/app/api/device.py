from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.device import Device
from app.models.user import User
from app.schemas.device import DeviceCreate, DeviceUpdate, DeviceOut
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/api/devices", tags=["Devices"])


@router.get("/", response_model=List[DeviceOut])
def list_devices(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return db.query(Device).order_by(Device.created_at.desc()).all()


@router.post("/", response_model=DeviceOut, status_code=201)
def create_device(
    payload: DeviceCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    existing = db.query(Device).filter(Device.device_uid == payload.device_uid).first()
    if existing:
        raise HTTPException(status_code=400, detail="Device UID already registered")

    device = Device(
        name=payload.name,
        device_uid=payload.device_uid,
        location=payload.location,
        owner_id=current_user.id,
    )
    db.add(device)
    db.commit()
    db.refresh(device)
    return device


@router.patch("/{device_id}", response_model=DeviceOut)
def update_device(
    device_id: int,
    payload: DeviceUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    device = db.query(Device).filter(Device.id == device_id).first()
    if not device:
        raise HTTPException(status_code=404, detail="Device not found")

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(device, field, value)

    db.commit()
    db.refresh(device)
    return device


@router.delete("/{device_id}", status_code=204)
def delete_device(
    device_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    device = db.query(Device).filter(Device.id == device_id).first()
    if not device:
        raise HTTPException(status_code=404, detail="Device not found")
    db.delete(device)
    db.commit()
    return None
