'use client';
import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { useTheme } from '../context/ThemeContext';

export default function ParticleBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const particlesInit = async (main: Engine) => { await loadSlim(main); };

  const isDark = theme === 'dark';

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: isDark ? '#0f172a' : '#f8fafc',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        particles: {
          color: { value: isDark ? '#6366f1' : '#4f46e5' },
          links: {
            enable: true,
            distance: 150,
            color: isDark ? '#6366f1' : '#4f46e5',
            opacity: isDark ? 0.4 : 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            outModes: { default: 'bounce' },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: {
            value: isDark ? 0.8 : 0.6,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
