import SplitText from './SplitText'

const FEATURES = [
  {
    tag: 'Assessments',
    title: 'Take-homes built for the actual job.',
    body: 'Every assessment is generated from the specific job posting — not a generic bank of questions. Candidates work on real problems in realistic conditions, with a defined time limit.',
  },
  {
    tag: 'AI Tracking',
    title: 'See how candidates think, not just what they submit.',
    body: 'We track every AI prompt, tool call, and token used during the assessment. You see the thinking process — not just the final output — so you can evaluate judgment alongside skill.',
  },
  {
    tag: 'For Companies',
    title: 'Stop reviewing thousands of identical applications.',
    body: 'Truly surfaces the candidates worth your time. Structured, thorough evaluations replace resume stacks, letting your team focus on the performers who matter.',
  },
  {
    tag: 'For Candidates',
    title: 'One assessment. Every opportunity.',
    body: 'Candidates complete a single centralized assessment rather than retaking variations of the same test across dozens of companies. Less time wasted. More signal for everyone.',
  },
  {
    tag: 'Evaluation',
    title: 'Beyond correctness — depth of understanding.',
    body: 'Our scoring goes beyond pass/fail. We analyze how efficiently candidates work, how they approach ambiguity, and where they reason independently versus reaching for help.',
  },
  {
    tag: 'Future',
    title: 'Built to generalize across all hiring.',
    body: 'Starting with technical roles, Truly is designed to expand to any talent acquisition process — video interviews, content creation, design challenges, and collaborative assessments.',
  },
]

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="border-t border-black/8" style={{ padding: '7rem 0' }}>

      {/* Header */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2.5rem', marginBottom: '5rem' }} className="flex flex-col items-center text-center">
        <SplitText
          text="What We Do"
          tag="p"
          className="text-xs uppercase tracking-[0.2em] text-black/35 mb-7"
          delay={20}
          duration={0.7}
          ease="power2.out"
          splitType="chars"
          from={{ opacity: 0, y: 15 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-10px"
          textAlign="center"
        />
        <SplitText
          text="Replace the tools that were never built for today."
          tag="h2"
          className="text-5xl md:text-6xl tracking-tight text-black"
          delay={20}
          duration={1}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-60px"
          textAlign="center"
        />
        <SplitText
          text="Truly is a B2B platform replacing CodeSignal, HackerRank, and HireVue with assessments that measure what actually matters."
          tag="p"
          className="mt-7 text-lg text-black/45 leading-relaxed max-w-xl"
          delay={20}
          duration={0.9}
          ease="power2.out"
          splitType="words"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-20px"
          textAlign="center"
        />
      </div>

      {/* Feature grid — full bleed, 2 cols */}
      <div
        className="border-t border-black/8"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
      >
        {FEATURES.map(({ tag, title, body }, i) => (
          <div
            key={tag}
            style={{
              padding: '3.5rem 4rem',
              borderBottom: i < 4 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              borderRight: i % 2 === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <SplitText
              text={tag}
              tag="span"
              className="text-xs text-black/30 tracking-widest uppercase border border-black/10 rounded-full px-3 py-1 self-start"
              delay={15}
              duration={0.6}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-10px"
              textAlign="left"
            />
            <SplitText
              text={title}
              tag="h3"
              className="text-xl tracking-tight text-black leading-snug"
              delay={20}
              duration={0.9}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 25 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-40px"
              textAlign="left"
            />
            <SplitText
              text={body}
              tag="p"
              className="text-sm text-black/45 leading-relaxed"
              delay={18}
              duration={0.8}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 15 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-20px"
              textAlign="left"
            />
          </div>
        ))}
      </div>

    </section>
  )
}
