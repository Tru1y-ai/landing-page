import { motion, useReducedMotion } from 'framer-motion';
import { CAL_URL } from '../links.js';

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

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const up = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-panel grain">
          <div className="hero-mesh" aria-hidden="true" />
          <motion.p className="eyebrow" {...up(0)}>Work simulations for hiring</motion.p>
          <motion.h1 className="h1" {...up(0.08)}>
            Hire for the <em>work</em>, not the interview.
          </motion.h1>
          <motion.p className="hero-sub" {...up(0.16)}>
            Truly turns your job description into a job-specific work simulation.
            Candidates do the actual work on their own machine, with their own tools —
            and AI evaluators turn the full session into evidence you can hire on.
          </motion.p>
          <motion.div className="hero-cta" {...up(0.24)}>
            <a className="btn btn-ink" href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
            <a className="btn btn-ghost" href="#how">See how it works</a>
          </motion.div>
          <motion.p className="hero-note" {...up(0.3)}>
            100+ candidates assessed · 3+ startups hiring with Truly today
          </motion.p>
        </div>

        <motion.div
          className="replay"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
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
                {SCORES.map((s, i) => (
                  <div className="score-row" key={s.k}>
                    <div className="score-top"><span>{s.k}</span><b>{s.v}</b></div>
                    <div className="score-bar">
                      <motion.i
                        initial={reduce ? { width: `${s.v}%` } : { width: 0 }}
                        animate={{ width: `${s.v}%` }}
                        transition={{ duration: 1.1, delay: 0.9 + i * 0.15, ease }}
                      />
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
        </motion.div>
      </div>
    </section>
  );
}
