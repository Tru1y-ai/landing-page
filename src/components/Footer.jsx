export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-inner">
          <div className="foot-brand">
            <a className="brand" href="#top"><span className="logo-chip"><img src={`${import.meta.env.BASE_URL}truly-logo.png`} alt="Truly" /></span>Truly</a>
            <p>Talent assessment for the age of AI. See how people really work.</p>
          </div>
          <div className="foot-links">
            <div className="foot-col"><h4>Product</h4><a href="#track">What we track</a><a href="#waitlist">Request demo</a></div>
            <div className="foot-col"><h4>Company</h4><a href="#">About</a><a href="#">Careers</a><a href="#">Contact</a></div>
          </div>
        </div>
        <div className="foot-bot"><span>© 2026 Truly, Inc.</span><span>Fairer, faster, more human hiring.</span></div>
      </div>
    </footer>
  );
}
