import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { buildLocalizedPageMetadata, getLocalizedCanonicalUrl } from '@/lib/seo/pageMetadata';
import YouTubeFacade from '@/components/shared/media/YouTubeFacade';
import { getServerLocale } from '@/utils/serverLocale';
import { DEFAULT_LOCALE, isSupportedLocale, withLocalePath } from '@/utils/locale';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const copyByLocale: Record<string, { back: string; start: string; sales: string; blog: string }> = {
  en: { back: 'Back to blog', start: 'Start free', sales: 'Talk to sales', blog: 'Blog' },
  fa: { back: 'بازگشت به وبلاگ', start: 'شروع رايگان', sales: 'گفتگو با فروش', blog: 'وبلاگ' },
  ru: { back: 'Назад в блог', start: 'Начать бесплатно', sales: 'Связаться с продажами', blog: 'Блог' },
  zh: { back: '返回博客', start: '免费开始', sales: '联系销售', blog: '博客' },
  es: { back: 'Volver al blog', start: 'Comenzar gratis', sales: 'Hablar con ventas', blog: 'Blog' },
  fr: { back: 'Retour au blog', start: 'Commencer gratuitement', sales: 'Parler aux ventes', blog: 'Blog' },
  de: { back: 'Zurueck zum Blog', start: 'Kostenlos starten', sales: 'Mit Vertrieb sprechen', blog: 'Blog' },
  ar: { back: 'العودة الى المدونة', start: 'ابدأ مجانا', sales: 'تواصل مع المبيعات', blog: 'المدونة' },
  pt: { back: 'Voltar ao blog', start: 'Comecar gratis', sales: 'Falar com vendas', blog: 'Blog' },
};

const CTA_COPY = {
  en: {
    badge: 'Recommended next step',
    more: 'Learn more',
    booking: {
      title: 'Explore online booking and scheduling',
      body: 'See how Schedulaa handles appointments, availability, reminders, deposits, and team calendars in one flow.',
    },
    website: {
      title: 'Explore the website builder',
      body: 'See how service businesses publish branded websites, connect domains, and turn traffic into bookings and leads.',
    },
    invoices: {
      title: 'Explore estimates, invoices, and payment links',
      body: 'See how Schedulaa helps service businesses send estimates, issue invoices, share payment links, and track payments.',
    },
    workforce: {
      title: 'Explore staff scheduling and shift management',
      body: 'See how Schedulaa helps service teams manage shifts, approvals, swaps, availability, and staffing coverage.',
    },
    commerce: {
      title: 'Explore payments, products, and checkout flows',
      body: 'See how Schedulaa supports products, add-ons, digital goods, and mixed service checkout flows.',
    },
    payroll: {
      title: 'Explore payroll and back-office workflows',
      body: 'If payroll is the topic you are evaluating, review the payroll workflow as a supporting operational layer inside Schedulaa.',
    },
  },
};

type CtaTarget = 'booking' | 'website' | 'invoices' | 'workforce' | 'commerce' | 'payroll';

function getBlogCtaTarget(post: any): { target: CtaTarget; href: string } {
  const primaryTopic = [post.slug, post.title, post.description, ...(post.tags || [])]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  const haystack = [
    post.slug,
    post.title,
    post.description,
    post.category,
    ...(post.tags || []),
    ...((post.sections || []).flatMap((section: any) => [section.heading, ...(section.paragraphs || [])])),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  const hasAny = (patterns: string[]) => patterns.some((pattern) => haystack.includes(pattern));

  if (['salon', 'beauty'].some((pattern) => primaryTopic.includes(pattern))) {
    return { target: 'booking', href: '/booking/salon' };
  }
  if (['tutor', 'tutoring'].some((pattern) => primaryTopic.includes(pattern))) {
    return { target: 'booking', href: '/booking/tutor' };
  }

  if (hasAny(['invoice', 'invoic', 'estimate', 'quote', 'billing', 'payment link', 'deposit'])) {
    return { target: 'invoices', href: '/business-finance/invoices' };
  }
  if (hasAny(['ecommerce', 'e-commerce', 'checkout', 'product', 'products', 'storefront', 'digital goods', 'add-ons'])) {
    return { target: 'commerce', href: '/commerce' };
  }
  if (hasAny(['website', 'domain', 'storefront', 'online presence', 'seo', 'landing page'])) {
    return { target: 'website', href: '/website-builder' };
  }
  if (hasAny(['booking', 'appointment', 'salon', 'spa', 'tutor', 'clinic', 'doctor', 'med-spa', 'medspa'])) {
    return { target: 'booking', href: '/booking' };
  }
  if (hasAny(['staff', 'shift', 'schedule', 'scheduling', 'workforce', 'coverage', 'overtime', 'time off', 'swap'])) {
    return { target: 'workforce', href: '/workforce' };
  }
  if (hasAny(['payroll', 'w-2', 't4', 'roe', 'payslip', 'payroll-ready'])) {
    return { target: 'payroll', href: '/payroll' };
  }
  return { target: 'booking', href: '/booking' };
}

export async function generateStaticParams() {
  return (posts as any[]).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getServerLocale();
  const post = (posts as any[]).find((item) => item.slug === slug);
  const title = post ? post.seoTitle || `${post.title} | Schedulaa` : 'Blog Details | Schedulaa';
  const description = post?.description || 'Read the latest Schedulaa article.';
  const image = post?.image?.src || post?.heroImage || undefined;
  return buildLocalizedPageMetadata({ locale, path: `/blog/${slug}`, title, description, image });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (posts as any[]).find((item) => item.slug === slug);
  if (!post) {
    return notFound();
  }
  const h = await headers();
  const headerLocale = h.get('x-locale');
  const locale = isSupportedLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
  const copy = copyByLocale[locale] || copyByLocale.en;
  const ctaCopy = CTA_COPY.en;
  const { target: ctaTarget, href: ctaHref } = getBlogCtaTarget(post);
  const ctaContent = ctaCopy[ctaTarget];
  const returnTo = marketingReturnTo(locale, `/blog/${slug}`);
  const canonicalUrl = getLocalizedCanonicalUrl(locale, `/blog/${slug}`);
  const isHvacSchedulingArticle = slug === 'hvac-bad-scheduling-lost-money';
  const isGustoDecisionArticle = slug === 'schedulaa-vs-gusto';
  const hasArticleSchema = isHvacSchedulingArticle || isGustoDecisionArticle;
  const articleImages = (post.sections || [])
    .map((section: any) => section.image?.src)
    .filter(Boolean)
    .map((src: string) => new URL(src, 'https://www.schedulaa.com').toString());
  const articleJsonLd = hasArticleSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.h1 || post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified || post.datePublished,
        mainEntityOfPage: canonicalUrl,
        image: articleImages.length ? articleImages : undefined,
        author: {
          '@type': 'Organization',
          name: 'Schedulaa',
          url: getLocalizedCanonicalUrl(locale, '/'),
        },
        publisher: {
          '@type': 'Organization',
          name: 'Schedulaa',
          url: getLocalizedCanonicalUrl(locale, '/'),
        },
      }
    : null;
  const breadcrumbJsonLd = hasArticleSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Schedulaa', item: getLocalizedCanonicalUrl(locale, '/') },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: getLocalizedCanonicalUrl(locale, '/blog') },
          { '@type': 'ListItem', position: 3, name: post.h1 || post.title, item: canonicalUrl },
        ],
      }
    : null;

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      {articleJsonLd ? (
        <script
          id={isHvacSchedulingArticle ? 'hvac-scheduling-article-jsonld' : 'gusto-decision-article-jsonld'}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
        />
      ) : null}
      {breadcrumbJsonLd ? (
        <script
          id={isHvacSchedulingArticle ? 'hvac-scheduling-breadcrumb-jsonld' : 'gusto-decision-breadcrumb-jsonld'}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c') }}
        />
      ) : null}
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">{post.heroOverline || copy.blog}</p>
          <h1 className="mt-5">{post.h1 || post.title}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{post.description}</p>
          <p className="mt-3 text-sm text-secondary/60 dark:text-accent/60">
            {new Date(post.datePublished).toLocaleDateString(locale === 'en' ? 'en-US' : locale)} {post.category ? `• ${post.category}` : ''}
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {(post.sections || []).map((section: any, idx: number) => (
            <div key={`${post.slug}-section-${idx}`} className="rounded-xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
              {section.heading ? <h2 className="text-xl font-semibold">{section.heading}</h2> : null}
              {section.summaryPoints?.length ? (
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {section.summaryPoints.map((point: string) => (
                    <li
                      key={point}
                      className="rounded-lg border border-stroke-2 bg-background-3 px-4 py-3 text-sm font-medium text-secondary dark:border-stroke-7 dark:bg-background-7 dark:text-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.video?.youtubeEmbed ? (
                <div className="mt-4 overflow-hidden rounded-2xl border border-stroke-2 bg-background-3 p-4 dark:border-stroke-7 dark:bg-background-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-3xl">
                      {section.video.badge ? <p className="badge badge-yellow-v2">{section.video.badge}</p> : null}
                      {section.video.title ? <h3 className="mt-3 text-lg font-semibold">{section.video.title}</h3> : null}
                      {section.video.summary ? (
                        <p className="mt-2 text-secondary/70 dark:text-accent/70">{section.video.summary}</p>
                      ) : null}
                    </div>
                    {section.video.note ? (
                      <p className="max-w-sm text-sm text-secondary/60 dark:text-accent/60">{section.video.note}</p>
                    ) : null}
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-stroke-2 bg-black shadow-2 dark:border-stroke-7">
                    <div className="aspect-video w-full">
                      <YouTubeFacade
                        embedUrl={section.video.youtubeEmbed}
                        title={section.video.title || section.heading || copy.blog}
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {section.image?.src ? (
                <Image
                  src={section.image.src}
                  alt={section.image.alt || section.heading || copy.blog}
                  width={section.image.width || 1200}
                  height={section.image.height || 675}
                  sizes="(max-width: 768px) calc(100vw - 40px), 1200px"
                  className="mt-3 h-auto w-full rounded-lg"
                  unoptimized={section.image.optimize !== true}
                />
              ) : null}
              <div className="mt-3 space-y-3 text-secondary/70 dark:text-accent/70">
                {(section.paragraphs || []).map((paragraph: string, pidx: number) => (
                  <p key={`${post.slug}-${idx}-${pidx}`}>{paragraph}</p>
                ))}
              </div>
              {section.table?.headers?.length && section.table?.rows?.length ? (
                <div className="mt-5 overflow-x-auto rounded-xl border border-stroke-2 dark:border-stroke-7">
                  <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                    <thead className="bg-background-3 dark:bg-background-7">
                      <tr>
                        {section.table.headers.map((header: string) => (
                          <th key={header} scope="col" className="border-b border-stroke-2 px-4 py-3 font-semibold dark:border-stroke-7">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row: string[], rowIndex: number) => (
                        <tr key={`${post.slug}-${idx}-row-${rowIndex}`} className="border-b border-stroke-2 last:border-b-0 dark:border-stroke-7">
                          {row.map((cell: string, cellIndex: number) => (
                            <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top text-secondary/75 dark:text-accent/75">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {section.checklist?.length ? (
                <ul className="mt-5 space-y-3">
                  {section.checklist.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-secondary/75 dark:text-accent/75">
                      <span aria-hidden="true" className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {section.links.map((link: { label: string; href: string }) => (
                    <Link key={`${link.href}-${link.label}`} href={withLocalePath(link.href, locale)} className="text-primary-500 underline">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
              {section.sources?.length ? (
                <div className="mt-5 border-t border-stroke-2 pt-4 dark:border-stroke-7">
                  <p className="text-sm font-semibold text-secondary dark:text-accent">Official sources</p>
                  <ul className="mt-2 space-y-2 text-sm">
                    {section.sources.map((source: { label: string; href: string }) => (
                      <li key={source.href}>
                        <a href={source.href} rel="noopener noreferrer" target="_blank" className="text-primary-500 underline">
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {section.faq?.length ? (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {section.faq.map((item: { question: string; answer: string }) => (
                    <article key={item.question} className="rounded-xl border border-stroke-2 p-5 dark:border-stroke-7">
                      <h3 className="text-base font-semibold">{item.question}</h3>
                      <p className="mt-2 text-secondary/70 dark:text-accent/70">{item.answer}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <p className="badge badge-yellow-v2">{ctaCopy.badge}</p>
          <h2 className="mt-4 text-xl font-semibold">{ctaContent.title}</h2>
          <p className="mt-3 text-secondary/70 dark:text-accent/70">{ctaContent.body}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href={withLocalePath(ctaHref, locale)} className="text-primary-500 underline">
              {ctaCopy.more}
            </Link>
            <Link href={withLocalePath('/contact', locale)} className="text-primary-500 underline">
              {copy.sales}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={withLocalePath('/blog', locale)} className="text-primary-500 underline">
            {copy.back}
          </Link>
          <Link href={buildAppUrl('/register', { returnTo })} className="text-primary-500 underline">
            {copy.start}
          </Link>
          <Link href={withLocalePath('/contact', locale)} className="text-primary-500 underline">
            {copy.sales}
          </Link>
        </div>
      </section>
    </main>
  );
}
