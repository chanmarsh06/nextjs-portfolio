'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { HiMail, HiDownload } from 'react-icons/hi';
import Link from 'next/link';
import profilePic from '@/assets/chan.png';

export default function Home() {
  const handleDownload = () => {
    // Replace with your actual CV URL or create the PDF file
    alert('CV download will be available soon!');
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden px-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-10">
        {/* === LEFT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm sm:text-base">
            Chennai, India
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
            I’m a{' '}
            <span className="text-primary">
              Full-Stack Developer | MERN, Next.js & Frontend Specialist
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
            I craft fast, scalable web solutions using the MERN stack. Focused
            on building pixel-perfect, high-performance interfaces with modern
            tech.
          </p>

          {/* Social Icons + Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
            {/* Social Icons */}
            <div className="flex gap-4 text-2xl justify-center sm:justify-start">
              <a
                href="https://github.com/"
                target="_blank"
                className="hover:text-primary transition-transform hover:-translate-y-1"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="hover:text-primary transition-transform hover:-translate-y-1"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="hover:text-primary transition-transform hover:-translate-y-1"
              >
                <AiOutlineTwitter />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="/portfolio"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary/90 hover:-translate-y-1 transition-transform duration-300"
              >
                <HiMail /> View Projects
              </Link>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary/10 hover:-translate-y-1 transition-transform duration-300"
              >
                <HiDownload /> Download CV
              </button>
            </div>
          </div>
        </motion.div>

        {/* === RIGHT CONTENT === */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 15, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary/60 via-primary/40 to-primary/20 shadow-2xl flex items-center justify-center overflow-hidden"
          >
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 text-gray-400 text-sm"
      >
        ⬇ Scroll Down
      </motion.div>
    </section>
  );
}
