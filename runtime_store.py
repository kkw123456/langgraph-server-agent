"""运行时模型/提供商存储：models 与 providers 表（scope=system|user）。

设计说明
--------
- 模型分级：system 模型（管理员维护、所有用户可用）与 user 模型（用户私有）。
- providers 表按 (name, scope, owner) 唯一；其下的模型挂在 models 表
  （provider 列关联），查询时按 provider 的 scope/owner 匹配。
- 默认表（.env 的 ALLOWED_MODELS）迁移为 provider='' 且 scope='system' 的系统模型；
  旧 models.json / providers.json 首次启动时自动导入，随后 JSON 仅作备份不再读取。
- _resolve 语义与旧版一致：系统默认模型命中返回 (None, None) 走 .env 凭据，
  否则返回命中的提供商 base_url/api_key。
"""
import os
import json
import time
import sqlite3
import threading


class RuntimeStore:
    def __init__(self, data_dir: str, default_models: list[str]):
        os.makedirs(data_dir, exist_ok=True)
        self.db_path = os.path.join(data_dir, "app.db")
        self.default_models = [m for m in default_models if str(m).strip()]
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
            conn.executescript("""
            CREATE TABLE IF NOT EXISTS providers (
                name     TEXT NOT NULL,
                scope    TEXT NOT NULL DEFAULT 'system',  -- system | user
                owner    TEXT NOT NULL DEFAULT '',        -- scope=user 时的归属用户
                base_url TEXT NOT NULL DEFAULT '',
                api_key  TEXT NOT NULL DEFAULT '',
                created_at REAL NOT NULL,
                UNIQUE(name, scope, owner)
            );
            CREATE TABLE IF NOT EXISTS models (
                id       INTEGER PRIMARY KEY AUTOINCREMENT,
                name     TEXT NOT NULL,
                provider TEXT NOT NULL DEFAULT '',        -- '' 表示默认组（走 .env 凭据）
                scope    TEXT NOT NULL DEFAULT 'system',
                owner    TEXT NOT NULL DEFAULT '',
                created_at REAL NOT NULL,
                UNIQUE(name, provider, scope, owner)
            );
            CREATE INDEX IF NOT EXISTS idx_models_owner ON models(scope, owner);
            """)
            # 旧 JSON 迁移（仅当对应表为空时执行一次）
            self._migrate_json(conn)

    def _migrate_json(self, conn: sqlite3.Connection):
        n_sys = conn.execute(
            "SELECT COUNT(*) FROM models WHERE scope='system' AND provider=''"
        ).fetchone()[0]
        if not n_sys and self.default_models:
            now = time.time()
            for m in self.default_models:
                conn.execute(
                    "INSERT OR IGNORE INTO models (name, provider, scope, owner, created_at) "
                    "VALUES (?, '', 'system', '', ?)",
                    (str(m).strip(), now),
                )
            # models.json 里可能有用户追加的（都并入系统模型）
            try:
                with open(os.path.join(os.path.dirname(self.db_path), "models.json")) as f:
                    for m in json.load(f):
                        conn.execute(
                            "INSERT OR IGNORE INTO models (name, provider, scope, owner, created_at) "
                            "VALUES (?, '', 'system', '', ?)",
                            (str(m).strip(), now),
                        )
            except Exception:
                pass
        n_prov = conn.execute("SELECT COUNT(*) FROM providers WHERE scope='system'").fetchone()[0]
        if not n_prov:
            try:
                with open(os.path.join(os.path.dirname(self.db_path), "providers.json")) as f:
                    ps = json.load(f)
                now = time.time()
                for p in ps or []:
                    name = (p.get("name") or "").strip()
                    if not name:
                        continue
                    conn.execute(
                        "INSERT OR IGNORE INTO providers (name, scope, owner, base_url, api_key, created_at) "
                        "VALUES (?, 'system', '', ?, ?, ?)",
                        (name, p.get("base_url") or "", p.get("api_key") or "", now),
                    )
                    for m in p.get("models") or []:
                        conn.execute(
                            "INSERT OR IGNORE INTO models (name, provider, scope, owner, created_at) "
                            "VALUES (?, ?, 'system', '', ?)",
                            (str(m).strip(), name, now),
                        )
            except Exception:
                pass

    # ---------- 模型 ----------
    def list_models(self, owner: str = "") -> list[str]:
        """用户可见模型：系统模型 + 本人用户模型（去重保序）。"""
        rows = self._conn().execute(
            "SELECT name FROM models WHERE scope='system' "
            "UNION SELECT name FROM models WHERE scope='user' AND owner=? "
            "ORDER BY name",
            (owner,),
        ).fetchall()
        seen: list[str] = []
        for r in rows:
            n = r["name"]
            if n and n not in seen:
                seen.append(n)
        return seen

    def list_default_models(self, owner: str = "") -> list[dict]:
        """默认组（provider=''）模型带 scope：供前端「系统/我的」分组。"""
        rows = self._conn().execute(
            "SELECT name, scope FROM models WHERE provider='' "
            "AND (scope='system' OR (scope='user' AND owner=?)) ORDER BY created_at ASC",
            (owner,),
        ).fetchall()
        out: list[dict] = []
        seen: set[str] = set()
        for r in rows:
            if r["name"] in seen:
                continue
            seen.add(r["name"])
            out.append({"name": r["name"], "scope": r["scope"]})
        return out

    def add_model(self, name: str, provider: str = "", scope: str = "user", owner: str = "") -> bool:
        """INSERT OR IGNORE：返回 rowcount>0 才算真正插入（已存在返回 False）。
        注意：不吞 OperationalError（database is locked 等应显式失败，便于发现）。"""
        cur = self._conn().execute(
            "INSERT OR IGNORE INTO models (name, provider, scope, owner, created_at) VALUES (?, ?, ?, ?, ?)",
            (name, provider, scope, owner, time.time()),
        )
        self._conn().commit()
        return cur.rowcount > 0

    def del_model(self, name: str, provider: str = "", scope: str = "user", owner: str = "") -> bool:
        cur = self._conn().execute(
            "DELETE FROM models WHERE name=? AND provider=? AND scope=? AND owner=?",
            (name, provider, scope, owner),
        )
        self._conn().commit()
        return cur.rowcount > 0

    def model_exists(self, name: str, owner: str = "") -> bool:
        row = self._conn().execute(
            "SELECT 1 FROM models WHERE name=? AND (scope='system' OR (scope='user' AND owner=?)) LIMIT 1",
            (name, owner),
        ).fetchone()
        return bool(row)

    # ---------- 提供商 ----------
    def list_providers(self, owner: str = "") -> list[dict]:
        """用户可见提供商（system + 本人 user），各带 models 数组；不回传 api_key 明文。"""
        rows = self._conn().execute(
            "SELECT name, scope, owner, base_url, api_key FROM providers "
            "WHERE scope='system' OR (scope='user' AND owner=?) ORDER BY created_at ASC",
            (owner,),
        ).fetchall()
        out = []
        for r in rows:
            mrows = self._conn().execute(
                "SELECT name FROM models WHERE provider=? AND scope=? AND owner=? ORDER BY created_at ASC",
                (r["name"], r["scope"], r["owner"]),
            ).fetchall()
            out.append({
                "name": r["name"], "scope": r["scope"], "owner": r["owner"],
                "base_url": r["base_url"], "api_key": r["api_key"],
                "models": [m["name"] for m in mrows],
            })
        return out

    def get_provider(self, name: str, scope: str, owner: str = "") -> dict | None:
        row = self._conn().execute(
            "SELECT name, scope, owner, base_url, api_key FROM providers WHERE name=? AND scope=? AND owner=?",
            (name, scope, owner),
        ).fetchone()
        return dict(row) if row else None

    def add_provider(self, name: str, base_url: str, api_key: str, scope: str = "user", owner: str = "") -> bool:
        try:
            self._conn().execute(
                "INSERT INTO providers (name, scope, owner, base_url, api_key, created_at) VALUES (?, ?, ?, ?, ?, ?)",
                (name, scope, owner, base_url, api_key, time.time()),
            )
            self._conn().commit()
            return True
        except sqlite3.IntegrityError:
            self._conn().rollback()  # 失败后释放隐式事务，避免残留
            return False

    def del_provider(self, name: str, scope: str, owner: str = "") -> bool:
        conn = self._conn()
        cur = conn.execute(
            "DELETE FROM providers WHERE name=? AND scope=? AND owner=?", (name, scope, owner)
        )
        conn.execute(
            "DELETE FROM models WHERE provider=? AND scope=? AND owner=?", (name, scope, owner)
        )
        conn.commit()
        return cur.rowcount > 0

    def del_provider_model(self, provider: str, model: str, scope: str, owner: str = "") -> bool:
        cur = self._conn().execute(
            "DELETE FROM models WHERE provider=? AND name=? AND scope=? AND owner=?",
            (provider, model, scope, owner),
        )
        self._conn().commit()
        return cur.rowcount > 0

    # ---------- 解析 ----------
    def resolve(self, name: str, owner: str = "") -> tuple[str | None, str | None]:
        """模型名 → (base_url, api_key)。系统默认组命中返回 (None, None) 走 .env。"""
        row = self._conn().execute(
            "SELECT 1 FROM models WHERE name=? AND provider='' AND scope='system' LIMIT 1",
            (name,),
        ).fetchone()
        if row:
            return (None, None)
        # 系统提供商优先，其次用户自己的提供商
        for scope, owner_key in (("system", ""), ("user", owner)):
            rows = self._conn().execute(
                "SELECT p.base_url, p.api_key FROM providers p JOIN models m "
                "ON m.provider=p.name AND m.scope=p.scope AND m.owner=p.owner "
                "WHERE p.scope=? AND p.owner=? AND m.name=? LIMIT 1",
                (scope, owner_key, name),
            ).fetchall()
            for r in rows:
                return (r["base_url"] or None, r["api_key"] or None)
        return (None, None)

    def purge_user(self, owner: str) -> None:
        """删除用户时级联清理其 user 作用域的模型与提供商（防孤儿数据）。"""
        conn = self._conn()
        try:
            with conn:
                conn.execute("DELETE FROM models WHERE scope='user' AND owner=?", (owner,))
                conn.execute("DELETE FROM providers WHERE scope='user' AND owner=?", (owner,))
        except sqlite3.OperationalError:
            raise
