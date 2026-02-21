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
  if (locale === 'ru') {
    const ru = {
      dashboard: { title: 'Панель менеджера', subtitle: 'Общий обзор операций' },
      'employee-dashboard': { title: 'Панель сотрудника', subtitle: 'Время и смены' },
      'my-shift': { title: 'Лента смен', subtitle: 'Живые обновления расписания' },
      qb: { title: 'Синхронизация QuickBooks', subtitle: 'Бухгалтерский workflow' },
      roe: { title: 'ROE workflow', subtitle: 'Compliance-документы' },
      stripe: { title: 'Статус Stripe', subtitle: 'Платежи и подписки' },
      t4: { title: 'Генерация T4', subtitle: 'Payroll-экспорт для Канады' },
      w2: { title: 'Формы W-2', subtitle: 'Payroll-экспорт для США' },
      'website-builder': { title: 'Конструктор сайтов', subtitle: 'Быстрый запуск страниц' },
      xero: { title: 'Интеграция Xero', subtitle: 'Передача в финансы' },
    } as Record<string, { title: string; subtitle: string }>;
    return items.map((item) => ({ ...item, ...(ru[item.id] || {}) }));
  }
  if (locale === 'zh') {
    const zh = {
      dashboard: { title: '经理看板', subtitle: '运营总览' },
      'employee-dashboard': { title: '员工看板', subtitle: '工时与班次' },
      'my-shift': { title: '班次时间线', subtitle: '排班实时更新' },
      qb: { title: 'QuickBooks 同步', subtitle: '财务工作流' },
      roe: { title: 'ROE 流程', subtitle: '合规记录' },
      stripe: { title: 'Stripe 状态', subtitle: '支付与订阅' },
      t4: { title: 'T4 生成', subtitle: '加拿大薪资导出' },
      w2: { title: 'W-2 表单', subtitle: '美国薪资导出' },
      'website-builder': { title: '网站构建器', subtitle: '快速发布页面' },
      xero: { title: 'Xero 集成', subtitle: '财务交接' },
    } as Record<string, { title: string; subtitle: string }>;
    return items.map((item) => ({ ...item, ...(zh[item.id] || {}) }));
  }
  return items;
};

const Reviews = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const showcaseItemsLocalized = mapShowcaseLocale(showcaseItems, locale);
  const badge = locale === 'ru' ? 'Истории клиентов' : locale === 'zh' ? '客户成功' : 'Customer Success';
  const title = locale === 'ru' ? 'Реальные продукты. Реальные результаты.' : locale === 'zh' ? '真实产品，真实成果。' : 'Real apps. Real results.';
  const subtitle =
    locale === 'ru'
      ? 'Смотрите живые экраны Schedulaa: расписания, payroll, сайты и интеграции с учётными системами.'
      : locale === 'zh'
        ? '查看覆盖预约、薪资、网站与财务集成的真实产品画面。'
        : 'Explore live product visuals across scheduling, payroll, websites, and accounting integrations.';
  const cta =
    locale === 'fa' ? 'مشاهده نمای پلتفرم' : locale === 'ru' ? 'Смотреть визуалы платформы' : locale === 'zh' ? '查看平台展示' : 'Explore platform visuals';
  return (
    <section className="relative bg-[linear-gradient(180deg,#f4f6f9_0%,#e9edf3_100%)] py-16 md:py-20 lg:py-[100px] dark:bg-[#0f172a] shadow-[inset_0_1px_0_rgba(15,23,42,0.06)] dark:shadow-[inset_0_1px_0_rgba(148,163,184,0.14)]">
      <div className="main-container bg-transparent flex flex-col gap-[70px] max-[426px]:gap-10">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5">{badge}</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-[426px]:text-tagline-2 max-w-[580px] max-[426px]:max-w-[320px]">
              {subtitle}
            </p>
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
            <LinkButton
              href="/features"
              className="btn btn-md btn-secondary dark:btn-transparent hover:btn-white w-full sm:w-auto"
            >
              {cta}
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
