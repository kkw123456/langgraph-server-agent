"""数据可视化技能：把结构化数据渲染成图表图片（柱状图/折线图/饼图）。

生成的图片保存到工作目录 tmp/ 下，前端会把消息中的相对路径
![...](tmp/xxx.png) 映射为文件流接口直接回显。
"""
import json
import os
import time

import matplotlib
matplotlib.use("Agg")  # 无 GUI 环境纯出图
import matplotlib.pyplot as plt

from langchain_core.tools import tool

import workspace


def _safe_path(path: str) -> str:
    root = workspace.current_root()
    full = os.path.normpath(os.path.join(root, path))
    if full != root and not full.startswith(root + os.sep):
        raise ValueError("路径越界")
    return full


def _chart_path() -> str:
    d = _safe_path("tmp")
    os.makedirs(d, exist_ok=True)
    return os.path.join(d, f"chart_{int(time.time() * 1000) % 100000000}.png")


def _setup_font() -> None:
    """尽量启用中文字体（服务器无中文字体时保留英文回退，不报错）。"""
    for f in ("Noto Sans CJK SC", "WenQuanYi Zen Hei", "SimHei", "Microsoft YaHei"):
        plt.rcParams["font.sans-serif"].insert(0, f) if f not in plt.rcParams["font.sans-serif"] else None
    plt.rcParams["axes.unicode_minus"] = False


@tool
def plot_chart(data_json: str, chart_type: str = "bar", title: str = "", x_label: str = "", y_label: str = "") -> str:
    """生成图表图片并保存到工作目录 tmp/ 下，返回可回显的相对路径。

    Args:
        data_json: 图表数据，JSON 对象 {"类别A": 12, "类别B": 35}；饼图同样用该结构。
        chart_type: 图表类型：bar（柱状图）/ line（折线图）/ pie（饼图）。
        title: 图表标题（可为空）。
        x_label: X 轴标签（可为空）。
        y_label: Y 轴标签（可为空）。
    """
    try:
        data = json.loads(data_json)
        if not isinstance(data, dict) or not data:
            return "数据格式错误：data_json 需为非空的 JSON 对象，如 {\"一月\": 12}"
        labels = [str(k) for k in data.keys()]
        values = [float(v) for v in data.values()]
        _setup_font()
        fig, ax = plt.subplots(figsize=(7, 4.2), dpi=130)
        color = "#18a058"
        if chart_type == "bar":
            bars = ax.bar(labels, values, color=color, alpha=.88)
            for b, v in zip(bars, values):
                ax.text(b.get_x() + b.get_width() / 2, v, f"{v:g}", ha="center", va="bottom", fontsize=9)
        elif chart_type == "line":
            ax.plot(labels, values, marker="o", color=color, linewidth=2)
            ax.grid(axis="y", alpha=.3)
        elif chart_type == "pie":
            ax.pie(values, labels=labels, autopct="%1.1f%%", startangle=90,
                   colors=plt.cm.Greens([.35, .5, .65, .8, .9, .95, .75, .6][:len(values)] or [.5]))
        else:
            plt.close(fig)
            return f"不支持的图表类型: {chart_type}（可选 bar/line/pie）"
        if title:
            ax.set_title(title, fontsize=13)
        if chart_type != "pie":
            ax.set_xlabel(x_label or "")
            ax.set_ylabel(y_label or "")
            plt.xticks(rotation=20 if max(len(str(l)) for l in labels) > 6 else 0)
        plt.tight_layout()
        out = _chart_path()
        fig.savefig(out)
        plt.close(fig)
        rel = os.path.relpath(out, workspace.current_root()).replace(os.sep, "/")
        return f"图表已生成: {rel}\n在回复正文中引用: ![图表]({rel})"
    except Exception as e:
        return f"生成图表失败: {e}"


def get_skill():
    from skills.base import Skill
    return Skill(
        id="viz",
        name="数据可视化",
        category="数据",
        description="把结构化数据渲染为柱状图、折线图、饼图等图表图片，图片直接在聊天中回显并可下载。",
        tools=[plot_chart],
        system_prompt=(
            "需要图表时调用 plot_chart 生成 PNG 到工作目录 tmp/ 下；"
            "在回复正文中用 Markdown 图片语法引用返回的相对路径（如 ![图表](tmp/chart_x.png)），"
            "前端会直接渲染该图片。"
        ),
    )
