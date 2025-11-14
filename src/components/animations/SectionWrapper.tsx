'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, viewportOnce } from '@/utils/animations';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = 'py-12 sm:py-16 lg:py-20',
  id,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      {...fadeInUp(delay)}
      viewport={viewportOnce}
    >
      {children}
    </motion.section>
  );
}