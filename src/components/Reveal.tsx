import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type RevealProps = {
  delay?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Scroll-into-view reveal.
 *
 * IntersectionObserver toggles a class; the motion itself is a CSS transition.
 * There are ~36 of these on the page, and a fade-and-rise does not need an
 * animation engine — the compositor already does it. This also keeps reveals
 * independent of GSAP's rAF ticker, so nothing can strand a section invisible.
 *
 * Reduced motion and missing IO both fall through to "just show it".
 */
export default function Reveal({ delay = 0, children, className, style }: RevealProps) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      node.classList.add('rv-in');
      return;
    }

    node.classList.add('rv');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(entry.target);
          (entry.target as HTMLElement).classList.add('rv-in');
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={el}
      className={className}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
    >
      {children}
    </div>
  );
}
