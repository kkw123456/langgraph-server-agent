"""用户表存储：多用户凭据与角色（SQLite，与 app.db 同库）。

设计说明
--------
- users 表：username 唯一主键，密码 salt+sha256 存储，role 区分 admin/user。
- 首次初始化时若表为空，用 config.AUTH_USERNAME/AUTH_PASSWORD 播种 admin 账号，
  保证原有 .env 单用户配置无缝升级为多用户。
- 连接管理与 ConversationStore 一致（threading.local + WAL）。
"""
import os
import time
import hashlib
import sqlite3
import threading

import config

SCHEMA = """
CREATE TABLE IF NOT EXISTS users (
    username      TEXT PRIMARY KEY,
    password_hash TEXT NOT NULL,
    salt          TEXT NOT NULL,
    role          TEXT NOT NULL DEFAULT 'user',  -- admin | user
    created_at    REAL NOT NULL
);
"""

# 角色查询缓存：用户/角色在运行期基本不变，避免每个请求都查库
_role_cache: dict[str, str] = {}


def _hash(password: str, salt: str) -> str:
    return hashlib.sha256((salt + password).encode("utf-8")).hexdigest()


class UserStore:
    def __init__(self, data_dir: str):
        os.makedirs(data_dir, exist_ok=True)
        self.db_path = os.path.join(data_dir, "app.db")
        self._local = threading.local()
        self._init_db()

    def _conn(self) -> sqlite3.Connection:
        conn = getattr(self._local, "conn", None)
        if conn is None:
            conn = sqlite3.connect(self.db_path, timeout=15.0)
            conn.row_factory = sqlite3.Row
            conn.execute("PRAGMA journal_mode=WAL")
            conn.execute("PRAGMA synchronous=NORMAL")
            self._local.conn = conn
        return conn

    def _init_db(self):
        conn = self._conn()
        with conn:
            conn.executescript(SCHEMA)
            # 播种 admin：仅当用户表为空且 .env 配置了账号密码
            n = conn.execute("SELECT COUNT(*) FROM users").fetchone()[0]
            if not n and config.AUTH_USERNAME and config.AUTH_PASSWORD:
                self.create_user(config.AUTH_USERNAME, config.AUTH_PASSWORD, role="admin")

    # ---------- 凭据 ----------
    def verify_credentials(self, username: str, password: str) -> dict | None:
        """校验通过返回 {username, role}，否则 None。"""
        if not username or not password:
            return None
        row = self._conn().execute(
            "SELECT username, password_hash, salt, role FROM users WHERE username = ?",
            (username,),
        ).fetchone()
        if row is None:
            return None
        if _hash(password, row["salt"]) != row["password_hash"]:
            return None
        _role_cache[row["username"]] = row["role"]
        return {"username": row["username"], "role": row["role"]}

    def get_role(self, username: str) -> str:
        """用户角色：admin | user；未知用户返回 ''。"""
        if not username:
            return ""
        if username in _role_cache:
            return _role_cache[username]
        row = self._conn().execute(
            "SELECT role FROM users WHERE username = ?", (username,)
        ).fetchone()
        role = row["role"] if row else ""
        if role:
            _role_cache[username] = role
        return role

    # ---------- 管理 ----------
    def create_user(self, username: str, password: str, role: str = "user") -> dict | None:
        username = (username or "").strip()
        if not username or not password:
            return None
        salt = hashlib.sha256(f"{username}{time.time()}".encode()).hexdigest()[:16]
        try:
            self._conn().execute(
                "INSERT INTO users (username, password_hash, salt, role, created_at) VALUES (?, ?, ?, ?, ?)",
                (username, _hash(password, salt), salt, role if role in ("admin", "user") else "user", time.time()),
            )
            self._conn().commit()
        except sqlite3.IntegrityError:
            self._conn().rollback()  # 失败后释放隐式事务，避免残留
            return None
        _role_cache[username] = role if role in ("admin", "user") else "user"
        return {"username": username, "role": _role_cache[username]}

    def delete_user(self, username: str) -> bool:
        cur = self._conn().execute("DELETE FROM users WHERE username = ?", (username,))
        self._conn().commit()
        _role_cache.pop(username, None)
        return cur.rowcount > 0

    def list_users(self) -> list[dict]:
        rows = self._conn().execute(
            "SELECT username, role, created_at FROM users ORDER BY created_at ASC"
        ).fetchall()
        return [dict(r) for r in rows]
