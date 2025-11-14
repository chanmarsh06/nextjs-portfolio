'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = memo(function ParticleBackground() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [particleCount, setParticleCount] = useState(30);

  useEffect(() => {
    setIsMounted(true);

    const updateParticleCount = () => {
      const width = window.innerWidth;
      setParticleCount(width < 640 ? 15 : width < 1024 ? 25 : 35);
    };

    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);
    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const isDark = theme === 'dark';

  const options = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    detectRetina: true,
    fullScreen: { enable: false },

    // ✅ Fix: avoid window access on server
    fpsLimit: isMounted && typeof window !== 'undefined'
      ? (window.innerWidth < 640 ? 24 : 30)
      : 30,

    particles: {
      color: {
        value: isDark ? '#a855f7' : '#6366f1',
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        outModes: { default: 'out' },
      },
      number: {
        value: particleCount,
        density: { enable: true, area: 800 },
      },
      opacity: {
        value: 0.3,
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: { type: 'circle' },
      size: {
        value: 2,
        random: {
          enable: true,
          minimumValue: 1,
        },
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.5,
          sync: false,
        },
      },
    },
  }), [isDark, particleCount, isMounted]);

  if (!isMounted) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10 pointer-events-none"
      options={options}
    />
  );
});

export default ParticleBackground;
