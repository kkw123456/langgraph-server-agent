"""LangGraph Agent 构建器：根据当前启用的技能动态编译 ReAct 图。"""
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

    def _model(self) -> ChatOpenAI:
        if not OPENAI_API_KEY:
            raise RuntimeError(
                "未配置 OPENAI_API_KEY，请在 .env 中设置（支持任意 OpenAI 兼容接口，"
                "可通过 OPENAI_BASE_URL 指向 DeepSeek / 本地 Ollama 等）。"
            )
        return ChatOpenAI(
            model=MODEL,
            api_key=OPENAI_API_KEY,
            base_url=OPENAI_BASE_URL,
            temperature=TEMPERATURE,
            streaming=True,
        )

    def _system_prompt(self) -> str:
        lines = [
            "你是一个运行在 LangGraph 上的服务端 AI 助手，支持多轮对话、工具调用与技能包管理。",
            "请根据用户需求，合理使用当前已启用的工具与技能包来完成任务。",
        ]
        skills = self.registry.enabled_skills()
        if skills:
            lines.append("\n当前已启用的技能包：")
            for s in skills:
                lines.append(f"- 【{s.name}】{s.description}")
                if s.system_prompt:
                    lines.append(f"   提示: {s.system_prompt}")
        else:
            lines.append("\n（当前未启用任何技能包，仅进行普通对话。）")
        return "\n".join(lines)

    def get_agent(self):
        """按启用技能集合缓存编译好的图，技能变动时才重新编译。"""
        key = frozenset(self.registry.enabled_ids())
        if self._cache_key != key:
            tools = self.registry.enabled_tools()
            agent = create_react_agent(
                self._model(),
                tools=tools,
                prompt=self._system_prompt(),
                checkpointer=self.checkpointer,
            )
            self._cache = {key: agent}
            self._cache_key = key
        return self._cache[key]
