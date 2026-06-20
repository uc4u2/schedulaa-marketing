import Link from 'next/link';
import posts from '@/legacy-content/blog/posts';
import { defaultMetadata } from '@/utils/generateMetaData';
import { DEFAULT_LOCALE, isSupportedLocale } from '@/utils/locale';
import { headers } from 'next/headers';
import { Metadata } from 'next';

const blogMeta: Record<string, { title: string; description: string; heroTitle: string; heroBody: string; badge: string; l1: string; l2: string; l3: string }> = {
  en: { title: 'Service Business Growth Guides | Schedulaa Blog', description: 'Read practical guides on websites, online booking, invoices, payments, scheduling, and service-business operations from the Schedulaa team.', heroTitle: 'Growth guides for service businesses.', heroBody: 'Practical articles on websites, online booking, invoices, payments, scheduling, and day-to-day service operations.', badge: 'Blog', l1: 'Website growth', l2: 'Booking & scheduling', l3: 'Invoices & payments' },
  fa: { title: 'وبلاگ Schedulaa | راهنماي رشد کسب وکار خدماتي', description: 'راهنماهاي عملي درباره وب سايت، رزرو آنلاين، فاکتور، پرداخت و زمان بندي براي کسب وکارهاي خدماتي.', heroTitle: 'راهنماهاي رشد براي کسب وکارهاي خدماتي.', heroBody: 'مقالات عملي درباره وب سايت، رزرو آنلاين، فاکتور، پرداخت و عمليات روزانه خدماتي.', badge: 'وبلاگ', l1: 'رشد وب سايت', l2: 'رزرو و زمان بندي', l3: 'فاکتور و پرداخت' },
  ru: { title: 'Блог Schedulaa | Рост сервисного бизнеса', description: 'Практические материалы о сайтах, онлайн-бронировании, счетах, платежах и расписании для сервисных компаний.', heroTitle: 'Руководства по росту сервисного бизнеса.', heroBody: 'Практические статьи о сайтах, онлайн-бронировании, счетах, платежах и ежедневных операциях.', badge: 'Блог', l1: 'Рост сайта', l2: 'Бронирование и расписание', l3: 'Счета и платежи' },
  zh: { title: 'Schedulaa 博客 | 服务型企业增长指南', description: '围绕网站、在线预约、发票、支付和排班的实战指南。', heroTitle: '服务型企业增长指南。', heroBody: '关于网站、在线预约、发票、支付和日常运营的实战文章。', badge: '博客', l1: '网站增长', l2: '预约与排班', l3: '发票与支付' },
  es: { title: 'Blog Schedulaa | Guias de crecimiento para servicios', description: 'Guias practicas sobre sitios web, reservas online, facturas, pagos y programacion para negocios de servicios.', heroTitle: 'Guias de crecimiento para negocios de servicios.', heroBody: 'Articulos practicos sobre sitios web, reservas online, facturas, pagos y operaciones diarias.', badge: 'Blog', l1: 'Crecimiento web', l2: 'Reservas y horarios', l3: 'Facturas y pagos' },
  fr: { title: 'Blog Schedulaa | Guides de croissance pour services', description: 'Guides pratiques sur site web, reservation en ligne, factures, paiements et planification pour les entreprises de services.', heroTitle: 'Guides de croissance pour entreprises de services.', heroBody: 'Articles pratiques sur site web, reservation en ligne, factures, paiements et operations quotidiennes.', badge: 'Blog', l1: 'Croissance du site', l2: 'Reservation et planning', l3: 'Factures et paiements' },
  de: { title: 'Schedulaa Blog | Wachstumsleitfaeden fuer Servicebetriebe', description: 'Praxisleitfaeden zu Website, Online-Buchung, Rechnungen, Zahlungen und Einsatzplanung fuer Servicebetriebe.', heroTitle: 'Wachstumsleitfaeden fuer Servicebetriebe.', heroBody: 'Praxisartikel zu Website, Online-Buchung, Rechnungen, Zahlungen und taeglichen Ablaufen.', badge: 'Blog', l1: 'Website-Wachstum', l2: 'Buchung und Planung', l3: 'Rechnungen und Zahlungen' },
  ar: { title: 'مدونة Schedulaa | ادلة نمو لاعمال الخدمات', description: 'محتوى عملي عن المواقع والحجز عبر الانترنت والفواتير والمدفوعات والجدولة لاعمال الخدمات.', heroTitle: 'ادلة نمو لاعمال الخدمات.', heroBody: 'مقالات عملية عن المواقع والحجز عبر الانترنت والفواتير والمدفوعات والعمليات اليومية.', badge: 'المدونة', l1: 'نمو الموقع', l2: 'الحجز والجدولة', l3: 'الفواتير والمدفوعات' },
  pt: { title: 'Blog Schedulaa | Guias de crescimento para servicos', description: 'Guias praticos sobre websites, reservas online, faturas, pagamentos e escalas para negocios de servicos.', heroTitle: 'Guias de crescimento para negocios de servicos.', heroBody: 'Artigos praticos sobre websites, reservas online, faturas, pagamentos e operacoes diarias.', badge: 'Blog', l1: 'Crescimento do site', l2: 'Reservas e escalas', l3: 'Faturas e pagamentos' },
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
      'How Schedulaa helps service businesses grow with websites, online booking, invoices, payments, scheduling, and connected operations.',
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
            <Link href="/website-builder" className="text-primary-500 underline">
              {localized.l1}
            </Link>
            <Link href="/booking" className="text-primary-500 underline">
              {localized.l2}
            </Link>
            <Link href="/business-finance/invoices" className="text-primary-500 underline">
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
