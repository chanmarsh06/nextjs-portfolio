'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  staggerChildren?: boolean;
}

/**
 * Wraps sections with scroll-triggered fade and slide animations
 * Provides consistent entry animations across all sections
 */
export default function SectionWrapper({
  children,
  className = '',
  id,
  delay = 0,
  staggerChildren = false,
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay,
        ...(staggerChildren && {
          staggerChildren: 0.1,
          delayChildren: delay,
        }),
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}