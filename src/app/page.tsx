'use client';



import Home from './home/page';
import About from './about/page';
import SkillsSection from '../components/sections/SkillsSection';
import Services from './services/page';
import Portfolio from './portfolio/page';
import Achievements from './achievements/page';
import Testimonials from './testimonials/page';
import Qualification from './qualification/page';
import Contact from './contact/page';
import { SectionWrapper } from '../components/animations/index';


export default function RootPage() {
  return (
    <div className="relative">
      {/* Home Section */}
      <Home />

      <SectionWrapper id="about" className="relative z-10">
        <About />
      </SectionWrapper>

      <SectionWrapper id="skills" className="relative z-10">
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper id="services" className="relative z-10 py-16 md:py-24 lg:py-32">
        <Services />
      </SectionWrapper>

      <SectionWrapper id="portfolio" className="relative z-10 py-16 md:py-24 lg:py-32">
        <Portfolio />
      </SectionWrapper>

      <SectionWrapper id="achievements" className="relative z-10 py-16 md:py-24 lg:py-32">
        <Achievements />
      </SectionWrapper>

      <SectionWrapper id="testimonials" className="relative z-10 py-16 md:py-24 lg:py-32">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper id="qualification" className="relative z-10 py-16 md:py-24 lg:py-32">
        <Qualification />
      </SectionWrapper>

      <SectionWrapper id="contact" className="relative z-10 py-16 md:py-24 lg:py-32">
        <Contact />
      </SectionWrapper>
    </div>
  );
}