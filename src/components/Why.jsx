import Reveal from './Reveal.jsx';

const ROWS = [
  {
    k: 'ENVIRONMENT',
    hue: 'var(--moss)',
    h: 'Their setup, not a sandbox',
    p: 'A familiar environment changes how people perform. Candidates use their own machine, editor, and shortcuts — so you see how they actually ship, not how they cope with a browser IDE.',
  },
  {
    k: 'PROCESS',
    hue: 'var(--teal)',
    h: 'The thinking, not just the diff',
    p: 'Screen recording, codebase, and AI interactions are analyzed together, so nothing between the ticket and the submission is a black box — how they plan, debug, and decide.',
  },
  {
    k: 'CULTURE',
    hue: 'var(--amber)',
    h: 'Culture fit, measured',
    p: 'Simulated workplace scenarios — a pushy deadline, a disagreeing teammate — score communication and collaboration with structure, not vibes.',
  },
  {
    k: 'ROLES',
    hue: 'var(--plum)',
    h: 'Beyond engineering',
    p: 'Because simulations are generated from the job description and graded on process, the same approach extends to non-technical roles as your team grows.',
  },
];

export default function Why() {
  return (
    <section className="sec" id="why">
      <div className="wrap why-grid">
        <div className="why-left">
          <Reveal><p className="eyebrow">Why Truly</p></Reveal>
          <Reveal delay={0.08}><h2 className="h2">Every signal, <em>truly</em> captured.</h2></Reveal>
          <Reveal delay={0.16}>
            <p className="sec-sub">
              Other platforms watch the code. Truly watches the work — technical
              judgment and interpersonal skill, in one simulation.
            </p>
          </Reveal>
        </div>
        <div className="why-rows">
          {ROWS.map((r, i) => (
            <Reveal delay={i * 0.06} key={r.k}>
              <div className="why-row" style={{ '--hue': r.hue }}>
                <h3><span>{r.k}</span>{r.h}</h3>
                <p>{r.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
