'use client';

import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiMui, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJsonwebtokens, SiJest, SiGit, SiFirebase, SiPostman, SiDocker
} from 'react-icons/si';
import { FaAws, FaGitAlt } from 'react-icons/fa';


// ✅ Better grouping structure
const sections = [
  {
    title: "Frontend",
    skills: [
      { name: 'HTML5', level: 90, color: '#e34c26', icon: <SiHtml5 /> },
      { name: 'CSS / SCSS', level: 85, color: '#1572b6', icon: <SiCss3 /> },
      { name: 'JavaScript', level: 85, color: '#f7df1e', icon: <SiJavascript /> },
      { name: 'TypeScript', level: 80, color: '#3178c6', icon: <SiTypescript /> },
      { name: 'React.js', level: 90, color: '#61dafb', icon: <SiReact /> },
      { name: 'Next.js', level: 85, color: '#000', icon: <SiNextdotjs /> },
      { name: 'Redux', level: 80, color: '#764abc', icon: <SiRedux /> },
      { name: 'Material UI', level: 85, color: '#007fff', icon: <SiMui /> },
      { name: 'Bootstrap', level: 75, color: '#7952b3', icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Backend / Database",
    skills: [
      { name: 'Node.js', level: 85, color: '#339933', icon: <SiNodedotjs /> },
      { name: 'Express.js', level: 80, color: '#000', icon: <SiExpress /> },
      { name: 'MongoDB', level: 80, color: '#47a248', icon: <SiMongodb /> },
      { name: 'MySQL', level: 75, color: '#4479a1', icon: <SiMysql /> },
      { name: 'JWT Auth', level: 80, color: '#ffca28', icon: <SiJsonwebtokens /> },
      { name: 'Jest Testing', level: 70, color: '#99424f', icon: <SiJest /> },
      { name: 'Git & GitHub', level: 85, color: '#f05032', icon: <SiGit /> },
    ],
  }
];


// 🔥 Enhanced Tools Section (premium badges)
const tools = [
  { name: 'React', color: '#61dafb', icon: <SiReact /> },
  { name: 'Node.js', color: '#339933', icon: <SiNodedotjs /> },
  { name: 'MongoDB', color: '#47a248', icon: <SiMongodb /> },
  { name: 'Express.js', color: '#000', icon: <SiExpress /> },
  { name: 'TypeScript', color: '#3178c6', icon: <SiTypescript /> },
  { name: 'JavaScript', color: '#f7df1e', icon: <SiJavascript /> },
  { name: 'Docker', color: '#2496ED', icon: <SiDocker /> },
  { name: 'AWS', color: '#FF9900', icon: <FaAws /> },
  { name: 'Firebase', color: '#FFCA28', icon: <SiFirebase /> },
  { name: 'Git', color: '#F05032', icon: <FaGitAlt /> },
  { name: 'Postman', color: '#FF6C37', icon: <SiPostman /> },
];


export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">

      {/* BG blur accents */}
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-secondary-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-16"
        >
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
            Skills & Technologiessss
          </span>
        </motion.h2>

        {/* ✅ Skills Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {sections.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">{block.title}</h3>

              <div className="space-y-6">
                {block.skills.map((skill, index) => (
                  <motion.div key={index} className="space-y-2">
                    {/* Icon + Label */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 font-semibold">
                        <span className="text-xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </span>
                        {skill.name}
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-[6px] rounded-full"
                      style={{ background: skill.color }}
                    ></motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Tools / Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-white/80 dark:bg-gray-900/70 border border-white/10 shadow-xl backdrop-blur-xl"
        >
          <h3 className="text-xl font-bold mb-6">Technologies & Tools</h3>

          <div className="flex flex-wrap gap-4">
            {tools.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: 2 }}
                className="px-4 py-2 rounded-xl flex items-center gap-2 font-medium shadow-md bg-white dark:bg-gray-800 border"
                style={{
                  borderColor: `${tech.color}30`,
                  color: tech.color,
                }}
              >
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
