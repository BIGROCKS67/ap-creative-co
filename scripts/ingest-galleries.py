#!/usr/bin/env python3
"""Copy unique Dropbox work into public/media/gallery, resized for the site."""

from __future__ import annotations

import hashlib
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path("/Users/jackrockell/Desktop/GAMBIA - WEBSITE ")
SRC = ROOT / "ap-dropbox"
DEST = ROOT / "scalpxcapital/public/media/gallery"
MAX_EDGE = 1600
JPEG_QUALITY = 82

GROUPS: dict[str, list[str]] = {
    "print": [
        "Business Cards, loyality cards, gift cards and appointment cards",
        "Flyers, Leaflets & Stickers",
        "Signage",
        "Clothing",
        "Menus And Price Lists",
        "Banners",
        "Homeware & Accessories",
        "Vehicle Branding",
        "Logos",
    ],
    "photo": ["Extra b Roll"],
    "web": ["Websites"],
    "charity": ["Charity & Local"],
}


def file_hash(path: Path) -> str:
    h = hashlib.md5()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 16), b""):
            h.update(chunk)
    return h.hexdigest()


def save_web(src: Path, dest: Path) -> bool:
    try:
        im = Image.open(src)
        im = ImageOps.exif_transpose(im)
        im = im.convert("RGB")
        im.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        return True
    except Exception as exc:
        print(f"skip {src.name}: {exc}")
        return False


def ingest() -> None:
    if DEST.exists():
        for old in DEST.rglob("*"):
            if old.is_file():
                old.unlink()

    seen: set[str] = set()
    counts: dict[str, int] = {}

    for group, folders in GROUPS.items():
        n = 0
        for folder in folders:
            folder_path = SRC / folder
            if not folder_path.is_dir():
                print(f"missing {folder_path}")
                continue
            files = sorted(
                [
                    p
                    for p in folder_path.iterdir()
                    if p.is_file()
                    and p.name != ".DS_Store"
                    and p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
                ],
                key=lambda p: p.name,
            )
            for src in files:
                digest = file_hash(src)
                if digest in seen:
                    continue
                seen.add(digest)
                n += 1
                dest = DEST / group / f"{group}-{n:02d}.jpg"
                if save_web(src, dest):
                    print(f"{group}/{dest.name} <- {src.name}")
                else:
                    n -= 1
                    seen.discard(digest)
        counts[group] = n

    print("done", counts)


if __name__ == "__main__":
    ingest()
