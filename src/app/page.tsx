'use client';

import dynamic from 'next/dynamic';
import { SectionWrapper } from '../components/animations/index';

const Home = dynamic(() => import('./home/page'));
const About = dynamic(() => import('./about/page'));
const SkillsSection = dynamic(() => import('../components/sections/SkillsSection'));
const Services = dynamic(() => import('./services/page'));
const Portfolio = dynamic(() => import('./portfolio/page'));
const Achievements = dynamic(() => import('./achievements/page'));
const Testimonials = dynamic(() => import('./testimonials/page'));
const Qualification = dynamic(() => import('./qualification/page'));
const Contact = dynamic(() => import('./contact/page'));

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

      <SectionWrapper id="services" className="relative z-10">
        <Services />
      </SectionWrapper>

      <SectionWrapper id="portfolio" className="relative z-10">
        <Portfolio />
      </SectionWrapper>

      <SectionWrapper id="achievements" className="relative z-10">
        <Achievements />
      </SectionWrapper>

      <SectionWrapper id="testimonials" className="relative z-10">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper id="qualification" className="relative z-10">
        <Qualification />
      </SectionWrapper>

      <SectionWrapper id="contact" className="relative z-10">
        <Contact />
      </SectionWrapper>
    </div>
  );
}