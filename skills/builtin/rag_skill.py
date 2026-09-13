"""RAG 检索技能：对「资料库」与会话工作目录文档做语义相关检索并召回原文段落。

检索实现为无依赖的字符 n-gram 词频余弦相似度（对中文友好），
不依赖外部向量服务，开箱即用；召回的是原文片段而非生成内容。
"""
import json
import math
import os
from collections import Counter

from langchain_core.tools import tool

import workspace


def _tokens(text: str) -> Counter:
    """中文友好的轻量分词：连续 ASCII 词 + 全部相邻 2-gram。"""
    text = (text or "").lower()
    toks = []
    buf = ""
    for ch in text:
        if ch.isascii() and (ch.isalnum() or ch in "_-"):
            buf += ch
        else:
            if buf:
                toks.append(buf)
                buf = ""
            if "\u4e00" <= ch <= "\u9fff":
                toks.append(ch)
    if buf:
        toks.append(buf)
    # 2-gram（汉字滑动窗口提升区分度）
    han = [c for c in text if "\u4e00" <= c <= "\u9fff"]
    toks.extend(han[i] + han[i + 1] for i in range(len(han) - 1))
    return Counter(toks)


def _cos(a: Counter, b: Counter) -> float:
    if not a or not b:
        return 0.0
    common = set(a) & set(b)
    dot = sum(a[k] * b[k] for k in common)
    na = math.sqrt(sum(v * v for v in a.values()))
    nb = math.sqrt(sum(v * v for v in b.values()))
    return dot / (na * nb) if na and nb else 0.0


def _collect_chunks(max_chunks=400) -> list[dict]:
    """收集候选检索块：资料库条目 + 工作目录文本文件段落。"""
    chunks: list[dict] = []
    try:
        from server import workbench as wb  # 延迟导入避免循环
        for it in wb.list_library():
            text = f"{it.get('title', '')}\n{it.get('content', '')}"
            for i in range(0, len(text), 500):
                seg = text[i:i + 500]
                if seg.strip():
                    chunks.append({"source": f"资料库·{it.get('title', '')}", "text": seg})
    except Exception:
        pass
    try:
        root = workspace.current_root()
        for dirpath, dirs, files in os.walk(root):
            dirs[:] = [d for d in dirs if d not in {"tmp", "audio", "images", "charts", "db", "__pycache__"}]
            for fn in files:
                fp = os.path.join(dirpath, fn)
                try:
                    with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                        text = f.read(200000)
                except Exception:
                    continue
                if not text.strip():
                    continue
                if b"\x00" in text[:200].encode("utf-8", "ignore"):
                    continue
                rel = os.path.relpath(fp, root).replace(os.sep, "/")
                for i in range(0, len(text), 500):
                    seg = text[i:i + 500]
                    if seg.strip():
                        chunks.append({"source": f"文件·{rel}", "text": seg})
                if len(chunks) >= max_chunks:
                    break
            if len(chunks) >= max_chunks:
                break
    except Exception:
        pass
    return chunks[:max_chunks]


@tool
def kb_search(query: str, top_k: int = 5) -> str:
    """在「资料库」与当前会话工作目录文档中检索与问题最相关的原文段落（语义相关排序）。

    Args:
        query: 检索问题或关键词。
        top_k: 返回的最相关段落数，默认 5。
    """
    query = (query or "").strip()
    if not query:
        return "检索词不能为空"
    chunks = _collect_chunks()
    if not chunks:
        return "没有可检索的内容（资料库与工作目录均为空）"
    qt = _tokens(query)
    scored = []
    for c in chunks:
        s = _cos(qt, _tokens(c["text"]))
        if s > 0.02:
            scored.append((s, c))
    scored.sort(key=lambda x: -x[0])
    if not scored:
        return "未检索到相关内容，可尝试换一种问法。"
    out = []
    for s, c in scored[: max(1, min(int(top_k or 5), 10))]:
        text = c["text"].strip().replace("\n", " ")
        out.append(f"【相关度 {s:.2f}】{c['source']}\n{text[:400]}")
    return "\n\n".join(out)


def get_skill():
    from skills.base import Skill
    return Skill(
        id="rag",
        name="RAG 检索",
        category="知识",
        description="在资料库与会话工作目录文档中做语义相关检索，召回原文片段用于知识库问答与文档搜索。",
        tools=[kb_search],
        system_prompt=(
            "用户提问涉及已有资料/文档内容时，先用 kb_search 检索相关段落，"
            "再基于检索到的原文回答并注明来源；检索不到就如实说明。"
        ),
    )
