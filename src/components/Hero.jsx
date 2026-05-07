import FallingText from './FallingText'
import SplitText from './SplitText'
import ScrollFloat from './ScrollFloat'

const OLD_PLATFORMS = 'HackerRank CodeSignal HireVue take-home tests generic assessments one-size-fits-all interviews'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Eyebrow — SplitText char-by-char fade in */}
      <div className="mb-10">
        <SplitText
          text="The future of technical hiring"
          tag="p"
          className="text-xs uppercase tracking-[0.2em] text-black/35"
          delay={30}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="center"
        />
      </div>

      {/* Headline — SplitText char-by-char */}
      <div style={{ marginBottom: '1.5rem' }} className="max-w-3xl">
        <SplitText
          text="Hiring, redesigned for the age of AI."
          tag="h1"
          className="text-6xl md:text-7xl tracking-tight text-black [overflow:visible!important]"
          delay={25}
          duration={1}
          ease="power4.out"
          splitType="chars"
          from={{ opacity: 0, y: 60, rotateX: -20 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="center"
        />
      </div>

      {/* Sub-headline — SplitText word-by-word fade in */}
      <div className="mb-24 max-w-xl">
        <SplitText
          text="Truly replaces outdated interview tools with AI-native take-home assessments that evaluate how candidates actually think and work — not just what they memorize."
          tag="p"
          className="text-lg text-black/45 leading-relaxed"
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

      {/* FallingText — old platforms fall away on scroll */}
      <div style={{ height: '220px' }} className="w-full max-w-4xl">
        <FallingText
          text={OLD_PLATFORMS}
          highlightWords={['HackerRank', 'CodeSignal', 'HireVue']}
          trigger="scroll"
          gravity={0.7}
          fontSize="1.6rem"
          mouseConstraintStiffness={0.7}
          wordSpacing="8px"
          backgroundColor="transparent"
          wireframes={false}
        />
      </div>

    </section>
  )
}
