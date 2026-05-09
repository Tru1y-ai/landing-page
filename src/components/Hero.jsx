import SplitText from './SplitText'
import GradientText from './GradientText'
import CardSwap, { Card } from './CardSwap'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pb-16 overflow-hidden" style={{ paddingTop: '10rem' }}>

      {/* Eyebrow */}
      <div className="mb-10 flex justify-center">
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

      {/* Headline — GradientText */}
      <div style={{ marginBottom: '2.5rem' }}>
        <GradientText
          colors={['#000000', '#7c3aed', '#db2777', '#2563eb', '#000000']}
          animationSpeed={3}
          direction="horizontal"
          yoyo={true}
          className="text-6xl md:text-7xl tracking-tight leading-tight"
        >
          Hiring, redesigned for the age of AI.
        </GradientText>
      </div>

      {/* Sub-headline */}
      <div className="mb-24 max-w-xl flex justify-center">
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

      {/* CardSwap — centered */}
      <div className="relative" style={{ width: '440px', height: '420px', marginTop: '10rem', marginBottom: '5rem' }}>
        <CardSwap
          className="relative perspective-[900px] overflow-visible"
          cardDistance={55}
          verticalDistance={65}
          delay={4000}
          pauseOnHover
          skewAmount={5}
          easing="elastic"
          width={440}
          height={280}
        >
          <Card>
            <div className="flex flex-col justify-between h-full p-7 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-sm font-bold">HR</span>
                </div>
                <span className="text-white/50 text-xs uppercase tracking-widest">HackerRank</span>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-2 uppercase tracking-wider">Question 3 of 5 · 45 min left</p>
                <p className="text-white text-sm leading-relaxed mb-3">
                  Given an array of integers, return the indices of the two numbers that add up to a target sum.
                </p>
                <div className="bg-white/5 rounded-lg p-3 font-mono text-xs text-white/40">
                  Input: nums = [2,7,11,15], target = 9<br />
                  Output: [0,1]
                </div>
              </div>
              <p className="text-white/25 text-xs mt-4 italic">Does this really show how they'll perform on your team?</p>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col justify-between h-full p-7 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 text-sm font-bold">LC</span>
                </div>
                <span className="text-white/50 text-xs uppercase tracking-widest">LeetCode</span>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-2 uppercase tracking-wider">Hard · Algorithms · Timer: 01:12:44</p>
                <p className="text-white text-sm leading-relaxed mb-3">
                  You are given a string s and an integer k. Find the length of the longest substring containing at most k distinct characters.
                </p>
                <div className="bg-white/5 rounded-lg p-3 font-mono text-xs text-white/40">
                  <span className="text-purple-400">def</span> lengthOfLongestSubstringKDistinct(s, k):<br />
                  &nbsp;&nbsp;<span className="text-white/20">pass</span>
                </div>
              </div>
              <p className="text-white/25 text-xs mt-4 italic">Memorizing patterns ≠ engineering ability.</p>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col justify-between h-full p-7 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 text-sm font-bold">CS</span>
                </div>
                <span className="text-white/50 text-xs uppercase tracking-widest">CodeSignal</span>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-2 uppercase tracking-wider">General Coding Assessment · Score: ???</p>
                <p className="text-white text-sm leading-relaxed mb-3">
                  Task 4: Implement a function that checks whether a given string is a valid IPv4 address using only basic string operations.
                </p>
                <div className="bg-white/5 rounded-lg p-3 font-mono text-xs text-white/40">
                  <span className="text-orange-400/60">// 3 more tasks remaining</span><br />
                  <span className="text-white/20">function solution(inputString) {'{'}</span><br />
                  &nbsp;&nbsp;<span className="text-white/20">{'}'}</span>
                </div>
              </div>
              <p className="text-white/25 text-xs mt-4 italic">A score doesn't tell you how they think.</p>
            </div>
          </Card>
        </CardSwap>
      </div>


    </section>
  )
}
