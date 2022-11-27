@echo off
mkdir out
for %%i in (*.png) do (
  
ffmpeg -i "%%i"  -vf scale=iw:ih -codec libwebp -lossless 0 -quality 50 "out/%%~ni.png"
)