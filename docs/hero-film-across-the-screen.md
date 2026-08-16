# Truly — hero film: "Across the Screen"

A photoreal live-action film telling the recruiter's story: the interview that tests
performance, the volume that makes it unscalable, the work done for real, and the record
that comes back readable.

Written 2026-08-15. Supersedes `concept-b-generation-sheet.md` for the hero. Palette from
`src/index.css`. Craft rules, near-miss protocol and encoding chain carry over from
`hero-motion-directions.md` unchanged.

---

## 0. The hard requirement

**Every frame is photoreal live-action. Nothing in this film is illustrated, animated,
vector, flat, diagrammatic or rendered-looking — including the final frame.**

This is a change from every previous brief, and it is the reason those briefs kept
producing flat graphics: their end-frame prompts said `flat, even field`, `no visible
light source`, `low contrast`. Those instructions *describe vector artwork*, and they
cancelled the `photorealistic` clause that followed them. All of that language is gone
here.

`#FAF9F5` is now **the colour of a real surface under real light**, never a fill.

Consequently, in **every** negative prompt in this document:

```
cartoon, illustration, illustrated, animation, animated, 2D, flat design, vector,
motion graphics, infographic, diagram, CGI look, 3D render look, video game, plastic
```

---

## 1. Layout — decide this first

**The film cannot go behind the headline.** Measured from `src/index.css`: the hero panel
is `min(1500px, 84vw)` minus 56px padding by roughly 700px tall, and the type runs from
**17% to 83% of its height** — eyebrow, H1, sub, two buttons, note. There is no empty band
to put a film in.

There is also the crop problem. The panel's aspect ratio swings with viewport:

| Viewport | Panel | Aspect |
|---|---|---|
| 1280 | ~1019 × 700 | 1.46 : 1 |
| 1440 | ~1154 × 700 | 1.65 : 1 |
| 1920 | ~1444 × 700 | 2.06 : 1 |

Against a 16:9 source (1.78:1) that is ~18% cropped off the sides on narrow screens and
~14% off the top and bottom on wide ones — a different crop at every width.

**So: Pattern C.** Clay's arrangement. The film occupies its own band at the top of the
page; the headline sits beneath it in a solid `--paper` band. Nothing overlaps.

What that buys you, and it is a great deal:

- **No scrim, no legibility compromise, no empty-upper-third rule.** The frame is free.
- **The grade can be hard** — 16:1 lighting, true blacks, specular highlights. This film
  is about a dark room and a bright morning; it needs that contrast.
- **The crop problem shrinks** — you control the band's height, so you can hold it near
  16:9 and letterbox gracefully.
- **`.hero-mesh` stays** if you want it, because the film is no longer competing with it.

The one cost: the fold moves down. Check the CTA is still reachable.

---

## 2. The story

Four shots, two continuous halves, **one deliberate cut** at the turn.

| | Shot | Time | What happens |
|---|---|---|---|
| **A** | **1 — Across the Screen** | 0:00–0:05 | Two figures either side of a laptop in a dark room. Its screen is the only light and it splits the frame. Both are performing. |
| | **2 — The Queue** | 0:05–0:09 | Same frame. The recruiter never moves. Opposite them, candidate after candidate appears and dissolves, faster and faster. The paper stack grows. The clock blurs. |
| | | | **← CUT. The only edit in the film, and it is the turn.** |
| **B** | **3 — On Their Own Machine** | 0:09–0:14 | Daylight. One person at their own desk, over the shoulder, working. Nobody watching. Nothing performed. |
| | **4 — The Report** | 0:14–0:19 | A bound printed report lands on a pale desk in morning light. Six coloured tabs down its edge. The exposure lifts to `#FAF9F5` and holds. |

~19 seconds. **Shot 2 is the cuttable one** if you need it shorter — Shots 1, 3 and 4
still carry the argument at ~14s.

**Why the structure works for generation:** Shots 1→2 share a locked-off frame, so they
join on a hinge. Shots 3→4 are a continuous move through one warm space. The two halves
meet at a hard cut you make yourself in ffmpeg — which is the one place a model would
have been asked to transform one world into another, and it is now simply an edit.

**Why it works dramatically:** Shot 2 ends on an **empty chair**. Shot 3 opens on the
person who was in it, working alone. The cut does the argument — the recruiter no longer
has to be in the room.

### One honest flag on Shot 1

The candidate's side carries a phone glowing under the table and a folded sheet of notes.
Written to say *this person is performing*. Read quickly — and a hero gets read quickly —
it can say *we can see your phone*. `hero-motion-directions.md` §1b records that the site
deliberately moved away from describing what it observes.

Two mitigations are already in the prompt: the props sit at the very edge of the light
rather than being featured, and **both sides are performing** — the recruiter's stack and
clock are given equal weight. The shot is about a format that tests the wrong thing, not
about catching someone. If it still reads wrong in generation, cut the phone and keep the
notes.

---

## 3. The style anchor

Paste verbatim into every prompt. Word-identical, in the same position — after subject,
light and motion, before the final-frame line.

> **Style:** photorealistic live-action, shot on ARRI Alexa with a Kodak Vision3 500T
> stock, 16:9, anamorphic. Muted, warm, low-saturation palette built on warm near-black
> #1B1A15, cream #FAF9F5 and faint grey-green #97927F; no other colour appears anywhere
> except where named above. Faces stay in shadow and out of focus throughout — the people
> read as anonymous through profile, rim light, over-the-shoulder framing and shallow
> depth of field. Every surface is used rather than new: worn edges, small scuffs, a faint
> ring stain on the wood, and nothing arranged or styled for the camera. Fine 35mm film
> grain throughout. Real photographic footage of real people in a real room.

That last sentence is doing work. Keep it.

### Palette

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#1B1A15` | the dark room, shots 1–2 |
| `--paper` | `#FAF9F5` | the morning, shot 4, the resolve |
| `--faint` | `#97927F` | mid-tones |
| screen glow | `#6E8FA8` cold | the laptop and the phone — the only cool note in the film |

The six evaluator colours, for the report tabs in Shot 4 only:

`#2F6B4A` moss · `#1F6E75` teal · `#4A2F63` plum · `#C4762B` amber · `#A6472F` clay ·
`#1E7A57` forest

---

## 4. Shot 1 — Across the Screen

| | |
|---|---|
| **Shot size** | Wide, side-on, camera at desk height |
| **Camera** | Locked off. Zero movement |
| **Lens** | 40mm anamorphic, T2.8, focus on the laptop plane |
| **Light** | The laptop screen alone, cold 6500K, 16:1, no fill |
| **Moves** | Small conversational movements; the phone glow; the clock's second hand |
| **Must not move** | Camera, table, laptop, mug, framing |
| **Curve** | Camera absolutely still. The clock hand is the only thing that accelerates |

> Wide side-on shot at desk height of two seated figures facing each other across a small
> dark table. An open laptop stands at the exact centre of frame seen edge-on, and its
> screen throws a narrow vertical blade of cold 6500K light straight upward, rimming both
> figures from the inside and dividing the frame down the middle. The figures are seen in
> pure profile and lit only along their edges; their faces remain in deep shadow and
> softly out of focus, so they read as two anonymous silhouettes. On the left of the
> laptop: a leaning stack of a dozen uncoated cream paper sheets, a cooling ceramic mug,
> and a plain round wall clock on the wall behind whose second hand sweeps steadily. On
> the right of the laptop: a phone lying face-up on the seated figure's thigh below the
> table edge, throwing a cold rectangle of light up under the table, and a folded sheet
> of handwritten notes resting half inside that light at the table's edge. The room
> beyond both figures is unlit and falls to true black with no detail. Lighting is the
> laptop screen alone at a sixteen-to-one ratio with no fill and no bounce, so the
> figures are edges of light against black. 40mm anamorphic lens at T2.8, shallow depth
> of field with the laptop plane sharp. Both figures make small restrained conversational
> movements throughout, and the clock's second hand sweeps at a steadily increasing rate.
> The camera holds completely still and does not pan, tilt, zoom, rack focus or rotate at
> any point; the table, the laptop, the mug and the framing stay fixed.
> Photorealistic live-action, shot on ARRI Alexa with a Kodak Vision3 500T stock, 16:9,
> anamorphic. Muted, warm, low-saturation palette built on warm near-black #1B1A15, cream
> #FAF9F5 and faint grey-green #97927F; no other colour appears anywhere except where
> named above. Faces stay in shadow and out of focus throughout — the people read as
> anonymous through profile, rim light, over-the-shoulder framing and shallow depth of
> field. Every surface is used rather than new: worn edges, small scuffs, a faint ring
> stain on the wood, and nothing arranged or styled for the camera. Fine 35mm film grain
> throughout. Real photographic footage of real people in a real room. Final frame: both
> figures still in profile, the paper stack leaning, the clock hand blurred.

**Negative:**
`cartoon, illustration, illustrated, animation, animated, 2D, flat design, vector, motion
graphics, infographic, diagram, CGI look, 3D render look, video game, plastic, readable
text, letters, numbers, legible screen content, visible user interface, logos, watermark,
faces in full light, sharp faces, portrait, close-up of a face, eye contact with camera,
extra fingers, deformed hands, camera shake, handheld, zoom, dolly zoom, whip pan, lens
flare, bloom, oversaturated, neon, teal-and-orange grade, HDR, flat lighting, fill light,
lifted blacks, hard cut, second shot, split-screen border, black bars`

---

## 5. Shot 2 — The Queue

The rhythm is the point. Shot 1 is two people holding still; this one is a machine
cycling. That contrast is the argument about scale, and it is worth protecting in every
generation.

| | |
|---|---|
| **Shot size** | Identical framing to Shot 1's final frame |
| **Camera** | Locked off |
| **Lens** | 40mm anamorphic, T2.8 |
| **Light** | Unchanged — the laptop screen alone |
| **Moves** | Figures materialising and dissolving opposite; the stack growing; the clock |
| **Must not move** | The camera, the table, the laptop, and **the left-hand figure** |
| **Curve** | The cycle accelerates steadily from one per second to several per second and stops dead on the empty chair |

> Wide side-on shot at desk height, locked-off camera, identical framing, lighting and
> palette to the previous shot, continuing directly from it. The seated figure on the left
> of the laptop remains completely motionless in exactly the same position for the whole
> shot. In the chair opposite, a succession of different seated figures appears and
> disappears: each one materialises in place, holds for a fraction of a second, then
> dissipates into a soft motion-blurred smear as the next arrives, the rate increasing
> steadily from roughly one per second at the start to several per second by the end.
> Each figure is a different build, height and posture, every one of them rim-lit by the
> same laptop screen with the face in deep shadow. The leaning stack of cream paper sheets
> on the left grows taller in small increments as the figures cycle. The clock's second
> hand accelerates until it is a continuous blur. Long-exposure photographic ghosting, the
> way a slow shutter records a crowd. The room beyond falls to true black. The camera
> holds completely still and does not pan, tilt, zoom or rack focus at any point.
> Photorealistic live-action, shot on ARRI Alexa with a Kodak Vision3 500T stock, 16:9,
> anamorphic. Muted, warm, low-saturation palette built on warm near-black #1B1A15, cream
> #FAF9F5 and faint grey-green #97927F; no other colour appears anywhere except where
> named above. Faces stay in shadow and out of focus throughout — the people read as
> anonymous through profile, rim light, over-the-shoulder framing and shallow depth of
> field. Every surface is used rather than new: worn edges, small scuffs, a faint ring
> stain on the wood, and nothing arranged or styled for the camera. Fine 35mm film grain
> throughout. Real photographic footage of real people in a real room. Final frame: the
> left figure motionless, **the chair opposite empty**, the paper stack at its tallest and
> leaning.

**Negative:** Shot 1's list, plus
`teleporting, glitching, digital dissolve, pixel dissolve, particle effect, hologram,
duplicate identical people, clones, twins, morphing faces, strobe, flicker`

---

## 6. Shot 3 — On Their Own Machine

The turn. **Generate this as a separate clip and cut to it in ffmpeg** — do not ask a
model to get here from the dark room.

Over-the-shoulder is deliberate and load-bearing: it puts the viewer *with* this person
rather than watching them. Any framing that looks in at their face turns the shot into
surveillance, which is the wrong note for this product.

| | |
|---|---|
| **Shot size** | Medium, from behind and slightly above one seated person |
| **Camera** | Slow push in, 30 cm over the shot |
| **Lens** | 50mm, T2.0 |
| **Light** | Large window frame-left, warm low golden-hour daylight, 3:1, soft |
| **Moves** | Typing in bursts; a pause; writing in a notebook; turning to a second screen |
| **Must not move** | The desk, the window light, the framing |
| **Curve** | Eases in from stillness over the first half-second, then constant |

> Medium shot from behind and slightly above a single person sitting at their own desk in
> a lived-in room, their back and one shoulder filling the lower left of frame and their
> head seen only from behind, never in profile and never turning toward the camera. A
> large window fills the left of frame with warm low golden-hour daylight raking across
> the desk at a three-to-one ratio, soft and directional, with visible dust drifting in
> the beam. On the desk: a mechanical keyboard with worn keycaps, two monitors at an
> oblique angle showing soft unreadable shapes of pale green on near-black, an open spiral
> notebook with handwriting, a wooden pencil, a ceramic mug, headphones resting around the
> person's neck, and a small trailing plant in a terracotta pot. The person works: typing
> in short bursts, pausing to look at the second screen, writing a line in the notebook,
> returning to the keyboard. Their movements are unhurried and unperformed, the movements
> of someone alone in a room. The camera pushes in thirty centimetres across the shot,
> easing in from complete stillness over the first half-second and then holding a constant
> rate, and does not pan, tilt or rotate. The desk, the window light and the framing stay
> fixed. 50mm lens at T2.0, shallow depth of field with the notebook and keyboard sharp
> and the far side of the room falling soft.
> Photorealistic live-action, shot on ARRI Alexa with a Kodak Vision3 500T stock, 16:9,
> anamorphic. Muted, warm, low-saturation palette built on warm near-black #1B1A15, cream
> #FAF9F5 and faint grey-green #97927F; no other colour appears anywhere except where
> named above. Faces stay in shadow and out of focus throughout — the people read as
> anonymous through profile, rim light, over-the-shoulder framing and shallow depth of
> field. Every surface is used rather than new: worn edges, small scuffs, a faint ring
> stain on the wood, and nothing arranged or styled for the camera. Fine 35mm film grain
> throughout. Real photographic footage of real people in a real room. Final frame: the
> person mid-keystroke, warm light across the desk, dust in the beam.

**Negative:** Shot 1's list, plus
`face visible, turning toward camera, profile view, front view, reverse angle, webcam
view, security camera, surveillance footage, someone watching, second person in the room,
readable code, legible screen, IDE, terminal text, cold light, blue light, overhead
fluorescent, office cubicle`

---

## 7. Shot 4 — The Report

The payoff, and the only shot that must land perfectly. It is also the most self-contained
— **if you generate nothing else, generate this one.**

The final two seconds resolve to `#FAF9F5`, which is your `--paper`. When the film stops,
the held frame sits on the same value as the page beneath it. The difference from every
previous brief: this is a **real surface in real light** that happens to be that value,
not a flat fill.

| | |
|---|---|
| **Shot size** | Medium-macro, desk height, shallow |
| **Camera** | Rises 25 cm over the final three seconds, decelerating to a dead stop |
| **Lens** | 85mm, T2.8 |
| **Light** | Broad soft morning window light, frame right, 2:1, lifting through the shot |
| **Moves** | The report set down; the hand withdrawing; the cover opening; exposure lifting |
| **Must not move** | The desk, the report once set down, the six tabs |
| **Curve** | Camera decelerates to a complete stop over the final second, then holds absolutely still for at least half a second |

> Medium-macro shot at desk height of a pale ash desk in broad soft morning light. A bound
> printed report — real uncoated cream paper, roughly thirty pages, with a visible stitched
> spine and a slightly soft cover — is set down onto the desk by a single bare hand, which
> then withdraws out of frame. Along the report's right-hand edge are six small coloured
> tabs, evenly spaced and slightly proud of the page block: deep moss green #2F6B4A, teal
> #1F6E75, plum #4A2F63, amber #C4762B, rust clay #A6472F and forest green #1E7A57. The
> cover lifts and the report falls open, its pages dense with soft grey horizontal bars of
> varying length arranged in blocks, like a document seen from too far away to read, with
> a thin coloured rule running down the outer margin of each page. Broad soft morning
> window light enters from frame right at a two-to-one ratio and lifts steadily through the
> shot, the paper going brighter and the shadows opening, until the desk and the room have
> gone to a clean warm off-white #FAF9F5 and the only things remaining in frame are the
> open report, its paper tooth, and the six coloured tabs. The camera rises twenty-five
> centimetres across the shot, decelerating smoothly to a complete stop over the final
> second and then holding absolutely motionless for the last half-second; it does not pan,
> tilt or rotate. The desk, the report once set down, and the six tabs stay completely
> still. 85mm lens at T2.8, shallow depth of field with the tabs and the near page sharp.
> Photorealistic live-action, shot on ARRI Alexa with a Kodak Vision3 500T stock, 16:9,
> anamorphic. Muted, warm, low-saturation palette built on warm near-black #1B1A15, cream
> #FAF9F5 and faint grey-green #97927F; no other colour appears anywhere except where
> named above, with the six tab colours as the only saturated elements. Faces stay in
> shadow and out of focus throughout — the people read as anonymous through profile, rim
> light, over-the-shoulder framing and shallow depth of field. Every surface is used rather
> than new: worn edges, small scuffs, a faint ring stain on the wood, and nothing arranged
> or styled for the camera. Fine 35mm film grain throughout. Real photographic footage of
> real people in a real room. Final frame: an open printed report on a bright warm
> off-white field, six coloured tabs down its edge, everything else clean paper-white.

**Negative:** Shot 1's list, plus
`readable text, legible words, paragraphs of type, headings, numbers, percentages, charts,
graphs, bar charts, dashboards, screens, tablet, laptop, glossy magazine, coated paper,
spiral binding, ring binder, clipboard, dark background at the end, grey background,
blue-white background, cold white, vignette at the end`

---

## 8. Frames to generate first

Six stills, before a single video credit. 16:9, 1920×1080 minimum, same seed across the
set wherever the model allows it.

| Frame | Is | Prompt |
|---|---|---|
| **A** | Shot 1 start | Shot 1's text, with `Final frame:` replaced by `Both figures seated in profile, the paper stack upright, the clock hand at twelve.` and all motion clauses removed |
| **B** | Shot 1 end / Shot 2 start | as A, but `the paper stack leaning noticeably, the clock's second hand motion-blurred` |
| **C** | Shot 2 end | as B, but **`the chair opposite the left-hand figure is empty`**, stack at maximum height. This frame is the film's hinge and the emotional centre — generate it properly |
| **D** | Shot 3 start | Shot 3's text, motion clauses removed, `the person's hands resting on the keyboard, warm light across the desk` |
| **E** | Shot 4 start | Shot 4's text, `the closed report just set down on the desk, hand still in frame, six tabs visible, morning light at normal exposure` |
| **F** | **Shot 4 end · the `poster`** | Shot 4's text, `the report open on a bright warm off-white field #FAF9F5, six coloured tabs, exposure fully lifted, nothing else in frame` |

**Frame F is the most important image in the set** — it is what the film holds on
forever, what sits above your headline before the video decodes, and on a slow connection
the only thing anyone sees. Generate it until it is right.

**Frame C is the second most important.** An empty chair opposite a motionless recruiter
is the whole argument in one still.

---

## 9. Rejection rubric

Reject on sight. None of these can be fixed downstream.

| Reject if |
|---|
| Anything in frame looks illustrated, animated, flat, vector or diagrammatic |
| Any text, letters or numbers are legible anywhere |
| A face is sharply resolved, fully lit, or looks at camera |
| Hands have wrong or duplicated fingers |
| The camera moves when the spec says locked-off |
| Shot 2's left-hand figure moves |
| The cycling figures in Shot 2 are identical to each other, or glitch/pixelate rather than blur |
| Shot 3 frames the person's face, or reads as surveillance footage |
| Any lens flare, bloom ball or light streak |
| The palette drifts cyan, magenta or blue-white |
| **Shot 4's final frame is not a bright, warm `#FAF9F5`-valued real surface** |

---

## 10. Assembly and delivery

**One cut, at the turn.** Trim each shot, concat 1+2, concat 3+4, then join the two halves
on a hard cut.

```bash
ffmpeg -ss 0.5 -to 5.5 -i shot1_raw.mov -c copy s1.mov     # trim each first
printf "file 's1.mov'\nfile 's2.mov'\nfile 's3.mov'\nfile 's4.mov'\n" > list.txt
ffmpeg -f concat -safe 0 -i list.txt -c copy film_master.mov
```

Then §4c of `hero-motion-directions.md` unchanged: two-pass VP9, H.264 fallback with
`+faststart`, `-an` on everything, poster from the **last** frame with `-sseof`.

**Weight, honestly.** At ~19s of photoreal live-action you will not hit the 1.8 MB target
that a 11s graphic film could. Budget **2.5–3.5 MB** desktop; Mercury spends 4.68 MB on
its scrub hero and Framer 3.87 MB below the fold. Ladder it with `<source media>`,
largest breakpoint first, and consider dropping Shot 2 if the number matters more than the
beat.

| Item | Spec |
|---|---|
| Playback | play once, hold the final frame. `muted playsinline`, **no `loop`** |
| `preload` | `metadata` — it is above the fold under Pattern C |
| Poster | Frame F as WebP, < 120 KB |
| CSS | `object-fit: cover; filter: saturate(0.85);` |
| Scrim | **none** — Pattern C means nothing overlaps |
| Reduced motion | poster only. Needs the JS fix; the CSS reset does nothing to `<video>` |

---

## 11. What this replaces

- **`concept-b-generation-sheet.md`** — superseded for the hero. Its near-miss protocol,
  attempt log and encoding notes remain correct and apply here unchanged.
- **`start2.png`** — a good frame for the old concept, unused by this one.
- **`end.png` / `end2.png`** — both are flat graphics, which is the thing this brief
  exists to stop making. Retire them.
- **`hero-motion-directions.md`** — still the research of record: site measurements, layout
  patterns, craft rules, weight ladder, encoding. Its *concepts* are superseded.
