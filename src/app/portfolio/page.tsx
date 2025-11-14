'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import Container from '@/components/Container';
import { fadeInUp, staggerContainer, staggerItem, hoverLift } from '@/utils/animations';
import { FashionStore, FoodWebsite, Portfolios } from '@/assets';

const projects = [
  {
    title: "Homemade Food Delivery Platform",
    image: FoodWebsite,
    description: "A platform connecting local home chefs with customers. Features order tracking, category filters, and dynamic product management.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
    github: "#",
    live: "https://tasteof-home.netlify.app/",
  },
  {
    title: "Fashion Store Website",
    image: FashionStore,
    description: "Modern e-commerce storefront with responsive design, product variants, and smooth animations for premium shopping experience.",
    tech: ["Next.js", "Stripe", "Cloudinary", "Shadcn UI"],
    github: "#",
    live: "https://brindhacouture.netlify.app/",
  },
  {
    title: "Personal Portfolio Website",
    image: Portfolios,
    description: "My portfolio showcasing projects, skills, and achievements with rich animations and optimized performance.",
    tech: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/your-portfolio-repo",
    live: "https://chan-portfolio-06.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <motion.div
          {...fadeInUp(0)}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Recent projects I&apos;ve worked on
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              {...hoverLift}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    aria-label="View live demo"
                  >
                    <HiExternalLink className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <FiGithub className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
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
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}