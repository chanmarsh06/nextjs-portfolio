'use client';
import AnimatedText from '../../components/AnimatedText';
import ParticleBackground from '../../components/ParticleBackground';
import FadeInSection from '../../components/FadeInSection';
import Image from 'next/image';
import profilePic from '../../public/assets/profile.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <ParticleBackground />
      <FadeInSection>
        <Image
          src={profilePic}
          alt="Profile"
          width={180}
          height={180}
          className="rounded-full border-4 border-primary mb-6"
        />
        <AnimatedText text="Hi, I'm Chan" />
        <p className="mt-4 text-center max-w-md text-gray-700 dark:text-gray-300">
          Frontend Developer | React.js | Next.js | Animations | Tailwind CSS
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/portfolio" className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
            My Work
          </Link>
          <Link href="/contact" className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
            Contact Me
          </Link>
        </div>
      </FadeInSection>
    </div>
  );
}
