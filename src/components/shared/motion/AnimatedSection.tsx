'use client';

import { ReactNode, useRef } from 'react';

import { cn } from '@/utils/cn';

import { useReveal } from './useReveal';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  start?: string;
  x?: number;
  y?: number;
  delay?: number;
  duration?: number;
};

export default function AnimatedSection({ children, className, start, x, y, delay, duration }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref, { start, x, y, delay, duration });

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}
