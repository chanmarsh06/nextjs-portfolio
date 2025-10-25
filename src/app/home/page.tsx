'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { HiDownload, HiCode, HiLightningBolt } from 'react-icons/hi';
import { FiArrowDown } from 'react-icons/fi';
import Container from '@/components/Container';
import profilePic from '@/assets/chan.png';

export default function Home() {
  const handleDownload = () => {
    alert('CV download will be available soon!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100/80 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium backdrop-blur-sm"
            >
              <HiLightningBolt className="w-3 h-3 sm:w-4 sm:h-4" />
              Available for work
            </motion.div>

            {/* Main Heading - Responsive Typography */}
            <div className="space-y-2 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Chan
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                Full-Stack Developer
                <span className="text-primary-600 dark:text-primary-400">
                  {' '}& UI/UX Enthusiast
                </span>
              </motion.div>
            </div>

            {/* Description - Mobile Optimized */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft exceptional digital experiences using modern technologies. 
              Specializing in React, Next.js, and the MERN stack.
            </motion.p>

            {/* Stats - Responsive Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6 max-w-sm mx-auto lg:mx-0"
            >
              {[
                { value: '3+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '100%', label: 'Quality' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl sm:rounded-2xl font-medium shadow-lg hover:shadow-primary-500/25 transition-all duration-300 text-sm sm:text-base"
              >
                <HiCode className="w-4 h-4 sm:w-5 sm:h-5" />
                View Projects
              </motion.button>

              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-xl sm:rounded-2xl font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 text-sm sm:text-base"
              >
                <HiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links - Touch Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-4"
            >
              {[
                { icon: AiFillGithub, href: "https://github.com/", label: "GitHub" },
                { icon: AiFillLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
                { icon: AiOutlineTwitter, href: "https://twitter.com/", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-lg sm:rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative">
              {/* Floating Elements - Responsive */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-20 blur-xl"
              />

              {/* Main Profile Container - Responsive Sizing */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-full blur-xl sm:blur-2xl animate-pulse-slow" />

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-xl sm:shadow-2xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50">
                  <Image
                    src={profilePic}
                    alt="Chan - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>

                {/* Decorative Ring - Responsive */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 sm:-inset-4 border border-dashed sm:border-2 border-primary-300 dark:border-primary-700 rounded-full opacity-30"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <FiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}