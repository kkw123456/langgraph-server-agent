"""LangGraph Agent 构建器：根据当前启用的技能动态编译 ReAct 图。

支持运行时切换模型：``set_model()`` 后缓存失效，下次取用会按新模型重建图。
"""
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

from config import MODEL, OPENAI_API_KEY, OPENAI_BASE_URL, TEMPERATURE
from skills.registry import SkillRegistry


class AgentManager:
    def __init__(self, checkpointer, registry: SkillRegistry):
        self.checkpointer = checkpointer
        self.registry = registry
        self._cache: dict = {}
        self._cache_key = None
        # 当前模型与对应的 OpenAI 兼容接口（可在运行时切换，初值取 .env 的默认提供商）
        self.model_name = MODEL
        self.base_url = OPENAI_BASE_URL
        self.api_key = OPENAI_API_KEY
        self.temperature = TEMPERATURE

    def _model(self) -> ChatOpenAI:
        if not self.api_key:
            raise RuntimeError(
                "未配置 api_key：请在 .env 中设置 OPENAI_API_KEY，或在「设置 → 模型管理」"
                "为所选提供商填写密钥（支持任意 OpenAI 兼容接口）。"
            )
        return ChatOpenAI(
            model=self.model_name,
            api_key=self.api_key,
            base_url=self.base_url,
            temperature=self.temperature,
            streaming=True,
        )

    def set_model(self, name: str, base_url: str | None = None, api_key: str | None = None) -> None:
        """切换模型（可携带该模型所属提供商的接口地址与密钥），并让已编译的图失效。"""
        self.model_name = name
        if base_url is not None:
            self.base_url = base_url
        if api_key is not None:
            self.api_key = api_key
        self._cache.clear()
        self._cache_key = None

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

    def get_agent(self):
        """按「启用技能集合 + 当前模型 + 接口地址」缓存编译好的图，任一变动即重建。"""
        key = (frozenset(self.registry.enabled_ids()), self.model_name, self.base_url)
        if self._cache_key != key:
            tools = self.registry.enabled_tools()
            agent = create_react_agent(
                self._model(),
                tools=tools,
                prompt=self._system_prompt(),
                checkpointer=self.checkpointer,
                # 在 tools 节点前中断，便于在「确认模式」下让用户审批工具调用
                interrupt_before=["tools"],
            )
            self._cache = {key: agent}
            self._cache_key = key
        return self._cache[key]
