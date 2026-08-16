import { useCallback, useState } from 'react';
import Reveal from './Reveal.jsx';

const STEPS = [
  {
    n: '01',
    h: 'Create a simulation',
    p: 'Paste the job description. Truly generates an open-ended, job-specific project — plus the workplace scenarios you want to test — matched to your stack, seniority, and values.',
    mesh: { '--c1': 'var(--moss)', '--c2': 'var(--teal)', '--c3': '#3E8A5E' },
  },
  {
    n: '02',
    h: 'Candidates do real work',
    p: 'They work on their own machine, in their own setup, with any tools they want — AI encouraged. Simulated scenarios arrive mid-task: a scope change, a review comment, a teammate’s question.',
    mesh: { '--c1': 'var(--amber)', '--c2': 'var(--clay)', '--c3': '#D08A3C' },
  },
  {
    n: '03',
    h: 'Decide on evidence',
    p: 'AI evaluators analyze the full session — screen recording, codebase, and AI usage — and return a rubric-scored, evidence-backed report for every candidate. No interviewer hours required.',
    mesh: { '--c1': 'var(--plum)', '--c2': 'var(--teal)', '--c3': '#5B3A78' },
  },
];

/* slot 0 is the card being read; 1 and 2 fan out behind it.
   x is a percentage of the card's own width, so the spread scales with the
   deck instead of needing a breakpoint of its own */
const SLOTS = [
  { x: 0, y: 0, rot: 0, scale: 1 },
  { x: 112, y: 34, rot: 14, scale: 0.86 },
  { x: -112, y: 34, rot: -14, scale: 0.86 },
];

/* The arc behind the deck, measured off Prism: 48 radial ticks struck from a
   centre below the cards, so they read as spokes the fan sits inside. Their
   values — inner r 620, outer r 720, 38.4deg to 140.8deg across a 3400x750 box. */
const ARC = { cx: 1700, cy: 750, r0: 620, r1: 720, from: 38.4, to: 140.8, n: 48 };

const TICKS = Array.from({ length: ARC.n }, (_, i) => {
  const deg = ARC.from + ((ARC.to - ARC.from) * i) / (ARC.n - 1);
  const a = (deg * Math.PI) / 180;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return {
    x1: +(ARC.cx + cos * ARC.r0).toFixed(2),
    y1: +(ARC.cy - sin * ARC.r0).toFixed(2),
    x2: +(ARC.cx + cos * ARC.r1).toFixed(2),
    y2: +(ARC.cy - sin * ARC.r1).toFixed(2),
  };
});

export default function How() {
  const [active, setActive] = useState(0);
  const count = STEPS.length;

  const go = useCallback((delta) => {
    setActive((i) => (i + delta + count) % count);
  }, [count]);

  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <Reveal><p className="eyebrow">How it works</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">From job description to hiring decision.</h2></Reveal>

        <div className="fan">
          <div className="fan-arc" aria-hidden="true">
            <svg viewBox="0 0 3400 750" preserveAspectRatio="xMidYMid meet">
              {TICKS.map((t) => (
                <line key={`${t.x1}-${t.y1}`} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
              ))}
            </svg>
          </div>

          <button
            type="button"
            className="fan-arrow fan-prev"
            aria-label="Previous step"
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>

          <div className="fan-deck">
            {STEPS.map((s, k) => {
              const slot = (k - active + count) % count;
              const { x, y, rot, scale } = SLOTS[slot];
              return (
                <button
                  type="button"
                  key={s.n}
                  className={`fan-card grain${slot === 0 ? ' is-front' : ''}`}
                  style={{
                    transform: `translate(${x}%, ${y}px) rotate(${rot}deg) scale(${scale})`,
                    zIndex: count - slot,
                  }}
                  aria-current={slot === 0 ? 'true' : undefined}
                  tabIndex={slot === 0 ? 0 : -1}
                  onClick={() => setActive(k)}
                >
                  <span className="fan-mesh" style={s.mesh} aria-hidden="true" />
                  <span className="fan-edge" aria-hidden="true" />
                  <span className="fan-n">{s.n}</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="fan-arrow fan-next"
            aria-label="Next step"
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="fan-dots" role="tablist" aria-label="Steps">
          {STEPS.map((s, k) => (
            <button
              type="button"
              key={s.n}
              role="tab"
              aria-selected={k === active}
              aria-label={`Step ${s.n}: ${s.h}`}
              className={`fan-dot${k === active ? ' is-on' : ''}`}
              onClick={() => setActive(k)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
