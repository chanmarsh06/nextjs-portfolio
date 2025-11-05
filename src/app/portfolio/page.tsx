'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import Container from '@/components/Container';
import { FashionStore,FoodWebsite,Portfolios } from '@/assets';

const projects = [
  {
    title: "Homemade Food Delivery Platform",
    image: FoodWebsite,// Replace with your actual image
    description:
      "A platform that connects local home chefs with customers. Includes order tracking, category filters, and dynamic product management.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
    github: "#",
    live: "https://tasteof-home.netlify.app/", // replace URL
  },
  {
    title: "Saree / Fashion Store Website",
    image: FashionStore, // Replace with your actual image
    description:
      "Modern e-Commerce storefront with responsive product listing, variant selection, and smooth animations for premium shopping experience.",
    tech: ["Next.js", "Stripe", "Cloudinary", "Shadcn UI"],
    github: "#",
    live: "https://brindhacouture.netlify.app/", // replace URL
  },
  {
    title: "Personal Portfolio Website",
    image:Portfolios, // Replace with your actual image
    description:
      "My portfolio showcasing projects, skills, and achievements with rich animations and optimized performance.",
    tech: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/your-portfolio-repo",
    live: "https://chan-portfolio-06.netlify.app/",
  },
];


export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            Recent projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative card card-glass card-hover rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-primary-600 hover:text-white transition-colors duration-300"
                  >
                    <HiExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-primary-600 hover:text-white transition-colors duration-300"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}