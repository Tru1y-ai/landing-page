import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CAL_URL } from '../links.js';

gsap.registerPlugin(useGSAP);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* the bar drops in on load, then its contents fall in behind it — the page
     opens with the header arriving rather than already being there */
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const items = gsap.utils.toArray('.nav-links > *');

      /* "Book a demo" is a .btn, and .btn transitions transform for its hover
         lift. That transition smooths every frame the tween writes, so the
         button fades in place instead of dropping. Mute it for the intro, then
         clear the inline styles so hover is CSS's job again. */
      gsap.set(items, { transition: 'none' });

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from(root.current, { yPercent: -100, autoAlpha: 0, duration: 0.85 })
        .from('.brand', { autoAlpha: 0, y: -16, duration: 0.6 }, 0.28)
        .from(items, {
          autoAlpha: 0,
          y: -18,
          stagger: 0.07,
          duration: 0.55,
        }, 0.34)
        .set(items, { clearProps: 'transform,opacity,visibility,transition' });
    });

    return () => mm.revert();
  }, { scope: root });

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} ref={root}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <img src={`${import.meta.env.BASE_URL}truly-mark.png`} alt="" />
          Truly
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#how">How it works</a>
          <a className="nav-link" href="#why">Why Truly</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#faq">FAQ</a>
          <a className="nav-link" href="https://app.trulyta.com">Log in</a>
          <a className="btn btn-ink" href={CAL_URL} target="_blank" rel="noopener noreferrer">Book a demo</a>
        </nav>
      </div>
    </header>
  );
}
