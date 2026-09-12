from skills.base import Skill
from tools.builtin_tools import run_python, list_dir, read_file


def get_skill() -> Skill:
    return Skill(
        id="coder",
        name="代码执行",
        description="在沙箱子进程中执行 Python 代码、列出与读取工作区文件。每个会话拥有独立隔离的工作目录，文件互不串扰。",
        tools=[run_python, list_dir, read_file],
        system_prompt="你可以用 run_python 在『当前会话隔离的工作目录』中执行代码来验证想法或处理数据；用 list_dir / read_file 读写该目录下的文件。",
    )
