"""图像处理技能：格式转换/缩放/旋转（Pillow）与 OCR 文字识别（pytesseract，可选）。"""
import os
import time

from langchain_core.tools import tool

import workspace

_FMT = {"jpg": "JPEG", "jpeg": "JPEG", "png": "PNG", "webp": "WEBP", "bmp": "BMP", "gif": "GIF", "tiff": "TIFF"}


def _safe_path(path: str) -> str:
    root = workspace.current_root()
    full = os.path.normpath(os.path.join(root, path))
    if full != root and not full.startswith(root + os.sep):
        raise ValueError("路径越界")
    return full


def _out_path(ext: str) -> str:
    d = _safe_path("images")
    os.makedirs(d, exist_ok=True)
    return os.path.join(d, f"img_{int(time.time() * 1000) % 100000000}.{ext}")


@tool
def convert_image(path: str, target_format: str = "png", max_width: int = 0, rotate: int = 0) -> str:
    """转换/调整工作目录下的图片：格式转换、等比缩放、旋转。返回新文件路径。

    Args:
        path: 源图片相对路径。
        target_format: 目标格式：png/jpg/webp/bmp/gif/tiff。
        max_width: 可选，最大宽度像素（等比缩小，0 表示不缩放）。
        rotate: 可选，逆时针旋转角度（90/180/270，0 表示不旋转）。
    """
    try:
        from PIL import Image
    except ImportError:
        return "图像依赖未安装（Pillow）"
    fmt = _FMT.get((target_format or "png").lower())
    if not fmt:
        return f"不支持的目标格式: {target_format}"
    full = _safe_path(path)
    if not os.path.isfile(full):
        return f"文件不存在: {path}"
    try:
        img = Image.open(full)
        if fmt == "JPEG" and img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        if max_width and img.width > max_width > 0:
            h = round(img.height * max_width / img.width)
            img = img.resize((max_width, h))
        if rotate:
            img = img.rotate(rotate, expand=True)
        out = _out_path(target_format.lower())
        img.save(out)
        rel = os.path.relpath(out, workspace.current_root()).replace(os.sep, "/")
        return f"图片已处理: {rel}（{img.width}x{img.height}，可在右侧文件面板预览）"
    except Exception as e:
        return f"图片处理失败: {e}"


@tool
def ocr_image(path: str) -> str:
    """识别工作目录下图片中的文字（OCR，中英文）。需要服务器安装 tesseract-ocr 引擎。"""
    try:
        import pytesseract
        from PIL import Image
    except ImportError:
        return "OCR 依赖未安装（pytesseract/Pillow），请在服务器执行: pip install pytesseract pillow 并安装 tesseract-ocr"
    full = _safe_path(path)
    if not os.path.isfile(full):
        return f"文件不存在: {path}"
    try:
        text = pytesseract.image_to_string(Image.open(full), lang="chi_sim+eng")
    except pytesseract.TesseractNotFoundError:
        return "服务器未安装 tesseract-ocr 引擎（apt install tesseract-ocr tesseract-ocr-chi-sim）"
    except Exception as e:
        return f"OCR 失败: {e}"
    text = (text or "").strip()
    if not text:
        return "未识别到文字"
    return text[:4000]


def get_skill():
    from skills.base import Skill
    return Skill(
        id="image",
        name="图像处理",
        category="图像",
        description="图片格式转换（png/jpg/webp 等）、等比缩放、旋转，以及 OCR 文字识别（中英文）。",
        tools=[convert_image, ocr_image],
        system_prompt="图片处理用 convert_image；用户要求提取图片文字时用 ocr_image。",
    )
