'use client';

import heroShiftImg from '@public/images/marketing/shift-pre.png';
import heroEmployeeImg from '@public/images/marketing/showcase/employee-management.png';
import heroClientsImg from '@public/images/marketing/showcase/time-tracking.png';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

const slides: Array<{ src: StaticImageData; alt: string }> = [
  { src: heroEmployeeImg, alt: 'Employee management overview' },
  { src: heroShiftImg, alt: 'Shift management overview' },
  { src: heroClientsImg, alt: 'Client booking overview' },
];

const ROTATION_MS = 4500;

const HeroShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/40 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl lg:aspect-[16/9.4]">
        {slides.map((slide, index) => {
          const active = index === activeIndex;
          const activeTransform =
            index === 0 ? 'scale(1.03) rotate(0.35deg)' : 'scale(1.09) rotate(1.2deg)';
          const idleTransform = index === 0 ? 'scale(1.01) rotate(0deg)' : 'scale(1.03) rotate(-0.3deg)';
          return (
            <div
              key={slide.alt}
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? activeTransform : idleTransform,
                zIndex: active ? 2 : 1,
              }}>
              <Image
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-contain object-top"
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroShowcase;
