import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Wifi, WifiOff, X, Radio } from 'lucide-react';

// Point this at your FastAPI backend's websocket endpoint.
// In dev, this is http://127.0.0.1:8000 -> ws://127.0.0.1:8000/ws/live
const WS_URL = (import.meta as any).env?.VITE_WS_URL || 'ws://127.0.0.1:8000/ws/live';
const RECONNECT_DELAY_MS = 3000;

interface DetectionEvent {
  type: 'detection';
  device_uid: string;
  is_human: boolean;
  confidence: number;
  distance_m: number | null;
  motion: string | null;
  notification_title: string;
  notification_message: string;
  created_at: string;
}

interface ToastItem extends DetectionEvent {
  toastId: string;
}

export const LiveNotifications: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;

    const connect = () => {
      if (cancelled) return;

      const socket = new WebSocket(WS_URL);
      socketRef.current = socket;

      socket.onopen = () => setConnected(true);

      socket.onclose = () => {
        setConnected(false);
        if (!cancelled) {
          reconnectTimer.current = setTimeout(connect, RECONNECT_DELAY_MS);
        }
      };

      socket.onerror = () => {
        socket.close();
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data) as DetectionEvent;
          if (data.type === 'detection' && data.is_human) {
            const toast: ToastItem = { ...data, toastId: `${Date.now()}-${Math.random()}` };
            setToasts((prev) => [toast, ...prev].slice(0, 4));

            // Auto-dismiss after 8s
            setTimeout(() => {
              setToasts((prev) => prev.filter((t) => t.toastId !== toast.toastId));
            }, 8000);
          }
        } catch {
          // ignore malformed messages
        }
      };
    };

    connect();

    return () => {
      cancelled = true;
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current);
      socketRef.current?.close();
    };
  }, []);

  const dismiss = (toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.toastId !== toastId));
  };

  return (
    <>
      {/* Connection status pill, fixed bottom-left */}
      <div className="fixed bottom-5 left-5 z-[100] hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-xl text-xs font-mono">
        {connected ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">Live feed connected</span>
          </>
        ) : (
          <>
            <WifiOff className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-500">Reconnecting to backend…</span>
          </>
        )}
      </div>

      {/* Toast stack, fixed top-right */}
      <div className="fixed top-20 right-5 z-[100] flex flex-col gap-3 w-[calc(100%-2.5rem)] max-w-sm">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.toastId}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-2xl border border-red-500/40 bg-slate-950/95 backdrop-blur-md shadow-2xl shadow-red-500/10 overflow-hidden"
            >
              <div className="flex items-start gap-3 p-4">
                <div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <AlertTriangle className="w-4.5 h-4.5 text-red-400" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white">{toast.notification_title}</p>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-red-400">
                      <Radio className="w-3 h-3" />
                      LIVE
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    {toast.device_uid} · {toast.confidence}% confidence
                    {toast.distance_m != null && <> · {toast.distance_m}m</>}
                    {toast.motion && <> · {toast.motion}</>}
                  </p>
                </div>

                <button
                  onClick={() => dismiss(toast.toastId)}
                  className="text-slate-500 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Dismiss notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
