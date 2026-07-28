@echo off

echo Starting Backend...
start "Backend" cmd.exe /k "cd /d ""C:\Users\daksh\Desktop\404 BACKEND\Backend\backend"" && ""C:\Users\daksh\Desktop\404 BACKEND\venv\Scripts\python.exe"" -m uvicorn main:app --reload"

timeout /t 2 >nul

echo Starting Frontend...
start "Frontend" cmd.exe /k "cd /d ""C:\Users\daksh\Desktop\404 BACKEND"" && npm run dev"

echo Done!
pause