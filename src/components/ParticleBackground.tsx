'use client';
import { useEffect, useState, useMemo, memo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { useTheme } from '../context/ThemeContext';

const ParticleBackground = memo(function ParticleBackgroundComponent() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const particlesInit = async (main: Engine) => { await loadSlim(main); };

  const isDark = theme === 'dark';

  const particlesOptions = useMemo(() => ({
    background: {
      color: { value: isDark ? '#0f172a' : '#ffffff' },
    },
    fpsLimit: 50,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 80, duration: 0.4 },
        push: { quantity: 1 },
      },
    },
    particles: {
      color: { value: isDark ? '#a855f7' : '#667eea' },
      links: {
        enable: true,
        distance: 120,
        color: isDark ? '#8b5cf6' : '#764ba2',
        opacity: isDark ? 0.2 : 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: { default: 'bounce' },
      },
      number: {
        density: { enable: true, area: 1000 },
        value: 40,
      },
      opacity: {
        value: isDark ? 0.6 : 0.4,
        random: true,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.8, max: 2.5 },
        random: true,
        animation: {
          enable: false,
        },
      },
    },
    detectRetina: true,
  }), [isDark]);
  if (!mounted) return <div className="fixed inset-0 -z-10" suppressHydrationWarning />;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={particlesOptions}
      
    />
  );
});

export default ParticleBackground;
