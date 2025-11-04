'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { HiDownload, HiCode, HiLightningBolt } from 'react-icons/hi';
import { FiArrowDown } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import Container from '@/components/Container';
import profilePic from '@/assets/chan.png';

export default function Home() {
  const handleDownload = () => {
    alert('CV download will be available soon!');
  };

  // Animation presets
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  });

  const stagger = {
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 relative overflow-hidden">
      {/* Soft background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ---------- LEFT: CONTENT ---------- */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="order-2 lg:order-1 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Availability badge */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-500/15 dark:bg-primary-500/20 rounded-full text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium backdrop-blur-sm border border-primary-500/30"
            >
              <HiLightningBolt className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Available for work
            </motion.div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                {...fadeUp(0.05)}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="text-light-text dark:text-dark-text">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Chan
                </span>
              </motion.h1>

              {/* Type Animation: roles */}
              <motion.div {...fadeUp(0.1)}>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-light-text-secondary dark:text-dark-text-secondary font-medium">
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer', 1600,
                      'React / Next.js Specialist', 1600,
                      'UI/UX Enthusiast', 1600,
                      'Performance-first Engineer', 1600,
                    ]}
                    wrapper="span"
                    speed={38}
                    repeat={Infinity}
                    deletionSpeed={60}
                    cursor={true}
                    className="inline-block"
                  />
                  <span className="sr-only">— rotating roles</span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              {...fadeUp(0.15)}
              className="text-sm sm:text-base lg:text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft exceptional digital experiences using modern technologies.
              Specializing in <span className="font-semibold text-primary-600 dark:text-primary-400">React</span>,{' '}
              <span className="font-semibold text-secondary-600 dark:text-secondary-400">Next.js</span>, and the MERN stack.
            </motion.p>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.2)}
              className="grid grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6 max-w-sm mx-auto lg:mx-0"
            >
              {[
                { value: '3+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '100%', label: 'Quality' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="text-center"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-500 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.25)}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl sm:rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                aria-label="View Projects"
              >
                <HiCode className="w-4 h-4 sm:w-5 sm:h-5" />
                View Projects
              </motion.a>

              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-xl sm:rounded-2xl font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 text-sm sm:text-base"
                aria-label="Download CV"
              >
                <HiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4"
            >
              {[
                { icon: AiFillGithub, href: 'https://github.com/', label: 'GitHub' },
                { icon: AiFillLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
                { icon: AiOutlineTwitter, href: 'https://twitter.com/', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  className="p-2.5 sm:p-3 bg-light-secondary dark:bg-dark-secondary rounded-lg sm:rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------- RIGHT: PROFILE IMAGE ---------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative">
              {/* Ambient blobs */}
              <div aria-hidden className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-primary-500/25 blur-2xl" />
              <div aria-hidden className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-secondary-500/25 blur-2xl" />

              {/* Photo card (premium) */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Soft glow ring */}
                <div className="absolute inset-0 rounded-[28px] blur-xl bg-gradient-to-r from-primary-500/25 to-secondary-500/25" />

                {/* Image frame */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 12 }}
                  className="relative w-full h-full rounded-[28px] overflow-hidden border border-light-border/70 dark:border-dark-border/60 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src={profilePic}
                    alt="Chan - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />

                  {/* Subtle shine on hover */}
                  <motion.span
                    aria-hidden
                    initial={{ x: '-120%', opacity: 0 }}
                    whileHover={{ x: '120%', opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/10 backdrop-blur-md rotate-12"
                  />
                </motion.div>

                {/* Dashed decorative ring */}
                <motion.div
                  aria-hidden
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                  className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-[36px] border border-dashed sm:border-2 border-primary-500/40 dark:border-primary-400/40"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-light-text-tertiary dark:text-dark-text-tertiary"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <FiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
