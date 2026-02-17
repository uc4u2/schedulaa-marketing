'use client';

import { ReactNode, useRef } from 'react';

import { cn } from '@/utils/cn';

import { useStagger } from './useStagger';

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
  childSelector?: string;
  start?: string;
};

export default function StaggerGrid({ children, className, childSelector, start }: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, { childSelector, start });

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
