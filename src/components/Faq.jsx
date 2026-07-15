import Reveal from './Reveal.jsx';

const FAQS = [
  { q: 'How is each assessment created?', a: 'Truly generates a role-specific work simulation directly from your job posting — using its description, seniority level, and stack. Instead of pulling from a static library, every candidate gets a task that mirrors the actual job.' },
  { q: 'Where do candidates work?', a: 'On their own machine, in their own setup. Running the assessment locally captures a far more realistic workflow than a browser sandbox — the tools, shortcuts, and environment they actually use to ship.' },
  { q: 'What exactly gets captured?', a: 'The full work session: prompts, actions, edits, debugging, and decision-making — plus collaboration signals like PR-style review, messaging, and handoffs. You see the whole process, not just the final output.' },
  { q: 'How is AI usage scored?', a: 'We measure how candidates work in modern AI-assisted environments. Every AI interaction is logged and scored for prompt quality and iteration — we grade fluency, not abstinence.' },
  { q: 'What do I get at the end?', a: 'A structured, hiring-ready report with rubric-based scores and evidence, ranked across your applicant pool. Candidates keep a reusable profile of verified work artifacts they can carry across applications.' },
];

export default function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <Reveal><p className="eyebrow">FAQ</p></Reveal>
        <Reveal delay={0.08}><h2 className="h2">Common questions</h2></Reveal>
        <Reveal delay={0.16}>
          <div className="faq-list">
            {FAQS.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}<span className="fq-ic"></span></summary>
                <div className="fq-body"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
