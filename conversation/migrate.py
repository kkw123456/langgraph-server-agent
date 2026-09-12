"""一次性迁移：把旧的 JSON 会话数据导入 SQLite（data/app.db）。

用法：
    python3 -m conversation.migrate          # 干跑，仅打印将要迁移的内容
    python3 -m conversation.migrate --apply  # 实际写入

迁移是幂等的：已存在的会话 id 会被跳过，不会重复插入。
旧文件默认保留（加 --clean 可在成功后删除 index.json 与各会话 .json）。
"""
import os
import sys
import json
import glob

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import config  # noqa: E402
from conversation.store import ConversationStore  # noqa: E402


def main(apply: bool = False, clean: bool = False) -> None:
    conv_dir = os.path.join(config.DATA_DIR, "conversations")
    index_path = os.path.join(conv_dir, "index.json")

    if not os.path.exists(index_path):
        print(f"未发现旧数据（{index_path} 不存在），无需迁移。")
        return

    with open(index_path) as f:
        index = json.load(f)

    store = ConversationStore(config.DATA_DIR)
    conn = store._conn()

    migrated, skipped = 0, 0
    for cid, meta in index.items():
        if conn.execute(
            "SELECT 1 FROM conversations WHERE id = ?", (cid,)
        ).fetchone():
            print(f"  跳过（已存在）: {cid}  {meta.get('title')}")
            skipped += 1
            continue

        msgs_path = os.path.join(conv_dir, cid + ".json")
        messages = []
        if os.path.exists(msgs_path):
            try:
                with open(msgs_path) as f:
                    messages = json.load(f)
            except Exception as e:
                print(f"  警告：读取 {msgs_path} 失败: {e}")

        print(f"  迁移: {cid}  《{meta.get('title')}》  {len(messages)} 条消息")
        if apply:
            with conn:
                conn.execute(
                    "INSERT INTO conversations (id, title, created_at, updated_at) "
                    "VALUES (?, ?, ?, ?)",
                    (
                        cid,
                        meta.get("title", "新对话"),
                        meta.get("created_at", 0) or 0,
                        meta.get("updated_at", 0) or 0,
                    ),
                )
            store.save_messages(cid, messages)
        migrated += 1

    print(f"\n完成：迁移 {migrated} 个，跳过 {skipped} 个。")
    if not apply:
        print("（这是干跑模式，未写入。加 --apply 实际执行。）")
        return

    if clean:
        for p in glob.glob(os.path.join(conv_dir, "*.json")):
            os.remove(p)
        print("已删除旧的 JSON 文件。")


if __name__ == "__main__":
    main(apply="--apply" in sys.argv, clean="--clean" in sys.argv)
