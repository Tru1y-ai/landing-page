import Reveal from './Reveal.jsx';
import { CAL_URL } from '../links.js';

export default function Cta() {
  return (
    <section className="cta" id="demo">
      <div className="wrap">
        <div className="cta-panel grain">
          <div className="cta-mesh" aria-hidden="true" />
          <Reveal><p className="eyebrow" style={{ justifyContent: 'center' }}>Get started</p></Reveal>
          <Reveal delay={0.08}>
            <h2 className="h2">See how your candidates <em>actually</em> work.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="cta-actions">
              <a className="btn btn-ink" href={CAL_URL} target="_blank" rel="noopener noreferrer">
                Book a 30-min demo
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="cta-note">Set up in a day · Works alongside your existing pipeline</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
