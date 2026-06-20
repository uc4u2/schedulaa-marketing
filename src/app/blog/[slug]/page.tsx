import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { generateMetadata as buildPageMetadata } from '@/utils/generateMetaData';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';
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
  const post = (posts as any[]).find((item) => item.slug === slug);
  const title = post ? `${post.title} | Schedulaa` : 'Blog Details | Schedulaa';
  const description = post?.description || 'Read the latest Schedulaa article.';
  const image = post?.image?.src || post?.heroImage || undefined;
  return buildPageMetadata(title, description, `https://www.schedulaa.com/blog/${slug}`, image);
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

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">{post.heroOverline || copy.blog}</p>
          <h1 className="mt-5">{post.title}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{post.description}</p>
          <p className="mt-3 text-sm text-secondary/60 dark:text-accent/60">
            {new Date(post.datePublished).toLocaleDateString(locale === 'en' ? 'en-US' : locale)} {post.category ? `• ${post.category}` : ''}
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {(post.sections || []).map((section: any, idx: number) => (
            <div key={`${post.slug}-section-${idx}`} className="rounded-xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
              {section.heading ? <h2 className="text-xl font-semibold">{section.heading}</h2> : null}
              {section.image?.src ? (
                <Image
                  src={section.image.src}
                  alt={section.image.alt || section.heading || copy.blog}
                  width={1200}
                  height={675}
                  className="mt-3 h-auto w-full rounded-lg"
                  unoptimized
                />
              ) : null}
              <div className="mt-3 space-y-3 text-secondary/70 dark:text-accent/70">
                {(section.paragraphs || []).map((paragraph: string, pidx: number) => (
                  <p key={`${post.slug}-${idx}-${pidx}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <p className="badge badge-yellow-v2">{ctaCopy.badge}</p>
          <h2 className="mt-4 text-xl font-semibold">{ctaContent.title}</h2>
          <p className="mt-3 text-secondary/70 dark:text-accent/70">{ctaContent.body}</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href={ctaHref} className="text-primary-500 underline">
              {ctaCopy.more}
            </Link>
            <Link href="/contact" className="text-primary-500 underline">
              {copy.sales}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/blog" className="text-primary-500 underline">
            {copy.back}
          </Link>
          <Link href={buildAppUrl('/register', { returnTo })} className="text-primary-500 underline">
            {copy.start}
          </Link>
          <Link href="/contact" className="text-primary-500 underline">
            {copy.sales}
          </Link>
        </div>
      </section>
    </main>
  );
}
