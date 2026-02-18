'use client';

import { useTranslations } from 'next-intl';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';
import { cn } from '@/utils/cn';
import { FOOTER_COMPARE_MOBILE_LIMIT, FOOTER_SECTIONS, type FooterLinkItem } from '@/data/footer-data';
import gradientImg from '@public/images/ns-img-532.png';
import legacyLogo from '@public/images/shared/schedulaa-logo-legacy.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FooterDivider from './FooterDivider';

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
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden', className)}>
      <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
        <Image src={gradientImg} alt="footer gradient" className="size-full object-cover" />
      </figure>

      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-4">
            <div className="max-w-[306px]">
              <figure>
                <Image src={legacyLogo} alt="Schedulaa" className="dark:invert" />
              </figure>
              <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">{t('blurb')}</p>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            {FOOTER_SECTIONS.map((section) => (
              <div className="col-span-12 md:col-span-4" key={section.id}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{t(section.titleKey)}</p>
                  <ul className="space-y-5">
                    {section.links.map((link, idx) => (
                      <li
                        key={link.id}
                        className={section.id === 'compare' && idx >= FOOTER_COMPARE_MOBILE_LIMIT ? 'hidden md:list-item' : ''}
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
              </div>
            ))}
          </div>
        </div>

        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <p className="text-tagline-1 text-primary-50 font-normal">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
