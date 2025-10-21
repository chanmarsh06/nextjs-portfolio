'use client';
import FadeInSection from '../../components/FadeInSection';

const education = [
  { year: '2019 - 2023', degree: 'B.Tech in Computer Science', institute: 'XYZ University' },
  { year: '2017 - 2019', degree: 'Higher Secondary School', institute: 'ABC School' },
];

export default function Qualification() {
  return (
    <div className="min-h-screen px-4 py-20 max-w-[800px] mx-auto">
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
    </div>
  );
}
