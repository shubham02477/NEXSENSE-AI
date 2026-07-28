# WiSense Guard AI — Backend

FastAPI backend for a human-detection sensor system (ESP32 → AI → dashboard/notifications).

## Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env           # then edit SECRET_KEY etc.
uvicorn main:app --reload
```

Open http://127.0.0.1:8000/docs for interactive Swagger docs.

## Project layout

```
backend/
├── app/
│   ├── api/            # user-facing REST routes (auth, dashboard, devices, ...)
│   ├── auth/            # password hashing, JWT, current-user dependency
│   ├── database/        # SQLAlchemy engine/session
│   ├── models/          # ORM tables: User, Device, Detection, Notification, ActivityLog
│   ├── schemas/         # Pydantic request/response models
│   ├── services/        # shared business logic (e.g. notification creation)
│   ├── websocket/        # connection manager + /ws/live endpoint
│   ├── ai/               # predict_from_sensor_payload() — swap in your real model here
│   ├── esp32/            # device-facing ingestion endpoint (no user login)
│   └── config.py
├── main.py
├── requirements.txt
└── .env.example
```

## Auth flow

1. `POST /api/auth/register` — first registered user automatically becomes `admin`.
2. `POST /api/auth/login` — returns a JWT `access_token`.
3. Send `Authorization: Bearer <token>` on all other `/api/*` routes.

## ESP32 → backend flow

The device posts to `/api/esp32/detect` with a shared secret header instead of a user JWT:

```bash
curl -X POST http://127.0.0.1:8000/api/esp32/detect \
  -H "Content-Type: application/json" \
  -H "x-device-key: <your SECRET_KEY from .env>" \
  -d '{"device_uid": "esp32-front-door", "motion_detected": true, "distance_m": 2.3}'
```

This will:
- auto-register the device if it's new,
- run it through `app/ai/predictor.py` (currently a dummy model — replace with your real one),
- store a `Detection` row,
- create a `Notification` if a human was detected,
- broadcast the event to any connected frontend over `/ws/live`.

## Swapping in your real AI model

Edit `app/ai/predictor.py` — load your model once at import time, replace the body of
`predict_from_sensor_payload`, keep the same return shape. Nothing else needs to change.

## Endpoints at a glance

| Area          | Route                              |
|---------------|-------------------------------------|
| Auth          | `/api/auth/register`, `/api/auth/login`, `/api/auth/me` |
| Dashboard     | `/api/dashboard/summary` |
| Devices       | `/api/devices/` (GET/POST), `/api/devices/{id}` (PATCH/DELETE) |
| Detections    | `/api/detections/`, `/api/detections/latest` |
| History       | `/api/history/?device_id=&start_date=&end_date=` |
| Notifications | `/api/notifications/`, `/api/notifications/{id}`, `/api/notifications/read-all` |
| Settings      | `/api/settings/` (GET/PATCH) |
| ESP32 ingest  | `/api/esp32/detect` |
| Live updates  | `ws://.../ws/live` |

## Notes

- Default DB is SQLite (`wisenseguard.db`), zero setup. Swap `DATABASE_URL` in `.env` for
  Postgres later — SQLAlchemy handles both without code changes.
- Roles: first registered user is `admin`, everyone after is `user` (change in `app/api/auth.py` if you want a different rule).
- The ESP32 device-key check is intentionally simple (one shared secret from `.env`). For
  multiple devices with individually revocable keys, add an `api_key` column to `Device` and
  check against that instead.
