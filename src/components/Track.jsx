import { useEffect, useRef, useState } from 'react';
import { TRACK_TITLES, TRACK_PANELS } from '../lib/trackPanels.js';

const TABS = [
  {
    n: '01',
    h: 'The full work session',
    p: 'Every edit, delete, and refactor — first drafts, pivots, and debugging. You see how they arrived at the answer, not just the final result.',
  },
  {
    n: '02',
    h: 'AI usage',
    p: 'Every AI interaction — what they asked and how they refined it. We score prompt quality, not prompt abstinence.',
  },
  {
    n: '03',
    h: 'Scoring & report',
    p: 'The full session becomes a rubric-based report — problem-solving, prompt quality, iteration rigor — and ranks your whole pool automatically.',
  },
];

const TRACK_DUR = 6000;

export default function Track() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const startedRef = useRef(false);

  const stopCycle = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  };
  const startCycle = () => {
    stopCycle();
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % TABS.length);
    }, TRACK_DUR);
  };

  // start cycling only once the section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (!('IntersectionObserver' in window)) {
      startedRef.current = true;
      startCycle();
      return () => stopCycle();
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          setActive(0);
          startCycle();
        }
      });
    }, { threshold: 0.35 });
    io.observe(section);
    return () => { io.disconnect(); stopCycle(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTabClick = (i) => {
    setActive(i);
    if (startedRef.current) startCycle();
  };

  return (
    <section
      className="sec track"
      id="track"
      data-screen-label="What we track"
      ref={sectionRef}
      onMouseEnter={stopCycle}
      onMouseLeave={() => { if (startedRef.current) startCycle(); }}
    >
      <div className="wrap">
        <p className="label" data-reveal>What we capture</p>
        <h2 className="h2" data-reveal data-reveal-d="1">See how they<br /><span className="outline">actually work.</span></h2>
        <div className="track-grid">
          <div className="track-tabs" id="track-tabs">
            {TABS.map((t, i) => (
              <button
                className={`track-tab${i === active ? ' on' : ''}`}
                type="button"
                key={t.n}
                onClick={() => onTabClick(i)}
              >
                <span className="tt-num">{t.n}</span>
                <span className="tt-c">
                  <span className="tt-h">{t.h}</span>
                  <span className="tt-p">{t.p}</span>
                  <span className="tt-bar"><i /></span>
                </span>
              </button>
            ))}
          </div>

          <div className="track-right">
            <div className="screen" id="track-screen">
              <div className="screen-bar">
                <div className="screen-dots"><i className="r"></i><i className="y"></i><i className="g"></i></div>
                <span className="screen-title" id="screen-title">{TRACK_TITLES[active]}</span>
              </div>
              <div
                className="screen-body"
                id="screen-body"
                key={active}
                dangerouslySetInnerHTML={{ __html: TRACK_PANELS[active] }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
