import gsap from 'gsap';

/**
 * Pointer-follow tilt for a set of cards.
 *
 * GSAP owns the transform on every element passed in, so those elements must
 * not also carry a CSS `transform` or a `transform` transition — the two
 * would fight over the same matrix. Put any static offset (a featured card
 * sitting forward in Z, say) on a wrapper instead.
 *
 * Note the property names: GSAP's 3D aliases are rotationX/rotationY.
 * The CSS spellings rotateX/rotateY are silently ignored.
 */
export function wireCardTilt(
  cards: HTMLElement[],
  contextSafe: <T extends (...args: never[]) => unknown>(fn: T) => T,
  opts: { maxY?: number; maxX?: number; lift?: number } = {}
): () => void {
  const { maxY = 11, maxX = 9, lift = 34 } = opts;
  const cleanups: (() => void)[] = [];

  cards.forEach((card) => {
    const rotX = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const rotY = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' });
    const toZ = gsap.quickTo(card, 'z', { duration: 0.5, ease: 'power3.out' });

    const onMove = contextSafe(((e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rotY(px * maxY);
      rotX(-py * maxX);
      toZ(lift);
      // let any hue wash track the cursor too
      card.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
      card.style.setProperty('--my', `${(py + 0.5) * 100}%`);
    }) as never);

    const onLeave = contextSafe((() => {
      rotX(0);
      rotY(0);
      toZ(0);
    }) as never);

    card.addEventListener('pointermove', onMove as EventListener);
    card.addEventListener('pointerleave', onLeave as EventListener);
    cleanups.push(() => {
      card.removeEventListener('pointermove', onMove as EventListener);
      card.removeEventListener('pointerleave', onLeave as EventListener);
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

/** Only wire pointer tilt where there's a real pointer and motion is welcome. */
export const TILT_QUERY =
  '(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)';
