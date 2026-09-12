"""按会话隔离的工作目录管理。

每个会话（cid）拥有独立的工作目录：data/workspaces/{cid}。
工具（list_dir / read_file / run_python）在执行时通过 current_workspace
上下文变量定位到当前会话的工作目录，从而实现会话级别的文件隔离。

不使用全局可变变量，而用 ContextVar —— 并发的多个会话各自
持有独立的工作目录上下文，互不串扰。
"""
import os
from contextvars import ContextVar

import config

WORKSPACE_ROOT = os.path.join(config.DATA_DIR, "workspaces")
os.makedirs(WORKSPACE_ROOT, exist_ok=True)

# 当前执行轮次所属会话的工作目录（由 server.run_turn 设置）
current_workspace: ContextVar[str | None] = ContextVar("current_workspace", default=None)


def get_workspace(cid: str) -> str:
    """返回该会话的工作目录（隔离），不存在则创建。"""
    path = os.path.join(WORKSPACE_ROOT, cid)
    os.makedirs(path, exist_ok=True)
    return path


def current_root() -> str:
    """工具当前应使用的根目录：优先用会话工作目录，否则回退到进程 CWD。"""
    return current_workspace.get() or os.getcwd()


def resolve(cid: str, path: str = "") -> str:
    """将相对路径解析到该会话工作目录内的绝对路径，越界则抛错。"""
    root = get_workspace(cid)
    full = os.path.normpath(os.path.join(root, path or ""))
    if full != root and not full.startswith(root + os.sep):
        raise ValueError("路径越界：仅允许访问本会话的工作目录")
    return full
