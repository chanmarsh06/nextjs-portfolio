'use client';

import { useInView } from 'react-intersection-observer';
import { useMotionValue, useTransform } from 'framer-motion';

/**
 * Hook for scroll-triggered animations
 * Provides common animation patterns
 */
export function useScrollAnimation(triggerOnce = true, threshold = 0.1) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
    rootMargin: '0px 0px -100px 0px',
  });

  return { ref, inView };
}

/**
 * Hook for parallax effects on scroll
 */
export function useParallax(_offset = 50) {
  const y = useMotionValue(0);

  // This is a simplified version - full parallax would require scroll listener
  return { y };
}

/**
 * Hook for staggered children animation
 */
export function useStaggerAnimation(
  itemCount: number,
  staggerDelay = 0.1,
  triggerOnce = true
) {
  const { ref, inView } = useScrollAnimation(triggerOnce);

  return {
    ref,
    inView,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.2,
        },
      },
    },
    itemVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    },
  };
}

/**
 * Hook for counter animations (numbers counting up)
 */
export function useCounterAnimation(
  from: number = 0,
  _to: number = 100,
  _duration: number = 2,
  shouldAnimate: boolean = true
) {
  const count = useMotionValue(from);
  const roundedCount = useTransform(count, latest => Math.round(latest));

  return {
    count: roundedCount,
    shouldAnimate,
  };
}