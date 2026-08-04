import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import AgentVisual from './AgentVisual.jsx';

const EXTRACTORS = [
  { name: 'OCR interpreter', hue: 'var(--moss)', role: 'Reads the screen', kind: 'ocr' },
  { name: 'Vision', hue: 'var(--teal)', role: 'Samples every 20s', kind: 'vision' },
  { name: 'Repository', hue: 'var(--plum)', role: 'Diffs and analyzes', kind: 'repo' },
  { name: 'AI usage', hue: 'var(--amber)', role: 'Reads the transcript', kind: 'ai' },
];

const TIMELINE = [
  { t: '12:05', e: 'edited Login.tsx', b: 'building' },
  { t: '12:06', e: 'ran npm test', b: 'testing' },
  { t: '12:06', e: '4 assertions failed', b: 'debugging' },
  { t: '12:14', e: 'fixed, 18 passing', b: 'testing' },
];

const BEHAVIORS = ['Planning', 'Building', 'Debugging', 'Testing', 'Reviewing'];

const COMPETENCIES = [
  { k: 'Planning', v: 4, sees: 'notes · file opens · first edits' },
  { k: 'Architecture', v: 5, sees: 'diffs · complexity · structure' },
  { k: 'Debugging', v: 4, sees: 'errors · terminal · edits · runs' },
  { k: 'Testing', v: 3, sees: 'test runs · coverage · outcomes' },
  { k: 'AI collaboration', v: 4, sees: 'prompts · accepts · rewrites' },
  { k: 'Communication', v: 4, sees: 'messages · reviews · rationale' },
];

const TRAIL = [
  { t: '12:06', e: 'ran npm test — 4 assertions failed' },
  { t: '12:11', e: 'read the stack trace, opened Login.test.tsx' },
  { t: '12:14', e: 'fixed the assertion — 18 passing' },
];

const ease = [0.22, 1, 0.36, 1];

export default function Pipeline() {
  const reduce = useReducedMotion();

  // The four agent diagrams loop forever. Ungated they run from page load, so
  // the section scrolls into view with each card already at an arbitrary point
  // in its own cycle — four unrelated things twitching mid-gesture. They are
  // paused in CSS and released together by `.av-go` on the grid, so all four
  // start at 0 in phase. Bails out to running if IntersectionObserver is
  // missing: a gate that can fail to arrive would strand them paused forever.
  const exGrid = useRef(null);
  const [avGo, setAvGo] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') { setAvGo(true); return; }
    const el = exGrid.current;
    if (!el) { setAvGo(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setAvGo(true); io.disconnect(); }
      },
      { rootMargin: '-60px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // staggered one-shot reveal; looping these would leave holes as rows fell out of sync
  const line = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 4 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-30px' },
    transition: { duration: 0.4, delay, ease },
  });

  return (
    <section className="sec pipe" id="pipeline">
      <div className="wrap">
        <Reveal><p className="eyebrow">Inside the evaluation</p></Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2">Agents that report <em>facts</em>, not opinions.</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-sub">
            One model guessing at a score is a black box. Truly compiles a session in
            passes: specialized agents extract what happened, evidence is assembled,
            and only then does anything render judgment.
          </p>
        </Reveal>

        {/* 01 — extract */}
        <Reveal delay={0.1}>
          <div className="pipe-phase">
            <p className="pipe-k">01 — Extract</p>
            <h3 className="pipe-h">Each agent has exactly one job</h3>
            <p className="pipe-p">
              No agent scores anything. They emit structured events, so a weak one can be
              swapped without touching the rest.
            </p>
            <div className={`pipe-ex-grid${avGo ? ' av-go' : ''}`} ref={exGrid}>
              {EXTRACTORS.map((x) => (
                <div className="pipe-ex" style={{ '--hue': x.hue }} key={x.name}>
                  <p className="pipe-ex-n">{x.name}</p>
                  <p className="pipe-ex-r">{x.role}</p>
                  <AgentVisual kind={x.kind} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* fan-in */}
        <div className="pipe-merge" aria-hidden="true">
          <svg viewBox="0 0 480 80" preserveAspectRatio="none">
            {[60, 180, 300, 420].map((x, i) => (
              <path
                key={x}
                d={`M${x} 0 C ${x} 46, 240 34, 240 80`}
                className="pipe-wire"
                style={{ stroke: ['var(--moss)', 'var(--teal)', 'var(--plum)', 'var(--amber)'][i], animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </svg>
        </div>

        {/* 02 — assemble */}
        <Reveal>
          <div className="pipe-phase">
            <p className="pipe-k">02 — Assemble</p>
            <h3 className="pipe-h">Facts become one coherent story</h3>
            <p className="pipe-p">
              A timeline builder merges every stream into a single ordered account, then
              behavior detection infers what the candidate was actually doing.
            </p>
            <div className="pipe-assemble">
              <div className="pipe-tl">
                {TIMELINE.map((r, i) => (
                  <motion.div className="pipe-tl-row" key={r.t + r.e} {...line(i * 0.14)}>
                    <span className="pipe-tl-t">{r.t}</span>
                    <span className="pipe-tl-e">{r.e}</span>
                    <span className="pipe-tl-b">{r.b}</span>
                  </motion.div>
                ))}
              </div>
              <div className="pipe-behav">
                <p className="pipe-sub-k">Inferred behavior</p>
                <div className="pipe-chips">
                  {BEHAVIORS.map((b, i) => (
                    <span className="pipe-chip" style={{ animationDelay: `${i * 0.5}s` }} key={b}>{b}</span>
                  ))}
                </div>
                <p className="pipe-note">
                  Stored as an evidence graph — permanent, queryable, and the source every
                  score is later held to.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="pipe-spine" aria-hidden="true"><i /></div>

        {/* 03 — judge */}
        <Reveal>
          <div className="pipe-phase">
            <p className="pipe-k">03 — Judge</p>
            <h3 className="pipe-h">One evaluator per competency</h3>
            <p className="pipe-p">
              Each evaluator sees only the evidence relevant to it — the debugging
              evaluator never reads browser history — then a meta evaluator synthesizes
              the verdict from their scores alone.
            </p>
            <div className="pipe-comp-grid">
              {COMPETENCIES.map((c, i) => (
                <div className="pipe-comp" key={c.k}>
                  <div className="pipe-comp-top">
                    <span>{c.k}</span>
                    <b>{c.v}<i>/5</i></b>
                  </div>
                  <div className="pipe-comp-bar">
                    <motion.i
                      initial={reduce ? { width: `${c.v * 20}%` } : { width: 0 }}
                      whileInView={{ width: `${c.v * 20}%` }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
                    />
                  </div>
                  <p className="pipe-comp-s">sees: {c.sees}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="pipe-spine" aria-hidden="true"><i /></div>

        {/* meta + audit trail */}
        <Reveal>
          <div className="pipe-meta grain">
            <div className="pipe-meta-mesh" aria-hidden="true" />
            <div className="pipe-meta-l">
              <p className="pipe-k light">Meta evaluator</p>
              <h3 className="pipe-meta-h">No score without a source.</h3>
              <p className="pipe-meta-p">
                The report ranks candidates on competency scores — and every one of them
                unfolds into the events that produced it. Recruiters get an audit trail,
                not a summary they have to trust.
              </p>
            </div>
            <div className="pipe-trail">
              <div className="pipe-trail-top">
                <span>Testing</span><b>3<i>/5</i></b>
              </div>
              {TRAIL.map((r, i) => (
                <motion.div className="pipe-trail-row" key={r.t} {...line(0.15 + i * 0.16)}>
                  <span className="pipe-trail-t">{r.t}</span>
                  <span>{r.e}</span>
                </motion.div>
              ))}
              <p className="pipe-trail-f">3 linked events · full replay available</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
