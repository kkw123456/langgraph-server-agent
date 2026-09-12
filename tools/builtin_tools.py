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


@tool
async def write_file(path: str, content: str) -> str:
    """将文本内容写入当前会话工作目录下的文件（覆盖写，自动创建父目录）。返回写入的字节数。"""
    try:
        full = _safe_path(path)
        parent = os.path.dirname(full)
        if parent:
            os.makedirs(parent, exist_ok=True)
        with open(full, "w", encoding="utf-8") as f:
            f.write(content)
        return f"已写入 {len(content.encode('utf-8'))} 字节到 {path}"
    except Exception as e:
        return f"错误: {e}"


@tool
async def make_dir(path: str) -> str:
    """在当前会话工作目录内创建目录（支持多级）。"""
    try:
        os.makedirs(_safe_path(path), exist_ok=True)
        return f"已创建目录: {path}"
    except Exception as e:
        return f"错误: {e}"


@tool
async def search_files(pattern: str, path: str = ".") -> str:
    """在当前会话工作目录内递归检索文本文件内容，返回匹配的行（大小写不敏感的子串匹配，最多 200 行）。"""
    try:
        root = _safe_path(path)
        results: list = []
        for dirpath, _, files in os.walk(root):
            for fn in files:
                fp = os.path.join(dirpath, fn)
                try:
                    with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                        for i, line in enumerate(f, 1):
                            if pattern.lower() in line.lower():
                                rel = os.path.relpath(fp, root)
                                results.append(f"{rel}:{i}: {line.rstrip()}")
                except Exception:
                    continue
                if len(results) >= 200:
                    break
            if len(results) >= 200:
                break
        return "\n".join(results) if results else "(无匹配)"
    except Exception as e:
        return f"错误: {e}"


@tool
async def delete_file(path: str) -> str:
    """删除当前会话工作目录下的文件（仅文件，不删除目录）。"""
    try:
        full = _safe_path(path)
        if not os.path.isfile(full):
            return f"不是文件或不存在: {path}"
        os.remove(full)
        return f"已删除: {path}"
    except Exception as e:
        return f"错误: {e}"
