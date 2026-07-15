import { CAL_URL } from '../links.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-inner">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <img src={`${import.meta.env.BASE_URL}truly-logo.png`} alt="" />
              Truly
            </a>
            <p>Hiring talent through job-specific work simulations.</p>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Product</h4>
              <a href="#how">How it works</a>
              <a href="#why">Why Truly</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#faq">FAQ</a>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Truly, Inc.</span>
          <span>Made in Boston, headed to San Francisco.</span>
        </div>
      </div>
    </footer>
  );
}
