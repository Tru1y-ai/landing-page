# Hero film — generation prompts

Shot-by-shot prompts for an AI video generator (Higgsfield, Runway, Kling,
Veo, Luma). The sequence: a résumé is torn apart, and what replaces it is the
person's actual work.

Companion to `hero-video-brief.md`, which covers delivery formats and how the
file gets wired into the page.

---

## Before you generate anything

**1. Make the reference image first.** Character and room continuity will not
survive eight separate generations otherwise. Generate one still, keep it, and
feed it into shot 1.

```
A dimly lit home office at night. A wooden desk against a dark wall, a
single warm tungsten desk lamp, a computer monitor, a few sheets of plain
white paper. Deep teal-navy shadows fill the rest of the room. One person
in their late twenties in a plain dark t-shirt sits at the desk.
Photorealistic, cinematic, 35mm, shallow depth of field, moody, film grain.
```

**2. Use image-to-video, never text-to-video.** Text-to-video gives you almost
no compositional control and no continuity.

**3. Chain last frame to first frame.** Export the final frame of each clip and
feed it as the input image for the next. This is the single technique that
makes a multi-shot sequence hold together.

**4. Generate 10–20 takes per shot.** This is a numbers game. Shot 3 needs the
most by a wide margin.

## Global style suffix

Append to every shot prompt. Keeps the grade consistent across generations.

```
Shot on 35mm, shallow depth of field, deep teal-navy darkness, a single
warm tungsten practical as the only light source, heavy negative fill,
volumetric haze, filmic contrast, fine grain, muted desaturated palette.
Photorealistic, cinematic. No text, no writing, no legible screen content.
```

## Negative prompt

Use on every shot.

```
text, letters, words, numbers, legible writing, printed documents, user
interface, icons, menus, legible screen content, extra fingers, six
fingers, deformed hands, malformed fingers, fused fingers, warped paper,
paper reassembling, face changing between frames, identity shift,
watermark, logo, subtitles, bright daylight, warm orange grade, clean
white background, fast cuts, camera shake, jitter
```

---

## The shots

If your tool has camera-move presets, pick the preset named in **Camera** and
delete the camera sentence from the prompt body — presets beat prose.

### 1 — POV approach · 4s

Input: the reference image.

```
First person point of view walking slowly toward a wooden desk in a dim
home office at night. Two hands are visible at the bottom of the frame,
holding a small stack of plain white paper. A single warm tungsten desk
lamp is the only light in the room, throwing long shadows across the desk
while the rest of the room falls into deep teal-navy darkness. The hands
are steady but tense. A slow, deliberate walking pace with a natural
handheld bob.
```

**Camera:** handheld first-person dolly forward, slow.

### 2 — Holding it up · 4s

```
First person point of view in a dim office at night. Two hands lower a
single sheet of plain white paper onto a wooden desk, then lift a second
sheet up in front of the camera. The desk lamp sits behind the page,
backlighting it so the paper glows and its fibres and soft folds become
visible. The hands tremble very slightly. The dark navy room recedes
behind.
```

**Camera:** static first-person, slight handheld float.

### 3 — The tear · 3s, slow motion

**The hardest shot in the sequence.** You only need the first second or so —
the moment the tear *begins*. Cut away before the hands finish. See "Cut on
the rip" below.

```
Extreme close up of two hands beginning to tear a sheet of plain white
paper in half. Slow motion. The paper buckles and splits, fibres
separating along the tear line, the edge fraying. Knuckles tense. A single
warm tungsten light rakes across the paper from the side against deep navy
shadows. Fine paper dust catches the light.
```

**Camera:** static macro, locked off.

### 4 — Pieces flying · 4s, slow motion

```
Torn scraps of white paper flying and tumbling upward through the air in a
dark room, slow motion. Each scrap catches a single warm light as it
spins, flashing bright and then falling dark. The pieces fill the frame at
varying depths; some rush past the lens completely out of focus. Deep
teal-navy background, volumetric haze, drifting paper dust.
```

**Camera:** slow tilt upward, following the scraps.

### 5 — Whip transition · 1.5s

Covers the cut from destruction to work. Motion blur hides generation
artifacts, which is exactly why this shot earns its place.

```
Fast whip pan through a dim home office at night. Heavy directional motion
blur smears the warm lamp light into horizontal bands against deep navy
darkness. Brief impressions of a desk edge, a chair, a wall. The motion
decelerates at the end of the move.
```

**Camera:** fast whip pan, left to right, decelerating.

### 6 — The reveal · 4s

```
The back of a computer monitor on a wooden desk in a dim office at night.
A person in their late twenties sits behind it, typing, face lit from
below by the cold glow of the screen, eyes down on the keyboard, absorbed
in their work. A warm desk lamp rims their shoulder. Deep navy darkness
fills the rest of the room. Quiet, focused, unhurried.
```

**Camera:** slow dolly push in, front-on to the back of the monitor.

### 7 — Arc around · 5s

```
Slow orbiting camera move around a desk in a dim office at night, arcing
from behind a computer monitor around to the side of a person working at
it, gradually revealing the front face of the glowing screen. The screen
light is the key light on their face and hands. Their hands stay on the
keyboard, working continuously. Smooth, steady gimbal motion.
```

**Camera:** 180° orbit, slow, smooth gimbal.

### 8 — Push in, resolve flat · 4s

**Read the note before generating this one.**

```
Slow dolly push toward a glowing computer monitor in a dark office until
the screen fills the entire frame. The desk, the person and the room fall
away out of focus at the edges. The screen is bright and softly luminous
but its contents are indistinct and out of focus. The camera move resolves
square on to the screen, perfectly flat and front-facing, and comes to
rest.
```

**Camera:** slow dolly in, ending locked off, square to the screen.

**Two things this shot must do:**

- **Resolve flat and front-on.** The real interface gets rendered in DOM over
  this final frame. Square-on means the overlay is a plain rectangle; an
  angled ending needs a 3D transform matched to the render, which is fragile
  and drifts at other viewport sizes.
- **Keep the screen contents soft and indistinct.** That is not a compromise —
  we are replacing them. A generator that produces convincing-looking UI here
  is producing gibberish that will be replaced anyway.

---

## Editing

**Cut on the rip.** Do not use a take where the hands complete the tear. Use
shot 3 up to the moment the paper starts to give, hard cut, then shot 4 with
the scraps already airborne. The hardest frame to generate is the one you
never show — this is ordinary editing, and it will look better than anything
a model gives you.

**Order:** 1 · 2 · 3 · *cut* · 4 · 5 · 6 · 7 · 8

**Total:** ~26s uncut. Trim hard — every shot can lose a third. Aim for 15–18s
finished, or 6–8s if this ends up as a hero background rather than its own
scroll-driven section.

**Software:** DaVinci Resolve (free) or CapCut.

## Deliver back

- The edited master, highest quality your editor exports
- **The final frame as a PNG** — the DOM screen overlay gets built against it

Encoding, poster and page integration are covered in `hero-video-brief.md`.
