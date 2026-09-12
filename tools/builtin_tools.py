"""内置工具：数学计算、网页抓取、代码执行、文件读写、时间查询。"""
import os
import math
import sys
import asyncio
import requests
import subprocess
from langchain_core.tools import tool

import workspace  # 工作目录隔离（按会话）

# ===== 安全数学计算 =====
_SAFE_NAMES = {k: getattr(math, k) for k in dir(math) if not k.startswith("_")}
_SAFE_NAMES.update({"abs": abs, "min": min, "max": max, "round": round, "pow": pow})


@tool
def calculator(expression: str) -> str:
    """计算数学表达式，例如 'sqrt(2) * 3 + log(10)'。支持常见数学函数与常量(sqrt, sin, cos, pi, e, log...)。"""
    try:
        value = eval(expression, {"__builtins__": {}}, _SAFE_NAMES)
        return f"{expression} = {value}"
    except Exception as e:
        return f"计算错误: {e}"


@tool
def get_current_datetime() -> str:
    """返回服务器当前日期与时间（含时区）。"""
    from datetime import datetime
    return datetime.now().astimezone().strftime("%Y-%m-%d %H:%M:%S %Z")


@tool
def web_fetch(url: str) -> str:
    """抓取指定 URL 的网页内容，返回纯文本前 4000 字符，用于检索与调研。"""
    try:
        r = requests.get(url, timeout=15, headers={"User-Agent": "Mozilla/5.0"})
        r.raise_for_status()
        return r.text[:4000]
    except Exception as e:
        return f"抓取失败: {e}"


@tool
async def run_python(code: str) -> str:
    """在受限子进程中执行 Python 代码，返回 stdout/stderr（超时 15 秒）。
    子进程的工作目录为本会话隔离的工作目录，脚本创建的文件也会落在其中。"""
    root = workspace.current_root()
    try:
        proc = await asyncio.to_thread(
            subprocess.run,
            [sys.executable, "-c", code],
            capture_output=True, text=True, timeout=15, cwd=root,
        )
        out = proc.stdout
        if proc.stderr:
            out += "\n[stderr]\n" + proc.stderr
        return out[:4000] if out else "[无输出]"
    except subprocess.TimeoutExpired:
        return "执行超时（>15s）"
    except Exception as e:
        return f"执行错误: {e}"


def _safe_path(path: str) -> str:
    root = workspace.current_root()
    full = os.path.normpath(os.path.join(root, path))
    if full != root and not full.startswith(root + os.sep):
        raise ValueError("路径越界，仅允许访问工作区内的文件")
    return full


@tool
async def list_dir(path: str = ".") -> str:
    """列出当前会话工作目录下的内容（默认工作目录根）。"""
    try:
        entries = sorted(os.listdir(_safe_path(path)))
        return "\n".join(entries) or "(空目录)"
    except Exception as e:
        return f"错误: {e}"


@tool
async def read_file(path: str) -> str:
    """读取当前会话工作目录下的文本文件内容（前 4000 字符）。"""
    try:
        with open(_safe_path(path), "r", encoding="utf-8", errors="replace") as f:
            return f.read(4000)
    except Exception as e:
        return f"错误: {e}"
