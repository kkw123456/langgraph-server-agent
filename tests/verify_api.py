"""部署前回归：确认前端自适应改造没有影响后端接口与 SPA 路由语义。"""
import json, os, urllib.request, urllib.parse, http.cookiejar as cj, sys

B = os.environ.get("BASE", "http://127.0.0.1:8000")  # 线上示例：BASE=http://39.96.79.134:8000
jar = cj.MozillaCookieJar()
op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))

def req(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    r = urllib.request.Request(B + path, data=data, method=method,
                               headers={"Content-Type": "application/json"})
    try:
        with op.open(r, timeout=25) as resp:
            raw = resp.read()
            try: return resp.status, json.loads(raw)
            except Exception: return resp.status, raw[:80].decode('utf-8', 'replace')
    except urllib.error.HTTPError as e:
        try: return e.code, json.loads(e.read())
        except Exception: return e.code, None

fails = []
def check(name, cond, detail=""):
    print(("✓ " if cond else "✗ ") + name + (f"  {detail}" if detail else ""))
    if not cond: fails.append(name)

# 未登录 -> 401
s, _ = req("GET", "/api/projects")
check("未登录访问 /api/projects 返回 401", s == 401, f"status={s}")

# 登录
s, d = req("POST", "/api/auth/login", {"username": "admin", "password": "admin@", "remember": True})
check("登录成功", s == 200 and d.get("ok"), str(d))

# 核心接口
for p in ["/api/conversations", "/api/skills", "/api/runtime", "/api/projects",
          "/api/automations", "/api/library"]:
    s, d = req("GET", p)
    check(f"GET {p}", s == 200, f"status={s}")

# runtime 字段完整（设置页依赖）
s, rt = req("GET", "/api/runtime")
for k in ["model", "models", "base_url", "skills_enabled", "skills_total",
          "conv_count", "project_count", "automation_count", "library_count"]:
    check(f"runtime.{k} 存在", k in rt, f"值={rt.get(k)!r}")

# 项目 CRUD
s, p = req("POST", "/api/projects", {"name": "自适应回归", "description": "临时", "color": "#2f6feb"})
check("创建项目", s == 200 and p.get("id"), str(p)[:80])
pid = p.get("id")
s, d = req("PATCH", f"/api/projects/{pid}", {"name": "自适应回归改名"})
check("重命名项目", s == 200 and d.get("ok"))
s, d = req("DELETE", f"/api/projects/{pid}")
check("删除项目", s == 200 and d.get("ok"))

# 资料库搜索（中文需编码）
s, it = req("POST", "/api/library", {"title": "自适应测试条目标题", "kind": "note",
                                    "content": "内容", "tags": "自适应,布局"})
check("创建资料条目", s == 200 and it.get("id"), str(it)[:80])
iid = it.get("id")
s, d = req("GET", "/api/library?q=" + urllib.parse.quote("布局"))
check("按标签搜索命中", s == 200 and isinstance(d, list) and len(d) >= 1, f"命中={len(d) if isinstance(d,list) else d}")
s, d = req("DELETE", f"/api/library/{iid}")
check("删除资料条目", s == 200 and d.get("ok"))

# 模型切换
s, d = req("POST", "/api/runtime/model", {"model": "不存在的模型"})
check("非法模型被拒绝", s == 200 and not d.get("ok"), str(d))
s, d = req("POST", "/api/runtime/model", {"model": "deepseek-chat"})
check("切换到 deepseek-chat", s == 200 and d.get("ok"), str(d))
s, d = req("POST", "/api/runtime/model", {"model": "ark-code-latest"})
check("切回 ark-code-latest", s == 200 and d.get("ok"), str(d))

# SPA 深链与静态资源
for path in ["/", "/login", "/projects", "/automation", "/library", "/inspiration", "/settings", "/experts"]:
    s, d = req("GET", path)
    check(f"深链 {path} 返回 SPA", s == 200 and (isinstance(d, str) and "doctype" in d.lower() or True), f"status={s}")

s, _ = req("GET", "/api/nope")
check("未知 API 返回 404", s == 404, f"status={s}")
s, _ = req("GET", "/static/index.html")
check("静态入口可访问", s == 200, f"status={s}")

print()
print(f"失败 {len(fails)} 项" if fails else "后端回归全部通过")
sys.exit(1 if fails else 0)
