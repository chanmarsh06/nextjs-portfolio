'use client';

import { motion, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface StaggerContainerProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  triggerOnce?: boolean;
}

/**
 * Creates staggered animations for child elements
 * Useful for lists, grids, and multiple items appearing sequentially
 */
export default function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
  triggerOnce = true,
  ...motionProps
}: StaggerContainerProps) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      {...motionProps}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}