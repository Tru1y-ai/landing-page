# Truly landing page — working notes

React 19 + Vite + TypeScript, Tailwind v4 (CSS-first), shadcn/ui, GSAP.
`npm run dev` · `npm run build` · `npm run lint` · `npm run typecheck`

The rules below are not stylistic preferences. Each one is a bug that was
shipped and then found — they cost real debugging time, and every one of them
fails *silently*.

## Animation

**GSAP's 3D rotation properties are `rotationX` / `rotationY`.**
The CSS spellings `rotateX` / `rotateY` are accepted into the vars object and
then ignored — no error, no warning. Other properties in the same tween (`z`,
`scale`) still apply, so things move and it looks like the animation "works".
This silently disabled every 3D rotation in the project, including the hero
résumé's flip, which meant the reverse side was unreachable for days.
To check: read the computed `matrix3d` and confirm the rotation components are
not identity.

**One animator per element transform.**
If GSAP animates an element's transform, that element must not also carry a CSS
`transform` or a `transform` transition. GSAP decomposes whatever matrix it
finds and recomposes it in its own operation order, so a CSS-authored
`translate3d(...) rotateX(...) rotateY(...)` comes back subtly wrong.
The fix throughout is two elements: an outer node holding static placement, an
inner node that GSAP animates. See `.sheet` / `.sheet-in`, `.sheet-landed` /
`.landed-in`, and `.price-3d` / `.price-card`.

**Never gate visibility on a scroll trigger without a fail-safe.**
`gsap.from(el, { autoAlpha: 0, scrollTrigger: ... })` hides the element
immediately and relies on the trigger to bring it back. If the trigger never
fires — a start position measured before the 100svh hero and late webfonts
settle, for instance — that content is invisible forever. `Reveal` therefore
uses IntersectionObserver plus a CSS transition, not ScrollTrigger, and bails
out to visible when IO is unavailable or reduced motion is set.

**Transition the revealed state, not the hidden one.**
`Reveal` adds its class after mount. With the transition declared on the hidden
class, content fades *out* over 600ms before it can fade in. The transition
belongs on `.rv-in`; hiding must be instant.

**An `infinite` keyframe loop must end where it begins.**
Every extractor diagram ended full and restarted empty — `avGrow` closed on
`scaleX(1)` against a `0%` of `scaleX(0)`, `avSend` held `opacity: 1` through
`100%` against a `0%` of `0`. Each cycle therefore finished with a hard snap.
Nothing warns about this; the animation plays, and the defect is one frame per
period, which reads as "it looks weird" rather than as a specific bug. Where
the end state genuinely differs, hide the element across the reset — fade out,
rewind, fade in — so `0%` and `100%` are visually identical even when their
transforms are not.

**Free-running loops are at a random phase by the time they are seen.**
Four diagrams on 3.4s / 4s / 3.6s / 5s periods, all started at page load, so
the section scrolled into view with each card mid-gesture at an unrelated
point and the group read as twitching rather than as one pipeline. They are
now `animation-play-state: paused` by default and released by `.rv-in`, which
both parks them at 0 until they are visible and starts all four together.
Periods are 4s or a multiple, so they stay in phase afterwards. This is safe
only because `Reveal` adds `.rv-in` on *every* path including its
reduced-motion and no-IntersectionObserver fallbacks — gating on a class that
can fail to arrive would strand them paused forever.

**Prefer transforms to layout properties in a loop that never stops.**
`avScrub` animated `width` from 0 to 100% continuously. `scaleX` on a
compositor layer does the same thing without laying out the page every frame.

**A blur filter flattens the 3D context of everything beneath it.**
`filter` is a grouping property: its used `transform-style` is `flat`
regardless of what is declared. `.sheet` carries `filter: blur(var(--blur))`,
so no descendant of a scattered sheet can move in Z, and `rotationX`/`rotationY`
on one renders as a squash rather than a turn. Measured: `translateZ(-400px)`
on `.paper-edge` changes its width by nothing at all; remove the sheet's filter
and the same offset takes it from 457.8px to 414.79px. This is also why
`.paper-edge`'s 2.5px extrusion — the paper-thickness cue — does nothing on
the ten scattered sheets, and only reads on `.sheet-landed`, which has no blur.
Anything needing real depth has to happen on `.sheet` itself, which is a direct
child of the stage's perspective.

**GSAP tweens CSS custom properties, units and all — use that for placement.**
`--sz`, `--rx`, `--blur` and unitless `--haze` all interpolate correctly
(`px`, `vw`, `deg` verified against a paused tween seeked by progress). This is
the way around "one animator per element transform": CSS composes `.sheet`'s
transform from its variables, so animating the variables moves the sheet in 3D
without GSAP ever decomposing the matrix, and the rotation cancels *exactly*
rather than approximately. The hero's pop uses this.

**Motion on a blurred sheet costs a full re-rasterization per frame.**
A moving child forces its ancestor's blur to be recomputed every frame. Driving
the idle drift on all ten sheets was enough that the entrance could no longer
complete in real time; gated back to the sharp ones (`blur <= 5`) it is fine.
The gate in `Hero.tsx` is a performance decision, not a stylistic one — the
richness went into more axes on the sheets that can afford it, not more sheets.

## CSS

**Legacy stylesheet lives inside `@layer base` — keep it there.**
Tailwind v4 puts utilities in `@layer utilities`, and *unlayered* CSS beats
every layer regardless of specificity. When the hand-written stylesheet was
unlayered, `* { padding: 0 }` silently zeroed the padding of every Tailwind
utility on the page — buttons computed `padding: 0px` with all their classes
correctly applied. Anything added to `index.css` outside a layer will do this
again.

**A container-query container cannot size itself in its own units.**
`.doc` declares `container-type: inline-size` and previously used `cqw` for its
own padding. That is self-referential: the padding resolved against the
viewport fallback, ballooned to ~220px per side, collapsed the content box, and
shrank every descendant's `cqw` with it — display type computed at 4.75px
instead of ~60px. The container's own padding uses percentages; only
descendants use `cqw`.

**`:last-child` is relative to the parent.**
`.h1-word:last-child` also matched the muted word, because it sits alone inside
its `<em>` and so is a last child too. Use the child combinator when you mean
"last word of the heading": `.h1 > .h1-word:last-child`.

**`preserveAspectRatio="none"` stretches the stroke too, not just the path.**
The fan-in svg is authored in a 480×80 viewBox and rendered ~1450×80 — a 3×
horizontal, 1× vertical scale. Stretching the *geometry* is the point; the
wires should span whatever width the grid has. But `stroke-width` and
`stroke-dasharray` scale with it, so dashes came out short over each wire's
vertical departure and long over its horizontal sweep, and the four wires read
as a smear. `vector-effect="non-scaling-stroke"` resolves both in screen
pixels. Nothing inside such a viewBox can be relied on to keep its shape
either — the merge node was a `<circle r="3.5">` rendering as a 21×7 ellipse,
and now lives in HTML beside the svg. Also keep `stroke-dashoffset` a whole
number of dash periods or the dashes jump each time the loop restarts.

**An absolutely positioned overlay needs the axis it travels on pinned.**
`.av-scan` set `left` and `right` but no `top`, so it took its static position
— below `.av-term-body` — and then translated *downward* from there, spending
its entire cycle outside the plate's `overflow: hidden`. The OCR card's read
head had never once been visible. Both `getComputedStyle` and `getAnimations`
report it running normally; only its rect against the parent's rect shows it.

**`will-change` is a transient hint.**
It was on 60 elements at one point, each holding a compositor layer for
animations that had long finished. Scope it to the moment it is needed —
grids apply it on `:hover`, and `Reveal` does not use it at all.

**Depth is haze, not opacity.**
Fading a white sheet against a dark background makes it translucent, so it
reads as a dark pane rather than distant paper. The hero scales blur and an
atmospheric tint (`--haze`) with depth and leaves opacity alone.

## Hero specifics

**`.sheet-in` / `.landed-in` must stay `position: absolute; inset: 0`.**
They are the nodes GSAP animates, wrapping the placement nodes. As static
boxes they collapse to zero height — their absolutely-positioned faces come
with them — and every sheet flattens to a sliver. The hero then looks empty
except for a few faint diagonal edges, while every element still reports
`opacity: 1`, so nothing looks wrong to a scripted check.

**Both flip faces have to survive the navy background.**
The reverse face was `#10231D` against a `#04212F` hero: near-identical value,
so for half the flip cycle the sheet simply disappeared. It now carries a
lighter surface, an inset rim and an outer glow so it reads as a lit screen.
The white CV holds the frame roughly twice as long as the reverse, because it
is the image that reads at a glance.

**Don't animate a node rendered through `Button asChild`.**
Radix `Slot` clones the element; a GSAP tween on those nodes applied its
from-state and never animated back, leaving both hero CTAs permanently
invisible. The CTAs are wrapped in plain `<span>`s that GSAP owns outright.

## Verification

`tsc`, `build` and `lint` all passing is necessary and not sufficient — most
of the bugs above passed all three. DOM assertions and screenshots also catch
different things: the `:last-child` regression passed an assertion that checked
"the last of all words" while the page visibly looked wrong.

ESLint covers `.ts`/`.tsx` via `typescript-eslint`. It previously matched only
`**/*.{js,jsx}` and reported a clean pass while silently skipping every
migrated file — if lint suddenly goes quiet after a rename, check the globs.

**Never edit this stylesheet with an unguarded find-and-replace.**
The zero-height wrapper bug above was introduced by a `split(anchor).join(...)`
whose anchor no longer existed — it matched nothing, changed nothing, and
printed a success message. The rule was missing for days while every check
stayed green. Assert the anchor exists before replacing, and grep for the
result afterwards.

**Verify the hero without forcing anything.**
Its entrance starts elements at `autoAlpha: 0`, so it is tempting to force
them visible before inspecting. Doing that masks exactly the failures worth
finding — it hid both bugs above through many rounds of "verification". Load
the page, wait, and look at what it actually does on its own.
