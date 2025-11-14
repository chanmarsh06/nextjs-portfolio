'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import { fadeInUp, staggerContainer, staggerItem, hoverLift } from '@/utils/animations';
import { GiCricketBat, GiTrophyCup } from 'react-icons/gi';
import { HiOutlineCode } from 'react-icons/hi';

export default function Achievements() {
  const achievements = [
    {
      icon: <GiCricketBat className="text-3xl text-primary-500" />,
      title: 'Under-17 National Cricket Player',
      description: 'Represented Puducherry in the 61st National School Games with an official National ID.',
    },
    {
      icon: <GiTrophyCup className="text-3xl text-secondary-500" />,
      title: 'Under-19 State Cricket Player',
      description: 'Played competitive state-level cricket with discipline and leadership.',
    },
    {
      icon: <HiOutlineCode className="text-3xl text-accent-500" />,
      title: 'From Athlete → Developer',
      description: 'Converted sports discipline into powerful focus and execution in tech.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/8 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/8 blur-3xl rounded-full" />

      <Container>
        {/* Header */}
        <motion.div
          {...fadeInUp(0)}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sports shaped my discipline — coding shaped my career
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              {...hoverLift}
              className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center mx-auto mb-6">
                {achievement.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {achievement.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
