'use client';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticleBackground() {
  const particlesInit = async (main: any) => { await loadSlim(main); };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
        particles: {
          color: { value: '#6366f1' },
          links: { enable: true, distance: 150, color: '#6366f1', opacity: 0.3 },
          move: { enable: true, speed: 2 },
          number: { value: 50 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
