import { useEffect, useRef } from 'react';

/**
 * Reading position for a long page.
 *
 * CSS scroll-driven animations would be the nicer implementation, but the
 * ScrollTimeline stayed inactive when tested here, so this uses a passive
 * scroll listener instead — verifiable, and works everywhere. The listener
 * only writes a CSS variable; the paint is a compositor-friendly scaleX.
 */
export default function ScrollProgress() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    const write = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      node.style.setProperty('--sp', String(p));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(write);
    };

    write();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div className="scroll-progress" ref={el} aria-hidden="true" />;
}
