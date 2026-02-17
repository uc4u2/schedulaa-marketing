'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { RefObject } from 'react';

import { MOTION_CONFIG, isReducedMotionPreferred, registerMotionPlugins } from '@/utils/motion';

type ParallaxOptions = {
  yPercent?: number;
  start?: string;
  end?: string;
};

export const useParallax = (ref: RefObject<HTMLElement | null>, options: ParallaxOptions = {}) => {
  useGSAP(
    () => {
      const target = ref.current;
      if (!target) return;

      registerMotionPlugins();

      if (isReducedMotionPreferred()) {
        gsap.set(target, { yPercent: 0, clearProps: 'all' });
        return;
      }

      gsap.to(target, {
        yPercent: options.yPercent ?? -12,
        ease: MOTION_CONFIG.parallaxEase,
        scrollTrigger: {
          trigger: target,
          start: options.start ?? 'top bottom',
          end: options.end ?? 'bottom top',
          scrub: 0.6,
        },
      });
    },
    { scope: ref },
  );
};
