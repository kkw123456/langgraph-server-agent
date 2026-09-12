from skills.base import Skill
from tools.builtin_tools import (
    read_file,
    write_file,
    list_dir,
    make_dir,
    search_files,
    delete_file,
)


def get_skill() -> Skill:
    return Skill(
        id="file",
        name="文件操作",
        category="文件",
        description="在当前会话隔离的工作目录内读写、创建、检索与删除文件。"
        "所有操作被严格限制在该会话目录内，越界路径会被拦截，会话间互不串扰。",
        tools=[read_file, write_file, list_dir, make_dir, search_files, delete_file],
        system_prompt=(
            "你可以使用文件工具管理「当前会话隔离的工作目录」："
            "read_file 读取、write_file 写入（覆盖）、list_dir 列目录、"
            "make_dir 建目录、search_files 递归检索内容、delete_file 删除文件。"
            "所有路径均相对于本会话工作目录，不要使用绝对路径。"
        ),
    )
