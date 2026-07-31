import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [
  {
    n: '01',
    h: 'Create a simulation',
    p: 'Paste the job description. Truly generates an open-ended, job-specific project — plus the workplace scenarios you want to test — matched to your stack, seniority, and values.',
    mesh: { '--c1': 'var(--moss)', '--c2': 'var(--teal)', '--c3': '#3E8A5E' },
  },
  {
    n: '02',
    h: 'Candidates do real work',
    p: 'They work on their own machine, in their own setup, with any tools they want — AI encouraged. Simulated scenarios arrive mid-task: a scope change, a review comment, a teammate’s question.',
    mesh: { '--c1': 'var(--amber)', '--c2': 'var(--clay)', '--c3': '#D08A3C' },
  },
  {
    n: '03',
    h: 'Decide on evidence',
    p: 'AI evaluators analyze the full session — screen recording, codebase, and AI usage — and return a rubric-scored, evidence-backed report for every candidate. No interviewer hours required.',
    mesh: { '--c1': 'var(--plum)', '--c2': 'var(--teal)', '--c3': '#5B3A78' },
  },
];

export default function How() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // cards arrive lying back in space and stand up as they enter view
        gsap.from('.step-3d', {
          rotationX: 18,
          y: 56,
          z: -160,
          autoAlpha: 0,
          stagger: 0.12,
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps',
            start: 'top 82%',
            once: true,
          },
        });

        // Continuous lean rides on the inner card, not on .step-3d — two tweens
        // animating rotationX on one element would fight over the same matrix.
        gsap.fromTo(
          '.steps .step',
          { rotationX: 3.5 },
          {
            rotationX: -3.5,
            ease: 'none',
            scrollTrigger: {
              trigger: '.steps',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="sec how" id="how" ref={root}>
      <div className="wrap">
        <p className="eyebrow">How it works</p>
        <h2 className="h2">From job description to hiring decision.</h2>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step-3d" key={s.n}>
              <div className="step grain">
                <div className="step-mesh" style={s.mesh} aria-hidden="true" />
                <span className="step-n">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
