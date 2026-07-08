const CARDS = [
  {
    n: '01',
    h: 'AI changed the job, not the interview',
    p: "Every engineer uses AI to ship. But most assessments either ban it outright or can't measure how it was used. You're scoring for a workflow no one actually works in.",
  },
  {
    n: '02',
    h: 'Static tests don\'t reflect the role',
    p: 'A generic library of puzzles tells you nothing about a specific role, its seniority, or its stack. The task should come from the job posting, not a question bank.',
  },
  {
    n: '03',
    h: 'You see the output, never the process',
    p: 'Did they architect it or paste it? Iterate thoughtfully or thrash? A final score hides how someone communicates, unblocks, prioritizes, and thinks.',
  },
];

export default function Problem() {
  return (
    <section className="sec problem" data-screen-label="Problem">
      <div className="wrap">
        <p className="label" data-reveal>The problem</p>
        <h2 className="h2" data-reveal data-reveal-d="1">Coding tests were built<br /><span className="outline">for a different era.</span></h2>
        <p className="sec-sub" data-reveal data-reveal-d="2">Engineers ship with AI every day. Most hiring processes still test a job that doesn&apos;t exist anymore.</p>
        <div className="prob-grid">
          {CARDS.map((c, i) => (
            <div className="prob-card" data-reveal data-reveal-d={i ? String(i) : undefined} key={c.n}>
              <p className="pk">{c.n}</p>
              <div className="card-line"></div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
