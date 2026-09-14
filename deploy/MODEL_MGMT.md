# 模型管理：列表化 + 拉取供应商清单

## 交互

设置 → 模型管理，每个提供商下：

```
[提供商名] [code] [删除]
  拉取模型 | 手动输入模型名 [____] [添加]
  ┌──────────────────────────────────────────────────────┐
  │ 模型名  类型  上下文  服务商侧模型名  状态   操作      │
  │ gpt-4o  LLM   125K    gpt-4o         上线  设为当前 删│
  └──────────────────────────────────────────────────────┘
```

- **拉取模型**：弹窗列出该供应商的内置模型清单，勾选（支持全选）后批量添加。
- **只显示未添加的**：已存在于模型中（不论哪个分组）的模型不会出现在清单里，
  默认不勾选，避免误加与重复添加。
- **手动添加**：清单未收录的供应商/自建端点，直接输模型名即可。

## 内置供应商清单（10 家）

| code | 供应商 | 模型数 | 默认地址 |
| --- | --- | --- | --- |
| volc | 火山方舟 | 7 | ark.cn-beijing.volces.com/api/v3 |
| deepseek | DeepSeek | 2 | api.deepseek.com/v1 |
| zhipu | 智谱 AI | 7 | open.bigmodel.cn/api/paas/v4 |
| qwen | 阿里通义千问 | 6 | dashscope.aliyuncs.com/compatible-mode/v1 |
| openai | OpenAI | 8 | api.openai.com/v1 |
| moonshot | 月之暗面 Kimi | 4 | api.moonshot.cn/v1 |
| baichuan | 百川智能 | 3 | api.baichuan-ai.com/v1 |
| minimax | MiniMax | 3 | api.minimax.chat/v1 |
| siliconflow | 硅基流动 | 5 | api.siliconflow.cn/v1 |
| ollama | Ollama（本地） | 4 | 127.0.0.1:11434/v1 |

code 支持别名归一：`volcengine` / `ark` / `doubao` / `huoshan` → `volc`，
`bigmodel` / `glm` → `zhipu`，`dashscope` / `tongyi` / `aliyun` → `qwen` 等。

## 设计取舍

**清单不联网、不外发 api_key。** 相比调用服务商 `/v1/models`：

| | 内置清单 | 调 /v1/models |
| --- | --- | --- |
| 私有/自建端点 | 不适用（需手输） | 支持 |
| 密钥外发风险 | 无 | 需发往 base_url |
| 响应速度 | 毫秒级 | 依赖网络 |
| 数据新鲜度 | 可能过时 | 实时 |

清单是**参考**，不是唯一入口：名称可能随后续版本变化，以手动输入为准。
若后续需要精确列表，可加「从接口拉取」作为补充通道（用提供商已存的
base_url + api_key 调 `GET {base_url}/models`）。

## 接口

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/runtime/catalog?code=&provider=&scope=` | 取可选模型清单，剔除用户已可见的全部模型 |
| GET | `/api/runtime/catalog/providers` | 已收录供应商（供添加提供商时选 code） |

`/api/runtime` 的 `providers[]` 中，每个提供商会带 `code` / `status` /
`model_meta[]`（含 `model_type`/`status`/`provider_model`/`context_length`/`description`），
前端表格据此渲染。

## 关键实现点（曾踩过的坑）

1. **剔除口径必须是全局的**。最初按单个 provider 剔除，导致默认组里已有的
   `deepseek-chat` 在新建 DeepSeek 提供商下仍会出现、可被重复添加。现改为
   `runtime.list_models(user)`（系统默认组 + 系统提供商 + 用户私有）统一去重。
2. **`_provider_public` 是脱敏视图，容易漏字段**。`code`/`status`/`model_meta`
   都靠它传给前端；漏了 `code` 会导致「拉取模型」匹配不到清单，漏了
   `model_meta` 会让表格所有元数据都显示默认值。
3. **新增顶层模块要加进 `deploy/deploy.py`**。`model_catalog.py` 是 server
   直接 import 的顶层模块，`INCLUDE` 与 `REQUIRED_MODULES` 都要加，
   否则线上启动即 `ModuleNotFoundError`（错误只在 systemd 日志里体现）。
