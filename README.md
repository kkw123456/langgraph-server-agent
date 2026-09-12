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

### 工作台形态（仿 WorkBuddy 四区布局）

界面按「顶部工具栏 + 左侧竖向图标导航 + 内容区」组织，图标导航的每个入口都是**可用真页面**，而非样式占位：

| 区域 / 入口 | 说明 |
|---|---|
| **顶部工具栏** | 品牌标识、**模型切换**（运行时热切换，下一个对话轮次生效）、任务/项目/资料搜索、连接状态、设置、当前用户与退出登录 |
| **左侧图标导航** | 新建任务、助理、项目、专家·技能·连接器、自动化、更多；底部：资料库、灵感、连接器 |
| **中间对话区** | 会话列表 + 消息流 + 输入区（左下 `+` 附件入口、右下模型切换）。空态含 **场景 tab**（日常办公 / 代码开发 / 设计创意）与 **快捷入口卡片**，点击即新建会话并投递指令 |
| **右侧结果面板** | **产物 / 所有文件 / 变更预览 / 文件预览** 四个标签；支持拖拽调宽、收起到图标条、完全收起、全屏四态 |

#### 自适应布局

四区布局会随视口宽度自动重排，**同一套代码同时适配桌面、平板与手机**，不依赖任何第三方响应式组件：

| 断点 | 布局形态 |
|---|---|
| ≥ 1800px | 内容区限宽居中（`--content-max`），避免超宽屏下行宽过长、卡片被拉得过宽 |
| ≥ 1280px | 完整三栏：会话栏 260px + 对话区 + 结果面板 380px（可拖拽 260–820px） |
| 1024–1280px | 会话栏收窄至 224px、结果面板压至 320px，优先保证对话区宽度 |
| 768–1024px | 单栏对话；会话栏与会话面板均改为**覆盖层**（会话抽屉 + 右侧浮层），顶栏搜索框收起 |
| 767px 及以下 | 左侧图标条变为**底部 Tab 栏**；顶栏出现**汉堡按钮**唤出抽屉导航；侧栏/面板全部浮层化 |
| ≤ 560px | 快捷卡片单列、隐藏消息头像、输入区次要按钮（附件/引用/联网）隐藏，宽度留给输入与发送 |

实现要点：

- 断点判定集中在 `src/composables/useBreakpoint.ts`，用 `matchMedia` 监听并提供 `isLg / isMd / isSm / isXs`，结构差异（抽屉 vs 常驻）由 JS 决定，样式细节交给 `style.css` 的媒体查询。
- 尺寸通过 CSS 变量（`--app-h`、`--sidebar-w`、`--panel-w`、`--tabbar-h`）下发，运行时可被覆盖，拖拽调宽与断点收窄共用同一套变量，不会互相打架。
- 高度使用 `100dvh`（带 `100vh` 回退），移动端浏览器地址栏收起时不会跳动；底部 Tab 栏与输入框均适配 `env(safe-area-inset-bottom)` 安全区。
- 窗口尺寸变化时自动收敛状态：退出面板全屏、关闭抽屉，避免残留遮罩。
- 快捷键：`Esc` 依次关闭会话抽屉 / 退出面板全屏。

| 功能页 | 能力 |
|---|---|
| **项目** | 项目 CRUD（名称 / 描述 / 颜色），把会话加入或移出项目，点击会话直接跳转对话 |
| **专家 · 技能 · 连接器** | 技能页（搜索 / 分类 / 启停 / 新建 / 删除 / 重载）与连接器清单 |
| **自动化** | 定时任务 CRUD：支持 `每天 / 每周一 / 每小时 / 仅手动`，由后端调度循环驱动；「立即运行」会新建会话并跳转 |
| **资料库** | 笔记 / 链接 / 文件条目的 CRUD 与全文搜索（标题 + 内容 + 标签），可一键「带进对话」 |
| **灵感** | 提示词模板集合（量化 / 研究 / 工程 / 效率），点击直接带进对话 |
| **设置** | 模型切换、工具权限模式、运行时统计（技能数、会话/项目/自动化/资料计数）、认证状态、退出登录 |

- **现代化图标**：全站图标统一使用主流图标库 [lucide](https://lucide.dev/)（`lucide-vue-next`），并采用亮色主题与流式「打字机」光标效果。
- **Naive UI 组件库**：界面基于 [Naive UI](https://www.naiveui.com/)（`naive-ui`）构建——按钮、输入框、弹窗、开关、标签页、卡片、列表、时间选择器等均使用其组件，配合 `n-config-provider` 统一亮色主题与中文语言包。

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
├── server.py                 # FastAPI 入口：路由、WebSocket、文件端点、自动化调度循环
├── config.py                 # 环境变量配置
├── workspace.py              # 会话级隔离工作目录 + ContextVar 上下文
├── workbench_store.py        # 工作台扩展存储（项目 / 自动化 / 资料库）
├── requirements.txt          # Python 依赖
├── run.sh                    # 一键安装依赖并启动后端
├── agent/                    # Agent 构建（模型、系统提示词、工具聚合）
├── auth/                     # 服务端认证（签名令牌、限流、常量时间凭据比对）
├── conversation/             # 会话存储（SQLite 元数据 + 消息历史，含 JSON 迁移脚本）
├── deploy/                   # 自动化部署（deploy.py 打包上传 + server_setup.sh）
├── skills/                   # 技能注册表 + 内置/自定义技能
├── tools/                    # 内置工具（calculator、web_fetch、run_python、list_dir、read_file …）
├── index.html                # Vite 入口
├── vite.config.ts            # base: '/static/'，dev 代理 /api、/ws → :8000
├── tsconfig.json
├── package.json
├── src/                      # 前端源码（main.ts、router.ts、store.ts、workbench.ts、auth.ts、api.ts、types.ts）
│   ├── composables/
│   │   └── useBreakpoint.ts  # 响应式断点（matchMedia），驱动抽屉/浮层等结构切换
│   ├── views/                # 路由页面
│   │   ├── Login.vue         # 登录页
│   │   ├── Shell.vue         # 应用外壳（顶部工具栏 + 左侧图标导航 + 窄屏抽屉）
│   │   ├── Home.vue          # 对话页（会话列表 + 聊天 + 右侧结果面板）
│   │   ├── Projects.vue      # 项目页
│   │   ├── Experts.vue       # 专家 · 技能 · 连接器页
│   │   ├── Automation.vue    # 自动化页
│   │   ├── Library.vue       # 资料库页
│   │   ├── Inspiration.vue   # 灵感页
│   │   └── Settings.vue      # 设置页
│   └── components/           # 复用组件（ChatWindow、FilePanel、SkillManager、ToolConfirm 等）
├── tests/                    # 自动化验证脚本（见「布局与交互验证」）
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
| `AUTH_USERNAME` | 登录用户名（留空则**关闭**登录校验） | 空 |
| `AUTH_PASSWORD` | 登录密码 | 空 |
| `AUTH_COOKIE_SECURE` | 走 HTTPS 时设为 `true`（Cookie 加 `Secure`） | `false` |
| `AUTH_SECRET` | 令牌签名密钥（不填会自动生成并持久化） | 自动 |

`.env.example` 默认填好 **DeepSeek**（国内可直连）的配置，取消注释 OpenAI 段即可切换。

> **注意**：`OPENAI_BASE_URL` / `MODEL` 等键若在 `.env` 中重复出现，`python-dotenv` 以**最后一次**出现为准。
> 切换服务商时记得把不需要的那几行注释掉，否则旧值会覆盖新值。

### 3.1 登录认证

同时配置 `AUTH_USERNAME` 与 `AUTH_PASSWORD` 即启用登录保护；两者留空则完全跳过（方便本地开发）。

| 能力 | 说明 |
|---|---|
| 登录页 | `src/views/Login.vue`，路由 `/login`；未登录访问 `/` 由前端路由守卫跳转 |
| 会话保持 | 签名令牌存于 **HttpOnly Cookie**，JS 读不到，降低 XSS 窃取风险 |
| 有效期 | 勾选「记住我」7 天，否则 12 小时 |
| 接口保护 | 全部 14 个 REST 接口返回 401；WebSocket 以 `4401` 关闭 |
| 暴力破解防护 | 同一 IP 连续失败 8 次锁定 5 分钟 |
| 退出登录 | `POST /api/auth/logout` 清除 Cookie |

> 密码以明文比对（`hmac.compare_digest` 常量时间），**请务必在部署后修改默认密码**，
> 并建议只在内网或加 HTTPS 反代的场景下对外暴露。

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

## 部署到服务器

`deploy/` 下提供了自动化部署脚本，目标机需为 **Ubuntu / Debian**、已装 `python3` 与 `systemd`。

```bash
# 默认部署到脚本内配置的服务器
python3 deploy/deploy.py

# 覆盖目标机（推荐用环境变量，避免把密码写进代码）
DEPLOY_HOST=1.2.3.4 DEPLOY_PORT=22 DEPLOY_USER=root DEPLOY_PWD='你的密码' \
  python3 deploy/deploy.py

# 只更新代码、跳过 pip 安装（二次部署更快）
python3 deploy/deploy.py --no-deps
```

脚本会依次完成：

1. 打包项目（排除 `data/`、`node_modules/`、`__pycache__`、`.env` 等）
2. SFTP 上传并解压到 `/opt/langgraph-agent`
3. 建 venv 并安装 `requirements.txt`
4. 写入 `.env` 的登录账号密码（保留已有配置）
5. 注册 **systemd** 服务 `langgraph-agent`（开机自启、崩溃自动重启）
6. 轮询 `/login` 直到服务就绪，并打印状态

部署后管理服务：

```bash
systemctl status  langgraph-agent     # 查看状态
systemctl restart langgraph-agent     # 重启
journalctl -u langgraph-agent -f      # 实时日志
tail -f /var/log/langgraph-agent.log  # 应用日志
```

> **首次部署后请立刻修改 `.env` 里的 `AUTH_PASSWORD`**，并 `systemctl restart langgraph-agent` 生效。
> 若服务器有安全组/防火墙，需放行 `8000` 端口。生产环境建议前置 Nginx 并配置 HTTPS。

---

## 布局与交互验证

`tests/` 下提供三份无需测试框架的自动化验证脚本（依赖 `requests` / `playwright`，Chromium 已由 `playwright install chromium` 安装）：

| 脚本 | 覆盖内容 |
|---|---|
| `tests/verify_responsive.py` | **15 档视口**（320→2560px）逐页巡检：无横向溢出、无元素越界、断点结构正确（底部 Tab 栏 / 汉堡按钮 / 三栏列宽）、顶栏控件按断点收起、控制台无错误 |
| `tests/verify_interaction.py` | 交互可用性：手机端汉堡抽屉导航跳转、会话抽屉开关（Esc）、右面板浮层出现与关闭、**手机端真实对话往返**、平板/桌面面板收起展开与全屏 |
| `tests/verify_api.py` | 后端回归：401 保护、登录、六域接口、runtime 字段、项目/资料 CRUD、模型切换校验、SPA 深链与路由语义（`BASE` 常量可切换本地/线上） |

```bash
python3.11 tests/verify_responsive.py    # 需先启动后端并完成 npm run build
python3.11 tests/verify_interaction.py
python3.11 tests/verify_api.py
```

三个脚本全部通过即视为一次完整回归（前端布局 + 交互 + 后端接口 + SPA 路由）。

---

## API 参考

所有 REST 接口前缀均为 `/api`。

### 认证（Auth）
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/login` | 登录页面（Vue 路由，已登录自动跳回 `/`） |
| `POST` | `/api/auth/login` | 登录，body: `{"username","password","remember"}`，成功后下发 HttpOnly Cookie |
| `POST` | `/api/auth/logout` | 退出登录，清除 Cookie |
| `GET` | `/api/auth/check` | 查询登录态，返回 `{"authenticated","username","enabled"}` |

> 除上表与 `/login`、`/`、`/static/*` 外，其余接口均需登录；未登录时 REST 返回 `401`，WebSocket 以 `4401` 关闭。
>
> `/projects`、`/automation` 等前端路由由 Vue Router 接管：服务端在**所有路由注册完毕之后**追加一条 `GET /{full_path:path}` 回退到同一入口 HTML，并显式排除 `api/`、`static/`、`ws/` 前缀，使这些地址可直接访问或刷新。

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

### 项目空间（Projects）
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/api/projects` | 列出全部项目（含 `conv_count` 与 `conv_ids`） |
| `POST` | `/api/projects` | 新建项目，body: `{"name","description","color"}` |
| `PATCH` | `/api/projects/{pid}` | 更新项目（名称 / 描述 / 颜色） |
| `DELETE` | `/api/projects/{pid}` | 删除项目（仅解除关联，**不删除会话本身**） |
| `POST` | `/api/projects/{pid}/conversations` | 把会话加入项目，body: `{"cid"}` |
| `DELETE` | `/api/projects/{pid}/conversations/{cid}` | 把会话移出项目 |

### 自动化（Automations）
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/api/automations` | 列出全部自动化任务 |
| `POST` | `/api/automations` | 新建任务，body: `{"name","prompt","schedule","at_time","enabled"}` |
| `PATCH` | `/api/automations/{aid}` | 更新任务（含启停 `enabled`） |
| `DELETE` | `/api/automations/{aid}` | 删除任务 |
| `POST` | `/api/automations/{aid}/run` | 手动触发一次，返回 `{"ok","cid"}`（新建的会话 id） |

`schedule` 取值 `daily` / `weekly`（每周一）/ `hourly` / `manual`；`at_time` 为 `HH:MM`。
调度由 `server.py` 中 `lifespan` 启动的 `_automation_scheduler()` 驱动，每 60 秒轮询，
用 `last_run_at` 去重以保证当期只触发一次；`manual` 不参与调度。

### 资料库（Library）
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/api/library?q=` | 列出条目；`q` 对 标题 / 内容 / 标签 做模糊搜索 |
| `POST` | `/api/library` | 新建条目，body: `{"title","content","kind","tags"}` |
| `PATCH` | `/api/library/{iid}` | 更新条目 |
| `DELETE` | `/api/library/{iid}` | 删除条目 |

`kind` 取值 `note` / `link` / `file`；`tags` 为逗号分隔字符串。

### 运行时（Runtime）
| 方法 | 路径 | 说明 |
|---|---|---|
| `GET` | `/api/runtime` | 当前模型、可选模型、推理地址、技能与各域计数（设置页展示） |
| `POST` | `/api/runtime/model` | 切换模型，body: `{"model"}`；模型名需在 `ALLOWED_MODELS` 内，切换后清空 Agent 缓存，**下一个对话轮次生效** |

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
| `data/app.db` | 会话元数据 + 消息历史，以及工作台的 项目 / 自动化 / 资料库 | `conversation/store.py`、`workbench_store.py` |
| `data/checkpoints.db` | LangGraph 对话状态检查点，支撑多轮上下文与工具审批中断 | `AsyncSqliteSaver` |
| `data/workspaces/{cid}/` | 会话隔离工作目录（普通文件，非数据库） | `workspace.py` |

**`app.db` 表结构**

```sql
conversations(id TEXT PK, title TEXT, created_at REAL, updated_at REAL)
messages(id INTEGER PK AUTOINCREMENT, cid TEXT FK→conversations.id ON DELETE CASCADE,
         seq INTEGER, role TEXT, content TEXT, tool_calls TEXT /* JSON */)

-- workbench_store.py（与上表共库、互不依赖）
projects(id TEXT PK, name TEXT, description TEXT, color TEXT, created_at REAL, updated_at REAL)
project_conversations(project_id TEXT FK→projects.id ON DELETE CASCADE, cid TEXT, added_at REAL,
                      PRIMARY KEY (project_id, cid))
automations(id TEXT PK, name TEXT, prompt TEXT, schedule TEXT, at_time TEXT, enabled INTEGER,
            last_run_at REAL, last_status TEXT, run_count INTEGER, created_at REAL)
library_items(id TEXT PK, title TEXT, kind TEXT, content TEXT, tags TEXT,
              created_at REAL, updated_at REAL)
```

- 消息按 `seq` 排序，`tool_calls` 以 JSON 文本存储；`save_messages` 在单事务内全量覆盖写入，保证原子性。
- 删除会话通过外键级联清理消息，不留孤儿行；删除项目会级联清理 `project_conversations` 关联（会话本身保留）。
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
