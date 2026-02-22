import { IBlogPost } from '@/interface';
import sourceEn from '@/legacy-content/features/landing-features.json';
import { AppLocale } from '@/utils/locale';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';
import LinkButton from '../ui/button/LinkButton';

const localeCodeByLocale: Record<string, string> = {
  en: 'en-US',
  fa: 'fa-IR',
  ru: 'ru-RU',
  zh: 'zh-CN',
};

const formatDate = (dateInput?: string, locale: AppLocale = 'en') => {
  const date = dateInput ? new Date(dateInput) : new Date('2025-01-01T00:00:00Z');
  if (Number.isNaN(date.getTime())) return new Date('2025-01-01T00:00:00Z').toLocaleDateString(localeCodeByLocale[locale] || 'en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
  return date.toLocaleDateString(localeCodeByLocale[locale] || 'en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

const blogImages = [
  '/images/marketing/showcase/job-posting-4d.png',
  '/images/marketing/showcase/w2.png',
  '/images/marketing/t4-screen.png',
];

const Blog = ({ source, locale = 'en' }: { source?: any; locale?: AppLocale }) => {
  const content = source || sourceEn;
  const blogs = (content?.insight?.items || []).slice(0, 3).map((item: any, index: number) => {
    const body = item.description || '';
    const wordCount = body.split(/\s+/).filter(Boolean).length;
    const minRead = Math.max(3, Math.round(wordCount / 40));
    const tag = item.tag || (locale === 'fa' ? '\u0628\u0644\u0627\u06af' : locale === 'ru' ? '\u0411\u043b\u043e\u0433' : locale === 'zh' ? '\u535a\u5ba2' : 'Blog');
    const readUnit = locale === 'fa' ? '\u062f\u0642\u06cc\u0642\u0647 \u0645\u0637\u0627\u0644\u0639\u0647' : locale === 'ru' ? '\u043c\u0438\u043d \u0447\u0442\u0435\u043d\u0438\u044f' : locale === 'zh' ? '\u5206\u949f\u9605\u8bfb' : 'min read';
    return {
      tag,
      author: locale === 'fa' ? '\u062a\u06cc\u0645 Schedulaa' : locale === 'ru' ? '\u041a\u043e\u043c\u0430\u043d\u0434\u0430 Schedulaa' : locale === 'zh' ? 'Schedulaa \u56e2\u961f' : 'Schedulaa Team',
      authorImage: '',
      publishDate: formatDate(undefined, locale),
      title: item.headline || '',
      description: body,
      thumbnail: blogImages[index] || '/images/marketing/analytics-main.png',
      readTime: `${minRead} ${readUnit}`,
      slug: item.ctaHref || '/blog',
      content: '',
    } as IBlogPost;
  });

  const cta = locale === 'fa' ? '\u0645\u0637\u0627\u0644\u0628 \u0628\u06cc\u0634\u062a\u0631' : locale === 'ru' ? '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b' : locale === 'zh' ? '\u67e5\u770b\u6d1e\u5bdf' : 'Explore insights';
  const readMore = locale === 'fa' ? '\u0628\u06cc\u0634\u062a\u0631 \u0628\u062e\u0648\u0627\u0646\u06cc\u062f' : locale === 'ru' ? '\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u044c\u0448\u0435' : locale === 'zh' ? '\u9605\u8bfb\u66f4\u591a' : 'Read more';
  const sectionBadge = locale === 'fa' ? '\u0622\u0645\u0648\u0632\u0634 \u0648 \u0628\u06cc\u0646\u0634' : locale === 'ru' ? '\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u0438\u043d\u0441\u0430\u0439\u0442\u044b' : locale === 'zh' ? '\u6559\u80b2\u4e0e\u6d1e\u5bdf' : 'Education & Insights';

  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-background-2 dark:bg-background-5 py-20 sm:py-24 lg:py-[100px]">
        <div className="main-container">
          <div className="mb-10 space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">{sectionBadge}</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>{content.insight.title}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[492px]">{content.insight.subtitle}</p>
              </RevealAnimation>
            </div>
          </div>
          <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-8">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 lg:col-span-5 xl:col-span-6">
                <BlogCardV2 blog={blogs[0]} className="dark:bg-background-8 bg-white" ctaLabel={readMore} />
              </div>
            </RevealAnimation>

            <div className="col-span-12 space-y-8 lg:col-span-7 xl:col-span-6">
              <RevealAnimation delay={0.6}>
                <BlogCardV3 blog={blogs[1]} className="dark:bg-background-8 bg-white" ctaLabel={readMore} />
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <BlogCardV3 blog={blogs[2]} className="dark:bg-background-8 bg-white" ctaLabel={readMore} />
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.6}>
            <div className="mt-14 flex justify-center">
              <LinkButton href="/blog" className="btn btn-secondary dark:btn-transparent btn-md hover:btn-green mx-auto w-[90%] md:mx-0 md:w-auto">
                {cta}
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Blog;
