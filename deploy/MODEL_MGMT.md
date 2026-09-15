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

**内置清单 + 联网拉取双通道。** 内置清单覆盖常见公有云，联网调
`GET {base_url}/models` 覆盖自建/中转端点（one-api、new-api、LiteLLM、vLLM）。

| | 内置清单 | 调 /v1/models |
| --- | --- | --- |
| 私有/自建端点 | 不适用（未收录） | 支持 |
| 密钥外发风险 | 无 | 需发往 base_url（供应商已存的那一份） |
| 响应速度 | 毫秒级 | 依赖网络（超时 8s） |
| 数据新鲜度 | 可能过时 | 实时 |

弹窗默认走**联网拉取**：内置清单必然滞后，自建端点更是压根不在收录范围，
不联网就是「一个模型都拉不到」。联网失败会**回退内置清单**并给出可读原因
（连接失败 / 401 密钥错误 / 非 JSON / 空列表），不会只给一个空白弹窗。
弹窗右上角可在「联网拉取 / 用内置清单」间手动切换。

联网命中内置清单的模型沿用其类型与上下文长度；未命中则按名字猜类型
（`embed`/`bge-`/`text-embedding`/`gte-` → 向量；含 `vl`/`vision`/`omni`/`visual`
→ 多模态；其余 → 语言模型）。

清单是**参考**，不是唯一入口：名称可能随后续版本变化，以手动输入为准。

## 接口

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/runtime/catalog?code=&provider=&scope=&online=&base_url=&api_key=` | 取可选模型清单；`online=1` 时联网拉取，失败回退内置清单 |
| GET | `/api/runtime/catalog/providers` | 已收录供应商（供添加提供商时选 code） |

清单**不再剔除**用户已可见的模型，而是逐项带 `added: true/false`：前端把
已添加项置灰并标「已添加」，让用户看到「确实拉到了，只是都加过了」，而不是
误以为功能坏了（这正是「拉不到模型」的第一层错觉来源）。

`/api/runtime` 的 `providers[]` 中，每个提供商会带 `code` / `status` /
`model_meta[]`（含 `model_type`/`status`/`provider_model`/`context_length`/`description`），
前端表格据此渲染。

## 关键实现点（曾踩过的坑）

1. **联网拉取必须把 `base_url` 传到后端**。后端只会用请求里给的
   `base_url`/`api_key`（缺省时再回落到该 provider 已存的值）。前端只传
   `code`/`provider` 而漏了 `base_url`，后端就无从发起 `/models` 请求，
   只能退化成「未收录该供应商」→ 空清单。**默认提供商分组也要有 `baseUrl`**
   （取自 `wb.runtime.base_url`），过去它只填了展示用的 `sub`。
2. **`_provider_public` 是脱敏视图，容易漏字段**。`code`/`status`/`model_meta`
   都靠它传给前端；漏了 `code` 会导致「拉取模型」匹配不到清单，漏了
   `model_meta` 会让表格所有元数据都显示默认值。
3. **新增顶层模块要加进 `deploy/deploy.py`**。`model_catalog.py` 是 server
   直接 import 的顶层模块，`INCLUDE` 与 `REQUIRED_MODULES` 都要加，
   否则线上启动即 `ModuleNotFoundError`（错误只在 systemd 日志里体现）。
4. **设置页布局用网格铺开**。`.set-body` 曾硬限宽 760px，宽屏下内容挤成
   窄柱。现改为 `.set-grid`（`auto-fit, minmax(420px, 1fr)`）：宽屏 2~3 列，
   含供应商卡片的「模型管理」用 `.set-span-all` 独占整行。
