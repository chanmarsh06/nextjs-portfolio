'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';
import { fadeInUp, staggerContainer, staggerItem, hoverLift } from '@/utils/animations';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiFirebase, SiDocker
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skillSections = [
  {
    title: "Frontend",
    skills: [
      { name: 'React.js', level: 90, color: '#61dafb', icon: <SiReact /> },
      { name: 'Next.js', level: 85, color: '#000', icon: <SiNextdotjs /> },
      { name: 'TypeScript', level: 80, color: '#3178c6', icon: <SiTypescript /> },
      { name: 'JavaScript', level: 85, color: '#f7df1e', icon: <SiJavascript /> },
      { name: 'Tailwind CSS', level: 90, color: '#06b6d4', icon: <SiTailwindcss /> },
      { name: 'HTML5', level: 95, color: '#e34c26', icon: <SiHtml5 /> },
      { name: 'CSS3', level: 90, color: '#1572b6', icon: <SiCss3 /> },
      { name: 'Redux', level: 75, color: '#764abc', icon: <SiRedux /> },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: 'Node.js', level: 85, color: '#339933', icon: <SiNodedotjs /> },
      { name: 'Express.js', level: 80, color: '#000', icon: <SiExpress /> },
      { name: 'MongoDB', level: 80, color: '#47a248', icon: <SiMongodb /> },
      { name: 'MySQL', level: 75, color: '#4479a1', icon: <SiMysql /> },
      { name: 'Git', level: 90, color: '#f05032', icon: <SiGit /> },
      { name: 'Docker', level: 70, color: '#2496ED', icon: <SiDocker /> },
      { name: 'AWS', level: 65, color: '#FF9900', icon: <FaAws /> },
      { name: 'Firebase', level: 75, color: '#FFCA28', icon: <SiFirebase /> },
    ],
  }
];

export default function Skills() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary-500/10 blur-3xl rounded-full" />

      <Container>
        {/* Header */}
        <motion.div
          {...fadeInUp(0)}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Skills & </span>
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillSections.map((section, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{section.title}</h3>

              <div className="space-y-6">
                {section.skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="text-xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          {...fadeInUp(0.4)}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', icon: <SiReact />, color: '#61dafb' },
              { name: 'Next.js', icon: <SiNextdotjs />, color: '#000' },
              { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
              { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
              { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
              { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06b6d4' },
            ].map((tech, i) => (
              <motion.div
                key={i}
                {...hoverLift}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
                style={{ color: tech.color }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
