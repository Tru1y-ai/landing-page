const FEATURES = [
  { n: '01', h: 'Job-posting task builder', p: "Every job post generates a custom assessment from the role's description, seniority, and stack — no static question bank." },
  { n: '02', h: 'Local-native work capture', p: "The simulation runs on the candidate's own desktop for a realistic workflow — not a locked browser sandbox." },
  { n: '03', h: 'AI prompt & work tracking', p: 'Every prompt, edit, and debugging step is recorded, so you see the full process — not just the final output.' },
  { n: '04', h: 'Collaboration simulation', p: 'PR-style review, messaging, and handoffs test how candidates work with others, not just how they code alone.' },
  { n: '05', h: 'Behavioral signals in context', p: 'Communication, unblock behavior, and prioritization are measured inside the same work sample — no separate test.' },
  { n: '06', h: 'Custom scoring & report', p: 'Sessions become rubric-based reports with evidence, plus a reusable candidate profile carried across applications.' },
];

export default function Features() {
  return (
    <section className="sec how" data-screen-label="Features">
      <div className="wrap">
        <p className="label" data-reveal>Features</p>
        <h2 className="h2" data-reveal data-reveal-d="1">Everything that makes<br /><span className="outline">the signal real.</span></h2>
        <p className="sec-sub" data-reveal data-reveal-d="2">Six capabilities turn a single work session into a decision-ready hire.</p>
        <div className="how-grid">
          {FEATURES.map((f, i) => (
            <div className="how-card" data-n={f.n} data-reveal data-reveal-d={i % 3 ? String(i % 3) : undefined} key={f.n}>
              <p className="how-num">Feature {f.n}</p>
              <div className="card-line"></div>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
