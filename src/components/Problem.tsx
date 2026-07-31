import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Reveal from './Reveal';
import { wireCardTilt, TILT_QUERY } from '@/lib/cardTilt';

gsap.registerPlugin(useGSAP);

const CARDS = [
  {
    n: 'PUZZLES',
    hue: 'var(--clay)',
    h: 'Tests that aren’t the job',
    p: 'Generic, sandboxed challenges pose problems a candidate will never see again at work. Passing one predicts trivia recall, not on-the-job performance.',
  },
  {
    n: 'REHEARSAL',
    hue: 'var(--amber)',
    h: 'Interviews that reward polish',
    p: 'Behavioral rounds measure preparation, not character. Culture fit — the thing early teams live or die by — never actually gets tested.',
  },
  {
    n: 'SCALE',
    hue: 'var(--plum)',
    h: 'Grading that doesn’t scale',
    p: 'Human review is slow and inconsistent. As applications pile up, teams fall back to skimming résumés and gambling on gut feel.',
  },
];

export default function Problem() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    (_ctx, contextSafe) => {
      const mm = gsap.matchMedia();

      mm.add(TILT_QUERY, () =>
        wireCardTilt(gsap.utils.toArray<HTMLElement>('.prob-card'), contextSafe!)
      );

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="sec" ref={root}>
      <div className="wrap">
        <Reveal><p className="eyebrow">The problem</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">Hiring measures the <em>performance</em>, not the person.</h2></Reveal>
        <Reveal delay={0.16}>
          <p className="sec-sub">
            AI changed how work gets done. Screening didn&apos;t keep up — so companies
            still gamble on candidates they&apos;ve never actually seen work.
          </p>
        </Reveal>
        <div className="prob-grid">
          {CARDS.map((c, i) => (
            <Reveal delay={i * 0.08} key={c.n} style={{ display: 'flex' }}>
              <div className="prob-card" style={{ '--hue': c.hue }}>
                <span className="prob-x">{c.n}</span>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
