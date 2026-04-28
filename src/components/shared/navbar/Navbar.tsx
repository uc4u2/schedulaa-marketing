'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import { AppLocale, DEFAULT_LOCALE, detectLocaleFromPath, isSupportedLocale, stripLocalePrefix, withLocalePath } from '@/utils/locale';
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
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { trackMetaPixel } from '@/utils/metaPixel';

type MenuPanelProps = {
  open: boolean;
  links: NavbarLinkItem[];
  locale: AppLocale;
  close: () => void;
  kind: 'product' | 'resources';
};

type MegaMenuMeta = {
  description: string;
  icon: ReactNode;
  iconClassName: string;
};

type LocaleMeta = {
  display: string;
};

const PRODUCT_MENU_META: Record<string, MegaMenuMeta> = {
  features: {
    description: 'See the full operating system for bookings, workforce, payroll, websites, and payments.',
    iconClassName: 'bg-blue-50 text-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 12h16M12 4v16" />
        <path d="M6.5 6.5h11v11h-11z" />
      </svg>
    ),
  },
  workforce: {
    description: 'Manage shifts, attendance, time-off, and team operations from one system.',
    iconClassName: 'bg-emerald-50 text-emerald-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 7a3 3 0 1 0 0 .01" />
        <path d="M16 9a2 2 0 1 0 0 .01" />
        <path d="M3.5 19a5 5 0 0 1 9 0" />
        <path d="M14 19a4 4 0 0 1 6.5-3.1" />
      </svg>
    ),
  },
  booking: {
    description: 'Appointments, packages, availability, and checkout flows that stay on brand.',
    iconClassName: 'bg-indigo-50 text-indigo-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    ),
  },
  marketing: {
    description: 'Publish content, capture leads, and turn pages into conversion surfaces.',
    iconClassName: 'bg-pink-50 text-pink-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 7h16M4 12h10M4 17h7" />
        <path d="M18 14l2 2-5 5H13v-2z" />
      </svg>
    ),
  },
  commerce: {
    description: 'Sell physical or digital goods with inventory, categories, and shipping support.',
    iconClassName: 'bg-amber-50 text-amber-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 7h15l-1.5 7.5H8L6 4H3" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="18" cy="19" r="1.5" />
      </svg>
    ),
  },
  payroll: {
    description: 'Preview, finalize, export, and audit payroll without leaving operations.',
    iconClassName: 'bg-orange-50 text-orange-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
  'website-builder': {
    description: 'Launch branded websites and embedded booking flows without plugins.',
    iconClassName: 'bg-cyan-50 text-cyan-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 3v4" />
      </svg>
    ),
  },
  'business-finance': {
    description: 'Run quote-to-work execution with estimates, payment links, field reports, and month-end visibility.',
    iconClassName: 'bg-emerald-50 text-emerald-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 6.5h14M5 12h14M5 17.5h8" />
        <path d="M17 4v16" />
      </svg>
    ),
  },
  'mobile-app': {
    description: 'Download the Android app and see manager and employee workflows built for daily operations.',
    iconClassName: 'bg-violet-50 text-violet-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="3" />
        <path d="M10 6h4M10 17h4" />
      </svg>
    ),
  },
};

const RESOURCES_MENU_META: Record<string, MegaMenuMeta> = {
  industries: {
    description: 'Browse industry-specific workflows and deployment patterns.',
    iconClassName: 'bg-sky-50 text-sky-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 20h16M6 20V9l6-4 6 4v11" />
      </svg>
    ),
  },
  demo: {
    description: 'Walk through the product with scheduling, workforce, and payroll in one view.',
    iconClassName: 'bg-violet-50 text-violet-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M10 9l5 3-5 3z" />
      </svg>
    ),
  },
  contact: {
    description: 'Talk to the team about rollout, migration, or enterprise questions.',
    iconClassName: 'bg-rose-50 text-rose-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    ),
  },
  blog: {
    description: 'Read product launches, operator guides, and workflow breakdowns.',
    iconClassName: 'bg-fuchsia-50 text-fuchsia-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M6 5h12v14H6z" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
  },
  docs: {
    description: 'Implementation guides, setup notes, and technical documentation.',
    iconClassName: 'bg-slate-100 text-slate-700',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M7 4h8l4 4v12H7z" />
        <path d="M15 4v4h4" />
      </svg>
    ),
  },
  zapier: {
    description: 'Connect booking and payroll events to the rest of your workflow stack.',
    iconClassName: 'bg-orange-50 text-orange-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m12 2 1.8 4.7L19 8.5l-4 3.3 1.2 5L12 14l-4.2 2.8 1.2-5-4-3.3 5.2-1.8z" />
      </svg>
    ),
  },
  quickbooks: {
    description: 'Review native accounting export setup for QuickBooks.',
    iconClassName: 'bg-emerald-50 text-emerald-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  xero: {
    description: 'See journal export and mapping guidance for Xero deployments.',
    iconClassName: 'bg-cyan-50 text-cyan-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="m8 8 8 8M16 8l-8 8" />
      </svg>
    ),
  },
  faq: {
    description: 'Get quick answers about setup, pricing, and platform behavior.',
    iconClassName: 'bg-indigo-50 text-indigo-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M9.5 9a2.5 2.5 0 1 1 4.3 1.7c-.7.7-1.8 1.4-1.8 2.8" />
        <circle cx="12" cy="17" r=".8" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  'help-center': {
    description: 'Go to support and client help resources.',
    iconClassName: 'bg-teal-50 text-teal-600',
    icon: (
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 21s-7-4.4-7-11a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 6.6-7 11-7 11Z" />
      </svg>
    ),
  },
};

const LOCALE_META: Record<AppLocale, LocaleMeta> = {
  en: { display: 'English' },
  fa: { display: 'فارسی' },
  ru: { display: 'Русский' },
  zh: { display: '中文' },
  es: { display: 'Español' },
  fr: { display: 'Français' },
  de: { display: 'Deutsch' },
  ar: { display: 'العربية' },
  pt: { display: 'Português' },
};

function LocaleFlag({ code, className = '' }: { code: AppLocale; className?: string }) {
  const common = `relative inline-flex overflow-hidden rounded-[5px] border border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] ${className}`;

  switch (code) {
    case 'en':
      return (
        <span className={`${common} bg-[#b22234]`}>
          <span className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,#b22234_0_7.69%,#ffffff_7.69%_15.38%)]" />
          <span className="absolute left-0 top-0 h-[55%] w-[48%] bg-[#3c3b6e]" />
        </span>
      );
    case 'fa':
      return <span className={`${common} bg-[linear-gradient(to_bottom,#239f40_0_33.33%,#ffffff_33.33%_66.66%,#da0000_66.66%_100%)]`} />;
    case 'ru':
      return <span className={`${common} bg-[linear-gradient(to_bottom,#ffffff_0_33.33%,#0039a6_33.33%_66.66%,#d52b1e_66.66%_100%)]`} />;
    case 'zh':
      return (
        <span className={`${common} bg-[#de2910]`}>
          <span className="absolute left-[18%] top-[18%] text-[8px] leading-none text-[#ffde00]">★</span>
        </span>
      );
    case 'es':
      return <span className={`${common} bg-[linear-gradient(to_bottom,#aa151b_0_25%,#f1bf00_25%_75%,#aa151b_75%_100%)]`} />;
    case 'fr':
      return <span className={`${common} bg-[linear-gradient(to_right,#1f4aa8_0_33.33%,#ffffff_33.33%_66.66%,#ef4135_66.66%_100%)]`} />;
    case 'de':
      return <span className={`${common} bg-[linear-gradient(to_bottom,#000000_0_33.33%,#dd0000_33.33%_66.66%,#ffce00_66.66%_100%)]`} />;
    case 'ar':
      return (
        <span className={`${common} bg-[#006c35]`}>
          <span className="absolute inset-0 flex items-center justify-center text-[7px] font-semibold tracking-[0.08em] text-white">SA</span>
        </span>
      );
    case 'pt':
      return <span className={`${common} bg-[linear-gradient(to_right,#006600_0_40%,#ff0000_40%_100%)]`} />;
    default:
      return <span className={`${common} bg-slate-200`} />;
  }
}

function MenuPanel({ open, links, locale, close, kind }: MenuPanelProps) {
  const t = useTranslations('navbar');
  const meta = kind === 'product' ? PRODUCT_MENU_META : RESOURCES_MENU_META;
  const footerHref = kind === 'product' ? '/features' : '/docs';
  const footerLabel = kind === 'product' ? 'View all product surfaces' : 'View all resources';

  return (
    <div
      className={cn(
        'absolute left-1/2 top-full z-30 mt-3 w-[min(1080px,94vw)] -translate-x-1/2 overflow-hidden rounded-[28px] border border-stroke-2 bg-white/98 shadow-2xl backdrop-blur-xl dark:border-stroke-7 dark:bg-background-8/96',
        open ? 'block' : 'hidden',
      )}
    >
      <div className="grid gap-2 p-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((item) => (
          <Link
            key={item.href}
            href={withLocalePath(item.href, locale)}
            onClick={close}
            className="group flex items-start gap-4 rounded-2xl border border-transparent px-4 py-4 transition hover:border-stroke-2 hover:bg-background-3/65 dark:hover:border-stroke-7 dark:hover:bg-background-7/80"
          >
            <span className={cn('mt-0.5 flex size-13 shrink-0 items-center justify-center rounded-2xl', meta[item.id]?.iconClassName || 'bg-slate-100 text-slate-700')}>
              {meta[item.id]?.icon}
            </span>
            <span className="flex min-w-0 flex-1 items-start justify-between gap-3">
              <span className="min-w-0">
                <span className="block text-lg font-semibold leading-6 text-secondary dark:text-accent">{t(item.labelKey)}</span>
                <span className="mt-1 block text-sm leading-6 text-secondary/55 dark:text-accent/55">
                  {meta[item.id]?.description || ''}
                </span>
              </span>
              <span className="mt-2 shrink-0 text-primary transition group-hover:translate-x-1">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </span>
            </span>
          </Link>
        ))}
      </div>
      <div className="border-t border-stroke-2 px-6 py-4 dark:border-stroke-7">
        <Link
          href={withLocalePath(footerHref, locale)}
          onClick={close}
          className="inline-flex items-center gap-2 text-base font-medium text-primary transition hover:translate-x-0.5"
        >
          <span>{footerLabel}</span>
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

const Navbar = () => {
  const t = useTranslations('navbar');
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, stripLocalePrefix(pathname, locale) || '/');
  const bookDemoHref =
    process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
    'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';
  const bookDemoEmbedHref = (() => {
    try {
      const url = new URL(bookDemoHref);
      url.searchParams.set('embed', '1');
      url.searchParams.set('mode', 'modal');
      url.searchParams.set('dialog', '1');
      url.searchParams.set('focus', 'scheduler');
      return url.toString();
    } catch {
      const join = bookDemoHref.includes('?') ? '&' : '?';
      return `${bookDemoHref}${join}embed=1&mode=modal&dialog=1&focus=scheduler`;
    }
  })();
  const bookDemoLabel =
    {
      en: 'Book demo',
      fa: 'رزرو دمو',
      ru: 'Записаться на демо',
      zh: '预约演示',
      es: 'Reservar demo',
      fr: 'Reserver une demo',
      de: 'Demo buchen',
      ar: 'احجز عرضا',
      pt: 'Agendar demo',
    }[locale] || 'Book demo';
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [localeSearch, setLocaleSearch] = useState('');
  const closeTimerRef = useRef<number | null>(null);
  const localeMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!demoOpen) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDemoOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [demoOpen]);

  useEffect(() => {
    if (!localeOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!localeMenuRef.current?.contains(event.target as Node)) {
        setLocaleOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLocaleOpen(false);
    };
    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [localeOpen]);

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
  const filteredLocales = LOCALE_OPTIONS.filter((option) => {
    const search = localeSearch.trim().toLowerCase();
    if (!option.supported) return false;
    if (!search) return true;
    const meta = LOCALE_META[option.code];
    return option.label.toLowerCase().includes(search) || meta?.display.toLowerCase().includes(search);
  });

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 px-2 transition-all duration-500 ease-in-out max-[400px]:max-w-[350px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[560px] md:max-w-[760px] lg:max-w-[1040px] xl:max-w-[1440px]">
        <div className="flex items-center justify-between rounded-[28px] border border-black/8 bg-white/92 px-3 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur-[24px] dark:border-white/10 dark:bg-background-7/92 xl:px-4 xl:py-2.5">
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
                className="text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent group flex items-center gap-1 rounded-full border border-transparent px-4 py-2.5 font-medium transition-all duration-200 hover:bg-slate-100/80 dark:hover:bg-background-7"
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
              <MenuPanel open={productOpen} links={PRODUCT_MENU_LINKS} locale={locale} close={() => setProductOpen(false)} kind="product" />
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
                className="text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent group flex items-center gap-1 rounded-full border border-transparent px-4 py-2.5 font-medium transition-all duration-200 hover:bg-slate-100/80 dark:hover:bg-background-7"
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
              <MenuPanel open={resourcesOpen} links={RESOURCES_MENU_LINKS} locale={locale} close={() => setResourcesOpen(false)} kind="resources" />
            </li>

            {PRIMARY_NAV_LINKS.map((item) => (
              <li key={item.id} className="relative cursor-pointer py-2.5">
                <Link
                  href={withLocalePath(item.href, locale)}
                  className="text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent group flex items-center gap-1 rounded-full border border-transparent px-4 py-2.5 font-medium transition-all duration-200 hover:bg-slate-100/80 dark:hover:bg-background-7"
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
              className="inline-flex min-h-[52px] items-center justify-center rounded-[18px] border border-slate-200 bg-white px-5 text-[0.95rem] font-medium text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/12 dark:bg-background-8 dark:text-accent dark:hover:bg-background-7"
            >
              {t(item.labelKey)}
            </a>
          ))}

          <button
            type="button"
            className="inline-flex min-h-[52px] items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#2563eb_0%,#3b82f6_38%,#60a5fa_100%)] px-6 text-[0.95rem] font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(37,99,235,0.28)]"
            onClick={() =>
              {
                trackMetaPixel('Lead', {
                  content_name: 'Navbar Book Demo',
                  page_path: pathname,
                });
                setDemoOpen(true);
              }
            }
          >
            {bookDemoLabel}
          </button>

          <div className="relative" ref={localeMenuRef}>
            <button
              type="button"
              onClick={() => {
                setProductOpen(false);
                setResourcesOpen(false);
                setLocaleOpen((prev) => !prev);
              }}
              className="inline-flex min-h-[52px] items-center gap-3 rounded-[18px] border border-slate-200 bg-white px-4 pr-3 text-sm font-medium text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/12 dark:bg-background-8 dark:text-accent dark:hover:bg-background-7"
              aria-expanded={localeOpen}
              aria-haspopup="dialog"
            >
              <LocaleFlag code={locale} className="h-4 w-6 shrink-0" />
              <span>{String(locale).toUpperCase()}</span>
              <svg viewBox="0 0 24 24" className={cn('size-4 transition-transform', localeOpen ? 'rotate-180' : '')} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={cn(
                'absolute right-0 top-full z-40 mt-3 w-[min(820px,92vw)] overflow-hidden rounded-[28px] border border-stroke-2 bg-white/98 shadow-2xl backdrop-blur-xl dark:border-stroke-7 dark:bg-background-8/96',
                localeOpen ? 'block' : 'hidden',
              )}
            >
              <div className="flex items-center justify-between border-b border-stroke-2 px-6 py-5 dark:border-stroke-7">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-secondary/60 dark:bg-background-7 dark:text-accent/60">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3a15.4 15.4 0 0 1 0 18M12 3a15.4 15.4 0 0 0 0 18" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[1.45rem] font-semibold leading-7 text-secondary dark:text-accent">Choose language</p>
                    <p className="mt-1 text-sm text-secondary/55 dark:text-accent/55">Pick your preferred language for the marketing site.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setLocaleOpen(false)}
                  className="rounded-full p-2 text-secondary/55 transition hover:bg-slate-100 hover:text-secondary dark:text-accent/55 dark:hover:bg-background-7 dark:hover:text-accent"
                  aria-label="Close language menu"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <div className="p-5">
                <div className="relative mb-5">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-secondary/35 dark:text-accent/35">
                    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-3.5-3.5" />
                    </svg>
                  </span>
                  <input
                    value={localeSearch}
                    onChange={(event) => setLocaleSearch(event.target.value)}
                    placeholder="Search language..."
                    className="h-14 w-full rounded-[20px] border border-[#3b82f6]/50 bg-white pl-12 pr-4 text-base font-medium text-secondary outline-none ring-0 transition placeholder:text-secondary/40 focus:border-[#3b82f6] dark:border-white/15 dark:bg-background-8 dark:text-accent"
                  />
                </div>

                <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2 xl:grid-cols-4">
                  {filteredLocales.map((option) => {
                    const meta = LOCALE_META[option.code];
                    const active = option.code === locale;
                    return (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => {
                          setLocaleOpen(false);
                          setLocaleSearch('');
                          onLocaleChange(option.code);
                        }}
                        className={cn(
                          'flex items-center gap-3 rounded-[16px] px-4 py-3 text-left text-[1.02rem] font-medium transition',
                          active
                            ? 'bg-[#eaf2ff] text-[#2563eb]'
                            : 'text-secondary hover:bg-slate-100/80 dark:text-accent dark:hover:bg-background-7',
                        )}
                      >
                        <LocaleFlag code={option.code} className="h-5 w-7 shrink-0" />
                        <span>{meta?.display || option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {AUTH_LINKS.map((item) => (
            <a
              key={item.id}
              href={buildAppUrl(item.href, { returnTo })}
              onClick={() => {
                if (item.id === 'start-free') {
                  trackMetaPixel('CompleteRegistration', {
                    content_name: 'Navbar Start Free Trial',
                    page_path: pathname,
                  });
                }
              }}
              className={
                item.id === 'start-free'
                  ? 'inline-flex min-h-[56px] items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#fbbf24_0%,#f59e0b_22%,#60a5fa_55%,#2563eb_78%,#fbbf24_100%)] p-[2px] text-[0.96rem] font-semibold text-white shadow-[0_16px_30px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5'
                  : 'inline-flex min-h-[52px] items-center justify-center rounded-[18px] border border-slate-200 bg-white px-5 text-[0.95rem] font-medium text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/12 dark:bg-background-8 dark:text-accent dark:hover:bg-background-7'
              }
            >
              {item.id === 'start-free' ? (
                <span className="inline-flex min-h-[52px] items-center justify-center rounded-[18px] bg-[#111827] px-6 text-white">
                  {t(item.labelKey)}
                </span>
              ) : (
                t(item.labelKey)
              )}
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
        <nav
          className="grid max-h-[calc(100vh-140px)] gap-2 overflow-y-auto rounded-2xl border border-stroke-2 bg-white/95 p-4 backdrop-blur dark:border-stroke-7 dark:bg-background-8/95"
          aria-label="Mobile primary"
        >
          <div className="grid grid-cols-2 gap-2 border-b border-stroke-2 pb-3 dark:border-stroke-7">
            {DASHBOARD_LINKS.map((item) => (
              <a
                key={item.id}
                href={buildAppUrl(item.href, { returnTo })}
                className="rounded-lg border border-stroke-2 px-3 py-2 text-center text-sm dark:border-stroke-7"
                onClick={() => setOpen(false)}
              >
                {t(item.labelKey)}
              </a>
            ))}
            {AUTH_LINKS.map((item) => (
              <a
                key={item.id}
                href={buildAppUrl(item.href, { returnTo })}
                onClick={() => {
                  if (item.id === 'start-free') {
                    trackMetaPixel('CompleteRegistration', {
                      content_name: 'Mobile Navbar Start Free Trial',
                      page_path: pathname,
                    });
                  }
                  setOpen(false);
                }}
                className={
                  item.id === 'start-free'
                    ? 'rounded-lg bg-primary-500 px-3 py-2 text-center text-sm font-semibold text-white'
                    : 'rounded-lg border border-stroke-2 px-3 py-2 text-center text-sm dark:border-stroke-7'
                }
              >
                {t(item.labelKey)}
              </a>
            ))}
            <button
              type="button"
              className="col-span-2 rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-white"
              onClick={() => {
                trackMetaPixel('Lead', {
                  content_name: 'Mobile Navbar Book Demo',
                  page_path: pathname,
                });
                setOpen(false);
                setDemoOpen(true);
              }}
            >
              {bookDemoLabel}
            </button>
          </div>

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

        </nav>
      </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[90] transition-all duration-300',
          demoOpen ? 'pointer-events-auto bg-slate-950/30' : 'pointer-events-none bg-transparent',
        )}
        aria-hidden={!demoOpen}
      >
        <button
          type="button"
          className={cn('absolute inset-0 h-full w-full', demoOpen ? 'block' : 'hidden')}
          onClick={() => setDemoOpen(false)}
          aria-label="Close demo booking drawer"
        />
        <aside
          className={cn(
            'absolute right-0 top-0 flex h-full w-full max-w-[860px] flex-col bg-white shadow-2xl transition-transform duration-300 dark:bg-background-8',
            demoOpen ? 'translate-x-0' : 'translate-x-full',
          )}
          role="dialog"
          aria-modal="true"
          aria-label={bookDemoLabel}
        >
          <div className="flex items-center justify-between border-b border-stroke-2 px-4 py-3 dark:border-stroke-7 sm:px-6">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-secondary dark:text-accent">{bookDemoLabel}</p>
              <p className="text-xs text-secondary/65 dark:text-accent/65">Book directly without leaving the marketing site.</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={bookDemoHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-stroke-2 px-3 py-1.5 text-xs font-medium text-secondary transition hover:bg-background-3 dark:border-stroke-7 dark:text-accent dark:hover:bg-background-7"
              >
                Open full page
              </a>
              <button
                type="button"
                onClick={() => setDemoOpen(false)}
                className="rounded-full border border-stroke-2 px-3 py-1.5 text-sm font-medium text-secondary transition hover:bg-background-3 dark:border-stroke-7 dark:text-accent dark:hover:bg-background-7"
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
          <div className="flex-1 bg-slate-50 dark:bg-background-9">
            <iframe
              src={bookDemoEmbedHref}
              title={bookDemoLabel}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </aside>
      </div>
    </>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
