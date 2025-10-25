'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

/**
 * Animates text character by character for dramatic reveal effect
 * Perfect for headings and important text
 */
export default function RevealText({
  text,
  className = '',
  delay = 0,
  charDelay = 0.05,
}: RevealTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const characters = text.split('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: charDelay,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}