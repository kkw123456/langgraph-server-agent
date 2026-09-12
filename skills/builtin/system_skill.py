from skills.base import Skill
from tools.builtin_tools import get_current_datetime


def get_skill() -> Skill:
    return Skill(
        id="system",
        name="系统工具",
        description="查询服务器当前时间等基础信息。",
        tools=[get_current_datetime],
        system_prompt="你可以查询服务器当前时间。",
    )
