#!/bin/bash
set -e
echo "安装依赖..."
pip install -r requirements.txt 2>/dev/null || pip install --break-system-packages -r requirements.txt
echo "启动服务 (http://localhost:8000) ..."
uvicorn server:app --host 0.0.0.0 --port 8000 --reload
