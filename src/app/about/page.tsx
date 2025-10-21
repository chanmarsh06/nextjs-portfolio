'use client';
import FadeInSection from '../../components/FadeInSection';
import Image from 'next/image';
import profilePic from '@/assests/chan.png';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center max-w-[1200px] mx-auto px-4 py-20 gap-10">
      <FadeInSection>
        <Image
          src={profilePic}
          alt="About me"
          width={300}
          height={300}
          className="rounded-full border-4 border-primary"
        />
      </FadeInSection>
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I'm a Frontend Developer passionate about building performant, responsive, and animated web applications using React.js, Next.js, Tailwind CSS, and Framer Motion.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I love creating interactive, user-friendly experiences while optimizing performance and accessibility. I enjoy exploring new animation techniques and enhancing the UI/UX of modern web applications.
        </p>
      </FadeInSection>
    </div>
  );
}
