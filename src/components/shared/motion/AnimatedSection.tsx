'use client';

import { ReactNode, useRef } from 'react';

import { cn } from '@/utils/cn';

import { useReveal } from './useReveal';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  start?: string;
};

export default function AnimatedSection({ children, className, start }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { start });

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}
