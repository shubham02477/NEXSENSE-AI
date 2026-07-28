"""
AI interface layer.

This is a placeholder that returns dummy predictions so the rest of the
system (API, database, notifications, websocket) can be built and tested
end-to-end before the real model is wired in.

To integrate a real model later:
  1. Load your model (e.g. RuView) once at module import time.
  2. Replace the body of `predict_from_sensor_payload` with real inference.
  3. Keep the return shape the same so nothing downstream has to change.
"""
import random


def predict_from_sensor_payload(payload: dict) -> dict:
    """
    Given raw sensor data from the ESP32, return a detection prediction.

    Expected output shape:
        {
            "is_human": bool,
            "confidence": float,   # 0-100
            "distance_m": float,
            "motion": str,
        }
    """
    # --- Replace below with real model inference ---
    is_human = payload.get("motion_detected", True)
    confidence = round(random.uniform(85.0, 99.5), 2) if is_human else round(random.uniform(0, 20), 2)
    distance = payload.get("distance_m", round(random.uniform(0.5, 5.0), 2))
    motion = payload.get("motion", random.choice(["Walking", "Standing", "Approaching"]))

    return {
        "is_human": is_human,
        "confidence": confidence,
        "distance_m": distance,
        "motion": motion,
    }
