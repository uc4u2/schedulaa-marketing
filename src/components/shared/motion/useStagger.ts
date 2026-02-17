'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { RefObject } from 'react';

import { MOTION_CONFIG, isReducedMotionPreferred, registerMotionPlugins } from '@/utils/motion';

type StaggerOptions = {
  childSelector?: string;
  start?: string;
  y?: number;
  duration?: number;
  stagger?: number;
};

export const useStagger = (ref: RefObject<HTMLElement | null>, options: StaggerOptions = {}) => {
  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const selector = options.childSelector ?? '[data-stagger-item]';
      const items = Array.from(root.querySelectorAll<HTMLElement>(selector));
      if (!items.length) return;

      registerMotionPlugins();

      if (isReducedMotionPreferred()) {
        gsap.set(items, { opacity: 1, y: 0, clearProps: 'all' });
        return;
      }

      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: options.y ?? MOTION_CONFIG.revealOffset,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: options.duration ?? MOTION_CONFIG.duration,
          ease: MOTION_CONFIG.ease,
          stagger: options.stagger ?? MOTION_CONFIG.stagger,
          scrollTrigger: {
            trigger: root,
            start: options.start ?? MOTION_CONFIG.revealStart,
            once: true,
          },
        },
      );
    },
    { scope: ref },
  );
};
