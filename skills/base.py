"""技能数据结构定义。"""
from dataclasses import dataclass, field
from typing import List
from langchain_core.tools import BaseTool


@dataclass
class Skill:
    id: str
    name: str
    description: str
    tools: List[BaseTool] = field(default_factory=list)
    system_prompt: str = ""
    builtin: bool = True
    category: str = "通用"
