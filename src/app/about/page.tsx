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
    { icon: <HiTrophy className="text-xl sm:text-2xl lg:text-3xl text-primary-500" />, title: 'Experience', subtitle: '3+ Years' },
    { icon: <HiFolderOpen className="text-xl sm:text-2xl lg:text-3xl text-secondary-500" />, title: 'Projects', subtitle: '50+ Done' },
    { icon: <HiFaceSmile className="text-xl sm:text-2xl lg:text-3xl text-accent-500" />, title: 'Support', subtitle: '24/7 Online' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Section - Mobile First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1 lg:order-1"
          >
            <div className="relative group">
              {/* Animated gradient ring - Responsive */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center p-0.5 sm:p-1 bg-gradient-to-tr from-primary-500 via-secondary-500 to-accent-500 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center">
                  <Image
                    src={profilePic}
                    alt="Chan"
                    width={300}
                    height={300}
                    className="rounded-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-xl sm:shadow-2xl"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  />
                </div>
              </div>
              
              {/* Floating elements - Responsive */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary-400/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-secondary-400/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Content Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Headings - Responsive Typography */}
            <div className="space-y-2 sm:space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                <span className="text-gray-900 dark:text-white">About </span>
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300"
              >
                My Introduction
              </motion.p>
            </div>

            {/* Info Cards - Responsive Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
            >
              {infoData.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="flex flex-col items-center justify-center card card-hover card-glass p-3 sm:p-4 lg:p-6"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 mb-2 sm:mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 dark:text-gray-50 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center leading-tight">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Description - Mobile Optimized */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Frontend Developer with <span className="text-primary-600 font-semibold">3+ years</span> of experience
              building scalable web applications using{' '}
              <span className="text-primary-600 font-semibold">React.js</span>,{' '}
              <span className="text-secondary-600 font-semibold">Next.js</span>, and{' '}
              <span className="text-accent-600 font-semibold">Tailwind CSS</span>. 
              Passionate about creating exceptional user experiences.
            </motion.p>

            {/* Download Button - Touch Friendly */}
            <motion.a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl gradient-primary-btn text-sm sm:text-base"
            >
              <HiDownload className="text-base sm:text-xl" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}