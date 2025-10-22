'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Qualification', href: '#qualification' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="text-2xl font-bold text-primary">Chan</Link>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-secondary transition-colors">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 flex flex-col gap-4 p-4 transition-all duration-300">
          {links.map(link => (
            <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-secondary transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
