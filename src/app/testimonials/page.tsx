'use client';
import FadeInSection from '../../components/FadeInSection';

const testimonials = [
  { name: 'Alice', feedback: 'Chan is a highly skilled frontend developer, delivering creative and smooth animations.' },
  { name: 'Bob', feedback: 'Very professional and responsive. Highly recommend for portfolio or web projects.' },
  { name: 'Charlie', feedback: 'Excellent work with attention to detail and performance.' },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen px-4 py-20 max-w-[800px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">Testimonials</h2>
      <div className="flex flex-col gap-8">
        {testimonials.map((t, i) => (
          <FadeInSection key={i}>
            <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
              <p className="text-gray-700 dark:text-gray-300 mb-2">"{t.feedback}"</p>
              <p className="text-gray-900 dark:text-gray-200 font-bold">- {t.name}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}
