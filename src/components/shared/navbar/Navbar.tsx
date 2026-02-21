'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import { AppLocale, DEFAULT_LOCALE, detectLocaleFromPath, isSupportedLocale, withLocalePath } from '@/utils/locale';
import {
  AUTH_LINKS,
  DASHBOARD_LINKS,
  LOCALE_OPTIONS,
  MOBILE_NAV_LINKS,
  PRIMARY_NAV_LINKS,
  PRODUCT_MENU_LINKS,
  RESOURCES_MENU_LINKS,
  type NavbarLinkItem,
} from '@/data/navbar-data';
import navbarLogo from '@public/images/shared/schedulaa-logo-navbar.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';

type MenuPanelProps = {
  open: boolean;
  links: NavbarLinkItem[];
  locale: AppLocale;
  close: () => void;
};

function MenuPanel({ open, links, locale, close }: MenuPanelProps) {
  const t = useTranslations('navbar');

  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-30 mt-3 w-[min(680px,92vw)] -translate-x-1/2 rounded-[20px] border border-stroke-2 bg-white/98 p-5 shadow-2 backdrop-blur-xl dark:border-stroke-7 dark:bg-background-8/96',
        open ? 'block' : 'hidden',
      )}
    >
      <div className="grid gap-2 md:grid-cols-2">
        {links.map((item) => (
          <Link
            key={item.href}
            href={withLocalePath(item.href, locale)}
            onClick={close}
            className="rounded-xl px-3 py-2 text-tagline-1 font-medium text-secondary/80 transition hover:bg-background-3 hover:text-secondary dark:text-accent/80 dark:hover:bg-background-7 dark:hover:text-accent"
          >
            {t(item.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}

const Navbar = () => {
  const t = useTranslations('navbar');
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const localizedPrefix = `/${locale}`;
  const returnPath = pathname === localizedPrefix ? '/' : pathname.startsWith(`${localizedPrefix}/`) ? pathname.slice(localizedPrefix.length) || '/' : pathname;
  const returnTo = marketingReturnTo(locale, returnPath || '/');

  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

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

  return (
    <header className="fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 px-2 transition-all duration-500 ease-in-out max-[400px]:max-w-[350px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1240px]">
      <div className="dark:bg-background-7 flex items-center justify-between rounded-full bg-white/70 px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
        <Link href={withLocalePath('/', locale)} aria-label="Schedulaa home" className="shrink-0">
          <figure className="hidden lg:block lg:max-w-[198px]">
            <Image src={navbarLogo} alt="Schedulaa" className="h-auto w-full" priority />
          </figure>
          <figure className="block max-w-[138px] lg:hidden">
            <Image src={navbarLogo} alt="Schedulaa" className="h-auto w-full" priority />
          </figure>
        </Link>

        <nav className="relative hidden items-center xl:flex" aria-label="Primary">
          <ul className="flex items-center">
            <li
              className="relative cursor-pointer py-2.5"
              onMouseEnter={() => {
                clearCloseTimer();
                setResourcesOpen(false);
                setProductOpen(true);
              }}
              onMouseLeave={() => scheduleClose('product')}
            >
              <button
                type="button"
                className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/65 hover:text-secondary dark:text-accent/65 dark:hover:text-accent group flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                onClick={() => {
                  setResourcesOpen(false);
                  setProductOpen((p) => !p);
                }}
              >
                <span>{t('product')}</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-300 group-hover:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              <MenuPanel open={productOpen} links={PRODUCT_MENU_LINKS} locale={locale} close={() => setProductOpen(false)} />
            </li>

            <li
              className="relative cursor-pointer py-2.5"
              onMouseEnter={() => {
                clearCloseTimer();
                setProductOpen(false);
                setResourcesOpen(true);
              }}
              onMouseLeave={() => scheduleClose('resources')}
            >
              <button
                type="button"
                className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/65 hover:text-secondary dark:text-accent/65 dark:hover:text-accent group flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                onClick={() => {
                  setProductOpen(false);
                  setResourcesOpen((p) => !p);
                }}
              >
                <span>{t('resources')}</span>
                <span className="nav-arrow block origin-center translate-y-px transition-all duration-300 group-hover:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              <MenuPanel open={resourcesOpen} links={RESOURCES_MENU_LINKS} locale={locale} close={() => setResourcesOpen(false)} />
            </li>

            {PRIMARY_NAV_LINKS.map((item) => (
              <li key={item.id} className="relative cursor-pointer py-2.5">
                <Link
                  href={withLocalePath(item.href, locale)}
                  className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/65 hover:text-secondary dark:text-accent/65 dark:hover:text-accent group flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          {DASHBOARD_LINKS.map((item) => (
            <a
              key={item.id}
              href={buildAppUrl(item.href, { returnTo })}
              className="btn btn-v2-white btn-md-v2 border group-hover/btn-v2:btn-secondary-v2"
            >
              {t(item.labelKey)}
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
            {LOCALE_OPTIONS.map((option) => (
              <option key={option.code} value={option.code} disabled={!option.supported}>
                {option.label}
              </option>
            ))}
          </select>

          {AUTH_LINKS.map((item) => (
            <a
              key={item.id}
              href={buildAppUrl(item.href, { returnTo })}
              className={
                item.id === 'start-free'
                  ? 'btn btn-secondary-v2 btn-md-v2 border group-hover/btn-v2:btn-v2-white'
                  : 'btn btn-v2-white btn-md-v2 border group-hover/btn-v2:btn-secondary-v2'
              }
            >
              {t(item.labelKey)}
            </a>
          ))}
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
        <nav className="grid gap-2 rounded-2xl border border-stroke-2 bg-white/95 p-4 backdrop-blur dark:border-stroke-7 dark:bg-background-8/95" aria-label="Mobile primary">
          {MOBILE_NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              href={withLocalePath(item.href, locale)}
              className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-background-3 dark:hover:bg-background-7"
              onClick={() => setOpen(false)}
            >
              {t(item.labelKey)}
            </Link>
          ))}

          <div className="mt-2 grid gap-2 border-t border-stroke-2 pt-3 dark:border-stroke-7">
            {DASHBOARD_LINKS.map((item) => (
              <a
                key={item.id}
                href={buildAppUrl(item.href, { returnTo })}
                className="rounded-lg border border-stroke-2 px-3 py-2 text-sm dark:border-stroke-7"
              >
                {t(item.labelKey)}
              </a>
            ))}
            {AUTH_LINKS.map((item) => (
              <a
                key={item.id}
                href={buildAppUrl(item.href, { returnTo })}
                className={
                  item.id === 'start-free'
                    ? 'rounded-lg bg-primary-500 px-3 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-stroke-2 px-3 py-2 text-sm dark:border-stroke-7'
                }
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
