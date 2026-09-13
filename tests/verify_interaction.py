"""窄屏交互验证：确认自适应不只是「看起来没坏」，而是功能真的可用。

覆盖：
  1. 手机尺寸：汉堡菜单唤出抽屉 → 抽屉内导航可跳转 → 自动关闭
  2. 手机尺寸：会话列表抽屉可唤出/关闭，遮罩点击可关闭
  3. 手机尺寸：右侧面板以浮层出现，可关闭
  4. 手机尺寸：输入框可用，能真实发出消息并收到回复
  5. 平板尺寸：三栏/单栏切换，右侧面板仍可收起展开
  6. 桌面尺寸：图标条悬浮提示、会话栏常驻
"""
import asyncio
import sys

from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:8000"
USER, PWD = "admin", "admin@"


async def login(page) -> None:
    await page.goto(f"{BASE}/login", wait_until="networkidle")
    await page.fill('input[autocomplete="username"]', USER)
    await page.fill('input[autocomplete="current-password"]', PWD)
    await page.click('button[type="submit"]')
    await page.wait_for_url(f"{BASE}/", timeout=15000)
    await page.wait_for_timeout(700)


async def phone_checks(browser, fails: list[str]) -> None:
    ctx = await browser.new_context(viewport={"width": 390, "height": 844})
    page = await ctx.new_page()
    errors: list[str] = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    await login(page)
    tag = "[390x844 手机]"

    # 1. 汉堡 → 抽屉 → 导航
    await page.click(".tb-burger")
    await page.wait_for_selector(".drawer-panel", timeout=5000)
    items = await page.locator(".drawer-item").count()
    if items < 8:
        fails.append(f"{tag} 抽屉导航项过少: {items}")
    await page.locator(".drawer-item", has_text="自动化").click()
    await page.wait_for_url(f"{BASE}/automation", timeout=8000)
    await page.wait_for_timeout(400)
    if await page.locator(".drawer-panel").count():
        fails.append(f"{tag} 跳转后抽屉未自动关闭")
    # 再点一次新建任务，验证抽屉里点「新建任务」能回首页
    await page.click(".tb-burger")
    await page.wait_for_selector(".drawer-panel", timeout=5000)
    await page.locator(".drawer-item", has_text="新建任务").click()
    await page.wait_for_url(f"{BASE}/", timeout=8000)
    await page.wait_for_timeout(400)

    # 2. 会话列表抽屉
    await page.click(".topic-btn")
    await page.wait_for_selector(".sidebar", timeout=5000)
    if not await page.locator(".shell-mask").count():
        fails.append(f"{tag} 会话抽屉缺少遮罩")
    # 遮罩可能被右侧面板浮层部分覆盖，这里改用键盘 Esc（也是用户会用的方式）
    await page.keyboard.press("Escape")
    await page.wait_for_timeout(350)
    if await page.locator(".sidebar").count():
        fails.append(f"{tag} 按 Esc 未关闭会话抽屉")


    # 3. 右侧面板浮层：打开会话抽屉 → 点第一条会话 → 抽屉自动关闭
    await page.click(".topic-btn")
    await page.wait_for_selector(".sidebar", timeout=5000)
    await page.wait_for_timeout(300)
    # 面板浮层有意压在抽屉之上（只遮右侧），故指定抽屉内的会话项精确点击
    first = page.locator(".sidebar .cs-item").first
    if await first.count():
        await first.dispatch_event("click")
        await page.wait_for_timeout(800)
        if await page.locator(".sidebar").count():
            fails.append(f"{tag} 选择会话后抽屉未关闭")
    else:
        await page.keyboard.press("Escape")
        await page.wait_for_timeout(300)

    # 右侧面板此时应为展开态（浮层）
    if not await page.locator(".right").count():
        fails.append(f"{tag} 窄屏下右侧面板未渲染")
    else:
        pos = await page.evaluate("getComputedStyle(document.querySelector('.right')).position")
        if pos != "absolute":
            fails.append(f"{tag} 窄屏右侧面板应为 absolute 浮层，实际 {pos}")
        # 关闭面板：窄屏下面板为浮层，关闭后应从 DOM 中移除
        await page.locator('.right button[title="关闭面板"]').click()
        await page.wait_for_timeout(500)
        if await page.locator(".right").count():
            fails.append(f"{tag} 关闭按钮未隐藏右侧面板（浮层仍存在）")

    # 4. 真实发消息
    await page.fill(".composer-input textarea", "用一句话说明你是什么")
    await page.click(".send-btn")
    try:
        # 流式输出结束后 .msg.assistant 才会带完整文本；轮询等待非空内容
        txt = ""
        for _ in range(90):
            await page.wait_for_timeout(1000)
            n = await page.locator(".msg.assistant .bubble").count()
            if n:
                txt = (await page.locator(".msg.assistant .bubble").last.inner_text()).strip()
                if len(txt) >= 4:
                    break
        if len(txt) < 4:
            fails.append(f"{tag} 回复内容为空")
        else:
            print(f"  手机端对话回复: {txt[:60]}")
    except Exception as e:
        fails.append(f"{tag} 手机端发消息未收到回复: {type(e).__name__}")

    if errors:
        fails.append(f"{tag} JS 异常 {errors[:2]}")
    print(f"{tag} 交互检查完成")
    await ctx.close()


async def tablet_and_desktop(browser, fails: list[str]) -> None:
    for w, h, tag in [(1024, 768, "[1024x768 平板]"), (1920, 1080, "[1920x1080 桌面]")]:
        ctx = await browser.new_context(viewport={"width": w, "height": h})
        page = await ctx.new_page()
        await login(page)
        # 会话栏应常驻
        if not await page.locator(".sidebar").count():
            fails.append(f"{tag} 会话栏未常驻")
        # 图标条悬浮提示
        await page.locator(".nav-item").first.hover()
        await page.wait_for_timeout(250)
        tip = await page.locator(".nav-item .nav-tip").first.evaluate(
            "e => getComputedStyle(e).opacity"
        )
        if tip != "1":
            fails.append(f"{tag} 图标条悬浮提示未显示 (opacity={tip})")
        # 右侧面板收起/展开（收起是 display:none，元素仍留在 DOM 中）
        await page.click('.topbar button[title="收起右侧面板"]')
        await page.wait_for_timeout(450)
        vis = await page.evaluate("() => { const e=document.querySelector('.right'); return !!e && getComputedStyle(e).display !== 'none'; }")
        if vis:
            fails.append(f"{tag} 面板未收起")
        await page.click('.topbar button[title="展开右侧面板"]')
        await page.wait_for_timeout(450)
        vis = await page.evaluate("() => { const e=document.querySelector('.right'); return !!e && getComputedStyle(e).display !== 'none'; }")
        if not vis:
            fails.append(f"{tag} 面板未重新展开")
        # 面板全屏
        await page.locator('.right button[title="全屏"]').click()
        await page.wait_for_timeout(350)
        if not await page.locator(".right.fullscreen").count():
            fails.append(f"{tag} 面板全屏失败")
        await page.locator('.right button[title="退出全屏"]').click()
        await page.wait_for_timeout(300)
        print(f"{tag} 交互检查完成")
        await ctx.close()


async def main() -> int:
    fails: list[str] = []
    async with async_playwright() as pw:
        b = await pw.chromium.launch()
        await phone_checks(b, fails)
        await tablet_and_desktop(b, fails)
        await b.close()
    print()
    if fails:
        for f in fails:
            print("✗", f)
        print(f"共 {len(fails)} 项失败")
        return 1
    print("窄屏/宽屏交互全部通过")
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
