from skills.base import Skill
from tools.builtin_tools import web_fetch


def get_skill() -> Skill:
    return Skill(
        id="web",
        name="网页抓取",
        description="抓取网页内容，用于联网检索与调研。",
        tools=[web_fetch],
        category="网络",
    )
