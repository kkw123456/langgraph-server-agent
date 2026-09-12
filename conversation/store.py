"""会话存储：维护多会话元数据与消息历史（SQLite 持久化）。

设计说明
--------
- 元数据与消息统一存入单一 SQLite 文件 ``data/app.db``（与 LangGraph 的
  检查点库 ``data/checkpoints.db`` 分离，避免两者读写互相干扰）。
- 所有 SQL 均使用参数化绑定，杜绝注入。
- 通过 ``threading.local`` 为每个线程持有独立连接（sqlite3 连接不可跨线程
  共享），并开启 WAL 模式以提升并发读写表现。
- 对外接口与旧的 JSON 实现完全一致，调用方（server.py）无需改动。
"""
import os
import json
import time
import uuid
import sqlite3
import threading

SCHEMA = """
CREATE TABLE IF NOT EXISTS conversations (
    id          TEXT PRIMARY KEY,
    title       TEXT NOT NULL DEFAULT '新对话',
    created_at  REAL NOT NULL,
    updated_at  REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    cid         TEXT NOT NULL,
    seq         INTEGER NOT NULL,
    role        TEXT NOT NULL,
    content     TEXT NOT NULL DEFAULT '',
    tool_calls  TEXT,
    reasoning   TEXT,
    FOREIGN KEY (cid) REFERENCES conversations(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_messages_cid_seq ON messages(cid, seq);
"""


class ConversationStore:
    def __init__(self, data_dir: str):
        os.makedirs(data_dir, exist_ok=True)
        self.db_path = os.path.join(data_dir, "app.db")
        self._local = threading.local()
        self._init_db()

    # ---------- 连接管理 ----------
    def _conn(self) -> sqlite3.Connection:
        """获取当前线程的连接（惰性创建，复用）。"""
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
            # 旧库迁移：messages 表补 reasoning（思考链）列
            cols = [r[1] for r in conn.execute("PRAGMA table_info(messages)").fetchall()]
            if "reasoning" not in cols:
                conn.execute("ALTER TABLE messages ADD COLUMN reasoning TEXT")

    # ---------- 元数据 ----------
    def list(self) -> list:
        rows = self._conn().execute(
            "SELECT id, title, created_at, updated_at "
            "FROM conversations ORDER BY updated_at DESC"
        ).fetchall()
        return [dict(r) for r in rows]

    def get(self, cid: str):
        row = self._conn().execute(
            "SELECT id, title, created_at, updated_at FROM conversations WHERE id = ?",
            (cid,),
        ).fetchone()
        return dict(row) if row else None

    def create(self, title: str = "新对话") -> dict:
        cid = uuid.uuid4().hex
        now = time.time()
        conn = self._conn()
        with conn:
            conn.execute(
                "INSERT INTO conversations (id, title, created_at, updated_at) "
                "VALUES (?, ?, ?, ?)",
                (cid, title, now, now),
            )
        return {"id": cid, "title": title, "created_at": now, "updated_at": now}

    def delete(self, cid: str):
        conn = self._conn()
        with conn:
            # messages 依赖外键级联删除
            conn.execute("DELETE FROM messages WHERE cid = ?", (cid,))
            conn.execute("DELETE FROM conversations WHERE id = ?", (cid,))

    def rename(self, cid: str, title: str):
        conn = self._conn()
        with conn:
            conn.execute(
                "UPDATE conversations SET title = ? WHERE id = ?", (title, cid)
            )

    def touch(self, cid: str):
        conn = self._conn()
        with conn:
            conn.execute(
                "UPDATE conversations SET updated_at = ? WHERE id = ?",
                (time.time(), cid),
            )

    # ---------- 消息 ----------
    def load_messages(self, cid: str) -> list:
        rows = self._conn().execute(
            "SELECT role, content, tool_calls FROM messages "
            "WHERE cid = ? ORDER BY seq ASC",
            (cid,),
        ).fetchall()
        out = []
        for r in rows:
            m = {"role": r["role"], "content": r["content"]}
            if r["tool_calls"]:
                try:
                    m["tool_calls"] = json.loads(r["tool_calls"])
                except Exception:
                    m["tool_calls"] = []
            # 思考链（deepseek/ark 等模型）：历史消息一并返回，前端默认折叠展示
            reasoning = r["reasoning"] if "reasoning" in r.keys() else None
            if reasoning:
                m["reasoning"] = reasoning
            out.append(m)
        return out

    def save_messages(self, cid: str, messages: list):
        """全量覆盖写入某会话的消息列表（单事务，保证原子性）。"""
        conn = self._conn()
        with conn:
            conn.execute("DELETE FROM messages WHERE cid = ?", (cid,))
            conn.executemany(
                "INSERT INTO messages (cid, seq, role, content, tool_calls, reasoning) "
                "VALUES (?, ?, ?, ?, ?, ?)",
                [
                    (
                        cid,
                        i,
                        m.get("role", ""),
                        m.get("content", "") or "",
                        json.dumps(m["tool_calls"], ensure_ascii=False)
                        if m.get("tool_calls")
                        else None,
                        m.get("reasoning") or None,
                    )
                    for i, m in enumerate(messages)
                ],
            )
