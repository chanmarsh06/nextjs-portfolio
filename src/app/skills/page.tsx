'use client';
import FadeInSection from '../../components/FadeInSection';

const skills = [
  { name: 'React.js', level: 'Expert' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'Framer Motion', level: 'Advanced' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
];

export default function Skills() {
  return (
    <div className="min-h-screen px-4 py-20 max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <FadeInSection key={i}>
            <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}
