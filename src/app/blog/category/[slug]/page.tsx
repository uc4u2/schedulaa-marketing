import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { generateMetadata as buildPageMetadata } from '@/utils/generateMetaData';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';

const categoryShellCopy: Record<string, { badge: string; empty: string; back: string; start: string }> = {
  en: { badge: 'Blog category', empty: 'No posts in this category yet.', back: 'Back to blog', start: 'Start free' },
  fa: { badge: 'دسته بندي وبلاگ', empty: 'هنوز پستي در اين دسته منتشر نشده است.', back: 'بازگشت به وبلاگ', start: 'شروع رايگان' },
  ru: { badge: 'Категория блога', empty: 'В этой категории пока нет публикаций.', back: 'Назад в блог', start: 'Начать бесплатно' },
  zh: { badge: '博客分类', empty: '该分类下暂无文章。', back: '返回博客', start: '免费开始' },
  es: { badge: 'Categoria del blog', empty: 'Aun no hay publicaciones en esta categoria.', back: 'Volver al blog', start: 'Comenzar gratis' },
  fr: { badge: 'Categorie du blog', empty: "Aucun article n'est encore publie dans cette categorie.", back: 'Retour au blog', start: 'Commencer gratuitement' },
  de: { badge: 'Blogkategorie', empty: 'In dieser Kategorie gibt es noch keine Beitraege.', back: 'Zurueck zum Blog', start: 'Kostenlos starten' },
  ar: { badge: 'تصنيف المدونة', empty: 'لا توجد مقالات في هذا التصنيف حتى الان.', back: 'العودة الى المدونة', start: 'ابدأ مجانا' },
  pt: { badge: 'Categoria do blog', empty: 'Ainda nao ha posts nesta categoria.', back: 'Voltar ao blog', start: 'Comecar gratis' },
};

type CategoryProfile = {
  title: string;
  subtitle: string;
  focusHeading: string;
  focusPoints: string[];
};

const CATEGORY_COPY: Record<string, CategoryProfile> = {
  automation: {
    title: 'Automation playbooks.',
    subtitle:
      'Use these guides to connect scheduling, marketing, analytics, and websites into a single automated flow.',
    focusHeading: 'Automation focus',
    focusPoints: [
      'Reduce handoffs between booking, payroll, and finance.',
      'Use workflow patterns that scale across teams and locations.',
      'Turn repetitive operational tasks into predictable systems.',
    ],
  },
  payroll: {
    title: 'Payroll & compliance.',
    subtitle: 'Deep dives on US and Canadian payroll, ROE workflows, tax automations, and card-on-file best practices.',
    focusHeading: 'Payroll focus',
    focusPoints: [
      'Cross-border payroll scenarios (Canada + US).',
      'Compliance details for T4, W-2, and ROE operations.',
      'How scheduling and approvals improve payroll accuracy.',
    ],
  },
  'growth-playbooks': {
    title: 'Growth playbooks.',
    subtitle: 'Operational frameworks for expanding service teams, improving conversion, and scaling client lifecycle workflows.',
    focusHeading: 'Growth focus',
    focusPoints: [
      'Client acquisition to retention workflows.',
      'Execution checklists for multi-location scaling.',
      'Playbooks that tie operations directly to growth outcomes.',
    ],
  },
  booking: {
    title: 'Booking operations.',
    subtitle: 'Guides on booking experience design, provider allocation, and checkout flows for service businesses.',
    focusHeading: 'Booking focus',
    focusPoints: [
      'Provider selection and slot-management strategy.',
      'Reducing drop-off from calendar to checkout.',
      'Linking booking quality to downstream payroll accuracy.',
    ],
  },
  scheduling: {
    title: 'Scheduling systems.',
    subtitle: 'How to run shift coverage, break enforcement, and availability planning with less manual intervention.',
    focusHeading: 'Scheduling focus',
    focusPoints: [
      'Shift planning that aligns with demand patterns.',
      'Break and overtime controls without spreadsheet drift.',
      'Coverage workflows for managers and frontline teams.',
    ],
  },
  operations: {
    title: 'Operations architecture.',
    subtitle: 'Service-operations strategy spanning staffing, finance handoffs, and workflow reliability.',
    focusHeading: 'Operations focus',
    focusPoints: [
      'How to connect teams, processes, and systems in one OS.',
      'Runbooks for reducing friction across departments.',
      'Operational standards that support growth and control.',
    ],
  },
  hiring: {
    title: 'Hiring and onboarding.',
    subtitle: 'Best practices for candidate intake, document handling, and structured onboarding workflows.',
    focusHeading: 'Hiring focus',
    focusPoints: [
      'Secure intake and document workflows.',
      'Structured hiring pipelines with audit trails.',
      'Faster conversion from candidate to productive team member.',
    ],
  },
  workforce: {
    title: 'Workforce execution.',
    subtitle: 'Guidance for attendance, team productivity, and day-to-day workforce operations.',
    focusHeading: 'Workforce focus',
    focusPoints: [
      'Attendance and shift integrity at scale.',
      'Visibility across team utilization and gaps.',
      'Workforce practices that feed accurate billing and payroll.',
    ],
  },
  accounting: {
    title: 'Accounting handoff.',
    subtitle: 'Practical guides for sync between operational workflows and accounting systems like QuickBooks and Xero.',
    focusHeading: 'Accounting focus',
    focusPoints: [
      'Reduce reconciliation overhead between operations and books.',
      'Journal/export practices for cleaner close cycles.',
      'How to keep finance visibility tied to real operational events.',
    ],
  },
  comparison: {
    title: 'Platform comparisons.',
    subtitle: 'Evidence-based comparisons of Schedulaa and alternative tools for service teams.',
    focusHeading: 'Comparison focus',
    focusPoints: [
      'Fit analysis by operating model, not feature checkboxes.',
      'Trade-offs across payroll, scheduling, and growth tooling.',
      'Decision frameworks for teams evaluating a migration.',
    ],
  },
  'year-end': {
    title: 'Year-end readiness.',
    subtitle: 'Year-end checklists and compliance guidance for payroll, slips, and reporting.',
    focusHeading: 'Year-end focus',
    focusPoints: [
      'Prepare T4, W-2, and ROE outputs confidently.',
      'Avoid common close-cycle payroll errors.',
      'Build repeatable year-end operating playbooks.',
    ],
  },
  product: {
    title: 'Product updates.',
    subtitle: 'Release notes, feature updates, and implementation details for Schedulaa platform capabilities.',
    focusHeading: 'Product focus',
    focusPoints: [
      'What changed and why it matters operationally.',
      'Implementation notes for managers and admins.',
      'Upgrade paths without workflow disruption.',
    ],
  },
};

function toTitleCaseFromSlug(slug: string) {
  return slug
    .split('-')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');
}

function getCategoryProfile(slug: string, count: number): CategoryProfile {
  if (CATEGORY_COPY[slug]) return CATEGORY_COPY[slug];
  const label = toTitleCaseFromSlug(slug);
  return {
    title: `${label} insights.`,
    subtitle: `Category coverage for ${label.toLowerCase()} in service operations, with ${count} post${count === 1 ? '' : 's'} available.`,
    focusHeading: `${label} focus`,
    focusPoints: [
      `Core patterns and practical guidance for ${label.toLowerCase()}.`,
      'Operational scenarios tied to real service-team workflows.',
      'Recommendations you can apply without rebuilding your stack.',
    ],
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const categoryPosts = (posts as any[]).filter((post) => (post.category || '').toLowerCase() === slug.toLowerCase());
  const copy = getCategoryProfile(slug, categoryPosts.length);
  return buildPageMetadata(
    `${copy.title} | Schedulaa Blog`,
    copy.subtitle,
    `https://www.schedulaa.com/blog/category/${slug}`,
  );
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = await headers();
  const headerLocale = h.get('x-locale');
  const locale = isSupportedLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
  const shellCopy = categoryShellCopy[locale] || categoryShellCopy.en;
  const returnTo = marketingReturnTo(locale, `/blog/category/${slug}`);

  const categoryPosts = (posts as any[])
    .filter((post) => (post.category || '').toLowerCase() === slug.toLowerCase())
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
  const copy = getCategoryProfile(slug, categoryPosts.length);

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">{shellCopy.badge}</p>
          <h1 className="mt-5">{copy.title}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">{copy.subtitle}</p>
        </div>

        <div className="mt-8 rounded-[20px] bg-white p-6 shadow-2 dark:bg-background-8 md:p-8">
          <h2 className="text-2xl font-semibold">{copy.focusHeading}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-secondary/70 dark:text-accent/70">
            {copy.focusPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-4">
          {categoryPosts.length === 0 ? (
            <div className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
              <p className="text-secondary/70 dark:text-accent/70">{shellCopy.empty}</p>
            </div>
          ) : (
            categoryPosts.map((post: any) => (
              <div key={post.slug} className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
                <h2 className="text-lg font-semibold">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-500">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">{post.description}</p>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/blog" className="text-primary-500 underline">
            {shellCopy.back}
          </Link>
          <Link href={buildAppUrl('/register', { returnTo })} className="text-primary-500 underline">
            {shellCopy.start}
          </Link>
        </div>
      </section>
    </main>
  );
}
