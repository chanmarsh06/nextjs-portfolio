'use client';
import FadeInSection from '../../components/FadeInSection';

const services = [
  { title: 'Frontend Development', description: 'Building responsive and interactive UI with React and Next.js' },
  { title: 'Animations', description: 'Advanced animations using Framer Motion and Tailwind CSS' },
  { title: 'Performance Optimization', description: 'Fast and optimized web applications' },
  { title: 'Portfolio Websites', description: 'Creative and responsive personal portfolios' },
];

export default function Services() {
  return (
    <div className="min-h-screen px-4 py-20 max-w-[1200px] mx-auto">
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
    </div>
  );
}
