'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, type CSSProperties } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import StaggerGrid from '@/components/shared/motion/StaggerGrid';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';

type AnyConfig = Record<string, any>;

const isExternal = (href: string) =>
  href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:');

const isAppPath = (href: string) =>
  href === '/login' ||
  href === '/register' ||
  href === '/signup' ||
  href === '/upgrade' ||
  href.startsWith('/manager') ||
  href.startsWith('/employee') ||
  href.startsWith('/settings') ||
  href.startsWith('/dashboard');

const mapItem = (item: any, learnMore: string) => ({
  title: item?.title || '',
  body: item?.body || item?.description || '',
  points: Array.isArray(item?.points) ? item.points : [],
  links: Array.isArray(item?.links)
    ? item.links
    : item?.link
    ? [{ label: item?.linkLabel || learnMore, href: item.link }]
    : [],
});

function normalizeSections(config: AnyConfig, copy: { highlights: string; process: string; operations: string; quickLinks: string; learnMore: string }) {
  const blocks: Array<{ overline?: string; title?: string; intro?: string; items: any[] }> = [];

  if (Array.isArray(config.sections)) {
    config.sections.forEach((section: any) => {
      const sectionItems = Array.isArray(section.items)
        ? section.items.map((item: any) => mapItem(item, copy.learnMore))
        : Array.isArray(section.points)
        ? [{ title: section.title, body: section.body || '', points: section.points, links: [] }]
        : [];
      if (sectionItems.length) {
        blocks.push({
          overline: section.overline,
          title: section.title,
          intro: section.body || section.intro,
          items: sectionItems,
        });
      }
    });
  }

  if (Array.isArray(config.features) && config.features.length) {
    blocks.push({
      overline: config.featuresHeading,
      title: config.featuresTitle,
      intro: config.featuresIntro,
      items: config.features.map((item: any) => mapItem(item, copy.learnMore)),
    });
  }

  if (Array.isArray(config.highlights) && config.highlights.length) {
    blocks.push({
      overline: copy.highlights,
      title: '',
      intro: '',
      items: config.highlights.map((item: any) => mapItem(item, copy.learnMore)),
    });
  }

  if (Array.isArray(config.steps) && config.steps.length) {
    blocks.push({
      overline: config.stepsHeading || copy.process,
      title: config.stepsTitle,
      intro: config.stepsIntro,
      items: config.steps.map((step: any, idx: number) => ({
        title: step.title || `Step ${idx + 1}`,
        body: step.description || '',
        points: [],
        links: [],
      })),
    });
  }

  if (Array.isArray(config.callouts) && config.callouts.length) {
    blocks.push({
      overline: copy.operations,
      title: '',
      intro: '',
      items: config.callouts.map((item: any) => mapItem(item, copy.learnMore)),
    });
  }

  if (Array.isArray(config.secondaryLinks) && config.secondaryLinks.length) {
    blocks.push({
      overline: copy.quickLinks,
      title: '',
      intro: '',
      items: config.secondaryLinks.map((link: any) => ({
        title: link.label,
        body: '',
        points: [],
        links: [{ label: link.label, href: link.href }],
      })),
    });
  }

  return blocks;
}

export default function FeatureStyleContentPage({
  config,
  routePath,
  afterHero,
}: {
  config: AnyConfig;
  routePath: string;
  afterHero?: ReactNode;
}) {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, routePath);
  const copy =
    locale === 'fa'
      ? {
          highlights: 'نکات کلیدی',
          process: 'فرایند',
          operations: 'عملیات',
          quickLinks: 'لینک‌های سریع',
          learnMore: 'بیشتر بدانید',
          mediaFallback: 'پیش‌نمایش صفحه',
          payrollCenter: 'مرکز کنترل حقوق',
        }
      : locale === 'ru'
      ? {
          highlights: 'Ключевые моменты',
          process: 'Процесс',
          operations: 'Операции',
          quickLinks: 'Быстрые ссылки',
          learnMore: 'Подробнее',
          mediaFallback: 'Превью страницы',
          payrollCenter: 'Центр управления payroll',
        }
      : locale === 'zh'
      ? {
          highlights: '亮点',
          process: '流程',
          operations: '运营',
          quickLinks: '快捷链接',
          learnMore: '了解更多',
          mediaFallback: '页面预览',
          payrollCenter: '薪资控制中心',
        }
      : {
          highlights: 'Highlights',
          process: 'Process',
          operations: 'Operations',
          quickLinks: 'Quick links',
          learnMore: 'Learn more',
          mediaFallback: 'Page preview',
          payrollCenter: 'Payroll control center',
        };

  const mapHref = (href: string) => {
    if (!href) return '#';
    if (href.startsWith('#')) return href;
    if (isExternal(href)) return href;
    if (isAppPath(href)) return buildAppUrl(href, { returnTo });
    return withLocalePath(href, locale);
  };

  const hero = config.hero || {};
  const heroImages = Array.isArray(hero.images) ? hero.images.slice(0, 4) : [];
  const blocks = normalizeSections(config, copy);
  const faq = Array.isArray(config.faq) ? config.faq : [];
  const cta = config.cta || {};

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[100px] pb-[100px] md:pt-[160px]">
        <div className="main-container space-y-[70px]">
          <AnimatedSection>
            <div className="space-y-3 text-center">
              {hero.badge ? <span className="badge badge-green">{hero.badge}</span> : null}
              <h1 className="mx-auto max-w-[980px]">{hero.title}</h1>
              {hero.subtitle ? <p className="mx-auto max-w-[860px]">{hero.subtitle}</p> : null}
            </div>
          </AnimatedSection>

          {(hero.primaryCta || hero.secondaryCta) && (
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-3">
                {hero.primaryCta ? (
                  <a href={mapHref(hero.primaryCta.href)} className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent">
                    {hero.primaryCta.label}
                  </a>
                ) : null}
                {hero.secondaryCta ? (
                  <Link href={mapHref(hero.secondaryCta.href)} className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {hero.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </AnimatedSection>
          )}

          {heroImages.length ? (
            <AnimatedSection>
              <div className="mx-auto mb-5 hidden w-full max-w-[1200px] grid-cols-2 gap-3 md:grid lg:mb-6 lg:grid-cols-4">
                {heroImages.map((item: any, index: number) => (
                  <figure
                    key={item?.src || `hero-fall-${index}`}
                    className="relative overflow-hidden rounded-xl border border-white/20 bg-[#0b1220]/55 p-1 shadow-[0_14px_32px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-300 hover:z-30 hover:scale-[2]"
                    style={
                      {
                        '--card-rotate-start': index % 2 === 0 ? '-12deg' : '12deg',
                        '--card-rotate-end': index % 2 === 0 ? '-2deg' : '2deg',
                        animation: `heroCardDrop 900ms cubic-bezier(0.23,1,0.32,1) ${120 + index * 260}ms both, heroCardDrift ${7.2 + index * 0.2}s ease-in-out ${1.2 + index * 0.25}s infinite`,
                      } as CSSProperties
                    }>
                    <Image
                      src={item?.src || item}
                      alt={item?.alt || `${copy.mediaFallback} ${index + 1}`}
                      width={640}
                      height={360}
                      quality={100}
                      unoptimized
                      className="h-full w-full rounded-lg object-cover opacity-95"
                    />
                  </figure>
                ))}
              </div>
            </AnimatedSection>
          ) : null}

          {hero.image ? (
            <AnimatedSection>
              <div className="mx-auto w-full max-w-[1200px] rounded-2xl border border-white/10 bg-[#0b1220]/40 p-3 backdrop-blur shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
                <div className="relative overflow-hidden rounded-[14px] before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-px before:bg-white/20">
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt || hero.title || 'Hero preview'}
                    width={1600}
                    height={900}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          ) : null}
        </div>
      </section>

      {afterHero}

      {blocks.map((block, blockIndex) => (
        (() => {
          const isPayrollPlatformBlock =
            routePath.startsWith('/payroll') && String(block.overline || '').toLowerCase() === 'platform';
          if (!isPayrollPlatformBlock) {
            return (
              <section
                key={`${block.title || block.overline || 'section'}-${blockIndex}`}
                className={blockIndex % 2 === 0 ? 'pb-16 md:pb-20' : 'bg-background-1 dark:bg-background-6 py-16 md:py-20'}
              >
                <div className="main-container">
                  {(block.overline || block.title || block.intro) && (
                    <AnimatedSection>
                      <div className="mb-10 space-y-3 text-center">
                        {block.overline ? <span className="badge badge-cyan-v2">{block.overline}</span> : null}
                        {block.title ? <h2 className="mx-auto max-w-[900px]">{block.title}</h2> : null}
                        {block.intro ? <p className="mx-auto max-w-[860px]">{block.intro}</p> : null}
                      </div>
                    </AnimatedSection>
                  )}

                  <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
                    {block.items.map((item, idx) => (
                      <article
                        key={`${item.title}-${idx}`}
                        data-stagger-item
                        className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[20px] bg-white p-6 shadow-1 dark:bg-background-8"
                      >
                        {item.title ? <h3 className="text-heading-5">{item.title}</h3> : null}
                        {item.body ? <p className="mt-2">{item.body}</p> : null}
                        {item.points?.length ? (
                          <ul className="mt-4 space-y-2">
                            {item.points.map((point: string) => (
                              <li key={point} className="text-tagline-2">
                                • {point}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {item.links?.length ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.links.map((ln: any) => (
                              <Link key={`${item.title}-${ln.href}`} href={mapHref(ln.href)} className="btn btn-white btn-sm dark:btn-transparent dark:hover:btn-accent">
                                {ln.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </StaggerGrid>
                </div>
              </section>
            );
          }

          return (
            <section key={`${block.title || block.overline || 'section'}-${blockIndex}`} className="pb-16 md:pb-20">
              <div className="main-container">
                <AnimatedSection>
                  <div className="mb-10 space-y-3 text-center">
                    {block.overline ? <span className="badge badge-cyan-v2">{block.overline}</span> : null}
                    {block.title ? <h2 className="mx-auto max-w-[900px]">{block.title}</h2> : null}
                    {block.intro ? <p className="mx-auto max-w-[860px]">{block.intro}</p> : null}
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-[#0b1322] p-5 shadow-[0_26px_76px_rgba(3,10,24,0.52)] md:p-7">
                    <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.22)_0%,rgba(13,20,35,0)_65%)]" />
                    <div className="relative grid grid-cols-12 gap-5">
                      <div className="col-span-12 overflow-hidden rounded-[18px] border border-white/10 bg-[#0f1b2d] lg:col-span-7">
                        <div className="border-b border-white/10 px-4 py-3">
                          <p className="text-tagline-3 uppercase tracking-[0.12em] text-cyan-100/75">{copy.payrollCenter}</p>
                          <p className="mt-1 text-heading-6 text-white">Live calculations, exports, and employee updates</p>
                        </div>
                        <figure className="p-2">
                          <Image
                            src="/images/marketing/showcase/roe-3d.png"
                            alt="ROE workflow mockup"
                            width={1200}
                            height={720}
                            className="h-auto w-full rounded-xl border border-white/10"
                          />
                        </figure>
                      </div>
                      <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
                        {block.items.slice(0, 4).map((item, idx) => (
                          <article
                            key={`${item.title}-${idx}`}
                            className="rounded-[16px] border border-cyan-200/15 bg-[linear-gradient(140deg,rgba(16,26,44,0.96)_0%,rgba(10,40,67,0.85)_100%)] p-4 shadow-[0_14px_35px_rgba(2,10,22,0.45)]"
                          >
                            {item.title ? <h3 className="text-heading-6 text-white">{item.title}</h3> : null}
                            {item.body ? <p className="mt-2 text-tagline-2 text-cyan-50/85">{item.body}</p> : null}
                            {item.links?.[0] ? (
                              <div className="mt-4">
                                <Link href={mapHref(item.links[0].href)} className="btn btn-sm btn-white">
                                  {item.links[0].label}
                                </Link>
                              </div>
                            ) : null}
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          );
        })()
      ))}

      {faq.length ? (
        <section className="pb-20 md:pb-24">
          <div className="main-container">
            <AnimatedSection>
              <div className="mb-10 space-y-3 text-center">
                <span className="badge badge-cyan-v2">{config.faqHeading || 'FAQ'}</span>
                <h2>{config.faqTitle || 'Common questions'}</h2>
                {config.faqIntro ? <p className="mx-auto max-w-[860px]">{config.faqIntro}</p> : null}
              </div>
            </AnimatedSection>
            <StaggerGrid className="grid grid-cols-12 gap-5" childSelector="[data-stagger-item]">
              {faq.map((item: any, idx: number) => (
                <article key={`${item.question}-${idx}`} data-stagger-item className="col-span-12 md:col-span-6 rounded-[20px] border border-stroke-1 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
                  <h3 className="text-heading-6">{item.question}</h3>
                  <p className="mt-2">{item.answer}</p>
                </article>
              ))}
            </StaggerGrid>
          </div>
        </section>
      ) : null}

      {cta.title ? (
        <section className="bg-background-2 dark:bg-background-5 py-20 lg:py-[110px]">
          <div className="main-container grid gap-6 lg:grid-cols-2">
            <article className="dark:bg-background-8 rounded-[20px] bg-white p-6 md:p-8">
              {cta.overline ? <span className="badge badge-green-v2">{cta.overline}</span> : null}
              <h3 className="mt-5">{cta.title}</h3>
              {cta.body ? <p className="mt-2">{cta.body}</p> : null}
              <div className="mt-7 flex flex-wrap gap-3">
                {cta.primary ? (
                  <a href={mapHref(cta.primary.href)} className="btn btn-primary hover:btn-white dark:hover:btn-accent">
                    {cta.primary.label}
                  </a>
                ) : null}
                {cta.secondary ? (
                  <Link href={mapHref(cta.secondary.href)} className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {cta.secondary.label}
                  </Link>
                ) : null}
              </div>
            </article>
          </div>
        </section>
      ) : null}
    </main>
  );
}
