import datetime as dt
from typing import Optional

from jose import jwt, JWTError

from app.config import settings


def create_access_token(subject: str, expires_minutes: Optional[int] = None) -> str:
    expire_minutes = expires_minutes or settings.ACCESS_TOKEN_EXPIRE_MINUTES
    expire = dt.datetime.now(dt.timezone.utc) + dt.timedelta(minutes=expire_minutes)
    to_encode = {"sub": subject, "exp": expire}
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


def decode_access_token(token: str) -> Optional[dict]:
    try:
        return jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
    except JWTError:
        return None
