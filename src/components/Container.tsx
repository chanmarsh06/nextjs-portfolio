'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'tight' | 'normal' | 'loose';
  variant?: 'default' | 'section' | 'compact';
}

/**
 * Global responsive container component
 * Maintains consistent max-width and padding across all pages
 * Ensures professional layout and spacing
 */
export default function Container({ 
  children, 
  className = '', 
  size = 'xl',
  padding = 'normal',
  variant = 'default',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl', 
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
  } as const;

  const paddingClasses = {
    none: 'px-0',
    tight: 'px-3 sm:px-4 md:px-6',
    normal: 'px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12',
    loose: 'px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20',
  } as const;

  const variantClasses = {
    default: '',
    section: 'py-8 md:py-12 lg:py-16',
    compact: 'py-4 md:py-6 lg:py-8',
  } as const;

  return (
    <div 
      className={clsx(
        sizeClasses[size],
        'mx-auto',
        paddingClasses[padding],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}