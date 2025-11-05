/**
 * Animation Presets for Framer Motion
 * Provides consistent animation configurations across the portfolio
 */

export const easeConfig = {
  
  smooth: [0.25, 0.46, 0.45, 0.94],
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
};

export const transitionConfig = {
  fast: { duration: 0.3, ease: easeConfig.smooth },
  normal: { duration: 0.5, ease: easeConfig.smooth },
  slow: { duration: 0.8, ease: easeConfig.smooth },
  verySlow: { duration: 1.2, ease: easeConfig.smooth },
};

export const variantPresets = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.95 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

export const containerPresets = {
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  staggerSlow: {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  },
  staggerFast: {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },
};

export const hoverPresets = {
  lift: { y: -4 },
  scale: { scale: 1.05 },
  bright: { opacity: 1.1 },
  shadow: {
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
};

/**
 * Get transition config by name
 */
export function getTransition(name: keyof typeof transitionConfig) {
  return transitionConfig[name];
}

/**
 * Get variant preset by name
 */
export function getVariant(name: keyof typeof variantPresets) {
  return variantPresets[name];
}

/**
 * Get easing function by name
 */
export function getEase(name: keyof typeof easeConfig) {
  return easeConfig[name];
}

/**
 * Combine multiple variants for complex animations
 */
export function combineVariants(
  variant1: Record<string, Record<string, string | number | boolean>>,
  variant2: Record<string, Record<string, string | number | boolean>>
) {
  return {
    hidden: { ...variant1.hidden, ...variant2.hidden },
    visible: { ...variant1.visible, ...variant2.visible },
  };
}