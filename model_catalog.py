"""内置供应商模型清单。

用途：「设置 → 模型管理」拉取某提供商的可选模型列表，供勾选批量加入。

设计取舍：
- **不联网**：不调用服务商接口。原因有三——(1) 部分自建/私有端点无 /v1/models；
  (2) 避免把 api_key 发往意外地址；(3) 秒级响应、离线可用。
- **按 code 匹配**：提供商创建时填的 code（deepseek/zhipu/qwen/volc/...）用于命中清单。
  code 为空或未收录时，前端展示为「未能识别供应商，请手动添加模型名」。
- **清单会过时**：这是内部参考列表，不是权威来源。允许用户直接手输模型名，
  勾选只是加速手段，不构成唯一入口。

数据来源：各厂商公开文档的模型命名（2024-2025）。名称可能随后续版本变化，
以手动输入为准。
"""

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


def catalog_for(code: str, existing: list[str] | None = None) -> dict:
    """取某供应商的可选模型清单。

    existing：已添加的模型名，默认从结果中剔除（只展示未添加的）。
    返回 {known, code, label, base_url, models:[{name,model_type,context_length,description}]}
    """
    key = _normalize(code)
    info = PROVIDER_CATALOG.get(key)
    if info is None:
        return {"known": False, "code": code or "", "label": "", "base_url": "",
                "models": [], "note": "未收录该供应商，请手动输入模型名"}
    seen = set(existing or [])
    models = [
        {"name": name, "model_type": mtype,
         "context_length": ctx, "description": desc}
        for name, mtype, ctx, desc in info["models"]
        if name not in seen
    ]
    return {"known": True, "code": key, "label": info["label"],
            "base_url": info["base_url"], "models": models}
