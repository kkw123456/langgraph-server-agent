"""工作台扩展存储：项目空间、自动化任务、资料库（SQLite 持久化）。

与 ``conversation.store`` 共用同一个 ``data/app.db``，但表结构相互独立，
避免把领域逻辑塞进会话存储里。

- 项目空间（projects）：把多个会话组织在一起，便于多人/多任务协同。
- 自动化（automations）：定时/触发式任务，由 server 的调度循环驱动。
- 资料库（library_items）：收藏的知识条目或文件引用。
"""
import os
import json
import time
import uuid
import sqlite3
import threading

SCHEMA = """
CREATE TABLE IF NOT EXISTS projects (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    color       TEXT NOT NULL DEFAULT '#2f6feb',
    created_at  REAL NOT NULL,
    updated_at  REAL NOT NULL
);

-- 会话归属于项目（project_id 为空表示未归类）
CREATE TABLE IF NOT EXISTS project_conversations (
    project_id  TEXT NOT NULL,
    cid         TEXT NOT NULL,
    added_at    REAL NOT NULL,
    PRIMARY KEY (project_id, cid),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS automations (
    id           TEXT PRIMARY KEY,
    name         TEXT NOT NULL,
    prompt       TEXT NOT NULL,
    schedule     TEXT NOT NULL DEFAULT 'daily',  -- daily | weekly | hourly | manual
    at_time      TEXT NOT NULL DEFAULT '09:00',  -- HH:MM
    enabled      INTEGER NOT NULL DEFAULT 1,
    last_run_at  REAL,
    last_status  TEXT,
    run_count    INTEGER NOT NULL DEFAULT 0,
    created_at   REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS library_items (
    id          TEXT PRIMARY KEY,
    title       TEXT NOT NULL,
    kind        TEXT NOT NULL DEFAULT 'note',  -- note | link | file
    content     TEXT NOT NULL DEFAULT '',
    tags        TEXT NOT NULL DEFAULT '',      -- 逗号分隔
    created_at  REAL NOT NULL,
    updated_at  REAL NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_auto_enabled ON automations(enabled);
CREATE INDEX IF NOT EXISTS idx_lib_updated ON library_items(updated_at);
"""


class WorkbenchStore:
    """项目 / 自动化 / 资料库的统一存储。"""

    def __init__(self, data_dir: str):
        os.makedirs(data_dir, exist_ok=True)
        self.db_path = os.path.join(data_dir, "app.db")
        self._local = threading.local()
        self._init_db()

    # ---------- 连接管理（与 ConversationStore 同策略） ----------
    def _conn(self) -> sqlite3.Connection:
        conn = getattr(self._local, "conn", None)
        if conn is None:
            conn = sqlite3.connect(self.db_path, timeout=15.0)
            conn.row_factory = sqlite3.Row
            conn.execute("PRAGMA journal_mode=WAL")
            conn.execute("PRAGMA synchronous=NORMAL")
            conn.execute("PRAGMA foreign_keys=ON")
            self._local.conn = conn
        return conn

    def _init_db(self):
        conn = self._conn()
        with conn:
            conn.executescript(SCHEMA)

    @staticmethod
    def _now() -> float:
        return time.time()

    # ===================== 项目空间 =====================
    def list_projects(self) -> list:
        conn = self._conn()
        rows = conn.execute(
            "SELECT id, name, description, color, created_at, updated_at "
            "FROM projects ORDER BY updated_at DESC"
        ).fetchall()
        out = []
        for r in rows:
            d = dict(r)
            d["conv_count"] = conn.execute(
                "SELECT COUNT(*) FROM project_conversations WHERE project_id = ?",
                (d["id"],),
            ).fetchone()[0]
            d["conv_ids"] = [
                x[0] for x in conn.execute(
                    "SELECT cid FROM project_conversations WHERE project_id = ? "
                    "ORDER BY added_at DESC",
                    (d["id"],),
                ).fetchall()
            ]
            out.append(d)
        return out

    def get_project(self, pid: str):
        for p in self.list_projects():
            if p["id"] == pid:
                return p
        return None

    def create_project(self, name: str, description: str = "", color: str = "#2f6feb") -> dict:
        pid = uuid.uuid4().hex
        now = self._now()
        conn = self._conn()
        with conn:
            conn.execute(
                "INSERT INTO projects (id, name, description, color, created_at, updated_at) "
                "VALUES (?, ?, ?, ?, ?, ?)",
                (pid, name, description, color, now, now),
            )
        return {"id": pid, "name": name, "description": description,
                "color": color, "created_at": now, "updated_at": now,
                "conv_count": 0, "conv_ids": []}

    def update_project(self, pid: str, name: str | None = None,
                       description: str | None = None, color: str | None = None) -> bool:
        fields, vals = [], []
        for k, v in (("name", name), ("description", description), ("color", color)):
            if v is not None:
                fields.append(f"{k} = ?")
                vals.append(v)
        if not fields:
            return False
        fields.append("updated_at = ?")
        vals.extend([self._now(), pid])
        conn = self._conn()
        with conn:
            cur = conn.execute(f"UPDATE projects SET {', '.join(fields)} WHERE id = ?", vals)
        return cur.rowcount > 0

    def delete_project(self, pid: str) -> bool:
        conn = self._conn()
        with conn:
            conn.execute("DELETE FROM project_conversations WHERE project_id = ?", (pid,))
            cur = conn.execute("DELETE FROM projects WHERE id = ?", (pid,))
        return cur.rowcount > 0

    def add_conv_to_project(self, pid: str, cid: str) -> bool:
        conn = self._conn()
        with conn:
            conn.execute(
                "INSERT OR IGNORE INTO project_conversations (project_id, cid, added_at) "
                "VALUES (?, ?, ?)",
                (pid, cid, self._now()),
            )
            conn.execute("UPDATE projects SET updated_at = ? WHERE id = ?", (self._now(), pid))
        return True

    def remove_conv_from_project(self, pid: str, cid: str) -> bool:
        conn = self._conn()
        with conn:
            cur = conn.execute(
                "DELETE FROM project_conversations WHERE project_id = ? AND cid = ?",
                (pid, cid),
            )
        return cur.rowcount > 0

    # ===================== 自动化 =====================
    def list_automations(self) -> list:
        rows = self._conn().execute(
            "SELECT * FROM automations ORDER BY created_at DESC"
        ).fetchall()
        return [self._auto_row(r) for r in rows]

    def get_automation(self, aid: str):
        r = self._conn().execute("SELECT * FROM automations WHERE id = ?", (aid,)).fetchone()
        return self._auto_row(r) if r else None

    @staticmethod
    def _auto_row(r: sqlite3.Row) -> dict:
        d = dict(r)
        d["enabled"] = bool(d["enabled"])
        return d

    def create_automation(self, name: str, prompt: str, schedule: str = "daily",
                          at_time: str = "09:00", enabled: bool = True) -> dict:
        aid = uuid.uuid4().hex
        conn = self._conn()
        with conn:
            conn.execute(
                "INSERT INTO automations (id, name, prompt, schedule, at_time, enabled, created_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?)",
                (aid, name, prompt, schedule, at_time, 1 if enabled else 0, self._now()),
            )
        return self.get_automation(aid)

    def update_automation(self, aid: str, **kw) -> bool:
        allowed = ("name", "prompt", "schedule", "at_time", "enabled",
                   "last_run_at", "last_status", "run_count")
        fields, vals = [], []
        for k in allowed:
            if k in kw and kw[k] is not None:
                v = kw[k]
                if k == "enabled":
                    v = 1 if v else 0
                fields.append(f"{k} = ?")
                vals.append(v)
        if not fields:
            return False
        vals.append(aid)
        conn = self._conn()
        with conn:
            cur = conn.execute(f"UPDATE automations SET {', '.join(fields)} WHERE id = ?", vals)
        return cur.rowcount > 0

    def delete_automation(self, aid: str) -> bool:
        conn = self._conn()
        with conn:
            cur = conn.execute("DELETE FROM automations WHERE id = ?", (aid,))
        return cur.rowcount > 0

    # ===================== 资料库 =====================
    def list_library(self, q: str = "") -> list:
        if q:
            like = f"%{q}%"
            rows = self._conn().execute(
                "SELECT * FROM library_items WHERE title LIKE ? OR content LIKE ? "
                "OR tags LIKE ? ORDER BY updated_at DESC",
                (like, like, like),
            ).fetchall()
        else:
            rows = self._conn().execute(
                "SELECT * FROM library_items ORDER BY updated_at DESC"
            ).fetchall()
        return [dict(r) for r in rows]

    def create_library_item(self, title: str, content: str = "",
                            kind: str = "note", tags: str = "") -> dict:
        iid = uuid.uuid4().hex
        now = self._now()
        conn = self._conn()
        with conn:
            conn.execute(
                "INSERT INTO library_items (id, title, kind, content, tags, created_at, updated_at) "
                "VALUES (?, ?, ?, ?, ?, ?, ?)",
                (iid, title, kind, content, tags, now, now),
            )
        return {"id": iid, "title": title, "kind": kind, "content": content,
                "tags": tags, "created_at": now, "updated_at": now}

    def update_library_item(self, iid: str, **kw) -> bool:
        allowed = ("title", "content", "kind", "tags")
        fields, vals = [], []
        for k in allowed:
            if k in kw and kw[k] is not None:
                fields.append(f"{k} = ?")
                vals.append(kw[k])
        if not fields:
            return False
        fields.append("updated_at = ?")
        vals.extend([self._now(), iid])
        conn = self._conn()
        with conn:
            cur = conn.execute(f"UPDATE library_items SET {', '.join(fields)} WHERE id = ?", vals)
        return cur.rowcount > 0

    def delete_library_item(self, iid: str) -> bool:
        conn = self._conn()
        with conn:
            cur = conn.execute("DELETE FROM library_items WHERE id = ?", (iid,))
        return cur.rowcount > 0
