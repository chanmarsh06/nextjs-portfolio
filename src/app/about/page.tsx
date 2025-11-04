'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiTrophy, HiFolderOpen, HiFaceSmile } from 'react-icons/hi2';
import { HiDownload } from 'react-icons/hi';
import Container from '@/components/Container';
import profilePic from '@/assets/chan.png';
import CV from '@/assets/Chandrasekaran_React_Resume.pdf';

export default function About() {
  const infoData = [
    { icon: <HiTrophy className="text-3xl text-primary-500" />, title: 'Experience', subtitle: '3+ Years' },
    { icon: <HiFolderOpen className="text-3xl text-secondary-500" />, title: 'Projects', subtitle: '50+ Done' },
    { icon: <HiFaceSmile className="text-3xl text-accent-500" />, title: 'Support', subtitle: '24/7 Online' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ---------- LEFT IMAGE (DOMINANT) ---------- */}
         {/* ---------- LEFT IMAGE (PREMIUM PARALLAX IMAGE) ---------- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative flex justify-center"
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1200px",
    }}
    whileTap={{ scale: 0.97 }}
  >
    {/* Image */}
    <motion.div
      whileHover={{
        rotateY: 6,
        rotateX: 4,
      }}
      transition={{ duration: 0.4 }}
      className="w-full h-full rounded-[32px] overflow-hidden"
    >
      <Image
        src={profilePic}
        alt="Chan"
        width={450}
        height={450}
        priority
        className="object-cover w-full h-full rounded-[32px]"
      />
    </motion.div>

    {/* Gradient Border */}
    <div className="absolute inset-0 rounded-[32px] p-[3px] pointer-events-none bg-gradient-to-tr from-primary-500 via-secondary-500 to-accent-500 opacity-60" />

    {/* Glass Shine Effect */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, x: "120%" }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-[-100%] w-full h-full bg-white/10 backdrop-blur-md rotate-12"
    />
  </motion.div>

  {/* Floating Colored Glow (NO MOTION THIS TIME) */}
  <div className="absolute -top-6 -right-4 w-24 h-24 bg-primary-500/30 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 -left-6 w-28 h-28 bg-secondary-500/30 blur-3xl rounded-full"></div>
</motion.div>


          {/* ---------- RIGHT CONTENT ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Text */}
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">About </span>
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                My Introduction
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-5 sm:gap-6">
              {infoData.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -6 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/70 dark:bg-gray-800/60 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Frontend Developer with <span className="text-primary-600 font-semibold">3+ years</span> of experience
              building scalable applications using{' '}
              <span className="text-primary-600 font-semibold">React.js</span>,{' '}
              <span className="text-secondary-600 font-semibold">Next.js</span>, and{' '}
              <span className="text-accent-600 font-semibold">Tailwind CSS</span>. I focus on building smooth,
              user-centric experiences.
            </p>

            {/* Button */}
            <motion.a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-primary-btn text-base sm:text-lg shadow-lg hover:shadow-xl"
            >
              <HiDownload className="text-xl" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
