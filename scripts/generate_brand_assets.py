"""Generate Y-RAMP brand exports from the approved raster master.

The source artwork is never redrawn. The Y mark is extracted using a fixed crop
from the approved master so all exports retain the approved geometry.
"""

from pathlib import Path
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "public" / "branding"
MASTER = BRAND / "master" / "yramp-logo-approved.png"
MARK_MASTER = BRAND / "master" / "yramp-y-mark-approved.png"
HERO_GRAY = (20, 20, 20, 255)  # Website --hero-bg: hsl(0 0% 8%)
Y_CROP = (206, 124, 371, 739)
LANCZOS = Image.Resampling.LANCZOS


def trim(image: Image.Image, padding: int = 0) -> Image.Image:
    alpha = image.getchannel("A")
    bounds = alpha.getbbox()
    if not bounds:
        raise ValueError("Approved logo master contains no visible pixels")
    cropped = image.crop(bounds)
    if not padding:
        return cropped
    canvas = Image.new("RGBA", (cropped.width + 2 * padding, cropped.height + 2 * padding))
    canvas.alpha_composite(cropped, (padding, padding))
    return canvas


def contain(image: Image.Image, size: tuple[int, int], padding_ratio: float = 0.1) -> Image.Image:
    pad_x = round(size[0] * padding_ratio)
    pad_y = round(size[1] * padding_ratio)
    max_size = (size[0] - 2 * pad_x, size[1] - 2 * pad_y)
    scale = min(max_size[0] / image.width, max_size[1] / image.height)
    resized = image.resize((round(image.width * scale), round(image.height * scale)), LANCZOS)
    return resized


def place(image: Image.Image, size: tuple[int, int], background=None, padding_ratio: float = 0.1) -> Image.Image:
    canvas = Image.new("RGBA", size, background or (0, 0, 0, 0))
    resized = contain(image, size, padding_ratio)
    position = ((size[0] - resized.width) // 2, (size[1] - resized.height) // 2)
    canvas.alpha_composite(resized, position)
    return canvas


def save(image: Image.Image, directory: str, filename: str) -> None:
    target = BRAND / directory / filename
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, optimize=True)


def main() -> None:
    logo = trim(Image.open(MASTER).convert("RGBA"), padding=48)
    y_mark = trim(Image.open(MASTER).convert("RGBA").crop(Y_CROP), padding=24)
    MARK_MASTER.parent.mkdir(parents=True, exist_ok=True)
    y_mark.save(MARK_MASTER, optimize=True)

    for width in (320, 640, 1280, 1920, 2400):
        height = round(width * logo.height / logo.width)
        export = logo.resize((width, height), LANCZOS)
        save(export, "transparent", f"yramp-logo-{width}w.png")
        save(place(logo, (width, height), HERO_GRAY, 0.04), "hero-gray", f"yramp-logo-gray-{width}w.png")

    for size in (16, 32, 48, 64, 128, 180, 192, 256, 512, 1024):
        save(place(y_mark, (size, size), None, 0.1), "marks/transparent", f"yramp-y-{size}.png")
        save(place(y_mark, (size, size), HERO_GRAY, 0.1), "marks/hero-gray", f"yramp-y-gray-{size}.png")

    social_sizes = {
        "open-graph-1200x630": (1200, 630),
        "square-1080x1080": (1080, 1080),
        "portrait-1080x1350": (1080, 1350),
        "story-1080x1920": (1080, 1920),
        "landscape-1920x1080": (1920, 1080),
        "linkedin-cover-1584x396": (1584, 396),
        "x-cover-1500x500": (1500, 500),
    }
    for label, size in social_sizes.items():
        save(place(logo, size, HERO_GRAY, 0.12), "marketing", f"yramp-{label}.png")

    favicon = place(y_mark, (512, 512), None, 0.08)
    favicon.save(
        BRAND / "yramp-favicon.ico",
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
    )


if __name__ == "__main__":
    main()
