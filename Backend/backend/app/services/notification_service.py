from sqlalchemy.orm import Session

from app.models.notification import Notification
from app.models.detection import Detection


def create_detection_notification(db: Session, detection: Detection) -> Notification:
    title = "Human Detected" if detection.is_human else "Motion Cleared"
    message = (
        f"Confidence: {detection.confidence}% | "
        f"Distance: {detection.distance_m} m | "
        f"Motion: {detection.motion}"
    )

    notification = Notification(
        detection_id=detection.id,
        title=title,
        message=message,
    )
    db.add(notification)
    db.commit()
    db.refresh(notification)
    return notification
