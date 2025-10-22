'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  { title: 'Project One', image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Project+1' },
  { title: 'Project Two', image: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Project+2' },
  { title: 'Project Three', image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Project+3' },
  { title: 'Project Four', image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Project+4' },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
        My Portfolio
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-2xl overflow-hidden shadow-lg dark:shadow-black/30 cursor-pointer group"
          >
            <div className="relative w-full h-48 md:h-52 lg:h-60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center px-4 rounded-2xl"
            >
              <p className="text-lg font-semibold">{project.title}</p>
            </motion.div>

            <motion.div
              className="p-4 bg-white dark:bg-gray-800"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                This is a sample description of the project. You can customize it with real content.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
