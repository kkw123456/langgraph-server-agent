"""LangGraph 服务端 Agent —— FastAPI 后端。

- 登录认证：HttpOnly Cookie 会话，未登录跳转 /login；可通过 AUTH_USERNAME/PASSWORD 关闭。
- 多会话：每个会话对应一个 LangGraph thread_id，状态由 SqliteSaver 持久化。
- 工具调用：ReAct 图自动调用技能提供的工具；支持「自动 / 确认」两种权限模式。
- 技能管理：REST 接口启停 / 新建 / 删除自定义技能。
- 流式对话：WebSocket 推送 token、工具调用事件与（确认模式下）工具审批请求。
"""
import os
import json
import time
import base64
import asyncio
from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, Request, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from langgraph.types import Command
from langgraph.errors import GraphInterrupt

import config
import auth as authmod
import model_catalog
from skills.registry import SkillRegistry
from agent.builder import AgentManager
from conversation.store import ConversationStore
from workbench_store import WorkbenchStore
from users_store import UserStore
from runtime_store import RuntimeStore
from langchain_core.messages import ToolMessage
import workspace

# 确认模式下等待用户决策的最长等待时间（秒），超时视为全部拒绝
MODE_TIMEOUT = 600

# 默认模型表（.env 凭据可用）；首次启动迁移进 models 表的 system 默认组
ALLOWED_MODELS = [
    "ark-code-latest",
    "deepseek-chat",
    "deepseek-reasoner",
    "gpt-4o-mini",
    "gpt-4o",
]

# ---- 全局单例 ----
registry = SkillRegistry(config.DATA_DIR)
store = ConversationStore(config.DATA_DIR)
workbench = WorkbenchStore(config.DATA_DIR)
users_db = UserStore(config.DATA_DIR)
runtime = RuntimeStore(config.DATA_DIR, ALLOWED_MODELS)
agent_manager = None  # 在 lifespan 中初始化（SqliteSaver 为异步上下文）

INDEX_HTML = os.path.join("static", "index.html")  # Vue SPA 入口


def _client_ip(request: Request) -> str:
    """优先取反向代理传递的真实 IP。"""
    fwd = request.headers.get("x-forwarded-for", "")
    if fwd:
        return fwd.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def _is_logged_in(request: Request) -> bool:
    return authmod.verify_session(request.cookies.get(authmod.COOKIE_NAME)) is not None


async def require_auth(request: Request):
    """REST 接口依赖：未登录返回 401；已登录把用户名/角色写入 request.state。"""
    if not authmod.enabled():
        request.state.user = ""
        request.state.role = "admin"
        return None
    user = authmod.verify_session(request.cookies.get(authmod.COOKIE_NAME))
    if user is None:
        raise _Unauthorized()
    request.state.user = user
    request.state.role = users_db.get_role(user) or "user"


def _current_user(request: Request) -> str:
    """取当前登录用户名（认证关闭时为空串，等价于不过滤）。"""
    return getattr(request.state, "user", "") or ""


def _current_role(request: Request) -> str:
    """取当前用户角色：admin | user；认证关闭时视为 admin。"""
    if not authmod.enabled():
        return "admin"
    role = getattr(request.state, "role", "")
    if not role:
        role = users_db.get_role(_current_user(request)) or "user"
    return role


class _Unauthorized(Exception):
    """由异常处理器转为 401 JSON 响应。"""


class _Forbidden(Exception):
    """权限不足，由异常处理器转为 403 JSON 响应。"""


async def require_admin(request: Request):
    """管理员专属接口依赖：非 admin 返回 403。"""
    await require_auth(request)
    if _current_role(request) != "admin":
        raise _Forbidden()


def _provider_public(p: dict) -> dict:
    """脱敏视图：不回传完整 api_key。"""
    key = str(p.get("api_key") or "")
    return {
        "name": p.get("name"),
        "scope": p.get("scope", "system"),
        "owner": p.get("owner", ""),
        "base_url": p.get("base_url", ""),
        "has_key": bool(key),
        "key_hint": f"…{key[-4:]}" if key else "",
        # code/status/model_meta 供前端「拉取模型」匹配供应商清单、以及模型表格展示元数据
        "code": p.get("code", ""),
        "status": p.get("status", 1),
        "models": list(p.get("models") or []),
        "model_meta": list(p.get("model_meta") or []),
    }


class RunHandle:
    """一轮对话的运行句柄 —— 与 WebSocket 连接解耦。

    设计要点：
    - 事件经 ``emit`` 广播给当前所有订阅连接，同时写入 ``buffer`` 回放缓冲；
      刷新页面 / 换设备重连后可整段重放，流式输出不中断。
    - 断开连接只是取消订阅（unsubscribe），**不会**终止后台运行的任务；
      任务只有收到 cancel/stop 或自然结束才会终止。
    - buffer 在每轮 message_start 时清空，只保留当前这轮的事件。

    - mode   : 工具调用权限模式，"auto" 自动执行 / "confirm" 执行前需确认。
    - pending: 确认模式下等待用户决策的 asyncio.Future。
    - task   : 本轮对话（run_turn）的后台任务。
    - done   : 是否已结束。
    """

    def __init__(self, cid: str, mode: str = "auto", user: str = ""):
        self.cid = cid
        self.mode = mode
        self.user = user  # 发起本轮对话的用户：模型偏好按用户解析
        self.pending: asyncio.Future | None = None
        self.task: asyncio.Task | None = None
        self.buffer: list[dict] = []
        self.subs: list[WebSocket] = []
        self.done = False

    async def emit(self, ev: dict) -> None:
        """广播事件给所有订阅者，并写入回放缓冲。发送失败的连接直接剔除。"""
        if ev.get("type") == "message_start":
            self.buffer.clear()  # 新一轮开始：旧回放作废
        self.buffer.append(ev)
        dead: list[WebSocket] = []
        for ws in self.subs:
            try:
                await asyncio.wait_for(ws.send_json(ev), timeout=5)
            except Exception:
                dead.append(ws)
        for ws in dead:
            self.unsubscribe(ws)

    def subscribe(self, ws: WebSocket) -> list[dict]:
        """订阅本轮事件，返回当前回放缓冲（供新连接续看）。"""
        if ws not in self.subs:
            self.subs.append(ws)
        return list(self.buffer)

    def unsubscribe(self, ws: WebSocket) -> None:
        if ws in self.subs:
            self.subs.remove(ws)


# 正在进行的运行：cid -> RunHandle。会话列表的「运行中」状态、断线重连回放、
# 停止对话都以此为准；运行结束后自动移除。
RUNS: dict[str, RunHandle] = {}

# 各会话的工具调用权限模式（无运行任务时也保留，供下一轮使用）
MODES: dict[str, str] = {}


def _start_run(cid: str, content: str, attachments: list | None = None, user: str = "") -> RunHandle:
    """创建并启动一轮后台对话（WebSocket 消息、自动化触发共用）。

    attachments: 用户消息携带的附件清单 [{path,name,size}]，随消息落库与回显。
    user: 发起者用户名，用于按用户解析模型偏好（自动化触发为空 → .env 默认）。
    """
    run = RunHandle(cid, MODES.get(cid, "auto"), user=user)
    RUNS[cid] = run
    run.task = asyncio.create_task(_run_wrapped(cid, content, run, attachments))
    return run


async def _run_wrapped(cid: str, content: str, run: RunHandle, attachments: list | None = None):
    """run_turn 的外层包装：负责收尾（done 标记、注册表清理、兜底事件）。"""
    try:
        await run_turn(cid, content, run, attachments)
    except asyncio.CancelledError:
        # run_turn 内部已尽力保存进度；这里兜底补发结束事件，防止前端空等
        try:
            await run.emit({"type": "message_end", "stopped": True})
        except Exception:
            pass
    except Exception as e:
        print(f"[run] 会话 {cid} 运行异常: {e}")
        try:
            await run.emit({"type": "error", "content": f"执行出错: {e}"})
            await run.emit({"type": "message_end"})
        except Exception:
            pass
    finally:
        run.done = True
        # 仅当注册表中的仍是本轮（防并发新建覆盖后误删新一轮）
        if RUNS.get(cid) is run:
            RUNS.pop(cid, None)


async def _automation_scheduler():
    """自动化任务的调度循环。

    - hourly：距上次运行满 1 小时即触发。
    - daily ：每天 at_time（本地时区）触发一次。
    - weekly：每周一 at_time 触发一次。
    - manual：只能由用户手动触发，不参与调度。

    每 60 秒轮询一次；同一任务当日/当期只跑一次（用 last_run_at 去重）。
    任何一次触发失败都不会中断循环。
    """
    while True:
        try:
            now = time.time()
            lt = time.localtime(now)
            for a in workbench.list_automations():
                if not a.get("enabled"):
                    continue
                sched = (a.get("schedule") or "daily").lower()
                if sched == "manual":
                    continue
                last = a.get("last_run_at") or 0
                hh, mm = _parse_at_time(a.get("at_time"))
                due = False
                if sched == "hourly":
                    due = now - last >= 3600
                elif sched == "daily":
                    # 今天的目标时刻已过，且今天还没跑过
                    target = time.mktime(
                        (lt.tm_year, lt.tm_mon, lt.tm_mday, hh, mm, 0, 0, 0, -1)
                    )
                    due = now >= target and last < target
                elif sched == "weekly":
                    target = time.mktime(
                        (lt.tm_year, lt.tm_mon, lt.tm_mday, hh, mm, 0, 0, 0, -1)
                    )
                    # 周一为一周起点（tm_wday=0）
                    due = lt.tm_wday == 0 and now >= target and last < target
                if due:
                    await _fire_automation(a)
        except asyncio.CancelledError:
            raise
        except Exception as e:  # 调度器必须自身健壮
            print(f"[scheduler] 调度循环异常：{e}")
        await asyncio.sleep(60)


def _parse_at_time(s: str | None) -> tuple[int, int]:
    """把 "HH:MM" 解析为 (时, 分)，非法输入回退到 09:00。"""
    try:
        hh, mm = (s or "09:00").split(":")
        return max(0, min(23, int(hh))), max(0, min(59, int(mm)))
    except Exception:
        return 9, 0


async def _fire_automation(a: dict) -> None:
    """触发一次自动化任务：新建会话 + 后台执行指令。"""
    if agent_manager is None:
        return
    aid = a["id"]
    try:
        conv = store.create(f"自动化 · {a['name']}")
        workspace.get_workspace(conv["id"])
        # 经 _start_run 创建运行句柄：事件有回放缓冲，用户打开该会话即可围观执行过程
        _start_run(conv["id"], a["prompt"])
        workbench.update_automation(
            aid, last_run_at=time.time(), last_status="running",
            run_count=(a.get("run_count") or 0) + 1,
        )
        print(f"[scheduler] 已触发自动化「{a['name']}」→ 会话 {conv['id']}")
    except Exception as e:
        workbench.update_automation(aid, last_run_at=time.time(), last_status="failed")
        print(f"[scheduler] 自动化「{a.get('name')}」触发失败：{e}")


@asynccontextmanager
async def lifespan(app: FastAPI):
    os.makedirs(config.DATA_DIR, exist_ok=True)
    from langgraph.checkpoint.sqlite.aio import AsyncSqliteSaver  # noqa: E402
    async with AsyncSqliteSaver.from_conn_string(config.DB_PATH) as checkpointer:
        global agent_manager
        agent_manager = AgentManager(checkpointer, registry)
        scheduler = asyncio.create_task(_automation_scheduler())
        try:
            yield
        finally:
            scheduler.cancel()
            try:
                await scheduler
            except (asyncio.CancelledError, Exception):
                pass


app = FastAPI(title="LangGraph 服务端 Agent", lifespan=lifespan)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.exception_handler(_Unauthorized)
async def _unauthorized_handler(request: Request, exc: _Unauthorized):
    """未登录访问受保护接口时统一返回 401 JSON。"""
    return JSONResponse(
        {"ok": False, "error": "未登录", "code": "unauthorized"}, status_code=401
    )


@app.exception_handler(_Forbidden)
async def _forbidden_handler(request: Request, exc: _Forbidden):
    """权限不足时统一返回 403 JSON。"""
    return JSONResponse(
        {"ok": False, "error": "权限不足，仅管理员可操作", "code": "forbidden"},
        status_code=403,
    )


# ===================== 登录认证 =====================
@app.get("/login", response_class=HTMLResponse)
def login_page():
    """登录页：交给前端 Vue 路由处理，此处直接返回 SPA 入口。"""
    if not os.path.exists(INDEX_HTML):
        return HTMLResponse("<h3>前端未构建：请先执行 npm run build</h3>", status_code=500)
    return FileResponse(INDEX_HTML)


@app.post("/api/auth/login")
async def api_login(request: Request):
    body = await request.json()
    username = (body.get("username") or "").strip()
    password = body.get("password") or ""
    remember = bool(body.get("remember"))
    ip = _client_ip(request)

    if not authmod.enabled():
        return {"ok": True, "note": "认证未启用"}

    remain = authmod.is_locked(ip)
    if remain:
        return JSONResponse(
            {"ok": False, "error": f"尝试过于频繁，请 {remain} 秒后再试"}, status_code=429
        )

    info = authmod.check_credentials(username, password)
    if info is None:
        authmod.record_fail(ip)
        # 统一提示，不泄露是用户名还是密码错误
        return JSONResponse({"ok": False, "error": "用户名或密码错误"}, status_code=401)

    authmod.clear_fails(ip)
    ttl = authmod.SESSION_TTL if remember else authmod.SESSION_TTL_SHORT
    token = authmod.make_session(info["username"], ttl)
    resp = JSONResponse({"ok": True, "username": info["username"], "role": info["role"]})
    resp.set_cookie(
        authmod.COOKIE_NAME, token,
        max_age=ttl, httponly=True,
        samesite="lax", secure=config.AUTH_COOKIE_SECURE, path="/",
    )
    return resp


@app.post("/api/auth/logout")
async def api_logout():
    resp = JSONResponse({"ok": True})
    # 删除时的属性必须与写入时一致（httponly/samesite/secure/path），
    # 否则浏览器可能不认为这是同一个 Cookie，导致退出登录无效。
    resp.set_cookie(
        authmod.COOKIE_NAME, "",
        max_age=0, expires=0, httponly=True,
        samesite="lax", secure=config.AUTH_COOKIE_SECURE, path="/",
    )
    return resp


@app.get("/api/auth/check")
async def api_auth_check(request: Request):
    user = authmod.verify_session(request.cookies.get(authmod.COOKIE_NAME))
    return {
        "authenticated": user is not None,
        "username": user,
        "enabled": authmod.enabled(),
        "role": (users_db.get_role(user) or "user") if user else "",
    }


# ===================== 用户管理（admin 专属，#69 表结构） =====================
@app.get("/api/users", dependencies=[Depends(require_admin)])
def api_users_list():
    """用户列表（admin 专属）：不回传密码字段。"""
    return [
        {"username": u["username"], "role": u["role"], "created_at": u["created_at"]}
        for u in users_db.list_users()
    ]


@app.post("/api/users", dependencies=[Depends(require_admin)])
async def api_users_create(body: dict):
    """创建用户：username 唯一（≤32 字符，字母数字下划线），role 可选 admin/user。"""
    username = (body.get("username") or "").strip()
    password = body.get("password") or ""
    role = (body.get("role") or "user").strip()
    if not username or not password:
        return {"ok": False, "error": "用户名与密码不能为空"}
    if len(username) > 32 or any(not (c.isalnum() or c == "_") for c in username):
        return {"ok": False, "error": "用户名仅限字母/数字/下划线，≤32 字符"}
    if len(password) < 4:
        return {"ok": False, "error": "密码至少 4 位"}
    info = users_db.create_user(username, password, role)
    if info is None:
        return {"ok": False, "error": f"用户 {username} 已存在"}
    return {"ok": True, "user": info}


@app.delete("/api/users/{username}", dependencies=[Depends(require_admin)])
def api_users_delete(request: Request, username: str):
    """删除用户；不可删除自己，防止误删最后一个管理员。

    级联清理：该用户的 user 作用域模型/提供商（防孤儿数据）+ 模型偏好。
    """
    if username == _current_user(request):
        return {"ok": False, "error": "不能删除当前登录的账号"}
    ok = users_db.delete_user(username)
    if ok:
        runtime.purge_user(username)
        if agent_manager:
            agent_manager.reset_user(username)
    return {"ok": ok, "error": "" if ok else "用户不存在"}


@app.get("/")
def index(request: Request):
    """主界面入口。未登录时交给前端路由守卫跳转 /login（前端会自行处理）。

    注意：这里不再做 302 重定向，而是统一返回 SPA 入口，由 Vue Router 的
    全局守卫依据 /api/auth/check 的结果决定渲染登录页还是主界面。
    这样前端路由是唯一跳转来源，避免服务端与前端两套跳转逻辑互相打架。
    """
    if not os.path.exists(INDEX_HTML):
        return HTMLResponse("<h3>前端未构建：请先执行 npm run build</h3>", status_code=500)
    return FileResponse(INDEX_HTML)


# ===================== 技能管理 =====================
@app.get("/api/skills", dependencies=[Depends(require_auth)])
def api_skills():
    return registry.list()


@app.post("/api/skills/{sid}/enable", dependencies=[Depends(require_auth)])
def api_enable(sid: str):
    ok = registry.enable(sid)
    return {"ok": ok, "enabled": registry.is_enabled(sid)}


@app.post("/api/skills/{sid}/disable", dependencies=[Depends(require_auth)])
def api_disable(sid: str):
    ok = registry.disable(sid)
    return {"ok": ok, "enabled": registry.is_enabled(sid)}


@app.post("/api/skills/custom", dependencies=[Depends(require_auth)])
async def api_add_custom(body: dict):
    name = body.get("name", "")
    description = body.get("description", "")
    code = body.get("code", "")
    if not code.strip():
        return {"ok": False, "error": "code 不能为空"}
    try:
        info = registry.add_custom(name, description, code)
        return {"ok": True, "skill": info}
    except Exception as e:
        return {"ok": False, "error": str(e)}


@app.delete("/api/skills/{sid}", dependencies=[Depends(require_auth)])
def api_remove(sid: str):
    return {"ok": registry.remove_custom(sid)}


@app.post("/api/skills/reload", dependencies=[Depends(require_auth)])
def api_reload():
    return {"ok": True, "skills": registry.reload()}


# ===================== 工作台：项目空间 =====================
@app.get("/api/projects", dependencies=[Depends(require_auth)])
def api_project_list():
    return workbench.list_projects()


@app.post("/api/projects", dependencies=[Depends(require_auth)])
async def api_project_create(body: dict = None):
    b = body or {}
    name = (b.get("name") or "").strip()
    if not name:
        return {"ok": False, "error": "项目名称不能为空"}
    return workbench.create_project(
        name, b.get("description", ""), b.get("color", "#2f6feb")
    )


@app.patch("/api/projects/{pid}", dependencies=[Depends(require_auth)])
async def api_project_update(pid: str, body: dict):
    ok = workbench.update_project(
        pid, body.get("name"), body.get("description"), body.get("color")
    )
    return {"ok": ok}


@app.delete("/api/projects/{pid}", dependencies=[Depends(require_auth)])
def api_project_delete(pid: str):
    return {"ok": workbench.delete_project(pid)}


@app.post("/api/projects/{pid}/conversations", dependencies=[Depends(require_auth)])
async def api_project_add_conv(pid: str, body: dict):
    cid = body.get("cid", "")
    if not store.get(cid):
        return {"ok": False, "error": "会话不存在"}
    return {"ok": workbench.add_conv_to_project(pid, cid)}


@app.delete("/api/projects/{pid}/conversations/{cid}", dependencies=[Depends(require_auth)])
def api_project_del_conv(pid: str, cid: str):
    return {"ok": workbench.remove_conv_from_project(pid, cid)}


# ===================== 工作台：自动化 =====================
@app.get("/api/automations", dependencies=[Depends(require_auth)])
def api_auto_list():
    return workbench.list_automations()


@app.post("/api/automations", dependencies=[Depends(require_auth)])
async def api_auto_create(body: dict = None):
    b = body or {}
    name = (b.get("name") or "").strip()
    prompt = (b.get("prompt") or "").strip()
    if not name or not prompt:
        return {"ok": False, "error": "任务名称与指令不能为空"}
    return workbench.create_automation(
        name, prompt, b.get("schedule", "daily"),
        b.get("at_time", "09:00"), b.get("enabled", True),
    )


@app.patch("/api/automations/{aid}", dependencies=[Depends(require_auth)])
async def api_auto_update(aid: str, body: dict):
    ok = workbench.update_automation(
        aid,
        name=body.get("name"), prompt=body.get("prompt"),
        schedule=body.get("schedule"), at_time=body.get("at_time"),
        enabled=body.get("enabled"),
    )
    return {"ok": ok}


@app.delete("/api/automations/{aid}", dependencies=[Depends(require_auth)])
def api_auto_delete(aid: str):
    return {"ok": workbench.delete_automation(aid)}


@app.post("/api/automations/{aid}/run", dependencies=[Depends(require_auth)])
async def api_auto_run(aid: str):
    """手动触发一次自动化：新建会话并投递该指令，返回会话 id 供前端跳转。"""
    a = workbench.get_automation(aid)
    if not a:
        return {"ok": False, "error": "自动化任务不存在"}
    conv = store.create(f"自动化 · {a['name']}")
    workspace.get_workspace(conv["id"])
    # 后台执行，避免请求阻塞（执行耗时可能很长）；有运行句柄，打开会话可围观
    _start_run(conv["id"], a["prompt"])
    workbench.update_automation(
        aid, last_run_at=time.time(), last_status="running",
        run_count=(a.get("run_count") or 0) + 1,
    )
    return {"ok": True, "cid": conv["id"]}


# ===================== 工作台：资料库 =====================
@app.get("/api/library", dependencies=[Depends(require_auth)])
def api_lib_list(q: str = ""):
    return workbench.list_library(q)


@app.post("/api/library", dependencies=[Depends(require_auth)])
async def api_lib_create(body: dict = None):
    b = body or {}
    title = (b.get("title") or "").strip()
    if not title:
        return {"ok": False, "error": "标题不能为空"}
    return workbench.create_library_item(
        title, b.get("content", ""), b.get("kind", "note"), b.get("tags", "")
    )


@app.patch("/api/library/{iid}", dependencies=[Depends(require_auth)])
async def api_lib_update(iid: str, body: dict):
    ok = workbench.update_library_item(
        iid, title=body.get("title"), content=body.get("content"),
        kind=body.get("kind"), tags=body.get("tags"),
    )
    return {"ok": ok}


@app.delete("/api/library/{iid}", dependencies=[Depends(require_auth)])
def api_lib_delete(iid: str):
    return {"ok": workbench.delete_library_item(iid)}


# ===================== 工作台：运行时信息 =====================
@app.get("/api/runtime", dependencies=[Depends(require_auth)])
def api_runtime(request: Request):
    """顶部工具栏所需：当前模型、可用模型列表、模型提供商、技能统计等。

    models/providers 按用户分级：system 全员可见 + 本人 user 私有。
    """
    user = _current_user(request)
    role = _current_role(request)
    skills = registry.list()
    cfg = agent_manager.get_cfg(user) if agent_manager else {
        "model": config.MODEL, "base_url": config.OPENAI_BASE_URL,
    }
    return {
        "model": cfg["model"],
        "base_url": cfg["base_url"],
        "role": role,
        "models": runtime.list_models(user),
        "models_scoped": runtime.list_default_models(user),
        "providers": [_provider_public(p) for p in runtime.list_providers(user)],
        "temperature": config.TEMPERATURE,
        "skills_total": len(skills),
        "skills_enabled": sum(1 for s in skills if s.get("enabled")),
        "conv_count": len(store.list(owner=user or None, admin=role == "admin")),
        "project_count": len(workbench.list_projects()),
        "automation_count": len(workbench.list_automations()),
        "library_count": len(workbench.list_library()),
    }


@app.post("/api/runtime/model", dependencies=[Depends(require_auth)])
async def api_set_model(request: Request, body: dict):
    """切换当前使用的模型（仅影响之后新建的对话轮次）；跨提供商模型联动 base_url/api_key。"""
    name = (body.get("model") or "").strip()
    if not name:
        return {"ok": False, "error": "模型名不能为空"}
    user = _current_user(request)
    info = runtime.resolve_full(name, user)
    base_url, api_key = info["base_url"], info["api_key"]
    if base_url is None and api_key is None and not runtime.model_exists(name, user):
        return {"ok": False, "error": f"模型 {name} 不在可用列表中，请先添加"}
    if agent_manager is None:
        return {"ok": False, "error": "Agent 尚未初始化"}
    # 模型偏好按用户隔离（#67/#68）：只影响当前用户，不再全局共享
    # provider_model：服务商侧真实模型名，缺失时回退平台内部名
    cfg = agent_manager.set_model(
        user, name, base_url=base_url, api_key=api_key,
        provider_model=info.get("provider_model") or name,
        provider=info.get("provider") or "",
    )
    return {"ok": True, "model": name, "base_url": cfg["base_url"]}


def _retune_agent_models() -> None:
    """模型/提供商删除后，把正用着「已不可见模型」的用户回退到其可见列表第一个。

    模型偏好按用户隔离（#67/#68），需逐用户检查而非全局单值；
    回退目标同样按该用户 resolve（默认组命中则显式回 .env 值）。
    """
    if agent_manager is None:
        return
    for u in agent_manager.pref_users():
        cfg = agent_manager.get_cfg(u)
        if cfg["model"] in runtime.list_models(u):
            continue
        remain = runtime.list_models(u)
        if remain:
            bu, ak = runtime.resolve(remain[0], u)
            agent_manager.set_model(u, remain[0], base_url=bu, api_key=ak)
        else:
            agent_manager.reset_user(u)


@app.post("/api/runtime/models", dependencies=[Depends(require_auth)])
async def api_add_model(request: Request, body: dict):
    """添加模型。body.scope: system（admin 专属）/ user（私有，默认）；
    body.provider 指定归属提供商（缺省为默认组，走 .env 凭据）。"""
    name = (body.get("name") or body.get("model") or "").strip()
    if not name:
        return {"ok": False, "error": "模型名不能为空"}
    if len(name) > 120 or any(ch in name for ch in " \t\r\n"):
        return {"ok": False, "error": "模型名不合法（不得含空白，≤120 字符）"}
    role = _current_role(request)
    scope = (body.get("scope") or "user").strip()
    if scope not in ("system", "user"):
        scope = "user"
    if scope == "system" and role != "admin":
        return {"ok": False, "error": "系统模型仅管理员可管理"}
    owner = "" if scope == "system" else _current_user(request)
    provider = (body.get("provider") or "").strip()
    # 模型扩展元数据（对齐模型库）：类型/上线状态/上下文窗口/描述/服务商侧模型名
    try:
        model_type = int(body.get("model_type") or 1)
    except (TypeError, ValueError):
        model_type = 1
    if model_type not in (1, 2, 3):
        model_type = 1
    try:
        status = int(body.get("status", 1))
    except (TypeError, ValueError):
        status = 1
    if status not in (0, 1):
        status = 1
    ctx_len = body.get("context_length")
    try:
        ctx_len = int(ctx_len) if ctx_len not in (None, "") else None
        if ctx_len is not None and ctx_len <= 0:
            ctx_len = None
    except (TypeError, ValueError):
        ctx_len = None
    description = (body.get("description") or "").strip()[:500]
    provider_model = (body.get("provider_model") or "").strip()[:128]
    meta = dict(model_type=model_type, status=status, context_length=ctx_len,
                description=description, provider_model=provider_model)
    if provider:
        p = runtime.get_provider(provider, scope, owner)
        if p is None:
            return {"ok": False, "error": f"提供商 {provider} 不存在或无权限"}
        if not runtime.add_model(name, provider, scope, owner, **meta):
            return {"ok": False, "error": "该提供商下已有同名模型"}
    else:
        if runtime.model_exists(name, owner):
            return {"ok": False, "error": "模型已存在"}
        if not runtime.add_model(name, "", scope, owner, **meta):
            return {"ok": False, "error": "模型已存在"}
    return {
        "ok": True,
        "models": runtime.list_models(owner),
        "models_scoped": runtime.list_default_models(owner),
        "providers": [_provider_public(x) for x in runtime.list_providers(owner)],
    }


@app.delete("/api/runtime/models/{name}", dependencies=[Depends(require_auth)])
def api_del_model(request: Request, name: str, scope: str = "user", provider: str = ""):
    """删除模型。scope=system 需 admin；普通用户只能删自己的 user 模型。"""
    if scope not in ("system", "user"):
        scope = "user"
    if scope == "system" and _current_role(request) != "admin":
        return {"ok": False, "error": "系统模型仅管理员可管理"}
    owner = "" if scope == "system" else _current_user(request)
    if not runtime.del_model(name, provider, scope, owner):
        return {"ok": False, "error": "模型不存在或无权限"}
    # 删除的模型正被某用户选用时，该用户回退到其可见列表第一个
    _retune_agent_models()
    return {
        "ok": True,
        "models": runtime.list_models(owner),
        "models_scoped": runtime.list_default_models(owner),
        "providers": [_provider_public(x) for x in runtime.list_providers(owner)],
        "model": agent_manager.get_cfg(_current_user(request))["model"] if agent_manager else None,
    }


def _validate_provider_input(body: dict, role: str) -> tuple[dict | None, str | None]:
    """校验并归一化「添加提供商」入参，返回 (清洗后的字段, 错误文案)。

    单条添加与批量添加共用，避免两条路径的校验规则漂移
    （历史上出现过单条校验了 default 重名、批量漏掉的情况）。
    """
    name = (body.get("name") or "").strip()
    base_url = (body.get("base_url") or "").strip()
    api_key = (body.get("api_key") or "").strip()
    if not name or len(name) > 60:
        return None, "提供商名称不能为空（≤60 字符）"
    if name.lower() == "default":
        return None, "default 为内置默认提供商，请换一个名称"
    if not base_url.lower().startswith(("http://", "https://")):
        return None, "接口地址需以 http:// 或 https:// 开头"
    scope = (body.get("scope") or "user").strip()
    if scope not in ("system", "user"):
        scope = "user"
    if scope == "system" and role != "admin":
        return None, "系统提供商仅管理员可管理"
    code = (body.get("code") or "").strip()[:64]
    try:
        pstatus = int(body.get("status", 1))
    except (TypeError, ValueError):
        pstatus = 1
    if pstatus not in (0, 1):
        pstatus = 1
    return {
        "name": name, "base_url": base_url, "api_key": api_key,
        "scope": scope, "status": pstatus, "code": code,
    }, None


@app.post("/api/runtime/providers", dependencies=[Depends(require_auth)])
async def api_add_provider(request: Request, body: dict):
    """添加模型提供商（OpenAI 兼容接口）：name 唯一、base_url 必须是 http(s) 地址。
    scope: system（admin 专属）/ user（私有，默认）。"""
    role = _current_role(request)
    fields, err = _validate_provider_input(body, role)
    if err:
        return {"ok": False, "error": err}
    owner = "" if fields["scope"] == "system" else _current_user(request)
    if not runtime.add_provider(fields["name"], fields["base_url"], fields["api_key"],
                                fields["scope"], owner,
                                code=fields["code"], status=fields["status"]):
        return {"ok": False, "error": f"提供商 {fields['name']} 已存在"}
    return {
        "ok": True,
        "providers": [_provider_public(x) for x in runtime.list_providers(owner)],
    }


@app.post("/api/runtime/providers/batch", dependencies=[Depends(require_auth)])
async def api_add_providers_batch(request: Request, body: dict):
    """批量添加提供商（「添加供应商」弹框一键保存）：一条请求原子写入。

    事件循环里逐条 await 会让前几条已经落库、后几条失败，前端只能拿到一个
    残缺结果；这里在同步函数内一次跑完，任一条非法即整体拒绝，不做半截写入。
    body: {"items": [{"name","base_url","api_key","code","status"}]}
    """
    items = body.get("items")
    if not isinstance(items, list) or not items:
        return {"ok": False, "error": "items 需为非空数组"}
    if len(items) > 50:
        return {"ok": False, "error": "单次最多添加 50 个提供商"}
    role = _current_role(request)
    user = _current_user(request)

    plan: list[dict] = []
    seen: set[str] = set()
    for i, raw in enumerate(items):
        if not isinstance(raw, dict):
            return {"ok": False, "error": f"第 {i + 1} 项格式错误"}
        fields, err = _validate_provider_input(raw, role)
        if err:
            label = (raw.get("name") or f"第 {i + 1} 项").strip()
            return {"ok": False, "error": f"{label}：{err}"}
        if fields["name"] in seen:
            return {"ok": False, "error": f"提供商 {fields['name']} 在本次提交中重复"}
        seen.add(fields["name"])
        plan.append(fields)

    added: list[str] = []
    for f in plan:
        owner = "" if f["scope"] == "system" else user
        if not runtime.add_provider(f["name"], f["base_url"], f["api_key"],
                                    f["scope"], owner,
                                    code=f["code"], status=f["status"]):
            # 同名可能已被先前请求写入，或用户私有与系统级撞名，逐条报告
            return {"ok": False, "error": f"提供商 {f['name']} 已存在（已写入：{', '.join(added) or '无'}）"}
        added.append(f["name"])
    _retune_agent_models()
    return {
        "ok": True,
        "added": added,
        "providers": [_provider_public(x) for x in runtime.list_providers(user)],
    }


@app.delete("/api/runtime/providers/{name}", dependencies=[Depends(require_auth)])
def api_del_provider(request: Request, name: str, scope: str = "user"):
    """删除提供商（级联删除其下模型）。scope=system 需 admin。"""
    if scope not in ("system", "user"):
        scope = "user"
    if scope == "system" and _current_role(request) != "admin":
        return {"ok": False, "error": "系统提供商仅管理员可管理"}
    owner = "" if scope == "system" else _current_user(request)
    if not runtime.del_provider(name, scope, owner):
        return {"ok": False, "error": "提供商不存在或无权限"}
    # 正用着该提供商下模型的用户，回退到各自可见列表第一个
    _retune_agent_models()
    return {
        "ok": True,
        "providers": [_provider_public(x) for x in runtime.list_providers(owner)],
        "model": agent_manager.get_cfg(_current_user(request))["model"] if agent_manager else None,
    }


@app.delete("/api/runtime/providers/{name}/models/{model}", dependencies=[Depends(require_auth)])
def api_del_provider_model(request: Request, name: str, model: str, scope: str = "user"):
    if scope not in ("system", "user"):
        scope = "user"
    if scope == "system" and _current_role(request) != "admin":
        return {"ok": False, "error": "系统提供商仅管理员可管理"}
    owner = "" if scope == "system" else _current_user(request)
    if not runtime.del_provider_model(name, model, scope, owner):
        return {"ok": False, "error": "该提供商下没有此模型或无权限"}
    _retune_agent_models()
    return {
        "ok": True,
        "providers": [_provider_public(x) for x in runtime.list_providers(owner)],
        "model": agent_manager.get_cfg(_current_user(request))["model"] if agent_manager else None,
    }


@app.get("/api/runtime/model-calls", dependencies=[Depends(require_auth)])
def api_model_call_stats(request: Request, model: str = "", days: int = 7):
    """模型调用统计（对齐模型库 ai_model_call_log）：近 N 天按模型聚合的
    调用量 / 成功率 / 平均耗时 / 总 token / 总费用。普通用户仅见自己模型的统计。"""
    role = _current_role(request)
    days = max(1, min(int(days or 7), 365))
    rows = runtime.call_stats(model=model, days=days)
    # 非管理员：过滤掉自己不可见的模型
    if role != "admin":
        user = _current_user(request)
        visible = set(runtime.list_models(user))
        rows = [r for r in rows if r["model"] in visible]
    return {"ok": True, "days": days, "stats": rows}


@app.get("/api/runtime/catalog", dependencies=[Depends(require_auth)])
def api_model_catalog(request: Request, code: str = "", provider: str = "", scope: str = "user"):
    """拉取某提供商的可选模型清单（内置清单，不联网、不外发 api_key）。

    code：供应商编码（deepseek/zhipu/qwen...）；provider 非空时自动取其 code 与 base_url。
    已添加的模型会从清单中剔除（按用户可见的全部模型名去重），只返回可新增项。
    """
    user = _current_user(request)
    if scope not in ("system", "user"):
        scope = "user"
    owner = "" if scope == "system" else user

    existing: list[str] = []
    base_url = ""
    if provider:
        p = runtime.get_provider(provider, scope, owner)
        if p is None:
            return {"ok": False, "error": f"提供商 {provider} 不存在或无权限"}
        if not code:
            code = p.get("code") or ""
        base_url = p.get("base_url") or ""

    # 剔除口径：该用户**已可见的全部模型名**（系统默认组 + 系统提供商 + 用户私有）。
    # 不按单个分组剔除，否则同一模型挂在不同分组下会重复出现在清单里。
    existing = runtime.list_models(user)

    cat = model_catalog.catalog_for(code, existing)
    cat["base_url"] = cat.get("base_url") or base_url
    cat["existing"] = existing
    return {"ok": True, **cat}


@app.get("/api/runtime/catalog/providers", dependencies=[Depends(require_auth)])
def api_catalog_providers():
    """已收录的供应商清单（供「添加提供商」时选择 code 与预填地址）。"""
    return {"ok": True, "providers": model_catalog.list_providers()}


# ===================== 会话管理（会话归属当前用户） =====================
def _conv_owned(meta: dict | None, user: str) -> bool:
    """会话可见性：admin 全见；owner 为空的旧会话对所有人可见；否则仅归属用户可见。"""
    if not meta:
        return False
    if authmod.enabled() and user and users_db.get_role(user) == "admin":
        return True
    owner = meta.get("owner") or ""
    return not owner or not user or owner == user


@app.get("/api/conversations", dependencies=[Depends(require_auth)])
def api_conv_list(request: Request):
    user = _current_user(request)
    admin = _current_role(request) == "admin"
    items = store.list() if admin else store.list(owner=user or None)
    for c in items:
        r = RUNS.get(c["id"])
        c["running"] = bool(r and not r.done)  # 会话列表「运行中」徽标
    return items


@app.post("/api/conversations", dependencies=[Depends(require_auth)])
async def api_conv_create(request: Request, body: dict = None):
    title = (body or {}).get("title", "新对话")
    conv = store.create(title, owner=_current_user(request))
    workspace.get_workspace(conv["id"])  # 预建该会话隔离的工作目录
    return conv


@app.get("/api/conversations/{cid}", dependencies=[Depends(require_auth)])
def api_conv_get(request: Request, cid: str):
    meta = store.get(cid)
    if not _conv_owned(meta, _current_user(request)):
        return {"ok": False, "error": "not found"}
    # 附带 running 标记：前端刷新页面后据此立刻渲染「AI 回复中…」动效，
    # 不必等 WS 的 resume 事件到达（避免刷新后短暂显示成「这轮没有回复」）
    meta = {**meta, "running": bool((RUNS.get(cid) and not RUNS[cid].done))}
    return {"ok": True, "meta": meta, "messages": store.load_messages(cid)}


@app.delete("/api/conversations/{cid}", dependencies=[Depends(require_auth)])
def api_conv_delete(request: Request, cid: str):
    if not _conv_owned(store.get(cid), _current_user(request)):
        return {"ok": False, "error": "not found"}
    store.delete(cid)
    return {"ok": True}


@app.patch("/api/conversations/{cid}", dependencies=[Depends(require_auth)])
async def api_conv_rename(request: Request, cid: str, body: dict):
    if not _conv_owned(store.get(cid), _current_user(request)):
        return {"ok": False, "error": "not found"}
    store.rename(cid, body.get("title", "新对话"))
    return {"ok": True}


# ===================== 会话工作目录文件浏览 =====================
# 预览不再限制 200KB（取消 _TEXT_LIMIT）；仅保留防 OOM 软上限
_FILE_HARD_LIMIT = 32 * 1024 * 1024  # 超过 32MB 不读入内存，提示下载


def _looks_text(p: str) -> bool:
    try:
        with open(p, "rb") as f:
            chunk = f.read(1024)
        if not chunk:
            return True
        if b"\x00" in chunk:
            return False
        chunk.decode("utf-8")
        return True
    except Exception:
        return False


def _read_file_view(full: str, path: str) -> dict:
    size = os.path.getsize(full)
    name = os.path.basename(full)
    if size > _FILE_HARD_LIMIT:
        return {"ok": True, "type": "file", "path": path, "name": name,
                "size": size, "content": "", "truncated": True, "binary": False,
                "note": f"文件过大（{size // 1024 // 1024} MB），请使用下载查看。"}
    if _looks_text(full):
        with open(full, "r", encoding="utf-8", errors="replace") as f:
            content = f.read()
        return {"ok": True, "type": "file", "path": path, "name": name,
                "size": size, "content": content, "truncated": False, "binary": False}
    return {"ok": True, "type": "file", "path": path, "name": name,
            "size": size, "content": "", "truncated": False, "binary": True,
            "note": "二进制文件，无法直接预览，请下载。"}


@app.get("/api/conversations/{cid}/files", dependencies=[Depends(require_auth)])
def api_files(cid: str, path: str = ""):
    if not store.get(cid):
        return {"ok": False, "error": "会话不存在"}
    try:
        full = workspace.resolve(cid, path)
    except ValueError as e:
        return {"ok": False, "error": str(e)}
    if os.path.isdir(full):
        entries = []
        try:
            # 排序规则：目录在前、文件在后，各自按名称 ASCII 升序。
            # 只按名称排会把目录和文件混在一起，目录层级不明显；
            # key 用小写字面量对应「近似 ASCII 序」并避免大小写分裂（A/a 相邻）。
            names = sorted(os.listdir(full), key=lambda n: n.lower())
            for name in names:
                p = os.path.join(full, name)
                st = os.stat(p)
                is_dir = os.path.isdir(p)
                entries.append({
                    "name": name,
                    "type": "dir" if is_dir else "file",
                    "size": st.st_size,
                    "mtime": int(st.st_mtime),
                    "is_text": _looks_text(p) if not is_dir else False,
                })
        except Exception as e:
            return {"ok": False, "error": str(e)}
        # 稳定排序：type 决定分组（dir 优先），组内保持名称序
        entries.sort(key=lambda e: (0 if e["type"] == "dir" else 1, e["name"].lower()))
        return {"ok": True, "type": "dir", "path": path, "entries": entries}
    if os.path.isfile(full):
        try:
            return _read_file_view(full, path)
        except Exception as e:
            return {"ok": False, "error": str(e)}
    return {"ok": False, "error": "路径不存在"}


@app.get("/api/conversations/{cid}/files/raw", dependencies=[Depends(require_auth)])
def api_files_raw(cid: str, path: str = ""):
    if not store.get(cid):
        return {"ok": False, "error": "会话不存在"}
    try:
        full = workspace.resolve(cid, path)
    except ValueError as e:
        return {"ok": False, "error": str(e)}
    if os.path.isfile(full):
        return FileResponse(full)
    return {"ok": False, "error": "不是文件"}


# ===================== 文件上传（聊天附件 → 会话工作目录） =====================
_UPLOAD_MAX_SINGLE = 15 * 1024 * 1024   # 单文件上限（解码后）
_UPLOAD_MAX_TOTAL = 30 * 1024 * 1024    # 单次请求总上限（解码后）


@app.post("/api/conversations/{cid}/files/upload", dependencies=[Depends(require_auth)])
async def api_files_upload(cid: str, body: dict):
    """把聊天附件写入会话工作目录。

    请求体：{"files": [{"name": "a.pdf", "data": "<base64>", "path": "子目录/可选"}]}
    使用 JSON+base64 而非 multipart，避免引入 python-multipart 依赖。
    文件名取 basename 并拒绝路径穿越；重名自动追加序号。
    """
    if not store.get(cid):
        return {"ok": False, "error": "会话不存在"}
    files = body.get("files") or []
    if not isinstance(files, list) or not files:
        return {"ok": False, "error": "没有可上传的文件"}

    root = workspace.get_workspace(cid)
    os.makedirs(root, exist_ok=True)
    total = 0
    saved = []
    for item in files:
        name = os.path.basename(str(item.get("name") or "file")).strip()
        if not name or name in {".", ".."}:
            return {"ok": False, "error": "非法文件名"}
        sub = str(item.get("path") or "").strip().strip("/")
        if sub in {".", ".."} or ".." in sub.split("/"):
            return {"ok": False, "error": "非法目标目录"}
        try:
            raw = base64.b64decode(str(item.get("data") or ""), validate=True)
        except Exception:
            return {"ok": False, "error": f"{name}: 不是有效的 base64 数据"}
        total += len(raw)
        if len(raw) > _UPLOAD_MAX_SINGLE:
            return {"ok": False, "error": f"{name}: 超过单文件 15MB 上限"}
        if total > _UPLOAD_MAX_TOTAL:
            return {"ok": False, "error": "单次上传总量超过 30MB 上限"}

        target_dir = os.path.join(root, sub) if sub else root
        os.makedirs(target_dir, exist_ok=True)
        # 重名追加序号：a.pdf → a-1.pdf → a-2.pdf
        stem, ext = os.path.splitext(name)
        final = name
        i = 1
        while os.path.exists(os.path.join(target_dir, final)):
            final = f"{stem}-{i}{ext}"
            i += 1
        try:
            with open(os.path.join(target_dir, final), "wb") as f:
                f.write(raw)
        except Exception as e:
            return {"ok": False, "error": f"{name}: 写入失败 {e}"}
        rel = f"{sub}/{final}" if sub else final
        saved.append({"path": rel, "name": final, "size": len(raw)})
    return {"ok": True, "saved": saved}


# ===================== 对话（非流式回退） =====================
@app.post("/api/conversations/{cid}/messages", dependencies=[Depends(require_auth)])
async def api_send(request: Request, cid: str, body: dict):
    if not _conv_owned(store.get(cid), _current_user(request)):
        return JSONResponse({"ok": False, "error": "会话不存在"}, status_code=404)
    r = RUNS.get(cid)
    if r and not r.done:
        return JSONResponse({"ok": False, "error": "会话正在运行中"}, status_code=409)
    content = body.get("content", "")
    atts = [
        {"path": str(a.get("path", "")), "name": str(a.get("name", "")), "size": int(a.get("size") or 0)}
        for a in (body.get("attachments") or []) if isinstance(a, dict) and a.get("path")
    ]
    result = await run_turn(cid, content, None, atts, user=_current_user(request))
    return {"ok": True, "assistant": result["assistant"]}


@app.post("/api/conversations/{cid}/stop", dependencies=[Depends(require_auth)])
async def api_conv_stop(cid: str):
    """停止当前会话正在进行的对话轮次（不删历史，保留已生成部分）。"""
    r = RUNS.get(cid)
    if not r or r.done or not r.task or r.task.done():
        return {"ok": False, "error": "当前没有正在进行的对话"}
    r.task.cancel()
    return {"ok": True}


# ===================== WebSocket 流式对话 =====================
@app.websocket("/ws/{cid}")
async def ws_endpoint(websocket: WebSocket, cid: str):
    await websocket.accept()
    # WebSocket 无法用 HTTP 依赖，此处手工校验会话 Cookie
    user = ""
    if authmod.enabled():
        token = websocket.cookies.get(authmod.COOKIE_NAME)
        user = authmod.verify_session(token) or ""
        if not user:
            await websocket.send_json(
                {"type": "error", "content": "未登录", "code": "unauthorized"}
            )
            await websocket.close(code=4401)
            return
    meta = store.get(cid)
    if not meta or not _conv_owned(meta, user):
        await websocket.send_json({"type": "error", "content": "会话不存在"})
        await websocket.close()
        return

    # 断线重连续看：该会话若仍有一轮在跑，立即订阅并整段回放已发生的事件，
    # 前端用与实时流相同的事件处理逻辑重建消息（刷新页面流式效果不中断）。
    run = RUNS.get(cid)
    if run and not run.done:
        replayed = run.subscribe(websocket)
        await websocket.send_json(
            {"type": "resume", "events": replayed, "mode": run.mode}
        )

    try:
        while True:
            data = await websocket.receive_json()
            t = data.get("type")
            if t == "message":
                existing = RUNS.get(cid)
                if existing and not existing.done:
                    await websocket.send_json(
                        {"type": "warn", "content": "当前会话正在回复中，请等待完成或先停止。"}
                    )
                    continue
                atts = data.get("attachments") or []
                atts = [
                    {"path": str(a.get("path", "")), "name": str(a.get("name", "")), "size": int(a.get("size") or 0)}
                    for a in atts if isinstance(a, dict) and a.get("path")
                ]
                run = _start_run(cid, data.get("content", ""), atts, user=user)
                run.subscribe(websocket)
                # 注意：此处不 await run_turn，接收循环继续运行，
                # 以便在「确认模式」下收到客户端的 tool_decision / cancel 消息。
            elif t == "set_mode":
                m = data.get("mode")
                if m in ("auto", "confirm"):
                    MODES[cid] = m
                    r = RUNS.get(cid)
                    if r:
                        r.mode = m
                    await websocket.send_json({"type": "mode_set", "mode": m})
            elif t == "tool_decision":
                # 客户端就待确认的工具调用作出决策（路由到当前运行句柄）
                r = RUNS.get(cid)
                if r and r.pending and not r.pending.done():
                    r.pending.set_result(data)
            elif t in ("cancel", "stop"):
                r = RUNS.get(cid)
                if r and r.task and not r.task.done():
                    r.task.cancel()
    except WebSocketDisconnect:
        pass  # 断线仅取消订阅，后台任务继续运行（由 finally 完成退订）
    except Exception as e:
        try:
            await websocket.send_json({"type": "error", "content": str(e)})
        except Exception:
            pass
    finally:
        r = RUNS.get(cid)
        if r:
            r.unsubscribe(websocket)


async def run_turn(cid: str, content: str, run: RunHandle | None, attachments: list | None = None, user: str = ""):
    """执行一轮对话。

    run 为 None 时走非流式（REST 回退），强制为自动模式且不推送事件。
    user 为发起者用户名（run.user 优先），用于按用户解析模型偏好。
    在「确认模式」下，工具调用会在执行前被中断并推送 tool_confirm 事件，
    等待客户端决策（approve / deny / cancel）后通过 Command(resume) 继续。
    所有事件经 RunHandle.emit 广播：多端可同时订阅，断线重连可回放续看。
    attachments 为用户消息的附件清单，随消息落库供前端回显。
    """
    mode = run.mode if run else "auto"
    user = (run.user if run else "") or user
    token = workspace.current_workspace.set(workspace.get_workspace(cid))
    cancelled = False
    try:
        messages = store.load_messages(cid)
        user_msg: dict = {"role": "user", "content": content}
        if attachments:
            user_msg["attachments"] = attachments
        messages.append(user_msg)
        assistant = {"role": "assistant", "content": "", "tool_calls": []}

        # 乐观落库用户消息：此前只在整轮结束时才 save_messages，导致「AI 回复中
        # 刷新页面」时这一轮的消息还没进库，用户刚发的内容在 UI 上凭空消失。
        # 先写入用户消息（并 touch 让会话列表顺序/标题及时更新），结束时再整体
        # 覆盖为含 AI 回复的最终版本。失败不影响本轮执行。
        # 注意：这里**不**写空的 assistant 占位——load_messages 会把它读成一个
        # 空气泡；「回复中」状态由 WS 的 running 事件驱动，不需要靠消息表达。
        try:
            store.save_messages(cid, messages)
            store.touch(cid)
        except Exception as e:
            print(f"[turn] 预落库用户消息失败（忽略）: {e}")

        try:
            agent = agent_manager.get_agent(user)
        except Exception as e:
            err = f"Agent 初始化失败: {e}"
            if run:
                await run.emit({"type": "error", "content": err})
            return {"assistant": {"role": "assistant", "content": err, "tool_calls": []}}

        if run:
            await run.emit({"type": "message_start"})

        config = {"configurable": {"thread_id": cid}}
        # 调用模型前先自愈历史：只要检查点里留有「请求了工具但没结果」的消息，
        # 之后每次请求都会被服务商以 INVALID_CHAT_HISTORY 拒绝，且该会话永久卡死。
        # 这里主动补齐缺失的 ToolMessage，把会话救回可用状态。
        await _ensure_history_valid(agent, config)
        # run_id -> tool_call 映射：并行工具调用时把 on_tool_end 的输出精确归属到
        # 对应的调用上（end 事件到达顺序可能与 start 不同，不能简单取「最后一个」）
        tool_by_run: dict = {}
        # 模型调用统计（对齐模型库 ai_model_call_log）：累计 token，记首次模型调用耗时
        _call_start = time.monotonic()
        _usage_prompt = 0
        _usage_completion = 0
        _call_failed = False
        # 首轮输入为用户消息；后续轮次为中断后的 resume 续跑。Agent 已开启
        # interrupt_before=["tools"]，因此每一次工具调用前都会在此循环中被拦截。
        first = True
        _retried = False   # INVALID_CHAT_HISTORY 自愈重试只做一次，避免死循环
        while True:
            inp = {"messages": [("user", content)]} if first else Command(resume=True)
            first = False
            interrupted = False
            try:
                async for event in agent.astream_events(inp, config=config, version="v2"):
                    kind = event.get("event")
                    if kind == "on_chat_model_stream":
                        chunk = event["data"]["chunk"]
                        # 思考链（deepseek/ark 等模型的 reasoning_content）
                        think = _chunk_reasoning(chunk)
                        if think:
                            assistant["reasoning"] = assistant.get("reasoning", "") + think
                            if run:
                                await run.emit({"type": "reasoning", "content": think})
                        text = _chunk_text(chunk)
                        if text:
                            assistant["content"] += text
                            if run:
                                await run.emit({"type": "token", "content": text})
                    elif kind == "on_chat_model_end":
                        # 累计 token 用量（兼容 usage_metadata / token_usage 两种字段）
                        out_obj = (event.get("data") or {}).get("output")
                        _um = None
                        try:
                            _um = getattr(out_obj, "usage_metadata", None)
                            if not _um and hasattr(out_obj, "response_metadata"):
                                _um = (out_obj.response_metadata or {}).get("token_usage")
                            if not _um and hasattr(out_obj, "generations"):
                                g0 = out_obj.generations[0][0]
                                _um = getattr(g0, "usage_metadata", None) or \
                                      getattr(getattr(g0, "message", None), "usage_metadata", None)
                        except Exception:
                            _um = None
                        if isinstance(_um, dict):
                            _usage_prompt += int(_um.get("input_tokens") or _um.get("prompt_tokens") or 0)
                            _usage_completion += int(
                                _um.get("output_tokens") or _um.get("completion_tokens") or 0)
                    elif kind == "on_tool_start":
                        tc = {
                            "name": event.get("name", ""),
                            "input": _safe_str(event["data"].get("input")),
                            "output": "",
                            # 记录该工具调用发生时已输出的正文长度：前端据此把
                            # 消息切分为「文本 → 工具组 → 文本」的交错序列
                            "at": len(assistant["content"]),
                        }
                        assistant["tool_calls"].append(tc)
                        rid = event.get("run_id")
                        if rid:
                            tool_by_run[rid] = tc
                        if run:
                            await run.emit({"type": "tool_start", "name": tc["name"], "input": tc["input"], "at": tc["at"]})
                    elif kind == "on_tool_end":
                        out = _safe_str(event["data"].get("output"))
                        rid = event.get("run_id")
                        tc = tool_by_run.get(rid)
                        if tc is not None:
                            tc["output"] = out
                        else:
                            _attach_output(assistant, out)
                        if run:
                            await run.emit({
                                "type": "tool_end",
                                "output": out[:3000],
                                "name": (tc or {}).get("name", ""),
                                "at": (tc or {}).get("at"),
                            })
            except GraphInterrupt:
                interrupted = True
            except asyncio.CancelledError:
                cancelled = True
                # 手动停止：图可能正停在「已请求工具、尚未拿到结果」的位置，
                # 这里就地补齐占位 ToolMessage，否则下一次对话必然 INVALID_CHAT_HISTORY
                await _ensure_history_valid(agent, config)
                break
            except Exception as e:
                err = f"执行出错: {e}"
                # 服务商因消息历史非法而拒绝（INVALID_CHAT_HISTORY / 各类 provider
                # 的等价报错）：就地修复一次并重试，避免整个会话被永久卡死。
                if not _retried and _is_invalid_history_error(e):
                    _retried = True
                    if await _ensure_history_valid(agent, config):
                        if run:
                            await run.emit({
                                "type": "warn",
                                "content": "检测到工具调用记录不完整，已自动修复并重试",
                            })
                        continue  # 用同一轮输入重新发起
                _call_failed = True
                assistant["content"] += f"\n[{err}]"
                if run:
                    await run.emit({"type": "error", "content": err})
                # 异常中断同样可能留下悬空 tool_call：先自愈再结束，
                # 让用户下一次发消息还能正常用（否则会话被报错彻底锁死）
                if await _ensure_history_valid(agent, config) and run:
                    await run.emit({
                        "type": "warn",
                        "content": "已自动修复中断的工具调用记录，可以继续对话",
                    })
                break

            # astream_events 遇中断不会抛异常，需通过状态机判定是否停在 tools 前
            if not interrupted:
                st = await agent.aget_state(config)
                if st.next and "tools" in st.next:
                    interrupted = True

            if not interrupted:
                break  # 正常完成

            # 仅在「确认模式」且有运行句柄时才向用户请求审批
            if mode != "confirm" or not run:
                continue  # 自动模式：直接 resume 执行

            st = await agent.aget_state(config)
            ai = st.values["messages"][-1]
            pending = [
                {"id": tc["id"], "name": tc["name"], "args": tc["args"]}
                for tc in (ai.tool_calls or [])
            ]
            if not pending:
                continue
            await run.emit({"type": "tool_confirm", "tool_calls": pending})

            run.pending = asyncio.get_event_loop().create_future()
            try:
                decision = await asyncio.wait_for(run.pending, timeout=MODE_TIMEOUT)
            except asyncio.TimeoutError:
                decision = {"action": "deny"}  # 超时视为全部拒绝
            except asyncio.CancelledError:
                cancelled = True
                break
            finally:
                run.pending = None

            if decision.get("action") == "cancel":
                assistant["content"] += "\n[用户取消了工具调用]"
                decision = {"action": "deny"}  # 取消等价于拒绝本轮全部工具

            # 依据决策改写本轮 tool_calls（拒绝的工具不会执行），然后续跑
            ai = (await agent.aget_state(config)).values["messages"][-1]
            denied = await _apply_tool_decision(agent, config, ai, decision)
            if denied:
                assistant["content"] += f"\n（已跳过用户拒绝的工具：{', '.join(denied)}）"
            continue

        if not cancelled:
            messages.append(assistant)
            store.save_messages(cid, messages)
            store.touch(cid)
            meta = store.get(cid)
            if meta and (not meta.get("title") or meta.get("title") == "新对话"):
                store.rename(cid, content[:30])
        elif assistant["content"] or assistant["tool_calls"]:
            # 手动停止：保留已生成的部分内容并标记，避免用户话费凭空消失
            if assistant["content"]:
                assistant["content"] += "\n\n（已手动停止）"
            else:
                assistant["content"] = "（已手动停止）"
            messages.append(assistant)
            store.save_messages(cid, messages)
            store.touch(cid)
        if run:
            await run.emit({"type": "message_end", "stopped": cancelled})
        # 模型调用日志（对齐模型库 ai_model_call_log）：无论成败都记，
        # 失败=执行期异常；手动停止不计为失败。
        if agent_manager is not None:
            _cfg = agent_manager.get_cfg(user)
            _ok = not _call_failed
            _est = False
            _p, _c = _usage_prompt, _usage_completion
            # 服务商未返回 usage（如火山 Ark /api/plan/v1）时，用字符数兜底估算
            if _p == 0 and _c == 0:
                _p = _estimate_tokens(content)
                _c = _estimate_tokens(assistant.get("content", ""))
                _est = True
            runtime.log_call(
                model=_cfg.get("model", ""),
                provider=_cfg.get("provider", ""),
                user_id=user,
                prompt_tokens=_p,
                completion_tokens=_c,
                cost=0.0,  # 费用需模型定价，暂记 0（后续可接单价表计算）
                success=_ok,
                cost_time=int((time.monotonic() - _call_start) * 1000),
                estimated=_est,
            )
        return {"assistant": assistant}
    finally:
        workspace.current_workspace.reset(token)


async def _apply_tool_decision(agent, config, ai, decision: dict) -> list[str]:
    """按用户决策修改当前 AI 消息的 tool_calls 并续跑。

    - approve 的工具保留（可带编辑后的 args），随后照常执行；
    - deny 的工具保留 tool_call 但注入一条合成的 ToolMessage，明确告知模型
      「该工具已被用户拒绝，不要重试」。**不能**直接删掉 tool_call——
      那会留下「AI 请求了工具却没有结果」的悬空历史，下一轮喂给模型就是
      INVALID_CHAT_HISTORY（AIMessage with tool_calls without ToolMessage）。
      注入 ToolMessage 而非删除，ReAct 的工具节点会把它当作已完成的调用，
      从而照常继续执行其余获批的工具。
    返回的被拒绝工具名用于前端提示。
    """
    action = decision.get("action", "submit")  # submit | deny | cancel
    calls = {c.get("id"): c for c in decision.get("calls", [])}
    default = "approve" if action == "submit" else "deny"

    keep_tcs: list = []          # 保留在 AI 消息上的 tool_calls（含被拒的）
    approved_ids: set = set()
    denied_msgs: list = []       # 被拒工具对应的占位 ToolMessage
    denied_names: list[str] = []

    for tc in (ai.tool_calls or []):
        d = calls.get(tc["id"])
        approve = (d["action"] == "approve") if d else (default == "approve")
        if approve:
            if d and "args" in d:
                t = dict(tc)
                t["args"] = d["args"]
                keep_tcs.append(t)
            else:
                keep_tcs.append(tc)
            approved_ids.add(tc["id"])
        else:
            # 保留调用记录，但用 ToolMessage 告诉模型它被拒绝了
            keep_tcs.append(tc)
            denied_names.append(tc["name"])
            denied_msgs.append(ToolMessage(
                content=f"用户拒绝执行工具 {tc['name']}。请不要重试该调用，"
                        f"改用其他方式完成用户需求，或直接说明无法执行。",
                tool_call_id=tc["id"],
                name=tc["name"],
                status="error",
            ))

    new_ai = ai.model_copy(update={"tool_calls": keep_tcs, "invalid_tool_calls": []})
    # 一次 aupdate_state 同时写入：改后的 AI 消息 + 被拒工具的占位结果
    await agent.aupdate_state(config, {"messages": [new_ai, *denied_msgs]})

    # 被拒的工具已由 ToolMessage 答复，需要从图状态里摘掉，避免 tools 节点重复执行。
    # 做法：把获批的 tool_calls 重新写回 AI 消息（ToolMessage 已在历史里，
    # 因此这一条更新不会产生新的悬空调用）。
    if denied_names:
        await agent.aupdate_state(config, {"messages": [ai.model_copy(
            update={"tool_calls": [t for t in keep_tcs if t["id"] in approved_ids] or [],
                    "invalid_tool_calls": []})]})
    return denied_names


def _is_invalid_history_error(e: Exception) -> bool:
    """判断异常是否属于「消息历史非法」这一类（各家服务商文案不一，做宽松匹配）。

    LangGraph/OpenAI 兼容层会抛 INVALID_CHAT_HISTORY，并附带
    "do not have a corresponding ToolMessage"；部分网关只回中文/英文短语，
    因此同时匹配若干关键字。
    """
    s = str(e).lower()
    return (
        "invalid_chat_history" in s
        or "do not have a corresponding toolmessage" in s
        or ("tool_calls" in s and "toolmessage" in s)
        or "tool_call_id" in s and "not found" in s
        or "an assistant message with 'tool_calls' must be followed by tool messages" in s
    )


def _repair_dangling_tool_calls(messages: list) -> list:
    """修复「AI 请求了工具但没有对应 ToolMessage」的历史。

    这种历史一旦写进检查点就会永久卡死该会话：之后每次调用模型都会被
    服务商以 INVALID_CHAT_HISTORY 拒绝，且报错里看不出怎么恢复。
    触发场景：运行中途崩溃/被杀、确认模式下改写了 tool_calls、手动停止。

    这里按消息顺序扫描，为每个没有结果的 tool_call 补一条说明性的
    ToolMessage，让历史重新合法（内容说明「工具未执行完成」，模型看到后
    会自行决定重试或换方案，而不是永远报错）。
    """
    if not messages:
        return messages
    # 已有结果的 tool_call_id
    answered = {m.tool_call_id for m in messages if isinstance(m, ToolMessage)}
    out: list = []
    repaired = 0
    for m in messages:
        out.append(m)
        tcs = getattr(m, "tool_calls", None) or []
        if not tcs:
            continue
        for tc in tcs:
            tcid = tc.get("id") if isinstance(tc, dict) else getattr(tc, "id", None)
            if not tcid or tcid in answered:
                continue
            tname = tc.get("name") if isinstance(tc, dict) else getattr(tc, "name", "")
            out.append(ToolMessage(
                content=f"（该工具调用未执行完成，没有返回结果：{tname}）",
                tool_call_id=tcid,
                name=tname or "unknown",
                status="error",
            ))
            answered.add(tcid)
            repaired += 1
    if repaired:
        print(f"[agent] 已修复 {repaired} 个缺失结果的工具调用（避免 INVALID_CHAT_HISTORY）")
    return out


async def _ensure_history_valid(agent, config) -> bool:
    """在调用模型前校验并修复该 thread 的消息历史。返回是否做过修复。"""
    try:
        st = await agent.aget_state(config)
        msgs = list((st.values or {}).get("messages") or [])
        if not msgs:
            return False
        fixed = _repair_dangling_tool_calls(msgs)
        if len(fixed) == len(msgs):
            return False
        await agent.aupdate_state(config, {"messages": fixed})
        return True
    except Exception as e:
        print(f"[agent] 历史校验失败（忽略，继续执行）: {e}")
        return False


# ---------- 工具函数 ----------
def _chunk_text(chunk) -> str:
    c = getattr(chunk, "content", "")
    if isinstance(c, str):
        return c
    if isinstance(c, list):
        return "".join(p.get("text", "") if isinstance(p, dict) else str(p) for p in c)
    return ""


def _estimate_tokens(text: str) -> int:
    """粗略估算 token 数（服务商未返回 usage 时兜底）。

    经验近似：CJK 字符约 1 token/字；其他（含英文/符号）约 1 token/4 字符。
    仅用于统计量级，不精确——调用日志会以 estimated 标记区分。
    """
    if not text:
        return 0
    cjk = 0
    other = 0
    for ch in text:
        if "\u4e00" <= ch <= "\u9fff" or "\u3040" <= ch <= "\u30ff" or "\uac00" <= ch <= "\ud7af":
            cjk += 1
        else:
            other += 1
    return cjk + (other + 3) // 4


def _chunk_reasoning(chunk) -> str:
    """提取流式 chunk 中的思考链内容（deepseek / ark 等模型的
    additional_kwargs.reasoning_content 字段；无则返回空串）。"""
    kw = getattr(chunk, "additional_kwargs", None) or {}
    r = kw.get("reasoning_content")
    return r if isinstance(r, str) else ""


def _safe_str(v) -> str:
    if isinstance(v, (dict, list)):
        try:
            return json.dumps(v, ensure_ascii=False)
        except Exception:
            return str(v)
    return str(v)


def _attach_output(assistant, out):
    for tc in reversed(assistant["tool_calls"]):
        if not tc["output"]:
            tc["output"] = out
            return
    if assistant["tool_calls"]:
        assistant["tool_calls"][-1]["output"] = out


# ===================== SPA 前端路由回退 =====================
# /projects、/automation 等前端路由由 Vue Router 接管，服务端只需返回同一个
# 入口 HTML；否则直接访问或刷新这些地址会得到 404。
#
# 必须注册在文件最末尾：FastAPI 按注册顺序匹配，此路由带 {full_path:path}
# 通配，若提前注册会吞掉其后声明的所有 /api、/ws 路由。
# 这里再显式排除三类前缀，确保接口与静态资源的 404 语义不被改写。
@app.get("/{full_path:path}", response_class=HTMLResponse)
def spa_fallback(full_path: str):
    if full_path.startswith(("api/", "static/", "ws/")):
        return JSONResponse({"detail": "Not Found"}, status_code=404)
    if not os.path.exists(INDEX_HTML):
        return HTMLResponse("<h3>前端未构建：请先执行 npm run build</h3>", status_code=500)
    return FileResponse(INDEX_HTML)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("server:app", host=config.HOST, port=config.PORT, reload=False)
