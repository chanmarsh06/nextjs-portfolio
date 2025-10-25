'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-in' | 'zoom-in';
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  hoverScale?: boolean;
}

/**
 * Individual element animation wrapper
 * Provides various animation types for single elements
 */
export default function AnimatedElement({
  children,
  className = '',
  variant = 'fade-in',
  delay = 0,
  duration = 0.6,
  triggerOnce = true,
  hoverScale = false,
}: AnimatedElementProps) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold: 0.1,
  });

  const variantMap = {
    'fade-in': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-up': {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    'slide-down': {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 },
    },
    'scale-in': {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    'zoom-in': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selectedVariant = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={hoverScale ? { scale: 1.05 } : undefined}
    >
      {children}
    </motion.div>
  );
}