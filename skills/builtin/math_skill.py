from skills.base import Skill
from tools.builtin_tools import calculator


def get_skill() -> Skill:
    return Skill(
        id="math",
        name="数学计算",
        description="安全计算数学表达式，支持 sqrt/sin/log/pi 等函数与常量。",
        tools=[calculator],
        system_prompt="当用户需要数学计算时，优先使用 calculator 工具。",
        category="数学",
    )
