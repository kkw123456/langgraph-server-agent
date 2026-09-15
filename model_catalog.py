"""供应商模型清单（内置参考 + 可联网实际拉取）。

用途：「设置 → 模型管理」拉取某提供商的可选模型列表，供勾选批量加入。

设计取舍：
- **内置清单为底**：不联网也能给出候选，覆盖各厂商公开文档的常见模型名
  （2024-2025）。名称可能随后续版本变化，允许用户直接手输模型名。
- **支持联网实际拉取**：内置清单必然滞后，且自建/中转端点（one-api、new-api、
  LiteLLM、vLLM 等）根本不在收录范围。为此提供 ``fetch_remote``：带 api_key
  请求该供应商的 ``{base_url}/models``，拿到真实可用列表。
  仅在用户显式触发时联网，且 api_key 只发往该供应商自己的 base_url。
- **按 code 匹配**：供应商创建时填的 code（deepseek/zhipu/qwen/volc/...）用于命中
  内置清单；code 为空或未收录时，回退为「按 base_url 联网拉取」。
"""

from __future__ import annotations

import json
import urllib.error
import urllib.request

# 供应商编码 → 展示名 / 接口地址 / 模型清单
# 模型项：(模型名, 模型类型, 上下文窗口, 说明)
#   模型类型对齐模型库 model_type：1=LLM 2=Embedding 3=多模态
PROVIDER_CATALOG: dict[str, dict] = {
    "volc": {
        "label": "火山方舟",
        "base_url": "https://ark.cn-beijing.volces.com/api/v3",
        "models": [
            ("doubao-pro-32k", 1, 32768, "豆包 Pro 32K"),
            ("doubao-pro-128k", 1, 131072, "豆包 Pro 128K"),
            ("doubao-lite-32k", 1, 32768, "豆包 Lite 32K"),
            ("doubao-lite-128k", 1, 131072, "豆包 Lite 128K"),
            ("doubao-1-5-pro-32k-250115", 1, 32768, "豆包 1.5 Pro 32K"),
            ("doubao-1-5-pro-256k-250115", 1, 262144, "豆包 1.5 Pro 256K"),
            ("doubao-embedding", 2, 4096, "豆包向量模型"),
        ],
    },
    "deepseek": {
        "label": "DeepSeek",
        "base_url": "https://api.deepseek.com/v1",
        "models": [
            ("deepseek-chat", 1, 65536, "通用对话模型"),
            ("deepseek-reasoner", 1, 65536, "推理模型（R1，带思维链）"),
        ],
    },
    "zhipu": {
        "label": "智谱 AI",
        "base_url": "https://open.bigmodel.cn/api/paas/v4",
        "models": [
            ("glm-4-plus", 1, 131072, "GLM-4-Plus 旗舰"),
            ("glm-4-air", 1, 131072, "GLM-4-Air 轻量"),
            ("glm-4-airx", 1, 8192, "GLM-4-AirX 极速"),
            ("glm-4-flash", 1, 131072, "GLM-4-Flash 免费"),
            ("glm-4-long", 1, 1048576, "GLM-4-Long 长文本"),
            ("glm-4v-plus", 3, 8192, "GLM-4V 多模态"),
            ("embedding-3", 2, 8192, "文本向量模型"),
        ],
    },
    "qwen": {
        "label": "阿里通义千问",
        "base_url": "https://dashscope.aliyuncs.com/compatible-mode/v1",
        "models": [
            ("qwen-max", 1, 32768, "通义千问 Max"),
            ("qwen-plus", 1, 131072, "通义千问 Plus"),
            ("qwen-turbo", 1, 1048576, "通义千问 Turbo"),
            ("qwen-long", 1, 10485760, "通义千问 Long"),
            ("qwen-vl-max", 3, 32768, "通义千问 VL 多模态"),
            ("text-embedding-v3", 2, 8192, "文本向量模型 v3"),
        ],
    },
    "openai": {
        "label": "OpenAI",
        "base_url": "https://api.openai.com/v1",
        "models": [
            ("gpt-4o", 1, 128000, "GPT-4o 多模态旗舰"),
            ("gpt-4o-mini", 1, 128000, "GPT-4o Mini 轻量"),
            ("gpt-4-turbo", 1, 128000, "GPT-4 Turbo"),
            ("gpt-4.1", 1, 1048576, "GPT-4.1"),
            ("gpt-4.1-mini", 1, 1048576, "GPT-4.1 Mini"),
            ("o3-mini", 1, 200000, "o3-mini 推理模型"),
            ("text-embedding-3-small", 2, 8191, "向量模型 Small"),
            ("text-embedding-3-large", 2, 8191, "向量模型 Large"),
        ],
    },
    "moonshot": {
        "label": "月之暗面 Kimi",
        "base_url": "https://api.moonshot.cn/v1",
        "models": [
            ("moonshot-v1-8k", 1, 8192, "Kimi 8K"),
            ("moonshot-v1-32k", 1, 32768, "Kimi 32K"),
            ("moonshot-v1-128k", 1, 131072, "Kimi 128K"),
            ("moonshot-v1-8k-vision-preview", 3, 8192, "Kimi 视觉预览"),
        ],
    },
    "baichuan": {
        "label": "百川智能",
        "base_url": "https://api.baichuan-ai.com/v1",
        "models": [
            ("Baichuan4", 1, 32768, "百川 4"),
            ("Baichuan3-Turbo", 1, 32768, "百川 3 Turbo"),
            ("Baichuan3-Turbo-128k", 1, 131072, "百川 3 Turbo 128K"),
        ],
    },
    "minimax": {
        "label": "MiniMax",
        "base_url": "https://api.minimax.chat/v1",
        "models": [
            ("abab6.5s-chat", 1, 245760, "abab6.5s 对话"),
            ("abab6.5g-chat", 1, 8192, "abab6.5g 对话"),
            ("abab6.5t-chat", 1, 8192, "abab6.5t 对话"),
        ],
    },
    "siliconflow": {
        "label": "硅基流动",
        "base_url": "https://api.siliconflow.cn/v1",
        "models": [
            ("deepseek-ai/DeepSeek-V3", 1, 65536, "DeepSeek V3"),
            ("deepseek-ai/DeepSeek-R1", 1, 65536, "DeepSeek R1 推理"),
            ("Qwen/Qwen2.5-72B-Instruct", 1, 32768, "Qwen2.5 72B"),
            ("Qwen/Qwen2.5-7B-Instruct", 1, 32768, "Qwen2.5 7B"),
            ("BAAI/bge-m3", 2, 8192, "BGE-M3 向量模型"),
        ],
    },
    "ollama": {
        "label": "Ollama（本地）",
        "base_url": "http://127.0.0.1:11434/v1",
        "models": [
            ("llama3.1", 1, 131072, "Llama 3.1"),
            ("qwen2.5", 1, 32768, "Qwen2.5"),
            ("mistral", 1, 32768, "Mistral"),
            ("nomic-embed-text", 2, 8192, "Nomic 向量模型"),
        ],
    },
}

# code 的常见别名 → 标准 code（用户填法五花八门，做一次归一）
CODE_ALIASES: dict[str, str] = {
    "volcengine": "volc", "volces": "volc", "ark": "volc", "huoshan": "volc",
    "doubao": "volc", "bytedance": "volc",
    "deep-seek": "deepseek", "ds": "deepseek",
    "bigmodel": "zhipu", "glm": "zhipu", "chatglm": "zhipu",
    "dashscope": "qwen", "tongyi": "qwen", "aliyun": "qwen", "alibaba": "qwen",
    "kimi": "moonshot", "moonshotai": "moonshot",
    "silicon": "siliconflow", "silicon-flow": "siliconflow",
    "baidu": "qianfan", "minimax": "minimax",
}


def _normalize(code: str) -> str:
    """规范化供应商 code：小写去空格，命中别名则替换。"""
    c = (code or "").strip().lower()
    return CODE_ALIASES.get(c, c)


def list_providers() -> list[dict]:
    """返回已收录的供应商清单（供前端下拉选择，便于用户填 code）。"""
    return [
        {"code": code, "label": info["label"], "base_url": info["base_url"],
         "model_count": len(info["models"])}
        for code, info in PROVIDER_CATALOG.items()
    ]


def catalog_for(code: str, existing: list[str] | None = None,
                include_existing: bool = False) -> dict:
    """取某供应商的可选模型清单。

    existing：已添加的模型名。默认从结果中剔除（只展示未添加的）。
    include_existing：为 True 时不过滤，连同已添加的一起返回并标注
        每项的 added 标记。用于「勾选导入」弹窗——只列未添加项会让用户
        误以为「拉不到模型」，明确标出已添加项更符合预期。

    返回 {known, code, label, base_url, models:[{name,model_type,context_length,description,added}]}
    """
    key = _normalize(code)
    info = PROVIDER_CATALOG.get(key)
    if info is None:
        return {"known": False, "code": code or "", "label": "", "base_url": "",
                "models": [], "note": "未收录该供应商，请手动输入模型名"}
    seen = set(existing or [])
    models = []
    for name, mtype, ctx, desc in info["models"]:
        if name in seen and not include_existing:
            continue
        models.append({"name": name, "model_type": mtype,
                       "context_length": ctx, "description": desc,
                       "added": name in seen})
    return {"known": True, "code": key, "label": info["label"],
            "base_url": info["base_url"], "models": models}


# ===================== 联网实际拉取（可选，用户显式触发） =====================
# 拉取失败一律回退到内置清单，不阻塞流程。超时压到 8s，避免设置页长时间转圈。
_FETCH_TIMEOUT = 8.0


def _guess_type(name: str) -> int:
    """按模型名猜类型：1=LLM 2=Embedding 3=多模态（推测，用户可在列表里改）。"""
    n = (name or "").lower()
    if any(k in n for k in ("embed", "bge-", "bge_", "text-embedding", "gte-")):
        return 2
    if any(k in n for k in ("vl", "vision", "omni", "-v-", "visual", "multimodal")):
        return 3
    return 1


def fetch_remote(base_url: str, api_key: str = "", known: dict[str, dict] | None = None,
                 existing: list[str] | None = None) -> dict:
    """按 OpenAI 兼容协议请求 {base_url}/models，返回真实可用的模型清单。

    这是「内置清单拉不到模型」的正解：自建/中转端点（one-api、new-api、
    LiteLLM、vLLM、Xinference 等）不在收录范围里，但都实现了 /models。

    known：内置清单里 model 名 → 元数据的映射，命中时沿用其类型/上下文/说明，
    比按名字猜更准；未命中才回退 _guess_type。

    返回 {"ok": bool, "models": [...], "error": str}
    models 项结构同 catalog_for（无 known/added，由调用方补）。
    """
    url = (base_url or "").strip().rstrip("/")
    if not url:
        return {"ok": False, "models": [], "error": "缺少接口地址"}
    if not url.lower().startswith(("http://", "https://")):
        return {"ok": False, "models": [], "error": "接口地址需以 http:// 或 https:// 开头"}
    # 用户填的地址可能已经带了 /models，避免拼成 /models/models
    if not url.endswith("/models"):
        url = f"{url}/models"

    req = urllib.request.Request(url, method="GET")
    req.add_header("Accept", "application/json")
    if api_key:
        req.add_header("Authorization", f"Bearer {api_key}")
    try:
        with urllib.request.urlopen(req, timeout=_FETCH_TIMEOUT) as resp:
            raw = resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        # 401/403 是最高频的失败原因（密钥没填或不对），单独给出可读提示
        if e.code in (401, 403):
            return {"ok": False, "models": [],
                    "error": f"供应商拒绝访问（HTTP {e.code}），请检查 API Key"}
        return {"ok": False, "models": [], "error": f"供应商返回 HTTP {e.code}"}
    except urllib.error.URLError as e:
        return {"ok": False, "models": [], "error": f"无法连接供应商：{e.reason}"}
    except Exception as e:  # 超时等
        return {"ok": False, "models": [], "error": f"拉取失败：{e}"}

    try:
        data = json.loads(raw)
    except Exception:
        return {"ok": False, "models": [], "error": "供应商返回的不是 JSON（可能不是 OpenAI 兼容接口）"}

    # 兼容三种常见形状：{data:[...]} / {models:[...]} / [...]
    rows = data.get("data") if isinstance(data, dict) else data
    if rows is None and isinstance(data, dict):
        rows = data.get("models")
    if not isinstance(rows, list):
        return {"ok": False, "models": [], "error": "响应里没有模型列表字段"}

    seen = set(existing or [])
    meta = known or {}
    out: list[dict] = []
    for it in rows:
        name = it.get("id") if isinstance(it, dict) else it
        if not isinstance(name, str) or not name.strip():
            continue
        name = name.strip()
        k = meta.get(name)
        out.append({
            "name": name,
            "model_type": k["model_type"] if k else _guess_type(name),
            "context_length": k["context_length"] if k else None,
            "description": k["description"] if k else "",
            "added": name in seen,
        })
    if not out:
        return {"ok": False, "models": [], "error": "供应商返回了空列表"}
    return {"ok": True, "models": out, "error": ""}


def known_map(code: str) -> dict[str, dict]:
    """内置清单中该供应商的 模型名 → 元数据 映射（供 fetch_remote 补全信息）。"""
    info = PROVIDER_CATALOG.get(_normalize(code))
    if not info:
        return {}
    return {name: {"model_type": t, "context_length": c, "description": d}
            for name, t, c, d in info["models"]}
