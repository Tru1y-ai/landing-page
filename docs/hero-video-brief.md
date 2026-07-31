# Hero film — production brief

A background film for the Truly landing page hero. Everything below is what
the page needs in order to use the render without reworking the layout.

Hand this to a 3D artist as-is, or work from it directly in Blender.

---

## The idea

The page's argument is that a résumé is a polished surface that hides how
someone actually works. The film should be **paper losing its authority** —
a set of CVs thrown into the air, tumbling, and one of them coming to rest
facing the camera. What matters is that they read unmistakably as *paper*:
weight, thickness, bend, the way light passes through a sheet held against a
lamp. Not cards, not UI panels.

The headline that sits over it is *"What a résumé hides, the work reveals."*
The film should not try to also say that — it only has to make the paper feel
real and give the copy somewhere calm to sit.

## Hard constraints

| | |
|---|---|
| **Duration** | 6–9s |
| **Resolution** | 2560×1440 master (downscale on export, see below) |
| **Frame rate** | 30fps is enough; 60fps only if the motion is fast |
| **Ending** | **Plays once and holds the last frame.** Do not design a loop unless it is genuinely seamless — a burst that restarts reads as a glitch |
| **Audio** | None. Strip the track entirely; the page mutes it anyway |
| **Background** | Solid `#04212F` deep navy, or a gradient that stays within a few points of it |

### Composition — the part that gets this wrong most often

The hero is cropped to `100svh` with `object-fit: cover`, so **the frame
edges will be cut** at most viewport ratios. Nothing important can live near
the edges.

- **Keep the left 45% of frame quiet.** The headline, subhead and both CTAs
  sit there. Low contrast, no hard edges, nothing that draws the eye. The
  page darkens this area further, but the film has to be composed for it.
- **The action belongs in the right 55%**, centred around 68% across — that
  is the `object-position` the page is set up for, and it is adjustable.
- **Keep a safe margin top and bottom.** The top ~90px is behind the nav bar.
  The bottom ~30vh fades into the cream page below.

### Lighting and mood

- One dominant key, cool and directional, as if from a window off frame.
- The navy background is dark; the paper is what carries the light. Let sheets
  catch a specular sheen along their crest as they turn.
- **Light through the paper.** A backlit sheet showing the text of its reverse
  is the single most convincing cue that this is paper and not a plane. If
  only one thing is chased for realism, chase this.
- Real contact shadows and sheet-on-sheet shadowing. Ambient occlusion where
  pages overlap.
- Depth of field: the landed sheet sharp, the tumbling ones progressively
  softer with distance. Keep it subtle — heavy bokeh reads as a stock plate.

### The paper itself

- A4, matte uncoated stock, faintly warm white (`#F6F4EF` is what the current
  page uses).
- **It must bend.** A rigid plane is exactly what the CSS version already does
  and the reason we are commissioning a render at all. Cloth simulation, or at
  minimum a bend modifier animated across the tumble.
- Visible thickness at the edges. A slight curl at one corner.
- Printed content: a plausible CV layout — name, role, a contact block, two or
  three job entries, a skills column. It only needs to read as a CV; it will
  never be legible long enough to be scrutinised. **Do not use real people's
  details.** Invented names only.

---

## Deliverables

Three files, into `public/hero/`:

| File | Format | Target size |
|---|---|---|
| `resumes.webm` | VP9 or AV1, 1920×1080 | **under 2.5 MB** |
| `resumes.mp4` | H.264 High, 1920×1080, `faststart` | **under 4 MB** |
| `resumes-poster.jpg` | **First frame**, 1920×1080, quality ~80 | under 250 KB |

Both video formats are required — Safari will not play the WebM, and the MP4
alone is roughly twice the bytes for everyone else.

The poster must be the **first** frame, not a hero-looking mid-frame, or the
image visibly jumps the moment playback starts.

The size budget is not a nicety: this is the largest asset on the page and it
blocks the hero. If the render will not fit, cut duration before quality.

### ffmpeg, if you are exporting from a master

```bash
# WebM / VP9
ffmpeg -i master.mov -c:v libvpx-vp9 -crf 34 -b:v 0 -an -vf scale=1920:-2 resumes.webm

# MP4 / H.264, moov atom up front so it can start before it finishes loading
ffmpeg -i master.mov -c:v libx264 -profile:v high -crf 24 -pix_fmt yuv420p \
       -movflags +faststart -an -vf scale=1920:-2 resumes.mp4

# Poster from the first frame
ffmpeg -i master.mov -vframes 1 -q:v 4 resumes-poster.jpg
```

Raise `-crf` to shrink the file; 34/24 are starting points, not gospel.

---

## Wiring it up

Drop the three files into `public/hero/`, then fill in `src/heroMedia.ts`:

```ts
export const HERO_VIDEO: HeroVideo | null = {
  webm: 'hero/resumes.webm',
  mp4: 'hero/resumes.mp4',
  poster: 'hero/resumes-poster.jpg',
  loop: false,
  position: '68% 50%',   // tune to the render's focal point
};
```

That is the entire switch-over. The CSS 3D pile is the hero until this is
non-null, and is replaced outright when it is — the two never render together.

Then check two things against the real footage:

1. **`position`** — whether the focal point survives the crop at narrow and
   wide viewports.
2. **`.hero-film .hero-scrim` in `index.css`** — the wash over the copy
   column. It is currently set blind, for an unknown film, and is the one
   value that will need tuning once there is something behind it.

## Free assets worth using

- **Poly Haven** — HDRIs and paper/surface textures, CC0. An HDRI does more
  for realism here than any amount of geometry.
- **ambientCG** — CC0 paper and fabric materials.
- **Blender** — free; a subdivided plane with a cloth sim is genuinely the
  whole model. The work is in lighting, materials and render time.
