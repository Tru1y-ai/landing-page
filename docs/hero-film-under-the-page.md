# Truly — hero film: "Under the Page"

One continuous photoreal macro shot, under five seconds. A résumé goes translucent and
reveals the bound record underneath it.

Written 2026-08-15. Supersedes `hero-film-across-the-screen.md` (four-shot film, ~19s) and
`concept-b-generation-sheet.md` (flat-graphic version of this idea). The near-miss
protocol, attempt log and encoding chain in that second file still apply unchanged.

---

## 0. Hard requirements

1. **Fully photoreal live-action throughout, including the final frame.** Nothing
   illustrated, animated, vector, flat or diagrammatic appears anywhere. `#FAF9F5` is the
   colour of a real surface under real light, never a fill.
2. **Under five seconds.** Target **4.8s**, generate longer and trim.
3. **No text in the film.** The headline is real DOM text, revealed when the film ends
   (§6). This is what Prism does.

Requirement 1 is why every previous end frame failed: prompts saying `flat, even field`,
`no visible light source`, `low contrast` describe vector artwork and cancel any
`photorealistic` clause that follows. That language does not appear in this document.

---

## 1. The idea

A single sheet of paper lies on dark wood — a résumé. Bright, cold, coated stock, printed
**machine-perfect**: every block the same weight, every margin identical, flawless and
characterless. It is a claim, and it tells you nothing.

Then light rises from underneath it. The paper goes translucent the way real paper does
against a window — and what shows through is that the sheet was lying on top of a **thick
bound report**. Thirty-odd pages of warm cream uncoated stock, a stitched spine, dense
irregular printing, handwriting in the margins, six coloured index tabs proud of the page
block.

The cold printing on top fades. The layers underneath sharpen. The top sheet dissolves
into the light, the wood brightens away, and the report is left sitting on clean warm
off-white — with the top two-thirds of frame empty, waiting for the headline.

**One page of claim. Thirty pages of record underneath it.**

### How "AI slop" is said without a readable word

Never through text — text always garbles and would break requirement 3. Through **print
character and paper stock**:

| | The résumé | The report underneath |
|---|---|---|
| Stock | bright **coated** white, cold | warm **uncoated** cream, visible tooth |
| Printing | laser-crisp, mechanically even, identical margins, every block the same weight | irregular density, varied block sizes, handwritten margin notes |
| Light | hard cool 5600K key, 8:1, clinical | warm, from within and above |
| Edges | perfectly guillotined | slightly scuffed, one bent corner |

Flawless reads as machine-made. Irregular reads as human. The film travels **cold and
perfect → warm and real**, which is also its emotional arc and its colour arc.

### What the six tabs carry

The six evaluator colours, as real index tabs — the only saturated objects in the film:

`#2F6B4A` moss · `#1F6E75` teal · `#4A2F63` plum · `#C4762B` amber · `#A6472F` clay ·
`#1E7A57` forest

They are physical card tabs catching light, not graphics.

---

## 2. Beats

| Time | Beat |
|---|---|
| **0.0–1.0** | The résumé alone. Opaque, cold, hard-lit from frame right, walnut falling to near-black. Nothing moves. |
| **1.0–2.6** | The backlight rises. The paper turns translucent, fibres lighting from within. Shapes resolve underneath: page layers, a stitched spine, the coloured tab edges. |
| **2.6–3.8** | The cold printing on the top sheet fades out. The report beneath sharpens and gains depth — it is clearly a thick bound document, not a second sheet. |
| **3.8–4.8** | The top sheet's edges dissolve. Exposure lifts, the walnut brightens away, and the report settles into the **lower third** of a clean warm `#FAF9F5` field. Upper two-thirds empty. **Hold.** |

4.8s is tight for this arc but it is *one variable* — the backlight — so it holds
together. If it feels rushed in generation, 6s is a reasonable stretch; the DOM headline
reveal doesn't care.

**The composition at the end is the whole point.** Report low, upper two-thirds clean
paper-white, because that is where your centred serif headline lands one beat later.

---

## 3. Style anchor

Paste verbatim into both frame prompts and the video prompt. Word-identical, same
position — after subject, light and motion, before the final-frame line.

> **Style:** photorealistic live-action macro cinematography, shot on ARRI Alexa with a
> Kodak Vision3 500T stock, 16:9. Real paper, real wood, real light — actual photographed
> objects with visible fibre, tooth and wear. Muted, warm, low-saturation palette built on
> warm near-black #1B1A15 and cream #FAF9F5; no other colour appears anywhere except where
> named above. Fine 35mm film grain throughout, soft shoulder. Every object is used rather
> than new — a bent corner, a faint ring stain on the wood, a slightly scuffed edge. No
> faces, no bodies, no arms above the wrist, no readable text, no letters or numbers, no
> user interface, no logos, and nothing illustrated, animated, vector, flat or
> diagrammatic anywhere in frame.

---

## 4. Frame A — the start

Generate this first and alone. It is the cheap test of whether the model renders coated
white paper as *cold and machine-made* against warm wood — the contrast the whole film
rests on.

16:9, 1920×1080 minimum. Hold the seed across both frames.

```
Photorealistic still, macro, of a single sheet of bright white coated paper lying flat on
dark quarter-sawn walnut, the sheet filling about seventy percent of the frame, seen from
almost directly overhead with the camera tipped about fifteen degrees off vertical so all
four of its edges sit close to parallel with the edges of the frame. The sheet is printed
with mechanically even blocks of fine grey lines, laser-crisp and perfectly regular, every
block the same weight, every margin identical, the printing flawless and machine-made
across the whole page. The paper is fully opaque and evenly surfaced, its edges cleanly
guillotined. Lit by one hard cool 5600K key from frame right at an eight-to-one ratio with
no fill, so the sheet reads cold and clinical while the walnut around it falls to
near-black at the frame edges. 100mm macro lens at T2.8, shallow depth of field with the
paper surface sharp. Photorealistic live-action macro cinematography, shot on ARRI Alexa
with a Kodak Vision3 500T stock, 16:9. Real paper, real wood, real light — actual
photographed objects with visible fibre, tooth and wear. Muted, warm, low-saturation
palette built on warm near-black #1B1A15 and cream #FAF9F5; no other colour appears
anywhere except where named above. Fine 35mm film grain throughout, soft shoulder. Every
object is used rather than new — a bent corner, a faint ring stain on the wood, a slightly
scuffed edge. No faces, no bodies, no arms above the wrist, no readable text, no letters
or numbers, no user interface, no logos, and nothing illustrated, animated, vector, flat
or diagrammatic anywhere in frame.
```

**Negative — Frame A**

```
cartoon, illustration, illustrated, animation, animated, 2D, flat design, vector, motion
graphics, infographic, diagram, CGI look, 3D render look, video game, readable text,
letters, numbers, handwriting on the top sheet, logos, watermark, user interface, charts,
graphs, warm paper, cream paper, textured paper, deckle edge, torn paper, crumpled paper,
tray, box, picture frame, raised lip, second surface, three-quarter view, steep
perspective, strong foreshortening, vanishing point, golden wood, orange wood,
honey-coloured wood, saturated wood, amber cast, faces, hands, oversaturated, HDR, lens
flare, bokeh balls, clutter
```

Note `warm paper, cream paper, textured paper, deckle edge` in the negative — the *top*
sheet must be the cold machine-made one. Every earlier attempt in this project produced
beautiful warm deckle-edged stock, which is now the wrong material for this frame and the
right material for the report underneath.

---

## 5. Frame B — the end frame and `poster`

The most important image in the set: the frame the film holds forever, the poster before
the video decodes, the thing behind your headline on a slow connection, and — because the
headline appears *after* the film — the only frame that has to support type.

```
Photorealistic still, macro, of a thick bound report lying on a clean warm off-white
surface #FAF9F5 in soft even morning light. The report has roughly thirty pages of warm
cream uncoated stock with visible tooth, a stitched spine along its left edge, one
slightly bent corner, and six small coloured card index tabs standing proud of the page
block along its right edge — deep moss green #2F6B4A, teal #1F6E75, plum #4A2F63, amber
#C4762B, rust clay #A6472F and forest green #1E7A57. Its pages carry dense irregular
blocks of fine grey lines of varying weight and width, with occasional handwritten
annotation in the margins, all far too small to resolve into words. The report sits in the
lower third of the frame and the upper two-thirds is clean empty off-white surface,
softly and evenly lit, holding only a very faint paper tooth and the report's own soft
contact shadow. Seen from almost directly overhead with the camera tipped about fifteen
degrees off vertical. 100mm macro lens at T2.8, shallow depth of field with the tabs and
the near page edge sharp and the far edge falling softly. Photorealistic live-action macro
cinematography, shot on ARRI Alexa with a Kodak Vision3 500T stock, 16:9. Real paper, real
wood, real light — actual photographed objects with visible fibre, tooth and wear. Muted,
warm, low-saturation palette built on warm near-black #1B1A15 and cream #FAF9F5; no other
colour appears anywhere except where named above, with the six tab colours as the only
saturated elements. Fine 35mm film grain throughout, soft shoulder. Every object is used
rather than new — a bent corner, a faint ring stain on the wood, a slightly scuffed edge.
No faces, no bodies, no arms above the wrist, no readable text, no letters or numbers, no
user interface, no logos, and nothing illustrated, animated, vector, flat or diagrammatic
anywhere in frame.
```

**Negative — Frame B**

```
cartoon, illustration, illustrated, animation, animated, 2D, flat design, vector, motion
graphics, infographic, diagram, CGI look, 3D render look, video game, readable text,
letters, numbers, legible words, headings, percentages, charts, graphs, bar charts,
dashboards, screens, spiral binding, ring binder, clipboard, glossy magazine, coated
paper, plastic tabs, sticky notes, paperclips, dark background, grey background, wood,
desk, walnut, vignette, corner darkening, gradient background, yellow cast, cold white,
blue-white, report filling the frame, centred composition, faces, hands, oversaturated,
HDR, lens flare
```

`wood, desk, walnut` are in the negative deliberately — by this frame the wood is gone.
`centred composition` and `report filling the frame` keep the upper two-thirds clear for
type.

---

## 6. The film

Condition on **Frame A → Frame B**. Generate the longest clip the model offers and trim
to 4.8s; models drift late.

| | |
|---|---|
| **Shot size** | Macro, sheet filling most of frame, near-overhead |
| **Camera** | Locked off for the entire shot. Zero movement |
| **Lens** | 100mm macro at T2.8, focus on the paper surface |
| **Light** | Begins as one hard cool 5600K key from frame right; a warm source rises *beneath* the sheet and becomes dominant; overall exposure lifts at the end |
| **Moves** | The backlight rising; the cold printing fading; the layers underneath resolving; the exposure lift |
| **Must not move** | The camera, the sheet, the report, the framing |
| **Curve** | The backlight rises on a slow steady ramp with no flicker. The exposure lift eases to a complete stop over the final half-second and holds |

```
Macro shot, locked-off camera, looking down at a shallow angle onto a single sheet of
bright white coated paper lying flat on dark quarter-sawn walnut, the sheet filling most
of the frame. The sheet is printed with mechanically even blocks of fine grey lines,
laser-crisp and perfectly regular, every block the same weight and every margin identical,
the printing flawless and machine-made. It begins lit only by one hard cool 5600K key from
frame right at an eight-to-one ratio, so the sheet reads cold and clinical while the
walnut falls to near-black at the frame edges. A second warm light then rises slowly from
directly beneath the sheet, and the paper becomes translucent the way real paper does when
held up to a window, its fibres and tooth lighting from within. Showing through from
underneath, in silhouette and glow, is a thick bound report lying beneath the sheet:
roughly thirty pages of warm cream uncoated stock, a stitched spine along the left, dense
irregular blocks of printing of varying weight, handwritten annotation in the margins, and
six small coloured card index tabs standing proud of the page block along the right edge —
deep moss green #2F6B4A, teal #1F6E75, plum #4A2F63, amber #C4762B, rust clay #A6472F and
forest green #1E7A57. As the backlight strengthens, the cold machine printing on the top
sheet fades away, the layers beneath sharpen and gain real physical depth, and the top
sheet's own edges dissolve into the light until only the bound report remains, now lit
warmly and evenly from above. Over the final second the exposure lifts smoothly, the
walnut brightens and disappears, and the report settles into the lower third of a clean
warm off-white #FAF9F5 field with the upper two-thirds of frame clean and empty. The
backlight rises on a slow steady ramp with no flicker or pulsing. The camera holds
completely still and does not pan, tilt, zoom, rack focus or rotate at any point; the
sheet, the report and the framing stay fixed. 100mm macro lens at T2.8, shallow depth of
field with the paper surface sharp. Photorealistic live-action macro cinematography, shot
on ARRI Alexa with a Kodak Vision3 500T stock, 16:9. Real paper, real wood, real light —
actual photographed objects with visible fibre, tooth and wear. Muted, warm,
low-saturation palette built on warm near-black #1B1A15 and cream #FAF9F5; no other colour
appears anywhere except where named above, with the six tab colours as the only saturated
elements. Fine 35mm film grain throughout, soft shoulder. Every object is used rather than
new — a bent corner, a faint ring stain on the wood, a slightly scuffed edge. No faces, no
bodies, no arms above the wrist, no readable text, no letters or numbers, no user
interface, no logos, and nothing illustrated, animated, vector, flat or diagrammatic
anywhere in frame. Final frame: a bound cream report with six coloured index tabs sitting
in the lower third of a clean warm off-white field, the upper two-thirds empty.
```

**Short form** — generate on the same seed and keep whichever register the model handles
better. One extra generation, information you keep.

```
Macro, locked camera. A sheet of cold bright coated paper on dark walnut, printed in
flawless machine-even grey blocks. A warm light rises from beneath it and the paper turns
translucent, glowing through its fibres. Showing through from underneath is a thick bound
report — thirty pages of warm cream uncoated stock, a stitched spine, irregular dense
printing, handwriting in the margins, six coloured index tabs down the right edge. The
cold printing fades, the layers sharpen, the top sheet dissolves into the light, the wood
brightens away, and the report settles low on a clean warm off-white field. Slow steady
ramp, no flicker. Real photographed paper, 35mm film, fine grain. No text, no hands.
```

**Negative — Tier 1, never omit**

```
cartoon, illustration, animation, 2D, flat design, vector, motion graphics, diagram,
readable text, letters, numbers, logos, watermark, faces, hands, camera shake, lens flare,
hard cut, second shot
```

**Negative — Tier 2**

```
x-ray, medical scan, blueprint, tracing paper, vellum overlay, double exposure, ghosting,
glitch, scan lines, hologram, UI, dashboard, charts, graphs, laser show, neon, rainbow,
prism, strobe, flicker, pulsing, burning paper, fire, embers, smoke, wet paper, torn
paper, crumpled paper, single sheet underneath, flat sheet underneath, blue-white light,
cold white at the end, HDR, plastic surfaces, tilted horizon, camera movement, zoom
```

`x-ray, medical scan, blueprint, hologram` stay at the top of Tier 2 — a translucency
prompt drifts toward those faster than anything else, and it is the one failure that would
make the film read as a different product entirely. `single sheet underneath, flat sheet
underneath` is new and matters: the reveal must have **depth**, or the whole idea collapses
back into the flat graphic this brief exists to avoid.

---

## 7. Rejection rubric

Reject on sight.

| Reject if |
|---|
| Anything in frame looks illustrated, animated, flat, vector or diagrammatic |
| Any text, letters or numbers are legible |
| The thing underneath is a flat image or a single sheet rather than a **thick bound object with depth** |
| The top sheet reads warm, textured or deckle-edged — it must be cold, coated, machine-made |
| It reads as x-ray, blueprint, medical scan or hologram |
| The camera moves at any point |
| The sheet or the report shifts position |
| Fewer or more than six tabs, or two tabs the same colour |
| Any lens flare, bloom ball or light streak |
| The palette drifts cyan, magenta or blue-white |
| **The final frame is not a bright warm `#FAF9F5`-valued real surface with the upper two-thirds empty** |

---

## 8. Delivery and the text reveal

**Encode** per `concept-b-generation-sheet.md` §6 — trim, two-pass VP9, H.264 fallback with
`+faststart`, `-an` on everything, poster from the **last** frame with `-sseof`.

At under five seconds this is a much lighter asset than anything previously costed:

| Item | Target |
|---|---|
| `hero.webm` | **< 900 KB** |
| `hero-mobile.webm` | < 400 KB |
| `poster.webp` (Frame B) | < 120 KB |
| Audio streams | zero |

**Layout: Pattern A survives.** Because the headline appears *after* the film ends, only
the held final frame has to support type — and Frame B is composed for exactly that, report
low and upper two-thirds clean. No hero rebuild.

But the hero does have to go light: the film resolves to `--paper`, so `.h1` returns to
`--ink`, its `text-shadow` comes off, `.hero-mesh` is replaced by the video, and every
white-on-dark value in `.hero-sub`, `.eyebrow`, `.hero-note` and both `.btn` variants needs
a dark-on-paper counterpart.

**The reveal.** `Hero.jsx` already builds the timeline — SplitText word stagger on `.h1`,
then sub, then CTAs, then note. It currently runs on load. Gate it on the video instead:

```js
const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
// … existing tweens, minus the .hero-mesh tween …

const v = videoRef.current;
const reveal = () => tl.play();

if (reduce || !v) {
  tl.progress(1);                                  // resting state is the finished state
} else {
  v.addEventListener('ended', reveal, { once: true });
  setTimeout(reveal, 6000);                        // fallback: never trap the headline
  v.play().catch(reveal);                          // autoplay blocked → reveal anyway
}
```

Three things that will bite:

1. **Never gate the headline on playback alone.** If autoplay is blocked, the file 404s, or
   decode stalls, the hero renders with no headline. The timeout and the `.catch` are not
   optional.
2. **`prefers-reduced-motion` must show the poster and the finished text.** Set
   `tl.progress(1)`, don't play the video. The CSS reduced-motion reset does nothing to a
   `<video>` element.
3. **Drop the `.hero-mesh` tween** — `gsap.from('.hero-mesh', { autoAlpha: 0, scale: 1.22 })`
   currently animates an element the video replaces, and a 1.4s scale-down fighting the
   film's own motion is exactly the collision the research doc warns about.

---

## 9. What this replaces

| File | Status |
|---|---|
| `hero-film-across-the-screen.md` | **Superseded.** Four shots and ~19s cannot fit under five |
| `concept-b-generation-sheet.md` | **Superseded as a concept.** Its near-miss protocol, attempt log and encoding chain remain correct and are referenced here |
| `hero-motion-directions.md` | Still the research of record — site measurements, layout patterns, craft rules, weight ladder |
| `start2.png` | Closest existing frame to Frame A, but the wrong stock: warm and deckle-edged where this needs cold and coated |
| `end.png`, `end2.png`, `ending.png`, `starting.png` | Retire. All flat graphics |
