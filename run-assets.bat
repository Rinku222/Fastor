@echo off
set BABEL_TARGET=browser
call npm run windows-compile
call npm run windows-asset-server
pause
