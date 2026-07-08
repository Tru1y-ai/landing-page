export default function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="scene">
        <svg className="scene-svg" id="scene" xmlns="http://www.w3.org/2000/svg"></svg>
        <div className="scene-fade"></div>
      </div>

      <div className="hero-inner" id="hero-inner">
        <p className="kicker">AI-native work simulations</p>
        <h1 className="h1">
          Your desk.<br />
          Your tools.<br />
          <span className="outline">Your best.</span>
        </h1>
        <p className="hero-sub">Truly generates a job-specific work simulation from each role&apos;s description — then runs it on the candidate&apos;s own machine. We capture the full session and turn it into a structured hiring decision.</p>
        <div className="hero-cta">
          <a className="btn btn-white" href="#waitlist">Request a demo</a>
          <a className="btn btn-outline" href="#track">See how it works</a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none"><rect x="6.5" y="2.5" width="3" height="5" rx="1.5" fill="white" /><rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="white" strokeOpacity="0.3" /></svg>
      </div>
    </section>
  );
}
