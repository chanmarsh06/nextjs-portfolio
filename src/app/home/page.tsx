'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { HiDownload, HiCode, HiLightningBolt } from 'react-icons/hi';
import { FiArrowDown } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import Container from '@/components/Container';
import { fadeInUp, staggerContainer, hoverScale, hoverLift } from '@/utils/animations';
import profilePic from '@/assets/chan.png';

export default function Home() {
  const handleDownload = () => {
    alert('CV download will be available soon!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-8 relative overflow-hidden">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary-500/8 blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="order-2 lg:order-1 text-center lg:text-left space-y-4 sm:space-y-6"
          >
            {/* Availability badge */}
            <motion.div
              {...fadeInUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 dark:bg-primary-500/15 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium backdrop-blur-sm border border-primary-500/20"
            >
              <HiLightningBolt className="w-4 h-4" />
              Available for work
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              <motion.h1
                {...fadeInUp(0.1)}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Chan
                </span>
              </motion.h1>

              {/* Type Animation */}
              <motion.div {...fadeInUp(0.2)}>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer', 2000,
                      'React / Next.js Specialist', 2000,
                      'UI/UX Enthusiast', 2000,
                      'Performance Engineer', 2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    deletionSpeed={70}
                    cursor={true}
                  />
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              {...fadeInUp(0.3)}
              className="text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I craft exceptional digital experiences using modern technologies.
              Specializing in <span className="font-semibold text-primary-600 dark:text-primary-400">React</span>,{' '}
              <span className="font-semibold text-secondary-600 dark:text-secondary-400">Next.js</span>, and the MERN stack.
            </motion.p>

            {/* Stats */}
            <motion.div
              {...fadeInUp(0.4)}
              className="grid grid-cols-3 gap-6 py-6 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '3+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '100%', label: 'Quality' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  {...hoverLift}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary-500 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeInUp(0.5)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#portfolio"
                {...hoverScale}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <HiCode className="w-5 h-5" />
                View Projects
              </motion.a>

              <motion.button
                onClick={handleDownload}
                {...hoverScale}
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-xl font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
              >
                <HiDownload className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div
              {...fadeInUp(0.6)}
              className="flex gap-4 justify-center lg:justify-start pt-4"
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
                  {...hoverLift}
                  className="p-3 bg-white dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 shadow-sm"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            {...fadeInUp(0.2)}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative">
              {/* Ambient effects */}
              <div aria-hidden className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary-500/20 blur-2xl" />
              <div aria-hidden className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-secondary-500/20 blur-2xl" />

              {/* Photo container */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl blur-xl bg-gradient-to-r from-primary-500/20 to-secondary-500/20" />

                {/* Image frame */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 shadow-2xl"
                >
                  <Image
                    src={profilePic}
                    alt="Chan - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </motion.div>

                {/* Rotating ring */}
                <motion.div
                  aria-hidden
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-primary-500/30 dark:border-primary-400/30"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeInUp(1)}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <FiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
