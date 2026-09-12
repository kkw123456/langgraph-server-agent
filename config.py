import os
import secrets
from dotenv import load_dotenv

load_dotenv()

MODEL = os.getenv("MODEL", "gpt-4o-mini")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
OPENAI_BASE_URL = os.getenv("OPENAI_BASE_URL", "https://api.openai.com/v1")
TEMPERATURE = float(os.getenv("TEMPERATURE", "0.3"))

HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8000"))
DATA_DIR = os.getenv("DATA_DIR", "data")

# ===== 登录认证 =====
# 同时配置了用户名与密码才启用登录校验；留空则关闭（本地开发方便）。
AUTH_USERNAME = os.getenv("AUTH_USERNAME", "").strip()
AUTH_PASSWORD = os.getenv("AUTH_PASSWORD", "").strip()
# 令牌签名密钥：未显式配置时自动生成并持久化到 DATA_DIR，重启后登录态不失效。
AUTH_COOKIE_SECURE = os.getenv("AUTH_COOKIE_SECURE", "false").lower() in ("1", "true", "yes")

os.makedirs(DATA_DIR, exist_ok=True)
DB_PATH = os.path.join(DATA_DIR, "checkpoints.db")
AUTH_SECRET_FILE = os.path.join(DATA_DIR, ".auth_secret")


def _load_auth_secret() -> str:
    env = os.getenv("AUTH_SECRET", "").strip()
    if env:
        return env
    try:
        if os.path.exists(AUTH_SECRET_FILE):
            s = open(AUTH_SECRET_FILE).read().strip()
            if s:
                return s
        s = secrets.token_hex(32)
        with open(AUTH_SECRET_FILE, "w") as f:
            f.write(s)
        os.chmod(AUTH_SECRET_FILE, 0o600)
        return s
    except Exception:
        # 极端情况下退化为进程内随机密钥（重启后需重新登录）
        return secrets.token_hex(32)


AUTH_SECRET = _load_auth_secret()
