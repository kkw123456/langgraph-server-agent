"""把 .env 中重复的 LLM 配置清理掉，只保留第一个生效项。

背景：.env.example 里 DeepSeek 那两行是未注释的示例值，
追加 Ark 配置后会出现重复键，而 dotenv 以「最后一次出现」为准，
导致实际生效的仍是 DeepSeek。这里把首个 LLM 键保留、其余注释掉。
"""
import re

p = ".env"
lines = open(p, encoding="utf-8").read().splitlines()

LLM_KEYS = ("OPENAI_API_KEY", "OPENAI_BASE_URL", "MODEL", "TEMPERATURE")
seen = set()
out = []

for ln in lines:
    m = re.match(r"^\s*([A-Z_]+)\s*=", ln)
    if m and m.group(1) in LLM_KEYS:
        key = m.group(1)
        if key in seen:
            # 重复项：注释掉并标记，避免误认为生效
            out.append(f"# [已忽略-重复] {ln.strip()}")
            continue
        seen.add(key)
    out.append(ln)

open(p, "w", encoding="utf-8").write("\n".join(out) + "\n")

print("生效的 LLM 配置：")
for ln in out:
    m = re.match(r"^(OPENAI_API_KEY|OPENAI_BASE_URL|MODEL|TEMPERATURE)=", ln)
    if m:
        k = ln.split("=", 1)[0]
        v = ln.split("=", 1)[1]
        if k == "OPENAI_API_KEY":
            v = v[:14] + "***"
        print(f"  {k}={v}")
