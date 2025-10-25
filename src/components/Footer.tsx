'use client';

import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { HiMail, HiHeart } from 'react-icons/hi';
import Container from './Container';

export default function Footer() {
  const socialLinks = [
    { icon: AiFillGithub, href: 'https://github.com/', label: 'GitHub' },
    { icon: AiFillLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: AiOutlineTwitter, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: HiMail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-8 sm:py-12 mt-12 sm:mt-16 lg:mt-20 border-t border-gray-200/30 dark:border-slate-700/30 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-colors duration-300">
      <Container>
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Logo - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              Chan.dev
            </h3>
          </motion.div>

          {/* Social Links - Touch Friendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-3 sm:gap-4 lg:gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.88 }}
                className="p-2.5 sm:p-3 bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:shadow-glow-primary transition-all duration-300 border border-gray-200/40 dark:border-slate-700/40"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright - Responsive Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-6 sm:pt-8 border-t border-gray-200/30 dark:border-slate-700/30 space-y-2"
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2 transition-colors duration-300">
              Made with <HiHeart className="text-red-500 animate-pulse w-4 h-4" /> by Chan
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}