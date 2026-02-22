'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { AppLocale } from '@/utils/locale';
import dashboardImg from '@public/images/marketing/showcase/dashboard.png';
import employeeDashboardImg from '@public/images/marketing/showcase/employee-dashboard.png';
import myShiftImg from '@public/images/marketing/showcase/my-shift.png';
import qbImg from '@public/images/marketing/showcase/qb.png';
import roeImg from '@public/images/marketing/showcase/roe.png';
import stripeImg from '@public/images/marketing/showcase/stripe.png';
import t4Img from '@public/images/marketing/showcase/t4.png';
import w2Img from '@public/images/marketing/showcase/w2.png';
import websiteBuilderImg from '@public/images/marketing/showcase/website-builder.png';
import xeroImg from '@public/images/marketing/showcase/xero.png';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ShowcaseItem = {
  id: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
};

const showcaseItems: ShowcaseItem[] = [
  { id: 'dashboard', title: 'Manager dashboard', subtitle: 'Operations overview', image: dashboardImg },
  { id: 'employee-dashboard', title: 'Employee dashboard', subtitle: 'Time and shifts', image: employeeDashboardImg },
  { id: 'my-shift', title: 'Shift timeline', subtitle: 'Live schedule updates', image: myShiftImg },
  { id: 'qb', title: 'QuickBooks sync', subtitle: 'Accounting workflow', image: qbImg },
  { id: 'roe', title: 'ROE workflow', subtitle: 'Compliance records', image: roeImg },
  { id: 'stripe', title: 'Stripe status', subtitle: 'Payments and subscriptions', image: stripeImg },
  { id: 't4', title: 'T4 generation', subtitle: 'Canada payroll exports', image: t4Img },
  { id: 'w2', title: 'W-2 forms', subtitle: 'US payroll exports', image: w2Img },
  { id: 'website-builder', title: 'Website builder', subtitle: 'Launch pages quickly', image: websiteBuilderImg },
  { id: 'xero', title: 'Xero integration', subtitle: 'Finance handoff', image: xeroImg },
];

const mapShowcaseLocale = (items: ShowcaseItem[], locale: AppLocale) => {
  if (locale === 'fa') {
    const fa: Record<string, { title: string; subtitle: string }> = {
      dashboard: { title: '\u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0645\u062f\u06cc\u0631', subtitle: '\u0646\u0645\u0627\u06cc \u06a9\u0627\u0645\u0644 \u0639\u0645\u0644\u06cc\u0627\u062a' },
      'employee-dashboard': { title: '\u062f\u0627\u0634\u0628\u0648\u0631\u062f \u06a9\u0627\u0631\u0645\u0646\u062f', subtitle: '\u0632\u0645\u0627\u0646 \u0648 \u0634\u06cc\u0641\u062a\u200c\u0647\u0627' },
      'my-shift': { title: '\u062e\u0637 \u0632\u0645\u0627\u0646\u06cc \u0634\u06cc\u0641\u062a', subtitle: '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0632\u0646\u062f\u0647 \u0628\u0631\u0646\u0627\u0645\u0647' },
      qb: { title: '\u0647\u0645\u06af\u0627\u0645\u200c\u0633\u0627\u0632\u06cc QuickBooks', subtitle: '\u062c\u0631\u06cc\u0627\u0646 \u06a9\u0627\u0631 \u0645\u0627\u0644\u06cc' },
      roe: { title: '\u0631\u0648\u0646\u062f ROE', subtitle: '\u0633\u0648\u0627\u0628\u0642 \u0627\u0646\u0637\u0628\u0627\u0642' },
      stripe: { title: '\u0648\u0636\u0639\u06cc\u062a Stripe', subtitle: '\u067e\u0631\u062f\u0627\u062e\u062a \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9' },
      t4: { title: '\u062a\u0648\u0644\u06cc\u062f T4', subtitle: '\u062e\u0631\u0648\u062c\u06cc \u062d\u0642\u0648\u0642 \u06a9\u0627\u0646\u0627\u062f\u0627' },
      w2: { title: '\u0641\u0631\u0645\u200c\u0647\u0627\u06cc W-2', subtitle: '\u062e\u0631\u0648\u062c\u06cc \u062d\u0642\u0648\u0642 \u0627\u06cc\u0627\u0644\u0627\u062a \u0645\u062a\u062d\u062f\u0647' },
      'website-builder': { title: '\u0633\u0627\u062e\u062a\u200c\u0633\u0627\u0632 \u0648\u0628\u200c\u0633\u0627\u06cc\u062a', subtitle: '\u0627\u0646\u062a\u0634\u0627\u0631 \u0633\u0631\u06cc\u0639 \u0635\u0641\u062d\u0627\u062a' },
      xero: { title: '\u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc Xero', subtitle: '\u062a\u062d\u0648\u06cc\u0644 \u0628\u0647 \u062a\u06cc\u0645 \u0645\u0627\u0644\u06cc' },
    };
    return items.map((item) => ({ ...item, ...(fa[item.id] || {}) }));
  }
  if (locale === 'ru') {
    const ru: Record<string, { title: string; subtitle: string }> = {
      dashboard: { title: '\u041f\u0430\u043d\u0435\u043b\u044c \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430', subtitle: '\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u0437\u043e\u0440 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439' },
      'employee-dashboard': { title: '\u041f\u0430\u043d\u0435\u043b\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430', subtitle: '\u0412\u0440\u0435\u043c\u044f \u0438 \u0441\u043c\u0435\u043d\u044b' },
      'my-shift': { title: '\u041b\u0435\u043d\u0442\u0430 \u0441\u043c\u0435\u043d', subtitle: '\u0416\u0438\u0432\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f' },
      qb: { title: '\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f QuickBooks', subtitle: '\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441' },
      roe: { title: '\u041f\u0440\u043e\u0446\u0435\u0441\u0441 ROE', subtitle: '\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f' },
      stripe: { title: '\u0421\u0442\u0430\u0442\u0443\u0441 Stripe', subtitle: '\u041f\u043b\u0430\u0442\u0435\u0436\u0438 \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438' },
      t4: { title: '\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f T4', subtitle: '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0434\u043b\u044f \u041a\u0430\u043d\u0430\u0434\u044b' },
      w2: { title: '\u0424\u043e\u0440\u043c\u044b W-2', subtitle: '\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b \u0434\u043b\u044f \u0421\u0428\u0410' },
      'website-builder': { title: '\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0441\u0430\u0439\u0442\u043e\u0432', subtitle: '\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446' },
      xero: { title: '\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f Xero', subtitle: '\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0432 \u0444\u0438\u043d\u0430\u043d\u0441\u044b' },
    };
    return items.map((item) => ({ ...item, ...(ru[item.id] || {}) }));
  }
  if (locale === 'zh') {
    const zh: Record<string, { title: string; subtitle: string }> = {
      dashboard: { title: '\u7ecf\u7406\u770b\u677f', subtitle: '\u8fd0\u8425\u603b\u89c8' },
      'employee-dashboard': { title: '\u5458\u5de5\u770b\u677f', subtitle: '\u5de5\u65f6\u4e0e\u73ed\u6b21' },
      'my-shift': { title: '\u73ed\u6b21\u65f6\u95f4\u7ebf', subtitle: '\u6392\u73ed\u5b9e\u65f6\u66f4\u65b0' },
      qb: { title: 'QuickBooks \u540c\u6b65', subtitle: '\u8d22\u52a1\u5de5\u4f5c\u6d41' },
      roe: { title: 'ROE \u6d41\u7a0b', subtitle: '\u5408\u89c4\u8bb0\u5f55' },
      stripe: { title: 'Stripe \u72b6\u6001', subtitle: '\u652f\u4ed8\u4e0e\u8ba2\u9605' },
      t4: { title: 'T4 \u751f\u6210', subtitle: '\u52a0\u62ff\u5927\u85aa\u8d44\u5bfc\u51fa' },
      w2: { title: 'W-2 \u8868\u5355', subtitle: '\u7f8e\u56fd\u85aa\u8d44\u5bfc\u51fa' },
      'website-builder': { title: '\u7f51\u7ad9\u6784\u5efa\u5668', subtitle: '\u5feb\u901f\u53d1\u5e03\u9875\u9762' },
      xero: { title: 'Xero \u96c6\u6210', subtitle: '\u8d22\u52a1\u4ea4\u63a5' },
    };
    return items.map((item) => ({ ...item, ...(zh[item.id] || {}) }));
  }
  return items;
};

const copyByLocale: Record<string, { badge: string; title: string; subtitle: string; cta: string }> = {
  en: {
    badge: 'Customer Success',
    title: 'Real apps. Real results.',
    subtitle: 'Explore live product visuals across scheduling, payroll, websites, and accounting integrations.',
    cta: 'Explore platform visuals',
  },
  fa: {
    badge: '\u0645\u0648\u0641\u0642\u06cc\u062a \u0645\u0634\u062a\u0631\u06cc\u0627\u0646',
    title: '\u0645\u062d\u0635\u0648\u0644 \u0648\u0627\u0642\u0639\u06cc\u060c \u0646\u062a\u0627\u06cc\u062c \u0648\u0627\u0642\u0639\u06cc.',
    subtitle: '\u0646\u0645\u0627\u06cc \u0632\u0646\u062f\u0647 \u0627\u0632 \u0645\u062d\u0635\u0648\u0644 Schedulaa \u0631\u0627 \u062f\u0631 \u062d\u0648\u0632\u0647 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0631\u06cc\u0632\u06cc\u060c \u062d\u0642\u0648\u0642\u060c \u0648\u0628\u200c\u0633\u0627\u06cc\u062a \u0648 \u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u0628\u0627 \u0633\u06cc\u0633\u062a\u0645\u200c\u0647\u0627\u06cc \u0645\u0627\u0644\u06cc \u0628\u0628\u06cc\u0646\u06cc\u062f.',
    cta: '\u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u0645\u0627\u06cc \u067e\u0644\u062a\u0641\u0631\u0645',
  },
  ru: {
    badge: '\u0418\u0441\u0442\u043e\u0440\u0438\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432',
    title: '\u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b. \u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b.',
    subtitle: '\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0436\u0438\u0432\u044b\u0435 \u044d\u043a\u0440\u0430\u043d\u044b Schedulaa: \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f, payroll, \u0441\u0430\u0439\u0442\u044b \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 \u0443\u0447\u0451\u0442\u043d\u044b\u043c\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438.',
    cta: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0438\u0437\u0443\u0430\u043b\u044b \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b',
  },
  zh: {
    badge: '\u5ba2\u6237\u6210\u529f',
    title: '\u771f\u5b9e\u4ea7\u54c1\uff0c\u771f\u5b9e\u6210\u679c\u3002',
    subtitle: '\u67e5\u770b\u8986\u76d6\u9884\u7ea6\u3001\u85aa\u8d44\u3001\u7f51\u7ad9\u4e0e\u8d22\u52a1\u96c6\u6210\u7684\u771f\u5b9e\u4ea7\u54c1\u753b\u9762\u3002',
    cta: '\u67e5\u770b\u5e73\u53f0\u5c55\u793a',
  },
};

const Reviews = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const showcaseItemsLocalized = mapShowcaseLocale(showcaseItems, locale);
  const copy = copyByLocale[locale] || copyByLocale.en;

  return (
    <section className="relative bg-[linear-gradient(180deg,#f4f6f9_0%,#e9edf3_100%)] py-16 md:py-20 lg:py-[100px] dark:bg-[#0f172a] shadow-[inset_0_1px_0_rgba(15,23,42,0.06)] dark:shadow-[inset_0_1px_0_rgba(148,163,184,0.14)]">
      <div className="main-container bg-transparent flex flex-col gap-[70px] max-[426px]:gap-10">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5">{copy.badge}</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3">{copy.title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-[426px]:text-tagline-2 max-w-[580px] max-[426px]:max-w-[320px]">{copy.subtitle}</p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="relative bg-transparent">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={22}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={850}
              autoplay={{
                delay: 1400,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1.15, spaceBetween: 14 },
                768: { slidesPerView: 2.1, spaceBetween: 18 },
                1200: { slidesPerView: 3, spaceBetween: 22 },
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}
            >
              <div className="swiper-wrapper">
                {showcaseItemsLocalized.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="group relative mx-1 overflow-visible rounded-[22px] transition-transform duration-300 hover:z-30 hover:scale-[1.65] sm:mx-0">
                      <div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-linear-[145deg,rgba(0,194,255,0.16)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.1)_100%] blur-md" />
                      <div className="relative rounded-[22px] border border-white/10 bg-[#0d1322] p-3 shadow-[0_20px_58px_rgba(0,0,0,0.42)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                        <div className="mb-3 rounded-[14px] border border-white/10 bg-white/4 px-4 py-3">
                          <p className="text-tagline-3 uppercase tracking-[0.12em] text-accent/65">{item.subtitle}</p>
                          <h3 className="mt-1 text-heading-6 text-white">{item.title}</h3>
                        </div>
                        <figure className="overflow-hidden rounded-[16px] border border-white/10 bg-black/30">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                          />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.5}>
          <div className="text-center">
            <LinkButton href="/features" className="btn btn-md btn-secondary dark:btn-transparent hover:btn-white w-full sm:w-auto">
              {copy.cta}
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
