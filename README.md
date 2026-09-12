# LangGraph 服务端 Agent

基于 **LangGraph** 的服务端智能体，提供 Web 操作界面。支持**多会话**、**工具调用**、**技能（Skill）管理**，以及**会话级隔离的工作目录**与 **Web 端文件浏览**。

后端：FastAPI + LangGraph（`create_react_agent` 预置 ReAct Agent）
前端：Vue 3 + Vite 8 + TypeScript（Composition API / `<script setup>`）

---

## 功能特性

- **多会话管理**：每个会话独立 `thread_id`，对话历史全量持久化到 SQLite（检查点 `data/checkpoints.db` + 会话消息 `data/app.db`），可新建 / 切换 / 重命名 / 删除。重启服务后历史不丢。
- **流式对话**：通过 WebSocket 实时推送 `message_start / token / tool_start / tool_end / message_end / error` 事件，前端逐字渲染。
- **工具调用权限确认**：支持 **自动（auto）** 与 **确认（confirm）** 两种模式。确认模式下，每次工具调用前会暂停并向用户弹出审批框，可逐条 **允许 / 拒绝**，并 **编辑工具参数**；拒绝的工具不会执行。模式可在对话顶部一键切换，并通过 WebSocket 实时同步到后端。
- **工具调用**：内置数学计算、网页抓取、受限 Python 执行、文件读写、时间查询等工具；每次调用在界面中以可折叠块展示输入 / 输出。
- **技能管理**：内置技能可启停；支持通过 `@tool` 代码动态创建自定义技能、删除、重载；启用的技能会自动注入系统提示词与可用工具集。
- **会话级隔离工作目录**：每个会话拥有独立目录 `data/workspaces/{cid}`，互不串扰；工具（如 `run_python`）在隔离目录内执行，产物只落在该会话空间。
- **Web 文件浏览**：右侧面板可浏览当前会话工作目录（目录树、文本预览、二进制下载、返回上级、刷新）。
- **三区布局 + 可收起/全屏面板**：左侧会话栏（顶部「新建对话」）、中间主区（顶部菜单：对话 / 技能管理）、右侧文件与预览面板。右侧面板支持 **拖拽调宽、收起到图标条、完全收起、全屏** 四种状态。
- **独立技能管理页**：顶部菜单「技能管理」进入专门页面，支持关键词搜索、分类筛选、卡片式展示（开关启停 / 删除自定义 / 重载 / 新建）。
- **现代化图标**：全站图标统一使用主流图标库 [lucide](https://lucide.dev/)（`lucide-vue-next`），并采用亮色主题与流式「打字机」光标效果。
- **Naive UI 组件库**：界面基于 [Naive UI](https://www.naiveui.com/)（`naive-ui`）构建——按钮、输入框、弹窗、开关、标签页、卡片、列表、消息提示等均使用其组件，配合 `n-config-provider` 统一亮色主题与中文语言包。

---

## 技术栈

| 层 | 技术 |
|---|---|
| 后端 | Python 3.11、FastAPI、Uvicorn、LangGraph 1.x、`langgraph-checkpoint-sqlite`（AsyncSqliteSaver）、`langchain-openai`（OpenAI 兼容） |
| 模型 | 任意 OpenAI 兼容接口：OpenAI / DeepSeek / Moonshot / 本地 Ollama 等 |
| 前端 | Vue 3.5、Vite 8、TypeScript、`vue-tsc` 类型检查、Naive UI 组件库、lucide 图标 |
| 通信 | REST（`/api/*`）+ WebSocket（`/ws/{cid}`） |

---

## 目录结构

```
.
├── server.py                 # FastAPI 入口：路由、WebSocket、文件端点、会话工作目录绑定
├── config.py                 # 环境变量配置
├── workspace.py              # 会话级隔离工作目录 + ContextVar 上下文
├── requirements.txt          # Python 依赖
├── run.sh                    # 一键安装依赖并启动后端
├── agent/                    # Agent 构建（模型、系统提示词、工具聚合）
├── conversation/             # 会话存储（SQLite 元数据 + 消息历史，含 JSON 迁移脚本）
├── skills/                   # 技能注册表 + 内置/自定义技能
├── tools/                    # 内置工具（calculator、web_fetch、run_python、list_dir、read_file …）
├── index.html                # Vite 入口
├── vite.config.ts            # base: '/static/'，dev 代理 /api、/ws → :8000
├── tsconfig.json
├── package.json
├── src/                      # 前端源码（main.ts、store.ts、api.ts、types.ts、App.vue、components/*）
└── static/                   # 生产构建产物（由 FastAPI 的 StaticFiles 直接托管）
```

> 运行时数据（会话、检查点、各会话工作目录、自定义技能）存放在 `data/`，已通过 `.gitignore` 排除，**不会入库**。

---

## 快速开始

### 环境要求
- Python 3.11+
- Node.js 22+ 与 npm 11+

### 1. 后端

```bash
# 安装依赖（沙箱若提示 externally-managed，run.sh 已内置 --break-system-packages 兜底）
bash run.sh
# 或手动：
pip install -r requirements.txt
python3.11 -m uvicorn server:app --host 0.0.0.0 --port 8000 --reload
```

启动后访问 **http://localhost:8000/** 即为前端页面（生产模式下由 FastAPI 直接托管 `static/`）。

### 2. 前端（两种模式）

**开发模式**（热更新 + 代理到后端）：
```bash
npm install
npm run dev        # 打开 http://localhost:5173/static/  （Vite 会把 /api、/ws 代理到 :8000）
```

**生产模式**（构建后被后端托管）：
```bash
npm install
npm run build      # 输出到 static/，之后访问 http://localhost:8000/ 即可
```

其他脚本：`npm run type-check`（仅类型检查）、`npm run preview`（预览构建产物）。

### 3. 配置

复制 `.env.example` 为 `.env` 并按需修改：

| 变量 | 说明 | 默认值 |
|---|---|---|
| `OPENAI_API_KEY` | 模型 API Key（任意 OpenAI 兼容服务） | `sk-xxx` |
| `OPENAI_BASE_URL` | OpenAI 兼容接口地址 | `https://api.openai.com/v1` |
| `MODEL` | 模型名，如 `deepseek-chat` / `gpt-4o-mini` | `gpt-4o-mini` |
| `TEMPERATURE` | 采样温度 | `0.3` |
| `HOST` / `PORT` | 服务监听地址 / 端口 | `0.0.0.0` / `8000` |
| `DATA_DIR` | 运行时数据目录 | `data` |

`.env.example` 默认填好 **DeepSeek**（国内可直连）的配置，取消注释 OpenAI 段即可切换。

### 4. 一键启动（npm 脚本）

`package.json` 内置了启动脚本，无需手动分别敲命令：

| 命令 | 说明 |
|---|---|
| `npm run py:install` | 安装 Python 依赖（`pip install -r requirements.txt`） |
| `npm run py` | 仅启动后端（Uvicorn，监听 `:8000`） |
| `npm run dev` | 仅启动前端（Vite 开发服务器，`:5173`，代理 `/api`、`/ws` 到 `:8000`） |
| `npm start` | **一键启动（开发模式）**：用 `concurrently` 同时拉起后端 + 前端，两个进程一键管理、一起退出 |
| `npm run start:prod` | **一键启动（生产模式）**：先 `build` 再启动后端，由 FastAPI 直接托管 `static/`，单进程访问 `http://localhost:8000/` 即可 |

> 开发模式打开 **http://localhost:5173/static/**；生产模式（或只想跑一个进程时）打开 **http://localhost:8000/**。

---

## API 参考

所有 REST 接口前缀均为 `/api`。

### 对话（Conversations）
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/api/conversations` | 列出全部会话 |
| `POST` | `/api/conversations` | 新建会话，body: `{"title": "..."}` |
| `GET` | `/api/conversations/{cid}` | 获取会话元信息 |
| `DELETE` | `/api/conversations/{cid}` | 删除会话（含其隔离工作目录） |
| `PATCH` | `/api/conversations/{cid}` | 重命名，body: `{"title": "..."}` |
| `POST` | `/api/conversations/{cid}/messages` | 非流式回退：body `{"content": "..."}` 返回完整 assistant 消息 |

### 技能（Skills）
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/api/skills` | 列出全部技能及启用状态 |
| `POST` | `/api/skills` | 同上（兼容） |
| `POST` | `/api/skills/{sid}/enable` | 启用技能 |
| `POST` | `/api/skills/{sid}/disable` | 停用技能 |
| `POST` | `/api/skills/custom` | 创建自定义技能，body: `{"name","description","code"}`（`code` 含 `@tool` 函数） |
| `DELETE` | `/api/skills/{sid}` | 删除自定义技能 |
| `POST` | `/api/skills/reload` | 重新扫描并加载技能 |

### 工作目录 / 文件
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/api/conversations/{cid}/files?path=` | 列目录（`path` 省略为根）或读取文本文件内容 |
| `GET` | `/api/conversations/{cid}/files/raw?path=` | 以附件形式下载文件（二进制 / 大文件） |

> 文件接口均限定在 `data/workspaces/{cid}` 内，越界路径会被拦截；二进制与超过 200KB 的文件只提供下载、不直接渲染。

### WebSocket 流式对话
```
WS /ws/{cid}
```
客户端发送文本消息，服务端按事件流式返回（JSON）：
`message_start` → (`token`)* → (`tool_start` / `tool_end`)* → `message_end` / `error`

**客户端 → 服务端** 消息（JSON，`type` 字段）：

| type | 字段 | 说明 |
|---|---|---|
| `message` | `content` | 发送一条用户消息，触发一轮对话 |
| `set_mode` | `mode`: `auto` / `confirm` | 切换工具调用权限模式 |
| `tool_decision` | `action`: `submit`/`cancel`，`calls`: `[{id, action, args?}]` | 在确认模式下就待审批工具给出决策（`submit` 下逐条 `approve`/`deny`，可带编辑后的 `args`；`cancel` 取消本轮） |
| `cancel` | — | 取消当前正在执行的轮次 |

**服务端 → 客户端** 新增事件：

| type | 字段 | 说明 |
|---|---|---|
| `tool_confirm` | `tool_calls`: `[{id, name, args}]` | 确认模式下，工具调用执行前暂停并请求审批 |
| `mode_set` | `mode` | 模式切换已生效的回执 |
| `warn` | `content` | 瞬时提示（如「上一轮对话尚未结束，请稍候」） |

> 实现要点：后端以 `create_react_agent(..., interrupt_before=["tools"])` 编译 ReAct 图，工具节点前中断；确认模式下通过 `update_state` 改写尾部 AI 消息的 `tool_calls`（拒绝的工具直接从列表中移除，**不注入** ToolMessage，否则 ReAct 工具节点会误判调用已完成而跳过其余工具），再以 `Command(resume=True)` 续跑。

---

## 技能管理

### 内置技能
技能按 **目录（分类）** 组织，Web 端「技能目录」面板按分类分组展示。

| 分类 | id | 名称 | 提供工具 |
|---|---|---|---|
| 系统 | `system` | 系统工具 | `get_current_datetime` |
| 文件 | `file` | 文件操作 | `read_file`、`write_file`、`list_dir`、`make_dir`、`search_files`、`delete_file` |
| 代码 | `coder` | 代码执行 | `run_python` |
| 网络 | `web` | 网页抓取 | `web_fetch` |
| 数学 | `math` | 数学计算 | `calculator` |

> 文件类工具（`read_file` / `write_file` / `list_dir` / `make_dir` / `search_files` / `delete_file`）全部限定在**当前会话隔离的工作目录**内，越界路径会被拦截。

默认启用：`system`、`math`、`web`、`coder`、`file`。

### 自定义技能
在「技能」面板点击「新建」，提交一段 Python 代码，用 `@tool` 装饰函数定义工具，可选 `META` 元信息：

```python
from langchain_core.tools import tool

@tool
def my_tool(query: str) -> str:
    """工具说明（会被模型用于决定是否调用）。"""
    return f"结果是：{query}"

# 可选：META = {"name": "...", "description": "..."}
```

提交后该技能即时生效，工具会出现在 Agent 的可用工具集中。

---

## 工作目录隔离

- 每个会话 `cid` 对应独立目录 `data/workspaces/{cid}`。
- 通过 `contextvars.ContextVar` 携带「当前会话工作目录」，并发多会话各自独立、不会串台。
- `server.run_turn` 在每轮对话开始 `set`、结束 `reset` 该上下文；`run_python` 子进程以该目录为 `cwd`，脚本产物自动落在其内。
- Web 端可在「文件」标签页浏览隔离目录，让 Agent 写文件后刷新即可看到产物。

---

## 数据存储

全部运行时数据均为 **SQLite**，位于 `data/` 下：

| 文件 | 用途 | 管理方 |
|---|---|---|
| `data/app.db` | 会话元数据 + 消息历史（`conversations` / `messages` 两张表） | `conversation/store.py` |
| `data/checkpoints.db` | LangGraph 对话状态检查点，支撑多轮上下文与工具审批中断 | `AsyncSqliteSaver` |
| `data/workspaces/{cid}/` | 会话隔离工作目录（普通文件，非数据库） | `workspace.py` |

**`app.db` 表结构**

```sql
conversations(id TEXT PK, title TEXT, created_at REAL, updated_at REAL)
messages(id INTEGER PK AUTOINCREMENT, cid TEXT FK→conversations.id ON DELETE CASCADE,
         seq INTEGER, role TEXT, content TEXT, tool_calls TEXT /* JSON */)
```

- 消息按 `seq` 排序，`tool_calls` 以 JSON 文本存储；`save_messages` 在单事务内全量覆盖写入，保证原子性。
- 删除会话通过外键级联清理消息，不留孤儿行。
- 连接按线程惰性创建并复用（`sqlite3` 连接不可跨线程共享），启用 WAL 模式提升并发表现；所有 SQL 参数化绑定。

**从旧版 JSON 数据结构迁移**（v1 → v2）

旧版本把会话存在 `data/conversations/index.json` 与 `{cid}.json`。若你从旧版本升级，执行：

```bash
python3 -m conversation.migrate            # 干跑：先看会迁移哪些
python3 -m conversation.migrate --apply    # 实际写入
python3 -m conversation.migrate --apply --clean   # 写入成功后删除旧 JSON 文件
```

迁移是**幂等**的（已存在的 `cid` 会跳过），且默认保留原始 JSON 文件以便回滚。全新部署无需执行。

---

## 安全说明

- 文件工具限定在会话隔离目录内，路径穿越（`../../`）会被拦截。
- 二进制与超大文件仅提供下载、不直接渲染，避免前端注入 / XSS。
- `run_python` 在受限子进程中执行，超时 15 秒；请勿在不可信环境下开放给未授权用户。
- `data/`、`.env`、`node_modules/` 已被 `.gitignore` 排除，不会进入版本库。

---

## 常见问题

**Q：页面打不开 / 没有回复？**
A：确认后端已在 `:8000` 运行，且 `.env` 中 `OPENAI_API_KEY` / `OPENAI_BASE_URL` / `MODEL` 配置正确（沙箱内需可访问对应模型服务，DeepSeek 可直接用）。

**Q：WebSocket 连不上？**
A：开发模式请确保走 Vite 的 `:5173/static/` 入口（已配置代理）；生产模式直接访问 `:8000/`。

**Q：自定义技能不生效？**
A：检查代码是否用 `@tool` 装饰、函数是否有 docstring（模型据此判断是否调用），然后点击「重载」。

**Q：会话文件在哪？**
A：在 `data/workspaces/{cid}`，可通过 Web「文件」标签页或直接在服务器上查看。
