'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../Container';
import * as SiIcons from 'react-icons/si';

const skills = [
  { name: 'React', icon: 'SiReact', color: '#61DAFB', level: 95 },
  { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000', level: 90 },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6', level: 85 },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E', level: 95 },
  { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933', level: 80 },
  { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248', level: 75 },
  { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06B6D4', level: 90 },
  { name: 'Framer', icon: 'SiFramer', color: '#0055FF', level: 85 },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Header - Responsive Typography */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid - Responsive Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = SiIcons[skill.icon as keyof typeof SiIcons];
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 8px 25px ${skill.color}20`
                }}
                className="group relative p-3 sm:p-4 lg:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/20 dark:border-gray-700/20 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4">
                  {/* Icon Container - Responsive */}
                  <div 
                    className="p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    {IconComponent && (
                      <IconComponent 
                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-colors duration-300"
                        style={{ color: skill.color }}
                      />
                    )}
                  </div>
                  
                  {/* Skill Info - Responsive Text */}
                  <div className="text-center w-full">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                      {skill.name}
                    </h3>
                    
                    {/* Progress Bar - Responsive */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 mb-1">
                      <motion.div
                        className="h-1.5 sm:h-2 rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}