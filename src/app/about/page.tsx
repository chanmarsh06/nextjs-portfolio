'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiTrophy, HiFolderOpen, HiFaceSmile } from 'react-icons/hi2';
import { HiDownload } from 'react-icons/hi';
import Container from '@/components/Container';
import { fadeInUp, hoverScale, hoverLift } from '@/utils/animations';
import profilePic from '@/assets/chan.png';
import CV from '@/assets/Chandrasekaran_React_Resume.pdf';

export default function About() {
  const infoData = [
    { icon: <HiTrophy className="text-2xl text-primary-500" />, title: 'Experience', subtitle: '3+ Years' },
    { icon: <HiFolderOpen className="text-2xl text-secondary-500" />, title: 'Projects', subtitle: '50+ Done' },
    { icon: <HiFaceSmile className="text-2xl text-accent-500" />, title: 'Support', subtitle: '24/7 Online' },
  ];

  return (
    <section className="py-16 lg:py-20 relative">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            {...fadeInUp(0)}
            className="relative flex justify-center"
          >
            <motion.div
              {...hoverScale}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={profilePic}
                alt="Chan - About"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Background effects */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-500/20 blur-2xl rounded-full" />
          </motion.div>


          {/* Content */}
          <motion.div
            {...fadeInUp(0.2)}
            className="space-y-8"
          >
            {/* Header */}
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
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {infoData.map((item, i) => (
                <motion.div
                  key={i}
                  {...hoverLift}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                  </div>
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
              user-centric experiences with attention to performance and accessibility.
            </p>

            {/* CTA Button */}
            <motion.a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              download
              {...hoverScale}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <HiDownload className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
