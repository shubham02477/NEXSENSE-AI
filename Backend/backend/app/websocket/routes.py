from fastapi import APIRouter, WebSocket, WebSocketDisconnect

from app.websocket.manager import manager

router = APIRouter(tags=["WebSocket"])


@router.websocket("/ws/live")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            # Keep the connection alive; we don't expect incoming messages,
            # but reading prevents the socket from being considered idle.
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)
