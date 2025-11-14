'use client';

import { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'tight' | 'normal' | 'loose';
}

export default function Container({ 
  children, 
  className = '', 
  size = 'xl',
  padding = 'normal',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
  } as const;

  const paddingClasses = {
    none: 'px-0',
    tight: 'px-4 sm:px-6',
    normal: 'px-4 sm:px-6 lg:px-8',
    loose: 'px-6 sm:px-8 lg:px-12',
  } as const;

  return (
    <div 
      className={clsx(
        sizeClasses[size],
        'mx-auto w-full',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}