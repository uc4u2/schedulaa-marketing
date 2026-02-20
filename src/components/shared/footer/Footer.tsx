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
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';

const linkHref = (link: FooterLinkItem, localePath: (path: string) => string, returnTo: string) =>
  link.externalAppLink ? buildAppUrl(link.href, { returnTo }) : localePath(link.href);

const linkLabel = (link: FooterLinkItem, t: (key: any, values?: any) => string) =>
  link.labelKey ? t(link.labelKey) : link.label || '';

const Footer = ({ className }: { className?: string }) => {
  const t = useTranslations('footer');
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const localePath = (path: string) => withLocalePath(path, locale);
  const returnTo = marketingReturnTo(locale, pathname.replace(/^\/(en|fa)/, '') || '/');
  const compareSection = FOOTER_SECTIONS.find((section) => section.id === 'compare');
  const legalSection = FOOTER_SECTIONS.find((section) => section.id === 'legal');
  const primarySections = FOOTER_SECTIONS.filter((section) => section.id !== 'compare' && section.id !== 'legal');

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

          <div className="col-span-12 grid grid-cols-1 gap-x-0 gap-y-8 md:grid-cols-2 xl:col-span-8 xl:grid-cols-4">
            {primarySections.map((section) => (
              <div className="col-span-1" key={section.id}>
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{t(section.titleKey)}</p>
                  <ul className="space-y-5">
                    {section.links.map((link, idx) => (
                      <li
                        key={link.id}
                        className={section.id === 'compare' && idx >= FOOTER_COMPARE_MOBILE_LIMIT ? 'hidden md:list-item' : ''}
                      >
                        <Link href={linkHref(link, localePath, returnTo)} className="footer-link">
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

            {compareSection ? (
              <div className="col-span-1 space-y-10">
                <div className="space-y-8">
                  <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{t(compareSection.titleKey)}</p>
                  <ul className="space-y-5">
                    {compareSection.links.map((link, idx) => (
                      <li
                        key={link.id}
                        className={compareSection.id === 'compare' && idx >= FOOTER_COMPARE_MOBILE_LIMIT ? 'hidden md:list-item' : ''}
                      >
                        <Link href={linkHref(link, localePath, returnTo)} className="footer-link">
                          {linkLabel(link, t)}
                        </Link>
                      </li>
                    ))}
                    <li className="md:hidden">
                      <Link href={localePath('/compare')} className="footer-link">
                        View all comparisons
                      </Link>
                    </li>
                  </ul>
                </div>

                {legalSection ? (
                  <div className="space-y-8">
                    <p className="sm:text-heading-6 text-tagline-1 text-primary-50 font-normal">{t(legalSection.titleKey)}</p>
                    <ul className="space-y-5">
                      {legalSection.links.map((link) => (
                        <li key={link.id}>
                          <Link href={linkHref(link, localePath, returnTo)} className="footer-link">
                            {linkLabel(link, t)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}
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
