import logging
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database.database import Base, engine

# Import all models so Base.metadata knows about every table before create_all
from app.models import user, device, detection, notification, activity  # noqa: F401

from app.api import auth, dashboard, detection as detection_api, notification as notification_api
from app.api import history, device as device_api, settings as settings_api
from app.esp32 import routes as esp32_routes
from app.websocket import routes as websocket_routes

# --- Logging setup ---
os.makedirs(settings.LOG_DIR, exist_ok=True)
os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    handlers=[
        logging.FileHandler(os.path.join(settings.LOG_DIR, "app.log")),
        logging.StreamHandler(),
    ],
)
logger = logging.getLogger("wisense_guard")

# --- Database tables ---
Base.metadata.create_all(bind=engine)

# --- FastAPI app ---
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="WiSense Guard AI Backend — human-detection sensor platform.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Routers ---
app.include_router(auth.router)
app.include_router(dashboard.router)
app.include_router(detection_api.router)
app.include_router(history.router)
app.include_router(notification_api.router)
app.include_router(device_api.router)
app.include_router(settings_api.router)
app.include_router(esp32_routes.router)
app.include_router(websocket_routes.router)


@app.get("/", tags=["Root"])
def home():
    return {
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "Backend Running",
        "docs": "/docs",
    }


@app.on_event("startup")
def on_startup():
    logger.info("%s v%s starting up", settings.PROJECT_NAME, settings.VERSION)
