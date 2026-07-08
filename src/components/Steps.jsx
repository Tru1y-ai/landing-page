const STEPS = [
  { n: '01', h: 'Paste the job posting', p: "Drop in the role's description, seniority, and stack. That's the only input Truly needs to get started." },
  { n: '02', h: 'Generate a custom assessment', p: 'Truly turns the posting into a realistic, job-specific work simulation — tailored to what this role actually does, not a generic puzzle.' },
  { n: '03', h: 'Candidate works in a real environment', p: 'They complete the task on their own machine with the tools they use every day — including AI — the way they’d actually work on the job.' },
  { n: '04', h: 'The full session is captured & analyzed', p: 'Prompts, edits, debugging, decisions, PRs, messaging, and handoffs — the entire process is recorded and scored against your rubric.' },
  { n: '05', h: 'You get a structured report', p: 'A hiring-ready report with rubric-based scores and evidence, ranked across your pipeline — so you can decide with confidence in hours, not weeks.' },
];

export default function Steps() {
  return (
    <section className="sec steps" id="how" data-screen-label="How it works">
      <div className="wrap">
        <p className="label" data-reveal>How it works</p>
        <h2 className="h2" data-reveal data-reveal-d="1">Job posting in.<br /><span className="outline">Hiring decision out.</span></h2>
        <div className="steps-flow">
          {STEPS.map((s) => (
            <div className="step-row" data-reveal key={s.n}>
              <span className="step-n">{s.n}</span>
              <div className="step-c">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
