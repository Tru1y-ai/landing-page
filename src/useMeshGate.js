import { useEffect } from 'react';

/**
 * The drifting mesh backdrops are the most expensive thing on the page: each
 * one is a large surface carrying `filter: blur(22-28px)`, and `drift`
 * animates scale/rotate, so the blur cannot be cached — it is re-rasterized
 * every frame. Measured on a 1920px viewport that is 6.77 megapixels of
 * gaussian blur per frame across six elements, five of which are below the
 * fold at load.
 *
 * They are `animation-play-state: paused` in CSS and released per element by
 * `.mesh-on` once it is actually on screen, so first paint pays for the hero
 * alone. `will-change` rides on the same class rather than sitting on the
 * element permanently — it is a hint for the moment a thing is moving, and
 * six always-on compositor layers is what it is meant to prevent.
 *
 * Bails out to running when IntersectionObserver is missing: a gate that can
 * fail to arrive would leave every backdrop frozen.
 */
const MESHES = '.step-mesh, .pipe-meta-mesh, .cta-mesh';

export default function useMeshGate() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(MESHES));
    if (!els.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('mesh-on'));
      return;
    }

    // toggles both ways: scrolling past a section drops its layer again
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle('mesh-on', e.isIntersecting));
      },
      { rootMargin: '10% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
