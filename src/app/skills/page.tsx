'use client';

import { motion } from 'framer-motion';
import { HiOutlineLightningBolt } from 'react-icons/hi';

import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiMui, SiBootstrap, SiJest,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJsonwebtokens, SiPython, SiGit, SiFirebase, SiPostman
} from 'react-icons/si';
import { FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { MdOutlineCode } from 'react-icons/md';

const frontendSkills = [
  { name: 'HTML5', level: 90, color: '#e34c26', icon: <SiHtml5 color="#e34c26" /> },
  { name: 'CSS3 / SCSS', level: 85, color: '#1572b6', icon: <SiCss3 color="#1572b6" /> },
  { name: 'JavaScript', level: 85, color: '#f7df1e', icon: <SiJavascript color="#f7df1e" /> },
  { name: 'TypeScript', level: 80, color: '#3178c6', icon: <SiTypescript color="#3178c6" /> },
  { name: 'React.js', level: 90, color: '#61dafb', icon: <SiReact color="#61dafb" /> },
  { name: 'Next.js', level: 85, color: '#000', icon: <SiNextdotjs color="#000" /> },
  { name: 'Redux', level: 80, color: '#764abc', icon: <SiRedux color="#764abc" /> },
  { name: 'Material-UI', level: 85, color: '#007fff', icon: <SiMui color="#007fff" /> },
  { name: 'Bootstrap', level: 75, color: '#7952b3', icon: <SiBootstrap color="#7952b3" /> },
];

const backendSkills = [
  { name: 'Node.js', level: 85, color: '#339933', icon: <SiNodedotjs color="#339933" /> },
  { name: 'Express.js', level: 80, color: '#000', icon: <SiExpress color="#000" /> },
  { name: 'MongoDB', level: 80, color: '#47a248', icon: <SiMongodb color="#47a248" /> },
  { name: 'MySQL', level: 75, color: '#4479a1', icon: <SiMysql color="#4479a1" /> },
  { name: 'JWT', level: 80, color: '#ffca28', icon: <SiJsonwebtokens color="#ffca28" /> },
  { name: 'Jest', level: 70, color: '#99424f', icon: <SiJest color="#99424f" /> },
  { name: 'Git & GitHub', level: 85, color: '#f05032', icon: <SiGit color="#f05032" /> },
];

const technologiesAndTools = [
  { name: 'React', color: '#61dafb', icon: <SiReact color="#61dafb" /> },
  { name: 'Node.js', color: '#339933', icon: <SiNodedotjs color="#339933" /> },
  { name: 'MongoDB', color: '#47a248', icon: <SiMongodb color="#47a248" /> },
  { name: 'Express.js', color: '#000', icon: <SiExpress color="#000" /> },
  { name: 'TypeScript', color: '#3178c6', icon: <SiTypescript color="#3178c6" /> },
  { name: 'JavaScript', color: '#f7df1e', icon: <SiJavascript color="#f7df1e" /> },
  { name: 'Python', color: '#3776ab', icon: <SiPython color="#3776ab" /> },
  { name: 'Docker', color: '#2496ED', icon: <FaDocker color="#2496ED" /> },
  { name: 'AWS', color: '#FF9900', icon: <FaAws color="#FF9900" /> },
  { name: 'Firebase', color: '#FFCA28', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Git', color: '#F05032', icon: <FaGitAlt color="#F05032" /> },
  { name: 'Postman', color: '#FF6C37', icon: <SiPostman color="#FF6C37" /> },
];

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
  >
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-2">
              {skill.icon}
              <span className="font-semibold">{skill.name}</span>
            </div>
            <span className="text-sm font-medium">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="h-2 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">My Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <SkillCard title="Frontend Developer" skills={frontendSkills} />
          <SkillCard title="Backend Developer" skills={backendSkills} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HiOutlineLightningBolt className="text-2xl text-pink-500" />
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-4">
            {technologiesAndTools.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
                style={{
                  borderColor: `${tech.color}40`,
                  backgroundColor: `${tech.color}12`,
                  color: tech.color,
                }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech.icon} {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
