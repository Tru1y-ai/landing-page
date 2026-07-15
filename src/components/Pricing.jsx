import Reveal from './Reveal.jsx';
import { CAL_URL } from '../links.js';

const TIERS = [
  {
    name: 'Starter',
    amt: '$99',
    per: '/month',
    items: ['3 assessment creations', '10 candidate evaluations', 'Full session reports'],
    cta: 'Book a demo',
  },
  {
    name: 'Pro',
    amt: '$399',
    per: '/month',
    featured: true,
    items: ['5 assessment creations', '50 candidate evaluations', 'Behavioral scenario library', 'Candidate ranking across the pool'],
    cta: 'Book a demo',
  },
  {
    name: 'Enterprise',
    amt: 'Custom',
    per: '',
    items: ['High-volume hiring', 'ATS & workflow integrations', 'Dedicated support'],
    cta: 'Talk to us',
  },
];

export default function Pricing() {
  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <Reveal><p className="eyebrow">Pricing</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">Priced per assessment, not per seat.</h2></Reveal>
        <Reveal delay={0.16}>
          <p className="sec-sub">
            An assessment is what you send candidates for a job post — so you pay
            for exactly what your pipeline uses.
          </p>
        </Reveal>
        <div className="price-grid">
          {TIERS.map((t, i) => (
            <Reveal delay={i * 0.08} key={t.name} style={{ display: 'flex' }}>
              <div className={`price-card${t.featured ? ' featured' : ''}`}>
                {t.featured && <span className="price-pop">Most popular</span>}
                <p className="price-name">{t.name}</p>
                <p className="price-amt">{t.amt}<span>{t.per}</span></p>
                <ul className="price-list">
                  {t.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <a
                  className={`btn ${t.featured ? 'btn-ink' : 'btn-ghost'}`}
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
