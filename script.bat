@echo off
echo Installing project dependencies...
npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies. Please check your setup.
    pause
    exit /b 1
)

echo Installing PM2 globally...
npm install -g pm2
if %errorlevel% neq 0 (
    echo Failed to install PM2. Please check your setup.
    pause
    exit /b 1
)

echo Starting the application with PM2...
pm2 start ./index.js
if %errorlevel% neq 0 (
    echo Failed to start the application. Please check your PM2 configuration.
    pause
    exit /b 1
)

echo Application started successfully!
pause
