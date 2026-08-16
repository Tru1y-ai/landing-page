#!/usr/bin/env python3
"""Reverse and crop the generated hero film, and pull a poster from its final frame.

The raw generation plays report -> paper storm -> single resume, and carries a
watermark in the top-left corner. This reverses it so it lands on the report, and
crops in past the watermark while holding 16:9.

    python3 scripts/prep-hero-video.py v1.mp4

Writes public/hero.mp4 and public/hero-poster.jpg.

Note: OpenCV's encoder gives us no bitrate control. This is fine for wiring the
hero up and looking at it; the shippable asset wants a two-pass VP9 + H.264 pair
from ffmpeg, per docs/hero-film-under-the-page.md.
"""

import os
import sys

import cv2

# 16:9 window inset far enough to clear the watermark in the top-left.
CROP_X, CROP_Y = 112, 108
CROP_W, CROP_H = 1728, 972

# Seconds dropped from the head *after* reversing. Frame-differencing the source
# puts 2.42s of near-static sheet at the reversed head, so anything less than that
# opens on a still frame and reads as a stalled image rather than a film. 2.3
# leaves a beat of stillness before the burst.
TRIM_HEAD_SECONDS = 2.3


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else "v1.mp4"
    out_dir = "public"
    out_video = os.path.join(out_dir, "hero.mp4")
    out_poster = os.path.join(out_dir, "hero-poster.jpg")

    cap = cv2.VideoCapture(src)
    if not cap.isOpened():
        sys.exit(f"could not open {src}")

    fps = cap.get(cv2.CAP_PROP_FPS)
    w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    if CROP_X + CROP_W > w or CROP_Y + CROP_H > h:
        sys.exit(f"crop {CROP_W}x{CROP_H}+{CROP_X}+{CROP_Y} does not fit in {w}x{h}")

    frames = []
    while True:
        ok, frame = cap.read()
        if not ok:
            break
        frames.append(frame[CROP_Y:CROP_Y + CROP_H, CROP_X:CROP_X + CROP_W])
    cap.release()

    if not frames:
        sys.exit("no frames read")

    frames.reverse()

    head = int(round(TRIM_HEAD_SECONDS * fps))
    if head and head < len(frames):
        frames = frames[head:]

    os.makedirs(out_dir, exist_ok=True)
    fourcc = cv2.VideoWriter_fourcc(*"avc1")
    writer = cv2.VideoWriter(out_video, fourcc, fps, (CROP_W, CROP_H))
    if not writer.isOpened():
        fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        writer = cv2.VideoWriter(out_video, fourcc, fps, (CROP_W, CROP_H))
    if not writer.isOpened():
        sys.exit("no usable mp4 encoder")

    for frame in frames:
        writer.write(frame)
    writer.release()

    # The poster must match the held final frame, or the video visibly jumps
    # the moment it finishes decoding.
    cv2.imwrite(out_poster, frames[-1], [cv2.IMWRITE_JPEG_QUALITY, 88])

    print(f"{len(frames)} frames, {len(frames) / fps:.2f}s, {CROP_W}x{CROP_H}")
    print(f"{out_video}  {os.path.getsize(out_video) / 1e6:.2f} MB")
    print(f"{out_poster} {os.path.getsize(out_poster) / 1e3:.0f} KB")


if __name__ == "__main__":
    main()
