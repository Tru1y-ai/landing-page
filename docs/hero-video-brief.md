# Truly — hero background video brief

Prompts and shot scripts for generating a hero background film with an AI video
model, plus the start/end frames to condition it on.

Written 2026-08-13. Reference sites were inspected live on that date; the
palette and type values are read from `src/index.css`.

---

## 1. What the reference sites actually do

I checked six well-regarded sites by querying the DOM for `<video>` elements
rather than going from memory. The results are worth knowing before you commit
to a video at all.

| Site | `<video>` count | Hero treatment |
|---|---|---|
| **mercury.com** | 6 | **Full-bleed cinematic, scroll-scrubbed.** `hero-scrub-lg.mp4`, 1905×945 at the top of the page, `muted`, `autoplay=false`, `loop=false` — playback position is driven by scroll, not time. Responsive `-lg` variant implies a smaller cut for narrow screens. |
| **ramp.com** | 3 | **Product film, not background.** `homepage-hero.webm`, `autoplay`/`loop`/`muted`, 1310×584, positioned *below* the headline at y≈465. Ships a separate `homepage-hero-mobile.webm`. |
| **linear.app** | 0 | No video. CSS/canvas motion only. |
| **anthropic.com** | 0 | No video. |
| **gusto.com** | 0 | No video. |
| **rippling.com** | — | Not reachable from this browser session. |

**Two honest takeaways:**

1. **Background video is not the default among top SaaS sites.** Three of the
   five I could inspect ship zero video. Linear in particular is widely
   considered a design benchmark and uses none. This is a deliberate choice, not
   an oversight — video costs page weight and can fight with type.
2. **The sites that do it split cleanly into two patterns.** Mercury runs a
   photoreal full-bleed film scrubbed by scroll; Ramp runs a compact looping
   product film below the fold of the headline. They are different tools for
   different jobs.

Mercury's hero is the closest thing to what you described, and it is worth
studying: a misty valley at dawn with an office desk, chair and laptop planted
on a ridge. Photoreal, heavily desaturated, and — critically — **the top third
of the frame is atmospheric haze with almost no detail**, which is what lets
white headline type sit on it cleanly. The metaphor is literal (banking that
gets you out of the building) but the execution is restrained.

### The constraint that governs everything below

Your hero has **white serif type, centred, over the full panel**. Any video has
to survive that. Which means:

- **Top 40% of the frame must be low-detail and low-contrast** — haze, sky, bokeh,
  shallow-focus wall. Detail belongs in the bottom third.
- **Slow motion only.** Anything that moves fast under type reads as noise.
- **No hard cuts.** One continuous shot, or the loop point will punch.
- **Low saturation.** Truly's palette is muted; a vivid film will make the rest
  of the page look washed out.

---

## 2. Palette and material references (from `src/index.css`)

Paste these into prompts verbatim — hex values steer modern image models well.

| Token | Hex | Use in frame |
|---|---|---|
| `--paper` | `#FAF9F5` | warm off-white; paper, walls, daylight |
| `--ink` | `#1B1A15` | near-black with a warm cast; shadows |
| `--screen` | `#171610` | dark screen surfaces |
| `--green` | `#14563E` | deep forest |
| `--green-2` | `#1E7A57` | the signature green; foliage, screen glow |
| `--moss` | `#2F6B4A` | mid green |
| `--teal` | `#1F6E75` | cool shadow tint |
| `--amber` | `#C4762B` | warm lamp / late sun |
| `--clay` | `#A6472F` | rust accents, terracotta |
| `--plum` | `#4A2F63` | cool dusk shadow |

Type on the site is **Newsreader** (serif), **Inter**, **IBM Plex Mono** — an
editorial, non-techy register. The film should feel closer to a documentary or
a Kinfolk spread than to a product demo.

---

## 3. Concept A — "The Desk That Isn't a Test" ★ recommended

**The idea:** the camera moves through a real, lived-in workspace at dawn. Not a
sterile office, not a testing centre — someone's actual desk, with their actual
mess. This is the whole product thesis in one image: *the work happens here, on
their machine, with their tools.*

Lowest generation risk of the three. Single environment, single slow move.

### Shot script

| Time | Beat |
|---|---|
| 0:00–0:02 | Extreme shallow focus on a cooling coffee cup, foreground left. Behind it, an out-of-focus monitor glows soft green. Dust drifts in a window shaft. |
| 0:02–0:05 | Camera dollies forward and right at walking pace. Focus racks off the cup and onto the desk surface — a mechanical keyboard, a spiral notebook with real handwriting, a pencil, a small trailing plant. |
| 0:05–0:08 | The move continues. The monitor comes into frame at an oblique angle, never legible — just soft green-on-dark shapes and the suggestion of a diff. Warm window light crosses the desk from the right. |
| 0:08–0:10 | The move decelerates to a near-stop. Settles on the desk in three-quarter view, screen glow and window light balanced. Dust still drifting. Holds. |

Loops by reversing (ping-pong) or by scrubbing on scroll like Mercury.

### Video-model prompt

> Cinematic locked-off dolly shot, moving slowly forward and to the right across
> a real software developer's desk at dawn. Photorealistic, documentary style,
> shot on 35mm film with an anamorphic lens at T2.0, extremely shallow depth of
> field. Foreground: a ceramic coffee cup with steam, out of focus. Mid-ground:
> a mechanical keyboard with worn keycaps, an open spiral notebook with
> handwritten notes, a wooden pencil, a small trailing pothos plant in a
> terracotta pot. Background: a large monitor at an oblique angle, its screen an
> unreadable soft glow of deep green (#1E7A57) on near-black (#171610). Warm
> low-angle sunrise light enters from a window on the right, raking across the
> desk and catching drifting dust motes. Colour palette is muted and warm —
> off-white (#FAF9F5), warm near-black (#1B1A15), forest green (#14563E),
> restrained amber (#C4762B). Low saturation, soft contrast, gentle film grain.
> The upper third of the frame is empty, softly lit wall in shallow focus. Very
> slow, steady camera motion. No people, no text, no on-screen UI.

**Negative prompt:** `people, faces, hands, text, readable code, UI elements,
logos, watermark, fast motion, camera shake, whip pan, zoom burst, lens flare,
oversaturated, neon, teal-and-orange grade, HDR, clutter in upper third, hard
cuts, multiple shots`

### Start frame — image prompt

> Photorealistic still, 16:9. Extreme close-up, shallow depth of field, focus on
> a ceramic coffee cup at the left edge of a wooden desk, faint steam rising.
> Everything behind it is out of focus: the soft green-black glow of a monitor,
> the suggestion of a keyboard. Dawn light from the right, warm and low, dust
> motes in the beam. Muted palette: off-white #FAF9F5, warm black #1B1A15,
> forest green #14563E, amber #C4762B. The top third of the frame is an empty,
> softly-lit plaster wall, almost featureless. 35mm film grain, anamorphic
> rendering, low saturation, no people, no text.

### End frame — image prompt

> Photorealistic still, 16:9. Three-quarter view of a real developer's desk at
> dawn, everything now in focus except the far background. Mechanical keyboard
> with worn keycaps, open spiral notebook with handwritten notes, wooden pencil,
> small trailing pothos in a terracotta pot, ceramic cup now at the frame's left
> edge and slightly out of frame. A monitor at an oblique angle on the right, its
> screen an unreadable soft glow of deep green #1E7A57 on near-black #171610.
> Warm raking sunrise light from the right, dust motes visible. Muted palette:
> #FAF9F5, #1B1A15, #14563E, #C4762B. Top third of the frame is empty softly-lit
> wall. 35mm film grain, low saturation, no people, no text, no readable UI.

---

## 4. Concept B — "Through the Wall" ★ most creative, hardest to generate

**The idea:** one unbroken camera move that starts inside a sterile glass
interview room and passes through the wall into a warm, lived-in workspace where
someone is actually building. It literalises the headline — *hire for the work,
not the interview* — in a single shot.

This is the strongest concept and the most likely to need several generations,
or to be built as two clips with a match-cut through a dark frame. Budget for
that.

### Shot script

| Time | Beat |
|---|---|
| 0:00–0:03 | Inside a glass-walled meeting room, cold and empty. An unoccupied chair. A whiteboard with a half-erased binary tree and the ghost of "O(n log n)". Grey overcast light, blue-grey cast, everything hard-edged and clean. Camera pushes slowly forward toward the far wall. |
| 0:03–0:05 | The camera reaches the wall and passes *through* it. For roughly half a second the frame is near-black with a soft green edge of light — the natural loop point and the natural cut point if you generate this as two clips. |
| 0:05–0:08 | Emerging into a warm room: golden window light, a wooden desk, plants, books, a mug, a monitor glowing soft green. The temperature shift from blue-grey to amber is the whole point. |
| 0:08–0:10 | Camera decelerates and settles on the desk. Dust in the light. Holds. |

### Video-model prompt — clip 1 (the interview room)

> Cinematic slow forward dolly, photorealistic, 35mm film. Interior of an empty
> glass-walled corporate meeting room, cold and sterile. A single unoccupied
> office chair pushed slightly back from a bare table. A whiteboard on the far
> wall with a faint half-erased binary tree diagram, illegible. Flat grey
> overcast daylight through floor-to-ceiling glass, cool blue-grey colour cast,
> hard clean edges, no warmth. Muted desaturated palette, soft contrast, subtle
> film grain. The camera pushes slowly and steadily toward the far wall until the
> wall fills the frame and the image falls to near-black. Upper third of the
> frame is empty ceiling and blank wall. No people, no text, no logos.

### Video-model prompt — clip 2 (the real room)

> Cinematic slow forward dolly, photorealistic, 35mm film, continuing a
> continuous move. Opening from near-black with a soft rim of deep green light
> (#1E7A57), the camera emerges into a warm, lived-in home workspace at golden
> hour. A wooden desk under a window, warm low sunlight raking across it, a
> mechanical keyboard, an open notebook with handwriting, a ceramic mug, stacked
> books, trailing plants in terracotta pots, a monitor at an oblique angle
> glowing soft unreadable green on near-black. Dust motes drifting in the light
> beam. Warm amber and forest-green palette — #FAF9F5, #1B1A15, #14563E,
> #C4762B — low saturation, soft contrast, gentle grain. The camera decelerates
> and settles. Upper third of the frame is a softly-lit wall in shallow focus.
> No people, no text, no readable UI.

**Negative prompt (both clips):** `people, faces, text, readable writing, logos,
watermark, fast motion, camera shake, zoom, lens flare, oversaturated, neon,
HDR, busy upper third, hard cut, split screen`

### Frames

- **Start frame:** the empty glass meeting room, camera at the door, chair
  centre-left, whiteboard on the far wall, flat grey light, blue-grey cast, top
  third empty ceiling.
- **Mid / hinge frame (end of clip 1, start of clip 2):** a near-black frame with
  a soft vertical rim of green light on one edge. Generate this as a deliberate
  asset — it is what makes the two clips join invisibly, and it doubles as your
  loop point.
- **End frame:** the same warm-desk composition as Concept A's end frame, so the
  two concepts share a target and you can A/B them against one poster image.

---

## 5. Concept C — "Six Lenses" (ties to the chip section)

**The idea:** the physical-world version of the evaluator board you already have
on the page. Six soft beams of coloured light converge on a single sheet of
paper on a dark desk; where they meet, the paper brightens. No UI, no
screens — just light behaving like evidence.

Good if you want the hero to rhyme with the `03 — Judge` section rather than
restate the "real desk" idea.

### Video-model prompt

> Cinematic macro shot, photorealistic, 35mm film, very shallow depth of field.
> A single sheet of cream paper (#FAF9F5) lying on a dark walnut desk in a dim
> room. Six thin beams of coloured light enter from the edges of frame at
> different angles — deep green (#1E7A57), teal (#1F6E75), moss (#2F6B4A), amber
> (#C4762B), clay (#A6472F), plum (#4A2F63) — travelling slowly inward through
> faint atmospheric haze. The beams converge on the centre of the paper, which
> brightens as they meet. Dust motes drift through the beams. Extremely slow
> camera push-in. Very low ambient light, deep warm shadows (#1B1A15), muted and
> desaturated, soft contrast, fine film grain. No people, no text, no writing on
> the paper, no UI.

**Negative prompt:** `text, writing, letters, numbers, people, hands, UI, logos,
watermark, laser show, neon, rainbow, oversaturated, fast motion, strobe,
flicker, hard light`

- **Start frame:** the dark desk, blank cream paper centred low in frame, beams
  just entering at the edges, centre of paper still dim. Top third near-black.
- **End frame:** identical composition and camera position, beams fully
  converged, centre of the paper glowing warm. **Keep the camera and paper in the
  same place in both frames** — that is what makes it loop seamlessly.

---

## 6. Which to build

**Start with Concept A.** It is the safest generation, it says the right thing,
and it gives you a usable hero in one or two attempts. Once it's live, try
Concept B as a replacement — it is the better idea, but it will take real
iteration and possibly a two-clip stitch.

**Concept C** is the one to use if you'd rather the hero be abstract; it also
survives text overlay best of the three, because the top of the frame is
genuinely near-black.

---

## 7. Model notes

Confidence flag: model names and capabilities move quickly and I can't verify
current feature sets from here. Treat this as a starting point and check each
tool's docs.

- **Start-and-end-frame conditioning** (give it both frames, it interpolates) is
  the feature you want, and it is the reason this brief specifies both frames for
  every concept. Kling and Luma have offered it; Runway has offered keyframe
  conditioning. Verify before committing.
- **Text-to-video only** (no frame conditioning) still works — use the prompt and
  generate the frames as separate stills for your `poster` attribute.
- **Generate the frames first**, with an image model (Flux, Imagen, Midjourney,
  Nano Banana). Stills are cheap and fast to iterate; video is not. Lock the
  composition in stills, *then* spend video credits.
- **Generate at the longest duration the model offers**, then trim. Models tend to
  drift late in a clip; you want the option to cut before the drift.

---

## 8. Delivery specs for the site

Grounded in what Ramp and Mercury actually ship.

| Item | Spec |
|---|---|
| Format | `.webm` (VP9) primary + `.mp4` (H.264) fallback — Ramp ships webm |
| Resolution | 1920×1080 desktop; separate ~1080×1350 or 720p cut for mobile |
| Duration | 8–12s |
| Weight | Target < 2 MB desktop, < 800 KB mobile. This is the number that matters |
| Audio | None — strip the track entirely, don't just mute it |
| Attributes | `autoplay muted loop playsinline preload="metadata"` |
| Poster | Export the **end frame** as a WebP/JPEG `poster` — it's what everyone sees before the video decodes, and on slow connections it may be all they see |

### Things that will bite you

- **`prefers-reduced-motion`.** The site already honours it everywhere else. The
  video must too — fall back to the poster image. Not optional.
- **Text legibility.** Even with a low-detail top third, you'll likely need a
  scrim: `linear-gradient(180deg, rgba(12,28,22,0.45) 0%, rgba(12,28,22,0.15) 45%, rgba(12,28,22,0.5) 100%)`.
  The hero already has almost exactly this over the mesh — reuse it.
- **It replaces the mesh, or it fights it.** The current `.hero-mesh` gradient and
  a video in the same panel will look muddy. Pick one.
- **The GSAP intro still applies.** `Hero.jsx` fades `.hero-mesh` in from
  `autoAlpha: 0, scale: 1.22`. Whatever replaces it inherits that tween — check
  it doesn't fight the video's own motion.
- **Load cost.** You spent effort earlier cutting hero blur work from 6.77 MP to
  2.36 MP because the first paint was janky. A 2 MB video in the hero puts weight
  straight back. Measure before and after.
