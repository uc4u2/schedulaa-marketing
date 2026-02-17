'use client';

import { useRef } from 'react';

import { cn } from '@/utils/cn';

import { useParallax } from './useParallax';

type ParallaxAccentProps = {
  className?: string;
};

export default function ParallaxAccent({ className }: ParallaxAccentProps) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, { yPercent: -10 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.34)_0%,rgba(249,115,22,0)_70%)] blur-3xl',
        className,
      )}
    />
  );
}
