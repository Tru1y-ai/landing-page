import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { CAL_URL } from '../links.js';

gsap.registerPlugin(useGSAP, SplitText);

/* the six tabs on the report, named */
const DIMENSIONS = [
  { k: 'Planning', s: 'how they broke the problem down', hue: 'var(--moss)' },
  { k: 'Architecture', s: 'the shape of what they built', hue: 'var(--teal)' },
  { k: 'Debugging', s: 'what they did when it broke', hue: 'var(--plum)' },
  { k: 'Testing', s: 'what they checked before shipping', hue: 'var(--amber)' },
  { k: 'AI collaboration', s: 'how they used the tools', hue: 'var(--clay)' },
  { k: 'Communication', s: 'how they wrote it up', hue: 'var(--green-2)' },
];

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
  const videoRef = useRef(null);
  const replayRef = useRef(null);
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

        /* paused — the film finishing is what starts this */
        const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });

        tl.from('.hero .eyebrow', { autoAlpha: 0, y: 14, duration: 0.6 }, 0)
          .from(split.words, {
            autoAlpha: 0,
            y: 34,
            filter: 'blur(10px)',
            stagger: 0.06,
            duration: 0.75,
          }, 0.07)
          .from('.hero-sub', { autoAlpha: 0, y: 16, duration: 0.6 }, '-=0.35')
          .from('.hero-cta .btn', { autoAlpha: 0, y: 14, stagger: 0.08, duration: 0.55 }, '-=0.3')
          .from('.hero-note', { autoAlpha: 0, duration: 0.5 }, '-=0.25')
          .from('.hero-note-item', { autoAlpha: 0, x: -10, stagger: 0.07, duration: 0.5 }, '-=0.4');

        const video = videoRef.current;
        let failsafe;
        let onTime;

        /* The replay window is outside the GSAP scope (different section), so it
           gets its own tween. Explicit set + to rather than from(): a paused
           from() did not reliably render its start state here, which left the
           window visible from the first frame. */
        gsap.set(replayRef.current, { autoAlpha: 0, y: 56 });
        const panel = gsap.to(replayRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          paused: true,
        });

        if (reduce || !video) {
          /* the resting state is the finished state — never an empty hero */
          tl.progress(1);
          gsap.set(replayRef.current, { autoAlpha: 1, y: 0 });
        } else {
          let started = false;
          let panelShown = false;

          const revealPanel = () => {
            if (panelShown) return;
            panelShown = true;
            panel.play();
          };

          const reveal = () => {
            if (started) return;
            started = true;
            clearTimeout(failsafe);
            revealPanel();
            tl.play();
          };

          /* The failsafe must not animate. A tween only advances on rAF, which a
             background tab throttles or suspends outright — so playing one here
             can leave the copy and the window hidden indefinitely. Jump straight
             to the finished state instead. */
          const showNow = () => {
            if (started) return;
            started = true;
            panelShown = true;
            gsap.set(replayRef.current, { autoAlpha: 1, y: 0 });
            tl.progress(1);
          };

          /* the window slides up as the film settles, a beat ahead of the copy */
          onTime = () => {
            if (!video.duration) return;
            if (video.duration - video.currentTime <= 1.2) {
              revealPanel();
              video.removeEventListener('timeupdate', onTime);
            }
          };
          video.addEventListener('timeupdate', onTime);

          /* a touch quicker than real time — set on metadata too, since some
             browsers reset the rate when a new source is loaded */
          const RATE = 1.2;
          video.playbackRate = RATE;
          video.addEventListener('loadedmetadata', () => { video.playbackRate = RATE; });

          video.addEventListener('ended', reveal, { once: true });
          /* autoplay blocked, a 404, or a stalled decode must never trap the
             headline — or leave the window hidden for good */
          failsafe = setTimeout(showNow, 12000);
          const play = video.play();
          if (play && play.catch) play.catch(reveal);
        }

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

        return () => {
          clearTimeout(failsafe);
          if (onTime && videoRef.current) videoRef.current.removeEventListener('timeupdate', onTime);
          split.revert();
        };
      }
    );

    return () => mm.revert();
  }, { scope: root });

  return (
    <>
    <section className="hero" id="top" ref={root}>
      <video
        ref={videoRef}
        className="hero-video"
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="wrap hero-inner">
        <div className="hero-head">
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

        <ul className="hero-notes">
          {DIMENSIONS.map((d) => (
            <li className="hero-note-item" key={d.k}>
              <i style={{ background: d.hue }} />
              <span><b>{d.k}</b>{d.s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="hero-after">
      <div className="wrap">
        <div className="replay" ref={replayRef}>
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
    </>
  );
}
