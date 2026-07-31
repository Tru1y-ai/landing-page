import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Reveal from './Reveal';
import AgentVisual, { type AgentKind } from './AgentVisual';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EXTRACTORS: { name: string; hue: string; role: string; kind: AgentKind }[] = [
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

export default function Pipeline() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {

        // competency bars fill from their own width
        gsap.utils.toArray<HTMLElement>('.pipe-comp-bar i').forEach((bar, i) => {
          gsap.from(bar, {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.9,
            delay: 0.1 + i * 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: bar, start: 'top 94%', once: true },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="sec pipe" id="pipeline" ref={root}>
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
            <div className="pipe-ex-grid">
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
        <Reveal>
          <div className="pipe-merge" aria-hidden="true">
            {/* preserveAspectRatio="none" stretches this viewBox ~3x on x and
                1x on y. Geometry is meant to stretch — the wires span whatever
                width the grid has — but stroke is not: without
                non-scaling-stroke the dash pattern and weight stretch too, so
                dashes ran short over the vertical departure and long over the
                horizontal sweep and the four wires read as a smear. */}
            <svg viewBox="0 0 480 80" preserveAspectRatio="none">
              {[60, 180, 300, 420].map((x, i) => (
                <path
                  key={x}
                  d={`M${x} 0 C ${x} 46, 240 34, 240 80`}
                  className="pipe-wire"
                  vectorEffect="non-scaling-stroke"
                  style={{ '--wire': ['var(--moss)', 'var(--teal)', 'var(--plum)', 'var(--amber)'][i], animationDelay: `${i * 0.18}s` }}
                />
              ))}
            </svg>
            {/* four streams becoming one — the merge deserves to be a place.
                In HTML, not the svg: a <circle> in that viewBox renders as a
                flat ellipse three times wider than it is tall. */}
            <span className="pipe-merge-node" />
          </div>
        </Reveal>

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
                  <Reveal delay={i * 0.08} key={r.t + r.e}>
                  <div className="pipe-tl-row">
                    <span className="pipe-tl-t">{r.t}</span>
                    <span className="pipe-tl-e">{r.e}</span>
                    <span className="pipe-tl-b">{r.b}</span>
                  </div>
                  </Reveal>
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
              {COMPETENCIES.map((c) => (
                <div className="pipe-comp" key={c.k}>
                  <div className="pipe-comp-top">
                    <span>{c.k}</span>
                    <b>{c.v}<i>/5</i></b>
                  </div>
                  <div className="pipe-comp-bar">
                    <i style={{ width: `${c.v * 20}%` }} />
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
                <Reveal delay={i * 0.08} key={r.t}>
                <div className="pipe-trail-row">
                  <span className="pipe-trail-t">{r.t}</span>
                  <span>{r.e}</span>
                </div>
                </Reveal>
              ))}
              <p className="pipe-trail-f">3 linked events · full replay available</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
