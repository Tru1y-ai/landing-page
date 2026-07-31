import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import How from './components/How';
import Pipeline from './components/Pipeline';
import Why from './components/Why';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* First tab stop on the page. Without it, reaching the content past a
          nav and a 100svh hero means tabbing through every link each time. */}
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <How />
        <Pipeline />
        <Why />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
