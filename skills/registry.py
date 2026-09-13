"""技能注册表：自动发现内置技能、启停管理、自定义技能创建与持久化。"""
import os
import json
import uuid
import importlib
import pkgutil
from typing import Dict, List, Optional

from langchain_core.tools import BaseTool, tool
from skills.base import Skill
from skills import builtin as builtin_pkg

# 默认启用的内置技能
DEFAULT_ENABLED = {"system", "math", "web", "coder", "file",
                   "viz", "db", "audio", "image", "doc", "rag"}


class SkillRegistry:
    def __init__(self, data_dir: str):
        self.data_dir = data_dir
        self.custom_dir = os.path.join(data_dir, "custom_skills")
        os.makedirs(self.custom_dir, exist_ok=True)
        self.state_path = os.path.join(data_dir, "skills_state.json")
        self.skills: Dict[str, Skill] = {}
        self.enabled: Dict[str, bool] = {}
        self._load_builtins()
        self._load_state()
        self._load_custom()

    # ---------- 加载 ----------
    def _load_builtins(self):
        for mod in pkgutil.iter_modules(builtin_pkg.__path__):
            try:
                m = importlib.import_module(f"skills.builtin.{mod.name}")
                if hasattr(m, "get_skill"):
                    s = m.get_skill()
                    self.skills[s.id] = s
            except Exception as e:
                print(f"[skill] 加载内置技能 {mod.name} 失败: {e}")

    def _load_state(self):
        if os.path.exists(self.state_path):
            try:
                with open(self.state_path) as f:
                    self.enabled = json.load(f)
            except Exception:
                self.enabled = {}
        for sid in self.skills:
            self.enabled.setdefault(sid, sid in DEFAULT_ENABLED)

    def _save_state(self):
        with open(self.state_path, "w") as f:
            json.dump(self.enabled, f, indent=2)

    def _load_custom(self):
        for fn in sorted(os.listdir(self.custom_dir)):
            if fn.endswith(".py"):
                self._load_custom_file(os.path.join(self.custom_dir, fn))

    def _load_custom_file(self, path):
        try:
            with open(path) as f:
                code = f.read()
            sid = os.path.splitext(os.path.basename(path))[0]
            skill = self._build_custom_skill(sid, code)
            if skill:
                self.skills[skill.id] = skill
                self.enabled.setdefault(skill.id, True)
        except Exception as e:
            print(f"[skill] 加载自定义技能 {path} 失败: {e}")

    def _build_custom_skill(self, sid, code, name=None, description=None) -> Optional[Skill]:
        ns = {"tool": tool, "__name__": "custom_" + sid}
        exec(compile(code, f"<custom {sid}>", "exec"), ns)
        tools = [v for v in ns.values() if isinstance(v, BaseTool)]
        if not tools:
            raise ValueError("代码中没有发现任何 @tool 装饰的函数")
        meta = ns.get("META", {}) or {}
        name = name or meta.get("name", sid)
        description = description or meta.get("description", "用户自定义技能。")
        return Skill(id=sid, name=name, description=description, tools=tools, builtin=False)

    # ---------- 公共 API ----------
    def list(self) -> List[dict]:
        out = []
        for s in self.skills.values():
            out.append({
                "id": s.id, "name": s.name, "description": s.description,
                "category": s.category,
                "builtin": s.builtin, "enabled": self.enabled.get(s.id, False),
                "tools": [t.name for t in s.tools],
            })
        return out

    def get(self, sid) -> Optional[Skill]:
        return self.skills.get(sid)

    def is_enabled(self, sid) -> bool:
        return self.enabled.get(sid, False)

    def enabled_ids(self) -> List[str]:
        return [s for s in self.skills if self.enabled.get(s, False)]

    def enabled_skills(self) -> List[Skill]:
        return [self.skills[s] for s in self.enabled_ids()]

    def enabled_tools(self) -> List[BaseTool]:
        tools = []
        for s in self.enabled_skills():
            tools.extend(s.tools)
        return tools

    def enable(self, sid) -> bool:
        if sid not in self.skills:
            return False
        self.enabled[sid] = True
        self._save_state()
        return True

    def disable(self, sid) -> bool:
        if sid not in self.skills:
            return False
        self.enabled[sid] = False
        self._save_state()
        return True

    def add_custom(self, name, description, code) -> dict:
        sid = "custom_" + uuid.uuid4().hex[:8]
        skill = self._build_custom_skill(sid, code, name, description)
        path = os.path.join(self.custom_dir, sid + ".py")
        with open(path, "w") as f:
            f.write(code)
        self.skills[sid] = skill
        self.enabled[sid] = True
        self._save_state()
        return {"id": sid, "name": skill.name}

    def remove_custom(self, sid) -> bool:
        if sid not in self.skills or self.skills[sid].builtin:
            return False
        self.skills.pop(sid, None)
        self.enabled.pop(sid, None)
        path = os.path.join(self.custom_dir, sid + ".py")
        if os.path.exists(path):
            os.remove(path)
        self._save_state()
        return True

    def reload(self) -> List[dict]:
        self.skills.clear()
        self._load_builtins()
        self._load_state()
        self._load_custom()
        return self.list()
