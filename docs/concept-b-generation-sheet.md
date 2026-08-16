# Concept B — "What's Under the Page" · generation sheet

Everything needed to generate this one film, in order, in one file. Extracted from
`hero-motion-directions.md` (§4d, §4, §4c) on 2026-08-15. **Prompts are verbatim** — the
source doc is emphatic that the shared style sentences must stay word-identical, so do
not paraphrase, reorder or trim them.

If you edit a prompt here, edit it in the source doc too, or the two will silently drift.

---

## The idea

A single sheet of cream paper — a résumé — lies on dark wood. Pristine, and telling you
nothing. A light rises from beneath it and the paper turns translucent. What shows
through is the **record**: a horizontal trace of timestamped marks, and six coloured
threads reaching in to touch specific ones. The printed side fades, the sheet dissolves
into the light, and the frame settles to flat `#FAF9F5` and holds there forever.

The claim is on top; the evidence was underneath the whole time.

~11 seconds. One continuous shot. No cuts, no hands, no people.

---

## Before you generate anything

**1. The grade is the defensive one (§4, not §4a).** Your hero puts type over the frame
(Pattern A). Concept B is already built for that — its end frame is near-empty off-white
with the trace in the middle third and the upper third deliberately empty. Do **not** use
the high-contrast variant unless you first move the type off the image.

**2. The hero has to go light.** The film resolves to `#FAF9F5`, which is your `--paper`.
That trick — the held final frame *being* the page — is the whole reason this concept
works, and it is incompatible with the current hero:

| Now | After |
|---|---|
| `.hero-mesh` — five radial blobs on `#1E4A38`, 26s drift | replaced by the `<video>`. Not underlaid — two gradients and a film in one panel reads muddy |
| `.h1 { color: #fff; text-shadow: 0 2px 30px rgba(10,26,20,0.3) }` | back to `--ink`, shadow removed |
| `.hero-sub`, `.eyebrow`, `.hero-note`, both `.btn` variants — all white-on-dark | all need dark-on-paper values |
| `.hero-panel::before` dark scrim | replaced by the bloom scrim below |

Decide you're doing this before you spend on stills. Retro-fitting a paper-white film
into a dark hero means regenerating.

**3. Verify your model does start-and-end-frame conditioning.** The whole plan is built on
giving it both frames and letting it interpolate. If yours can't, the prompt still works
text-to-video — you just lose the guarantee that the last frame lands on `#FAF9F5`, and
you'll be checking that by eye instead.

---

## Step 1 — the start frame ★ this is the gate

Generate this **first and alone**. It is the cheap test of whether your model can render
backlit translucent paper at all. Concept B is all-or-nothing on that one phenomenon — if
the model can't do it, the shot has nothing else, and you want to know that for the price
of a still rather than a video.

16:9, 1920×1080 minimum. Hold the seed.

**v2 — revised after attempt 1. See the attempt log at the end of this file.**

```
Photorealistic still of a single sheet of uncoated cream 120gsm paper with a deckle
edge lying flat on dark quarter-sawn walnut. The whole sheet is visible with all four
of its edges inside the frame, filling about eighty percent of the image, angled about
fifteen degrees off perpendicular so it is seen very slightly from above rather than
face-on. Lit by one soft warm 3200K key from frame right at a four-to-one ratio; the
wood falls to near-black at the frame edges. The printed surface carries twenty to
thirty soft grey horizontal bars of varying length arranged in four or five distinct
blocks, like a document seen from too far away to read. The paper is fully opaque and
evenly surfaced. 100mm lens at T2.8, shallow depth of field with the paper surface
sharp and the far edge falling softly out of focus. Photorealistic, shot on ARRI Alexa
with Kodak Vision3 500T, 16:9. Muted, warm, low-saturation palette built on warm
near-black #1B1A15, cream #FAF9F5, and faint grey-green #97927F; no other colour
appears anywhere. Fine 35mm film grain throughout. Soft shoulder, no crushed
highlights. The paper is real uncoated stock with a visible tooth and a slightly
irregular deckle edge, not a clean digital rectangle. No faces, no bodies, no arms
above the wrist, no readable text, no letters or numbers, no user interface, no logos.
```

**Negative — start frame**

```
extreme close-up, cropped sheet, partial sheet, corner of paper, steep perspective,
tilted horizon, golden wood, orange wood, honey-coloured wood, saturated wood, amber
cast, faces, heads, bodies, arms above the wrist, extra fingers, readable text,
letters, numbers, handwriting, logos, watermark, signature, user interface, charts,
graphs, black bars, letterboxing, oversaturated, neon, teal-and-orange grade, HDR,
clean digital render, plastic, glossy surfaces, lens flare, bokeh balls, clutter
```

---

## Step 2 — the end frame ★ this is the poster

The most important image in the set. It is the frame the film holds on forever, the
`poster` behind your headline before the video decodes, and on a slow connection the only
thing a visitor ever sees. Generate this one until it is right.

Same seed as Step 1 where the model allows it.

**v2 — revised after attempt 1. See the attempt log at the end of this file.**

```
Photorealistic still, 16:9. A flat, even, warm off-white field #FAF9F5 filling the
entire frame, of exactly uniform value from edge to edge and corner to corner, with no
gradient, no vignette, no corner darkening, no warm cast and no horizon. Across the
middle third of the frame height, a single horizontal trace of small precise marks —
short ticks, tiny filled squares, two-millimetre dashes — running across the full
middle two-thirds of the frame width, spaced at irregular intervals, clustered closely
in some places and sparse in others. Six thin threads of coloured light, each about one
millimetre wide, enter the frame from six different edges and corners — two from the
left edge, one from the top edge, one from the bottom edge, two from the right edge —
and each one travels to and terminates on a different individual mark spread along the
whole length of the trace. No two threads touch, meet, bundle, cross or share an
endpoint at any point. The six colours are moss green #2F6B4A, teal #1F6E75, plum
#4A2F63, amber #C4762B, rust clay #A6472F, forest green #1E7A57, and each is clearly
distinguishable from the other five. A very faint paper tooth is visible in the
off-white. Everything else is empty. The upper third of the frame is completely empty.
Extremely soft, minimal, generous negative space, low contrast, no visible light
source. Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Fine 35mm
film grain throughout. Soft shoulder, no crushed highlights. No faces, no bodies, no
readable text, no letters or numbers, no user interface, no logos.
```

**Negative — end frame**

```
bundled threads, converging to a single point, threads meeting, cable bundle, fan of
lines, network diagram, node, connector, symmetrical composition, crossing threads,
tangled lines, vignette, corner darkening, gradient background, yellow cast, cream
gradient, uneven lighting, ruler, measuring tape, evenly spaced marks, faces, bodies,
readable text, letters, numbers, handwriting, logos, watermark, user interface,
dashboards, charts, graphs, oversaturated, neon, rainbow, prism, HDR, lens flare
```

> **v2 changes four things at once**, which is the opposite of what the near-miss protocol
> says. Justified here because the four map to four independent clauses and each is a
> re-assertion of an instruction the model ignored outright, rather than a guess at a
> cause. If v2 still misses, drop back to protocol discipline and change **only the thread
> routing** — it is the instruction with the most inertia and the one carrying the meaning.

---

## Step 3 — iterate the stills, one variable at a time

Do not fire twenty variations. A generation that is 80% right is telling you the prompt
is 80% right; a new seed throws that information away.

Work down this list and **stop at the first thing that explains the miss**:

| # | If the miss is… | Change **only** this |
|---|---|---|
| 1 | Composition — wrong framing, scale, object placement | the framing clause. Never fight composition later in the video prompt |
| 2 | Motion (video stage only) — too fast, wrong easing, drifts late | the curve line and the duration. Generate longer and trim rather than asking for slower |
| 3 | Something moves that shouldn't | the **what-must-not-move** line — name the specific object. Highest-yield single edit in the set |
| 4 | Light — flat, wrong direction, no falloff | the **ratio number**, one stop at a time. `four-to-one` → `eight-to-one`. Do not add adjectives |
| 5 | Palette drift | the **negative** prompt, not the positive. Add the specific wrong colour you are seeing |
| 6 | Materials look CGI — too clean, too plastic | the material clause. Name a defect: a bent corner, a visible fibre, a scuff in the wood |
| 7 | Nothing above explains it | *now* change the seed. Not before |

**Keep a log** — four columns: seed, the one thing changed, what improved, what got worse.
Thirty entries in, that log is worth more than the generations.

**Two things not to do:** don't add words to fix a miss (before adding, re-read for a
clause to *remove* — dilution is usually the problem), and don't re-roll the seed on a
near-miss.

**When to stop:** when it passes the rubric and you cannot name the next thing you would
change. "It could be slightly better" will not converge.

---

## Step 4 — generate the film

Condition on **start frame → end frame**. Request the longest clip the model offers, then
trim; models drift late and you cannot add frames back. Target 24 fps.

| | |
|---|---|
| **Shot size** | Macro, sheet fills most of frame, angled ~15° off perpendicular |
| **Camera** | Locked off, then a very slight pull-back in the final third |
| **Lens** | 100mm macro at T2.8, focus on the paper surface |
| **Light** | One soft warm key from frame right; a second source rises *behind* the sheet and becomes dominant |
| **Moves** | The backlight rising; printed side fading; the record resolving through the fibres |
| **Must not move** | The sheet, the camera framing, and every mark once it has resolved |
| **Curve** | Backlight rises on a slow steady ramp with no flicker; camera decelerates to a complete stop and holds for the last half-second |

### Long form

```
Macro shot of a single sheet of uncoated cream 120gsm paper with a deckle edge lying
on dark quarter-sawn walnut, the sheet filling most of the frame and angled about
fifteen degrees off perpendicular. It begins lit only by one soft warm 3200K key from
frame right, its printed surface carrying soft grey horizontal bars of varying length
arranged in blocks, like a document seen from too far away to read. A second light
then rises slowly from directly beneath the sheet and the paper becomes translucent,
the way paper does when held up to a window — its fibres and grain lighting up from
within. Showing through from underneath, in silhouette and glow, is a record: a
horizontal trace of small precise marks running left to right, and six thin threads of
coloured light reaching in from the edges of frame to touch individual marks — deep
moss green #2F6B4A, teal #1F6E75, plum #4A2F63, amber #C4762B, rust clay #A6472F,
forest green #1E7A57. As the backlight strengthens the printed side fades away
entirely, the marks and threads sharpen, and the sheet's own edges dissolve into the
light until the wood is gone and the frame settles to a flat warm off-white #FAF9F5
holding only the trace, the six threads and a faint paper tooth. The backlight rises
on a slow steady ramp with no flicker or pulsing. The camera pulls back very slightly
in the final third, decelerating to a complete stop and holding absolutely still for
the last half-second; it does not pan, tilt or rotate. The sheet does not move, and no
mark moves once it has resolved. Photorealistic, shot on ARRI Alexa with Kodak Vision3
500T, 16:9. Muted, warm, low-saturation palette built on warm near-black #1B1A15,
cream #FAF9F5, and faint grey-green #97927F; no other colour appears anywhere except
where named above, with the six thread colours as the only saturated elements. Fine
35mm film grain throughout. Soft shoulder, no crushed highlights. The paper is real
uncoated stock with a visible tooth and a slightly irregular deckle edge, not a clean
digital rectangle. No faces, no bodies, no arms above the wrist, no readable text, no
letters or numbers, no user interface, no logos. Final frame: a flat #FAF9F5 field
holding a horizontal trace of small marks and six thin coloured threads, everything
else empty.
```

### Short form — generate this too, on the same seed

Long prompts dilute on some models and cap out on others. One extra generation tells you
which register yours prefers, and that answer is worth having.

```
Macro, locked camera. A single sheet of cream paper on dark walnut, angled slightly.
Its printed surface carries soft grey bars of varying length, like a document seen from
too far away to read. A light rises from beneath it and the paper turns translucent,
glowing through its fibres. Showing through from underneath: a horizontal trace of
small precise marks, and six thin threads of coloured light — moss, teal, plum, amber,
clay, forest green — reaching in to touch them. The printed side fades, the sheet
dissolves into the light, and the frame settles to flat warm off-white holding only the
record. Slow steady ramp, no flicker. 35mm film, low saturation, fine grain. No hands,
no text.
```

### Negative — Tier 1, never omit

Every term here is both likely and fatal, and none can be fixed after the fact.

```
faces, hands, readable text, letters, numbers, logos, watermark,
camera shake, lens flare, oversaturated, hard cut, second shot
```

`hard cut, second shot` earns its place — models like to insert an edit whenever a prompt
describes a change of state, and this prompt is one long change of state.

### Negative — Tier 2, add only if the model takes long negatives well

```
x-ray, medical scan, blueprint, tracing paper, vellum overlay, double exposure,
ghosting, glitch, scan lines, hologram, UI, dashboard, charts, graphs, crossing
threads, laser show, neon, rainbow, prism, strobe, flicker, pulsing, burning paper,
fire, embers, smoke, wet paper, torn paper, crumpled paper, blue-white light,
cold white, HDR, plastic surfaces, tilted horizon
```

The first four terms matter most. A translucency prompt drifts toward x-ray, medical scan
and blueprint faster than toward anything else, and that is the one failure that would
make the film read as a completely different product.

---

## Step 5 — grade it

Reject **on sight**, without deliberating. These cannot be fixed downstream and all look
worse at full size than in a thumbnail.

| Reject if | Why |
|---|---|
| Any text, letters or numbers appear anywhere | Always garbled. Instantly reads as AI |
| A face, hand, or arm enters frame | This shot has no people in it at all |
| The camera moves during the locked-off portion | The only sanctioned move is the final-third pull-back |
| The sheet tilts, slides or rotates | It is the fixed thing the light moves against |
| Motion is linear with no easing | Reads as a slideshow, not a camera |
| The palette drifts cyan, magenta or blue-white | Will not match `--paper`; regrading loses the grain |
| Any lens flare, bloom ball or light streak | Not in the reference vocabulary |
| It reads as x-ray, blueprint, hologram or scan | Different product entirely. The signature failure of this concept |
| Marks in the trace flicker, drift or fade | They are evidence; evidence does not move |
| Two threads cross | Six independent evaluators. Crossing lies about the product |
| **The final frame is not flat `#FAF9F5`** | Kills the hold-on-last-frame trick, which is the point |

Anything failing one gets deleted immediately, not "fixed in post".

---

## Step 6 — finish and encode

Verify these against your own ffmpeg build; flag availability varies, and every CRF is a
starting point to tune by eye.

**Trim first**, so you never encode frames you'll throw away:

```bash
ffmpeg -ss 0.6 -to 11.2 -i conceptb_raw.mov -c copy conceptb_trim.mov
```

**WebM / VP9, two-pass** — this is what gets the file under 1.8 MB:

```bash
ffmpeg -i conceptb_trim.mov -c:v libvpx-vp9 -b:v 0 -crf 33 -pass 1 -an -row-mt 1 \
  -pix_fmt yuv420p -f null /dev/null
ffmpeg -i conceptb_trim.mov -c:v libvpx-vp9 -b:v 0 -crf 33 -pass 2 -an -row-mt 1 \
  -pix_fmt yuv420p hero.webm
```

Start at CRF 33 and walk up until you see banding **in the paper-white resolve** — that
flat `#FAF9F5` field is the hardest thing in the film to compress cleanly, so check it
first. If banding appears before you hit your size target, keep some of the film grain
rather than removing it; grain dithers the gradient and is cheaper than the bitrate
needed to fix banding.

**MP4 / H.264 fallback** for Safari:

```bash
ffmpeg -i conceptb_trim.mov -c:v libx264 -crf 24 -preset veryslow \
  -pix_fmt yuv420p -profile:v high -movflags +faststart -an hero.mp4
```

`-movflags +faststart` moves the index to the front so playback starts before the whole
file arrives. Omitting it is a common and very visible mistake on a hero video.

**Poster from the LAST frame**, not the first — the held final frame is what people look
at, and a mismatched poster makes the video visibly jump when it finishes decoding:

```bash
ffmpeg -sseof -0.2 -i hero.mp4 -vframes 1 -c:v libwebp -quality 88 poster.webp
ffmpeg -sseof -0.2 -i hero.mp4 -vframes 1 -q:v 3 poster.jpg
```

`-an` on every encode. `muted` on the element is not the same thing — a muted video still
downloads its audio track.

### Pre-ship checks

| Check | Target |
|---|---|
| `hero.webm` | **< 1.8 MB** (Superhuman ships a desktop play-once hero at 1.71 MB) |
| `hero-mobile.webm` | < 700 KB |
| `poster.webp` | < 120 KB |
| Audio streams | **zero** — `ffprobe hero.webm` should list none |
| `faststart` on the mp4 | yes |
| **Final frame vs `--paper`** | screenshot the held frame, pick the background colour, compare to `#FAF9F5` |

That last one is the check people skip. If it's off by more than a couple of values the
seam between video and page is visible, and the whole trick fails on the detail it
depends on.

---

## Step 7 — wire it into the page

| Item | Spec |
|---|---|
| Playback | **Play once and hold.** `muted playsinline`, **no `loop`**, play on intersect |
| `preload` | `metadata` — it's above the fold |
| Ladder | Three tiers via `<source media>`, **largest breakpoint first**, unconditional fallback last. First-match-wins, so the order is not cosmetic — reverse it and everyone gets the small file |
| Poster | the Step 6 WebP |
| CSS | `object-fit: cover; filter: saturate(0.85);` |
| Scrim | `radial-gradient(140% 80% at 50% 38%, rgba(250,249,245,0.78) 0%, rgba(250,249,245,0) 70%)` — a targeted bloom behind the headline rather than a bar across the whole frame. Centred, because your headline is centred |
| Reduced motion | poster only, never the video. **Non-negotiable** |

```html
<video muted playsinline preload="metadata" poster="/hero-poster.webp">
  <source src="/hero-lg.webm" type="video/webm" media="(min-width: 64rem)">
  <source src="/hero-md.webm" type="video/webm" media="(min-width: 40rem)">
  <source src="/hero-sm.webm" type="video/webm">
  <source src="/hero-sm.mp4"  type="video/mp4">
</video>
```

**Reduced motion needs real JavaScript.** The blanket CSS reset everyone copy-pastes does
nothing to a `<video>` — `animation-duration: 0.01ms` is not a thing video playback has.
Prism carries four reduced-motion blocks and its hero film plays anyway:

```js
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
if (reduce.matches) { video.removeAttribute('autoplay'); video.pause(); }
// and let the poster show — which is the argument for having one
```

### Two things in `Hero.jsx` this collides with

1. **The GSAP intro tweens `.hero-mesh`** — `.from('.hero-mesh', { autoAlpha: 0, scale: 1.22, duration: 1.4 })`. Whatever replaces that element inherits the tween. A 1.4s scale-down over a film that has its own motion will fight it; either retarget the tween to the video wrapper with a gentler value or drop it and let the film's own opening carry the entrance.
2. **`.replay` overlaps the hero panel by `-56px`** and is a dark `--screen` frame. Against a paper-white hero that contrast inverts — worth looking at before you decide the film is finished.

---

## Attempt log

The protocol asks for four columns: seed, the one thing changed, what improved, what got
worse. By generation thirty this log is worth more than the images — it is a map of what
this particular model responds to, and it transfers to the video stage.

### Attempt 1 — `starting.png`, `ending.png` · 2026-08-15

**Both frames carried a baked-in "Ai" watermark, top-left.** Tier 1 violation, in the
pixels rather than a layer. A tool/tier problem, not a prompt problem — and it must be
solved before the video stage, because a watermark in the start frame propagates into
every generated frame downstream.

**Start frame — rejected.**

| Finding | Cause | Fix in v2 |
|---|---|---|
| Only a corner of the sheet in frame, ~15% of the page. **Fatal** — the record has nowhere to appear, and the trace and six threads enter *from the frame edges*, so this composition cannot produce the shot | the word **`macro`** in the opener overrode `filling most of the frame` | deleted `macro`; framing stated positively — `all four of its edges inside the frame, filling about eighty percent of the image` |
| Steep oblique, ~50–60° with heavy perspective convergence | `angled about fifteen degrees off perpendicular` lost to the crop | added `seen very slightly from above rather than face-on` |
| Wood sampled `#AC662F`, a saturated honey-orange, and the largest colour area in frame. Lit paper `#EBD3B1`. Whole frame amber-cast | palette drift — argued in the positive, absent from the negative | moved to the negative: `golden wood, orange wood, honey-coloured wood, saturated wood, amber cast` |
| Five very large evenly-spaced bars, some sage-tinted. Read as an abstract stripe poster, not a document | `bars of varying length arranged in blocks` too loose, and the crop left room for only a few | `twenty to thirty … arranged in four or five distinct blocks` |

**What worked and must not be lost:** the deckle edge was excellent — irregular and
fibrous, the hardest part of the still to fake. Paper tooth convincing. The 3200K key
from frame right with hard falloff behaved. The material clause is earning its length;
leave it alone.

**End frame — close. Iterate, do not discard.**

| Finding | Cause | Fix in v2 |
|---|---|---|
| ~8 threads collapsed into **two bundles** meeting at a green node left and a red node right, trace strung between like a cable run. Breaks the meaning — six independent evaluators became two connectors and a wire | `reach in from the edges … and end on individual marks` too weak against the model's pull toward symmetry | enumerated the entry edges, and `each … terminates on a different individual mark`; `no two threads touch, meet, bundle, cross or share an endpoint` |
| Both left greens landed olive-yellow — moss and forest indistinguishable. Right side three warm tones too similar to separate | six hexes listed without a separation instruction | added `each is clearly distinguishable from the other five` |
| Background `#F2F0E3` / `#EBE3D6` / `#F0E8DB` against a `#FAF9F5` target — uniformly dark and yellow (blue channel 18 low) **and vignetted**, a visible 13-point drop top-left to upper-right | `no visible gradient, vignette or horizon` not strong enough | `of exactly uniform value from edge to edge and corner to corner`, plus `vignette, corner darkening, gradient background, yellow cast` in the negative |
| Trace spanned only the middle ~45%, marks regularly spaced — read as a dotted rule | `spaced at even intervals` | `full middle two-thirds of the frame width`, `spaced at irregular intervals, clustered closely in some places and sparse in others` |

**Settled by this attempt:** the even-vs-irregular spacing question flagged when this sheet
was written. Rendered, evenly-spaced marks unmistakably read as a **measuring scale**. The
source doc's later reasoning is correct and v2 adopts it. Nothing left to decide.

**Open judgement call:** the threads rendered as physical coloured *string* with drop
shadows, not "threads of light." That contradicts the prompt — but it is tactile, it sits
well against the paper tooth, and it is further from the x-ray/hologram failure mode than
glowing light would be. Left uncorrected in v2. Decide deliberately rather than by
default.

**Worth knowing:** the end frame is already close to usable as a **static hero image**,
watermark and regrade aside. Its background is a near-uniform field, so a white-balance
and levels pass lands it on `--paper` — the one rubric failure on this list that is
genuinely fixable in post. If the start frame keeps fighting, you have a poster without a
film, and the source doc's position is that the poster was always what people actually
look at.

### Attempt 2 — `start.png`, `end.png` · 2026-08-15

Watermark unchanged; the decision was taken to crop it rather than solve it. Note that
cropping the top-left eats into the empty upper third the headline needs — cheap on the
end frame, which is empty there anyway.

**The headline result: palette drift belongs in the negative prompt, and the lever is
strong.** Moving the wood colour out of the positive and into the negative fixed the
largest colour area in the frame in a single generation:

| | attempt 1 | attempt 2 | target |
|---|---|---|---|
| wood, mid | `#AC662F` | **`#100C09`** | `--ink #1B1A15` |
| wood, edge | — | **`#1B1108`** | near-black ✓ |

Use this lever for every remaining colour problem. It is the highest-yield edit found so
far, ahead of anything in the positive prompt.

**Start frame — closer, one variable out.**

| Finding | Fix for attempt 3 |
|---|---|
| Angle unchanged at ~40° three-quarter with hard perspective convergence, against a 15° spec. `seen very slightly from above rather than face-on` lost to the model's default product-shot framing | state it as a camera position: `shot from almost directly overhead with the camera tipped only about fifteen degrees off vertical … all four edges close to parallel with the edges of the frame` |
| **A tray appeared** — the sheet sits in a shallow wooden box with a raised lip, not on a desk. Unasked-for, and it is a hard rectangular border plus a second surface that must vanish when the frame resolves to `#FAF9F5` | negative: `tray, box, picture frame, raised lip, border, second surface` |
| Amber cast *relocated* rather than left — lit paper `#FDEACA`, blue channel 43 under `--paper` | positive: `the paper reads as a neutral warm cream #FAF9F5 even in the brightest part of the key`; negative: `yellow paper, orange paper, tungsten cast on the paper, sodium light` |

**Fixed and holding:** whole sheet in frame, all four deckle edges, bars in two columns
with varying lengths and real block grouping. It reads as a document.

**End frame — bundling solved, three new defects.**

| Finding | Fix for attempt 3 |
|---|---|
| **Eight threads, not six** — four left, four right, counted by endpoint dots | `exactly six threads in total across the whole frame, and no more than six`; negative: `seven threads, eight threads` |
| Still a mirrored starburst. `symmetrical composition` in the negative did not take | `entering from six irregularly distributed points around the edge, not mirrored or balanced left against right`; negative: `mirrored composition, balanced composition, starburst` |
| **A hard dashed rule appeared** running edge to edge through the middle — not in the prompt. Reads as a ruler or fold line, which is the measuring-scale failure arriving by a different door than the spacing fix closed | negative: `dashed line, dashed rule, connecting line, fold line, ruler, horizontal rule` |
| Marks scattered off the baseline into a three-row cloud; read as debris or sparse text rather than one trace | `all sit on a single invisible horizontal baseline, each separate and unconnected from its neighbours` |
| Background brighter at its best point (`#F9F1E6`, nearly on `--paper`) but **less even** — spread widened to `#F9F1E6` → `#E4D9C6`, roughly triple attempt 1's falloff | unresolved; the uniformity clause is not winning. Consider accepting it and flattening in post, as the field is near-uniform |

**Solved and holding:** every thread terminates on its own endpoint. No bundles, no
shared nodes.

### Attempt 3 — `start2.png`, `end2.png` · 2026-08-15

**Start frame — passed.** The angle fix took: near-overhead, minimal perspective
convergence, edges roughly parallel to the frame. Tray gone. Wood `#070602` / `#140A08`,
near-black and on spec. Bars read as a document in blocks. The pair now shares a camera —
the blocker from attempt 2 is cleared.

Remaining defect is a **global amber cast** — paper `#EBD2B2` lit, `#B8A593` mid, closer
to kraft than to `--paper`, with muddy midtones. Flat surface, global cast: **fix in post
with white balance and levels, not with another generation.**

**End frame — count fixed, everything else regressed.** Exactly six threads. But they
returned as thick ribbons, all entering from the bottom edge, roughly parallel and evenly
spaced, filling the bottom 60% of the frame with solid colour. That destroys `everything
else is empty`, the generous negative space, and any use as a poster with copy over it.

**Cause, and it is a self-inflicted one: the attempt-3 prompt violated craft rule 11.** It
carried `not mirrored or balanced left against right` in the **positive** prompt. The rule
exists precisely because a model takes the noun and discards the negation — and the
all-from-one-edge comb is what that produced. The rule was written into the source doc
after a pass-19 audit found the same defect class, and it was reintroduced here by someone
who had read it.

Background did improve: best point `#FFFBF2` against `#FAF9F5`, spread tightened from ~32
points to ~15.

**Resolution: stop generating this frame.** `end.png` from attempt 2 remains the best
version made — delicate hairlines, genuine elegance, on-brand. Its only substantive defect
is eight threads rather than six, and it sits on a flat cream field, so **removing two
hairlines and the dashed rule is minutes of retouching**. Three rounds in, the remaining
gap is retouching work, not a generation problem.

### The pattern across three attempts

**Each round the two frames fail as a pair for a different reason, while looking
acceptable individually.** Attempt 1 it was scale — a macro corner against a wide field.
Attempt 2 it is **viewing angle** — a ~40° three-quarter start against a dead-on
orthogonal end, which would force roughly 40° of camera rotation in a shot whose prompt
says the camera does not pan, tilt or rotate and the sheet does not move.

**Check the pair before grading either frame.** Both images passing on their own is not
evidence they can produce a shot. The question to ask first is: *can a locked-off camera
get from A to B without moving?* If not, nothing else about either frame matters yet.

**Always fix the start frame, not the end frame.** The end frame's flat orthogonal view is
what gives the centred headline its empty upper third. That is load-bearing and should be
treated as fixed; the start frame is the free variable. Confirmed by attempt 3 — fixing
the start frame's angle cleared the mismatch in one generation.

**Know when the remaining gap stops being a generation problem.** Attempt 2's end frame
was aesthetically right and factually wrong (eight threads). Attempt 3 made it factually
right and aesthetically wrong. Two rounds of trading one for the other is the signal that
the last defect belongs in a retouching pass, not another prompt. The same applies to the
start frame's colour cast: a global cast on a flat surface is a levels adjustment, and
spending a generation on it is spending the expensive tool on the cheap problem.

**Re-read the craft rules before editing a prompt, not just before writing one.** Attempt
3 reintroduced negation-in-the-positive — the exact defect class a pass-19 audit had
already found and documented — into a prompt being edited to fix something else. Knowing
the rule is not the same as checking against it.

---

## What this sheet leaves out

- **Concept B's high-contrast variant** — for layouts where type does *not* sit over the film. Source doc §4d, "Concept B under the high-contrast variant".
- **The scroll-reveal version** — the same idea built in DOM at ~40 KB with zero generation risk. Source doc §4d, "Concept B as a scroll reveal". It is what the doc recommends over generating anything.
- **Concept A**, the four-shot desk film, and the five texture plates. Source doc §4, §4a, §4b.
