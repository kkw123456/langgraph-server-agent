"""登录认证：Cookie 会话 + 签名令牌 + 登录限流。

设计要点
--------
- 无状态签名令牌（HMAC-SHA256）存入 **HttpOnly Cookie**，JS 无法读取，降低 XSS 窃取风险。
- 令牌自带过期时间与随机 nonce，服务端用 `secrets.compare_digest` 做常量时间比对，防时序攻击。
- 密码使用 `hmac.compare_digest` 比对，同样避免时序侧信道。
- 登录失败按客户端 IP 计数，超过阈值后锁定，抵御暴力破解。
- 是否启用认证由 `AUTH_ENABLED` 控制：未配置 `AUTH_PASSWORD` 时自动关闭，便于本地开发。
"""
import os
import time
import hmac
import json
import base64
import hashlib
import secrets
import threading

import config
import users_store as _us_mod

# Cookie 名与令牌有效期
COOKIE_NAME = "lg_session"
SESSION_TTL = 7 * 24 * 3600        # 记住我：7 天
SESSION_TTL_SHORT = 12 * 3600      # 未勾选：12 小时

# 登录限流：每个 IP 连续失败 MAX_FAILS 次后锁定 LOCK_SECONDS 秒
MAX_FAILS = 8
LOCK_SECONDS = 300
FAIL_WINDOW = 900

_lock = threading.Lock()
_fails: dict[str, list[float]] = {}

# 用户表（懒加载：首次校验时才建表/播种，避免 import 副作用）
_store: _us_mod.UserStore | None = None


def users_db() -> _us_mod.UserStore:
    global _store
    if _store is None:
        _store = _us_mod.UserStore(config.DATA_DIR)
    return _store


def enabled() -> bool:
    """是否启用登录校验（未配置账号密码则视为关闭）。"""
    return bool(config.AUTH_USERNAME and config.AUTH_PASSWORD)


def _secret() -> bytes:
    return config.AUTH_SECRET.encode("utf-8")


# ---------------- 会话令牌 ----------------
def make_session(username: str, ttl: int) -> str:
    """生成签名令牌：base64(payload).base64(signature)"""
    payload = {
        "u": username,
        "exp": int(time.time()) + ttl,
        "n": secrets.token_hex(8),
    }
    raw = json.dumps(payload, separators=(",", ":"), sort_keys=True).encode("utf-8")
    b = base64.urlsafe_b64encode(raw).decode("ascii").rstrip("=")
    sig = hmac.new(_secret(), b.encode("ascii"), hashlib.sha256).digest()
    return b + "." + base64.urlsafe_b64encode(sig).decode("ascii").rstrip("=")


def verify_session(token: str | None) -> str | None:
    """校验令牌，通过则返回用户名，否则返回 None。"""
    if not token or "." not in token:
        return None
    b, _, sig_b64 = token.partition(".")
    try:
        pad = "=" * (-len(sig_b64) % 4)
        sig = base64.urlsafe_b64decode(sig_b64 + pad)
    except Exception:
        return None
    expected = hmac.new(_secret(), b.encode("ascii"), hashlib.sha256).digest()
    if not hmac.compare_digest(sig, expected):
        return None
    try:
        pad = "=" * (-len(b) % 4)
        payload = json.loads(base64.urlsafe_b64decode(b + pad))
    except Exception:
        return None
    if int(payload.get("exp", 0)) < time.time():
        return None
    return payload.get("u")


# ---------------- 凭据校验 ----------------
def check_credentials(username: str, password: str) -> dict | None:
    """查 users 表校验（admin 已由 UserStore 用 .env 配置播种）。

    返回 {username, role}；校验失败返回 None。
    """
    return users_db().verify_credentials(username or "", password or "")


# ---------------- 登录限流 ----------------
def is_locked(ip: str) -> int:
    """返回剩余锁定秒数，0 表示未锁定。"""
    now = time.time()
    with _lock:
        stamps = [t for t in _fails.get(ip, []) if now - t < FAIL_WINDOW]
        _fails[ip] = stamps
        if len(stamps) >= MAX_FAILS:
            remain = int(LOCK_SECONDS - (now - stamps[-1]))
            return max(remain, 0)
    return 0


def record_fail(ip: str) -> None:
    with _lock:
        _fails.setdefault(ip, []).append(time.time())


def clear_fails(ip: str) -> None:
    with _lock:
        _fails.pop(ip, None)
