"""把 LLM 配置写入远程 .env。

密钥一律从环境变量读取，**不要在代码里硬编码**（会被 GitHub 密钥扫描拦截）。
用法（在服务器上执行）：

    LLM_API_KEY=xxx LLM_BASE_URL=https://... LLM_MODEL=xxx python3 deploy/set_llm.py
"""
import os
import re

API_KEY = os.getenv("LLM_API_KEY", "")
BASE_URL = os.getenv("LLM_BASE_URL", "")
MODEL = os.getenv("LLM_MODEL", "")


def upsert(lines, k, v):
    """把 key=value 写入；已存在（含被注释的行）则替换，否则追加。"""
    pat = re.compile(rf"^\s*#?\s*{re.escape(k)}\s*=")
    for i, ln in enumerate(lines):
        if pat.match(ln):
            lines[i] = f"{k}={v}"
            return lines
    lines.append(f"{k}={v}")
    return lines


def main():
    if not (API_KEY and BASE_URL and MODEL):
        raise SystemExit(
            "缺少参数：请通过环境变量提供 LLM_API_KEY / LLM_BASE_URL / LLM_MODEL"
        )

    path = ".env"
    lines = []
    if os.path.exists(path):
        lines = open(path, encoding="utf-8").read().splitlines()

    for k, v in (
        ("OPENAI_API_KEY", API_KEY),
        ("OPENAI_BASE_URL", BASE_URL),
        ("MODEL", MODEL),
    ):
        lines = upsert(lines, k, v)

    open(path, "w", encoding="utf-8").write("\n".join(lines) + "\n")
    print(f"已写入 LLM 配置: {BASE_URL} / {MODEL}")


if __name__ == "__main__":
    main()
