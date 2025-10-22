'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {  HiTrophy, HiFolderOpen, HiFaceSmile } from 'react-icons/hi2';
import { HiDownload } from 'react-icons/hi';
import profilePic from '@/assets/chan.png';
import CV from '@/assets/Chandrasekaran_React_Resume.pdf'; // ✅ Correct PDF import

export default function About() {
  const infoData = [
    { icon: <HiTrophy className="text-3xl text-pink-500" />, title: 'Experience', subtitle: '2.6+ Years Working' },
    { icon: <HiFolderOpen className="text-3xl text-teal-400" />, title: 'Completed', subtitle: '25+ Projects' },
    { icon: <HiFaceSmile className="text-3xl text-blue-400" />, title: 'Support', subtitle: 'Online 24/7' },
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-12 py-24 px-6
      bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden"
    >
      {/* === ANIMATED BACKGROUND EFFECT === */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 via-transparent to-blue-500/5 blur-3xl opacity-40 -z-10" />

      {/* === IMAGE SECTION === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative group"
      >
        {/* Animated gradient ring */}
        <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full flex items-center justify-center p-[4px] bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 animate-gradient-border">
          <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center">
            <Image
              src={profilePic}
              alt="Chan"
              width={300}
              height={300}
              className="rounded-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-2xl"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* === CONTENT SECTION === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col items-center lg:items-start max-w-2xl text-center lg:text-left"
      >
        {/* Headings */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg italic">
          My Introduction
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {infoData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-white/30 dark:bg-gray-800/40 
              backdrop-blur-md rounded-2xl shadow-md p-6 hover:scale-105 hover:shadow-xl transition-transform"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-3">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-[1.05rem]"
        >
          Frontend Developer with <span className="text-pink-500 font-semibold">2.6+ years</span> of experience
          building scalable, high-performance web applications using{' '}
          <span className="text-blue-500 font-semibold">React.js</span>,{' '}
          <span className="text-indigo-500 font-semibold">Next.js</span>, and{' '}
          <span className="text-teal-500 font-semibold">Tailwind CSS</span>. I specialize in crafting reusable,
          performant UIs with animation and interactivity. Currently expanding into full-stack development using{' '}
          <span className="text-purple-500 font-semibold">Node.js</span> and{' '}
          <span className="text-green-500 font-semibold">MongoDB</span>.
        </motion.p>

        {/* Download Button */}
        <motion.a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          download
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-7 py-3 rounded-full 
          bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white font-medium shadow-md 
          hover:shadow-xl transition-all"
        >
          <HiDownload className="text-xl" />
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
}
