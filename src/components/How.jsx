import Reveal from './Reveal.jsx';

const STEPS = [
  {
    n: '01',
    h: 'Create a simulation',
    p: 'Paste the job description. Truly generates an open-ended, job-specific project — plus the workplace scenarios you want to test — matched to your stack, seniority, and values.',
    mesh: { '--c1': 'var(--moss)', '--c2': 'var(--teal)', '--c3': '#3E8A5E' },
  },
  {
    n: '02',
    h: 'Candidates do real work',
    p: 'They work on their own machine, in their own setup, with any tools they want — AI encouraged. Simulated scenarios arrive mid-task: a scope change, a review comment, a teammate’s question.',
    mesh: { '--c1': 'var(--amber)', '--c2': 'var(--clay)', '--c3': '#D08A3C' },
  },
  {
    n: '03',
    h: 'Decide on evidence',
    p: 'AI evaluators analyze the full session — screen recording, codebase, and AI usage — and return a rubric-scored, evidence-backed report for every candidate. No interviewer hours required.',
    mesh: { '--c1': 'var(--plum)', '--c2': 'var(--teal)', '--c3': '#5B3A78' },
  },
];

export default function How() {
  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <Reveal><p className="eyebrow">How it works</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">From job description to hiring decision.</h2></Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal delay={i * 0.1} key={s.n} style={{ display: 'flex' }}>
              <div className="step grain">
                <div className="step-mesh" style={s.mesh} aria-hidden="true" />
                <span className="step-n">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
