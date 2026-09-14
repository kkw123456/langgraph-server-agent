# 模型调用统计：流式 usage 行为与估算策略

本文件记录 LangGraph Server Agent 在「模型调用日志 / token 统计」上的一次实测结论，
避免后续再走弯路。所有结论均在部署机（火山方舟 Ark，OpenAI 兼容端）实测复现。

## 结论速览

| 调用方式 | 服务商是否返回 usage | 平台如何取数 |
| --- | --- | --- |
| 非流式 `invoke()` | ✅ 返回完整 usage | 直接取 `usage_metadata` |
| 流式 `stream()` / `astream_events()` | ❌ **不返回** | 回退 `_estimate_tokens()` 字符估算 |

> **关键事实**：火山方舟端点在**流式响应下不返回 `usage`**，
> `on_chat_model_end` 事件的 `output.usage_metadata` 恒为 `None`。
> 而在非流式 `invoke()` 下能拿到完整 usage（含 `reasoning_tokens`）。

## 实测证据

### 1. 非流式——有 usage

```text
content: 收到
usage_metadata: {'input_tokens': 9, 'output_tokens': 96, 'total_tokens': 105,
                 'output_token_details': {'reasoning': 93}}
```

### 2. 流式事件流——无 usage

```text
end#1 usage_metadata=None
COLLECTED prompt=0 completion=0 (events=1)
```

### 3. 逐 chunk 扫描——无 usage

```text
chunks with usage = 0
```

即：**无论从 `on_chat_model_end` 还是逐 chunk，流式路径都拿不到 usage。**

## 采集实现（server.py）

```python
if kind == "on_chat_model_end":
    _um = getattr(out_obj, "usage_metadata", None)
    if not _um and hasattr(out_obj, "response_metadata"):
        _um = (out_obj.response_metadata or {}).get("token_usage")
    if not _um and hasattr(out_obj, "generations"):      # 非流式回退
        g0 = out_obj.generations[0][0]
        _um = getattr(g0, "usage_metadata", None) or \
              getattr(getattr(g0, "message", None), "usage_metadata", None)
    if isinstance(_um, dict):
        _usage_prompt     += int(_um.get("input_tokens") or _um.get("prompt_tokens") or 0)
        _usage_completion += int(_um.get("output_tokens") or _um.get("completion_tokens") or 0)
```

落库前的兜底：

```python
_p, _c = _usage_prompt, _usage_completion
if _p == 0 and _c == 0:                  # 流式路径拿不到 usage → 字符估算
    _p = _estimate_tokens(content)
    _c = _estimate_tokens(assistant.get("content", ""))
    _est = True                          # 打标，便于前端区分
```

### 估算规则

- CJK 字符 ≈ 1 token/字
- 其余 ≈ 1/4 字符/token

### 实测吻合度

| 场景 | 估算值 | 非流式真实值 | 说明 |
| --- | --- | --- | --- |
| 短问「只回复两个字：收到」 | p=9 | p=9 | 完全吻合 |
| 长问「用一句话说明什么是LangGraph」 | p=12, c=53 | — | 量级合理 |

**已知偏差**：估算**测不到 reasoning tokens**。非流式下 output 96 中有 93 为思维链，
估算只能计可见正文。故长思维链模型的 output 会被低估，属预期行为。

## 前端呈现约定

`model_call_log.estimated = 1` 的记录，前端需以 **≈** 前缀展示 token 数，
明确告知用户该值为估算而非服务商回传，避免误读为精确计费数据。

## 可选改进（未实施）

若需精确 token（含用于成本核算）：

1. **统计专用非流式调用**：对需要精确计费的场景单独走一次非流式请求取 usage；
2. **切换支持流式 usage 的服务商**：部分 OpenAI 兼容端支持
   `stream_options: {"include_usage": true}` 在末个 chunk 回传 usage；
3. **接入本地 tokenizer**（如 `tiktoken`）替代字符启发式，提升估算精度。

以上均需权衡成本，当前以「可用 + 诚实标注」为准。
