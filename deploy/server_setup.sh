#!/bin/bash
# 服务器端部署脚本：安装依赖、注册 systemd 服务、启动。
# 由本地 deploy.py 上传后以 root 执行。
set -e

APP_DIR=/opt/langgraph-agent
SERVICE=langgraph-agent

echo "=== [1/5] 检查运行时 ==="
python3 --version
node -v || echo "(无需 node，前端已构建)"

echo "=== [2/5] 安装 Python 依赖 ==="
cd "$APP_DIR"
if [ ! -d venv ]; then
  python3 -m venv venv
fi
./venv/bin/pip install --upgrade pip -q
./venv/bin/pip install -r requirements.txt -q
echo "依赖安装完成"

echo "=== [3/5] 生成登录凭据 ==="
if [ ! -f .env ]; then
  cp .env.example .env
fi

# 用 Python 精确写入认证配置：无论 .env 中原先是空值还是已有值，都覆盖为指定账号。
# （不能用 grep 判断是否存在——.env.example 里已有空的 AUTH_USERNAME= 行）
python3 - <<'PYEOF'
import re, os

path = ".env"
user = os.getenv("AUTH_USER", "admin")
pwd = os.getenv("AUTH_PWD", "admin@")

lines = []
if os.path.exists(path):
    lines = open(path, encoding="utf-8").read().splitlines()

def upsert(lines, key, value):
    """把 key=value 写入；若已存在（含空值）则替换，否则追加。"""
    pat = re.compile(rf"^\s*{re.escape(key)}\s*=")
    for i, ln in enumerate(lines):
        if pat.match(ln):
            lines[i] = f"{key}={value}"
            return lines
    lines.append(f"{key}={value}")
    return lines

for k, v in (("AUTH_USERNAME", user), ("AUTH_PASSWORD", pwd)):
    lines = upsert(lines, k, v)

if not any(l.strip().startswith("AUTH_COOKIE_SECURE=") for l in lines):
    lines.append("AUTH_COOKIE_SECURE=false")

open(path, "w", encoding="utf-8").write("\n".join(lines) + "\n")
print(f"已写入登录账号: {user}")
PYEOF

echo "登录账号: $(grep '^AUTH_USERNAME=' .env | cut -d= -f2)"
echo "登录密码: $(grep '^AUTH_PASSWORD=' .env | cut -d= -f2)"

echo "=== [4/5] 注册 systemd 服务 ==="
cat > /etc/systemd/system/$SERVICE.service <<EOF
[Unit]
Description=LangGraph Server Agent
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=$APP_DIR
Environment="PYTHONUNBUFFERED=1"
ExecStart=$APP_DIR/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8000
Restart=always
RestartSec=5
StandardOutput=append:/var/log/$SERVICE.log
StandardError=append:/var/log/$SERVICE.err.log

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable $SERVICE -q
systemctl restart $SERVICE

echo "=== [5/5] 等待服务就绪 ==="
for i in $(seq 1 30); do
  code=$(curl -s -o /dev/null -w "%{http_code}" -m 3 http://127.0.0.1:8000/login || true)
  if [ "$code" = "200" ]; then
    echo "服务已就绪 (第 ${i} 次探测)"
    break
  fi
  sleep 1
done

systemctl is-active $SERVICE
echo "=== 部署完成 ==="
