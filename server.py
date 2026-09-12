"""LangGraph 服务端 Agent —— FastAPI 后端。

- 登录认证：HttpOnly Cookie 会话，未登录跳转 /login；可通过 AUTH_USERNAME/PASSWORD 关闭。
- 多会话：每个会话对应一个 LangGraph thread_id，状态由 SqliteSaver 持久化。
- 工具调用：ReAct 图自动调用技能提供的工具；支持「自动 / 确认」两种权限模式。
- 技能管理：REST 接口启停 / 新建 / 删除自定义技能。
- 流式对话：WebSocket 推送 token、工具调用事件与（确认模式下）工具审批请求。
"""
import os
import json
import asyncio
from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, Request, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from langgraph.types import Command
from langgraph.errors import GraphInterrupt

import config
import auth as authmod
from skills.registry import SkillRegistry
from agent.builder import AgentManager
from conversation.store import ConversationStore
import workspace

# 确认模式下等待用户决策的最长等待时间（秒），超时视为全部拒绝
MODE_TIMEOUT = 600

# ---- 全局单例 ----
registry = SkillRegistry(config.DATA_DIR)
store = ConversationStore(config.DATA_DIR)
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
    """REST 接口依赖：未登录返回 401。认证关闭时直接放行。"""
    if not authmod.enabled():
        return None
    if not _is_logged_in(request):
        raise _Unauthorized()


class _Unauthorized(Exception):
    """由异常处理器转为 401 JSON 响应。"""


class Conn:
    """单个 WebSocket 连接的上下文。

    - mode: 工具调用权限模式，"auto" 自动执行 / "confirm" 执行前需用户确认。
    - pending: 确认模式下等待用户决策时挂起的 asyncio.Future。
    - task: 本轮对话（run_turn）的后台任务，便于在收到 cancel 或断线时取消。
    - busy: 是否正在处理一轮对话（防止并发重入）。
    """

    def __init__(self, ws: WebSocket):
        self.ws = ws
        self.mode = "auto"
        self.pending: asyncio.Future | None = None
        self.task: asyncio.Task | None = None
        self.busy = False


@asynccontextmanager
async def lifespan(app: FastAPI):
    os.makedirs(config.DATA_DIR, exist_ok=True)
    from langgraph.checkpoint.sqlite.aio import AsyncSqliteSaver  # noqa: E402
    async with AsyncSqliteSaver.from_conn_string(config.DB_PATH) as checkpointer:
        global agent_manager
        agent_manager = AgentManager(checkpointer, registry)
        yield


app = FastAPI(title="LangGraph 服务端 Agent", lifespan=lifespan)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.exception_handler(_Unauthorized)
async def _unauthorized_handler(request: Request, exc: _Unauthorized):
    """未登录访问受保护接口时统一返回 401 JSON。"""
    return JSONResponse(
        {"ok": False, "error": "未登录", "code": "unauthorized"}, status_code=401
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

    if not authmod.check_credentials(username, password):
        authmod.record_fail(ip)
        # 统一提示，不泄露是用户名还是密码错误
        return JSONResponse({"ok": False, "error": "用户名或密码错误"}, status_code=401)

    authmod.clear_fails(ip)
    ttl = authmod.SESSION_TTL if remember else authmod.SESSION_TTL_SHORT
    token = authmod.make_session(username, ttl)
    resp = JSONResponse({"ok": True, "username": username})
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
    return {"authenticated": user is not None, "username": user, "enabled": authmod.enabled()}


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


# ===================== 会话管理 =====================
@app.get("/api/conversations", dependencies=[Depends(require_auth)])
def api_conv_list():
    return store.list()


@app.post("/api/conversations", dependencies=[Depends(require_auth)])
async def api_conv_create(body: dict = None):
    title = (body or {}).get("title", "新对话")
    conv = store.create(title)
    workspace.get_workspace(conv["id"])  # 预建该会话隔离的工作目录
    return conv


@app.get("/api/conversations/{cid}", dependencies=[Depends(require_auth)])
def api_conv_get(cid: str):
    meta = store.get(cid)
    if not meta:
        return {"ok": False, "error": "not found"}
    return {"ok": True, "meta": meta, "messages": store.load_messages(cid)}


@app.delete("/api/conversations/{cid}", dependencies=[Depends(require_auth)])
def api_conv_delete(cid: str):
    store.delete(cid)
    return {"ok": True}


@app.patch("/api/conversations/{cid}", dependencies=[Depends(require_auth)])
async def api_conv_rename(cid: str, body: dict):
    store.rename(cid, body.get("title", "新对话"))
    return {"ok": True}


# ===================== 会话工作目录文件浏览 =====================
_TEXT_LIMIT = 200 * 1024  # 单文件预览上限 200KB


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
    if size > _TEXT_LIMIT:
        return {"ok": True, "type": "file", "path": path, "name": name,
                "size": size, "content": "", "truncated": True, "binary": False,
                "note": f"文件过大（{size} 字节，超过 {_TEXT_LIMIT} 预览上限），请使用下载查看。"}
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
            for name in sorted(os.listdir(full)):
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


# ===================== 对话（非流式回退） =====================
@app.post("/api/conversations/{cid}/messages", dependencies=[Depends(require_auth)])
async def api_send(cid: str, body: dict):
    content = body.get("content", "")
    result = await run_turn(cid, content, None)
    return {"ok": True, "assistant": result["assistant"]}


# ===================== WebSocket 流式对话 =====================
@app.websocket("/ws/{cid}")
async def ws_endpoint(websocket: WebSocket, cid: str):
    await websocket.accept()
    # WebSocket 无法用 HTTP 依赖，此处手工校验会话 Cookie
    if authmod.enabled():
        token = websocket.cookies.get(authmod.COOKIE_NAME)
        if authmod.verify_session(token) is None:
            await websocket.send_json(
                {"type": "error", "content": "未登录", "code": "unauthorized"}
            )
            await websocket.close(code=4401)
            return
    if not store.get(cid):
        await websocket.send_json({"type": "error", "content": "会话不存在"})
        await websocket.close()
        return
    conn = Conn(websocket)

    def _done(task: asyncio.Task) -> None:
        conn.busy = False
        if task.cancelled():
            return
        exc = task.exception()
        if exc and not isinstance(exc, asyncio.CancelledError):
            print("[run_turn] 未捕获异常:", exc)

    try:
        while True:
            data = await websocket.receive_json()
            t = data.get("type")
            if t == "message":
                if conn.busy:
                    await websocket.send_json(
                        {"type": "warn", "content": "上一轮对话尚未结束，请稍候。"}
                    )
                    continue
                conn.busy = True
                conn.task = asyncio.create_task(run_turn(cid, data.get("content", ""), conn))
                conn.task.add_done_callback(_done)
                # 注意：此处不 await run_turn，接收循环继续运行，
                # 以便在「确认模式」下收到客户端的 tool_decision / cancel 消息。
            elif t == "set_mode":
                m = data.get("mode")
                if m in ("auto", "confirm"):
                    conn.mode = m
                    await websocket.send_json({"type": "mode_set", "mode": m})
            elif t == "tool_decision":
                # 客户端就待确认的工具调用作出决策
                if conn.pending and not conn.pending.done():
                    conn.pending.set_result(data)
            elif t == "cancel":
                if conn.task and not conn.task.done():
                    conn.task.cancel()
                conn.busy = False
    except WebSocketDisconnect:
        if conn.task and not conn.task.done():
            conn.task.cancel()
    except Exception as e:
        try:
            await websocket.send_json({"type": "error", "content": str(e)})
        except Exception:
            pass
        if conn.task and not conn.task.done():
            conn.task.cancel()


async def run_turn(cid: str, content: str, conn: Conn | None):
    """执行一轮对话。

    conn 为 None 时走非流式（REST 回退），强制为自动模式。
    在「确认模式」下，工具调用会在执行前被中断并推送 tool_confirm 事件，
    等待客户端决策（approve / deny / cancel）后通过 Command(resume) 继续。
    """
    ws = conn.ws if conn else None
    mode = conn.mode if conn else "auto"
    token = workspace.current_workspace.set(workspace.get_workspace(cid))
    cancelled = False
    try:
        messages = store.load_messages(cid)
        messages.append({"role": "user", "content": content})
        assistant = {"role": "assistant", "content": "", "tool_calls": []}

        try:
            agent = agent_manager.get_agent()
        except Exception as e:
            err = f"Agent 初始化失败: {e}"
            if ws:
                await ws.send_json({"type": "error", "content": err})
            return {"assistant": {"role": "assistant", "content": err, "tool_calls": []}}

        if ws:
            await ws.send_json({"type": "message_start"})

        config = {"configurable": {"thread_id": cid}}
        # 首轮输入为用户消息；后续轮次为中断后的 resume 续跑。Agent 已开启
        # interrupt_before=["tools"]，因此每一次工具调用前都会在此循环中被拦截。
        first = True
        while True:
            inp = {"messages": [("user", content)]} if first else Command(resume=True)
            first = False
            interrupted = False
            try:
                async for event in agent.astream_events(inp, config=config, version="v2"):
                    kind = event.get("event")
                    if kind == "on_chat_model_stream":
                        text = _chunk_text(event["data"]["chunk"])
                        if text:
                            assistant["content"] += text
                            if ws:
                                await ws.send_json({"type": "token", "content": text})
                    elif kind == "on_tool_start":
                        tc = {
                            "name": event.get("name", ""),
                            "input": _safe_str(event["data"].get("input")),
                            "output": "",
                        }
                        assistant["tool_calls"].append(tc)
                        if ws:
                            await ws.send_json({"type": "tool_start", "name": tc["name"], "input": tc["input"]})
                    elif kind == "on_tool_end":
                        out = _safe_str(event["data"].get("output"))
                        _attach_output(assistant, out)
                        if ws:
                            await ws.send_json({"type": "tool_end", "output": out[:3000]})
            except GraphInterrupt:
                interrupted = True
            except asyncio.CancelledError:
                cancelled = True
                break
            except Exception as e:
                err = f"执行出错: {e}"
                assistant["content"] += f"\n[{err}]"
                if ws:
                    await ws.send_json({"type": "error", "content": err})
                break

            # astream_events 遇中断不会抛异常，需通过状态机判定是否停在 tools 前
            if not interrupted:
                st = await agent.aget_state(config)
                if st.next and "tools" in st.next:
                    interrupted = True

            if not interrupted:
                break  # 正常完成

            # 仅在「确认模式」且为 WebSocket 连接时才向用户请求审批
            if mode != "confirm" or not ws:
                continue  # 自动模式：直接 resume 执行

            st = await agent.aget_state(config)
            ai = st.values["messages"][-1]
            pending = [
                {"id": tc["id"], "name": tc["name"], "args": tc["args"]}
                for tc in (ai.tool_calls or [])
            ]
            if not pending:
                continue
            await ws.send_json({"type": "tool_confirm", "tool_calls": pending})

            conn.pending = asyncio.get_event_loop().create_future()
            try:
                decision = await asyncio.wait_for(conn.pending, timeout=MODE_TIMEOUT)
            except asyncio.TimeoutError:
                decision = {"action": "deny"}  # 超时视为全部拒绝
            except asyncio.CancelledError:
                cancelled = True
                break
            finally:
                conn.pending = None

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
        if ws:
            await ws.send_json({"type": "message_end"})
        return {"assistant": assistant}
    finally:
        workspace.current_workspace.reset(token)
        if conn:
            conn.busy = False


async def _apply_tool_decision(agent, config, ai, decision: dict) -> list[str]:
    """按用户决策修改当前 AI 消息的 tool_calls 并续跑。

    - approve 的工具保留（可带编辑后的 args），随后照常执行；
    - deny 的工具直接从 tool_calls 中移除，不再执行（不注入 ToolMessage：
      否则 ReAct 的工具节点会认为该调用已得到结果而跳过其余工具）。
    返回的被拒绝工具名用于前端提示。
    """
    action = decision.get("action", "submit")  # submit | deny | cancel
    calls = {c.get("id"): c for c in decision.get("calls", [])}
    default = "approve" if action == "submit" else "deny"

    new_tcs = []
    denied_names: list[str] = []
    for tc in (ai.tool_calls or []):
        d = calls.get(tc["id"])
        approve = (d["action"] == "approve") if d else (default == "approve")
        if approve:
            if d and "args" in d:
                t = dict(tc)
                t["args"] = d["args"]
                new_tcs.append(t)
            else:
                new_tcs.append(tc)
        else:
            denied_names.append(tc["name"])
    new_ai = ai.model_copy(update={"tool_calls": new_tcs, "invalid_tool_calls": []})
    await agent.aupdate_state(config, {"messages": [new_ai]})
    return denied_names


# ---------- 工具函数 ----------
def _chunk_text(chunk) -> str:
    c = getattr(chunk, "content", "")
    if isinstance(c, str):
        return c
    if isinstance(c, list):
        return "".join(p.get("text", "") if isinstance(p, dict) else str(p) for p in c)
    return ""


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


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("server:app", host=config.HOST, port=config.PORT, reload=False)
