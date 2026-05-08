import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MissionSection from './components/MissionSection'
import WhatWeDoSection from './components/WhatWeDoSection'
import RequestDemoSection from './components/RequestDemoSection'
import Footer from './components/Footer'
import GlassSurface from './components/GlassSurface'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
      <Navbar />
      <Hero />
      <MissionSection />
      <WhatWeDoSection />
      <RequestDemoSection />
      <Footer />

      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
        <GlassSurface
          width={140}
          height={48}
          borderRadius={24}
          distortionScale={-160}
          brightness={55}
          opacity={0.9}
          blur={10}
          backgroundOpacity={0.15}
          saturation={1.2}
          className="cursor-pointer hover:opacity-90 active:scale-95"
        >
          <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.02em', color: 'inherit' }}>
            Contact Us
          </span>
        </GlassSurface>
      </div>
    </div>
  )
}
