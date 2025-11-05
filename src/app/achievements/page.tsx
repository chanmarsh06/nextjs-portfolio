'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';

// ✅ Icons
import { GiCricketBat, GiTrophyCup } from 'react-icons/gi';
import { HiOutlineCode } from 'react-icons/hi';

export default function Achievements() {
  const achievements = [
    {
      icon: <GiCricketBat className="text-primary-500" />,
      title: 'Under-17 National Cricket Player',
      description:
        'Represented Puducherry in the 61st National School Games with an official National ID.',
    },
    {
      icon: <GiTrophyCup className="text-secondary-500" />,
      title: 'Under-19 State Cricket Player',
      description: 'Played competitive state-level cricket with discipline and leadership.',
    },
    {
      icon: <HiOutlineCode className="text-primary-500" />,
      title: 'From Athlete → Developer',
      description: 'Converted sports discipline into powerful focus and execution in tech.',
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* glowing background */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-primary-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-secondary-500/10 blur-[120px] rounded-full -z-10" />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-3 text-base sm:text-lg">
            Sports shaped my discipline — coding shaped my career.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
             whileHover={{ scale: 1.05 }}
transition={{ type: "spring", stiffness: 260, damping: 20 }}

              className="relative p-[2px] rounded-3xl bg-gradient-to-r from-primary-500/20 via-primary-300/10 to-secondary-500/20 hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 group"
            >
              <div className="p-8 rounded-3xl h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 transition-all duration-500 group-hover:bg-white/90 dark:group-hover:bg-gray-900/90">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center text-5xl shadow-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 mx-auto mb-6"
                >
                  {achieve.icon}
                </motion.div>

                <h3 className="text-xl font-semibold text-center bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-3">
                  {achieve.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-center text-sm leading-relaxed">
                  {achieve.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
