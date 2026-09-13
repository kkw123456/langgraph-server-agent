"""数据库操作技能：会话级 SQLite 数据库的 SQL 执行（建表/增删改查）。

每个会话的数据库文件落在该会话工作目录 db/app.db 内，会话间完全隔离。
"""
import os
import re
import sqlite3

from langchain_core.tools import tool

import workspace

_FORBIDDEN = re.compile(r"\b(attach|pragma\s+database_list|load_extension)\b", re.I)


def _db_path() -> str:
    root = workspace.current_root()
    d = os.path.join(root, "db")
    os.makedirs(d, exist_ok=True)
    return os.path.join(d, "app.db")


def _rows_to_md(cur, rows) -> str:
    cols = [d[0] for d in cur.description] if cur.description else []
    if not cols:
        return "（无结果集）"
    head = "| " + " | ".join(cols) + " |"
    sep = "|" + "|".join(["---"] * len(cols)) + "|"
    body = "\n".join("| " + " | ".join("" if v is None else str(v) for v in r) + " |" for r in rows[:50])
    more = f"\n（仅显示前 50 行，共 {len(rows)} 行）" if len(rows) > 50 else ""
    return f"{head}\n{sep}\n{body}{more}"


@tool
def sql_exec(sql: str) -> str:
    """在本会话的 SQLite 数据库上执行一条 SQL（支持建表/插入/更新/删除/查询）。

    Args:
        sql: 单条 SQL 语句（以 ; 结尾或不带均可）。SELECT 返回 Markdown 表格；
             写操作返回受影响行数。禁止 ATTACH / LOAD 等跨库语句。
    """
    sql = (sql or "").strip().rstrip(";")
    if not sql:
        return "SQL 不能为空"
    if _FORBIDDEN.search(sql):
        return "禁止使用 ATTACH / LOAD_EXTENSION 等跨库语句"
    if sql.count(";") > 0:
        return "一次只允许执行一条 SQL"
    try:
        conn = sqlite3.connect(_db_path(), timeout=10)
        try:
            cur = conn.execute(sql)
            if cur.description:  # 查询
                rows = cur.fetchall()
                out = _rows_to_md(cur, rows)
            else:  # 写操作
                conn.commit()
                out = f"执行成功，受影响行数: {cur.rowcount}"
            return out
        finally:
            conn.close()
    except Exception as e:
        return f"SQL 执行失败: {e}"


@tool
def sql_schema(table: str = "") -> str:
    """查看本会话数据库的表结构。不传 table 时列出所有表名；传表名时返回其建表语句。

    Args:
        table: 可选，要查看的表名。
    """
    try:
        conn = sqlite3.connect(_db_path(), timeout=10)
        try:
            if table:
                row = conn.execute(
                    "SELECT sql FROM sqlite_master WHERE type='table' AND name=?", (table,)
                ).fetchone()
                return row[0] if row and row[0] else f"表 {table} 不存在"
            rows = conn.execute(
                "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
            ).fetchall()
            names = [r[0] for r in rows]
            return "数据库表: " + ("、".join(names) if names else "（暂无表，可用 sql_exec 的 CREATE TABLE 创建）")
        finally:
            conn.close()
    except Exception as e:
        return f"查询失败: {e}"


def get_skill():
    from skills.base import Skill
    return Skill(
        id="db",
        name="数据库操作",
        category="数据",
        description="在本会话独立的 SQLite 数据库上执行 SQL：建表、插入、更新、删除与查询，查询结果以表格返回。",
        tools=[sql_exec, sql_schema],
        system_prompt=(
            "用户提到数据存储/查询时用 sql_exec 执行 SQL、sql_schema 查看表结构；"
            "数据库为本会话独立 SQLite，查询结果会以 Markdown 表格展示，可直接复制。"
        ),
    )
