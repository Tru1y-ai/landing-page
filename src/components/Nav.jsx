import { useEffect, useState } from 'react';
import { CAL_URL } from '../links.js';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <img src={`${import.meta.env.BASE_URL}truly-logo.png`} alt="" />
          Truly
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#how">How it works</a>
          <a className="nav-link" href="#why">Why Truly</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#faq">FAQ</a>
          <a className="btn btn-ink" href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
        </nav>
      </div>
    </header>
  );
}
