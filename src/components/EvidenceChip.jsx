import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';

/**
 * Six competency evaluators wired into a central meta evaluator, which emits
 * the report. Drawn as a circuit board rather than a flowchart: the traces are
 * orthogonal, the way a real board routes, and a signal travels each one into
 * the chip.
 *
 * Geometry lives in one place — the SVG viewBox below. Labels are SVG <text>
 * rather than positioned HTML so they cannot drift out of alignment with the
 * trace they belong to. Only the chip and the report are HTML, because both
 * need styling SVG makes awkward.
 */

// viewBox units. Chip occupies x 385-515, y 150-280.
const EVALUATORS = [
  // left column, top -> bottom
  { name: 'Planning',        sees: 'notes · file opens',   hue: 'var(--moss)',   d: 'M190 85 H300 V185 H385',  side: 'l', y: 85 },
  { name: 'Architecture',    sees: 'diffs · structure',    hue: 'var(--teal)',   d: 'M190 215 H385',           side: 'l', y: 215 },
  { name: 'Debugging',       sees: 'errors · terminal',    hue: 'var(--plum)',   d: 'M190 345 H300 V245 H385', side: 'l', y: 345 },
  // right column, top -> bottom
  { name: 'Testing',         sees: 'runs · coverage',      hue: 'var(--amber)',  d: 'M710 85 H600 V185 H515',  side: 'r', y: 85 },
  { name: 'AI collaboration',sees: 'prompts · rewrites',   hue: 'var(--clay)',   d: 'M710 215 H515',           side: 'r', y: 215 },
  { name: 'Communication',   sees: 'reviews · rationale',  hue: 'var(--green-2)',d: 'M710 345 H600 V245 H515', side: 'r', y: 345 },
];

export default function EvidenceChip() {
  const stage = useRef(null);
  const [live, setLive] = useState(false);

  // Same gate as the agent visuals and mesh backdrops: the traces loop
  // forever, so off-screen they would run at an arbitrary phase and burn
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
              {/* board grid */}
              <defs>
                <pattern id="ecGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0 H0 V30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect className="ec-grid" x="0" y="0" width="900" height="500" fill="url(#ecGrid)" />

              {EVALUATORS.map((e, i) => (
                <g key={e.name} style={{ '--hue': e.hue, '--i': i }}>
                  {/* the trace itself */}
                  <path className="ec-trace" d={e.d} vectorEffect="non-scaling-stroke" />
                  {/* the signal travelling it. pathLength normalises every
                      trace to 100 units so one dash spec works for all of
                      them and the loop closes exactly. */}
                  <path
                    className="ec-pulse"
                    d={e.d}
                    pathLength="100"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* solder pad at the evaluator end */}
                  <circle className="ec-pad" cx={e.side === 'l' ? 190 : 710} cy={e.y} r="4" />
                  <text
                    className="ec-name"
                    x={e.side === 'l' ? 172 : 728}
                    y={e.y - 4}
                    textAnchor={e.side === 'l' ? 'end' : 'start'}
                  >
                    {e.name}
                  </text>
                  <text
                    className="ec-sees"
                    x={e.side === 'l' ? 172 : 728}
                    y={e.y + 14}
                    textAnchor={e.side === 'l' ? 'end' : 'start'}
                  >
                    {e.sees}
                  </text>
                </g>
              ))}

              {/* output trace: chip -> report */}
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
                <span className="ec-die-k">META</span>
                <span className="ec-die-n">evaluator</span>
              </div>
            </div>

            {/* the report it emits */}
            <div className="ec-report">
              <div className="ec-report-bar">
                <span />
                <em>evidence report</em>
              </div>
              <div className="ec-report-rows">
                <span style={{ width: '82%' }} />
                <span style={{ width: '64%' }} />
                <span style={{ width: '73%' }} />
              </div>
              <div className="ec-report-foot">every score linked to its source</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
