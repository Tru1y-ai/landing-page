export default function Cta() {
  return (
    <section className="cta" id="waitlist" data-screen-label="Waitlist">
      <div className="wrap">
        <p className="label" data-reveal style={{ justifyContent: 'center', marginBottom: 0 }}>Early access</p>
        <h2 className="h2" data-reveal data-reveal-d="1" style={{ textAlign: 'center' }}>See how your candidates<br /><span className="outline">actually think.</span></h2>
        <form className="cta-form" data-reveal data-reveal-d="2" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="you@company.com" aria-label="Work email" />
          <button className="btn btn-white" type="submit">Request demo</button>
        </form>
        <p className="cta-note" data-reveal data-reveal-d="3">No credit card · No surveillance theatre</p>
      </div>
    </section>
  );
}
