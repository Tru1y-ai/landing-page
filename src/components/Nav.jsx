export default function Nav() {
  return (
    <header className="nav" id="nav">
      <a className="brand" href="#top">
        <span className="logo-chip"><img src="/truly-logo.png" alt="Truly" /></span>
        Truly
      </a>
      <div className="nav-right">
        <a className="nav-link" href="#how">How it works</a>
        <a className="nav-link" href="#track">What we track</a>
        <a className="nav-link" href="#faq">FAQ</a>
        <a className="btn btn-white" href="#waitlist">Request demo</a>
      </div>
    </header>
  );
}
