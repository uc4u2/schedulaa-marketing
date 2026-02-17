'use client';

import { useTranslations } from 'next-intl';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import { cn } from '@/utils/cn';
import { FOOTER_COMPARE_MOBILE_LIMIT, FOOTER_SECTIONS, type FooterLinkItem } from '@/data/footer-data';
import legacyLogo from '@public/images/shared/schedulaa-logo-legacy.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com';

const linkHref = (link: FooterLinkItem, localePath: (path: string) => string) =>
  link.externalAppLink ? `${APP_ORIGIN}${link.href}` : localePath(link.href);

const linkLabel = (link: FooterLinkItem, t: (key: any, values?: any) => string) =>
  link.labelKey ? t(link.labelKey) : link.label || '';

const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations('footer');
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const localePath = (path: string) => withLocalePath(path, locale);

  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden pt-16', className)}>
      <div className="main-container px-5">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-7">
          <div className="md:col-span-2">
            <Image src={legacyLogo} alt="Schedulaa" className="h-auto max-w-[190px]" />
            <p className="text-accent/60 text-tagline-1 mt-4">{t('blurb')}</p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.id}>
              <p className="text-primary-50 text-tagline-1 font-medium">{t(section.titleKey)}</p>
              <ul className="mt-5 space-y-3">
                {section.links.map((link, idx) => (
                  <li
                    key={link.id}
                    className={
                      section.id === 'compare' && idx >= FOOTER_COMPARE_MOBILE_LIMIT ? 'hidden md:list-item' : ''
                    }
                  >
                    <Link href={linkHref(link, localePath)} className="footer-link">
                      {linkLabel(link, t)}
                    </Link>
                  </li>
                ))}
                {section.id === 'compare' ? (
                  <li className="md:hidden">
                    <Link href={localePath('/compare')} className="footer-link">
                      View all comparisons
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          ))}
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
