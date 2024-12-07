@echo off
echo Installing project dependencies...
npm install -g pm2 && npm run start
echo Application started successfully!
pause
