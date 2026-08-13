import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';

/**
 * Six competency evaluators wired into a central meta evaluator, which emits
 * the report. Drawn as a circuit board rather than a flowchart: the traces are
 * orthogonal, the way a real board routes, and a signal travels each one into
 * the chip.
 *
 * One 8s cycle tells the whole story:
 *   0.0-2.1s  six signals travel their traces
 *   1.8-2.4s  the pins they arrive at fire, in the signal's own colour
 *   2.0-4.4s  the die computes — cells light in sequence, a scan crosses it
 *   4.2-4.6s  the die latches
 *   4.4-5.6s  the verdict travels down the output trace
 *   5.4-7.0s  the report writes itself, a row at a time, with the scores
 *   7.0-8.0s  everything clears so 0% and 100% are identical and the loop
 *             closes without a snap
 *
 * Geometry lives in one place — the SVG viewBox. Labels are SVG <text> rather
 * than positioned HTML so they cannot drift out of alignment with the trace
 * they belong to. Only the die and the report are HTML, because both need
 * styling SVG makes awkward.
 */

// viewBox units. Die occupies x 385-515, y 150-280.
const EVALUATORS = [
  { name: 'Planning',         sees: 'notes · file opens',  hue: 'var(--moss)',    d: 'M190 85 H300 V185 H385',  side: 'l', y: 85 },
  { name: 'Architecture',     sees: 'diffs · structure',   hue: 'var(--teal)',    d: 'M190 215 H385',           side: 'l', y: 215 },
  { name: 'Debugging',        sees: 'errors · terminal',   hue: 'var(--plum)',    d: 'M190 345 H300 V245 H385', side: 'l', y: 345 },
  { name: 'Testing',          sees: 'runs · coverage',     hue: 'var(--amber)',   d: 'M710 85 H600 V185 H515',  side: 'r', y: 85 },
  { name: 'AI collaboration', sees: 'prompts · rewrites',  hue: 'var(--clay)',    d: 'M710 215 H515',           side: 'r', y: 215 },
  { name: 'Communication',    sees: 'reviews · rationale', hue: 'var(--green-2)', d: 'M710 345 H600 V245 H515', side: 'r', y: 345 },
];

// what the report writes, in the order it writes it
const ROWS = [
  { k: 'Architecture', v: '5/5', w: '92%' },
  { k: 'Debugging',    v: '4/5', w: '74%' },
  { k: 'Testing',      v: '3/5', w: '58%' },
];

// Die cells, in a deliberately broken order so they light as computation
// rather than as a sweep. Scattered here rather than in CSS because doing it
// there needs mod(), which is too new to rely on.
const CELLS = Array.from({ length: 25 }, (_, i) => ({ i, step: (i * 37) % 25 }));

export default function EvidenceChip() {
  const stage = useRef(null);
  const [live, setLive] = useState(false);

  // Same gate as the agent visuals and mesh backdrops: the board loops
  // forever, so off-screen it would run at an arbitrary phase and burn
  // compositor time for nothing. Falls back to running when IO is missing —
  // a gate that can fail to arrive would leave the board dead.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') { setLive(true); return; }
    const el = stage.current;
    if (!el) { setLive(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLive(true); io.disconnect(); } },
      { rootMargin: '-40px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec ec-sec" id="evidence">
      <div className="wrap">
        <Reveal><p className="eyebrow">The verdict</p></Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2">Six evaluators, <em>one</em> verdict.</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-sub">
            Each evaluator reads only the evidence relevant to it and scores one
            competency. A meta evaluator synthesises the result from those scores
            alone — never from the raw session — and emits the report.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className={`ec-stage${live ? ' ec-live' : ''}`} ref={stage}>
            <svg viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <pattern id="ecGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0 H0 V30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect className="ec-grid" x="0" y="0" width="900" height="500" fill="url(#ecGrid)" />

              {/* silkscreen: board furniture, static */}
              <g className="ec-silk">
                <text x="26" y="30">TRULY · EVAL-06</text>
                <text x="874" y="30" textAnchor="end">REV 2.6</text>
                <circle cx="24" cy="476" r="5" />
                <circle cx="876" cy="476" r="5" />
                <circle cx="24" cy="52" r="5" />
                <circle cx="876" cy="52" r="5" />
              </g>

              {EVALUATORS.map((e, i) => (
                <g key={e.name} style={{ '--hue': e.hue, '--i': i }}>
                  <path className="ec-trace" d={e.d} vectorEffect="non-scaling-stroke" />
                  {/* passive component sitting on the trace, like a board resistor */}
                  <rect
                    className="ec-smd"
                    x={e.side === 'l' ? 232 : 648} y={e.y - 3.5}
                    width="20" height="7" rx="1.5"
                  />
                  {/* the signal. pathLength normalises every trace to 100 units
                      so one dash spec works for all of them and the loop closes
                      exactly on 100. */}
                  <path className="ec-pulse" d={e.d} pathLength="100" vectorEffect="non-scaling-stroke" />
                  <circle className="ec-pad" cx={e.side === 'l' ? 190 : 710} cy={e.y} r="4" />
                  <circle className="ec-halo" cx={e.side === 'l' ? 190 : 710} cy={e.y} r="4" />
                  <text
                    className="ec-name"
                    x={e.side === 'l' ? 172 : 728}
                    y={e.y - 4}
                    textAnchor={e.side === 'l' ? 'end' : 'start'}
                  >{e.name}</text>
                  <text
                    className="ec-sees"
                    x={e.side === 'l' ? 172 : 728}
                    y={e.y + 14}
                    textAnchor={e.side === 'l' ? 'end' : 'start'}
                  >{e.sees}</text>
                </g>
              ))}

              <path className="ec-trace ec-out" d="M450 280 V405" vectorEffect="non-scaling-stroke" />
              <path className="ec-pulse ec-out-pulse" d="M450 280 V405" pathLength="100" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* the meta evaluator */}
            <div className="ec-chip">
              <span className="ec-pins ec-pins-l"><i /><i /><i /></span>
              <span className="ec-pins ec-pins-r"><i /><i /><i /></span>
              <span className="ec-pins ec-pins-t"><i /><i /><i /></span>
              <span className="ec-pins ec-pins-b"><i /><i /><i /></span>
              <div className="ec-die">
                <div className="ec-core" aria-hidden="true">
                  {CELLS.map((c) => <i key={c.i} style={{ '--c': c.step }} />)}
                </div>
                <div className="ec-scan" />
                <div className="ec-die-label">
                  <span className="ec-die-k">META</span>
                  <span className="ec-die-n">evaluator</span>
                </div>
              </div>
            </div>

            {/* the report it writes */}
            <div className="ec-report">
              <div className="ec-report-bar">
                <span />
                <em>evidence report</em>
              </div>
              <div className="ec-report-rows">
                {ROWS.map((r, i) => (
                  <div className="ec-rrow" style={{ '--r': i }} key={r.k}>
                    <b>{r.k}</b>
                    <i><s style={{ width: r.w }} /></i>
                    <u>{r.v}</u>
                  </div>
                ))}
              </div>
              <div className="ec-report-foot">every score linked to its source</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
