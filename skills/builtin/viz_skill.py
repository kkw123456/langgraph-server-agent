"""数据可视化技能：把结构化数据渲染成图表图片（柱状图/折线图/饼图/散点图）。

生成的图片保存到工作目录 tmp/ 下，前端会把消息中的相对路径
![...](tmp/xxx.png) 映射为文件流接口直接回显。

设计要点（为什么用 sidecar JSON）：
  update_chart 只拿到一个图片路径，但重新出图需要原始数据与样式参数。
  因此每次 plot_chart 都会在旁边写一份同名 .json，记录数据与参数；
  update_chart 读它、合并局部修改、重画。这样「改图表」不必让模型
  把数据重述一遍（模型很容易把数据抄错或凭记忆改动数值）。
"""
import json
import os
import re
import shutil
import time

import matplotlib
matplotlib.use("Agg")  # 无 GUI 环境纯出图
import matplotlib.pyplot as plt

from langchain_core.tools import tool

import workspace

CHART_TYPES = ("bar", "line", "pie", "scatter")


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


def _sidecar_path(png_path: str) -> str:
    return os.path.splitext(png_path)[0] + ".json"


def _rel(full: str) -> str:
    return os.path.relpath(full, workspace.current_root()).replace(os.sep, "/")


def _setup_font() -> None:
    """尽量启用中文字体（服务器无中文字体时保留英文回退，不报错）。"""
    for f in ("Noto Sans CJK SC", "WenQuanYi Zen Hei", "SimHei", "Microsoft YaHei"):
        plt.rcParams["font.sans-serif"].insert(0, f) if f not in plt.rcParams["font.sans-serif"] else None
    plt.rcParams["axes.unicode_minus"] = False


def _normalize_types(chart_type: str) -> str:
    """归一化别名，模型经常把折线写成 line_chart / 饼图写成 pie_chart。"""
    ct = (chart_type or "bar").strip().lower().replace("-", "_")
    alias = {
        "bar_chart": "bar", "column": "bar", "histogram": "bar",
        "line_chart": "line", "curve": "line",
        "pie_chart": "pie", "donut": "pie",
        "scatter_chart": "scatter", "point": "scatter", "points": "scatter",
    }
    return alias.get(ct, ct)


def _parse_data(data_json: str) -> tuple[list[str], list[float]]:
    """解析数据。对象 -> 键值对；二维数组 -> 首列类别、末列数值（模型常给这种）。"""
    data = json.loads(data_json)
    if isinstance(data, dict):
        if not data:
            raise ValueError("数据为空")
        return [str(k) for k in data.keys()], [float(v) for v in data.values()]
    if isinstance(data, list):
        if not data:
            raise ValueError("数据为空")
        # 字面量 [1,2,3]：按下标当类别
        if not isinstance(data[0], (list, tuple)):
            return [str(i + 1) for i in range(len(data))], [float(v) for v in data]
        labels, values = [], []
        for row in data:
            if len(row) < 2:
                raise ValueError("二维数组每行至少需要两列（类别, 数值）")
            labels.append(str(row[0]))
            values.append(float(row[-1]))
        if not labels:
            raise ValueError("数据为空")
        return labels, values
    raise ValueError('数据需为 JSON 对象 {"类别": 数值} 或二维数组 [["类别", 数值]]')


def _draw(labels: list[str], values: list[float], chart_type: str,
          title: str, x_label: str, y_label: str, out: str) -> None:
    """按参数出图并落盘（plot_chart 与 update_chart 共用同一套渲染逻辑）。"""
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
    elif chart_type == "scatter":
        ax.scatter(labels, values, color=color, s=48, alpha=.85, zorder=3)
        ax.grid(axis="y", alpha=.3)
    else:
        plt.close(fig)
        raise ValueError(f"不支持的图表类型: {chart_type}（可选 {'/'.join(CHART_TYPES)}）")
    if title:
        ax.set_title(title, fontsize=13)
    if chart_type != "pie":
        ax.set_xlabel(x_label or "")
        ax.set_ylabel(y_label or "")
        plt.xticks(rotation=20 if max(len(str(l)) for l in labels) > 6 else 0)
    plt.tight_layout()
    fig.savefig(out)
    plt.close(fig)


def _write_sidecar(png_path: str, labels: list[str], values: list[float],
                   chart_type: str, title: str, x_label: str, y_label: str) -> None:
    with open(_sidecar_path(png_path), "w", encoding="utf-8") as f:
        json.dump({
            "labels": labels, "values": values, "chart_type": chart_type,
            "title": title, "x_label": x_label, "y_label": y_label,
        }, f, ensure_ascii=False, indent=2)


def _read_sidecar(png_path: str) -> dict | None:
    sc = _sidecar_path(png_path)
    if not os.path.isfile(sc):
        return None
    try:
        with open(sc, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


@tool
def plot_chart(data_json: str, chart_type: str = "bar", title: str = "",
               x_label: str = "", y_label: str = "", path: str = "") -> str:
    """生成图表图片并保存到工作目录 tmp/ 下，返回可回显的相对路径。

    Args:
        data_json: 图表数据，JSON 对象 {"类别A": 12, "类别B": 35}；也接受二维数组 [["类别A", 12], ["类别B", 35]]。
        chart_type: 图表类型：bar（柱状图）/ line（折线图）/ pie（饼图）/ scatter（散点图）。
        title: 图表标题（可为空）。
        x_label: X 轴标签（可为空）。
        y_label: Y 轴标签（可为空）。
        path: 可选，指定输出相对路径（如 tmp/sales.png）；不传则自动命名。
              指定后再次生成同一 path 即覆盖旧图，便于「同一张图反复迭代」。
    """
    try:
        labels, values = _parse_data(data_json)
        ct = _normalize_types(chart_type)
        if ct not in CHART_TYPES:
            return f"不支持的图表类型: {chart_type}（可选 {'/'.join(CHART_TYPES)}）"
        if path:
            out = _safe_path(path)
            if not out.lower().endswith(".png"):
                out += ".png"
            os.makedirs(os.path.dirname(out), exist_ok=True)
        else:
            out = _chart_path()
        _draw(labels, values, ct, title, x_label, y_label, out)
        _write_sidecar(out, labels, values, ct, title, x_label, y_label)
        rel = _rel(out)
        return f"图表已生成: {rel}\n在回复正文中引用: ![图表]({rel})"
    except Exception as e:
        return f"生成图表失败: {e}"


@tool
def update_chart(path: str, data_json: str = "", chart_type: str = "",
                 title: str = "", x_label: str = "", y_label: str = "",
                 save_as: str = "") -> str:
    """修改已有图表：换类型、改数据、改标题/轴标签。只传需要改的参数，其余保留原样。

    修改依据是生成该图时自动落盘的同名 .json 配置，无需重述原始数据。

    Args:
        path: 原图表相对路径（plot_chart 返回的那个，如 tmp/chart_123.png）。
        data_json: 可选，新的数据（结构同 plot_chart）；整体替换，不合并。
        chart_type: 可选，新的图表类型 bar/line/pie/scatter。
        title: 可选，新的标题；传空字符串表示清空标题。
        x_label: 可选，新的 X 轴标签。
        y_label: 可选，新的 Y 轴标签。
        save_as: 可选，另存为新的相对路径；不传则原地覆盖原图。
    """
    try:
        full = _safe_path(path)
        if not os.path.isfile(full):
            return f"原图表不存在: {path}（请先用 plot_chart 生成，或核对路径）"
        cfg = _read_sidecar(full)
        if cfg is None:
            return (f"找不到 {path} 的图表配置（{_sidecar_path(path)} 缺失或损坏）。"
                    "该图可能不是本工具生成的，请用 plot_chart 重新生成后再修改。")
        labels = cfg.get("labels") or []
        values = cfg.get("values") or []
        ct = cfg.get("chart_type", "bar")
        t = cfg.get("title", "")
        xl = cfg.get("x_label", "")
        yl = cfg.get("y_label", "")

        # 局部合并：只覆盖「显式传入」的字段
        if data_json.strip():
            labels, values = _parse_data(data_json)
        if chart_type.strip():
            ct = _normalize_types(chart_type)
            if ct not in CHART_TYPES:
                return f"不支持的图表类型: {chart_type}（可选 {'/'.join(CHART_TYPES)}）"
        if title:
            t = title
        if x_label:
            xl = x_label
        if y_label:
            yl = y_label
        if not labels or not values:
            return "图表数据为空，无法重绘：请用 data_json 传入新的数据"

        out = _safe_path(save_as) if save_as.strip() else full
        if save_as.strip() and not out.lower().endswith(".png"):
            out += ".png"
        os.makedirs(os.path.dirname(out), exist_ok=True)
        _draw(labels, values, ct, t, xl, yl, out)
        _write_sidecar(out, labels, values, ct, t, xl, yl)
        rel = _rel(out)
        if out == full:
            return f"图表已更新: {rel}\n在回复正文中引用: ![图表]({rel})"
        return f"图表已另存为: {rel}\n在回复正文中引用: ![图表]({rel})"
    except Exception as e:
        return f"修改图表失败: {e}"


@tool
def export_chart(path: str, target_format: str = "png", target_width: int = 0) -> str:
    """把图表导出为其他图片格式（png/jpg/webp/pdf/svg），可选缩放宽度。

    栅格格式走 Pillow 转换；pdf/svg 由 matplotlib 依据 sidecar 配置重新渲染（矢量，可放大不失真）。

    Args:
        path: 原图表相对路径（如 tmp/chart_123.png），需携带同名 .json 配置。
        target_format: 目标格式：png/jpg/jpeg/webp/pdf/svg。
        target_width: 可选，目标宽度像素（等比缩放，0 表示原始尺寸）；对 pdf/svg 无效。
    """
    try:
        fmt = (target_format or "png").strip().lower().lstrip(".")
        fmt = "jpg" if fmt == "jpeg" else fmt
        if fmt not in ("png", "jpg", "webp", "pdf", "svg"):
            return f"不支持的导出格式: {target_format}（可选 png/jpg/webp/pdf/svg）"
        full = _safe_path(path)
        if not os.path.isfile(full):
            return f"原图表不存在: {path}"

        base = os.path.splitext(full)[0]
        out = f"{base}.{fmt}"
        cfg = _read_sidecar(full)

        if fmt in ("pdf", "svg"):
            if cfg is None:
                return f"导出 {fmt} 需要图表配置（{_sidecar_path(path)}），该文件缺失或不是本工具生成的图表"
            _setup_font()
            fig, ax = plt.subplots(figsize=(7, 4.2))
            labels = cfg.get("labels") or []
            values = [float(v) for v in (cfg.get("values") or [])]
            ct = cfg.get("chart_type", "bar")
            if ct == "bar":
                ax.bar(labels, values, color="#18a058", alpha=.88)
            elif ct == "line":
                ax.plot(labels, values, marker="o", color="#18a058", linewidth=2)
            elif ct == "scatter":
                ax.scatter(labels, values, color="#18a058", s=48, alpha=.85)
            elif ct == "pie":
                ax.pie(values, labels=labels, autopct="%1.1f%%", startangle=90,
                       colors=plt.cm.Greens([.35, .5, .65, .8, .9][:len(values)] or [.5]))
            if cfg.get("title"):
                ax.set_title(cfg["title"], fontsize=13)
            if ct != "pie":
                ax.set_xlabel(cfg.get("x_label") or "")
                ax.set_ylabel(cfg.get("y_label") or "")
            plt.tight_layout()
            fig.savefig(out)
            plt.close(fig)
        else:
            try:
                from PIL import Image
            except ImportError:
                return "导出该格式依赖 Pillow，请在服务器安装: pip install pillow"
            img = Image.open(full)
            if fmt == "jpg":
                img = img.convert("RGB")
            if target_width and img.width > target_width > 0:
                img = img.resize((target_width, round(img.height * target_width / img.width)))
            img.save(out)
            img.close()

        rel = _rel(out)
        size = os.path.getsize(out)
        return f"图表已导出: {rel}（{fmt}，{size} 字节）\n在回复正文中引用: ![图表]({rel})"
    except Exception as e:
        return f"导出图表失败: {e}"


def get_skill():
    from skills.base import Skill
    return Skill(
        id="viz",
        name="数据可视化",
        category="数据",
        description="把结构化数据渲染为柱状图、折线图、饼图、散点图等图表图片，支持在原图上改数据/换类型，以及导出 png/jpg/webp/pdf/svg。",
        tools=[plot_chart, update_chart, export_chart],
        system_prompt=(
            "需要图表时调用 plot_chart 生成 PNG 到工作目录 tmp/ 下；"
            "在回复正文中用 Markdown 图片语法引用返回的相对路径（如 ![图表](tmp/chart_x.png)），"
            "前端会直接渲染该图片。"
            "用户要求「改一下这张图 / 换个图表类型 / 调整数据」时，用 update_chart 传原图路径，"
            "只传要改的参数即可，不要重新 plot_chart 生成一张新图（那样会丢掉迭代关系）。"
            "用户要别的格式（jpg/webp/pdf/svg）时用 export_chart。"
        ),
    )
