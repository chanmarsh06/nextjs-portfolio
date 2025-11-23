'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  animate?: boolean;
}

export default function ResponsiveImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  fill = false,
  width,
  height,
  animate = true,
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const imageProps = {
    src,
    alt,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    priority,
    onLoad: () => setIsLoaded(true),
    ...(fill ? { fill: true, sizes } : { width, height }),
  };

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3}}
        className="relative"
      >
        <Image {...imageProps} />
      </motion.div>
    );
  }

  return <Image {...imageProps} />;
}