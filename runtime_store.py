"""运行时模型/提供商存储：providers / models / model_call_log 表（scope=system|user）。

设计说明
--------
- 模型分级：system 模型（管理员维护、所有用户可用）与 user 模型（用户私有）。
- providers 表按 (name, scope, owner) 唯一；其下的模型挂在 models 表
  （provider 列关联），查询时按 provider 的 scope/owner 匹配。
- 默认表（.env 的 ALLOWED_MODELS）迁移为 provider='' 且 scope='system' 的系统模型；
  旧 models.json / providers.json 首次启动时自动导入，随后 JSON 仅作备份不再读取。
- resolve 语义与旧版一致：系统默认模型命中返回 (None, None) 走 .env 凭据，
  否则返回命中的提供商 base_url/api_key。

模型元数据扩展（对齐「模型库」设计）
------------------------------------
在原有 name/provider/scope/owner 之上，为 models 表补充：
  - model_type    1=LLM 2=向量 3=多模态（默认 1）
  - status        0=下线 1=上线（默认 1）
  - context_length 上下文窗口（可空）
  - description   描述（默认 ''）
  - provider_model 服务商侧真实模型名（默认 ''，为空则回退用 name）
providers 表补充：
  - code          服务商编码（deepseek/zhipu/qwen...，默认 ''）
  - status        0=禁用 1=启用（默认 1）
新增 model_call_log 表：记录每次模型调用的 token 用量 / 费用 / 成败 / 耗时。
以上均通过幂等 ALTER TABLE 迁移（SQLite 无 ADD COLUMN IF NOT EXISTS，
用 PRAGMA table_info 探测后按需添加），对既有库零破坏。
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
            -- 模型调用日志：只记事实（用量/费用/成败/耗时），不存请求响应正文
            CREATE TABLE IF NOT EXISTS model_call_log (
                id                INTEGER PRIMARY KEY AUTOINCREMENT,
                model             TEXT NOT NULL,               -- 模型名（models.name）
                provider          TEXT NOT NULL DEFAULT '',    -- 提供商名（'' 表示默认组）
                user_id           TEXT NOT NULL DEFAULT '',
                prompt_tokens     INTEGER NOT NULL DEFAULT 0,
                completion_tokens INTEGER NOT NULL DEFAULT 0,
                total_tokens      INTEGER NOT NULL DEFAULT 0,
                cost              REAL NOT NULL DEFAULT 0,     -- 消耗费用
                success           INTEGER NOT NULL DEFAULT 0,  -- 0失败 1成功
                cost_time         INTEGER NOT NULL DEFAULT 0,  -- 耗时ms
                estimated         INTEGER NOT NULL DEFAULT 0,  -- token 是否为估算值
                create_time       REAL NOT NULL
            );
            CREATE INDEX IF NOT EXISTS idx_call_model ON model_call_log(model);
            CREATE INDEX IF NOT EXISTS idx_call_time  ON model_call_log(create_time);
            """)
            # 幂等列迁移（对既有库补列，重复执行安全）
            self._migrate_columns(conn)
            # 旧 JSON 迁移（仅当对应表为空时执行一次）
            self._migrate_json(conn)

    @staticmethod
    def _has_col(conn: sqlite3.Connection, table: str, col: str) -> bool:
        return any(r[1] == col for r in conn.execute(f"PRAGMA table_info({table})"))

    def _migrate_columns(self, conn: sqlite3.Connection):
        """为既有库补齐模型库扩展列（幂等）。"""
        model_cols = [
            ("model_type", "INTEGER NOT NULL DEFAULT 1"),   # 1LLM 2向量 3多模态
            ("status", "INTEGER NOT NULL DEFAULT 1"),        # 0下线 1上线
            ("context_length", "INTEGER"),                   # 上下文窗口，可空
            ("description", "TEXT NOT NULL DEFAULT ''"),
            ("provider_model", "TEXT NOT NULL DEFAULT ''"),  # 服务商侧真实模型名
        ]
        for col, ddl in model_cols:
            if not self._has_col(conn, "models", col):
                conn.execute(f"ALTER TABLE models ADD COLUMN {col} {ddl}")
        prov_cols = [
            ("code", "TEXT NOT NULL DEFAULT ''"),            # 服务商编码
            ("status", "INTEGER NOT NULL DEFAULT 1"),        # 0禁用 1启用
        ]
        for col, ddl in prov_cols:
            if not self._has_col(conn, "providers", col):
                conn.execute(f"ALTER TABLE providers ADD COLUMN {col} {ddl}")
        # 调用日志：token 是否估算（后加列，兼容既有库）
        if self._has_col(conn, "model_call_log", "id") and not self._has_col(conn, "model_call_log", "estimated"):
            conn.execute("ALTER TABLE model_call_log ADD COLUMN estimated INTEGER NOT NULL DEFAULT 0")

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

    def add_model(self, name: str, provider: str = "", scope: str = "user", owner: str = "",
                  model_type: int = 1, status: int = 1, context_length: int | None = None,
                  description: str = "", provider_model: str = "") -> bool:
        """INSERT OR IGNORE：返回 rowcount>0 才算真正插入（已存在返回 False）。
        注意：不吞 OperationalError（database is locked 等应显式失败，便于发现）。
        扩展字段仅在新插入时写入（同名模型重复添加不覆盖）。"""
        cur = self._conn().execute(
            "INSERT OR IGNORE INTO models "
            "(name, provider, scope, owner, created_at, model_type, status, context_length, description, provider_model) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (name, provider, scope, owner, time.time(),
             int(model_type), int(status), context_length, description or "", provider_model or ""),
        )
        self._conn().commit()
        return cur.rowcount > 0

    def get_model_meta(self, name: str, provider: str = "", scope: str = "system",
                       owner: str = "") -> dict | None:
        """取模型的扩展元数据（含 model_type/status/context_length/description/provider_model）。"""
        row = self._conn().execute(
            "SELECT name, provider, scope, owner, model_type, status, context_length, description, provider_model "
            "FROM models WHERE name=? AND provider=? AND scope=? AND owner=?",
            (name, provider, scope, owner),
        ).fetchone()
        return dict(row) if row else None

    def set_model_meta(self, name: str, provider: str = "", scope: str = "system", owner: str = "",
                       **fields) -> bool:
        """更新模型扩展字段（model_type/status/context_length/description/provider_model）。
        仅允许白名单列，防止 SQL 注入。"""
        allowed = {"model_type", "status", "context_length", "description", "provider_model"}
        cols = {k: v for k, v in fields.items() if k in allowed}
        if not cols:
            return False
        sets = ", ".join(f"{k}=?" for k in cols)
        cur = self._conn().execute(
            f"UPDATE models SET {sets} WHERE name=? AND provider=? AND scope=? AND owner=?",
            (*cols.values(), name, provider, scope, owner),
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
            "SELECT name, scope, owner, base_url, api_key, code, status FROM providers "
            "WHERE scope='system' OR (scope='user' AND owner=?) ORDER BY created_at ASC",
            (owner,),
        ).fetchall()
        out = []
        for r in rows:
            mrows = self._conn().execute(
                "SELECT name, model_type, status, provider_model FROM models "
                "WHERE provider=? AND scope=? AND owner=? ORDER BY created_at ASC",
                (r["name"], r["scope"], r["owner"]),
            ).fetchall()
            out.append({
                "name": r["name"], "scope": r["scope"], "owner": r["owner"],
                "base_url": r["base_url"], "api_key": r["api_key"],
                "code": r["code"], "status": r["status"],
                "models": [m["name"] for m in mrows],
                "model_meta": [
                    {"name": m["name"], "model_type": m["model_type"],
                     "status": m["status"], "provider_model": m["provider_model"]}
                    for m in mrows
                ],
            })
        return out

    def get_provider(self, name: str, scope: str, owner: str = "") -> dict | None:
        row = self._conn().execute(
            "SELECT name, scope, owner, base_url, api_key, code, status FROM providers "
            "WHERE name=? AND scope=? AND owner=?",
            (name, scope, owner),
        ).fetchone()
        return dict(row) if row else None

    def add_provider(self, name: str, base_url: str, api_key: str, scope: str = "user",
                     owner: str = "", code: str = "", status: int = 1) -> bool:
        try:
            self._conn().execute(
                "INSERT INTO providers (name, scope, owner, base_url, api_key, created_at, code, status) "
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                (name, scope, owner, base_url, api_key, time.time(), code or "", int(status)),
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

    def resolve_full(self, name: str, owner: str = "") -> dict:
        """模型名 → 调用所需的全部信息（对齐模型库「按 model_code 取服务商信息」用法）。

        查找顺序与 resolve 一致：
          1) 系统默认组（provider='' 且 scope='system'）→ resolved=False，走 .env 凭据；
          2) 系统提供商下的模型；
          3) 该用户自己的默认组模型（provider='' 且 scope='user'）；
          4) 该用户自己的提供商下的模型。
        返回 {base_url, api_key, provider, provider_model, model_type, context_length,
              scope, resolved}。
        """
        out = {"base_url": None, "api_key": None, "provider": "", "provider_model": "",
               "model_type": 1, "context_length": None, "scope": "system", "resolved": False}

        # 1) 系统默认组（走 .env）
        r = self._conn().execute(
            "SELECT provider, model_type, context_length FROM models "
            "WHERE name=? AND provider='' AND scope='system' LIMIT 1",
            (name,),
        ).fetchone()
        if r:
            out.update({"provider": "", "resolved": False, "scope": "system",
                        "model_type": r["model_type"] or 1, "context_length": r["context_length"]})
            return out
        # 2) 系统提供商 → 3) 用户默认组 → 4) 用户提供商
        for scope, owner_key in (("system", ""), ("user", owner)):
            # 提供商下的模型（join providers 取 base_url/api_key）
            r = self._conn().execute(
                "SELECT p.base_url, p.api_key, m.provider, m.provider_model, m.model_type, m.context_length "
                "FROM providers p JOIN models m "
                "ON m.provider=p.name AND m.scope=p.scope AND m.owner=p.owner "
                "WHERE p.scope=? AND p.owner=? AND m.name=? LIMIT 1",
                (scope, owner_key, name),
            ).fetchone()
            if r:
                out.update({
                    "base_url": r["base_url"] or None, "api_key": r["api_key"] or None,
                    "provider": r["provider"], "provider_model": r["provider_model"] or "",
                    "model_type": r["model_type"] or 1, "context_length": r["context_length"],
                    "scope": scope, "resolved": True,
                })
                return out
            # 用户默认组（provider='' 且 scope='user'）→ 走 .env，但保留元数据
            if scope == "user" and owner_key:
                r2 = self._conn().execute(
                    "SELECT model_type, context_length FROM models "
                    "WHERE name=? AND provider='' AND scope='user' AND owner=? LIMIT 1",
                    (name, owner_key),
                ).fetchone()
                if r2:
                    out.update({"provider": "", "resolved": False, "scope": "user",
                                "model_type": r2["model_type"] or 1,
                                "context_length": r2["context_length"]})
                    return out
        return out

    # ---------- 调用日志 ----------
    def log_call(self, model: str, provider: str = "", user_id: str = "",
                 prompt_tokens: int = 0, completion_tokens: int = 0, cost: float = 0.0,
                 success: bool = True, cost_time: int = 0, estimated: bool = False) -> None:
        """记录一次模型调用。任何异常都吞掉——日志失败绝不能影响主流程。

        estimated=True 表示 token 数为估算值（服务商未返回 usage 时的兜底）。
        """
        try:
            total = int(prompt_tokens) + int(completion_tokens)
            self._conn().execute(
                "INSERT INTO model_call_log "
                "(model, provider, user_id, prompt_tokens, completion_tokens, total_tokens, "
                " cost, success, cost_time, create_time, estimated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                (model, provider or "", user_id or "", int(prompt_tokens), int(completion_tokens),
                 total, float(cost), 1 if success else 0, int(cost_time), time.time(),
                 1 if estimated else 0),
            )
            self._conn().commit()
        except Exception:
            pass

    def call_stats(self, model: str = "", days: int = 7) -> list[dict]:
        """近 N 天按模型聚合：调用量 / 成功率 / 平均耗时 / 总 token / 总费用。"""
        since = time.time() - days * 86400
        where = "WHERE create_time >= ?"
        params: list = [since]
        if model:
            where += " AND model = ?"
            params.append(model)
        rows = self._conn().execute(
            f"SELECT model, provider, COUNT(*) AS calls, SUM(success) AS ok_calls, "
            f"AVG(cost_time) AS avg_ms, SUM(total_tokens) AS total_tokens, SUM(cost) AS total_cost, "
            f"SUM(estimated) AS est_calls "
            f"FROM model_call_log {where} GROUP BY model, provider ORDER BY calls DESC",
            params,
        ).fetchall()
        out = []
        for r in rows:
            calls = r["calls"] or 0
            out.append({
                "model": r["model"], "provider": r["provider"], "calls": calls,
                "ok_calls": r["ok_calls"] or 0,
                "success_rate": round((r["ok_calls"] or 0) / calls * 100, 2) if calls else 0.0,
                "avg_ms": round(r["avg_ms"] or 0, 1),
                "total_tokens": r["total_tokens"] or 0,
                "estimated_calls": r["est_calls"] or 0,
                "total_cost": round(r["total_cost"] or 0, 4),
            })
        return out

    def purge_user(self, owner: str) -> None:
        """删除用户时级联清理其 user 作用域的模型与提供商（防孤儿数据）。"""
        conn = self._conn()
        try:
            with conn:
                conn.execute("DELETE FROM models WHERE scope='user' AND owner=?", (owner,))
                conn.execute("DELETE FROM providers WHERE scope='user' AND owner=?", (owner,))
        except sqlite3.OperationalError:
            raise
