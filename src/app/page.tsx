'use client';

import Image from 'next/image';
import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import Carousel from '../components/Carousel';
import profilePic from '@/assests/chan.png';

export default function RootPage() {
  // Sample data
  const skills = ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'];
  const services = [
    { title: 'Frontend Development', description: 'Responsive UI & optimized code' },
    { title: 'Animations', description: 'Framer Motion & Tailwind CSS effects' },
    { title: 'Portfolio Websites', description: 'Creative, interactive, fast' },
  ];
  const projects = [
    { title: 'Project One', image: '/assets/images/project1.jpg' },
    { title: 'Project Two', image: '/assets/images/project2.jpg' },
    { title: 'Project Three', image: '/assets/images/project3.jpg' },
  ];
  const testimonials = [
    { name: 'Alice', feedback: 'Highly skilled developer, great animations.' },
    { name: 'Bob', feedback: 'Very professional and responsive.' },
  ];
  const education = [
    { year: '2019-2023', degree: 'B.Tech in Computer Science', institute: 'XYZ University' },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Particle background */}
      <ParticleBackground />

      {/* ===== HOME ===== */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <Image
          src={profilePic}
          alt="Profile"
          width={180}
          height={180}
          className="rounded-full border-4 border-primary mb-6"
        />
        <AnimatedText text="Hi, I'm Chan" />
        <p className="mt-4 max-w-md text-gray-700 dark:text-gray-300">
          Frontend Developer | React.js | Next.js | Tailwind CSS | Framer Motion
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="#portfolio" className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
            My Work
          </Link>
          <Link href="#contact" className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
            Contact Me
          </Link>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="max-w-[1200px] mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-10">
        <FadeInSection>
          <Image src={profilePic} alt="About me" width={300} height={300} className="rounded-full border-4 border-primary" />
        </FadeInSection>
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a Frontend Developer passionate about building performant, responsive, and animated web apps using React.js, Next.js, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I love creating interactive, user-friendly experiences while optimizing performance and accessibility.
          </p>
        </FadeInSection>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="max-w-[1200px] mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <FadeInSection key={i}>
              <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{skill}</h3>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="max-w-[1200px] mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <FadeInSection key={i}>
              <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section id="portfolio" className="max-w-[1200px] mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Portfolio</h2>
        <Carousel items={projects} />
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="max-w-[800px] mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Testimonials</h2>
        <div className="flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <FadeInSection key={i}>
              <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
                <p className="text-gray-700 dark:text-gray-300 mb-2">&ldquo;{t.feedback}&rdquo;</p>
                <p className="text-gray-900 dark:text-gray-200 font-bold">- {t.name}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== QUALIFICATION ===== */}
      <section id="qualification" className="max-w-[800px] mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Qualification</h2>
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <FadeInSection key={i}>
              <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
                <p className="text-primary font-bold">{edu.year}</p>
                <p className="text-gray-800 dark:text-gray-200 font-semibold">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.institute}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Contact Me</h2>
        <form
          action="/api/contact"
          method="POST"
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
