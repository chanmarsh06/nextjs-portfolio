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
    <footer className="relative py-8 sm:py-12 mt-12 sm:mt-16 lg:mt-20">
      <Container>
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Logo - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20"
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
            className="pt-6 sm:pt-8 border-t border-gray-200/20 dark:border-gray-700/20 space-y-2"
          >
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <HiHeart className="text-red-500 animate-pulse w-4 h-4" /> by Chan
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}