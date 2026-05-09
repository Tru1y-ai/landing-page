import SplitText from './SplitText'
import FuzzyText from './FuzzyText'

const PILLARS = [
  {
    number: '01',
    title: 'AI is changing work.',
    body: "The way people collaborate, create, and solve problems has fundamentally shifted. The tools used to evaluate talent haven't kept up.",
  },
  {
    number: '02',
    title: 'Assessments should reflect reality.',
    body: 'Generic coding challenges and timed tests measure memorization, not capability. We believe every assessment should mirror the actual job.',
  },
  {
    number: '03',
    title: 'Candidates deserve respect.',
    body: "Even candidates who aren't a fit should leave feeling valued. A great assessment experience builds your brand — win or lose.",
  },
]

export default function MissionSection() {
  return (
    <section id="mission" className="border-t border-black/8" style={{ padding: '7rem 0' }}>

      {/* Header */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2.5rem' }} className="flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-black/35 mb-7">Our Mission</p>
        <div className="flex justify-center w-full">
          <SplitText
            text="Hiring that keeps up with the world."
            tag="h2"
            className="text-5xl md:text-6xl tracking-tight text-black"
            delay={25}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-60px"
            textAlign="center"
          />
        </div>
        <p className="mt-7 text-lg text-black/45 leading-relaxed max-w-xl">
          AI is revolutionizing how work gets done. We're building the infrastructure to evaluate talent the right way — thoughtful, fair, and built for the modern workforce.
        </p>
      </div>

      {/* FuzzyText — right after mission header */}
      <div className="flex flex-col items-center gap-1" style={{ margin: '5rem 0' }}>
        <FuzzyText
          fontSize="1.1rem"
          fontWeight={500}
          color="#000"
          baseIntensity={0.08}
          hoverIntensity={0.35}
          enableHover
        >
          No more
        </FuzzyText>
        <FuzzyText
          fontSize="clamp(2.8rem, 5vw, 4.5rem)"
          fontWeight={900}
          color="#000"
          baseIntensity={0.12}
          hoverIntensity={0.45}
          enableHover
          glitchMode
          glitchInterval={3500}
          glitchDuration={180}
        >
          Stupid
        </FuzzyText>
        <FuzzyText
          fontSize="clamp(1.5rem, 2.5vw, 2.2rem)"
          fontWeight={800}
          color="#000"
          baseIntensity={0.1}
          hoverIntensity={0.4}
          enableHover
        >
          Technical Tests.
        </FuzzyText>
        <div style={{ marginTop: '1.5rem' }}>
          <FuzzyText
            fontSize="1rem"
            fontWeight={500}
            color="#00000088"
            baseIntensity={0.06}
            hoverIntensity={0.3}
            enableHover
          >
            It is time to show
          </FuzzyText>
        </div>
        <FuzzyText
          fontSize="clamp(1.6rem, 2.8vw, 2.5rem)"
          fontWeight={900}
          color="#000"
          baseIntensity={0.1}
          hoverIntensity={0.42}
          enableHover
          gradient={['#7c3aed', '#db2777', '#2563eb']}
        >
          how Truly worth you are.
        </FuzzyText>
      </div>

      {/* Pillars — full bleed grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="border-t border-b border-black/8">
        {PILLARS.map(({ number, title, body }, i) => (
          <div
            key={number}
            style={{ padding: '3.5rem 3rem', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none', display: 'flex', flexDirection: 'column' }}
          >
            <span className="text-xs text-black/20 tracking-[0.2em] mb-8">{number}</span>
            <h3 className="text-2xl tracking-tight text-black mb-4">{title}</h3>
            <p className="text-sm text-black/45 leading-relaxed" style={{ marginTop: 'auto' }}>{body}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
