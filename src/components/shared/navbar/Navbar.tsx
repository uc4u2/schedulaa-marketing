'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import { AppLocale, DEFAULT_LOCALE, detectLocaleFromPath, isSupportedLocale, withLocalePath } from '@/utils/locale';
import legacyLogo from '@public/images/shared/schedulaa-logo-legacy.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

type NavItem = {
  href: string;
  labelKey: string;
};

const productLeftLinks: NavItem[] = [
  { href: '/features', labelKey: 'features' },
  { href: '/booking', labelKey: 'booking' },
  { href: '/marketing', labelKey: 'marketing' },
  { href: '/payroll', labelKey: 'payroll' },
  { href: '/website-builder', labelKey: 'websiteBuilder' },
  { href: '/demo', labelKey: 'demo' },
  { href: '/contact', labelKey: 'contact' },
];

const resourceLeftLinks: NavItem[] = [
  { href: '/blog', labelKey: 'blog' },
  { href: '/docs', labelKey: 'documentation' },
  { href: '/faq', labelKey: 'faq' },
  { href: '/client/support', labelKey: 'helpCenter' },
];

const localeOptions: Array<{ code: string; label: string; supported: boolean }> = [
  { code: 'en', label: 'EN', supported: true },
  { code: 'fa', label: 'FA', supported: true },
  { code: 'ru', label: 'RU', supported: false },
  { code: 'zh', label: 'ZH', supported: false },
];

const MenuPanel = ({
  open,
  left,
  right,
  locale,
  close,
}: {
  open: boolean;
  left: NavItem[];
  right: NavItem[];
  locale: AppLocale;
  close: () => void;
}) => {
  const t = useTranslations('navbar');

  return (
    <div
      className={cn(
        'absolute left-0 top-full w-[min(760px,92vw)] rounded-2xl border border-stroke-2 bg-white p-4 shadow-xl dark:border-stroke-7 dark:bg-background-8',
        open ? 'block' : 'hidden',
      )}
    >
      <div className={cn('grid gap-4', right.length ? 'md:grid-cols-[2fr_1fr]' : 'md:grid-cols-1')}>
        <div className="space-y-2">
          {left.map((item) => (
            <Link
              key={item.href}
              href={withLocalePath(item.href, locale)}
              onClick={close}
              className="block rounded-lg px-3 py-2 hover:bg-background-3 dark:hover:bg-background-7"
            >
              <p className="font-medium">{t(item.labelKey)}</p>
            </Link>
          ))}
        </div>
        {right.length ? (
          <div className="space-y-2 border-l border-stroke-2 pl-4 dark:border-stroke-7">
            {right.map((item) => (
              <Link
                key={item.href}
                href={withLocalePath(item.href, locale)}
                onClick={close}
                className="block rounded-lg px-3 py-2 text-sm hover:bg-background-3 dark:hover:bg-background-7"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Navbar = () => {
  const t = useTranslations('navbar');
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const locale = detectLocaleFromPath(pathname);

  const clearCloseTimer = () => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = (menu: 'product' | 'resources') => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      if (menu === 'product') setProductOpen(false);
      if (menu === 'resources') setResourcesOpen(false);
    }, 140);
  };

  const onLocaleChange = (newLocale: AppLocale) => {
    if (!isSupportedLocale(newLocale)) return;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`;
    const next = withLocalePath(pathname, newLocale);
    window.location.href = next;
  };

  const mobileLinks = [
    ...productLeftLinks,
    { href: '/pricing', labelKey: 'pricing' },
    ...resourceLeftLinks,
  ];

  const dashboardLinks = [
    { href: `${APP_ORIGIN}/employee`, label: t('employeeDashboard') },
    { href: `${APP_ORIGIN}/manager/dashboard`, label: t('managerDashboard') },
  ];

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-[95vw] -translate-x-1/2">
      <div className="rounded-full border border-stroke-2 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md dark:border-stroke-7 dark:bg-background-7/80">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-3">
          <Link href={withLocalePath('/', locale)} className="shrink-0" aria-label="Schedulaa home">
            <figure className="hidden max-w-[190px] lg:block">
              <Image src={legacyLogo} alt="Schedulaa" className="h-auto w-full" priority />
            </figure>
            <figure className="block max-w-[140px] lg:hidden">
              <Image src={legacyLogo} alt="Schedulaa" className="h-auto w-full" priority />
            </figure>
          </Link>

          <nav className="relative hidden items-center gap-4 xl:flex" aria-label="Primary">
            <div
              className="relative pb-3 -mb-3"
              onMouseEnter={() => {
                clearCloseTimer();
                setResourcesOpen(false);
                setProductOpen(true);
              }}
              onMouseLeave={() => scheduleClose('product')}
            >
              <button
                type="button"
                onMouseEnter={() => {
                  clearCloseTimer();
                  setResourcesOpen(false);
                  setProductOpen(true);
                }}
                onClick={() => {
                  setResourcesOpen(false);
                  setProductOpen((p) => !p);
                }}
                className="text-tagline-2 text-secondary/70 hover:text-primary-600 dark:text-accent/70 dark:hover:text-accent"
              >
                {t('product')}
              </button>
              <MenuPanel
                open={productOpen}
                left={productLeftLinks}
                right={[]}
                locale={locale}
                close={() => setProductOpen(false)}
              />
            </div>

            <div
              className="relative pb-3 -mb-3"
              onMouseEnter={() => {
                clearCloseTimer();
                setProductOpen(false);
                setResourcesOpen(true);
              }}
              onMouseLeave={() => scheduleClose('resources')}
            >
              <button
                type="button"
                onMouseEnter={() => {
                  clearCloseTimer();
                  setProductOpen(false);
                  setResourcesOpen(true);
                }}
                onClick={() => {
                  setProductOpen(false);
                  setResourcesOpen((p) => !p);
                }}
                className="text-tagline-2 text-secondary/70 hover:text-primary-600 dark:text-accent/70 dark:hover:text-accent"
              >
                {t('resources')}
              </button>
              <MenuPanel
                open={resourcesOpen}
                left={resourceLeftLinks}
                right={[]}
                locale={locale}
                close={() => setResourcesOpen(false)}
              />
            </div>

            <Link
              href={withLocalePath('/pricing', locale)}
              className="text-tagline-2 text-secondary/70 hover:text-primary-600 dark:text-accent/70 dark:hover:text-accent"
            >
              {t('pricing')}
            </Link>
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            {dashboardLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-stroke-2 px-4 py-2 text-sm font-medium dark:border-stroke-7"
              >
                {item.label}
              </a>
            ))}

            <label className="sr-only" htmlFor="marketing-language">
              {t('language')}
            </label>
            <select
              id="marketing-language"
              value={locale}
              onChange={(e) => onLocaleChange((e.target.value || DEFAULT_LOCALE) as AppLocale)}
              className="rounded-full border border-stroke-2 bg-transparent px-3 py-2 text-sm dark:border-stroke-7"
            >
              {localeOptions.map((option) => (
                <option key={option.code} value={option.code} disabled={!option.supported}>
                  {option.label}
                </option>
              ))}
            </select>

            <a
              href={`${APP_ORIGIN}/login`}
              className="rounded-full border border-stroke-2 px-4 py-2 text-sm font-medium dark:border-stroke-7"
            >
              {t('login')}
            </a>
            <a
              href={`${APP_ORIGIN}/register`}
              className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-600"
            >
              {t('startFree')}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-stroke-2 p-2 xl:hidden dark:border-stroke-7"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle mobile menu"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        <div className={cn('overflow-hidden transition-all xl:hidden', open ? 'mt-3 max-h-[900px] pt-2' : 'max-h-0')}>
          <nav className="grid gap-2" aria-label="Mobile primary">
            {mobileLinks.map((item) => (
              <Link
                key={item.href}
                href={withLocalePath(item.href, locale)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-secondary/80 hover:bg-background-3 dark:text-accent/80 dark:hover:bg-background-8"
              >
                {t(item.labelKey)}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`${APP_ORIGIN}/employee`}
                className="rounded-lg border border-stroke-2 px-3 py-2 text-center text-sm dark:border-stroke-7"
              >
                {t('employeeDashboard')}
              </a>
              <a
                href={`${APP_ORIGIN}/manager/dashboard`}
                className="rounded-lg border border-stroke-2 px-3 py-2 text-center text-sm dark:border-stroke-7"
              >
                {t('managerDashboard')}
              </a>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {localeOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  disabled={!option.supported}
                  onClick={() => onLocaleChange(option.code as AppLocale)}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-center text-sm',
                    locale === option.code ? 'border-primary-500 text-primary-500' : 'border-stroke-2 dark:border-stroke-7',
                    !option.supported && 'cursor-not-allowed opacity-50',
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`${APP_ORIGIN}/login`}
                className="rounded-lg border border-stroke-2 px-3 py-2 text-center text-sm dark:border-stroke-7"
              >
                {t('login')}
              </a>
              <a
                href={`${APP_ORIGIN}/register`}
                className="rounded-lg bg-primary-500 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                {t('startFree')}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
