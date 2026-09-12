from skills.base import Skill
from tools.builtin_tools import run_python


def get_skill() -> Skill:
    return Skill(
        id="coder",
        name="代码执行",
        category="代码",
        description="在沙箱子进程中执行 Python 代码。子进程工作目录为本会话隔离的工作目录，"
        "脚本创建的文件也会落在其中（文件读写请使用『文件操作』技能）。",
        tools=[run_python],
        system_prompt="你可以用 run_python 在『当前会话隔离的工作目录』中执行代码来验证想法或处理数据；"
        "生成的文件会保存在该目录内，可用『文件操作』技能读写。",
    )
