@echo off
mkdir out
for %%i in (*.jpg) do (
  
ffmpeg -i "%%i"  -vf scale=960:-1 -codec libwebp -lossless 0 -quality 50 "out/%%~ni.jpg"
)