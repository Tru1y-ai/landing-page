function Cross() {
  return <svg className="mk" viewBox="0 0 16 16" fill="none" stroke="#666" strokeWidth="1.6"><path d="M4 4l8 8M12 4l-8 8" /></svg>;
}
function Check() {
  return <svg className="mk" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M3 8.5l3.5 3.5L13 4.5" /></svg>;
}

const NOW = ['Phone screen', 'Static take-home or coding challenge', 'On-site technical interviews', 'Team debrief and calibration'];
const TRULY = ['Assessment generated from the job posting', 'Candidate builds on their own machine', 'Every prompt, edit & handoff captured', 'Rubric-based report, pipeline ranked'];

export default function Compare() {
  return (
    <section className="sec compare" data-screen-label="Loop">
      <div className="wrap">
        <p className="label" data-reveal>Old way vs. new way</p>
        <h2 className="h2" data-reveal data-reveal-d="1">One simulation replaces<br /><span className="outline">your whole loop.</span></h2>
        <div className="cmp-grid">
          <div className="cmp-col now" data-reveal>
            <p className="cmp-tag">Your current process</p>
            <p className="cmp-title">3–4 weeks</p>
            {NOW.map((t) => <div className="cmp-row" key={t}><Cross />{t}</div>)}
            <div className="cmp-foot">
              <span className="cmp-chip">8+ interviewer hours</span>
              <span className="cmp-chip">&gt;$500 / candidate</span>
            </div>
          </div>
          <div className="cmp-col truly" data-reveal data-reveal-d="1">
            <p className="cmp-tag">With Truly</p>
            <p className="cmp-title">Results in hours</p>
            {TRULY.map((t) => <div className="cmp-row" key={t}><Check />{t}</div>)}
            <div className="cmp-foot">
              <span className="cmp-chip">Zero interviewer hours</span>
              <span className="cmp-chip">Custom rubric</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
