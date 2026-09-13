"""LangGraph Agent 构建器：根据当前启用的技能动态编译 ReAct 图。

支持运行时切换模型：``set_model()`` 后缓存失效，下次取用会按新模型重建图。

模型选择按**用户隔离**（批次D #67/#68）：每个用户可各自选择模型/提供商，
互不影响；未主动选择过的用户回落到 .env 默认配置。
"""
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

import config
from config import MODEL, OPENAI_API_KEY, OPENAI_BASE_URL, TEMPERATURE
from skills.registry import SkillRegistry


class AgentManager:
    def __init__(self, checkpointer, registry: SkillRegistry):
        self.checkpointer = checkpointer
        self.registry = registry
        self._cache: dict = {}
        self._cache_key = None
        # 每用户独立的模型偏好：user -> {model, base_url, api_key}
        # 未记录的用户走 .env 默认（等价于 _default_cfg()）
        self._prefs: dict[str, dict] = {}

    # ---------------- 模型配置（per-user） ----------------
    @staticmethod
    def _default_cfg() -> dict:
        """默认组：直接取 .env 导入值（服务启动时的快照）。"""
        return {"model": MODEL, "base_url": OPENAI_BASE_URL, "api_key": OPENAI_API_KEY}

    def get_cfg(self, user: str = "") -> dict:
        """取某用户当前生效的模型配置。"""
        return self._prefs.get(user or "") or self._default_cfg()

    def set_model(self, user: str, name: str, base_url: str | None = None, api_key: str | None = None) -> dict:
        """按用户记忆模型选择。

        base_url/api_key 传 None 表示该模型属于默认组（走 .env），
        **显式回退**为 .env 值，避免沿用上一次提供商的地址（历史 bug：
        从私有提供商模型切回默认模型时 base_url 未重置，导致 Connection error）。
        """
        cfg = {
            "model": name,
            "base_url": base_url if base_url is not None else OPENAI_BASE_URL,
            "api_key": api_key if api_key is not None else OPENAI_API_KEY,
        }
        self._prefs[user or ""] = cfg
        self._cache.clear()
        self._cache_key = None
        return cfg

    def reset_user(self, user: str) -> None:
        """清除某用户的模型偏好（用户被删除时调用），回落 .env 默认。"""
        self._prefs.pop(user or "", None)

    def pref_users(self) -> list[str]:
        """所有设置了模型偏好的用户名。"""
        return list(self._prefs.keys())

    # ---------------- Agent 图构建 ----------------
    def _model(self, user: str) -> ChatOpenAI:
        cfg = self.get_cfg(user)
        if not cfg["api_key"]:
            raise RuntimeError(
                "未配置 api_key：请在 .env 中设置 OPENAI_API_KEY，或在「设置 → 模型管理」"
                "为所选提供商填写密钥（支持任意 OpenAI 兼容接口）。"
            )
        return ChatOpenAI(
            model=cfg["model"],
            api_key=cfg["api_key"],
            base_url=cfg["base_url"],
            temperature=TEMPERATURE,
            streaming=True,
        )

    def _system_prompt(self) -> str:
        lines = [
            "你是一个运行在 LangGraph 上的服务端 AI 助手，支持多轮对话、工具调用与技能包管理。",
            "请根据用户需求，合理使用当前已启用的工具与技能包来完成任务。",
            "",
            "图片回显约定：当回复中需要展示图片（图表、生成的图像、处理后的图片等）时，"
            "把图片文件保存到当前工作目录的 tmp/ 子目录（如 tmp/chart_1.png），"
            "并在正文中用 Markdown 图片语法引用相对路径，例如 ![图表](tmp/chart_1.png)，"
            "前端会自动渲染该图片。",
        ]
        skills = self.registry.enabled_skills()
        if skills:
            lines.append("\n当前已启用的技能包：")
            for s in skills:
                lines.append(f"- 【{s.category}/{s.name}】{s.description}")
                if s.system_prompt:
                    lines.append(f"   提示: {s.system_prompt}")
        else:
            lines.append("\n（当前未启用任何技能包，仅进行普通对话。）")
        return "\n".join(lines)

    def get_agent(self, user: str = ""):
        """按「启用技能集合 + 用户 + 模型配置」缓存编译好的图，任一变动即重建。"""
        cfg = self.get_cfg(user)
        key = (
            frozenset(self.registry.enabled_ids()),
            user or "",
            cfg["model"],
            cfg["base_url"],
            cfg["api_key"],
        )
        if self._cache_key != key:
            tools = self.registry.enabled_tools()
            agent = create_react_agent(
                self._model(user),
                tools=tools,
                prompt=self._system_prompt(),
                checkpointer=self.checkpointer,
                # 在 tools 节点前中断，便于在「确认模式」下让用户审批工具调用
                interrupt_before=["tools"],
            )
            self._cache = {key: agent}
            self._cache_key = key
        return self._cache[key]
