import { useScrollEngine } from './hooks/useScrollEngine.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import DesktopShowcase from './components/DesktopShowcase.jsx';
import LogoMarquee from './components/LogoMarquee.jsx';
import MarqueeStrip from './components/MarqueeStrip.jsx';
import Problem from './components/Problem.jsx';
import Principle from './components/Principle.jsx';
import Track from './components/Track.jsx';
import Steps from './components/Steps.jsx';
import Compare from './components/Compare.jsx';
import Features from './components/Features.jsx';
import Benefits from './components/Benefits.jsx';
import Vision from './components/Vision.jsx';
import Faq from './components/Faq.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useScrollEngine();

  return (
    <>
      <Nav />
      <Hero />
      <DesktopShowcase />
      <LogoMarquee />
      <MarqueeStrip />
      <Problem />
      <Principle />
      <Track />
      <Steps />
      <Compare />
      <Features />
      <Benefits />
      <Vision />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
