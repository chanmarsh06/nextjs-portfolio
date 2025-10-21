'use client';
import { motion } from 'framer-motion';

export default function AnimatedText({ text }: { text: string }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-wrap text-center text-2xl md:text-4xl font-bold text-primary">
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>{letter}</motion.span>
      ))}
    </motion.div>
  );
}
