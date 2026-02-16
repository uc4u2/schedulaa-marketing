'use client';

import { useTranslations } from 'next-intl';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import { cn } from '@/utils/cn';
import darkLogo from '@public/images/shared/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations('footer');
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);

  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden pt-16', className)}>
      <div className="main-container px-5">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-6">
          <div className="md:col-span-2">
            <Image src={darkLogo} alt="Schedulaa" className="max-w-[170px]" />
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
              <li>
                <Link href={withLocalePath('/compare/quickbooks-payroll', locale)} className="footer-link">
                  {t('vsQuickBooksPayroll')}
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
