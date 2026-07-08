function Check() {
  return <svg viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M3 8.5l3.5 3.5L13 4.5" /></svg>;
}

const CARDS = [
  {
    tag: 'For companies',
    h: 'Faster, better hiring',
    items: ['Decision-ready reports in hours, not weeks', 'Far less engineer review time per candidate', 'Real signal on how someone actually builds'],
  },
  {
    tag: 'For candidates',
    h: 'One fair, real process',
    items: ['Work in your own setup, with your own tools', 'One realistic assessment instead of repeats', 'A reusable profile of verified work'],
  },
  {
    tag: 'For teams',
    h: 'Structured talent data',
    items: ['Consistent, rubric-based scoring every time', 'Evidence you can calibrate and defend', 'Reusable data across your hiring workflow'],
  },
];

export default function Benefits() {
  return (
    <section className="sec benefits" data-screen-label="Benefits">
      <div className="wrap">
        <p className="label" data-reveal>Why it&apos;s better</p>
        <h2 className="h2" data-reveal data-reveal-d="1">Fairer for candidates.<br /><span className="outline">Faster for companies.</span></h2>
        <div className="ben-grid">
          {CARDS.map((c, i) => (
            <div className="ben-card" data-reveal data-reveal-d={i ? String(i) : undefined} key={c.tag}>
              <p className="bt">{c.tag}</p>
              <h3>{c.h}</h3>
              <ul>
                {c.items.map((it) => <li key={it}><Check />{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
