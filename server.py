"""LangGraph 服务端 Agent —— FastAPI 后端。

- 多会话：每个会话对应一个 LangGraph thread_id，状态由 SqliteSaver 持久化。
- 工具调用：ReAct 图自动调用技能提供的工具。
- 技能管理：REST 接口启停 / 新建 / 删除自定义技能。
- 流式对话：WebSocket 推送 token 与工具调用事件。
"""
import os
import json
from contextlib import asynccontextmanager

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

import config
from skills.registry import SkillRegistry
from agent.builder import AgentManager
from conversation.store import ConversationStore
import workspace

# ---- 全局单例 ----
registry = SkillRegistry(config.DATA_DIR)
store = ConversationStore(config.DATA_DIR)
agent_manager = None  # 在 lifespan 中初始化（SqliteSaver 为异步上下文）


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


@app.get("/")
def index():
    return FileResponse("static/index.html")


# ===================== 技能管理 =====================
@app.get("/api/skills")
def api_skills():
    return registry.list()


@app.post("/api/skills/{sid}/enable")
def api_enable(sid: str):
    ok = registry.enable(sid)
    return {"ok": ok, "enabled": registry.is_enabled(sid)}


@app.post("/api/skills/{sid}/disable")
def api_disable(sid: str):
    ok = registry.disable(sid)
    return {"ok": ok, "enabled": registry.is_enabled(sid)}


@app.post("/api/skills/custom")
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


@app.delete("/api/skills/{sid}")
def api_remove(sid: str):
    return {"ok": registry.remove_custom(sid)}


@app.post("/api/skills/reload")
def api_reload():
    return {"ok": True, "skills": registry.reload()}


# ===================== 会话管理 =====================
@app.get("/api/conversations")
def api_conv_list():
    return store.list()


@app.post("/api/conversations")
async def api_conv_create(body: dict = None):
    title = (body or {}).get("title", "新对话")
    conv = store.create(title)
    workspace.get_workspace(conv["id"])  # 预建该会话隔离的工作目录
    return conv


@app.get("/api/conversations/{cid}")
def api_conv_get(cid: str):
    meta = store.get(cid)
    if not meta:
        return {"ok": False, "error": "not found"}
    return {"ok": True, "meta": meta, "messages": store.load_messages(cid)}


@app.delete("/api/conversations/{cid}")
def api_conv_delete(cid: str):
    store.delete(cid)
    return {"ok": True}


@app.patch("/api/conversations/{cid}")
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


@app.get("/api/conversations/{cid}/files")
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


@app.get("/api/conversations/{cid}/files/raw")
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
@app.post("/api/conversations/{cid}/messages")
async def api_send(cid: str, body: dict):
    content = body.get("content", "")
    result = await run_turn(cid, content, None)
    return {"ok": True, "assistant": result["assistant"]}


# ===================== WebSocket 流式对话 =====================
@app.websocket("/ws/{cid}")
async def ws_endpoint(websocket: WebSocket, cid: str):
    await websocket.accept()
    if not store.get(cid):
        await websocket.send_json({"type": "error", "content": "会话不存在"})
        await websocket.close()
        return
    try:
        while True:
            data = await websocket.receive_json()
            if data.get("type") == "message":
                await run_turn(cid, data.get("content", ""), websocket)
    except WebSocketDisconnect:
        pass
    except Exception as e:
        try:
            await websocket.send_json({"type": "error", "content": str(e)})
        except Exception:
            pass


async def run_turn(cid: str, content: str, websocket):
    """执行一轮对话。websocket 为 None 时走非流式（REST）。"""
    # 绑定当前会话隔离的工作目录，工具在执行时会自动作用于此目录
    token = workspace.current_workspace.set(workspace.get_workspace(cid))
    try:
        messages = store.load_messages(cid)
        messages.append({"role": "user", "content": content})
        assistant = {"role": "assistant", "content": "", "tool_calls": []}

        try:
            agent = agent_manager.get_agent()
        except Exception as e:
            err = f"Agent 初始化失败: {e}"
            if websocket:
                await websocket.send_json({"type": "error", "content": err})
            return {"assistant": {"role": "assistant", "content": err, "tool_calls": []}}

        if websocket:
            await websocket.send_json({"type": "message_start"})

        try:
            async for event in agent.astream_events(
                {"messages": [("user", content)]},
                config={"configurable": {"thread_id": cid}},
                version="v2",
            ):
                kind = event.get("event")
                if kind == "on_chat_model_stream":
                    text = _chunk_text(event["data"]["chunk"])
                    if text:
                        assistant["content"] += text
                        if websocket:
                            await websocket.send_json({"type": "token", "content": text})
                elif kind == "on_tool_start":
                    tc = {
                        "name": event.get("name", ""),
                        "input": _safe_str(event["data"].get("input")),
                        "output": "",
                    }
                    assistant["tool_calls"].append(tc)
                    if websocket:
                        await websocket.send_json({"type": "tool_start", "name": tc["name"], "input": tc["input"]})
                elif kind == "on_tool_end":
                    out = _safe_str(event["data"].get("output"))
                    _attach_output(assistant, out)
                    if websocket:
                        await websocket.send_json({"type": "tool_end", "output": out[:3000]})
        except Exception as e:
            err = f"执行出错: {e}"
            assistant["content"] += f"\n[{err}]"
            if websocket:
                await websocket.send_json({"type": "error", "content": err})

        messages.append(assistant)
        store.save_messages(cid, messages)
        store.touch(cid)
        meta = store.get(cid)
        if meta and (not meta.get("title") or meta.get("title") == "新对话"):
            store.rename(cid, content[:30])
        if websocket:
            await websocket.send_json({"type": "message_end"})
        return {"assistant": assistant}
    finally:
        workspace.current_workspace.reset(token)


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
