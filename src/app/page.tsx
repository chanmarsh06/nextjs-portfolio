'use client';

import Home from './home/page';
import About from './about/page';
import SkillsSection from '../components/sections/SkillsSection';
import Services from './services/page';
import Portfolio from './portfolio/page';
import Testimonials from './testimonials/page';
import Qualification from './qualification/page';
import Contact from './contact/page';

export default function RootPage() {
  return (
    <div className="relative">
      <Home />
      <About />
      <SkillsSection />
      
      <section id="services" className="py-20">
        <Services />
      </section>
      
      <section id="portfolio" className="py-20">
        <Portfolio />
      </section>
      
      <section id="testimonials" className="py-20">
        <Testimonials />
      </section>
      
      <section id="qualification" className="py-20">
        <Qualification />
      </section>
      
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </div>
  );
}