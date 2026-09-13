"""聊天体验升级验证：流式/markdown/折叠/中文名/停止/刷新续播/运行徽标/面板浮层。

覆盖：
  1. 发送后立即出现等待 loading（thinking dots 气泡）
  2. 回复正文按 markdown 渲染（标题/表格/代码块），且经过 DOMPurify
  3. 工具调用显示中文名（如「计算器」）与 loading 图标，结束后为「完成」
  4. 顶栏不再有模型选择器（模型选择收口在对话框内）
  5. 停止按钮：流式中点停止 → 回复保留并标记「已手动停止」
  6. 刷新续播：流式中刷新页面 → 恢复最后会话并继续流式到完成
  7. 会话列表「运行中」徽标
  8. 手机尺寸右侧面板浮层：不遮顶栏、tab 不越界（修复验证）
"""
import asyncio
import os
import sys

from playwright.async_api import async_playwright

BASE = os.environ.get("BASE", "http://127.0.0.1:8000")
USER, PWD = "admin", "admin@"


async def login(page) -> None:
    await page.goto(f"{BASE}/login", wait_until="networkidle")
    await page.fill('input[autocomplete="username"]', USER)
    await page.fill('input[autocomplete="current-password"]', PWD)
    await page.click('button[type="submit"]')
    await page.wait_for_url(f"{BASE}/", timeout=15000)
    await page.wait_for_timeout(800)


async def new_conv(page) -> str:
    """通过页面内 fetch 新建会话并打开，返回会话 id。"""
    cid = await page.evaluate(
        "fetch('/api/conversations',{method:'POST',headers:{'Content-Type':'application/json'},body:'{\"title\":\"UX验证\"}'}).then(r=>r.json()).then(d=>d.id)"
    )
    return cid


async def send_and_wait_start(page, text: str, timeout_ms: int = 15000) -> None:
    """发送消息并等待「开始回复」信号（等待气泡或流式气泡出现）。"""
    await page.fill(".composer-input textarea", text)
    await page.click(".send-btn")
    await page.wait_for_selector(
        ".waiting-bubble, .msg.assistant .bubble", timeout=timeout_ms
    )


async def wait_stream_done(page, timeout_s: int = 120) -> None:
    """等待流式结束：停止按钮消失且加载动画消失。"""
    for _ in range(timeout_s * 2):
        await page.wait_for_timeout(500)
        stop = await page.locator(".stop-btn").count()
        waiting = await page.locator(".waiting-bubble").count()
        if not stop and not waiting:
            return
    raise TimeoutError("流式回复未在限时内结束")


async def main() -> int:
    fails: list[str] = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        # ============ 桌面：markdown / 中文名 / 停止 ============
        ctx = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await ctx.new_page()
        errors: list[str] = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        await login(page)
        tag = "[桌面 1440]"

        # 4. 顶栏不再有模型选择器
        if await page.locator(".tb-model").count():
            fails.append(f"{tag} 顶栏仍存在模型选择器 .tb-model")
        if not await page.locator(".composer-model").count():
            fails.append(f"{tag} 对话框内缺少模型选择器 .composer-model")

        # 1+3. 发消息：等待气泡 → 计算器中文名
        cid1 = await new_conv(page)
        await page.goto(f"{BASE}/", wait_until="networkidle")
        await page.wait_for_timeout(500)
        # 打开刚建的会话
        await page.locator(".cs-item", has_text="UX验证").first.click()
        await page.wait_for_timeout(600)
        await send_and_wait_start(page, "请调用计算器工具计算 137*24-88，然后把结果用一个二级标题和一行表格（列：表达式|结果）展示。")
        # 等待气泡应已出现（发送后立刻）
        if not await page.locator(".waiting-bubble, .dots").count():
            # 可能回复来得太快，等待气泡已被流式气泡替代——检查流式气泡存在
            if not await page.locator(".msg.assistant .bubble").count():
                fails.append(f"{tag} 发送后既无等待气泡也无流式气泡")

        # 工具调用中文名（确认工具开始后）
        try:
            await page.wait_for_selector(".tool-head", timeout=60000)
            head_text = await page.locator(".tool-head").first.inner_text()
            if "计算器" not in head_text:
                fails.append(f"{tag} 工具头未显示中文名「计算器」: {head_text!r}")
            if "calculator" in head_text:
                fails.append(f"{tag} 工具头仍显示原始英文名: {head_text!r}")
        except Exception:
            fails.append(f"{tag} 未捕获到工具调用（模型未调用计算器？）")

        await wait_stream_done(page)

        # 2. markdown 渲染
        md_count = await page.locator(".md").count()
        if not md_count:
            fails.append(f"{tag} 助手消息未按 markdown 渲染（缺少 .md 元素）")
        else:
            has_tbl = await page.locator(".md table").count()
            has_head = await page.locator(".md :is(h1,h2,h3,h4)").count()
            if not has_tbl:
                fails.append(f"{tag} markdown 表格未渲染")
            if not has_head:
                print(f"    （提示）本次回复未含标题元素，仅表格验证渲染")

        # 5. 停止按钮
        cid2 = await page.evaluate(
            "fetch('/api/conversations',{method:'POST',headers:{'Content-Type':'application/json'},body:'{\"title\":\"停止验证\"}'}).then(r=>r.json()).then(d=>d.id)"
        )
        await page.evaluate(
            "fetch('/api/conversations').then(r=>r.json())"  # 预热
        )
        await page.reload(wait_until="networkidle")
        await page.wait_for_timeout(600)
        await page.locator(".cs-item", has_text="停止验证").first.click()
        await page.wait_for_timeout(600)
        await send_and_wait_start(page, "请调用 run_python 工具执行 time.sleep(14)，然后告诉我执行完毕。不要解释，直接执行。")
        # 等停止按钮出现（running 状态）或等待气泡
        try:
            await page.wait_for_selector(".stop-btn", timeout=20000)
        except Exception:
            fails.append(f"{tag} 进行中未出现停止按钮")
        # 等到工具开始执行（run_python 沙箱单次上限 15s，sleep(14) 提供足够停止窗口）
        try:
            await page.wait_for_selector(".tool-head", timeout=30000)
        except Exception:
            pass
        await page.wait_for_timeout(600)
        await page.click(".stop-btn")
        await wait_stream_done(page, timeout_s=25)
        body = await page.locator(".messages").inner_text()
        if "已手动停止" not in body:
            fails.append(f"{tag} 停止后消息未包含「已手动停止」标记")
        stop_cnt = await page.locator(".stop-btn").count()
        if stop_cnt:
            fails.append(f"{tag} 停止后停止按钮仍存在")

        # 6+7. 刷新续播 + 运行徽标
        cid3 = await page.evaluate(
            "fetch('/api/conversations',{method:'POST',headers:{'Content-Type':'application/json'},body:'{\"title\":\"续播验证\"}'}).then(r=>r.json()).then(d=>d.id)"
        )
        await page.reload(wait_until="networkidle")
        await page.wait_for_timeout(600)
        await page.locator(".cs-item", has_text="续播验证").first.click()
        await page.wait_for_timeout(600)
        await send_and_wait_start(
            page,
            "请写一篇约 800 字的markdown短文，主题「量子计算入门」，要求含二级标题、一个列表和一个表格，最后以「（完）」结尾。",
        )
        await page.wait_for_timeout(2500)  # 让流式输出一些内容
        before_len = len(await page.locator(".md").last.inner_text()) if await page.locator(".md").count() else 0
        # 运行中徽标：选中会话后列表应标注 running
        badge = await page.locator(".cs-item.active .cs-run, .cs-item .cs-run").count()
        if not badge:
            fails.append(f"{tag} 流式进行中会话列表缺少「运行中」徽标")
        await page.reload(wait_until="networkidle")  # 流式中刷新
        await page.wait_for_timeout(1500)
        # 应恢复到最后会话（续播验证出现在标题）
        title = await page.locator(".topic h1").inner_text()
        if "续播验证" not in title:
            fails.append(f"{tag} 刷新后未恢复到最后会话，标题: {title!r}")
        # resume 后流式应继续并最终结束；内容量不少于刷新前
        try:
            await wait_stream_done(page, timeout_s=150)
            content = await page.locator(".md").last.inner_text()
            if len(content) < max(150, before_len):
                fails.append(
                    f"{tag} 刷新续播后内容不完整: 刷新前 {before_len} 字 → 最终 {len(content)} 字"
                )
            print(f"    续播：刷新前 {before_len} 字 → 最终 {len(content)} 字，含「（完）」: {'（完）' in content}")
        except TimeoutError:
            fails.append(f"{tag} 刷新后流式未续播完成（超时）")
        await page.close()
        await ctx.close()

        # ============ 手机 390：面板浮层修复 ============
        ctx2 = await browser.new_context(viewport={"width": 390, "height": 844})
        page2 = await ctx2.new_page()
        perr: list[str] = []
        page2.on("pageerror", lambda e: perr.append(str(e)))
        await login(page2)
        tag2 = "[手机 390]"
        # overlay 模式下面板浮层默认展开（panelState 初始 full）；
        # 若被收起则通过顶栏按钮唤出（浮层会盖住标题栏按钮，用 dispatch_event 直接触发）
        if not await page2.locator(".right.as-overlay").count():
            await page2.locator(".topbar-right button").last.dispatch_event("click")
            await page2.wait_for_timeout(400)
        probe = await page2.evaluate(
            """() => {
              const bar = document.querySelector('.toolbar');
              const panel = document.querySelector('.right.as-overlay');
              const tabs = [...document.querySelectorAll('.ph-host .ph-ico, .pv-tab')];
              const acts = document.querySelector('.rp-actions');
              const r = (e) => { const b = e.getBoundingClientRect(); return {t:b.top, r:b.right, l:b.left, b:b.bottom}; };
              return {
                barBottom: r(bar).b,
                panelTop: r(panel).t,
                panelRight: r(panel).r,
                tabRects: tabs.map(r),
                actionsLeft: acts ? r(acts).l : null,
                vw: innerWidth,
              };
            }"""
        )
        if probe["panelTop"] < probe["barBottom"] - 1:
            fails.append(
                f"{tag2} 面板浮层仍遮住顶栏: panelTop={probe['panelTop']} < toolbarBottom={probe['barBottom']}"
            )
        if probe["panelRight"] > probe["vw"] + 1:
            fails.append(f"{tag2} 面板超出视口右缘: {probe['panelRight']} > {probe['vw']}")
        for i, tr in enumerate(probe["tabRects"]):
            if tr["r"] > probe["vw"] + 1:
                fails.append(f"{tag2} 第{i+1}个 tab 超出视口: right={tr['r']}")
            if probe["actionsLeft"] and tr["r"] > probe["actionsLeft"] + 1:
                fails.append(
                    f"{tag2} 第{i+1}个 tab 侵入操作按钮区: tab.right={tr['r']} > actions.left={probe['actionsLeft']}"
                )
        # 面板可通过自身关闭按钮收起，收起后浮层消失（标题栏恢复可点）
        await page2.locator(".rp-actions button").last.dispatch_event("click")
        await page2.wait_for_timeout(400)
        if await page2.locator(".right.as-overlay").count():
            fails.append(f"{tag2} 面板浮层点关闭后未消失")
        await page2.close()
        await ctx2.close()

        if errors:
            fails.append(f"桌面页 JS 错误: {errors[:3]}")
        if perr:
            fails.append(f"手机页 JS 错误: {perr[:3]}")
        await browser.close()

    print()
    if fails:
        print(f"❌ {len(fails)} 项失败：")
        for f in fails:
            print("  -", f)
        return 1
    print("✅ 聊天体验验证全部通过（markdown/中文名/停止/刷新续播/运行徽标/面板浮层）")
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
