'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { RefObject } from 'react';

import { MOTION_CONFIG, isReducedMotionPreferred, registerMotionPlugins } from '@/utils/motion';

type RevealOptions = {
  start?: string;
  y?: number;
  duration?: number;
  delay?: number;
};

export const useReveal = (ref: RefObject<HTMLElement | null>, options: RevealOptions = {}) => {
  useGSAP(
    () => {
      const target = ref.current;
      if (!target) return;

      registerMotionPlugins();

      if (isReducedMotionPreferred()) {
        gsap.set(target, { opacity: 1, y: 0, clearProps: 'all' });
        return;
      }

      gsap.fromTo(
        target,
        {
          autoAlpha: 0,
          y: options.y ?? MOTION_CONFIG.revealOffset,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: options.duration ?? MOTION_CONFIG.duration,
          ease: MOTION_CONFIG.ease,
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: target,
            start: options.start ?? MOTION_CONFIG.revealStart,
            once: true,
          },
        },
      );
    },
    { scope: ref },
  );
};
