import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MissionSection from './components/MissionSection'
import WhatWeDoSection from './components/WhatWeDoSection'
import RequestDemoSection from './components/RequestDemoSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500 }}>
      <Navbar />
      <Hero />
      <MissionSection />
      <WhatWeDoSection />
      <RequestDemoSection />
      <Footer />
    </div>
  )
}
