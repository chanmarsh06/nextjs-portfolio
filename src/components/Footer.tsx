'use client';
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-10 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-gray-700 dark:text-gray-300">© {new Date().getFullYear()} Chan. All rights reserved.</p>
        <div className="flex gap-4 text-xl text-gray-700 dark:text-gray-300">
          <a href="#" target="_blank" className="hover:text-primary transition-colors"><FaGithub /></a>
          <a href="#" target="_blank" className="hover:text-primary transition-colors"><FaLinkedin /></a>
          <a href="#" target="_blank" className="hover:text-primary transition-colors"><FaInstagram /></a>
          <a href="#" target="_blank" className="hover:text-primary transition-colors"><FaDribbble /></a>
        </div>
      </div>
    </footer>
  );
}
