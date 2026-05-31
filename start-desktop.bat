@echo off
setlocal

cd /d "%~dp0"
echo Starting T8 Penguin Canvas desktop...
echo.

npm.cmd run electron:dev

if errorlevel 1 (
  echo.
  echo Startup failed. Press any key to exit.
  pause >nul
)
