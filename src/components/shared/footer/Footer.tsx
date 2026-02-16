'use client';

import { useTranslations } from 'next-intl';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import { cn } from '@/utils/cn';
import legacyLogo from '@public/images/shared/schedulaa-logo-legacy.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';
const COMPARE_LINKS = [
  { label: 'Schedulaa vs Vagaro', href: '/compare/vagaro' },
  { label: 'Schedulaa vs QuickBooks', href: '/compare/quickbooks' },
  { label: 'Schedulaa vs QuickBooks Payroll', href: '/compare/quickbooks-payroll' },
  { label: 'Schedulaa vs Humi', href: '/compare/humi' },
  { label: 'Schedulaa vs Square Appointments', href: '/compare/square-appointments' },
  { label: 'Schedulaa vs Xero', href: '/compare/xero' },
  { label: 'Schedulaa vs Deputy', href: '/compare/deputy' },
  { label: 'Schedulaa vs Homebase', href: '/compare/homebase' },
  { label: 'Schedulaa vs When I Work', href: '/compare/when-i-work' },
  { label: 'Schedulaa vs Acuity Scheduling', href: '/compare/schedulaa-vs-acuity-scheduling' },
  { label: 'Schedulaa vs Gusto', href: '/compare/gusto' },
  { label: 'Schedulaa vs ADP', href: '/compare/adp' },
  { label: 'Schedulaa vs Paychex', href: '/compare/paychex' },
];

const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations('footer');
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);

  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden pt-16', className)}>
      <div className="main-container px-5">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-6">
          <div className="md:col-span-2">
            <Image src={legacyLogo} alt="Schedulaa" className="h-auto max-w-[190px]" />
            <p className="text-accent/60 text-tagline-1 mt-4">{t('blurb')}</p>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">{t('company')}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href={withLocalePath('/contact', locale)} className="footer-link">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/status', locale)} className="footer-link">
                  {t('status')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/roadmap', locale)} className="footer-link">
                  {t('roadmap')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">{t('product')}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href={withLocalePath('/features', locale)} className="footer-link">
                  {t('features')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/booking', locale)} className="footer-link">
                  {t('booking')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/marketing', locale)} className="footer-link">
                  {t('marketing')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/payroll', locale)} className="footer-link">
                  {t('payroll')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/website-builder', locale)} className="footer-link">
                  {t('websiteBuilder')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/pricing', locale)} className="footer-link">
                  {t('pricing')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">{t('resources')}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href={withLocalePath('/blog', locale)} className="footer-link">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/demo', locale)} className="footer-link">
                  {t('demo')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/contact', locale)} className="footer-link">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/docs', locale)} className="footer-link">
                  {t('docs')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/client/support', locale)} className="footer-link">
                  {t('helpCenter')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/zapier', locale)} className="footer-link">
                  {t('zapier')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">{t('compareGroup')}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href={withLocalePath('/compare', locale)} className="footer-link">
                  {t('compareHub')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/alternatives', locale)} className="footer-link">
                  {t('alternativesHub')}
                </Link>
              </li>
              {COMPARE_LINKS.map((item, idx) => (
                <li key={item.href} className={idx >= 8 ? 'hidden md:list-item' : ''}>
                  <Link href={withLocalePath(item.href, locale)} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="md:hidden">
                <Link href={withLocalePath('/compare', locale)} className="footer-link">
                  View all comparisons
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-primary-50 text-tagline-1 font-medium">{t('legal')}</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href={withLocalePath('/privacy', locale)} className="footer-link">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={withLocalePath('/terms', locale)} className="footer-link">
                  {t('terms')}
                </Link>
              </li>
              <li>
                <a href={`${APP_ORIGIN}/login`} className="footer-link">
                  {t('login')}
                </a>
              </li>
              <li>
                <a href={`${APP_ORIGIN}/register`} className="footer-link">
                  {t('getStarted')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-accent/10 border-t py-6 text-center">
          <p className="text-tagline-2 text-primary-50">{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
