import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

import { Button } from '@/components/ui/button';
import ResumeDoc from '@/components/ResumeDoc';
import SessionDoc from '@/components/SessionDoc';
import HeroMedia from '@/components/HeroMedia';
import { HERO_VIDEO } from '@/heroMedia';
import { CAL_URL } from '@/links';

gsap.registerPlugin(useGSAP, SplitText);

/** Scattered sheets: where each came to rest after being thrown.
 *  Weighted to the right so the headline keeps the left half.
 *  `blur` is depth of field; `haze` is atmospheric tint — never opacity,
 *  or white paper goes translucent and reads as a dark pane. */
const SCATTER = [
  // left of frame — heavier haze/blur so the headline still reads over them
  { x: '-42vw', y: '-24vh', z: -1180, rx: 40, ry: 26, rz: 18, blur: 9, haze: 0.66 },
  { x: '-33vw', y: '22vh', z: -880, rx: 56, ry: 16, rz: -12, blur: 6.6, haze: 0.6 },
  { x: '-14vw', y: '-32vh', z: -1320, rx: 30, ry: -14, rz: -22, blur: 10, haze: 0.62 },
  { x: '-8vw', y: '30vh', z: -700, rx: 62, ry: 10, rz: 9, blur: 5, haze: 0.5 },
  // centre and right — the readable part of the pile
  { x: '10vw', y: '-28vh', z: -980, rx: 42, ry: -20, rz: -15, blur: 6.8, haze: 0.44 },
  { x: '38vw', y: '-21vh', z: -700, rx: 34, ry: 22, rz: 12, blur: 4.6, haze: 0.34 },
  { x: '50vw', y: '14vh', z: -880, rx: 52, ry: 16, rz: -9, blur: 6, haze: 0.42 },
  { x: '18vw', y: '28vh', z: -500, rx: 58, ry: -11, rz: 7, blur: 3.2, haze: 0.26 },
  { x: '56vw', y: '-33vh', z: -1240, rx: 26, ry: 9, rz: 21, blur: 9.2, haze: 0.56 },
  { x: '33vw', y: '36vh', z: -360, rx: 64, ry: -7, rz: -4, blur: 2.4, haze: 0.2 },
];

/** Sheets eligible to surge forward, and where each one comes to when it does.
 *  Only sheets right of centre — a page lunging at the camera over the
 *  headline would win every time, and the headline has to win.
 *
 *  The resting `x` cannot be reused as the target: perspective magnifies
 *  distance from `perspective-origin` as well as size, so sheet 8 at 56vw
 *  would leave the frame entirely on its way toward the viewer. These are
 *  pulled inward to land around a quarter-viewport off centre. */
/*  A sheet forward at POP_Z stands ~670px tall in a ~890px viewport, so the
 *  vertical room is only ~110px either side. These stay near 0 — measured
 *  at -9vh, a popped sheet reached y=32 and crowded the nav. */
const POP_SPOT: Record<number, { x: string; y: string }> = {
  4: { x: '19vw', y: '1vh' },
  5: { x: '26vw', y: '4vh' },
  6: { x: '23vw', y: '6vh' },
  7: { x: '16vw', y: '2vh' },
  8: { x: '27vw', y: '0vh' },
  9: { x: '22vw', y: '5vh' },
};
const POP_POOL = Object.keys(POP_SPOT).map(Number);

/** How far forward a surging sheet travels, against a 1500px perspective —
 *  1500/(1500-300) magnifies it ~1.25x. Much beyond this and it blows past
 *  the camera instead of presenting itself. */
const POP_Z = 300;

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_ctx, contextSafe) => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          full: '(prefers-reduced-motion: no-preference)',
          // Mirrors `@media (max-width: 720px)` in index.css, which hides
          // `.sheet:nth-of-type(n+5)` — array indices 4 through 9.
          wide: '(min-width: 721px)',
        },
        (ctx) => {
          const reduce = Boolean(ctx.conditions?.reduce);
          const wide = Boolean(ctx.conditions?.wide);
          const hero = root.current;
          if (!hero) return;

          // the CSS 3D pile only exists while there is no film
          const stage = !HERO_VIDEO;

          const split = new SplitText('.h1', {
            type: 'words',
            wordsClass: 'h1-word',
            tag: 'span',
          });

          const d = (n: number) => (reduce ? 0 : n);

          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

          // Every sheet tween below is skipped once a film is supplied —
          // the film carries the motion then, and none of these targets
          // exist. The copy's entrance is shared by both.
          if (stage) {
            // sheets get thrown in and settle
            tl.from('.sheet-in', {
              yPercent: 42,
              scale: 0.86,
              autoAlpha: 0,
              rotate: (i: number) => (i % 2 ? 16 : -16),
              duration: d(1.5),
              stagger: reduce ? 0 : { each: 0.09, from: 'random' },
              ease: 'power4.out',
            }, 0)
              // …and the one that landed face-up settles last and hardest
              .from('.landed-in', {
                yPercent: 58,
                scale: 0.8,
                autoAlpha: 0,
                duration: d(1.7),
                ease: 'power4.out',
              }, d(0.25));
          }

          tl.from('.hero-nav', { autoAlpha: 0, y: -14, duration: d(0.7) }, d(0.2))
            .from('.hero-eyebrow', { autoAlpha: 0, y: 12, duration: d(0.6) }, d(0.35))
            .from(split.words, {
              autoAlpha: 0,
              y: 28,
              filter: 'blur(10px)',
              stagger: reduce ? 0 : 0.05,
              duration: d(0.8),
            }, d(0.45))
            .from('.hero-sub', { autoAlpha: 0, y: 16, duration: d(0.65) }, d(0.95))
            .from('.hero-cta > *', {
              autoAlpha: 0, y: 14, stagger: reduce ? 0 : 0.08, duration: d(0.6),
            }, d(1.15))
            .from('.hero-hint', { autoAlpha: 0, duration: d(0.5) }, d(1.4));

          if (reduce) return () => split.revert();

          // Everything below belongs to the pile — its flip, its drift, the
          // surge and the cursor parallax. With a film supplied none of those
          // targets exist, and the film carries the motion instead.
          if (!stage) return () => split.revert();

          // The landed sheet turns over: polished side, then the real one.
          // The white CV is the stronger image and the one that reads at a
          // glance, so it holds the frame roughly twice as long as the
          // reverse — otherwise the hero spends most of its time dark.
          const flip = gsap.timeline({ repeat: -1, delay: 3.4 });
          flip
            .to('.flip-inner', { rotationY: -180, duration: 1.4, ease: 'power2.inOut' })
            .to({}, { duration: 3.2 })
            .to('.flip-inner', { rotationY: -360, duration: 1.4, ease: 'power2.inOut' })
            .set('.flip-inner', { rotationY: 0 })
            .to({}, { duration: 6.5 });

          const rnd = gsap.utils.random;

          // ── continuous life ──────────────────────────────────────────
          // Every sheet drifts on four axes, each with its own period, so
          // the pile never settles into a single shared pulse.
          //
          // This animates .sheet-life and nothing else. .sheet owns the
          // placement transform and .sheet-in owns the entrance; a third
          // animator on either of those would fight the existing one. The
          // drift this replaces lived on .sheet-in alongside the entrance
          // and stomped its yPercent mid-flight.
          //
          // Only flat-safe properties here — translate, rotate Z, scale.
          // .sheet's blur filter flattens the 3D context beneath it, so a
          // rotationX/Y on this node would render as a squash, not a turn.
          //
          // Still gated on blur, and the gate is not cosmetic: a moving
          // child forces its ancestor's blur to re-rasterize every frame,
          // and driving all ten was enough to stop the entrance completing
          // in real time. The sharp sheets carry the motion instead, on
          // four axes rather than the one they used to have. A 9px-blurred
          // sheet reads as haze anyway — drift on it is pure cost.
          gsap.utils.toArray<HTMLElement>('.sheet-life').forEach((el, i) => {
            if ((SCATTER[i]?.blur ?? 99) > 5) return;
            // narrow viewports show only the first four sheets; the rest are
            // display:none, and driving them is invisible work that still costs
            if (!wide && i > 3) return;
            const dir = i % 2 ? 1 : -1;
            const life = (vars: gsap.TweenVars, delay: number) =>
              gsap.to(el, { repeat: -1, yoyo: true, ease: 'sine.inOut', delay, ...vars });

            life({ yPercent: dir * rnd(1.8, 3.6), duration: rnd(6, 11) }, i * 0.31);
            life({ xPercent: -dir * rnd(0.8, 2.2), duration: rnd(10, 16) }, i * 0.44);
            life({ rotation: -dir * rnd(1.2, 3), duration: rnd(9, 15) }, i * 0.52);
            life({ scale: rnd(1.014, 1.032), duration: rnd(8, 13) }, i * 0.27);
          });

          // the landed CV breathes too, in pixels rather than percent — the
          // entrance already owns yPercent on this node
          gsap.to('.landed-in', {
            y: -13, rotation: -1.1,
            duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut',
          });

          // ── one sheet at a time surges forward ───────────────────────
          // Driven through .sheet's own CSS variables instead of tweening
          // its transform. CSS composes the transform from those vars, so
          // the 3D operation order is never decomposed and rebuilt, and the
          // rotation cancels exactly rather than approximately.
          //
          // It also buys a real translateZ: --sz feeds the stage's
          // perspective, whereas a z on any inner node would do nothing at
          // all, since the blur filter flattens everything below .sheet.
          const sheets = gsap.utils.toArray<HTMLElement>('.sheet');
          let queue: number[] = [];
          let popTl: gsap.core.Timeline | null = null;
          let nextPop: gsap.core.Tween | null = null;

          const popOne = () => {
            if (!queue.length) queue = gsap.utils.shuffle([...POP_POOL]);
            const i = queue.pop() as number;
            const s = SCATTER[i];
            const spot = POP_SPOT[i];

            popTl = gsap.timeline({
              onComplete: () => { nextPop = gsap.delayedCall(rnd(1.4, 3), popOne); },
            });
            popTl
              .to(sheets[i], {
                '--sx': spot.x, '--sy': spot.y, '--sz': `${POP_Z}px`,
                // not quite square to the camera — a page held dead flat
                // reads as a screenshot rather than as paper
                '--rx': `${s.rx * 0.1}deg`,
                '--ry': `${s.ry * 0.1}deg`,
                '--rz': `${s.rz * 0.28}deg`,
                '--blur': '0px', '--haze': 0.03,
                duration: 1.5, ease: 'power3.out',
              })
              .to({}, { duration: 1.15 })   // hold, long enough to be read
              .to(sheets[i], {
                '--sx': s.x, '--sy': s.y, '--sz': `${s.z}px`,
                '--rx': `${s.rx}deg`, '--ry': `${s.ry}deg`, '--rz': `${s.rz}deg`,
                '--blur': `${s.blur}px`, '--haze': s.haze,
                duration: 1.9, ease: 'power2.inOut',
              });
          };
          // Every sheet in POP_POOL is hidden below 721px, so on a phone this
          // loop would surge invisible elements forever and the feature would
          // simply not exist. The four sheets that remain are the near ones
          // holding the composition — pulling one of those to the camera would
          // cover the headline on the viewport that can least afford it.
          if (wide) nextPop = gsap.delayedCall(3.2, popOne);

          // parallax: the whole stage leans toward the cursor
          const rotX = gsap.quickTo('.hero-stage', 'rotationX', { duration: 0.9, ease: 'power3.out' });
          const rotY = gsap.quickTo('.hero-stage', 'rotationY', { duration: 0.9, ease: 'power3.out' });
          const onMove = contextSafe!((e: PointerEvent) => {
            const r = hero.getBoundingClientRect();
            rotY(((e.clientX - r.left) / r.width - 0.5) * 9);
            rotX(-((e.clientY - r.top) / r.height - 0.5) * 6);
          });
          hero.addEventListener('pointermove', onMove);

          return () => {
            hero.removeEventListener('pointermove', onMove);
            // these two are re-created from a callback, so they live outside
            // the useGSAP context and are not reverted for us
            nextPop?.kill();
            popTl?.kill();
            flip.kill();
            split.revert();
          };
        }
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  // The film replaces the pile outright rather than layering over it —
  // rendering both would decode a video behind ten blurred sheets nobody
  // can see. Until `HERO_VIDEO` is filled in, the pile *is* the hero.
  if (HERO_VIDEO) {
    return (
      <section className="hero hero-film" id="top" ref={root}>
        <HeroMedia video={HERO_VIDEO} />
        <div className="hero-scrim" aria-hidden="true" />
        <HeroCopy />
      </section>
    );
  }

  return (
    <section className="hero" id="top" ref={root}>
      {/* ── 3D stage ── */}
      <div className="hero-stage" aria-hidden="true">
        {SCATTER.map((s, i) => (
          <div
            className="sheet"
            key={i}
            style={{
              '--sx': s.x,
              '--sy': s.y,
              '--sz': `${s.z}px`,
              '--rx': `${s.rx}deg`,
              '--ry': `${s.ry}deg`,
              '--rz': `${s.rz}deg`,
              '--blur': `${s.blur}px`,
              '--haze': s.haze,
            }}
          >
            {/* placement lives on .sheet, the entrance on .sheet-in and the
                idle drift on .sheet-life — one animator per transform, so
                none of them decomposes and rebuilds another's matrix */}
            <div className="sheet-in">
              <div className="sheet-life">
                <span className="paper-edge" />
                <div className="sheet-face">
                  {/* a sheet that can surge forward is always rendered in
                      full: 'far' drops detail that would be missing at the
                      exact moment the sheet is closest and sharpest */}
                  <ResumeDoc
                    density={s.z < -820 && !POP_POOL.includes(i) ? 'far' : 'full'}
                    who={i + 1}
                  />
                  <span className="paper-curl" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* the one that landed face-up — and turns over */}
        <div className="sheet-landed">
          <div className="landed-in">
            <div className="flip-inner">
              <span className="paper-edge" />
              <div className="flip-face flip-front">
                <ResumeDoc who={0} />
                <span className="paper-curl" />
              </div>
              <div className="flip-face flip-back">
                <SessionDoc />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scrim" aria-hidden="true" />

      <HeroCopy />
    </section>
  );
}

/** The copy column, identical over the pile and over the film — every class
 *  here is a target of the shared entrance timeline, so the two branches must
 *  not drift apart. */
function HeroCopy() {
  return (
    <>
      {/* ── content ── */}
      <div className="hero-content">
        <nav className="hero-nav">
          <a href="#top" className="hero-brand">
            <img src={`${import.meta.env.BASE_URL}truly-logo.png`} alt="" />
            Truly<sup>®</sup>
          </a>
          <div className="hero-links">
            {[
              ['How it works', '#how'],
              ['Why Truly', '#why'],
              ['Pricing', '#pricing'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="https://app.trulyta.com" target="_blank" rel="noopener noreferrer">
              Log in
            </a>
          </div>
          <Button asChild variant="glass" size="pill">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
          </Button>
        </nav>

        <div className="hero-body">
          <p className="hero-eyebrow">Work simulations for hiring</p>

          <h1 className="h1">
            What a résumé <em>hides,</em> the work reveals.
          </h1>

          <p className="hero-sub">
            Candidates do the actual work — their machine, their tools, their
            process. AI evaluators turn the full session into evidence you can
            hire on.
          </p>

          {/* The spans are load-bearing. Button+asChild renders through Radix
              Slot, which clones the element — GSAP's tween on those nodes was
              applying its from-state (opacity 0) and never animating back,
              leaving both CTAs permanently invisible. Animating a plain
              wrapper GSAP owns outright avoids the interaction entirely. */}
          <div className="hero-cta">
            <span>
              <Button asChild variant="glass" size="pill-lg">
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
              </Button>
            </span>
            <span>
              <Button asChild variant="glass" size="pill-lg">
                <a href="#how">See how it works</a>
              </Button>
            </span>
          </div>

          <p className="hero-hint">100+ candidates assessed · 3+ startups hiring with Truly</p>
        </div>
      </div>
    </>
  );
}
