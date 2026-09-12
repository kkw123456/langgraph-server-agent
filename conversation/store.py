"""会话存储：维护多会话元数据与消息历史（JSON 持久化）。"""
import os
import json
import uuid
import time


class ConversationStore:
    def __init__(self, data_dir: str):
        self.dir = os.path.join(data_dir, "conversations")
        os.makedirs(self.dir, exist_ok=True)
        self.index_path = os.path.join(self.dir, "index.json")
        self.index = self._load_index()

    def _load_index(self) -> dict:
        if os.path.exists(self.index_path):
            try:
                with open(self.index_path) as f:
                    return json.load(f)
            except Exception:
                return {}
        return {}

    def _save_index(self):
        with open(self.index_path, "w") as f:
            json.dump(self.index, f, indent=2)

    def list(self) -> list:
        items = list(self.index.values())
        items.sort(key=lambda x: x.get("updated_at", 0), reverse=True)
        return items

    def get(self, cid: str):
        return self.index.get(cid)

    def create(self, title: str = "新对话") -> dict:
        cid = uuid.uuid4().hex
        now = time.time()
        self.index[cid] = {
            "id": cid, "title": title,
            "created_at": now, "updated_at": now,
        }
        self._save_index()
        self.save_messages(cid, [])
        return self.index[cid]

    def delete(self, cid: str):
        self.index.pop(cid, None)
        self._save_index()
        p = self._msg_path(cid)
        if os.path.exists(p):
            os.remove(p)

    def rename(self, cid: str, title: str):
        if cid in self.index:
            self.index[cid]["title"] = title
            self._save_index()

    def touch(self, cid: str):
        if cid in self.index:
            self.index[cid]["updated_at"] = time.time()
            self._save_index()

    def _msg_path(self, cid: str) -> str:
        return os.path.join(self.dir, cid + ".json")

    def load_messages(self, cid: str) -> list:
        p = self._msg_path(cid)
        if os.path.exists(p):
            try:
                with open(p) as f:
                    return json.load(f)
            except Exception:
                return []
        return []

    def save_messages(self, cid: str, messages: list):
        with open(self._msg_path(cid), "w") as f:
            json.dump(messages, f, ensure_ascii=False, indent=2)
