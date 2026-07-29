import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { CAL_URL } from '../links.js';

gsap.registerPlugin(useGSAP, SplitText);

const LOG = [
  { t: '00:02', text: <>opened <b>checkout-service</b> repo, read the ticket</> },
  { t: '00:07', text: <>sketched approach in <b>NOTES.md</b> before coding</>, tag: 'design' },
  { t: '00:15', text: <>prompted AI: <b>&quot;trade-offs of retry vs. queue here?&quot;</b></>, tag: 'ai' },
  { t: '00:24', text: <>wrote failing test first, then implemented</> },
  { t: '00:31', text: <>scenario: teammate reports a conflicting deadline</>, tag: 'behavioral' },
  { t: '00:33', text: <>replied — negotiated scope, flagged the risk early</> },
  { t: '00:47', text: <>refactored after review comment, tests green</> },
  { t: '00:52', text: <>submitted with a written design rationale</>, tag: 'done' },
];

const SCORES = [
  { k: 'Design process', v: 92 },
  { k: 'Code quality', v: 88 },
  { k: 'AI fluency', v: 90 },
  { k: 'Collaboration', v: 85 },
];

export default function Hero() {
  const root = useRef(null);
  const btnRefs = useRef([]);
  btnRefs.current = [];
  const addBtnRef = (el) => { if (el && !btnRefs.current.includes(el)) btnRefs.current.push(el); };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      { reduce: '(prefers-reduced-motion: reduce)', full: '(prefers-reduced-motion: no-preference)' },
      (ctx) => {
        const { reduce } = ctx.conditions;

        const split = new SplitText('.h1', { type: 'words', wordsClass: 'h1-word', tag: 'span' });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-mesh', { autoAlpha: 0, scale: 1.22, duration: reduce ? 0 : 1.4, ease: 'power2.out' }, 0)
          .from('.hero .eyebrow', { autoAlpha: 0, y: 14, duration: reduce ? 0 : 0.6 }, reduce ? 0 : 0.15)
          .from(split.words, {
            autoAlpha: 0,
            y: 34,
            filter: 'blur(10px)',
            stagger: reduce ? 0 : 0.06,
            duration: reduce ? 0 : 0.75,
          }, reduce ? 0 : 0.22)
          .from('.hero-sub', { autoAlpha: 0, y: 16, duration: reduce ? 0 : 0.6 }, reduce ? 0 : '-=0.35')
          .from('.hero-cta .btn', { autoAlpha: 0, y: 14, stagger: reduce ? 0 : 0.08, duration: reduce ? 0 : 0.55 }, reduce ? 0 : '-=0.3')
          .from('.hero-note', { autoAlpha: 0, duration: reduce ? 0 : 0.5 }, reduce ? 0 : '-=0.25')
          .from('.replay', {
            autoAlpha: 0,
            y: reduce ? 0 : 40,
            scale: reduce ? 1 : 0.97,
            duration: reduce ? 0 : 0.85,
            ease: 'power3.out',
          }, reduce ? 0 : '-=0.3')
          .from('.score-bar i', {
            width: 0,
            stagger: reduce ? 0 : 0.12,
            duration: reduce ? 0 : 0.9,
            ease: 'power2.out',
          }, reduce ? 0 : '-=0.4')
          .from('.score-top b', {
            textContent: 0,
            duration: reduce ? 0 : 1,
            snap: { textContent: 1 },
            stagger: reduce ? 0 : 0.12,
            ease: 'power1.out',
          }, '<');

        if (!reduce) {
          btnRefs.current.forEach((btn) => {
            const quickX = gsap.quickTo(btn, 'x', { duration: 0.45, ease: 'power3.out' });
            const quickY = gsap.quickTo(btn, 'y', { duration: 0.45, ease: 'power3.out' });
            const onMove = (e) => {
              const r = btn.getBoundingClientRect();
              quickX((e.clientX - r.left - r.width / 2) * 0.35);
              quickY((e.clientY - r.top - r.height / 2) * 0.35);
            };
            const onLeave = () => { quickX(0); quickY(0); };
            btn.addEventListener('mousemove', onMove);
            btn.addEventListener('mouseleave', onLeave);
          });
        }

        return () => split.revert();
      }
    );

    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="hero" id="top" ref={root}>
      <div className="wrap">
        <div className="hero-panel grain">
          <div className="hero-mesh" aria-hidden="true" />
          <p className="eyebrow">Work simulations for hiring</p>
          <h1 className="h1">
            Hire for the <em>work,</em> not the interview.
          </h1>
          <p className="hero-sub">
            Truly turns your job description into a job-specific work simulation.
            Candidates do the actual work on their own machine, with their own tools —
            and AI evaluators turn the full session into evidence you can hire on.
          </p>
          <div className="hero-cta">
            <a ref={addBtnRef} className="btn btn-ink" href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
            <a ref={addBtnRef} className="btn btn-ghost" href="#how">See how it works</a>
          </div>
          <p className="hero-note">
            100+ candidates assessed · 3+ startups hiring with Truly today
          </p>
        </div>

        <div className="replay">
          <div className="replay-frame">
            <div className="replay-bar">
              <span className="replay-dots"><i /><i /><i /></span>
              <span className="replay-title">session replay — senior-frontend · candidate 041</span>
              <span className="replay-live"><i />RECORDING</span>
            </div>
            <div className="replay-body">
              <div className="replay-log" aria-hidden="true">
                {LOG.map((l, i) => (
                  <div className="log-line" style={{ animationDelay: `${i * 1.4}s` }} key={l.t}>
                    <span className="log-time">{l.t}</span>
                    <span>{l.text}</span>
                    {l.tag && <span className="log-tag">{l.tag}</span>}
                  </div>
                ))}
              </div>
              <div className="replay-rail">
                <p className="rail-head">Evaluation</p>
                {SCORES.map((s) => (
                  <div className="score-row" key={s.k}>
                    <div className="score-top"><span>{s.k}</span><b>{s.v}</b></div>
                    <div className="score-bar">
                      <i style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
                <p className="rail-verdict">
                  <b>Strong hire signal.</b> Plans before coding, uses AI to reason
                  — not to outsource — and communicates risk early.
                </p>
              </div>
            </div>
            <div className="replay-scrub"><i /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
