'use client';

import ParticleBackground from '../components/ParticleBackground';
import Container from '../components/Container';
import Home from './home/page';
import About from './about/page';
import Skills from './skills/page';
import Services from './services/page';
import Portfolio from './portfolio/page';
import Testimonials from './testimonials/page';
import Qualification from './qualification/page';
import Contact from './contact/page';

export default function RootPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-gray-900 dark:text-gray-100">
      <ParticleBackground />
      
      <section id="home" className="relative z-10 min-h-screen">
        <Container>
          <Home />
        </Container>
      </section>
      
      <section id="about" className="relative z-10 py-20">
        <Container>
          <About />
        </Container>
      </section>
      
      <section id="skills" className="relative z-10 py-20">
        <Container>
          <Skills />
        </Container>
      </section>
      
      <section id="services" className="relative z-10 py-20">
        <Container>
          <Services />
        </Container>
      </section>
      
      <section id="portfolio" className="relative z-10 py-20">
        <Container>
          <Portfolio />
        </Container>
      </section>
      
      <section id="testimonials" className="relative z-10 py-20">
        <Container>
          <Testimonials />
        </Container>
      </section>
      
      <section id="qualification" className="relative z-10 py-20">
        <Container>
          <Qualification />
        </Container>
      </section>
      
      <section id="contact" className="relative z-10 py-20">
        <Container>
          <Contact />
        </Container>
      </section>
    </div>
  );
}
