import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { defaultMetadata } from '@/utils/generateMetaData';
import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';
import { headers } from 'next/headers';
import { Metadata } from 'next';

const blogMeta: Record<string, { title: string; description: string; heroTitle: string; heroBody: string; badge: string; l1: string; l2: string; l3: string }> = {
  en: { title: 'The Future of Business Automation | Schedulaa Blog', description: 'How Schedulaa is redefining all-in-one management with unified booking, payroll, websites, analytics, and deep integrations to Zapier, QuickBooks, and Xero.', heroTitle: 'The future of business automation.', heroBody: 'How Schedulaa is redefining all-in-one management for modern teams with unified booking, payroll, websites, analytics, and integrations to Zapier, QuickBooks, and Xero.', badge: 'Blog', l1: 'Automation insights', l2: 'Payroll operations', l3: 'Client journey guide' },
  fa: { title: 'وبلاگ Schedulaa | آينده اتوماسيون کسب وکار', description: 'ديدگاه هاي عملياتي Schedulaa درباره رزرو، حقوق، وب سايت و اتوماسيون.', heroTitle: 'آينده اتوماسيون کسب وکار.', heroBody: 'چگونه Schedulaa رزرو، حقوق، وب سايت و گزارش گيري را يکپارچه مي کند.', badge: 'وبلاگ', l1: 'بينش اتوماسيون', l2: 'عمليات حقوق', l3: 'راهنماي سفر مشتري' },
  ru: { title: 'Блог Schedulaa | Будущее автоматизации бизнеса', description: 'Практические материалы по бронированию, payroll, сайтам и автоматизации.', heroTitle: 'Будущее автоматизации бизнеса.', heroBody: 'Как Schedulaa объединяет бронирование, payroll, сайты и аналитику.', badge: 'Блог', l1: 'Автоматизация', l2: 'Payroll-операции', l3: 'Путь клиента' },
  zh: { title: 'Schedulaa 博客 | 商业自动化的未来', description: '围绕预约、薪资、网站与自动化的实战内容。', heroTitle: '商业自动化的未来。', heroBody: 'Schedulaa 如何将预约、薪资、网站和分析统一到一个平台。', badge: '博客', l1: '自动化洞察', l2: '薪资运营', l3: '客户旅程指南' },
  es: { title: 'Blog Schedulaa | El futuro de la automatizacion', description: 'Guias de reservas, nomina, sitios web y automatizacion para equipos modernos.', heroTitle: 'El futuro de la automatizacion.', heroBody: 'Como Schedulaa integra reservas, nomina, web y analitica en un solo sistema.', badge: 'Blog', l1: 'Insights de automatizacion', l2: 'Operaciones de nomina', l3: 'Guia de viaje del cliente' },
  fr: { title: 'Blog Schedulaa | Le futur de l automatisation', description: 'Guides sur reservation, paie, site web et automatisation pour equipes modernes.', heroTitle: "Le futur de l'automatisation.", heroBody: 'Comment Schedulaa unifie reservation, paie, site web et analytics.', badge: 'Blog', l1: 'Insights automatisation', l2: 'Operations paie', l3: 'Guide parcours client' },
  de: { title: 'Schedulaa Blog | Zukunft der Geschaeftsautomatisierung', description: 'Leitfaeden zu Buchung, Abrechnung, Website und Automatisierung.', heroTitle: 'Die Zukunft der Geschaeftsautomatisierung.', heroBody: 'Wie Schedulaa Buchung, Abrechnung, Website und Analytics verbindet.', badge: 'Blog', l1: 'Automatisierungs-Insights', l2: 'Payroll-Betrieb', l3: 'Kundenreise-Leitfaden' },
  ar: { title: 'مدونة Schedulaa | مستقبل اتمتة الاعمال', description: 'محتوى عملي حول الحجز والرواتب والمواقع والاتمتة.', heroTitle: 'مستقبل اتمتة الاعمال.', heroBody: 'كيف توحد Schedulaa الحجز والرواتب والموقع والتحليلات في منصة واحدة.', badge: 'المدونة', l1: 'رؤى الاتمتة', l2: 'عمليات الرواتب', l3: 'دليل رحلة العميل' },
  pt: { title: 'Blog Schedulaa | O futuro da automacao de negocios', description: 'Guias de reservas, folha, websites e automacao para equipes modernas.', heroTitle: 'O futuro da automacao de negocios.', heroBody: 'Como o Schedulaa unifica reservas, folha, websites e analitica.', badge: 'Blog', l1: 'Insights de automacao', l2: 'Operacoes de folha', l3: 'Guia da jornada do cliente' },
};

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const headerLocale = h.get('x-locale');
  const locale = isSupportedLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
  const localized = blogMeta[locale];
  return {
    ...defaultMetadata,
    title: localized?.title || 'The Future of Business Automation | Schedulaa Blog',
    description:
      localized?.description ||
      'How Schedulaa is redefining all-in-one management with unified booking, payroll, websites, analytics, and deep integrations to Zapier, QuickBooks, and Xero.',
  };
}

export default async function BlogPage() {
  const h = await headers();
  const headerLocale = h.get('x-locale');
  const locale = isSupportedLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
  const localized = blogMeta[locale] || blogMeta.en;
  const sortedPosts = [...(posts as any[])].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );

  return (
    <main className="bg-background-3 dark:bg-background-7 pt-44 pb-24">
      <section className="main-container px-5">
        <div className="rounded-[24px] bg-white p-8 shadow-2 dark:bg-background-8 md:p-12">
          <p className="badge badge-yellow-v2">{localized.badge}</p>
          <h1 className="mt-5">{localized.heroTitle}</h1>
          <p className="mt-4 max-w-[900px] text-secondary/70 dark:text-accent/70">
            {localized.heroBody}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/blog/category/automation" className="text-primary-500 underline">
              {localized.l1}
            </Link>
            <Link href="/blog/category/payroll" className="text-primary-500 underline">
              {localized.l2}
            </Link>
            <Link href="/blog/client-journey" className="text-primary-500 underline">
              {localized.l3}
            </Link>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {sortedPosts.map((post: any) => (
            <div key={post.slug} className="rounded-xl border border-stroke-2 bg-white p-5 dark:border-stroke-7 dark:bg-background-8">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-primary-500">
                {post.category ? <span>{post.category}</span> : null}
                <span>{new Date(post.datePublished).toLocaleDateString(locale === 'en' ? 'en-US' : locale)}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary-500">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-secondary/70 dark:text-accent/70">{post.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(post.tags || []).slice(0, 4).map((tag: string) => (
                  <span key={`${post.slug}-${tag}`} className="rounded-full border border-stroke-2 px-2 py-0.5 text-xs dark:border-stroke-7">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
