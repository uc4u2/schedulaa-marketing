'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
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

const mapItem = (item: any) => ({
  title: item?.title || '',
  body: item?.body || item?.description || '',
  points: Array.isArray(item?.points) ? item.points : [],
  links: Array.isArray(item?.links)
    ? item.links
    : item?.link
    ? [{ label: item?.linkLabel || 'Learn more', href: item.link }]
    : [],
});

function normalizeSections(config: AnyConfig) {
  const blocks: Array<{ overline?: string; title?: string; intro?: string; items: any[] }> = [];

  if (Array.isArray(config.sections)) {
    config.sections.forEach((section: any) => {
      const sectionItems = Array.isArray(section.items)
        ? section.items.map(mapItem)
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
      items: config.features.map(mapItem),
    });
  }

  if (Array.isArray(config.highlights) && config.highlights.length) {
    blocks.push({
      overline: 'Highlights',
      title: '',
      intro: '',
      items: config.highlights.map(mapItem),
    });
  }

  if (Array.isArray(config.steps) && config.steps.length) {
    blocks.push({
      overline: config.stepsHeading || 'Process',
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
      overline: 'Operations',
      title: '',
      intro: '',
      items: config.callouts.map(mapItem),
    });
  }

  if (Array.isArray(config.secondaryLinks) && config.secondaryLinks.length) {
    blocks.push({
      overline: 'Quick links',
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

  const mapHref = (href: string) => {
    if (!href) return '#';
    if (href.startsWith('#')) return href;
    if (isExternal(href)) return href;
    if (isAppPath(href)) return buildAppUrl(href, { returnTo });
    return withLocalePath(href, locale);
  };

  const hero = config.hero || {};
  const blocks = normalizeSections(config);
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
        </div>
      </section>

      {afterHero}

      {blocks.map((block, blockIndex) => (
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
