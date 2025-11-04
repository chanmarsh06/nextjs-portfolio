'use client';

import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { memo } from 'react';

const ThemeToggle = memo(function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <MotionConfig reducedMotion="user">
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative p-3 rounded-xl bg-light-secondary dark:bg-dark-tertiary hover:bg-light-tertiary dark:hover:bg-dark-secondary transition-all duration-300 overflow-hidden group shadow-soft dark:shadow-medium focus-visible:focus-visible"
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        type="button"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-yellow-500"
            >
              <FiSun className="w-5 h-5" aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-primary-500"
            >
              <FiMoon className="w-5 h-5" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </MotionConfig>
  );
});

export default ThemeToggle;