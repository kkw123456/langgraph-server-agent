"""多分辨率自适应验证：逐个视口检查布局是否溢出、关键控件是否可见可用。

判定标准（每个视口都要满足）：
  1. 页面无横向滚动（documentElement.scrollWidth <= clientWidth + 2）
  2. 顶层容器不溢出视口右边界
  3. 断点结构符合预期：<768px 出现底部 Tab 栏 + 顶栏汉堡按钮；
     >=768px 出现左侧图标条、隐藏汉堡按钮
  4. 顶栏与内容区未重叠（内容区顶边 = 顶栏底边）
  5. 逐个导航到各功能页，无控制台错误
"""
import asyncio
import json
import sys

from playwright.async_api import async_playwright

BASE = "http://127.0.0.1:8000"
USER, PWD = "admin", "admin@"

VIEWPORTS = [
    (2560, 1440, "超宽屏 2K"),
    (1920, 1080, "桌面 1080p"),
    (1600, 900, "宽屏笔记本"),
    (1440, 900, "笔记本"),
    (1280, 800, "小笔记本"),
    (1180, 820, "紧凑笔记本"),
    (1024, 768, "平板横屏"),
    (900, 1000, "平板过渡"),
    (820, 1180, "平板竖屏"),
    (768, 1024, "平板临界"),
    (600, 900, "窄屏"),
    (480, 800, "手机"),
    (390, 844, "iPhone 竖屏"),
    (360, 640, "小手机"),
    (320, 568, "极小屏"),
]

PAGES = ["/", "/projects", "/experts", "/automation", "/library", "/inspiration", "/settings"]


async def layout_probe(page) -> dict:
    """读取布局关键量，用于判定是否溢出/重叠/断点是否正确。"""
    return await page.evaluate(
        """() => {
        const de = document.documentElement;
        const q = (s) => document.querySelector(s);
        const r = (s) => { const e = q(s); if (!e) return null;
            const b = e.getBoundingClientRect();
            return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height), right: Math.round(b.right), bottom: Math.round(b.bottom) }; };
        const vis = (s) => { const e = q(s); if (!e) return false;
            const st = getComputedStyle(e);
            return st.display !== 'none' && st.visibility !== 'hidden' && e.getBoundingClientRect().width > 0; };
        const shell = q('.app-shell');
        const cols = shell ? getComputedStyle(shell).gridTemplateColumns : '';
        const aside = [...document.querySelectorAll('aside')].map(e => {
            const st = getComputedStyle(e); const b = e.getBoundingClientRect();
            return { cls: e.className, pos: st.position, w: Math.round(b.width), right: Math.round(b.right), display: st.display };
        });
        return {
            scrollW: de.scrollWidth, clientW: de.clientWidth,
            bodyScrollW: document.body.scrollWidth,
            toolbar: r('.toolbar'), rail: r('.rail'), content: r('.content'),
            sidebar: r('.sidebar'), side: q('.sidebar') ? getComputedStyle(q('.sidebar')).position : null,
            right: r('.right'),
            hasBurger: vis('.tb-burger'),
            hasRailVertical: (() => { const e = q('.rail'); if (!e) return false;
                const st = getComputedStyle(e); return st.position === 'static' || st.position === 'relative'; })(),
            hasRailBottom: (() => { const e = q('.rail'); if (!e) return false;
                const st = getComputedStyle(e); return st.position === 'fixed' && st.bottom === '0px'; })(),
            hasSearch: vis('.tb-search'),
            hasBrandText: vis('.tb-brand b'),
            hasStatus: vis('.status'),
            cols, asideList: aside,
            overflowEls: (() => {
                /* 只统计「真正可见地溢出」的元素：
                   若某元素自身或任一祖先是滚动容器（overflow-x 为 auto/scroll/hidden），
                   则它超出视口只是被裁剪或可横向滚动，并不构成页面级溢出。 */
                const clipped = (el) => {
                    let p = el;
                    while (p && p !== document.body) {
                        const ox = getComputedStyle(p).overflowX;
                        if (ox === 'auto' || ox === 'scroll' || ox === 'hidden') return true;
                        p = p.parentElement;
                    }
                    return false;
                };
                const out = [];
                for (const el of document.querySelectorAll('body *')) {
                    const b = el.getBoundingClientRect();
                    if (b.width === 0 || b.height === 0) continue;
                    if (getComputedStyle(el).position === 'fixed') continue;
                    if (b.right > de.clientWidth + 2 && !clipped(el)) {
                        out.push(el.className && typeof el.className === 'string' ? el.className.slice(0, 60) : el.tagName);
                        if (out.length > 5) break;
                    }
                }
                return out;
            })(),
        };
    }"""
    )


async def main() -> int:
    errors: list[str] = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        for w, h, label in VIEWPORTS:
            ctx = await browser.new_context(viewport={"width": w, "height": h})
            page = await ctx.new_page()
            console: list[str] = []
            page.on("console", lambda m: console.append(f"{m.type}: {m.text}") if m.type == "error" else None)
            page.on("pageerror", lambda e: console.append(f"pageerror: {e}"))

            await page.goto(f"{BASE}/login", wait_until="networkidle")
            await page.fill('input[autocomplete="username"]', USER)
            await page.fill('input[autocomplete="current-password"]', PWD)
            await page.click('button[type="submit"]')
            await page.wait_for_url(f"{BASE}/", timeout=15000)
            await page.wait_for_timeout(700)

            info = await layout_probe(page)
            tag = f"[{w}x{h} {label}]"
            problems: list[str] = []

            # 1. 无横向滚动
            if info["scrollW"] > info["clientW"] + 2:
                problems.append(f"横向溢出 scrollW={info['scrollW']} > clientW={info['clientW']}")
            if info["overflowEls"]:
                problems.append(f"元素超出右边界: {info['overflowEls']}")

            # 2. 断点结构
            expect_mobile = w < 768
            if expect_mobile:
                if not info["hasRailBottom"]:
                    problems.append("窄屏应出现底部 Tab 栏，但 .rail 不是 fixed bottom:0")
                if not info["hasBurger"]:
                    problems.append("窄屏应显示顶栏汉堡按钮")
            else:
                if info["hasRailBottom"]:
                    problems.append("桌面端不应出现底部 Tab 栏")
                if info["hasBurger"]:
                    problems.append("桌面端不应显示汉堡按钮")
                if not info["hasRailVertical"]:
                    problems.append("桌面端左侧图标条位置异常")

            # 3. 顶栏与内容区不重叠
            if info["toolbar"] and info["content"]:
                if abs(info["content"]["y"] - info["toolbar"]["bottom"]) > 2:
                    problems.append(
                        f"顶栏与内容区错位 toolbar.bottom={info['toolbar']['bottom']} content.y={info['content']['y']}"
                    )

            # 4. 逐页巡检
            for path in PAGES:
                await page.goto(f"{BASE}{path}", wait_until="networkidle")
                await page.wait_for_timeout(350)
                p = await layout_probe(page)
                if p["scrollW"] > p["clientW"] + 2:
                    problems.append(f"{path} 横向溢出 {p['scrollW']}>{p['clientW']}")
                if p["overflowEls"]:
                    problems.append(f"{path} 元素越界 {p['overflowEls']}")
                # 页面主体必须存在（不能白屏）
                body = await page.evaluate("document.querySelector('.app-root') ? document.querySelector('.app-root').offsetHeight > 40 : false")
                if not body:
                    problems.append(f"{path} 渲染高度异常")

            errs = [c for c in console if "favicon" not in c]
            if errs:
                problems.append(f"控制台错误 {errs[:2]}")

            if problems:
                errors.extend(f"{tag} {p}" for p in problems)
                print(f"✗ {tag}")
                for p in problems:
                    print(f"    - {p}")
            else:
                extra = f"cols={info['cols']}"
                if info["hasRailBottom"]:
                    extra += " 底部Tab=✓"
                if info["hasBurger"]:
                    extra += " 汉堡=✓"
                if not info["hasSearch"]:
                    extra += " 搜索已收起"
                if not info["hasStatus"]:
                    extra += " 状态已收起"
                print(f"✓ {tag}  {extra}")
            await ctx.close()
        await browser.close()

    print()
    if errors:
        print(f"共 {len(errors)} 项问题")
        return 1
    print("全部视口通过：无横向溢出、无元素越界、断点结构正确、控制台无错误")
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
