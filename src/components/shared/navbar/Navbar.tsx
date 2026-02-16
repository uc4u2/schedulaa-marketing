'use client';

import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import logo from '@public/images/shared/logo.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/payroll', label: 'Payroll' },
  { href: '/docs', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-[95vw] -translate-x-1/2">
      <div className="rounded-full border border-stroke-2 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md dark:border-stroke-7 dark:bg-background-7/80">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-3">
          <Link href="/" className="shrink-0" aria-label="Schedulaa home">
            <figure className="hidden max-w-[190px] lg:block">
              <Image src={mainLogo} alt="Schedulaa" className="dark:invert" />
            </figure>
            <figure className="block max-w-[44px] lg:hidden">
              <Image src={logo} alt="Schedulaa" className="block w-full dark:hidden" />
              <Image src={logoDark} alt="Schedulaa" className="hidden w-full dark:block" />
            </figure>
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-tagline-1 text-secondary/70 hover:text-primary-600 dark:text-accent/70 dark:hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <Link href="/login" className="rounded-full border border-stroke-2 px-4 py-2 text-sm font-medium dark:border-stroke-7">
              Log in
            </Link>
            <Link href="/signup" className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600">
              Get started
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-stroke-2 p-2 xl:hidden dark:border-stroke-7"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle mobile menu">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        <div className={cn('overflow-hidden transition-all xl:hidden', open ? 'mt-3 max-h-[420px] pt-2' : 'max-h-0')}>
          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-secondary/80 hover:bg-background-3 dark:text-accent/80 dark:hover:bg-background-8">
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/login" onClick={() => setOpen(false)} className="rounded-lg border border-stroke-2 px-3 py-2 text-center text-sm dark:border-stroke-7">
                Log in
              </Link>
              <Link href="/signup" onClick={() => setOpen(false)} className="rounded-lg bg-primary-500 px-3 py-2 text-center text-sm font-semibold text-white">
                Get started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
