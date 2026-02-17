'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

import { registerMotionPlugins } from '@/utils/motion';

type MotionProviderProps = {
  children: ReactNode;
};

const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setPrefersReducedMotion(query.matches);
    onChange();
    query.addEventListener('change', onChange);

    return () => query.removeEventListener('change', onChange);
  }, []);

  return prefersReducedMotion;
};

const LenisSync = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();
  const previousPathnameRef = useRef<string>(pathname);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!isInitialRender.current && previousPathnameRef.current !== pathname) {
      lenis?.scrollTo(0, { immediate: true });
    }

    previousPathnameRef.current = pathname;
    isInitialRender.current = false;
  }, [pathname, searchParams, lenis]);

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (ele: Element) => {
      lenis.scrollTo(ele.getAttribute('href') ?? '', {
        offset: -100,
      });
    };

    const elements = document.querySelectorAll('.lenis-scroll-to');
    const clickHandler = (e: Event) => handleClick(e.target as Element);
    elements.forEach((ele) => ele.addEventListener('click', clickHandler));

    return () => elements.forEach((ele) => ele.removeEventListener('click', clickHandler));
  }, [lenis, pathname]);

  return <>{children}</>;
};

export default function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    registerMotionPlugins();
  }, []);

  const lenisOptions = useMemo(
    () => ({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
    }),
    [],
  );

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <LenisSync>{children}</LenisSync>
    </ReactLenis>
  );
}
