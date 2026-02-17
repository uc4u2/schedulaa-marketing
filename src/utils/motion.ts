import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const MOTION_CONFIG = {
  ease: 'power3.out',
  duration: 0.72,
  stagger: 0.12,
  revealOffset: 28,
  revealStart: 'top 84%',
  parallaxEase: 'none',
} as const;

let pluginsRegistered = false;

export const registerMotionPlugins = () => {
  if (pluginsRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
};

export const isReducedMotionPreferred = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
