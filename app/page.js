import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import ValueProposition from './components/sections/ValueProposition';
import HowItWorks from './components/sections/HowItWorks';
import CaseStudies from './components/sections/CaseStudies';
import Contact from './components/sections/Contact';
import { SmoothScroll } from './components/magicui/smooth-scroll';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SmoothScroll />
      <main>        
        <Hero />
        <Services />
        <ValueProposition />
        <HowItWorks />
        <CaseStudies />
        <Contact />
        {/* Additional sections will be added here */}
      </main>
    </div>
  );
}
