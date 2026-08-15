# Truly — hero motion, two paths

Supersedes `hero-video-brief.md`. That brief proposed slow camera moves across
static scenes; the objection was correct — nothing *happens* in them. This one is
built around an event, not a move.

Reference sites inspected live 2026-08-15 by querying the DOM, not from memory.
Thirteen sites measured so far; findings and prompts refined across seven passes
(see §8).

---

## 0. Start here

The document has grown. This is the operator's page — what to do, in order. Every
section reference is a jump target.

### If you are generating today

1. **Decide the layout first** (§1, "layout patterns"). A / C / D / E are genuinely
   different films, and the grades are not interchangeable. This choice gates
   everything below — and if you pick C, D or E, use **§4a**, not §4.
2. **Copy the style anchor** (§4, "the style anchor"). It is embedded in every prompt
   already; if you edit it, edit it everywhere **and re-run the consistency audit** —
   two passes have now caught a global anchor edit silently breaking individual
   prompts.
3. **Generate the six stills first** — Frames A–F (§4, "frames to generate first").
   Do not spend a video credit until these are locked. Frame F matters most: it is the
   held final frame, the `poster`, and on a slow connection the only thing anyone
   sees.
4. **On Shot 1, generate the long form and the short form on the same seed**
   (§4, "short-form variants"). Keep whichever register this model handles better and
   use it for every shot after. One extra generation, information you keep.
5. **Grade every generation against the rejection rubric** (§4). Eleven checks, all
   binary. Anything that fails one gets deleted, not fixed. Use **Tier 1 negatives**
   always (§4, "tiered negative prompts") and add Tier 2 only if the model takes them.
6. **When a generation is 80% right, follow the near-miss protocol** (§4) — one
   variable at a time, seed held, in the order given. This is where the time actually
   goes; changing three things at once moves you sideways.
7. **Generate Shots 1–4** (§4), each conditioned on its start and end frames. Shot N's
   end frame is Shot N+1's start frame.
8. **Finish and encode** (§4c). Trim first, strip audio with `-an`, two-pass VP9,
   poster from the **last** frame with `-sseof`. Ladder with `<source media>`,
   **largest breakpoint first** — §1, Mercury.

### If you want the single best return on effort

**Build Concept B as a scroll reveal** (§4d, "Concept B as a scroll reveal"). A résumé
that turns translucent as you scroll, revealing the evidence record underneath it. Two
layers, one mask, **~40 KB**, zero generation risk, and it re-uses `EvidenceChip`'s trace
and threads — code that already works. The visitor performs the reveal themselves, which
is the product's core action.

Added pass 17 and it is now what I would build ahead of either film.

### If you want the shortest route to something generated

**Generate Concept B (§4d) instead of the four-shot film.** One continuous shot, two
stills, no hands, no joins, and the camera angle models handle best — a résumé that
turns translucent to reveal the record underneath it. Added in pass 16 after a critique
of the desk concept's generation risk, and it is now what I would generate first.

Failing that: **generate Shot 4 alone** — the six threads converging into the card. Most
self-contained shot in the film, easiest to get right, carries the most meaning. Put it
in `03 — Judge`. A real asset for one generation's effort.

### If you are not sure a film is the right answer

Three cheaper things, in the order I would do them:

1. **Fix the typography** (§1, "Granola typography — measured"). Four one-line CSS
   changes. No weight, no generation, ships today, and it may be enough on its own.
2. **Steal Linear's grain and glow** (§1, Linear). Measured values, pure CSS, applies
   to the whole site.
3. **Build the diegetic report loop** (§7, "diegetic motion"). Six seconds, entirely
   DOM, re-uses `.ec-report` — which already exists and works.

None of those require a single generated frame, and the research in §1 says eight of
thirteen well-regarded sites ship no hero video at all.

### If you are building the scroll version

Go straight to **§5** for the beats and **§5b** for the implementation — layer
inventory, what moves over from `EvidenceChip.jsx`, the ScrollTrigger skeleton, and
the five traps. Budget ~22 KB.

### Map

| § | Contents | Lines |
|---|---|---|
| **1** | Fifteen sites measured — weights, layout patterns, responsive ladders, typography. **Research notes, not instructions.** | ~565 |
| **2** | Why AI video models struggle with this brief | ~25 |
| **3** | Palette and the six evaluator colours | ~25 |
| **4** | **Path 1 — the film.** Craft rules · style anchor · **near-miss protocol** · short-form variants · tiered negatives · two consistency audits · rejection rubric · **Shots 1–4** · **Frames A–F** · delivery | ~700 |
| **4a** | High-contrast variant — alternate Shot 1, deltas for Shots 2–4, **and Frames A–F** | ~125 |
| **4b** | **Path 1-C** — texture plates, the plate anchor, five plate prompts, `screen` compositing | ~205 |
| **4c** | Finishing and encoding — trim, concat, VP9, poster, checklist | ~105 |
| **5 / 5b** | **Path 2** — scroll beats, layer inventory, ScrollTrigger skeleton, traps | ~170 |
| **6** | Recommendation | ~30 |
| **7** | Idea pile | ~250 |
| **8** | Changelog | ~120 |

### ⚠ A note on this document's size

**2,523 lines / 23,360 words as of pass 15.** That is past the point where a single file
serves you well, and it is worth being honest about rather than continuing to grow it.

The specific problem: **§1 is 22% of the document and none of it is instructions.** It is
research — how fifteen other sites do this — and it sits between you and the prompts,
which do not start until roughly line 1030.

**Recommended split**, not yet performed:

| File | Contents | Who reads it |
|---|---|---|
| `hero-motion-research.md` | §1, §2, §7 — the measurements, the constraint, the idea pile | read once, refer back occasionally |
| `hero-motion-prompts.md` | §3, §4, §4a, §4b, §4c — everything you paste into a model | open every generation session |
| `hero-motion-scroll.md` | §5, §5b — the no-video path | only if you build Path 2 |

Say the word and I will split it. Until then everything remains here and the map above
is accurate.

---

## 1. What the reference sites actually ship

### Prism — `tryprism.com/candidates`

| Property | Value |
|---|---|
| Hero videos | 2 audiences × 2 quality tiers × 2 formats = **8 files** (nav toggle swaps audience) |
| Weight | **see the ladder below — desktop actually loads 5.11 MB, not 1.47 MB** |
| Attributes | `autoplay=false`, `loop=false`, `muted`, `playsInline`, JS-triggered play |
| Layout | `absolute inset-0 object-cover` — full-bleed behind the copy |
| CSS filter | `saturate(0.85)` — desaturated *in CSS* to sit inside the palette |
| Poster | `hero-candidates-hd-poster.jpg`, 1920×1080 |
| Section bg | `rgb(232,230,220)` `#E8E6DC`; inner `rgb(240,238,228)` `#F0EEE4` |

### ⚠ Correction, pass 10 — Prism's real weight

For eight passes this document quoted **1.47 MB** as Prism's hero weight. That is the
wrong file. Fetching every variant from `tryprism.com/landing/`:

| File | Size | What loads it |
|---|---|---|
| `hero-candidates.webm` | **1.47 MB** | the SD tier — *not* what desktop gets |
| `hero-candidates-hd.webm` | **5.11 MB** | ← **what the desktop `<video>` actually points at** |
| `hero-candidates-hd.mp4` | **6.66 MB** | HD fallback, Safari |
| `hero-employers.webm` | 1.28 MB | SD |
| `hero-employers-hd.webm` | 4.02 MB | HD |
| `hero-employers-hd.mp4` | 4.79 MB | HD fallback |
| `hero-candidates-hd-poster.jpg` | 274 KB | HD poster |
| `hero-candidates-poster.jpg` | 107 KB | SD poster |

I found the SD file first, by reading `currentSrc` in a **backgrounded tab where the
video never began loading**. The `<source>` list on the live desktop element contains
only the `-hd` pair. So desktop visitors get **5.11 MB**, or 6.66 MB on Safari — not
far off Mercury's 4.68 MB scrub hero.

**What this changes:** play-once is *not* dramatically cheaper than scrubbing at equal
quality. The 1.47 MB figure is achievable — it is a real file Prism ships — but it is
the **mobile tier**, and the doc was treating it as the desktop target. Corrected
throughout; see the revised ladder and delivery spec.

**What it doesn't change:** Superhuman's 1.71 MB is genuinely its desktop `-2x` file,
so a light play-once hero is still demonstrably possible. Prism simply chose not to.

**Method note for future passes:** `currentSrc` in a backgrounded tab is unreliable —
the browser may never select or load a source. Read the `<source>` children directly
and fetch every variant.

### Prism's ladder is JS; Mercury's is declarative

All eight of Prism's files carry `type` but **no `media` attribute**. The audience swap
*and* the quality tier are both chosen in JavaScript. Its poster is laddered too —
274 KB HD against 107 KB SD.

**Correction, pass 11:** I wrote last pass that no site measured uses `<source media>`.
That was wrong — **Mercury does, and does it properly.** See §1's Mercury entry for the
full pattern and the ordering rule.

Four things they do that are worth stealing outright:

1. **It plays once and stops.** `loop=false` with no restart. The film runs, then
   holds its final frame forever. No loop point to hide, no seam to punch.
2. **The film resolves toward the page background.** The poster — the first frame —
   is a *near-black* scene. A live screenshot mid-playback is *cream*, matching the
   container's own `rgb(240,238,228)`. So the film travels dark → cream, and the
   held final frame sits on the same value as the page around it: when it stops, the
   video stops reading as "a video" and starts reading as "the page."

   **Verification status — unresolved, and here is how to close it.** The dark → cream
   direction is confirmed from the poster and a live frame grab. The literal final
   frame value is **still an inference.** Two attempts to decode and sample it failed
   the same way: video decode is entirely suspended in a backgrounded tab, and the
   element never leaves `readyState: 0` no matter how long you wait. Not a codec
   problem, not a CORS problem — the platform simply does not decode video in a tab
   nobody is looking at.

   **You can settle it in ten seconds.** Open `tryprism.com/candidates` in a normal
   foreground tab, open the console, and paste:

   ```js
   const v = document.createElement('video');
   v.muted = true; v.src = 'https://tryprism.com/landing/hero-candidates-hd.webm';
   v.onloadedmetadata = () => { v.currentTime = v.duration - 0.08; };
   v.onseeked = () => {
     const c = document.createElement('canvas');
     c.width = v.videoWidth; c.height = v.videoHeight;
     c.getContext('2d').drawImage(v, 0, 0);
     const d = c.getContext('2d').getImageData(30, 30, 1, 1).data;
     console.log('last frame, top-left:', '#' +
       [d[0],d[1],d[2]].map(n => n.toString(16).padStart(2,'0')).join(''));
   };
   ```

   If it prints something close to `#f0eee4`, the technique is confirmed exactly as
   described and Frame F's spec is right. If it prints something darker, the film
   resolves *toward* the page colour without landing on it, and Frame F should be
   graded to match whatever it actually is.

   Either way the technique holds — this only changes how precisely you match the
   final frame. But it is the single best trick on any site in this document, so it is
   worth the ten seconds.
3. **The scrim is a targeted bloom, not a bar.** Above the video at `z-[3]`:
   ```
   radial-gradient(140% 80% at 30% 35%, rgba(255,255,255,0.75) 0%, rgba(0,0,0,0) 70%)
   ```
   A soft white light positioned at exactly the point the headline sits. Copy gets
   its contrast without flattening the whole frame.
4. **The page's dot grid is rendered *into* the video.** The same pattern appears
   in the film and in the CSS behind it, aligned. The seam between asset and page
   disappears.

Subject matter: a CV rendered as a physical sheet of paper planted upright in a
lush grassy hillside. Macro, shallow depth of field, dew on the grass. This is
**CGI, not filmed** — and almost certainly not text-to-video either.

### Mercury — `mercury.com`

| Property | Value |
|---|---|
| Hero | `hero-scrub-lg.mp4`, 1905×945, `autoplay=false`, `loop=false`, `paused` |
| Weight | **4.68 MB** |
| Playback | Scroll-scrubbed — position driven by scroll offset, not time |
| Below the fold | A **pinned stage**: `sticky h-screen` inside a **2363 px** track, so ≈1418 px of scroll drives it, cycling `flow_1…4.mp4` at **646 KB – 1.10 MB** each |

Composition: photoreal misty valley at dawn, a desk + chair + laptop planted on a
ridge, a path running to the vanishing point directly behind the headline. The
**top ~35% of frame is featureless haze**, which is the only reason white type
reads over it.

### Mercury's responsive ladder ★ the pattern to copy

Read from the live `<source>` children in pass 11. Mercury ships **three** scrub tiers
and selects between them declaratively:

| File | `media` | Size |
|---|---|---|
| `hero-scrub-lg.mp4` | `(min-width: 64rem)` | **4.68 MB** |
| `hero-scrub-md.mp4` | `(min-width: 40rem)` | **3.06 MB** |
| `hero-scrub-sm.mp4` | *none — unconditional fallback* | **2.29 MB** |

```html
<video muted playsinline preload="metadata" poster="poster.webp">
  <source src="hero-lg.webm" type="video/webm" media="(min-width: 64rem)">
  <source src="hero-md.webm" type="video/webm" media="(min-width: 40rem)">
  <source src="hero-sm.webm" type="video/webm">
  <source src="hero-sm.mp4"  type="video/mp4">
</video>
```

**The ordering rule is the part that bites.** `<source>` selection is *first match
wins*, so tiers must be listed **largest breakpoint first**, with the unconditional
fallback last. Reverse them and every visitor gets the small file. There is no
`max-width` involved and no "best match" logic — the browser takes the first `<source>`
whose `media` matches and whose `type` it can play, and never reconsiders.

Note also that `64rem`/`40rem` are used rather than pixels, so the breakpoints respond
to the user's root font size.

This corrects pass 10, which claimed no measured site used `<source media>`. It is the
cleanest of the three approaches seen — no JavaScript, no layout shift, and it composes
with the `type` fallback in the same element.

**The cost of scrubbing:** 4.68 MB against Superhuman's 1.71 MB play-once hero —
roughly 2.7×, though see the pass-10 correction: Prism plays once and still spends
5.11 MB, so this gap is partly a budget choice rather than purely a codec cost. Seeking
needs dense keyframes, so a scrub video can't be compressed like a play-once one.
If you scrub, budget for it.

### Linear — `linear.app`

**Zero `<video>`. Zero `<canvas>`. Zero sticky elements. 180 inline `<svg>`.**

The design benchmark in this category ships no video at all. Its entire "rendered"
quality comes from two composited CSS layers, and both are cheap enough to copy
tonight:

```css
/* the grain layer — sits inset 1px inside a rounded card */
.grain {
  position: absolute; inset: 1px; border-radius: 12px;
  background-image: url(<256px tiling noise png>);
  background-size: 256px 256px; background-repeat: repeat;
  mix-blend-mode: overlay; opacity: 0.6;
}
/* the glow layer — a soft 4% bloom, circular */
.glow {
  position: absolute; width: 400px; height: 400px; border-radius: 400px;
  background-image: radial-gradient(50% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 90%);
  mix-blend-mode: lighten;   /* some instances; others normal */
}
```

Those are the measured values, not approximations. `overlay` grain at 0.6 over a
flat colour is most of what separates "a div" from "a render". Truly already has a
`.grain` class on `.pipe-meta` — this says push it much further.

### Clay — `clay.com`

| Property | Value |
|---|---|
| Hero file | `Hero 06-02 Lossy 0001-0240.mp4` |
| Weight | **12.65 MB** |
| Attributes | `autoplay`, `loop`, `muted` — and **no `poster`** |
| Size | 1905×1072, full-bleed, top of page |

Two findings:

1. **The filename is a frame range.** `0001-0240` is Blender / Cinema4D render-output
   naming: 240 frames = **10 seconds at 24 fps**, with a "Lossy" compression pass in
   the name. This is direct evidence that the hero is a **3D render**, not filmed
   footage and not text-to-video. Same conclusion as Prism, but here it's spelled
   out in the filename.
2. **12.65 MB, looping, with no poster.** On a slow connection the visitor gets an
   empty box until the whole thing arrives. This is the anti-pattern; Prism does the
   same job in 1.71 MB.

**The layout, though, is the real find.** Clay's render occupies the top ~55% of the
viewport and the headline sits *underneath* it in a solid dark-green band. **The type
and the animation never overlap.** No scrim, no legibility compromise — and because
of that the render can be as busy, saturated and dense as it likes. It's a playful
claymation Rube Goldberg machine on a green hill, and it works precisely because
nothing has to be readable through it.

### Attio — `attio.com`

**Zero `<video>`. One real `<canvas>` (765×889). Five pinned scroll stages.**

The most directly useful Path 2 evidence found so far. Measured sticky stages and
the scroll tracks that drive them:

| Stage height | Track height | Ratio |
|---|---|---|
| 743 px | 1226 px | **1.65×** |
| 859 px | 1226 px | 1.43× |
| 743 px | 2148 px | **2.9×** |
| 743 px | **6066 px** | **8.2×** |

So the "use ~2.5×" calibration taken from Mercury is only the middle of the range.
Attio scales the track to how much story a section carries — a 1.6× track for a
two-beat reveal, an 8× track for a long sequential narrative. **Truly's split →
heal → trace → threads → verdict is a seven-beat story; it wants a 4–6× track, not
2.5×.** That is a concrete correction to §5.

Also runs `mix-blend-mode: multiply` on a content grid and `screen` on link
underlines — more evidence that blend-mode compositing is the current house
technique for making flat DOM feel rendered.

**And the hero has no visual at all.** Headline and sub on clean white, product
screenshot below the fold. All the motion lives in the pinned sections further down
the page.

### Ashby — `ashbyhq.com`

**Zero video. Zero canvas. Zero pinned stages.** An H1 reading "What an ATS should
be." and a static page beneath it.

This is your direct category, and it is visually empty.

### Metaview — `metaview.ai`

Direct competitor, AI-recruiting positioning ("AI agents for winning teams").

**No hero video.** Three videos total, all 269×326, all sitting at y≈5500–6200 — they
are customer logo/testimonial loops near the footer. Two canvases, no pinned stages,
no blend modes.

The second direct competitor in a row with no hero motion.

### Raycast — `raycast.com`

Widely held up as one of the best-crafted marketing sites in software. **Zero video.
Zero animated GIF or WebP. No pinned stages. No blend modes.** One 300×150 canvas at
default dimensions, likely unused.

What it has instead, measured live:

| Metric | Count |
|---|---|
| Elements with a CSS `transition` | **533** |
| Elements with a CSS `animation` | 23 |
| Animations running at load | 41 |
| Inline `<svg>` | 155 |
| `<img>` | 115 |

**533 transition-carrying elements** is the number that matters. Raycast's motion
budget is spent almost entirely on *micro-interaction* — hover, focus, enter, state
change — not on a set-piece. It is a completely different philosophy from Clay's
12.65 MB hero, and it is arguably the more expensive-feeling of the two.

### Granola — `granola.ai` ★ closest aesthetic sibling

**Zero video.** Four 300×150 canvases (default dimensions — likely a sparkline
library, not a render surface). Two pinned stages: a 945 px stage in a 1890 px track
(**2.0×**), and a 203 px rail in a 2572 px track (a progress indicator, not a stage).
92 transitions.

This is the most relevant reference found so far, and not because of its technique:

- **A very large near-black serif headline, left-aligned, on a warm cream field.**
  That is Truly's `--paper` plus Newsreader, almost exactly.
- **The visual sits to the right of the type, not behind it.** No overlap, no scrim,
  and the visual is still above the fold.
- **The only motion is a blinking text cursor inside a mock product window**, with
  note lines appearing beneath it.

That last point is the idea. The motion is **diegetic** — it happens *inside the
product*, not behind the headline. It costs nothing, it cannot drift, it says "this
thing is alive and working" rather than "we commissioned a film", and it is
impossible to mistake for stock footage.

Truly already has the exact equivalent built: `.ec-report` writes itself a row at a
time.

### Cursor — `cursor.com`

**One video on the entire page, and it is the 96×24 logo in the nav**
(`logo-dark-theme.mp4`). No hero video, no canvas, no pinned stages, 205 transitions.

Worth noting as a micro-idea in its own right: video deployed at the smallest
possible scale, for a single moment of life, rather than as a backdrop.

### Vercel — not measured

`vercel.com` redirected to a logged-in dashboard rather than the marketing site, so
there is no reading for it here. Not included in the scoreboard.

### Runway — `runway.com`

An AI **video generation** company. After scrolling the entire page to trigger lazy
loading: **zero `<video>` elements.** No canvas, no pinned stages, 63 transitions, and
13 static `.webp` images at 37–97 KB for 1920×1080-class dimensions.

If the company whose product is generated video does not put generated video on its
homepage, that is worth sitting with for a moment before commissioning one.

> **Correction, same pass:** I first counted those 13 files as *animated* images
> because I filtered on file extension. WebP can be either, and the extension does not
> tell you — 37 KB for 2100×900 is a still. They are static. Flagging it because the
> mistake is easy to repeat: never infer animation from a `.webp`/`.avif` suffix.

Animated WebP/AVIF *is* a real alternative to `<video>` — it uses `<img>`, so it
inherits `loading="lazy"`, `srcset` and `decoding="async"` free, and it sidesteps
autoplay policy entirely. But it compresses far worse than VP9 over long clips, it
cannot be scrubbed, and **it does not respect `prefers-reduced-motion`** without you
swapping the `src` yourself. Listing it as an option, not as observed practice.

### Superhuman — `superhuman.com` ★ confirms the play-once pattern

`hero-mail-desktop-2x.mp4`, **1.71 MB**, `autoplay = true`, **`loop = false`**, 640×150
sitting at y≈123 — right under the nav, wide and shallow rather than full-bleed.

**Autoplay with `loop = false` is the play-once-and-hold pattern**, independently
confirmed on a second site. Prism triggers it via JS; Superhuman just uses the
`autoplay` attribute. Either way the film runs once and the final frame stays.

Also ships `-2x` (retina) and `-desktop` (implying a separate mobile cut) in the
filename — the same responsive discipline Prism and Mercury show.

**Superseded by the pass-10 correction above.** Superhuman's 1.71 MB is a genuine
desktop file; Prism's 1.47 MB is its *mobile* tier and its desktop hero is 5.11 MB. So
this is one demonstrated light play-once hero, not two — but 1.71 MB remains the floor
worth aiming at, and it is a real file on a real site.

No poster, though. Both of the play-once sites that do this well are still leaving
that on the table, and §4c explains why the last frame is the one to use.

### Framer — `framer.com`

Five videos. The hero is 1200×673 at **y = 372** — *below* the headline, not behind
it — `loop = true`, **with a poster**, **3.87 MB**. Four more at 525×150 far down the
page (y 8719–10141) as inline feature demos.

A design-and-motion company choosing **Pattern C**: product film under the type, no
overlap, no scrim. And unlike Clay it ships a poster.

**Two implementation details worth taking** (read in pass 12):

1. **`preload="none"` on every video.** Not `metadata`, not `auto`. The browser fetches
   nothing until playback is requested — which is why 3.87 MB below the fold costs
   Framer nothing at first paint. This corrects the §4 delivery spec, which said
   `preload="metadata"` unconditionally. The rule should be:

   | Position | `preload` |
   |---|---|
   | Above the fold, want it ready | `metadata` |
   | Below the fold | **`none`**, plus an IntersectionObserver that calls `load()` as it approaches |

2. **No `<source>` elements at all** — a direct `src`, one tier. The *poster* is what
   Framer ladders, via `?w=` CDN query params. Ladder the poster or the video; Framer
   picked the poster, Mercury picked the video, Prism does both.

### Where responsive video actually stands

| Site | Mechanism | Tiers |
|---|---|---|
| **Mercury** | **`<source media>`, declarative** | 3 |
| Prism | JavaScript | 2 (× 2 audiences × 2 formats) |
| Framer | none for video; poster laddered by CDN query param | 1 |
| Superhuman | none | 1 |

Mercury is the only one doing it declaratively, so the pattern is uncommon — but it is
also plainly the best of the four, and being uncommon is not an argument against it.

### Granola typography — measured

Promised in pass 5. Every value read from the live page at a 1568 px viewport.

| | Granola | Truly (`src/index.css`) |
|---|---|---|
| Display face | serif ("quadrant") | serif (Newsreader) ✓ |
| **H1 size** | **104.7 px** | `clamp(42px, 6.6vw, 74px)` |
| **H1 weight** | **400** | **500** |
| **H1 line-height** | **0.93** | 1.04 |
| H1 tracking | −0.02em | −0.02em ✓ |
| **H1 measure** | **~10ch** | 17ch |
| **H2 size** | **160 px** | `clamp(32px, 4.4vw, 48px)` |
| H2 line-height | 1.00 | 1.08 |
| H2 tracking | −0.015em | −0.015em ✓ |
| **Body size** | **20 px** | 17 px |
| Small-text tracking | +0.01em | +0.14em on the eyebrow ✓ |

**The system is already right.** Serif display, negative tracking that scales with
size, positive tracking on small caps text, balanced wrapping. Those are the hard
parts and they are done.

**The execution is timid.** Four specific gaps:

1. **Scale.** Truly caps H1 at 74 px against Granola's 104.7 px, and H2 at 48 px
   against **160 px** — 3.3× smaller. Display type is where a paper-and-serif site
   earns its confidence, and Truly is leaving most of it on the table.
2. **Weight 500 vs 400.** At display sizes a serif at 400 reads editorial; at 500 it
   reads like marketing. This is a one-character change with a disproportionate
   effect.
3. **Line-height 1.04 vs 0.93.** Granola sets the H1 *below* 1, so ascenders and
   descenders interlock and the block reads as one shape. This is the single biggest
   lever on large serif type and it costs nothing.
4. **Measure 17ch vs ~10ch.** A narrower measure produces more lines, which produces
   more presence. 17ch at 74px is a wide, flat block; 10ch is a wall.

Filed here because it is a separate pass from the motion work — but if the goal is a
hero with more impact, **this is cheaper than any video and probably has a larger
effect**. Worth doing before anything is generated.

Note also that `.h1` currently carries `color: #fff` and
`text-shadow: 0 2px 30px rgba(10,26,20,0.3)` — both exist to survive the dark hero
mesh. Any move to a paper-coloured hero (Patterns C/D/E) has to revisit both.

### Layout Pattern E — type left, visual right

Granola's arrangement, and worth naming alongside C and D:

Headline and sub occupy the left half; the animated element sits in the right half.
No overlap, so no scrim and no featureless-region constraint — but unlike Pattern D
the visual is still above the fold doing work. For a centred-serif site like Truly
this is a real change to the hero's composition, but it is the version that keeps a
visual hook above the fold at the lowest risk.

### The scoreboard

| Site | Category | Video | Canvas | Pinned stages |
|---|---|---|---|---|
| Prism | hiring-adjacent | **2**, play-once | 0 | 0 |
| Mercury | fintech | **6**, scrub + flow | 0 | 4 |
| Clay | GTM | **9**, loop | 0 | 0 |
| Attio | CRM | 0 | 1 | **5** |
| Linear | dev tools | 0 | 0 | 0 |
| Raycast | dev tools | 0 | 1 (unused) | 0 |
| Cursor | dev tools | 1 — a 96×24 nav logo | 0 | 0 |
| Granola | AI notes | 0 | 4 (unused) | 2 |
| Ashby | **ATS — direct competitor** | 0 | 0 | 0 |
| Metaview | **AI recruiting — direct competitor** | 3 (testimonial loops, footer) | 2 | 0 |
| Gusto | HR | 0 | — | — |
| Anthropic | AI | 0 | — | — |

**Ten of twelve ship no hero video.** The two that do are fintech and GTM. Both
direct competitors ship none.

### Pinned-track ratios, collected

| Site | Stage | Track | Ratio |
|---|---|---|---|
| Attio | 859 px | 1226 px | 1.43× |
| Attio | 743 px | 1226 px | 1.65× |
| Granola | 945 px | 1890 px | 2.0× |
| Mercury | 945 px | 2363 px | 2.5× |
| Attio | 743 px | 2148 px | 2.9× |
| Attio | 743 px | 6066 px | **8.2×** |

Median around 2.3×; the long-narrative outlier at 8.2×. Truly's seven-beat sequence
belongs in the 4–6× band.

Two conclusions, and they point the same way:

1. **Motion is a differentiator in this category, not table stakes.** In fintech and
   GTM a cinematic hero is expected; in recruiting software nobody is doing it.
   A serious motion piece would make Truly the only one.
2. **It does not have to be video to do that.** Attio and Linear are the two
   best-regarded sites in the set and neither ships a frame of it.

### Layout Pattern D — no hero visual at all

Attio's hero is type on white. The visual story starts *below* the fold, in pinned
sections. This is worth naming because it removes an assumption that has been
running underneath this whole document: **the hook does not have to be in the hero.**

For Truly that is significant. The split → heal → trace → verdict narrative could
live exactly where `EvidenceChip` already sits — in `03 — Judge` — with the hero
staying as it is. That is the lowest-risk way to get the hook, and it puts the
motion where the argument actually is.

### The weight ladder

Corrected in pass 10. **Desktop** weights, which is what the `<video>` element on a
desktop viewport actually requests:

| Site | Playback | Desktop weight | Mobile tier | Poster |
|---|---|---|---|---|
| **Superhuman** | play once, hold last frame | **1.71 MB** | — | no |
| **Framer** | autoplay + loop, below the type | **3.87 MB** | — | yes |
| **Mercury** | scroll-scrubbed | **4.68 MB** (`-lg`) | **3.06 MB** md / **2.29 MB** sm | no |
| **Prism** | play once, hold last frame | **5.11 MB** webm / 6.66 MB mp4 | **1.47 MB** | yes, laddered |
| **Mercury** flow clips | pinned sequence, 4 files | 646 KB – 1.10 MB each | — | — |
| **Clay** | autoplay + loop, full-bleed | **12.65 MB** | — | **no** |
| **Linear / Raycast / Attio / Granola / Runway** | none | **0** | — | — |

**The earlier "play-once is 3× cheaper than scrubbing" conclusion does not survive.**
Prism plays once and still ships 5.11 MB. The real spread is 1.71 MB to 12.65 MB and it
tracks *how much the site chose to spend*, not the playback mode.

What playback mode genuinely determines:

- **Scrubbing forces dense keyframes** (`-g 1`), so a scrub file cannot be as small as a
  play-once file **of the same visual quality**. That part still holds — it is a codec
  fact, not an observation.
- **Everything else is a decision.** Superhuman does play-once in 1.71 MB; Prism does the
  same pattern in 5.11 MB. Same technique, 3× apart.

**The useful benchmark is therefore Superhuman, not Prism.** 1.71 MB for a desktop
play-once hero is the demonstrated floor, and the target §4 sets.

### The convergence worth noticing

Prism, Mercury and Clay all plant **a work artifact in a landscape** — a résumé in
grass, a desk on a ridge, a machine on a hill. All three are CGI. Prism and Mercury
desaturate and keep the top third empty; Clay avoids the problem entirely by not
overlapping the type. That is now a recognisable house style, which is an argument
for *not* doing a fourth grassy-hill render.

### Three layout patterns, named

| | Pattern | Type placement | Consequence |
|---|---|---|---|
| **A** | Prism / Mercury | over the film | needs a scrim; top 35–40% must stay low-detail |
| **B** | Mercury hero | over a scrub film | same as A, plus ~3× the weight |
| **C** | **Clay** | in a solid band *below* the film | **no constraint on the frame at all** |
| **D** | **Attio / Linear / Ashby** | no hero visual; motion lives below the fold | **the hero stays as it is** |
| **E** | **Granola** | type left, visual right | no overlap, but the hook stays above the fold |

Pattern C is worth serious thought. The "top third must be featureless" rule is what
strangled the earlier concepts — it forces every idea toward haze and emptiness. Drop
the overlap and the composition is free.

Pattern D is worth more thought still, because it is nearly free. See §1's Attio
notes: the hook does not have to be in the hero.

---

## 1b. Two constraints added by the site itself — pass 21

Both arrived from outside this document and both change what it can recommend.

### The evaluator chip has been removed from the page

`EvidenceChip` no longer renders anywhere. The `03 — Judge` section is back to six text
competency bars, and the component plus its `.ec-*` CSS remain in the repo as dead code.

**This invalidates an assumption the lead recommendation was resting on.** §4d's scroll
reveal was costed at ~40 KB partly because it "re-uses `EvidenceChip`'s trace and
threads — code that already works". That is no longer a free inheritance; it is a
resurrection of code the site's owner has just chosen to remove.

The recommendation survives, but the honest accounting changes:

| Was assumed | Now true |
|---|---|
| Trace + threads already built and debugged | Still *written*, but deliberately unrendered — reviving it is a decision, not a freebie |
| ~40 KB, mostly re-use | ~40 KB, but mostly **new work** |
| The visual language is already on the page | It is not. The reveal would introduce it, not extend it |

**And a question the removal raises that this document cannot answer:** the chip was
removed after being seen running. If the objection was to the *circuit-board metaphor*
rather than to that section having a visual at all, then the scroll reveal — which uses
the same traces, threads and marks — inherits the objection. If the objection was to
that section being animated, the hero is unaffected.

Worth resolving before building anything. §4d's Concept B still works with an entirely
different visual vocabulary if the board language is out.

### Implementation detail is now off-limits in the copy

The `01 — Extract` cards were rewritten on the same day to name **what signal each agent
looks for** rather than the technique used to find it — `OCR interpreter / Reads the
screen` became `Session activity / What was opened, run, and changed`, and a visual
label reading `frame every 20s` became `session timeline`.

The stated rule: **sources may be named, methods may not.** Video footage and code
repositories are acknowledged; OCR, vision sampling and capture cadence are not.

**Every concept in this document has to be checked against that**, because a hero is the
most visible copy on the site:

| Concept | Verdict |
|---|---|
| **Concept B — "What's Under the Page"** (§4d) | ✅ **Clean.** A claim, and the record underneath it. No mechanism visible anywhere, and the sheet is explicitly unreadable |
| **Concept B scroll reveal** | ✅ **Clean**, same reason |
| **Concept A — "The Desk Between Them"** (§4) | ⚠ **Check Shot 1.** It specifies a monitor showing "the suggestion of a diff", a phone glowing under the desk, and a screen reflection in a coffee cup. The diff is a *source* and probably fine; the phone and the reflection depict surveillance, which is closer to method — and to a candidate being watched, which is the least flattering reading of the product |
| **§4b texture plates** | ✅ **Clean.** Abstract by construction |

**The Shot 1 note is worth taking seriously.** "A phone glowing under the desk edge" and
"a second screen reflected in a coffee cup" were written to say *the candidate is
cheating*. Read differently — and a hero gets read quickly — they say *we can see your
phone*. Given the site has just moved deliberately away from describing what it
observes, that is the wrong note to open on.

This strengthens the case for Concept B independently of everything else in §4d.

---

## 2. The honest constraint on AI generation

You asked for a split-screen with a recruiter drowning in candidates on one side
and a candidate cheating on the other, resolving into the Truly solution. It is a
genuinely good idea. It is also close to the worst-case input for a text-to-video
model:

- **Split-screen composition** — models routinely ignore or bleed the divide.
- **Two consistent human characters** — identity drifts within a single clip.
- **A narrative turn** — models produce a *look*, not a *plot*. Nothing "becomes"
  anything else on request.
- **Legible artifacts** (a résumé, a timeline, scores) — text renders as gibberish.

Neither Prism nor Mercury generated their heroes from a prompt. Those are
directed 3D renders.

So the plan below does two things:

- **Path 1** keeps your narrative but breaks it into four shots, each of which is a
  single simple event a model *can* do, joined on deliberate hinge frames. It also
  removes people from frame — hands and objects only. That one change is worth more
  than any prompt wording.
- **Path 2** delivers the same narrative with no video at all, and it is the one I'd
  build first. Reasons in §5.

---

## 3. Palette (from `src/index.css`)

| Token | Hex | Role in the piece |
|---|---|---|
| `--paper` | `#FAF9F5` | **the end-frame background.** Everything resolves to this |
| `--panel` | `#F2F0E9` | secondary surface |
| `--ink` | `#1B1A15` | the opening near-black |
| `--screen` | `#171610` | screen surfaces |
| `--line` | `#E6E2D7` | hairlines, the split seam |
| `--faint` | `#97927F` | timestamps, secondary marks |
| `--green` / `--green-2` | `#14563E` / `#1E7A57` | the verdict, the resolve |

The six evaluator threads, matching the chip board exactly:

| Thread | Hex | Competency |
|---|---|---|
| moss | `#2F6B4A` | Planning |
| teal | `#1F6E75` | Architecture |
| plum | `#4A2F63` | Debugging |
| amber | `#C4762B` | Testing |
| clay | `#A6472F` | AI collaboration |
| green-2 | `#1E7A57` | Communication |

---

## 4. PATH 1 — "The Desk Between Them"

A play-once film, Prism's model: runs ~11s, never loops, holds its final frame,
and that final frame is `#FAF9F5`.

### The idea

One long desk shot from **directly overhead**, split down the middle by a hairline
of light. Both sides are performing, and neither is doing real work.

- **Left — the recruiter.** A tall stack of identical résumés. Hands slide them
  through, one after another, faster and faster. A rubber stamp comes down. The
  stack never gets shorter.
- **Right — the candidate.** A single résumé writing itself in perfect prose, too
  fast to be real. A phone glowing under the lip of the desk. A second screen
  reflected in a coffee cup.

Then the turn: the paper on both sides **dissolves into motes of light**, the seam
heals, and the motes re-form as something else entirely — a *timeline* of real
events laid down across the bare desk. Six coloured threads draw in from the
edges and land on specific events. Where they converge, a verdict card resolves,
each score joined by a hairline back to the event that produced it.

No faces. Hands, paper, light and desk only. That is a deliberate constraint —
it is what makes the thing generatable, and it also happens to be the honest
image: this product looks at *work*, not at people.

### Shot script

| Shot | Time | Beat | Hinge out |
|---|---|---|---|
| **1** | 0:00–0:03 | Overhead. Split desk, both sides performing, accelerating. Slow push in. | stack at its tallest, stamp mid-fall |
| **2** | 0:03–0:05 | Both sheets dissolve upward into drifting motes. Seam heals. | **near-white bloom** — the join frame |
| **3** | 0:05–0:08 | Motes settle into a horizontal trace across the bare desk: timestamped marks, drawing left to right. | trace complete, desk bare |
| **4** | 0:08–0:11 | Six coloured threads draw in, converge, verdict card resolves, background lifts to `#FAF9F5`. Hold. | **the end frame / poster** |

Generate each shot separately with start+end frame conditioning. Shot N's end
frame *is* shot N+1's start frame — that is what makes them join.

### Prompt craft rules used below

Every prompt in this document follows the same eight rules. Apply them to anything
you write yourself.

1. **Name the camera, lens and stock.** "ARRI Alexa, 40mm, T2.8, Kodak Vision3 500T"
   steers a model far harder than "cinematic".
2. **Specify the light as a setup**, not a mood: direction, quality, colour
   temperature, ratio. "Single 3200K practical from frame right, hard, 4:1 ratio."
3. **One motion verb, with a rate.** "Dolly in 30cm over 3 seconds." Not "the camera
   moves slowly."
4. **State what does NOT move.** Models animate everything unless told otherwise.
   This is the single highest-leverage line in a hero prompt.
5. **Materials get specification.** "Uncoated 120gsm cream stock with a deckle edge"
   beats "paper". "Quarter-sawn walnut with visible open grain" beats "wood".
6. **Describe negative space positively.** "The upper third is unbroken shadow" —
   not "leave the top empty."
7. **No abstract nouns.** A model cannot render *tension*, *authenticity* or
   *rigour*. Render the object that implies it.
8. **End with the frame contract**: aspect ratio, shot size, and the one-line
   description of the final frame.
9. **Give motion a curve, not just a speed.** Models default to linear, which is
   the one easing that never occurs in real camerawork. Say "decelerating to a
   complete stop over the final second", "at a constant rate with no ramp", "easing
   in from stillness". Every shot below now specifies one.
10. **Hold the seed.** Generate A–F at a fixed seed wherever the model exposes it,
    and change one variable at a time. With cost off the table the temptation is to
    fire twenty variations at once; that produces twenty unrelated images. Six
    consistent ones are worth more.
11. **Never negate in the positive prompt.** Negation belongs in the negative prompt,
    which is what it is for. A positive prompt saying `not more type but a record`
    reliably produces *type*, because the model reads the noun and largely discards the
    "not" — the same reason `don't think of an elephant` fails. Two fixes, in order of
    preference:
    - **State the positive form.** `nothing falls` → **`everything rises`**. Same
      constraint, no negated noun.
    - **Move it to the negative prompt.** If there is no positive phrasing, that is
      exactly the signal it belongs in the negative list.

    The exception is the *what-must-not-move* line, which is deliberate and earns its
    keep — but note it names motion, not objects to omit, so the model has nothing to
    accidentally render. Audited across every prompt in pass 19.

### The style anchor

Consistency across six stills and four shots is harder than any single frame, and
re-describing the look in each prompt is where drift creeps in — a slightly different
phrasing produces a slightly different world, and by Frame D you are in a different
film.

Fix it by never re-describing. Keep **one** style block, paste it verbatim into every
prompt, and let the per-shot text carry only what actually differs.

**The anchor — paste this unchanged into every image and video prompt:**

> **Style:** photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9.
> Muted, warm, low-saturation palette built on warm near-black #1B1A15, cream
> #FAF9F5, and faint grey-green #97927F; no other colour appears anywhere except
> where named above. Every object is used rather than new — worn edges, small scuffs,
> a faint ring stain on the wood — and nothing is arranged or styled for the camera.
> Fine 35mm film grain throughout. Soft
> shoulder, no crushed highlights. No faces, no bodies, no arms above the
> wrist, no readable text, no letters or numbers, no user interface, no logos.

Then the prompt body only says what changes: subject, lens, light, motion, what must
not move, and the final frame.

**How the prompts in this document use it**

Two ways to work, and this document commits to the second:

1. *Reference* — write short prompt bodies and paste the anchor separately each time.
   Cleaner to read, easy to forget a paste.
2. **Embedded** — every prompt below already carries the anchor's content inside it,
   phrased identically. Each prompt stays copy-paste-ready on its own, and
   consistency is guaranteed because the shared sentences are the same sentences.

**Rules**

- **The style sentences must be word-identical across prompts.** Not paraphrased, not
  reordered, not trimmed "because this one is a close-up". If you edit the anchor,
  edit it in every prompt in the set — that is the price of the embedded approach and
  it is worth paying.
- **Keep it in the same position** — the prompts here carry the style clauses in the
  final third, after subject and motion, before the frame contract. Position affects
  weighting in most models.
- **Only these vary between shots**, and nothing else should: lens focal length,
  subject, light setup, motion and its curve, what must not move, and the final-frame
  line.
- **§4a keeps a separate anchor.** `soft shoulder` becomes `hard shoulder, deep
  crushed blacks with no detail in shadow`, and the ratio becomes sixteen-to-one.
  Never mix the two inside one film.
- **§4b overrides the palette clause.** The plates replace it with `background is pure
  black #000000 with no gradient, no haze and no visible surface`. Plates are the one
  place the palette must *not* be specified, because the plate underneath supplies it.
- **Changing the anchor means re-generating everything.** A film with two style
  anchors in it reads as two films no matter how good the individual shots are.

This one discipline is worth more than any individual improvement to any individual
prompt in this document.

**Conformance status — complete as of pass 8.** Shots 1–4, Frames A–F and the five
§4b plates are all conformed. Every prompt now carries its style clauses word-identical
to its anchor, in the same position: after subject, light and motion, immediately
before the final-frame line. Shots and frames use the §4 anchor above; plates use the
plate anchor in §4b, which differs in exactly two controlled ways.

If you diff any two prompts in a set, the only differences should be lens, subject,
light, motion, what must not move, and the final frame. Anything else that differs is
a bug.

### The near-miss protocol

The rejection rubric handles the clear failures. It does not help with the case that
actually costs you time: a generation that is **80% right**. Those are the ones people
burn forty attempts on, because every attempt changes three things at once and the
result moves sideways rather than forward.

Cost is not a constraint here, so the temptation is to fire a dozen variations. Do the
opposite. **Change one variable, keep the seed, and keep a log.**

**Order of intervention** — work down this list, and stop at the first thing that
explains the miss:

| # | If the miss is… | Change **only** this |
|---|---|---|
| 1 | Composition — wrong framing, wrong scale, object in the wrong place | The **start frame**. Never fight composition in the video prompt; regenerate the still and re-condition. |
| 2 | Motion — too fast, too slow, wrong easing, drifts late | The **curve line** and the shot duration. Generate longer and trim rather than asking for slower. |
| 3 | Something moves that shouldn't | The **what-must-not-move** line — add the specific object by name. This is the highest-yield single edit in the set. |
| 4 | Light — flat, wrong direction, no falloff | The **ratio number**, one stop at a time. `four-to-one` → `eight-to-one`. Do not add adjectives. |
| 5 | Palette drift | The **negative prompt**, not the positive. Add the specific wrong colour you are seeing. |
| 6 | Materials look CGI — too clean, too plastic | The **material clause**. Name a specific defect: a chip in the mug glaze, a bent corner on the top sheet. |
| 7 | Nothing above explains it | *Now* change the seed. Not before. |

**Keep a log.** Four columns: seed, the one thing changed, what improved, what got
worse. Thirty entries in, that log is worth more than the generations — it is a map of
what this particular model responds to, and it transfers to every shot after.

**Two anti-patterns**

- **Adding words to fix a miss.** The instinct is to describe the problem away. Prompts
  get longer, dilution gets worse, and the fix that would have worked — deleting a
  contradicting clause — never gets tried. Before adding, re-read for something to
  remove.
- **Re-rolling the seed on a near-miss.** A generation that is 80% right is telling you
  the prompt is 80% right. A new seed discards that information entirely. Seed changes
  are for when the prompt is right and the draw was unlucky, which is rarer than it
  feels.

**When to stop.** A shot is done when it passes all eleven rubric checks and you cannot
name the next thing you would change. "It could be slightly better" is not a
specification and will not converge — if you cannot say *what* would be better, the
shot is finished and the remaining dissatisfaction belongs to a different shot.

### Short-form variants

The prompts in this document run 180–240 words. That is deliberate — detail is how you
get control — but it is not universally better. Some models dilute across a long prompt
and start dropping clauses; some cap input length; and a short prompt gives the model
more freedom, which is occasionally what a shot needs.

**Generate both.** Same seed, same shot, long form and short form, and compare. It costs
one extra generation per shot and it tells you which register that particular model
prefers — information you then have for every subsequent shot.

Each short form is the irreducible core: subject, the one move, the light, and the two
exclusions that matter most. Roughly 70 words.

**Shot 1 — short**

> Overhead plan view of a walnut desk split down the centre by a thin vertical hairline
> of light. Left: a leaning stack of identical cream sheets, bare hands pulling them off
> faster and faster, a wooden stamp mid-fall. Right: one pristine sheet, a cold blue
> phone glow, a mug with a screen reflection in the coffee. One hard warm light from
> frame right, everything else falling to near-black. Camera lowers slowly and steadily
> while the hands accelerate. 35mm film, low saturation, fine grain. No faces, no text.

**Shot 2 — short**

> Overhead, locked-off camera. Two cream paper sheets on a dark walnut desk come apart
> from their edges inward, fibres lifting off and rising as fine luminous motes. The
> hairline of light between them closes. Exposure lifts steadily until the frame blooms
> to a soft near-white. Weightless and constant; everything rises at a single even rate.
> 35mm film, warm, low saturation, fine grain. No hands, no faces, no text.

**Shot 3 — short**

> Overhead, locked-off camera. A soft white bloom resolves into a bare walnut desk.
> Drifting motes settle along one horizontal line and become small precise marks burned
> into the wood — short ticks, tiny squares, dashes — laying down strictly left to right
> at a fixed metronomic beat, never accelerating. Warm white cores with faint green
> halos. Once placed, nothing moves or fades. Warm key from frame right, volumetric dust.
> 35mm film, low saturation. No text, no interface.

**Shot 4 — short**

> Overhead, camera rising slowly and decelerating to a complete stop. A horizontal trace
> of small glowing marks runs across a dark walnut desk. Six straight threads of coloured
> light — moss green, teal, plum, amber, rust clay, forest green — draw inward from the
> frame edges, each stopping on a different mark, never crossing. Where they meet, a
> cream paper card resolves and fine hairlines grow down from it to link back. The
> background lifts to a flat warm off-white and holds. 35mm film, fine grain. No text,
> no interface.

### Tiered negative prompts

The negative lists in this document run 30–45 terms. Long negatives have the same
dilution problem as long positives, and some models weight every term equally — so a
list padded with unlikely failures actively weakens the terms that matter.

Use **Tier 1 always**. Add Tier 2 only if the model takes long negatives well, which you
will know after the first few generations.

**Tier 1 — never omit (10 terms)**

```
faces, readable text, letters, numbers, logos, watermark, extra fingers,
camera shake, lens flare, oversaturated
```

Every one of these is both *likely* and *fatal*: each maps directly to a line in the
rejection rubric, and none can be fixed after the fact.

**Tier 2 — add when there is room**

The per-shot lists already in §4. They are mostly guarding against things that would
merely be *wrong* rather than unusable — a tilted plane, a linear ramp, an
over-glossy surface.

**One term that is worth its weight everywhere:** `hard cut, second shot`. Models like
to insert an edit when a prompt describes a change of state, and a cut inside a shot
ruins the four-shot join more thoroughly than any grading error.

### Consistency audit — pass 9

Conforming the prompts created new problems, which is normal and worth recording. Every
prompt was re-read looking for instructions that contradict each other, because a
contradicted model does not error — it silently picks one and you never find out which.

**Fixed**

| Problem | Where | Fix |
|---|---|---|
| The anchor said the palette was **"restricted to"** three colours, then six prompts introduced `#1E7A57` or the six thread colours. A flat contradiction, in the highest-weighted sentence in the set. | anchor + Shots 2–4 + Frames C–F | Changed to **"built on … ; no other colour appears anywhere except where named above."** Now the accents are licensed rather than forbidden. |
| Four frame prompts opened with `Photorealistic still, 16:9` **and** closed with the anchor's `Photorealistic … 16:9`. Introduced in pass 8 by pasting the anchor onto prompts that already had those words. | Frames A, C, D, F | Openers trimmed; the anchor carries it. |
| §4a asks Shot 2 to `blow out cleanly to pure white` while the anchor forbids `crushed highlights`. | §4a deltas | Documented as the one legitimate within-set variation, with an instruction to delete the clause for that shot only. |

**Checked and deliberately left alone**

- **The plates repeat "pure black background" in both the opener and the anchor.** Kept.
  It is the single most important instruction in a plate, and reinforcement is worth
  more than concision.
- **Frame F says both `no visible light source` and `lit softly and evenly`.** Not a
  contradiction — soft even light with no visible source is an ordinary lighting
  description.
- **The anchor forbids `arms above the wrist` while Shot 1 requires hands.** Consistent
  by design: hands are in, arms are out, and the wrist is the stated cut line.
- **Line wrapping still differs between prompts** even though the words match. Harmless
  when pasted, since the wrapping is markdown presentation rather than content.

Run this audit again after any future edit to the anchor. Conforming prompts and
contradicting prompts look identical from a distance.

### Consistency audit — pass 19

Triggered by noticing an asymmetry: **the recommended concept had the least-refined
prompt.** Concept A's prompts went through eight passes of conforming, auditing and
tightening; Concept B was written in pass 16 and lightly touched in 17, then promoted to
lead. Auditing it against the same rules found a defect class the earlier passes had
missed entirely, present in *both* concepts.

**Negation in positive prompts.** Craft rule 11, added this pass. Every instance found
and fixed:

| Was | Now | Where |
|---|---|---|
| `is not more type but a record` | `is a record` | Concept B, long |
| `soft grey blocks of unreadable type` | `soft grey horizontal bars of varying length arranged in blocks, like a document seen from too far away to read` | Concept B long, short, and start frame |
| `The paper is opaque — nothing shows through it` | `The paper is fully opaque and evenly surfaced` | Concept B start frame |
| `nothing falls` | `everything rises` | Shot 2 long + short, Plate 1 long + short |
| `nothing falls, nothing accelerates` | `everything rises at a single even rate` | Shot 2 short |
| `the desk beneath is no longer readable` | `the desk beneath is lost in the light` | Shot 2 |

The `type` instances were the serious ones. A prompt that says *not more type* names
"type" twice inside a shot whose entire premise is that nothing is readable, while the
negative prompt separately forbids letters — so the model was being told to render text,
told not to, and left to pick. Exactly the silent-contradiction failure mode from
pass 9, in the one prompt now recommended first.

Replacing it with a *description of the visual form* — grey bars of varying length,
arranged in blocks, seen from too far away to read — gives the model something to draw
instead of something to avoid, and it happens to describe the real thing more
accurately.

### Consistency audit — pass 13

Ran immediately after replacing the anchor's abstract clause, per the rule above. The
replacement was renderable but **not universally applicable**, and it broke two prompts
on contact:

| Problem | Where | Fix |
|---|---|---|
| The new clause names *wood* and *objects*. Frame C is a featureless white field whose own text says `No objects, no horizon, no edges, no visible surface`. Pasting the clause in gave the model a direct instruction to render a wood surface in a frame defined by having none. | Frame C | Replaced with `There are no objects in frame at all.` |
| Frame F is a single card on flat off-white — no wood, no desk, and "worn edges and scuffs" on a pristine evidence card is the wrong note entirely. | Frame F | Replaced with a card-specific material line: `real uncoated stock with a very slightly irregular deckle edge and a visible paper tooth, not a clean digital rectangle. There is no wood and no desk in this frame.` |

**The lesson, which is the same one as pass 9 wearing different clothes:** a shared
clause improved in the abstract can be wrong in a specific frame. Every global edit to
the anchor needs a per-prompt read afterwards, not a diff. Two of eleven prompts needed
a bespoke variant — that is a normal rate, not a failure of the anchor idea.

### Rejection rubric

You said quality over iterations. That only works if you know what to throw away.
Reject a generation **on sight**, without deliberating, if any of these are true —
they cannot be fixed downstream and they will look worse at full size than in a
thumbnail:

| Reject if | Why |
|---|---|
| Any text, letters or numbers appear anywhere | Always garbled. Instantly reads as AI |
| A face, head, or arm above the wrist enters frame | Identity drift; also off-message |
| Hands have the wrong number of fingers, or duplicate | The classic tell |
| The camera moves when the spec says locked-off | Compounds across a four-shot cut |
| The horizon or desk plane tilts or rolls | Overhead plan view must stay orthogonal |
| Motion is linear with no easing | Reads as a slideshow, not a camera |
| The palette drifts cyan, magenta or blue-white | Will not match `--paper`; regrading loses the grain |
| Any lens flare, bloom ball or light streak | Not in the reference vocabulary |
| Marks in the trace flicker, drift or fade | They are evidence; evidence does not move |
| Threads cross each other in Shot 4 | Six independent evaluators. Crossing lies about the product |
| The final frame is not flat `#FAF9F5` | Kills the Prism hold-on-last-frame trick entirely |

Anything that passes all eleven is worth grading and finishing. Anything that fails
one gets deleted immediately, not "fixed in post".

### Shot 1 — the split desk

| | |
|---|---|
| **Shot size** | Overhead plan view, full desk width in frame |
| **Camera** | Static rig directly above, dolly down 25 cm across the shot |
| **Lens** | 40mm, T2.8, focus on the desk plane |
| **Light** | Single 3200K tungsten practical from upper frame-right, hard-ish, 4:1 ratio; ambient near-zero |
| **Moves** | The hands, the sheets, the stamp, the phone glow |
| **Must not move** | The desk, the centre hairline, the mug, the camera framing |
| **Curve** | Camera eases in from stillness over the first half-second, then constant. The *hands* accelerate throughout — that opposition is the shot |

> Overhead plan-view shot looking straight down at a long desk of quarter-sawn
> walnut with visible open grain, shot on ARRI Alexa with a 40mm lens at T2.8,
> Kodak Vision3 500T, 16:9. The desk fills the frame and is divided down the exact
> vertical centre by a single hairline of pale light, two millimetres wide, running
> the full height of the frame. Left of the hairline: a stack of nineteen identical
> sheets of uncoated 120gsm cream paper, leaning slightly, and one pair of bare
> hands sliding sheets off the top of the stack one after another at an increasing
> rate; a small wooden rubber stamp is caught mid-fall above the pile. Right of the
> hairline: one pristine sheet of the same cream stock lying flat and perfectly
> square to frame, a phone face-down-up at the frame edge casting a cold 6500K
> rectangle of light across the wood, and a matte ceramic mug of black coffee in
> which a small rectangular screen reflection is visible on the surface of the
> liquid. Lighting is a single 3200K tungsten practical from the upper right, hard,
> four-to-one ratio, with almost no fill; the wood falls to near-black at the frame
> edges. Shallow depth of field, with the desk plane sharp and the frame edges
> falling off.
> The camera lowers 25 centimetres over the length of the shot, easing in from
> complete stillness over the first half-second and then holding a constant rate,
> and does not pan, tilt or rotate. The hands, by contrast, accelerate steadily
> throughout the shot — the camera calm and the hands hurrying is the point of the
> composition. The desk surface, the hairline, the mug and the framing are
> completely still; only the hands, the sheets and the stamp move. The upper
> quarter of the frame is unbroken dark wood in shadow. Muted, warm, low-saturation
> palette built on warm near-black #1B1A15, cream #FAF9F5, and faint grey-green
> #97927F; no other colour appears anywhere except where named above.
> Fine 35mm film grain throughout. Soft shoulder, no crushed highlights.
> Every object is used rather than new — worn edges, small scuffs, a faint ring stain
> on the wood — and nothing is arranged or styled for the camera.
> No faces, no bodies, no arms above the wrist, no readable text, no
> letters or numbers, no user interface, no logos. Final frame: the stack at its
> tallest and leaning, the stamp still falling.

**Negative prompt:**
`faces, heads, bodies, portraits, arms above the wrist, readable text, legible
words, letters, numbers, handwriting, logos, watermark, UI, screens facing camera,
split-screen border, black bars, letterboxing, hard cut, second shot, camera shake,
handheld, zoom, dolly zoom, whip pan, rack focus, lens flare, bloom, oversaturated,
neon, teal-and-orange grade, HDR, clean digital look, plastic surfaces, clutter in
the upper quarter, symmetrical duplicate hands, extra fingers`

### Shot 2 — the dissolve

| | |
|---|---|
| **Shot size** | Identical framing to Shot 1's final frame |
| **Camera** | Locked off. Zero movement — this shot's power comes from the camera *not* reacting |
| **Lens** | 40mm, T2.8, focus holds on the desk plane then softens as the bloom rises |
| **Light** | Same 3200K key, joined by a rising self-luminous source from the paper itself |
| **Moves** | Paper fibres lifting; the hairline closing; overall exposure rising |
| **Must not move** | The camera, the desk, the mug. The hands are gone before frame one |
| **Curve** | Constant rate, no ramp anywhere. The dissolve must feel inevitable, not dramatic |

> Overhead plan-view shot looking straight down at a walnut desk, locked-off camera,
> ARRI Alexa, 40mm at T2.8, Kodak Vision3 500T, 16:9, continuing the previous shot
> with identical framing. Two sheets of uncoated cream 120gsm paper lying on the
> wood begin to come apart from their outer edges inward: individual paper fibres
> detach, lose weight and rise slowly upward out of the plane, becoming fine
> suspended motes that catch the light. The disintegration travels inward at a
> steady, even rate, like frost retreating. The two-millimetre hairline of light
> dividing the desk dims and closes from top and bottom toward the centre until it
> is gone. As the motes rise they become self-luminous, a warm white with a faint
> forest-green cast #1E7A57 in the densest part of the cloud, and the overall
> exposure lifts smoothly by about three stops until the frame blooms to a soft
> near-white and the desk beneath is lost in the light. Motion is weightless and
> continuous at a single constant rate; everything rises. Volumetric haze throughout. The
> camera does not move, pan, tilt or rack at any point. There are no objects in frame
> other than the paper, the mug and the desk. Muted, warm, low-saturation palette
> built on warm near-black #1B1A15, cream #FAF9F5, and faint grey-green #97927F; no
> other colour appears anywhere except where named above.
> Fine 35mm film grain throughout. Soft shoulder, no crushed highlights. Every object
> is used rather than new — worn edges, small scuffs, a faint ring stain on the wood —
> and nothing is arranged or styled for the camera. No faces,
> no bodies, no arms above the wrist, no readable text, no letters or numbers, no user
> interface, no logos. Final frame: an even, soft near-white field with a faint green
> cast at one edge and a few motes still visible.

**Negative prompt:**
`hands, faces, bodies, readable text, letters, numbers, logos, watermark, camera
movement, pan, tilt, zoom, shake, sparks, embers, fire, ash, smoke, explosion,
shattering, glass, particles falling downward, gravity, confetti, harsh white
flash, strobe, lens flare, oversaturated, neon, rainbow, HDR, hard cut, second
shot`

### Shot 3 — the trace

The rhythm change is the point of this shot. Shots 1 and 2 are organic and
accelerating; this one is metronomic. That contrast is what reads as *a machine
taking over from a performance*, and it is worth protecting in every generation.

| | |
|---|---|
| **Shot size** | Same overhead plan view, desk fills frame |
| **Camera** | Locked off |
| **Lens** | 40mm, T2.8, desk plane sharp |
| **Light** | The 3200K key returns from upper frame-right as exposure falls back |
| **Moves** | Motes settling; marks laying down left→right at a fixed interval |
| **Must not move** | Camera, desk, and the marks once placed — each is permanent |
| **Curve** | Strictly metronomic, zero easing. This is the only shot where linear is correct, and it is correct *because* it reads as machine rather than hand |

> Overhead plan-view shot looking straight down at a desk of quarter-sawn walnut,
> locked-off camera, ARRI Alexa, 40mm at T2.8, Kodak Vision3 500T, 16:9. The shot
> opens on an even soft near-white field, and over the first second the exposure
> falls back by three stops to reveal the bare desk beneath — no paper on it, no
> dividing line, nothing but wood grain and the single 3200K practical raking from
> the upper right. Fine suspended motes of warm light drift downward and settle
> along one horizontal line across the middle third of the desk. As each mote
> lands it becomes a small precise mark burned into the wood: a short vertical
> tick, a tiny filled square, a two-millimetre dash. The marks lay themselves down
> strictly left to right at a fixed, metronomic interval — one every eight frames,
> mechanical and even, never accelerating — building a continuous horizontal trace
> like a seismograph strip or a strip of exposed film. Each mark glows faintly, a
> warm white core with a pale forest-green halo #1E7A57, and once placed it never
> moves, flickers or fades. Volumetric dust hangs in the key light. Shallow depth of
> field, with the desk plane sharp. The
> camera does not move at any point. The upper third of the frame is unbroken dark
> wood in shadow. Muted, warm, low-saturation palette built on warm near-black
> #1B1A15, cream #FAF9F5, and faint grey-green #97927F; no other colour appears
> anywhere except where named above. Fine 35mm film grain
> throughout. Soft shoulder, no crushed highlights. Every object is used rather than
> new — worn edges, small scuffs, a faint ring stain on the wood — and nothing is
> arranged or styled for the camera. No faces, no bodies, no arms
> above the wrist, no readable text, no letters or numbers, no user interface, no
> logos. Final frame: the trace complete from left edge to right edge, every mark lit
> and still.

**Negative prompt:**
`hands, faces, bodies, readable text, letters, numbers, dates, handwriting, logos,
watermark, user interface, charts, graphs, screens, monitors, keyboards, camera
movement, pan, tilt, zoom, shake, flicker, strobe, pulsing, marks fading, marks
moving, uneven timing, sparks, fire, lens flare, oversaturated, neon, rainbow,
HDR, hard cut, second shot`

### Shot 4 — the resolve

This is the shot that carries the product, and the only one that must land
perfectly. It is also the most self-contained — if you generate nothing else,
generate this one and use it in `03 — Judge`.

The final two seconds are the Prism trick: the background lifts to `#FAF9F5`,
which is the page's own `--paper`. When the video stops, the frame *is* the site.

| | |
|---|---|
| **Shot size** | Overhead plan view, pulling back to reveal more desk |
| **Camera** | Rise 40 cm over 3 seconds. The only camera move in the whole film |
| **Lens** | 40mm → holds; depth of field opens as exposure lifts |
| **Light** | Key fades out; the six threads and the card become the only sources |
| **Moves** | Six threads drawing in; the card resolving; the background lifting |
| **Must not move** | The trace marks. They are the evidence — they stay exactly put |
| **Curve** | Threads advance at a constant rate and stop dead on their mark, no overshoot. Camera decelerates to a complete stop over the final second and holds absolutely still for at least twelve frames before the end |

> Overhead plan-view shot looking straight down at a desk of quarter-sawn walnut,
> ARRI Alexa, 40mm at T2.8, Kodak Vision3 500T, 16:9, continuing from the previous
> framing. A completed horizontal trace of small glowing marks runs left to right
> across the middle of the desk. Six perfectly straight threads of coloured light,
> each about one millimetre wide, draw inward from the six edges of frame at
> different angles — deep moss green #2F6B4A, teal #1F6E75, plum #4A2F63, amber
> #C4762B, rust clay #A6472F, and forest green #1E7A57 — advancing at a slow even
> rate. Each thread travels to and stops on one specific mark in the trace, never
> crossing another thread, and holds there. When all six have landed, the point
> where their light pools at the centre of frame resolves into a single clean
> rectangle of cream 120gsm paper #FAF9F5 lying flat and square to frame, its
> edges sharpening from soft to crisp. Six fine hairlines then grow downward from
> the underside of that card, each one reaching back to touch a different mark on
> the trace. Over the final two seconds the tungsten key fades out, the shadowed
> wood at the frame edges lifts smoothly and evenly, and the entire background
> brightens to a flat warm off-white #FAF9F5 with no visible grain gradient, until
> the wood is gone and only the cream card, its six hairlines and the six coloured
> thread-ends remain on a clean off-white field. Each thread advances at a constant
> rate and stops dead on its mark with no overshoot and no bounce. The camera rises
> forty centimetres across the whole shot, decelerating smoothly to a complete stop
> over the final second, then holds absolutely motionless for the last half-second;
> it does not pan, tilt or rotate at any point. The trace marks never
> move. Volumetric haze in the first half, clearing to nothing by the end. Muted,
> warm, low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5,
> and faint grey-green #97927F; no other colour appears anywhere except where named
> above, with the six thread colours as the only saturated
> elements. Fine 35mm film grain throughout. Soft shoulder, no crushed highlights.
> Every object is used rather than new — worn edges, small scuffs, a faint ring stain
> on the wood — and nothing is arranged or styled for the camera.
> No faces, no bodies, no arms above the wrist, no readable text, no
> letters or numbers, no user interface, no logos. Final frame: a flat #FAF9F5 field,
> one cream card slightly below centre, six thin hairlines and six small colour
> accents, everything else white.

**Negative prompt:**
`faces, hands, bodies, readable text, letters, numbers, percentages, handwriting,
logos, watermark, user interface, dashboards, charts, graphs, bar charts, screens,
crossing threads, tangled lines, laser show, light beams sweeping, strobe, flicker,
rainbow, prism, oversaturated, neon, HDR, dark vignette at the end, grey background,
blue-white background, cold white, camera shake, zoom, roll, hard cut, second shot`

### Frames to generate first

Six stills, in full. Generate all of these in an image model before spending a
single video credit — they cost almost nothing, they are what lock the piece, and
shot N's end frame **is** shot N+1's start frame, which is the only reliable way to
make four generations feel like one take.

Generate every frame at **16:9, 1920×1080 minimum**, and keep the same seed across
A–F wherever the model allows it.

#### Frame A — Shot 1 start

> Overhead plan view looking straight down at a long
> desk of quarter-sawn walnut with visible open grain. The desk is divided down the
> exact vertical centre by a single two-millimetre hairline of pale light running
> the full height of the frame. Left of the hairline: a leaning stack of nineteen
> identical sheets of uncoated cream 120gsm paper with slightly deckled edges, and
> one pair of bare hands, cropped at the wrist, sliding a single sheet off the top.
> Right of the hairline: one pristine sheet of the same stock lying flat and square
> to frame, a phone at the frame edge casting a cold 6500K rectangle of light across
> the wood, and a matte black ceramic mug of coffee with a small rectangular screen
> reflection on the surface of the liquid. Single 3200K tungsten practical from the
> upper right, hard, four-to-one lighting ratio, almost no fill, the wood falling to
> near-black at the frame edges. 40mm lens at T2.8, shallow depth of field with the
> desk plane sharp. The upper quarter of the frame is unbroken dark wood in shadow.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Muted, warm,
> low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5, and faint
> grey-green #97927F; no other colour appears anywhere except where named above. Fine
> 35mm film grain throughout. Soft shoulder, no crushed
> highlights. Every object is used rather than new — worn edges, small scuffs, a faint
> ring stain on the wood — and nothing is arranged or styled for the camera. No faces,
> no bodies, no arms above the wrist, no readable
> text, no letters or numbers, no user interface, no logos.

#### Frame B — Shot 1 end / Shot 2 start

> Identical composition, camera position, lighting and palette to the previous
> frame. The stack of cream paper is now at its maximum height and leaning
> noticeably to the left; a small wooden rubber stamp is suspended in mid-fall
> above it, motion-blurred. The hands have left frame. The outer edges of both the
> stack's top sheet and the single right-hand sheet have just begun to come apart
> into fine luminous paper fibres, lifting a few millimetres off the surface. The
> central hairline of light is still intact but slightly dimmer. Everything else —
> desk, mug, phone, framing — is exactly as before. Overhead plan view, 40mm lens at
> T2.8, shallow depth of field with the desk plane sharp.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Muted, warm,
> low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5, and faint
> grey-green #97927F; no other colour appears anywhere except where named above. Fine
> 35mm film grain throughout. Soft shoulder, no crushed
> highlights. Every object is used rather than new — worn edges, small scuffs, a faint
> ring stain on the wood — and nothing is arranged or styled for the camera. No faces,
> no bodies, no arms above the wrist, no readable
> text, no letters or numbers, no user interface, no logos.

#### Frame C — the hinge

Generate this deliberately. It is a real asset, not a transition effect — it is what
joins shots 2 and 3 invisibly, and it doubles as the safe splice point if a
generation drifts.

> An even, soft near-white field filling the entire
> frame, slightly warm rather than pure white, with a very faint forest-green
> #1E7A57 cast concentrated toward the lower right edge. A scattering of fine
> luminous motes is barely visible in the upper half, softly out of focus. No
> objects, no horizon, no edges, no visible surface. Volumetric haze, extremely low
> contrast, subtle vignette falloff of no more than a quarter stop.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Muted, warm,
> low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5, and faint
> grey-green #97927F; no other colour appears anywhere except where named above. Fine
> 35mm film grain throughout. Soft shoulder, no crushed
> highlights. There are no objects in frame at all. No faces,
> no bodies, no arms above the wrist, no readable
> text, no letters or numbers, no user interface, no logos.

#### Frame D — Shot 3 end

> Overhead plan view looking straight down at a bare
> desk of quarter-sawn walnut with visible open grain. No paper, no dividing line,
> nothing on the desk except a single continuous horizontal trace running left edge
> to right edge across the middle third of the frame: a row of small precise marks
> burned into the wood — short vertical ticks, tiny filled squares, two-millimetre
> dashes — spaced at even mechanical intervals. Each mark has a warm white core and
> a faint forest-green halo #1E7A57. Single 3200K tungsten practical raking from the
> upper right with visible volumetric dust in the beam. 40mm lens at T2.8, shallow
> depth of field with the desk plane sharp. The upper third of the frame is unbroken
> dark wood in shadow.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Muted, warm,
> low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5, and faint
> grey-green #97927F; no other colour appears anywhere except where named above. Fine
> 35mm film grain throughout. Soft shoulder, no crushed
> highlights. Every object is used rather than new — worn edges, small scuffs, a faint
> ring stain on the wood — and nothing is arranged or styled for the camera. No faces,
> no bodies, no arms above the wrist, no readable
> text, no letters or numbers, no user interface, no logos.

#### Frame E — Shot 4 mid

> Identical desk, trace and camera position to the previous frame. Six perfectly
> straight threads of coloured light, each about one millimetre wide, now reach in
> from the six edges of frame at different angles — deep moss green #2F6B4A, teal
> #1F6E75, plum #4A2F63, amber #C4762B, rust clay #A6472F, forest green #1E7A57.
> Each thread ends on one specific mark in the trace; no two threads cross. Their
> light pools at the centre of the frame, where a rectangle of cream 120gsm paper
> is half-resolved — its edges soft and not yet fully formed. The tungsten key has
> dimmed and the coloured threads are now the dominant light. Overhead plan view,
> 40mm lens at T2.8, volumetric haze.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Muted, warm,
> low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5, and faint
> grey-green #97927F; no other colour appears anywhere except where named above, with
> the six thread colours as the only saturated
> elements. Fine 35mm film grain throughout. Soft shoulder, no crushed highlights.
> Every object is used rather than new — worn edges, small scuffs, a faint ring stain
> on the wood — and nothing is arranged or styled for the camera.
> No faces, no bodies, no arms above the wrist, no readable text, no
> letters or numbers, no user interface, no logos.

#### Frame F — the end frame and `poster`

The most important still in the set. It is the frame the film holds on forever, the
image behind your headline before the video decodes, and on a slow connection it is
the *only* thing a visitor sees. Generate this one until it is right.

> A flat, even, warm off-white field #FAF9F5 filling the
> entire frame with no visible gradient, vignette or horizon. Slightly below centre,
> a single clean rectangle of uncoated cream 120gsm paper lies flat and square to
> frame, lit softly and evenly, casting only the faintest contact shadow. Six fine
> hairlines, each about half a millimetre wide, run downward from the underside of
> the card and end in six small colour accents — moss green #2F6B4A, teal #1F6E75,
> plum #4A2F63, amber #C4762B, rust clay #A6472F, forest green #1E7A57 — each no
> larger than three millimetres. Everything else in the frame is empty off-white.
> Extremely soft, minimal, generous negative space, low contrast, no visible light
> source. The upper half of the frame is completely empty, and there are no shadows
> anywhere other than the card's contact shadow.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Muted, warm,
> low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5, and faint
> grey-green #97927F; no other colour appears anywhere except where named above, with
> the six thread colours as the only saturated
> elements. Fine 35mm film grain throughout. Soft shoulder, no crushed highlights.
> The card is real uncoated stock with a very slightly irregular deckle edge and a
> visible paper tooth, not a clean digital rectangle. There is no wood and no desk in
> this frame.
> No faces, no bodies, no arms above the wrist, no readable text, no
> letters or numbers, no user interface, no logos.

**Negative prompt for all six frames:**
`faces, heads, portraits, bodies, arms above the wrist, extra fingers, readable
text, letters, numbers, handwriting, logos, watermark, signature, user interface,
dashboards, charts, graphs, screens facing camera, split-screen border, black bars,
letterboxing, tilted horizon, perspective view, three-quarter view, oversaturated,
neon, rainbow, teal-and-orange grade, HDR, clean digital render, plastic, glossy
surfaces, lens flare, bokeh balls, clutter`

### Delivery

| Item | Spec |
|---|---|
| Format | `.webm` VP9 primary + `.mp4` H.264 fallback (Prism ships webm) |
| Resolution | 1920×1080 desktop, separate 720p or portrait cut for mobile |
| Duration | 10–12s |
| Weight | **< 1.8 MB desktop, < 700 KB mobile** — Superhuman ships a desktop play-once hero at 1.71 MB. Prism spends 5.11 MB on the same pattern; do not use it as the benchmark |
| Quality ladder | **Three tiers via `<source media>`, largest breakpoint first, unconditional fallback last** — Mercury's pattern, §1. First-match-wins, so the order is not cosmetic |
| Attributes | `muted playsinline`, **no `loop`**, play once on intersect |
| `preload` | `metadata` above the fold; **`none`** below it, with an IntersectionObserver calling `load()` on approach — Framer's pattern, §1 |
| Poster | frame **F** as WebP |
| CSS | `object-fit: cover; filter: saturate(0.85);` — copy Prism |
| Scrim | steal the bloom: `radial-gradient(140% 80% at 50% 38%, rgba(250,249,245,0.78) 0%, rgba(250,249,245,0) 70%)` — centred, because your headline is centred |
| Reduced motion | render the poster only, never the video. Non-negotiable |

---

## 4d. Concept critique — and an alternative

Fifteen passes refined how "The Desk Between Them" is executed. None of them asked
whether it is the right concept. Doing that now, because the answer changes what you
generate first.

### Where the desk concept is weak

Honest list, and none of these were visible in pass 1:

1. **Overhead plan view is the riskiest camera in the set.** Models are markedly weaker
   at true top-down than at eye-level or macro — orthogonal framing drifts into
   three-quarter perspective, and the rubric already has to reject for a tilted plane.
   The whole film is built on the one angle most likely to wander.
2. **It needs hands.** Hands are the classic generation failure and the rubric rejects
   for finger errors. Shot 1 cannot be made without them, so every attempt at the
   opening shot carries the single highest-probability defect in the medium.
3. **The "candidate is cheating" half is coded in props** — a phone glow at the frame
   edge, a screen reflection in coffee. At hero scale behind a headline, cropped on a
   phone, that reads as *nothing*. The tension the concept is built on may simply not
   be legible.
4. **Four shots means three joins.** Each is a place the film can visibly break, and
   each needs its own hinge frame. Three opportunities to lose continuity.
5. **It is literal.** A desk standing for desks, paper standing for paper. It works, but
   it asks the viewer to read a small story rather than see one image.

None of that makes it a bad concept. It makes it an *expensive* one — and expensive in
generation risk, which is the currency that matters here even when money isn't.

### Concept B — "What's Under the Page" ★ lower risk, arguably stronger

**One continuous shot. No cuts, no joins, no hands, no people, no plan view.**

A single sheet of cream paper — a résumé — lies on dark wood. Pristine, perfectly
composed, and telling you nothing. Then light begins to come through it *from beneath*,
the way paper goes translucent held up to a window. What shows through is not more
text. It is the **record**: timestamped marks, a trace running left to right, six
coloured threads reaching in. The claim is on top; the evidence was underneath the
whole time. As the backlight strengthens the printed side fades out, the sheet
dissolves into the light, and only the record remains on flat `#FAF9F5`.

That is the product in one image, and it needs no story to be read.

**Why it is the safer generation**

| Desk concept | Under the Page |
|---|---|
| Four shots, three joins | **One shot, no joins** |
| Requires hands | **No hands, no people at all** |
| Overhead plan view | **Macro, slightly angled — the camera models handle best** |
| Tension coded in small props | **The whole frame is the idea** |
| Six stills to lock | **Two stills** |
| Mobile needs a re-shoot (§4b portrait note) | **Centred single subject — mobile is a crop** |

Backlit translucent paper is also a phenomenon models render *well*: it is
photographically common, visually distinctive, and has no anatomy in it to get wrong.

**What carries over unchanged:** the palette, the six thread colours, the trace
vocabulary, the style anchor, the rejection rubric, the near-miss protocol, §4c
encoding, and the flat `#FAF9F5` resolve. Nothing in this document is wasted by
switching — only Shots 1–3 and Frames A–E become unnecessary.

### Concept B — the prompt

| | |
|---|---|
| **Shot size** | Macro, sheet fills most of frame, angled ~15° off perpendicular |
| **Camera** | Locked off, then a very slight pull-back in the final third |
| **Lens** | 100mm macro at T2.8, focus on the paper surface |
| **Light** | Begins as one soft warm key from frame right; a second source rises *behind* the sheet and becomes dominant |
| **Moves** | The backlight rising; printed side fading; the record resolving through the fibres |
| **Must not move** | The sheet, the camera framing, and every mark once it has resolved |
| **Curve** | Backlight rises on a slow steady ramp with no flicker; camera decelerates to a complete stop and holds for the last half-second |

> Macro shot of a single sheet of uncoated cream 120gsm paper with a deckle edge lying
> on dark quarter-sawn walnut, the sheet filling most of the frame and angled about
> fifteen degrees off perpendicular. It begins lit only by one soft warm 3200K key from
> frame right, its printed surface carrying soft grey horizontal bars of varying length
> arranged in blocks, like a document seen from too far away to read. A second
> light then rises slowly from directly beneath the sheet and the paper becomes
> translucent, the way paper does when held up to a window — its fibres and grain
> lighting up from within. Showing through from underneath, in silhouette and glow, is
> a record: a horizontal trace of small precise marks running left to
> right, and six thin threads of coloured light reaching in from the edges of frame to
> touch individual marks — deep moss green #2F6B4A, teal #1F6E75, plum #4A2F63, amber
> #C4762B, rust clay #A6472F, forest green #1E7A57. As the backlight strengthens the
> printed side fades away entirely, the marks and threads sharpen, and the sheet's own
> edges dissolve into the light until the wood is gone and the frame settles to a flat
> warm off-white #FAF9F5 holding only the trace, the six threads and a faint paper
> tooth. The backlight rises on a slow steady ramp with no flicker or pulsing. The
> camera pulls back very slightly in the final third, decelerating to a complete stop
> and holding absolutely still for the last half-second; it does not pan, tilt or
> rotate. The sheet does not move, and no mark moves once it has resolved.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Muted, warm,
> low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5, and faint
> grey-green #97927F; no other colour appears anywhere except where named above, with
> the six thread colours as the only saturated elements. Fine 35mm film grain
> throughout. Soft shoulder, no crushed highlights. The paper is real uncoated stock
> with a visible tooth and a slightly irregular deckle edge, not a clean digital
> rectangle. No faces, no bodies, no arms above the wrist, no readable text, no letters
> or numbers, no user interface, no logos. Final frame: a flat #FAF9F5 field holding a
> horizontal trace of small marks and six thin coloured threads, everything else empty.

**Short form**

> Macro, locked camera. A single sheet of cream paper on dark walnut, angled slightly.
> Its printed surface carries soft grey bars of varying length, like a document seen
> from too far away to read. A light rises from beneath it and the paper turns
> translucent, glowing through its
> fibres. Showing through from underneath: a horizontal trace of small precise marks,
> and six thin threads of coloured light — moss, teal, plum, amber, clay, forest green
> — reaching in to touch them. The printed side fades, the sheet dissolves into the
> light, and the frame settles to flat warm off-white holding only the record. Slow
> steady ramp, no flicker. 35mm film, low saturation, fine grain. No hands, no text.

**Negative — Tier 1**

```
faces, hands, readable text, letters, numbers, logos, watermark,
camera shake, lens flare, oversaturated, hard cut, second shot
```

**Negative — Tier 2**

```
x-ray, medical scan, blueprint, tracing paper, vellum overlay, double exposure,
ghosting, glitch, scan lines, hologram, UI, dashboard, charts, graphs, crossing
threads, laser show, neon, rainbow, prism, strobe, flicker, pulsing, burning paper,
fire, embers, smoke, wet paper, torn paper, crumpled paper, blue-white light,
cold white, HDR, plastic surfaces, tilted horizon
```

Note `x-ray, medical scan, blueprint, hologram` at the top of Tier 2 — a translucency
prompt drifts toward those references faster than toward anything else, and they are the
one failure that would make the film read as a different product entirely.

### Concept B — the two frames

**Start frame**

> Photorealistic still, macro, of a single sheet of uncoated cream 120gsm paper with a
> deckle edge lying on dark quarter-sawn walnut, filling most of the frame and angled
> about fifteen degrees off perpendicular. Lit by one soft warm 3200K key from frame
> right at a four-to-one ratio; the wood falls to near-black at the frame edges. The
> printed surface carries soft grey horizontal bars of varying length arranged in
> blocks, like a document seen from too far away to read. The paper is fully opaque and
> evenly surfaced. 100mm macro lens at T2.8, shallow depth of field with the
> paper surface sharp. Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9.
> Muted, warm, low-saturation palette built on warm near-black #1B1A15, cream #FAF9F5,
> and faint grey-green #97927F; no other colour appears anywhere. Fine 35mm film grain
> throughout. Soft shoulder, no crushed highlights. The paper is real uncoated stock
> with a visible tooth and a slightly irregular deckle edge, not a clean digital
> rectangle. No faces, no bodies, no arms above the wrist, no readable text, no letters
> or numbers, no user interface, no logos.

**End frame — this is the `poster`**

> Photorealistic still, 16:9. A flat, even, warm off-white field #FAF9F5 filling the
> entire frame with no visible gradient, vignette or horizon. Across the middle third, a
> single horizontal trace of small precise marks — short ticks, tiny filled squares,
> two-millimetre dashes — spaced at even intervals. Six thin threads of coloured light,
> each about one millimetre wide, reach in from the edges of frame and end on individual
> marks, no two crossing: moss green #2F6B4A, teal #1F6E75, plum #4A2F63, amber #C4762B,
> rust clay #A6472F, forest green #1E7A57. A very faint paper tooth is visible in the
> off-white. Everything else is empty. The upper third of the frame is completely empty.
> Extremely soft, minimal, generous negative space, low contrast, no visible light
> source. Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. Fine 35mm
> film grain throughout. Soft shoulder, no crushed highlights. No faces, no bodies, no
> readable text, no letters or numbers, no user interface, no logos.

### Concept B, stress-tested — pass 17

Applying §7's rule immediately rather than after fifteen passes. Concept B's weaknesses,
found by attacking it the same way:

1. **Translucency is one effect, and if the model cannot do it the shot has nothing
   else.** The desk concept degrades — a weak Shot 2 still leaves three usable shots.
   Concept B is all-or-nothing on a single phenomenon. **Mitigation:** generate the two
   frames first and confirm the model can render backlit paper *at all* before spending
   anything on video.
2. **"Record showing through paper" may read as x-ray, blueprint or hologram** — three
   references that would make it look like a medical or engineering product. Already the
   top of Tier 2 negatives, but it is the likeliest single failure and worth watching in
   every generation.
3. **It loses the problem.** The desk concept shows the tension — a recruiter drowning, a
   candidate performing — before offering the resolution. Concept B shows only the
   resolution. It is a better *image* and a weaker *argument*, and the hero is where the
   argument usually starts.
4. **Nothing in it is specific to hiring.** A page revealing its underlying data could
   sell an audit tool, a compliance product, a BI dashboard. The desk concept could not
   be anything but hiring.
5. **One shot means no rhythm.** No contrast between organic and metronomic, no
   opposition of a still camera against hurrying hands — the thing §7 identifies as what
   makes a shot land.

**Points 3 and 4 are the serious ones.** They are also both solved by where you put it:
Concept B is a strong *hero* precisely because a hero should be one legible image, and
the argument then gets made by the page beneath it — including the desk concept's
tension, which `01 — Extract` and `02 — Assemble` already tell in DOM.

### Concept B as a scroll reveal ★ probably the best idea in this document

Concept B has a property the desk concept does not: **it is one continuous
transformation controlled by a single variable.** That makes it a near-perfect fit for
Path 2, and it needs no video at all.

The paper's translucency maps directly to scroll progress. **The visitor reveals the
evidence by scrolling** — they perform the product's core action with their own hand.
The desk concept's scroll version needed seven beats; this needs one.

**Structure — two layers, one mask**

```
.reveal-stage            position: sticky, 100vh, inside a ~2.5× track
  .reveal-record         the trace + six threads (inline SVG), sits underneath
  .reveal-sheet          the résumé (SVG or WebP), sits on top, opaque at 0%
```

Drive `.reveal-sheet` with scroll progress:

```js
gsap.timeline({
  scrollTrigger: { trigger: '.reveal-stage', start: 'top top', end: '+=250%',
                   pin: true, scrub: 1, anticipatePin: 1 },
})
  .to('.reveal-sheet',  { opacity: 0.15, duration: 0.55 })   // paper goes translucent
  .to('.reveal-record', { opacity: 1, duration: 0.55 }, '<') // record comes up beneath
  .to('.trace',  { strokeDashoffset: 0, duration: 0.25 }, 0.3)
  .to('.thread', { strokeDashoffset: 0, stagger: 0.03, duration: 0.3 }, 0.5)
  .to('.reveal-sheet',  { opacity: 0, duration: 0.15 });     // sheet dissolves entirely
```

**Why this may beat everything else here**

| | |
|---|---|
| Weight | **~40 KB** — two SVGs and a noise tile. No video, no frame sequence |
| Generation risk | **Zero.** Nothing is generated |
| The metaphor | The visitor *performs* the reveal. Scrolling **is** looking under the claim |
| Reduced motion | Set `progress(1)` and disable — the resting state is the finished state |
| Text | Stays real DOM: selectable, translatable, indexable |
| Editable | Change a competency name in 10 seconds, forever |
| Re-use | `.reveal-record` is `EvidenceChip`'s trace and threads — **but see §1b: the chip was removed from the page on 2026-08-15, so this is a revival, not an inheritance** |

**A refinement worth trying:** instead of animating `opacity` on the sheet, animate a
`mask-image` gradient so the translucency sweeps across the page rather than fading
uniformly — the light spreading, not the paper vanishing.

```css
.reveal-sheet {
  -webkit-mask-image: linear-gradient(160deg, transparent var(--sweep), #000 calc(var(--sweep) + 30%));
  mask-image: linear-gradient(160deg, transparent var(--sweep), #000 calc(var(--sweep) + 30%));
}
```
…then scrub `--sweep` from `120%` to `-30%`. Costs nothing extra and is much closer to
how backlit paper actually behaves.

**The technique is not exotic.** Measured in pass 18: **Attio uses `mask-image` 54 times
on its homepage** — edge-fade gradients on scrolling strips, a large soft radial for a
backdrop, and SVG-as-mask for logo recolouring. This is production CSS on a top-tier
site, not a trick.

**This is now what I would build first**, ahead of both films. It is the cheapest, the
lowest-risk, the most on-message, and it re-uses code that already works.

### The sheet — asset spec

The one asset this needs that does not already exist. Build it as **inline SVG**, not an
image: it has to be crisp at any size, recolourable from tokens, and cheap.

It is a résumé seen as a *shape*, never as readable text. Nothing on it should resolve
into words — that is the point, and it also keeps the asset honest.

| Element | Spec |
|---|---|
| Sheet | `#FAF9F5`, aspect 1:1.294 (A4), ~62% of stage height, rotated `-1.5deg` |
| Edge | 1 px `--line` `#E6E2D7` stroke, plus a `feTurbulence`-displaced path on two edges for a deckle feel |
| Shadow | single soft contact shadow, `0 2px 24px rgba(27,26,21,0.08)`. One shadow, not a stack |
| "Name" block | one `--ink` bar, 34% width, 14 px tall, top-left |
| "Contact" block | three `--faint` bars, 18–24% width, 4 px tall |
| Section headings | four `--muted` bars, 22% width, 7 px tall |
| Body lines | 5–7 `--faint` bars per section, 55–92% width, 3 px tall, 9 px apart. **Vary the widths irregularly** — evenly-stepped bars read as a wireframe, not a document |
| Photo well | one `--line` circle, 44 px, top-right |
| Texture | the Linear grain tile at `opacity: 0.35`, `mix-blend-mode: multiply` |

**The detail that makes it work:** the body-line widths must look like ragged prose. A
neat descending staircase reads as a placeholder; genuinely irregular lengths read as a
real document at a glance. Randomise once and hard-code the values — do not generate
them at runtime, or `ScrollTrigger.refresh()` will reshuffle the page mid-scroll.

### The record — asset spec

The other half of the reveal, and it mostly exists already: this is `EvidenceChip`'s
trace and threads, restaged.

| Element | Spec |
|---|---|
| Trace baseline | 1 px `--faint` `#97927F` line, ~72% stage width, centred, `pathLength="100"` |
| Marks | 14–18 glyphs on the baseline: 2 px × 7 px ticks, 4 px squares, 6 px × 2 px dashes. **Irregular spacing** — clustered where work was dense, sparse where it was not. A metronomic row reads as a ruler |
| Mark fill | `--ink`, each with a 3 px `--green-2` glow at 30% |
| Threads | six 1 px paths, `pathLength="100"`, `vector-effect="non-scaling-stroke"`, entering from the frame edges, each terminating on a specific mark. Colours exactly as §3 |
| Thread routing | orthogonal, like `.ec-trace` — one bend maximum, no diagonals, **no two crossing** |
| Score badges | reuse `.ec-score`: 30 × 18 rounded rect, `--screen` fill, `--hue` stroke |
| Labels | reuse `.ec-name` / `.ec-sees` sizing, but only fade them in past 70% progress — early on they compete with the headline |

**Two things to carry over from the chip, and one to leave behind:**

- **Carry:** `pathLength="100"` normalisation, so one dash spec drives every thread
  regardless of its real length. This is what makes the stagger clean.
- **Carry:** `vector-effect="non-scaling-stroke"`, so hairlines stay hairlines at every
  stage size.
- **Leave:** the `IntersectionObserver` `ec-live` gate. ScrollTrigger is the gate now;
  two gates fight, as §5b notes.

**The irregular-spacing point matters as much here as the ragged line widths do on the
sheet.** Evenly spaced marks read as a measuring scale — a generic data motif. Clustered,
uneven marks read as *a record of a real session*, which is the entire claim the product
makes.

**And a bonus technique from the same Attio measurement**, unrelated to the hero but
worth having: they recolour monochrome logos with `mask: url(logo.svg); background:
currentColor; mask-size: contain`. One asset, every colour, no variants — useful for
Truly's customer logos and any icon set.

### Which to generate

**Concept B first.** One shot against four, two stills against six, no hands, and the
camera angle models are best at. If it lands, you have a hero for a fraction of the
generation risk. If it does not, the desk concept is still fully specified above and
nothing is lost.

The desk concept remains the better *story*. Concept B is the better *image*, and a hero
is an image.

**But read the scroll-reveal section above before generating anything at all.** Concept B
built as a scroll interaction costs ~40 KB, carries zero generation risk, re-uses
`EvidenceChip`, and makes the visitor perform the reveal themselves. If that lands, the
film becomes optional — and if you still want one afterwards, its end frame is already
specified above and doubles as the poster.

### Concept B under the high-contrast variant

If you commit to Pattern C, D or E, swap in Concept B's prompts:

- `four-to-one ratio` → **`sixteen-to-one ratio with no fill`**, applied only to the
  *front* key. The backlight is unaffected — it is the subject.
- `Soft shoulder, no crushed highlights` → **`hard shoulder, deep crushed blacks with no
  detail in shadow`** for the opening state. Delete `no crushed highlights` for the
  final third, where the backlight is meant to blow through.
- Add: **`the wood surrounding the sheet is pure black with no detail whatsoever`** —
  under Pattern C the sheet can float in nothing, which is a stronger opening image than
  a lit desk and removes a whole class of drift.
- The end frame is **unchanged**. Same reason as Frame F: it is the join to the page.

The high-contrast version of Concept B is the most striking single image this document
describes — a sheet of paper alone in blackness, lit from behind, with a record burning
through it.

---

## 4a. The high-contrast variant — for Patterns C, D and E

Everything in §4 is written defensively, because Pattern A puts type over the frame:
low saturation, soft contrast, an empty upper third, slow motion only. Under Patterns
C, D or E **none of those constraints apply** — nothing has to be readable through
the image.

That is worth a great deal. The defensive version is tasteful; this one can be
striking. Do not generate both blind — decide the layout first, because the two
grades are not interchangeable and a soft frame cannot be pushed hard in post
without the grain falling apart.

### What changes

| | §4 defensive | High-contrast variant |
|---|---|---|
| Lighting ratio | 4:1 | **16:1**, near-total falloff |
| Upper third | must stay empty | **free** — put the stack there |
| Saturation | low throughout | low in the world, **full** on the six threads |
| Framing | full desk, breathing room | **tight macro**, objects cropped by frame edges |
| Camera | slow, minimal | **still allowed to be slow — but closer, so it reads faster** |
| Contrast | soft shoulder | **hard shoulder**, true blacks, specular highlights |

### Alternate Shot 1 — full prompt

The one worth generating first, because drama is where the defensive version is
weakest.

| | |
|---|---|
| **Shot size** | Tight overhead macro. The stack fills the left third; frame crops it |
| **Camera** | Locked off entirely. At this scale any move reads as a lurch |
| **Lens** | 100mm macro, T2.8, focus on the top sheet of the stack only |
| **Light** | Single hard 3200K source from frame right, **16:1**, no fill, no bounce |
| **Moves** | Sheets leaving the stack; the stamp; the cold phone glow pulsing |
| **Must not move** | Camera, desk, hairline, mug |
| **Curve** | Sheets accelerate steadily throughout. Nothing else has a curve at all |

> Tight overhead macro shot looking straight down at a desk of quarter-sawn walnut,
> shot on ARRI Alexa with a 100mm macro lens at T2.8, Kodak Vision3 500T, 16:9,
> locked-off camera with absolutely no movement. A single hairline of pale light two
> millimetres wide runs vertically down the exact centre of frame. Left of it, filling
> the left third and cropped by the top and bottom edges of frame, a leaning stack of
> identical sheets of uncoated cream 120gsm paper with deckle edges; bare hands
> cropped at the wrist pull sheets off the top at a steadily accelerating rate, and a
> wooden rubber stamp falls into frame from above. Right of the hairline, a single
> pristine sheet lies square to frame beside a matte black ceramic mug, lit only by a
> hard cold 6500K rectangle thrown across the wood by a phone just outside the frame,
> which pulses very slightly. Lighting is one hard 3200K tungsten source from frame
> right at a sixteen-to-one ratio with no fill and no bounce: the paper is brilliant,
> the wood grain is raked into sharp relief, and everything beyond a few centimetres
> falls to true black with no detail whatsoever. Hard shoulder, deep crushed blacks,
> specular highlights on the mug glaze and the stamp's steel, heavy 35mm grain, very
> shallow depth of field with only the top sheet of the stack critically sharp.
> Muted palette in the world — warm near-black #1B1A15, cream #FAF9F5 — with the
> phone's cold blue the single cool note. Nothing moves except the sheets, the hands
> and the stamp. Final frame: the stack at maximum height and leaning hard, the stamp
> mid-fall, one sheet caught in the air. No faces, no arms above the wrist, no
> readable text.

**Negative:** same list as §4 Shot 1, minus `clutter in the upper quarter` — that
constraint is deliberately lifted here — and plus `flat lighting, even lighting,
soft light, fill light, lifted blacks, washed out, low contrast, grey blacks, HDR`.

### Deltas for Shots 2–4

Do not rewrite them. Swap these lines:

- **Everywhere:** replace `four-to-one ratio` with `sixteen-to-one ratio with no
  fill`, and `soft shoulder` with `hard shoulder, deep crushed blacks with no detail
  in shadow`.
- **Everywhere:** replace `40mm at T2.8` with `100mm macro at T2.8` and add
  `objects cropped by the frame edges`.
- **Shot 2:** the bloom can go to **pure white**, not soft near-white — under Pattern
  C there is no type to protect, so the exposure can genuinely blow out. Change
  `blooms to a soft near-white` to `blows out cleanly to pure white`.
  **And in Shot 2 only, delete `no crushed highlights` from the anchor** — blowing out
  to pure white *is* crushing the highlights, and leaving both instructions in gives
  the model a direct contradiction to resolve however it likes. This is the one place
  the §4a anchor legitimately varies within its own set; note it and move on.
- **Shot 3:** delete `The upper third of the frame is unbroken dark wood in shadow.`
  Replace with `The trace runs across the full width of frame and the marks are
  brilliant against true black.`
- **Shot 4:** replace `low saturation` with `the six threads at full saturation
  against a desaturated world` — the colour is the payoff and Pattern C lets you
  have it.

### Frames A–F under the high-contrast variant

§4's six stills are written for the defensive grade. If you commit to Pattern C, D or
E, regenerate all six with these swaps — the stills carry the grade, and conditioning a
hard-lit shot on a soft-lit frame will fight you the whole way.

**Swap in every frame:**

- `four-to-one lighting ratio, almost no fill` → **`sixteen-to-one lighting ratio with
  no fill and no bounce`**
- `Soft shoulder, no crushed highlights` → **`hard shoulder, deep crushed blacks with
  no detail in shadow, specular highlights allowed`**
- `40mm lens at T2.8` → **`100mm macro lens at T2.8`**
- Add to the composition line: **`objects cropped by the frame edges`**

**Per-frame, beyond the swaps:**

| Frame | Change |
|---|---|
| **A** | Delete `The upper quarter of the frame is unbroken dark wood in shadow.` Replace with `The stack fills the left third and is cropped by the top edge of frame.` The empty-top constraint is the whole reason to switch grades — do not carry it over. |
| **B** | As A. The leaning stack should now dominate. |
| **C** | `soft near-white` → **`pure white #FFFFFF`**, and delete `no crushed highlights` — see the Shot 2 note above. The hinge can genuinely blow out. |
| **D** | Delete the empty-upper-third line. Replace with `The trace runs the full width of frame, brilliant against true black.` |
| **E** | `the coloured threads are now the dominant light` → **`the coloured threads are the only light in frame`**. Everything not touched by a thread is true black. |
| **F** | **Unchanged.** Still flat `#FAF9F5`, still soft, still empty in the upper half. |

Frame F not changing is the point, and it is worth restating: under Pattern C the film
sits directly above a solid band of page colour, so the resolve to paper-white is the
join between the two. Push every other frame as hard as you like; that one is load-bearing.

### One thing that does *not* change

The final frame is still flat `#FAF9F5`. Under Pattern C the film sits above a solid
band of page colour, so the resolve to paper-white is what stitches the two together.
Push everything else; leave that alone.

---

## 4b. PATH 1-C — texture plates and compositing

The underrated middle route, flagged in the idea pile and now specified. Instead of
asking a model for a whole scene — which is where identity drift, garbled text and
palette wander come from — ask it only for the **organic elements models are
genuinely excellent at**, shot on pure black, and composite them yourself over flat
brand-coloured plates.

### Why this beats a full-scene generation

- **You own the palette.** The plate underneath is literally `#FAF9F5`. The model
  never gets a vote on your brand colours.
- **You own the composition.** Position, scale and timing are CSS, changeable in
  seconds, not another generation.
- **Nothing to get wrong.** No hands, no faces, no text, no furniture — none of the
  eleven rejection criteria can even occur.
- **Tiny.** A 4-second black-background element loop compresses far below a
  full-frame scene. Several plates together still land under Superhuman's 1.71 MB.
- **Reusable.** One dust plate serves the hero, `03 — Judge`, and the CTA.

### The compositing recipe

Render every plate on **pure black `#000000`**, then:

```css
.plate {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  mix-blend-mode: screen;   /* black becomes fully transparent */
  opacity: 0.9;
}
```

`screen` maps black to transparent and leaves only the luminous element. This is the
same family of trick as Linear's `overlay` grain and `lighten` glow, measured in §1.
For dark-on-light elements — an ink bleed, a shadow, a paper fibre in silhouette —
render on pure **white** and use `mix-blend-mode: multiply` instead.

Do **not** ask a model for a transparent background or an alpha channel. Ask for
pure black and let the blend mode do it.

### The plate anchor

The plates use their own anchor, embedded word-identically in each prompt below. It
differs from the §4 anchor in exactly two ways: **the palette clause is replaced by
the black-background clause**, because the plate underneath supplies the colour, and
**locked-off camera is mandatory**, because a plate that drifts cannot be composited.

> **Plate style:** photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9.
> The background is pure black #000000 with no gradient, no haze, no vignette and no
> visible surface or horizon. Fine 35mm film grain throughout. Locked-off camera with
> absolutely no movement, no pan, no tilt, no zoom and no rack focus. No faces, no
> bodies, no arms above the wrist, no readable text, no letters or numbers, no user
> interface, no logos.

Plate 5 is the inverse case and swaps `pure black #000000` for `pure flat white
#FFFFFF`; everything else in the block is unchanged.

### Plate 1 — paper fibre dissolve

The Shot 2 element, isolated.

> Macro video on a pure black background, no set, no environment, nothing else in
> frame. A single sheet of uncoated cream 120gsm paper with a deckle edge, lit only
> by a soft warm light, begins to come apart from its outer edge inward: individual
> paper fibres detach, lose weight, and rise slowly upward out of the plane as fine
> luminous filaments and motes. The disintegration travels inward at a constant even
> rate with no acceleration and no ramp. Everything rises. The
> background is pure black #000000 with no gradient, no haze, no vignette, and no
> visible surface or horizon. Warm white and faint forest-green #1E7A57 highlights
> in the fibres. 100mm macro lens at T2.8, shallow depth of field. There are no
> objects in frame other than the paper.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. The background is
> pure black #000000 with no gradient, no haze, no vignette and no visible surface or
> horizon. Fine 35mm film grain throughout. Locked-off camera with absolutely no
> movement, no pan, no tilt, no zoom and no rack focus. No faces, no bodies, no arms
> above the wrist, no readable text, no letters or numbers, no user interface, no
> logos. Final frame: an empty pure-black field with a handful of motes still drifting
> upward.

**Negative:** `background detail, environment, room, desk, table, surface, horizon,
gradient background, grey background, haze, fog, vignette, hands, faces, text,
letters, sparks, embers, fire, ash, smoke, explosion, shattering, particles falling
downward, confetti, camera movement, zoom, pan, flicker, strobe, colour shift`

### Plate 2 — dust in a light beam

Ambient life. Layer this at 30–50% opacity over almost anything.

> Macro video on a pure black background. Fine suspended dust motes drift slowly
> through a single soft shaft of warm 3200K light entering from the upper right at
> roughly forty degrees. The motes move at varying speeds with gentle random
> drift, some in focus and sharp, most far out of focus as soft round bokeh.
> No surfaces, no objects, no horizon — only the beam and the dust. Constant rate, no
> events, no beginning and no end, designed to loop seamlessly. 100mm macro lens at
> T2.0, heavy shallow depth of field.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. The background is
> pure black #000000 with no gradient, no haze, no vignette and no visible surface or
> horizon. Fine 35mm film grain throughout. Locked-off camera with absolutely no
> movement, no pan, no tilt, no zoom and no rack focus. No faces, no bodies, no arms
> above the wrist, no readable text, no letters or numbers, no user interface, no
> logos.

**Negative:** `objects, surfaces, room, walls, horizon, gradient, grey background,
haze wall, lens flare, light streaks, god rays with hard edges, snow, rain, sparks,
fire, text, people, camera movement, strobe, flicker, colour shift`

### Plate 3 — the six threads

The Shot 4 element, isolated — and the single most reusable plate, because it is
the visual signature of the evaluator board.

> Motion graphic on a pure black background #000000. Six perfectly straight threads
> of coloured light, each about one millimetre wide with a soft falloff, draw inward
> from the six edges of frame at different angles and converge toward a single point
> slightly below the centre. Thread colours, in order: deep moss green #2F6B4A, teal
> #1F6E75, plum #4A2F63, amber #C4762B, rust clay #A6472F, forest green #1E7A57.
> Each thread advances at a constant even rate and stops dead at its destination
> with no overshoot, no bounce and no pulsing. No two threads cross at any point.
> Once a thread has stopped it holds perfectly still and does not flicker or fade.
> Extremely clean and precise, with no glow or bloom around the threads.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. The background is
> pure black #000000 with no gradient, no haze, no vignette and no visible surface or
> horizon. Fine 35mm film grain throughout. Locked-off camera with absolutely no
> movement, no pan, no tilt, no zoom and no rack focus. No faces, no bodies, no arms
> above the wrist, no readable text, no letters or numbers, no user interface, no
> logos. Final frame: six still threads meeting at a point, everything else black.

**Negative:** `crossing lines, tangled lines, curved lines, wavy lines, laser show,
light show, neon, rainbow, prism, glow bloom, lens flare, sparks, particles,
strobe, flicker, pulsing, breathing, background gradient, grey background, haze,
text, numbers, UI, charts, camera movement, zoom`

### Plate 4 — the trace writing itself

> Macro video on a pure black background. A single continuous horizontal line of
> small precise marks writes itself strictly left to right across the frame: short
> vertical ticks, tiny filled squares, two-millimetre dashes, appearing one at a
> time at a fixed metronomic interval of one every eight frames, never accelerating.
> Each mark has a warm white core with a faint forest-green halo #1E7A57. Once a
> mark appears it holds perfectly still and never flickers, drifts or fades. The
> marks have no surface or texture beneath them.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. The background is
> pure black #000000 with no gradient, no haze, no vignette and no visible surface or
> horizon. Fine 35mm film grain throughout. Locked-off camera with absolutely no
> movement, no pan, no tilt, no zoom and no rack focus. No faces, no bodies, no arms
> above the wrist, no readable text, no letters or numbers, no user interface, no
> logos. Final frame: the complete trace from left edge to right edge, every mark lit
> and still.

**Negative:** `text, letters, numbers, dates, handwriting, UI, charts, graphs,
timeline UI, ruler, measuring tape, surfaces, desk, wood, paper, background
gradient, grey background, marks moving, marks fading, flicker, strobe, uneven
timing, right-to-left, camera movement`

### Plate 5 — ink bleed *(render on white, use `multiply`)*

For dark marks on your paper background — the inverse case.

> Macro video on a pure white background #FFFFFF, overhead plan view. A single drop
> of warm near-black ink #1B1A15 meets uncoated cream paper and spreads outward
> through the fibres, the edge advancing unevenly and slowing as it goes, following
> the grain of the stock. Constant deceleration, no splashing, no droplets, no
> spatter. No shadow anywhere and no visible paper edge. 100mm macro lens at T4.
> Photorealistic, shot on ARRI Alexa with Kodak Vision3 500T, 16:9. The background is
> pure flat white #FFFFFF with no gradient, no haze, no vignette and no visible surface
> or horizon. Fine 35mm film grain throughout. Locked-off camera with absolutely no
> movement, no pan, no tilt, no zoom and no rack focus. No faces, no bodies, no arms
> above the wrist, no readable text, no letters or numbers, no user interface, no
> logos. Final frame: a single settled irregular mark, still.

**Negative:** `splash, spatter, droplets, ripples, water, liquid surface, coloured
ink, blue ink, blood, smoke, background gradient, grey background, shadow, paper
edge, hands, text, letters, camera movement, flicker`

### Plate short forms

Same rationale as §4's short-form variants: generate long and short on one seed, keep
the register the model prefers. Plates benefit from brevity more than the narrative
shots do, because a plate has only one subject and nothing to disambiguate.

> **1 — fibre dissolve.** Macro, pure black background, locked camera. A sheet of cream
> paper comes apart from its edges inward, fibres lifting off and rising as fine
> luminous motes. Constant rate, everything rises. Warm white with faint green in the
> cloud. 35mm grain. No text, no hands.

> **2 — dust beam.** Macro, pure black background, locked camera. Fine dust drifts
> slowly through one soft warm shaft of light entering from the upper right at forty
> degrees. Most motes far out of focus. No surfaces, no objects, no horizon. Seamless
> loop, no events. 35mm grain. No text.

> **3 — six threads.** Pure black background, locked camera. Six straight threads of
> coloured light — moss green, teal, plum, amber, rust clay, forest green — draw inward
> from the frame edges and converge below centre. Constant rate, stopping dead with no
> overshoot. No two threads cross. No glow, no bloom. 35mm grain. No text.

> **4 — the trace.** Macro, pure black background, locked camera. A horizontal line of
> small precise marks writes itself strictly left to right — ticks, tiny squares,
> dashes — one every eight frames, metronomic, never accelerating. Warm white cores,
> faint green halos. Once placed, nothing moves. 35mm grain. No text.

> **5 — ink bleed.** Macro, pure flat white background, overhead, locked camera. One
> drop of warm near-black ink spreads outward through cream paper fibres, the edge
> advancing unevenly and decelerating. No splash, no droplets, no spatter, no shadow.
> 35mm grain. No text.

**Tier 1 negative for all five plates** — shorter than §4's, because a plate cannot
contain most of those failures in the first place:

```
background gradient, grey background, haze, surfaces, horizon, text,
camera movement, flicker, oversaturated, rainbow
```

### Duration and frame rate

- **Request the longest clip the model offers**, then trim. Models drift late; you
  want the option to cut before the drift, and you cannot add frames back.
- **Target 24 fps** for the narrative shots — it matches the 35mm film language every
  prompt asks for, and it is what Clay's `0001-0240` filename implies.
- **Plates 2 and 5 can run slower** and be time-stretched in post; ambient dust and
  ink bleed have no rhythm to break.
- **Deliver the film at 10–12 s**, the plates at 4–6 s each.

### Portrait and mobile

Prism and Mercury both ship a separate narrow cut rather than cropping. Do the same
— but for Path 1-C you mostly do not have to, because the plates are composited and
reflow for free.

If you do generate a portrait cut of the narrative shots, **re-generate at 9:16
rather than cropping 16:9**. Cropping an overhead plan view destroys the left/right
split that Shot 1 depends on. Append this to any prompt:

> 9:16 vertical composition. The desk runs from the top of the frame to the bottom
> and the dividing hairline of light runs horizontally across the exact centre,
> separating an upper half and a lower half. All other details, lighting, palette
> and motion are unchanged.

That rotation — split top/bottom instead of left/right — keeps the meaning intact
on a phone, which a centre crop does not.

---

## 4c. Finishing and encoding

Generation is maybe half the work. Superhuman ships a desktop play-once hero at
**1.71 MB** because of what happens *after* the render, and none of it is hard. (Prism
ships the same pattern at 5.11 MB on desktop — see the pass-10 correction in §1 — which
is a reminder that the encode settings matter more than the technique.)

Verify these commands against your own ffmpeg build before relying on them — flag
availability varies by build, and every CRF value below is a starting point to be
tuned by eye, not a setting to trust blind.

### 1. Trim before anything else

Models drift late. Cut the drift off first so you never encode frames you will throw
away.

```bash
# keep 0.6s → 11.2s, copy streams, no re-encode
ffmpeg -ss 0.6 -to 11.2 -i shot4_raw.mov -c copy shot4_trim.mov
```

### 2. Join the four shots

Only after each shot passes the rejection rubric individually.

```bash
printf "file 'shot1.mov'\nfile 'shot2.mov'\nfile 'shot3.mov'\nfile 'shot4.mov'\n" > list.txt
ffmpeg -f concat -safe 0 -i list.txt -c copy film_master.mov
```

If the shots have different codecs or dimensions, `-c copy` will fail — re-encode
each to a common intermediate first (`-c:v prores_ks -profile:v 3`) and concat those.

### 3. Strip the audio, always

The spec says no audio. `muted` on the element is not the same thing — a muted video
still downloads its audio track. `-an` removes it.

### 4. Encode

**WebM / VP9 — primary.** Two-pass, which is what gets Prism-class sizes:

```bash
ffmpeg -i film_master.mov -c:v libvpx-vp9 -b:v 0 -crf 33 -pass 1 -an -row-mt 1 \
  -pix_fmt yuv420p -f null /dev/null
ffmpeg -i film_master.mov -c:v libvpx-vp9 -b:v 0 -crf 33 -pass 2 -an -row-mt 1 \
  -pix_fmt yuv420p film.webm
```

`-b:v 0 -crf N` is VP9's constant-quality mode. Start at **33** for 1080p and walk it
up until you see banding in the paper-white resolve — that flat `#FAF9F5` field is
the hardest thing in the whole film to compress cleanly, so grade *for* it and check
*it* first. If banding appears before you hit your size target, keep a touch of the
film grain rather than removing it; grain dithers the gradient and is cheaper than
the bitrate needed to fix banding.

**MP4 / H.264 — fallback.** Safari and older devices:

```bash
ffmpeg -i film_master.mov -c:v libx264 -crf 24 -preset veryslow \
  -pix_fmt yuv420p -profile:v high -movflags +faststart -an film.mp4
```

`-movflags +faststart` moves the index to the front so playback can begin before the
whole file arrives. Omitting it is a common and very visible mistake on a hero video.

**If you scrub instead of playing once**, every frame must be seekable:

```bash
ffmpeg -i film_master.mov -c:v libx264 -crf 22 -g 1 -keyint_min 1 \
  -pix_fmt yuv420p -movflags +faststart -an film_scrub.mp4
```

`-g 1` makes every frame a keyframe. This is exactly why Mercury's scrub hero is
4.68 MB. Budget for it or do not scrub.

### 5. Pull the poster from the *last* frame

Not the first. The whole point of the play-once pattern is that the held final frame
is what people look at, and the poster must match it or the video will visibly jump
at the moment it finishes decoding.

```bash
# last frame → WebP
ffmpeg -sseof -0.2 -i film.mp4 -vframes 1 -c:v libwebp -quality 88 poster.webp
# JPEG fallback
ffmpeg -sseof -0.2 -i film.mp4 -vframes 1 -q:v 3 poster.jpg
```

### 6. Check the numbers before shipping

| Check | Target |
|---|---|
| `film.webm` | **< 1.8 MB** |
| `film-mobile.webm` | < 700 KB |
| `poster.webp` | < 120 KB |
| Audio streams | **zero** — `ffprobe film.webm` should list no audio |
| `faststart` on the mp4 | yes |
| Final frame vs `--paper` | sample it; it should read `#FAF9F5` |

That last check is the one people skip. Screenshot the held final frame, pick the
background colour, and compare it to `--paper`. If it is off by more than a couple of
values the seam between video and page will be visible, and the entire Prism trick
fails on the detail it depends on.

---

## 5. PATH 2 — scroll-driven, no video ★ recommended

Same narrative. No video file. A **pinned stage** — Mercury's structure — where the
story advances with scroll position instead of time.

### Why this is the better fit for Truly

1. **You have already built it.** `EvidenceChip.jsx` is an SVG board with routed
   traces, travelling pulses, a die that computes and a report that writes itself.
   Path 2 is that exact technique promoted to the hero and driven by scroll instead
   of a CSS loop. Nothing here is a new capability.
2. **The user causes the tension.** In an 11-second film the split-screen pressure
   just happens at the viewer. On scroll, *they* pile up the résumés and *they*
   heal the seam. That is a fundamentally stronger hook, and it is the reason to
   prefer scroll for this particular story.
3. **Weight.** Layered SVG + transforms lands under ~300 KB. Mercury pays 4.68 MB
   for its scrub hero. You cut hero blur work from 6.77 MP to 2.36 MP because first
   paint was janky — a multi-megabyte hero puts that straight back.
4. **The text stays text.** Real DOM copy — selectable, translatable, indexable,
   screen-reader legible. Baked into a video, it is none of those.
5. **Reduced motion is free.** Pin the stage at its final state and it is finished,
   not empty. You already handle this everywhere else on the site.
6. **You can change the words later** without re-rendering anything.

### Structure

```
<section class="hero-stage">          ← 2.6 × 100vh scroll track
  <div class="hero-pin">              ← position: sticky; top: 0; height: 100vh
     … layers …
  </div>
</section>
```

**Track length — corrected in pass 3.** Mercury runs a 945 px stage in a 2363 px
track (2.5×). Attio runs 1.43×, 1.65×, 2.9× and **8.2×** on different sections,
scaling the track to how much story each one carries. The beat table below has
**seven beats**, which is a long narrative by either site's standard — budget a
**4–6× track** (roughly 4–6 × 100vh) and tune by feel. 2.5× would rush it.

Drive it with GSAP ScrollTrigger — `scrub: 1` for weight and inertia, `pin: true`,
`anticipatePin: 1`.

### Scroll beats

| Progress | Beat | Mechanism |
|---|---|---|
| **0–12%** | Headline holds alone on `--paper`. A hairline in `--line` draws down the centre of the stage. | `scaleY` on a 1px div |
| **12–34%** | **The pile.** Left: résumé cards stack up, identical, accelerating, slightly rotated each — a counter climbs `1,204 applicants`. Right: a single résumé writes itself line by line in too-perfect prose; a cool-blue rectangle pulses beneath the desk edge. | `translateY` + `rotate` stagger; counter is a tweened number; typing is `clip-path: inset()` |
| **34–42%** | **The stall.** Everything freezes. The stack leans. The seam brightens to a hard line. | hold — no tween, deliberate dead air |
| **42–58%** | **The heal.** Both halves slide inward and the seam closes. All the paper dissolves upward into motes. | `x` tween on two wrappers + particle `translateY`/`opacity` stagger |
| **58–72%** | **The trace.** The motes settle into a horizontal evidence timeline — real timestamped events, drawing left to right. | SVG `stroke-dashoffset` + per-event `opacity` stagger |
| **72–88%** | **The threads.** Six coloured lines draw in from the edges, each landing on a specific event. | six `<path>` with `pathLength="100"` and scrubbed `stroke-dashoffset` — identical to `.ec-pulse` |
| **88–100%** | **The verdict.** The card resolves, six scores write in, each grows a hairline back down to its event. Settles. | reuse the `.ec-report` markup and row stagger wholesale |

The last three beats are the evidence chip. You would be re-using working code,
not writing new animation.

### Asset options for the stage

| Option | Weight | Look | Verdict |
|---|---|---|---|
| **2a — pre-rendered frame sequence** | 60–90 WebP frames ≈ 2–3 MB, drawn to `<canvas>` by scroll index | photoreal, identical to Path 1 | only if you want Prism's exact render quality; needs a real preloader |
| **2b — layered SVG + DOM** | **< 300 KB** | editorial, graphic, matches the chip section exactly | **build this** |

2b is not a downgrade. Linear, which is the design benchmark in this category,
ships **zero** `<video>` elements — its hero motion is entirely CSS and canvas.
Your palette is muted and editorial and your type is a serif; a graphic hero is
more on-brand than a photoreal one.

---

## 5b. Path 2b — implementation sketch

The beat table in §5 says *what* happens. This says *what you build*. Written against
the code that already exists, so most of it is a move rather than a write.

### Layer inventory

Seven layers, back to front. Nothing here is photoreal, and nothing here is heavy.

| # | Layer | Element | Driven by |
|---|---|---|---|
| 1 | Paper field | `div`, `background: var(--paper)` | static |
| 2 | Grain | `div`, tiling noise, `mix-blend-mode: overlay`, `opacity: .6` | static — Linear's recipe, §1 |
| 3 | Seam | 1 px `div` in `var(--line)` | `scaleY` then `x` |
| 4 | Left pile | `div` of ~12 absolutely-positioned cards | `y` + `rotate` stagger |
| 5 | Right sheet | one card + a cold-blue `div` | `clip-path: inset()` typing |
| 6 | Trace | inline `<svg>`, one `<path>` + event `<g>`s | `stroke-dashoffset` |
| 7 | Threads + report | inline `<svg>` + the existing report markup | `pathLength` + row stagger |

Layers 6 and 7 are `EvidenceChip.jsx` almost unchanged. The work in this whole path is
layers 3–5 plus the scroll wiring.

### What moves over from `EvidenceChip.jsx`

| Existing | Becomes | Change needed |
|---|---|---|
| `.ec-trace` / `.ec-pulse` with `pathLength="100"` | the six threads | swap the CSS `animation` for a scrubbed `strokeDashoffset` tween |
| `.ec-report` + `.ec-rrow` stagger | the verdict card | drive `--r` from scroll progress instead of `animation-delay` |
| `.ec-score` badges | scores landing on the trace | same, scrubbed |
| the `IntersectionObserver` `ec-live` gate | **delete it** | ScrollTrigger already gates by position; two gates fight |

That last row matters. The chip currently self-gates with an `IntersectionObserver`
that sets `ec-live`. Under ScrollTrigger the trigger *is* the gate — leaving both in
place gives you an animation that only starts once the element is visible *and* then
jumps to wherever scroll progress already is.

### ScrollTrigger skeleton

```js
// pin the stage, scrub the whole story off scroll position
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-stage',
    start: 'top top',
    end: '+=500%',        // 5× track — see §1 for why not 2.5×
    pin: '.hero-pin',
    anticipatePin: 1,
    scrub: 1,             // 1s of catch-up: weight, not lag
    invalidateOnRefresh: true,
  },
});

tl.to('.seam',    { scaleY: 1, duration: 0.12 })                              // 0–12%
  .to('.pile i',  { y: 0, rotate: 'random(-4,4)', stagger: 0.01, duration: 0.22 })
  .to('.counter', { innerText: 1204, snap: { innerText: 1 } }, '<')
  .to('.sheet',   { '--type': '100%', duration: 0.22 }, '<')
  .to({},         { duration: 0.08 })                                          // 34–42% the stall
  .to('.half',    { x: 0, duration: 0.16 })                                    // the heal
  .to('.paper',   { opacity: 0, y: -40, stagger: 0.004 }, '<')
  .to('.trace',   { strokeDashoffset: 0, duration: 0.14 })
  .to('.thread',  { strokeDashoffset: 0, stagger: 0.02, duration: 0.16 })
  .to('.rrow',    { opacity: 1, y: 0, stagger: 0.015, duration: 0.12 });
```

Durations are timeline-relative and sum to ~1.0, so they read directly as the
percentages in the §5 beat table. Keep them summing to 1 and the table stays the
spec.

### Five things that will bite

1. **`scrub: 1`, not `scrub: true`.** `true` is rigid and every scroll jitter shows in
   the animation. `1` gives one second of catch-up, which is what reads as weight.
2. **The stall is a real tween.** `.to({}, { duration: 0.08 })` — an empty tween that
   burns scroll distance. Delete it and the heal steps on the pile; it is the beat
   that makes the resolution land.
3. **`rotate: 'random(-4,4)'` needs `gsap.utils.random` seeded**, or the pile
   reshuffles on every `ScrollTrigger.refresh()` — including on mobile browser-chrome
   resize, which fires constantly. Precompute the rotations into the markup instead.
4. **Pin + the existing `Hero.jsx` intro.** `Hero.jsx` runs a `SplitText` / `.from()`
   intro on load. If the pinned stage *is* the hero, the intro tween and the scrub
   timeline both own the same elements. Either move the stage below the hero
   (Pattern D — and this is the strongest argument for it) or move the intro into the
   scrub timeline's first 5%.
5. **`prefers-reduced-motion`.** Do not just kill the ScrollTrigger — that leaves the
   stage at 0% progress, which is an empty page. Set the timeline to `progress(1)` and
   *then* disable it. Same rule as the chip: the resting state is the finished state.

### Weight budget

| Item | Size |
|---|---|
| Noise tile (256×256 PNG) | ~8 KB |
| Inline SVG (trace, threads) | ~4 KB |
| Markup + CSS delta | ~10 KB |
| GSAP core + ScrollTrigger | already loaded |
| **Total** | **~22 KB** |

Against Superhuman's 1.71 MB, Prism's 5.11 MB and Clay's 12.65 MB.

---

## 6. What I would actually do

**Revised in pass 18.** This section previously recommended Path 2b — the seven-beat
split-desk scroll stage. That has been superseded by §4d, and a document that
recommends three different things in three places is worse than one that commits.
The current order, and it is the only one:

0. **Answer one question first** (§1b): the evaluator chip was removed from the page on
   2026-08-15. Was the objection to the *circuit-board visual language*, or to that
   section being animated at all? If the former, the scroll reveal needs a different
   vocabulary than traces and threads — the concept holds, the styling does not.
1. **Build Concept B as a scroll reveal** (§4d). A résumé that turns translucent as you
   scroll, revealing the evidence record underneath. **~40 KB**, zero generation risk,
   and the visitor performs the reveal themselves. One transformation, one variable.
   This is the hero. Note the re-use assumption is now weaker — see §1b.
2. **Fix the typography while you are in there** (§1, "Granola typography — measured").
   Four one-line CSS changes — H1 to ~104 px, weight 400, line-height 0.93, measure
   ~10ch. Free, ships today, and it may do more for the hero than any of this.
3. **Then, if you still want photoreal warmth**, generate **Concept B's single shot**
   (§4d) — or, if you prefer the desk vocabulary, Path 1 Shot 4 alone. Either way its
   end frame is already the poster. Put it in `03 — Judge`, not the hero.
4. **Do not put a film and a pinned stage in the same panel.** They fight, exactly as
   `.hero-mesh` and a video would.

**What Path 2b (the seven-beat split-desk stage, §5/§5b) is still for:** it tells the
*problem* — the pile, the stall, the heal — which Concept B deliberately omits. If you
want that argument made visually, it belongs below the hero, in or around
`01 — Extract`, not competing with it. The beat table and implementation sketch remain
valid for that use.

### Traps, whichever path

- **The video must replace `.hero-mesh`, not underlay it.** Two gradients plus a
  film in one panel reads muddy. Pick one.
- **`Hero.jsx` fades `.hero-mesh` in from `autoAlpha: 0, scale: 1.22`.** Whatever
  replaces it inherits that GSAP tween — check it does not fight the new motion.
- **A pinned hero delays the fold.** Mercury spends 2363 px before the second
  section. Make sure the CTA is still reachable and the pin releases cleanly.
- **`prefers-reduced-motion`:** Path 1 → poster only. Path 2 → render the stage at
  100% progress and disable the ScrollTrigger. The resting state must be the
  *finished* state.
- **Measure first paint before and after.** That is the number that decided the
  last hero change.

---

## 7. Idea pile

Unfiltered as they were written, newest at the top. **Triaged in pass 20** — twenty-eight
entries had accumulated with no status, which is how a pile becomes something you stop
reading.

### The document's assumptions have a shelf life

Twenty passes of this document were written against a site that no longer exists in that
form. In one day the evaluator chip was removed from the page and the `01 — Extract`
copy was rewritten to stop naming techniques. Both landed on a document that had spent
five passes building a recommendation on the first and had never considered the second.

Neither was foreseeable. What is generalisable is the **failure to notice**: passes 16
through 20 were all internal — auditing prompts, triaging ideas, reconciling
recommendations — and none of them re-read the code the recommendation depended on. A
document about a website drifts from the website by default, and the drift is silent.

**Worth building into any long-running research doc:** periodically re-check the
external facts it rests on, not just its internal consistency. The pass-9 and pass-19
audits caught contradictions *within* the document. Nothing was checking it against the
world.

The specific casualty: "re-uses `EvidenceChip`'s trace and threads — code that already
works" was true when written and false a day later, and it was carrying a meaningful part
of the argument for the lead recommendation.

### Triage index

Two different kinds of thing had been filed together, serving different readers at
different moments. Split and given status here; the entries themselves are unchanged
below.

**A — Product and design ideas.** Things to build or decide.

| Idea | Status |
|---|---|
| Diegetic motion — the Granola move | ✅ **Adopted** — became Concept B's scroll reveal, §4d |
| Pattern C variant — stop overlapping the type | ✅ **Adopted** — written up as §4a |
| Put the narrative where the argument is | ✅ **Adopted** — §6 re-scopes Path 2b to below the hero |
| The film is a way of arriving at a still | ✅ **Adopted** — Frame F prioritised throughout |
| The opposition is the shot | ✅ **Adopted** — written into Shot 1's curve |
| How to actually reach Prism/Clay render quality | ✅ **Adopted** — route 3 became §4b's texture plates |
| Nobody honours reduced motion for video | ✅ **Adopted** — explicit JS fix in the delivery spec |
| Granola is the aesthetic sibling | ✅ **Adopted** — typography measured in §1 |
| **Type is cheaper than video** | ◻ **Open — recommendation #2 in §6.** Four one-line CSS changes. Do this first |
| **Steal Linear's grain and glow** | ◻ **Open — do this week.** Measured values, pure CSS, applies site-wide, independent of every other decision |
| **Two heroes, one per audience** | ◻ **Open — strongest untaken positioning move.** Recruiter and candidate want opposite things |
| Render the page's own texture into the frame | ◻ **Open** — only relevant if a film ships |
| 533 transitions beat one 12 MB film | ◻ **Open** — needs an audit of what Truly currently transitions |
| Video at 96×24 | ◻ **Open** — cheapest possible use of a generated asset |
| Open questions to answer in a later pass | ◻ **Open** — three still unanswered |
| Motion is a differentiator here | ◈ Context — informs positioning, nothing to build |
| Both direct competitors ship nothing | ◈ Context |
| The company that sells generated video ships none | ◈ Context |

**B — Process lessons.** How to do this kind of work; they apply beyond this project and
none of them expire.

| Lesson | One line |
|---|---|
| A contradicted model never tells you | It picks one instruction silently; contradiction is the most expensive invisible defect |
| Never negate in the positive prompt | The model takes the noun and discards the "not" |
| Promotion should trigger a re-audit | Anything newly promoted is the least-tested thing in the set |
| Refining execution is not the same as checking the idea | Every fifth pass, re-ask the question instead of improving the answer |
| The best concept needed no generation | When research contradicts the frame of the question, change the frame |
| One document, one recommendation | Superseded advice does not announce itself |
| Longer is not the same as better | Detail that removes a degree of freedom earns its length; nothing else does |
| Measure the file the browser actually asks for | `currentSrc` in a backgrounded tab is meaningless |
| Verify the benchmark before building on it | A correction that moves you to a new reference must re-verify it |
| Two attempts, same wall — hand it over | Environmental limits are for delegating, not retrying |
| The document is the bottleneck, not the research | Research has diminishing returns; structure has increasing ones |

### Size, revisited

**3,190 lines as of pass 20** — up 26% from the 2,523 at which pass 15 flagged the file as
too large. The split proposed in §0 has not been actioned, and every pass since has added
to the problem it identified.

Not a complaint about the additions — passes 16 through 19 produced the lead concept, its
scroll form, and two genuine defect fixes. But it is worth stating plainly: **the single
highest-value edit available to this document is now removing things from it**, and that
needs a decision rather than another pass.

### Promotion should trigger a re-audit

Concept B was written in one pass, lightly touched in a second, and promoted to the lead
recommendation in a third. Concept A's prompts had eight passes of conforming and
auditing behind them. So the document was recommending, first, the prompt it had checked
least.

That is a structural hazard rather than an oversight: **anything newly promoted is by
definition the least-tested thing in the set**, and promotion feels like a conclusion
rather than a trigger for work. The audit it prompted found a defect class — negation in
positive prompts — that eight passes over Concept A had never noticed, and which was
sitting in Concept A too.

**Rule worth keeping:** when something moves to the front, re-run every check the
incumbent already passed. It is not yet earned its place; it has only earned the
inspection.

### One document, one recommendation

Pass 18 found this document recommending three different first builds in three places:
§0 said scroll reveal, §4d said Concept B's film, §6 still said Path 2b from pass 5. All
three were written when they were true; none had been retired.

That is worse than any of them individually. A reader lands wherever they land, follows
what it says, and never learns the other two exist — so the document's real advice
becomes whichever section they happened to open.

**Reconciled in §6, which is now the single ordering**: scroll reveal → typography →
optional film → don't put both in one panel. Path 2b is explicitly re-scoped to the job
it is still right for, which is telling the *problem* below the hero.

**Worth doing on any document that accumulates:** every few passes, grep your own
recommendations and check they still agree. Superseded advice does not announce itself,
and the cost lands entirely on the reader.

### The best concept was the one that needed no generation

Seventeen passes chasing how to generate a film ended at an idea that generates nothing:
a résumé that turns translucent as you scroll, revealing the record underneath. ~40 KB,
zero generation risk, and it re-uses code that already ships.

Worth noticing *why* it took so long. The brief was "find me video prompts", so every
pass searched inside that frame — better prompts, better anchors, better negatives. The
research kept saying something else the whole time: eight of ten sites shipped no hero
video, then ten of twelve, then fifteen of fifteen with two exceptions. Linear and
Raycast, the two best-crafted sites measured, ship none at all. That evidence was in §1
from pass 2 and it never quite crossed into the recommendation, because the
recommendation was answering the question as asked.

**The general shape:** when the research repeatedly contradicts the frame of the
question, the frame is the thing to change. Concept B's scroll form only appeared once I
asked what the *concept* wanted rather than what the *medium* wanted — and the concept
wanted a single controllable variable, which is a scroll bar, not a timeline.

None of the generation work is wasted; the film remains fully specified and its end frame
is the poster either way. But the ordering is now: build the cheap thing, then decide
whether the expensive thing adds anything.

### Refining execution is not the same as checking the idea

Fifteen passes improved *how* "The Desk Between Them" is expressed — conformed its
prompts, audited its contradictions, tiered its negatives, gave it curves and short
forms and a near-miss protocol. Not one of them asked whether the concept was right.

That is a specific failure mode of iterative work, and it is easy to miss precisely
because every individual pass is genuinely productive. Polish accumulates, the thing
looks more finished every round, and the question that would have mattered most gets
harder to ask the more work is invested in the current answer.

The critique in §4d found five real weaknesses — plan view is the riskiest camera,
hands are the highest-probability defect in the medium, the tension is coded in props
too small to read at hero scale, three joins are three failure points, and the whole
thing is literal. Every one of those was visible in pass 1 and none was noticed until
pass 16, because passes 2 through 15 were busy being useful.

**Worth building in as a habit:** every fifth pass or so, stop improving the answer and
re-ask the question. On this document that produced Concept B, which is a better image
at a fraction of the generation risk — and it took one pass, not fifteen.

### The document is now the bottleneck, not the research

Fifteen passes in, the binding constraint on this work has changed. It is no longer
*what do the good sites do* — that converged around pass 8, and passes 10 through 13
were corrections to my own measurements rather than new findings. It is now **whether
you can find the prompt you need at the moment you need it**, in 2,523 lines.

I skipped site research this pass deliberately for that reason. A sixteenth site would
have produced another row in a table nobody reads during a generation session; updating
the stale index and closing the last prompt gap will not.

The general version, worth remembering on any long-running document: **research has
diminishing returns and structure has increasing ones.** The point where adding a
finding is worth less than reorganising what you already have arrives earlier than it
feels like it should, and the signal is exactly this — corrections outnumbering
discoveries, and an index that no longer matches its own contents.

Recommended split is in §0. It needs a decision, not more passes.

### Two attempts, same wall — know when to hand it over

I have now tried twice to decode Prism's hero and sample its final frame, and been
stopped both times by the same thing: **a backgrounded tab does not decode video at
all.** Not slowly — `readyState` stays at 0 indefinitely. Twenty seconds, forty, it
makes no difference.

The useful move at that point is not a third attempt with a longer timeout. It is to
write the check as a snippet the user can paste into a foreground console, which takes
them ten seconds and costs me nothing. That is now in §1.

Generalising, because it applies well beyond this document: when a measurement is
blocked by an environmental limit rather than a technical one, **stop measuring and
start delegating.** The value was never in me being the one to run it.

The same category of limit has bitten this document three times now — rAF suspension,
IntersectionObserver non-delivery, and video decode — all from the same root cause, all
producing readings that look like findings. Worth remembering that a backgrounded
automation tab is a fundamentally different runtime from a browser someone is looking
at.

### Longer is not the same as better

Twelve passes have made every prompt in this document longer. That was mostly right —
detail is control — but it is not monotonic, and it is worth naming the point where it
turns:

- **A long positive prompt dilutes.** Attention spreads across the clauses; the ones at
  the edges get dropped first, and you cannot tell which.
- **A long negative prompt dilutes faster**, because many models weight every term
  equally. Thirty terms guarding against unlikely failures make the ten that matter a
  third as strong.
- **Detail that removes a real degree of freedom is worth its length.** `100mm macro at
  T2.8` and `what must not move` earn their words. `Editorial and restrained, closer to
  a documentary still than to a product advertisement` did not — it was a sentence
  describing a feeling, and the eighth rule in §4 says not to do that. **Cut in pass
  13** and replaced with the renderable version: *worn edges, small scuffs, a faint ring
  stain on the wood, nothing arranged or styled for the camera.* Same intent, four
  things a model can actually draw.

The honest position: this document's prompts are tuned for control, not for every model.
Generate the long and short forms side by side on the first shot, keep whichever
register the model handles better, and use that for the rest. That decision is worth
more than any further wordsmithing of either version.

### Verify the benchmark before building on it

Pass 10 made Superhuman the weight benchmark after discovering Prism's real number was
3.5× what I had recorded. Pass 11 checked whether Superhuman had the same problem —
`hero-mail-desktop-2x.mp4` has two suffixes that look exactly like ladder markers.

It does not. **One `<source>`, no `media`, no alternates in the DOM.** 1.71 MB re-fetched
and confirmed. The `-desktop-2x` is descriptive naming, not a selection tier. The
benchmark holds.

The habit worth keeping: when a correction moves you onto a new reference, verify the
new one immediately with the same method that caught the old one. Otherwise you have
swapped one unverified number for another and gained only confidence.

*Caveat recorded honestly:* Superhuman's CDN uses content-hash directories, so probing
for sibling filenames returns 403 regardless of whether they exist. Absence of variants
is not provable that way. What *is* provable, and what matters, is that the DOM offers
the browser exactly one source — so 1.71 MB is what a desktop visitor downloads.

### Measure the file the browser actually asks for

Eight passes of this document were built on a number read from `currentSrc` in a
**backgrounded tab**, where the browser had not selected or loaded any source at all.
The file I found was the mobile tier. The desktop hero is 3.5× larger.

Two lessons, both cheap:

1. **Read the `<source>` children, not `currentSrc`**, and fetch every variant. A `-hd`,
   `-lg` or `-2x` suffix in any filename means there *may* be a ladder and you may have
   found the wrong rung. Chased in pass 11: Mercury's `-lg` **is** a ladder (lg / md /
   sm at 4.68 / 3.06 / 2.29 MB) and 4.68 MB was already the top rung; Superhuman's
   `-desktop-2x` is **not** a ladder, just descriptive naming. The suffix is a signal to
   check, not evidence either way.
2. **A backgrounded automation tab is not a browser.** It suspends rAF, suspends
   IntersectionObserver delivery, blocks video decode, and — as here — prevents source
   selection entirely. Every measurement taken in one needs a sanity check against what
   a real visitor would receive.

Also worth carrying forward: **Resource Timing sizes are redacted cross-origin without
a `Timing-Allow-Origin` header.** Linear reported 250 resources totalling 0 bytes, which
is not a finding about Linear, it is the API declining to answer. Do not mistake a
redacted measurement for a small one.

### A contradicted model never tells you

The pass-9 audit turned up three places where two instructions in the same prompt
disagreed. That is worth generalising, because it is the failure mode with no symptom:

**A model given contradictory instructions does not error, does not warn, and does not
split the difference. It silently picks one.** You get a plausible generation, you
grade it against the rubric, it passes — and you never learn that half your prompt was
discarded. Then the next generation picks the other one and you conclude the model is
"inconsistent".

Which means the audit is not a tidiness exercise. Contradiction is the most expensive
defect in a prompt precisely because it is invisible, and the more detailed the prompt
gets, the more likely it becomes. This document is now long enough that every future
edit to a shared clause needs the audit re-run.

The specific trap here: **conforming prompts and contradicting prompts look identical
from a distance.** Pass 8 made every prompt carry the same style block, which felt like
an improvement and was — but it also pasted "no other colour" language onto prompts
whose whole subject was a colour. The tidier the set looks, the harder the
contradictions are to see.

### Nobody actually honours reduced motion for video

I went looking for whether any of these sites disable their hero film for
`prefers-reduced-motion`. Prism gave a complete reading — 2930 CSS rules scanned, zero
stylesheets blocked — and the answer is worth knowing:

**Four `prefers-reduced-motion` blocks, and none of them touch the video.**

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

That is the blanket reset everyone copy-pastes, plus three targeted blocks for a logo
loop, an auth animation and the marketing shell. It is a site that clearly *cares*. And
the hero video plays anyway — because **video playback is not a CSS animation**, so
`animation-duration: 0.01ms` does exactly nothing to a `<video>` element.

This is the trap: the reset gives you the feeling of having handled it. It has not.
Video needs an explicit fix:

```js
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
if (reduce.matches) { video.removeAttribute('autoplay'); video.pause(); }
// and let the poster show — which is the argument for having one
```

Truly honours reduced motion everywhere else already. If a film ships, this is the
line that keeps that true — and it is another reason the poster is not optional.

*Superhuman was inconclusive: 13 of its stylesheets are cross-origin and unreadable,
so only 60 rules could be scanned. No claim either way.*

### Type is cheaper than video and probably matters more

The Granola measurements in §1 are the most actionable thing found in six passes of
research. Truly's H1 caps at 74 px against Granola's 104.7 px; the H2 at 48 px against
**160 px**. Weight 500 against 400. Line-height 1.04 against **0.93**. Measure 17ch
against ~10ch.

The typographic *system* is already correct — serif, negative tracking that scales,
positive tracking on small text, balanced wrap. It is the execution that is timid, and
every one of those four gaps is a one-line CSS change.

If the goal is "the hero should hit harder", this costs nothing, ships today, carries
no weight, needs no generation, and cannot regress first paint. **Do it before
generating a single frame** — partly because it may turn out to be enough, and partly
because any film has to be graded against the type it sits with, so the type should be
final first.

### The company that sells generated video ships none

Runway's homepage: zero `<video>`, static WebP throughout, 63 transitions.

Not a reason to abandon the film. But it is a data point against the assumption that
a serious motion asset is what separates a good landing page from a great one — and
it is the eleventh site in a row to suggest the same thing.

### Diegetic motion — the Granola move

Granola's only hero motion is a **blinking text cursor inside a mock product window**,
with note lines appearing under it. Not a backdrop. Not a film. The product, working.

It cannot drift, cannot be mistaken for stock footage, costs nothing, and says the
one thing a landing page needs to say. And Truly already has the exact asset: the
evidence report in `.ec-report` writes itself a row at a time.

The hero version would be a single mock window in which an evidence report assembles
— an event arriving, a score resolving, a hairline linking the two. Six seconds,
looping, entirely DOM. Pair it with Pattern E (type left, visual right) and the hero
is done without a single generated frame.

**This is now competing with Path 2b for what to build first**, and it is smaller.

### Granola is the aesthetic sibling, not Mercury

Very large near-black serif, left-aligned, on warm cream. That is `--paper` plus
Newsreader. Everything this document has been benchmarking against — Mercury's misty
valley, Clay's claymation, Prism's grass — belongs to a different visual family than
the site Truly actually is.

Worth a full pass through Granola's page in a later iteration specifically for type
and spacing rather than motion.

### Video at 96×24

Cursor's only video on the entire page is its **nav logo**, a 96×24 mp4. Video used
at the smallest possible scale, for one moment of life, instead of as a backdrop.

Truly's mark could do the same — a two-second resolve on first load, then still. It
is the cheapest possible use of a generated asset and it lands in the one place every
visitor looks.

### 533 transitions beat one 12 MB film

Raycast — arguably the best-crafted site in the whole set — carries **533 elements
with a CSS transition** and **zero** video. Clay carries one 12.65 MB hero. Both feel
expensive; only one of them costs anything to load, and it is not the one you would
guess.

There is a whole strategy here that this document has not considered: spend the
motion budget on **ambient responsiveness** rather than a set-piece. Every hover,
focus, enter and state change on the page gets a considered curve and duration.
Nobody can point at it, and everybody feels it.

It is also the only option that improves the *entire* site rather than one panel,
and it composes with every other path here. Worth an audit of what Truly currently
transitions and what it does not.

### Both direct competitors ship nothing

Ashby: no video, no canvas, no pinned stages. Metaview: no hero video at all, just
three small testimonial loops near the footer. Two for two.

Whatever gets built — film, pinned stage, or 533 transitions — it will be the only
motion in the category. That is worth more than matching Mercury.

### Motion is a differentiator here, not table stakes

Six of the eight sites in the scoreboard ship no video, and **Ashby — the direct
competitor — ships nothing at all**: no video, no canvas, no pinned stages. In
fintech and GTM a cinematic hero is expected and Truly would merely be keeping up.
In recruiting software it would be the only one.

That changes the calculus on effort. A serious motion piece is not a nice-to-have
polish item in this category; it is the differentiating asset. Which is an argument
for doing it properly rather than cheaply — and, given §1, for doing it *below the
fold* where the argument is, rather than only in the hero.

### Put the narrative where the argument is

Attio's hero is type on white; all five of its pinned stages are below the fold.
Linear the same. If Truly did this, the split → heal → trace → verdict sequence
would live in `03 — Judge`, exactly where `EvidenceChip` already sits, and the hero
would not have to change at all.

This is the lowest-risk version of the whole project: no hero rewrite, no fight with
the `Hero.jsx` GSAP intro, no `.hero-mesh` decision, no first-paint regression. And
the story lands next to the claim it is evidence for.

**Strong candidate for what to build first.**

### The opposition is the shot

Written into Shot 1 during pass 3 and worth stating on its own: the camera stays
calm while the hands accelerate. Nearly every shot in this film improves when one
element holds still and another moves against it — threads advancing over a fixed
trace, exposure lifting over a locked frame, a metronomic rhythm following an
organic one. If a generation feels flat, the fix is almost always to make something
*stop* rather than to make something else move.

### The film is a way of arriving at a still

Prism holds its last frame forever. Which means the thing a visitor actually looks
at, for the entire time they read the page, is **one static image** — and the film is
just the animated way of getting there. That inverts the whole exercise:

**Design Frame F first. Get it perfect. Then work backwards to what should happen
before it.**

It also means the quality bar for the moving part is much lower than it feels. Six
seconds of motion nobody scrubs, followed by an image they stare at for ninety.
Spend the effort accordingly.

### Two heroes, one per audience

Prism ships `hero-candidates.webm` and `hero-employers.webm` and swaps them on the
nav toggle. Truly has exactly the same two audiences, and they want opposite things:
a recruiter wants *fewer, better-evidenced candidates*; a candidate wants *to be seen
for the work*. Same desk, same trace, two different resolves — the recruiter's card
is a ranked stack, the candidate's is a single unfolding record. It doubles the
generation work and it is probably the strongest positioning move available.

### Render the page's own texture into the frame

Prism's dot grid appears in the film *and* in the CSS behind it, aligned. The seam
between asset and page disappears. Truly's equivalents: the `--line` `#E6E2D7`
hairline grid, and the grain. Bake them into frames C–F so the held frame and the
page are continuous surfaces rather than a picture sitting on a background.

### Steal Linear's compositing regardless of path

The grain and glow values in §1 are measured, not guessed, and they are free. A
`mix-blend-mode: overlay` noise layer at `opacity: 0.6` over `--paper`, plus a 4%
white radial bloom behind the headline, will do more for perceived production value
than any single generation. Do this **this week**, independent of which path wins.

### Pattern C variant — stop overlapping the type

Clay puts the render on top and the headline in a solid band beneath. If Truly did
the same, every composition constraint in this document evaporates: no featureless
top third, no scrim, no desaturation, no "slow motion only". The split-desk film
could be tight, high-contrast and genuinely dramatic.

Worth prototyping in CSS before committing — it changes the whole page rhythm, and
Truly's centred serif headline is currently the hero's main event. But it is the
cheapest way to get a *much* more interesting film.

### How to actually reach Prism/Clay render quality

The filename `Hero 06-02 Lossy 0001-0240.mp4` is Blender/C4D output naming. These are
3D renders. Three honest routes to that quality:

1. **Commission it.** A motion designer with a Blender pipeline. Highest quality,
   real money, 2–4 weeks.
2. **Path 2b.** Graphic rather than photoreal, and Linear proves that is not a
   downgrade. Costs you time you have already partly spent on the chip.
3. **AI video for texture only.** Generate the paper dissolve, the motes, the dust —
   the organic elements models are genuinely good at — then composite them over
   flat brand-coloured plates rather than asking for a whole scene. This is the
   underrated middle route and it fits the "quality over iterations" brief.

### Open questions

Updated pass 20 — two of the original three are now answered.

- **Does the hero pin fight the existing GSAP `SplitText` intro in `Hero.jsx`?**
  Still open, and now the highest-stakes unknown, because the recommended build is a
  pinned scroll stage in the hero. §5b names the two ways out — move the stage below the
  hero (Pattern D), or fold the intro into the scrub timeline's first 5% — but neither
  has been tested against the actual code.
- ~~Portrait crop for mobile: re-render at 9:16, or crop?~~ **Answered** in §4b:
  re-generate at 9:16 and rotate the split from left/right to top/bottom. And moot for
  the recommended build — Concept B is a centred single subject, so mobile is a crop.
- ~~Is there a version where the six threads are the only animated element?~~
  **Answered, and it became the recommendation.** Concept B's scroll reveal is close to
  exactly that: one sheet, one mask, six threads.

**New, opened pass 20:**

- **Does `mask-image` with a scrubbed gradient hold 60fps on a mid-range phone?**
  Attio uses masks 54 times, but statically. Scrubbing one every frame is a different
  cost, and the fallback (animate `opacity` instead) is one line — worth measuring
  before committing to the sweep refinement.
- **Where does the scroll reveal leave the CTA?** A pinned stage on a 2.5× track pushes
  everything below it down by 1.5 viewports. Mercury spends 2,363 px before its second
  section and gets away with it; Truly's page is shorter and its CTA matters more.

---

## 8. Changelog

- **2026-08-15 · pass 21** — **Re-checked the document against the actual site**, which
  had changed twice since pass 16 in ways that invalidated parts of it. Added **§1b**.
  (1) **The evaluator chip was removed from the page.** §4d's scroll reveal was costed
  partly on "re-uses `EvidenceChip`'s trace and threads — code that already works";
  that is now a revival of deliberately-removed code, not a free inheritance. The
  recommendation survives, the accounting does not, and a new step 0 in §6 asks the
  question the document cannot answer: was the objection to the circuit-board *visual
  language* (in which case the reveal inherits it) or to that section being animated at
  all (in which case the hero is unaffected)? (2) **Implementation detail is now
  off-limits in the copy** — `01 — Extract` was rewritten to name signals rather than
  techniques. Checked every concept against the new rule: Concept B and the texture
  plates are clean; **Concept A's Shot 1 is not** — a phone glowing under the desk and a
  screen reflected in a coffee cup were written to mean *the candidate is cheating* but
  read just as easily as *we can see your phone*, which is the wrong note for a site
  that has just moved away from describing what it observes.
- **2026-08-15 · pass 20** — **Triaged the idea pile.** Twenty-eight entries had
  accumulated with no status. Found they were two different kinds of content filed
  together — **product ideas** (things to build) and **process lessons** (how to do this
  work) — serving different readers at different moments. Added a triage index marking
  eight ideas **Adopted** (diegetic motion → Concept B; Pattern C → §4a; texture plates;
  reduced-motion fix; and others), seven **Open** with the three worth doing first called
  out (**fix the typography**, **steal Linear's grain and glow**, **two heroes, one per
  audience**), and three as context. Process lessons collected into a one-line table.
  Updated the open questions: two of the original three are now answered — the
  9:16 question by §4b, and "could the six threads be the only animated element" by
  Concept B, which became the recommendation. Two new ones opened: whether a scrubbed
  `mask-image` holds 60fps on a mid-range phone, and where a pinned hero leaves the CTA.
  Also recorded that the file has grown **26% since pass 15 flagged it as too large** —
  3,190 lines — and that the highest-value edit available is now removal, which needs a
  decision rather than another pass.
- **2026-08-15 · pass 19** — **Audited the newly-promoted concept and found a defect
  class in both.** Concept B had one pass of refinement against Concept A's eight, yet
  was now recommended first. Auditing it surfaced **craft rule 11: never negate in the
  positive prompt** — a prompt reading `not more type but a record` reliably produces
  type, because the model takes the noun and largely discards the "not". Fixed every
  instance across both concepts: `not more type but a record` → `is a record`;
  `soft grey blocks of unreadable type` → `soft grey horizontal bars of varying length
  arranged in blocks, like a document seen from too far away to read`; `nothing falls` →
  `everything rises` (Shot 2 and Plate 1, long and short); `nothing shows through it` →
  `fully opaque and evenly surfaced`. The `type` instances were the serious ones — the
  lead prompt was simultaneously naming text, forbidding it in the negative, and leaving
  the model to choose. Also added the **record asset spec** to match pass 18's sheet
  spec, with the note that mark spacing must be *irregular* (even spacing reads as a
  measuring scale; clustered spacing reads as a record of a real session).
- **2026-08-15 · pass 18** — **Validated the technique, reconciled the recommendation,
  specced the missing asset.** Measured `mask-image` usage in the wild: **Attio uses it
  54 times** on its homepage — edge-fade gradients on scrolling strips, a soft radial
  backdrop, and SVG-as-mask logo recolouring — confirming the scroll reveal's mechanism
  is production CSS, not a trick. Found the document recommending **three different
  first builds in three places** (§0 scroll reveal, §4d Concept B's film, §6 still
  Path 2b from pass 5); rewrote §6 as the single ordering and re-scoped Path 2b to the
  job it is still right for — telling the *problem* below the hero, which Concept B
  deliberately omits. Added the **sheet asset spec** for the scroll reveal, the one
  thing it needs that does not already exist: inline SVG, résumé-as-shape with no
  readable text, token-driven, with the note that body-line widths must be irregular
  (evenly-stepped bars read as a wireframe) and hard-coded rather than randomised at
  runtime, or `ScrollTrigger.refresh()` reshuffles the page mid-scroll.
- **2026-08-15 · pass 17** — **Stress-tested Concept B immediately**, applying pass 16's
  lesson rather than waiting fifteen passes. Five weaknesses found; the two serious ones
  are that it shows only the resolution and never the problem, and that nothing in it is
  specific to hiring — both resolved by placement, since the argument gets made by the
  page beneath the hero. Then found the thing that changes the recommendation:
  **Concept B works as a scroll reveal with no video at all.** Its translucency is one
  continuous transformation driven by a single variable, which is a scroll bar. Two
  layers, one mask, `scrub: 1`, **~40 KB**, zero generation risk, re-uses
  `EvidenceChip`'s trace and threads — and the visitor performs the reveal themselves,
  which is the product's core action. Added the layer structure, the ScrollTrigger
  timeline, and a `mask-image` sweep refinement so the light spreads across the page
  rather than the paper fading uniformly. Also added Concept B's high-contrast variant
  (a sheet alone in blackness, lit from behind — the most striking single image in the
  document). **Scroll reveal is now the recommended first build, ahead of both films.**
- **2026-08-15 · pass 16** — **Questioned the concept for the first time.** Fifteen
  passes refined the execution of "The Desk Between Them"; none asked whether it was the
  right idea. §4d now carries an honest critique — overhead plan view is the riskiest
  camera for a generation model, the film *requires hands* (the highest-probability
  defect in the medium, and already a reject condition), the cheating-candidate half is
  coded in props too small to read at hero scale, four shots means three joins, and the
  whole thing is literal. Added **Concept B — "What's Under the Page"**: a single
  continuous shot of a résumé turning translucent to reveal the evidence record
  underneath it. One shot instead of four, two stills instead of six, no hands, no
  joins, macro instead of plan view, and mobile becomes a crop rather than a re-shoot.
  Full long prompt, short form, tiered negatives (with `x-ray, medical scan, blueprint,
  hologram` promoted to the top of Tier 2 — the specific drift a translucency prompt
  invites), and both frames. **Now the recommended first generation**, with the desk
  concept preserved intact as the fallback. Nothing else in the document is wasted by
  the switch — palette, thread colours, anchor, rubric, protocol and encoding all carry
  over.
- **2026-08-15 · pass 15** — **Structure, not additions.** Measured the document at
  **2,523 lines / 23,360 words** and concluded it has outgrown one file: §1 is 22% of it
  and none of it is instructions, while the prompts do not begin until ~line 1030.
  Rewrote §0's map with real line counts, brought the "generating today" checklist up to
  date after seven passes of unlisted additions (short-form A/B on Shot 1, tiered
  negatives, the near-miss protocol, re-run the audit after anchor edits, §4a for
  non-overlapping layouts, `<source media>` ordering), and proposed a **three-way split**
  — research / prompts / scroll — awaiting a decision. Added **plate short forms**, the
  last remaining prompt gap, with their own shorter Tier 1 negative. Skipped site
  research deliberately and said why: findings converged around pass 8, passes 10–13 were
  corrections rather than discoveries, and a sixteenth site would add a table row nobody
  reads mid-generation.
- **2026-08-15 · pass 14** — **The near-miss protocol**, which is the piece the document
  was missing: what to do with a generation that is 80% right rather than clearly
  failed. A seven-step order of intervention (composition → start frame; motion → curve
  line; stray movement → the what-must-not-move line; light → the ratio number one stop
  at a time; palette → the *negative* prompt; materials → a named defect; seed change
  **last**), plus a change-log discipline and two anti-patterns — adding words to fix a
  miss, and re-rolling the seed on a near-miss, which discards the information that the
  prompt is 80% right. Added **Frames A–F under the high-contrast variant**, closing the
  §4a gap where only the shots had been adapted; Frame F is deliberately unchanged
  because it is the join to the page. Attempted for the second time to verify Prism's
  final-frame colour and hit the same wall — **a backgrounded tab does not decode video
  at all**, `readyState` stays 0 indefinitely — so the claim is now labelled unresolved
  and shipped with a paste-ready console snippet so it can be settled in ten seconds by
  someone with a foreground browser.
- **2026-08-15 · pass 13** — **Cut the one unrenderable sentence from every prompt.**
  Pass 12 flagged that `Editorial and restrained, closer to a documentary still than to
  a product advertisement` breaks craft rule 8 — it describes a feeling, not an object,
  and it sat in all eleven prompts. Replaced with the renderable version: *every object
  is used rather than new — worn edges, small scuffs, a faint ring stain on the wood —
  and nothing is arranged or styled for the camera*. Same intent, four things a model
  can draw. Ran the audit immediately after, which caught the replacement breaking two
  prompts: Frame C (a featureless white field that now had wood in it) and Frame F (a
  pristine card told to look scuffed). Both given bespoke variants. Research: **Warp
  also uses `preload="none"`**, making it a pattern rather than a Framer quirk — and a
  15th site with no hero video.
- **2026-08-15 · pass 12** — **Prompt register.** Added a **short-form variant of every
  shot prompt** (~70 words: subject, the one move, the light, the two exclusions that
  matter) to run head-to-head against the long forms on the same seed — long prompts
  dilute on some models and this tells you which register yours prefers. Added
  **tiered negative prompts**: a 10-term Tier 1 that is never omitted, each term both
  likely and fatal, with the existing 30–45-term lists demoted to Tier 2. Flagged
  `hard cut, second shot` as the single most valuable negative, since models insert an
  edit whenever a prompt describes a change of state. Added the honest counter-note
  that twelve passes of adding detail is not monotonically good. Research: **Framer
  uses `preload="none"` on every video**, which is why 3.87 MB below the fold costs it
  nothing at first paint — delivery spec corrected from an unconditional
  `preload="metadata"` to a position-dependent rule. Also mapped where responsive video
  actually stands: Mercury declarative, Prism JS, Framer/Superhuman single-tier.
- **2026-08-15 · pass 11** — **Verified the new benchmark, and corrected pass 10.**
  Checked whether Superhuman's `-desktop-2x` suffix hid a ladder the way Prism's did:
  it does not — one `<source>`, no `media`, 1.71 MB re-confirmed, benchmark holds.
  Then chased Mercury's `-lg` and found **pass 10's claim that no measured site uses
  `<source media>` was wrong.** Mercury ships three tiers declaratively —
  `hero-scrub-lg/md/sm.mp4` at **4.68 / 3.06 / 2.29 MB**, selected by
  `(min-width: 64rem)`, `(min-width: 40rem)` and an unconditional fallback. Added the
  markup pattern and the **first-match-wins ordering rule** (largest breakpoint first,
  fallback last — reversed, everyone gets the small file). Delivery spec updated from
  "plan on a JS switch" to Mercury's declarative three-tier pattern.
- **2026-08-15 · pass 10** — **Major correction.** Fetched every hero variant from
  Prism and found the document had been quoting the wrong file since pass 1.
  `hero-candidates.webm` at 1.47 MB is the **SD/mobile tier**; the desktop `<video>`
  points at `hero-candidates-hd.webm` at **5.11 MB** (6.66 MB mp4). Prism ships eight
  hero files — 2 audiences × 2 quality tiers × 2 formats — plus two laddered posters
  (274 KB / 107 KB), and selects among them **in JavaScript**: no `<source media>`
  anywhere. This kills the earlier "play-once is ~3× cheaper than scrubbing"
  conclusion — Prism plays once and spends 5.11 MB. Rewrote the weight ladder,
  delivery spec (**< 1.8 MB desktop**) and encode checklist around **Superhuman's
  1.71 MB**, which is a genuine desktop file and now the benchmark. Added the method
  note: `currentSrc` in a backgrounded tab is meaningless, and Resource Timing sizes
  are redacted cross-origin without `Timing-Allow-Origin` (Linear reported 250
  resources totalling 0 bytes).
- **2026-08-15 · pass 9** — **Consistency audit.** No new sites; instead re-read every
  prompt hunting for self-contradiction, and found three. The significant one: the
  anchor declared the palette **"restricted to"** three colours while six prompts went
  on to name `#1E7A57` or the six thread colours — a flat contradiction sitting in the
  most heavily-weighted sentence of the set. Rewritten to **"built on … ; no other
  colour appears anywhere except where named above."** Also removed duplicated
  `Photorealistic … 16:9` openers introduced by pass 8's conforming, and documented
  §4a's one legitimate within-set variation (Shot 2 cannot both blow out to pure white
  and avoid crushed highlights). Added the audit table, a list of things checked and
  deliberately left alone, and the general note that a contradicted model picks one
  instruction silently rather than erroring — making contradiction the most expensive
  and least visible defect a prompt can carry.
- **2026-08-15 · pass 8** — **Conformance complete.** Frames A–F and all five §4b
  plates rewritten so their style clauses are word-identical to their anchor and sit in
  the same position; added an explicit **plate anchor** for §4b that differs from the
  §4 anchor in exactly two controlled ways. Every prompt in the document now differs
  from its siblings only in lens, subject, light, motion, what-must-not-move, and final
  frame. Researched a specific question — *does anyone honour `prefers-reduced-motion`
  for a hero video?* — and found Prism carries **four** reduced-motion blocks, **none
  of which touch the video**, because the blanket `animation-duration: 0.01ms` reset
  does nothing to a `<video>`. Added the explicit JS fix. Superhuman inconclusive (13
  cross-origin stylesheets).
- **2026-08-15 · pass 7** — Added Superhuman (**1.71 MB**, `autoplay` + `loop=false`,
  independently confirming the play-once-and-hold pattern) and Framer (3.87 MB looping
  product film *below* the type, with a poster). Rebuilt the weight ladder around
  playback mode: play-once **1.47–1.71 MB**, loop 3.87–12.65 MB, scrub 4.68 MB.
  **Resolved a contradiction introduced in pass 6** — the style anchor was added while
  the prompts still re-described style inline. Chose the embedded approach and
  conformed Shots 1–4 so their palette, grain, shoulder and exclusion clauses are now
  word-identical; frames and plates are flagged as not yet conformed. Added **§0 Start
  here**, an operator's page with four entry routes and a section map, because the
  document had grown past the point where the prompts were easy to find.
- **2026-08-15 · pass 6** — Measured **Granola's typography** against
  `src/index.css` and found the system correct but the execution timid (H1 74 px vs
  104.7 px, H2 48 px vs 160 px, weight 500 vs 400, line-height 1.04 vs 0.93, measure
  17ch vs ~10ch). Added Runway (zero video on an AI-video company's homepage) and
  self-corrected a mis-read where I counted static `.webp` files as animated from the
  extension alone. Added **the style anchor** — one byte-identical style block pasted
  into every prompt, with variant rules for §4a and §4b — which is the highest-value
  consistency lever in the document. Added **§5b, the Path 2b implementation sketch**:
  seven-layer inventory, a reuse map from `EvidenceChip.jsx` (including deleting its
  `IntersectionObserver` gate, which fights ScrollTrigger), a scrubbed timeline
  skeleton whose durations sum to 1.0 so they read as the beat-table percentages, five
  known traps, and a ~22 KB weight budget.
- **2026-08-15 · pass 5** — Added Granola (**closest aesthetic sibling**: serif on
  cream, no video, diegetic cursor motion inside a product mock) and Cursor (one
  video on the page — a 96×24 nav logo). Vercel redirected to a dashboard and was not
  measured. Named **Pattern E** (type left, visual right) and collected all six
  measured pinned-track ratios in one table. Paid off two outstanding promises:
  **§4a the high-contrast variant** for Patterns C/D/E — a full alternate Shot 1 at
  16:1 lighting plus line-level deltas for Shots 2–4 — and **§4c finishing and
  encoding**, with trim/concat/two-pass VP9/H.264/scrub-keyframe/poster commands and
  a pre-ship checklist. Flagged that the flat `#FAF9F5` resolve is the hardest thing
  in the film to compress and must be graded and checked first.
- **2026-08-15 · pass 4** — Added Metaview (second direct competitor, no hero video)
  and Raycast (zero video; **533** transition-carrying elements). Scoreboard now ten
  sites: eight of ten ship no hero video, both direct competitors ship none. Added
  **§4b Path 1-C — texture plates and compositing**: the `screen`-over-black
  technique with five full plate prompts (fibre dissolve, dust beam, six threads,
  the trace, ink bleed), the CSS recipe, duration and fps guidance, and a **9:16
  portrait re-generation** rule that rotates the split from left/right to top/bottom
  rather than cropping. Corrected the Prism final-frame claim to separate what was
  measured from what was inferred.
- **2026-08-15 · pass 3** — Added Attio (zero video, 5 pinned stages, measured track
  ratios 1.43×–8.2×) and Ashby (the direct competitor — nothing at all). Added the
  eight-site scoreboard: six of eight ship no video. Named Pattern D (no hero
  visual). Corrected the Path 2 track length from 2.5× to **4–6×** on Attio's
  evidence. Added craft rules 9–10 (motion curves, seed discipline) and an
  eleven-point **rejection rubric**. Gave all four shots an explicit motion curve
  in both the spec table and the prompt body.
- **2026-08-15 · pass 2** — Added Linear (zero video; measured grain/glow blend
  values) and Clay (12.65 MB, frame-range filename, Pattern C layout). Added the
  weight ladder and the three named layout patterns. Rewrote all four shot prompts
  and all six frame prompts to an eight-rule craft standard: named camera/lens/
  stock, lighting as a setup, motion with a rate, explicit *what must not move*,
  material specification, and per-shot negative prompts. Opened the idea pile.
- **2026-08-15 · pass 1** — Initial: Prism and Mercury findings, the AI-generation
  constraint, Path 1 (four-shot film) and Path 2 (scroll-pinned stage).
