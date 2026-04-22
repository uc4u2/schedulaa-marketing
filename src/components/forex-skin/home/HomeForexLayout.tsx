import About from '@/vendor-forex/src/components/home/About';
import Blog from '@/vendor-forex/src/components/home/Blog';
import Clients from '@/vendor-forex/src/components/home/Clients';
import Contact from '@/vendor-forex/src/components/home/Contact';
import CTA from '@/vendor-forex/src/components/home/CTA';
import Feature from '@/vendor-forex/src/components/home/Feature';
import Hero from '@/vendor-forex/src/components/home/Hero';
import Pricing from '@/vendor-forex/src/components/home/Pricing';
import Reviews from '@/vendor-forex/src/components/home/Reviews';
import Services from '@/vendor-forex/src/components/home/Services';
import Steps from '@/vendor-forex/src/components/home/Steps';
import { getLandingSource } from '@/legacy-content/features/getLandingSource';
import { AppLocale } from '@/utils/locale';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import TrackedLink from '@/components/shared/TrackedLink';
import gradient28Img from '@public/images/ns-img-516.png';
import androidLaunchImg from '@public/images/marketing/android-launch.png';
import Image from 'next/image';

type Props = {
  locale: AppLocale;
};

const MOBILE_APP_SECTION_COPY = {
  eyebrow: 'MOBILE APP',
  title: 'Run daily operations from anywhere',
  body:
    'Schedulaa brings scheduling, time tracking, shift changes, approvals, and team updates into one mobile workflow. Managers stay in control and employees can handle day-to-day actions without needing to be at a desk.',
  bullets: [
    'Review time-off requests, shift swaps, and approvals in seconds',
    'Let employees clock in, check schedules, and stay updated on the go',
    'Keep attendance notices, tasks, and team communication in one place',
    'Extend your operations workflow from desktop to mobile with the same Schedulaa system',
  ],
  support: 'Built to support fast-moving service teams across daily operations.',
  primaryCta: 'Book a demo',
  secondaryCta: 'Start free',
};

const LABOR_VISIBILITY_COPY: Record<
  AppLocale,
  {
    badge: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    bullets: string[];
    videoTitle: string;
  }
> = {
  en: {
    badge: 'Labor cost visibility',
    title: 'Schedule your team and see labor cost pressure before payroll closes.',
    body:
      'Schedulaa gives service managers one place to track worked hours, overtime risk, payroll-ready totals, and staffing pressure without waiting for spreadsheets or end-of-week rollups.',
    primaryCta: 'Book a demo',
    secondaryCta: 'See pricing',
    videoTitle: 'One Platform. One Source of Truth',
    bullets: [
      'Today Labor Cost: know what staffing cost looks like before payroll day.',
      'Overtime Risk: spot employees approaching overtime before it compounds.',
      'Payroll Ready Hours: review approved hours, leave, and exceptions in one place.',
      'Daily and weekly labor visibility for managers, operators, and accountants.',
      'Replace scattered spreadsheets and manual rollups with one operating view.',
    ],
  },
  fa: {
    badge: 'ديد هزينه نيروي کار',
    title: 'تيم خود را برنامه‌ريزي کنيد و فشار هزينه نيروي کار را قبل از بسته شدن حقوق ببينيد.',
    body:
      'Schedulaa به مديران خدمات يک نماي واحد مي‌دهد تا ساعات کارشده، ريسک اضافه‌کاري، جمع ساعات آماده حقوق و فشار تامين نيرو را بدون انتظار براي فايل‌هاي اکسل يا جمع‌بندي پايان هفته ببينند.',
    primaryCta: 'رزرو دمو',
    secondaryCta: 'مشاهده قيمت',
    videoTitle: 'يک پلتفرم. يک منبع حقيقت',
    bullets: [
      'هزينه نيروي کار امروز: پيش از روز حقوق ببينيد هزينه نيرو در چه وضعيتي است.',
      'ريسك اضافه‌کاري: کارکناني را که به اضافه‌کاري نزديک مي‌شوند زودتر شناسايي کنيد.',
      'ساعات آماده حقوق: ساعات تاييدشده، مرخصي و استثناها را در يک نما مرور کنيد.',
      'ديد روزانه و هفتگي نيروي کار براي مديران، اپراتورها و حسابداران.',
      'فايل‌هاي پراکنده و جمع‌بندي دستي را با يک نماي عملياتي جايگزين کنيد.',
    ],
  },
  ru: {
    badge: 'Видимость затрат на труд',
    title: 'Планируйте команду и заранее видьте давление на фонд оплаты до закрытия payroll.',
    body:
      'Schedulaa дает менеджерам сервисных компаний единое место для контроля отработанных часов, риска переработок, итогов для payroll и нагрузки на персонал без таблиц и ручных сводок в конце недели.',
    primaryCta: 'Записаться на демо',
    secondaryCta: 'Смотреть цены',
    videoTitle: 'Одна платформа. Один источник правды',
    bullets: [
      'Затраты на труд сегодня: понимайте стоимость персонала до дня payroll.',
      'Риск переработок: замечайте сотрудников, приближающихся к overtime, заранее.',
      'Часы, готовые к payroll: проверяйте подтвержденные часы, отпуска и исключения в одном месте.',
      'Ежедневная и недельная видимость трудозатрат для менеджеров, операторов и бухгалтеров.',
      'Замените разрозненные таблицы и ручные сводки одной операционной панелью.',
    ],
  },
  zh: {
    badge: '人工成本可视化',
    title: '安排团队班次，并在工资结算前看到人工成本压力。',
    body:
      'Schedulaa 为服务团队管理者提供一个统一视图，用来跟踪已工作时数、加班风险、可直接用于工资的总时数，以及人员压力，无需再等待表格或周末汇总。',
    primaryCta: '预约演示',
    secondaryCta: '查看价格',
    videoTitle: '一个平台。一个真实来源',
    bullets: [
      '今日人工成本：在发薪日前先看到人员成本走势。',
      '加班风险：提前识别接近加班阈值的员工。',
      '工资可用工时：在一个界面查看已批准工时、休假和例外。',
      '为经理、运营人员和会计提供每日与每周人工可视化。',
      '用一个运营视图替代零散表格和人工汇总。',
    ],
  },
  es: {
    badge: 'Visibilidad del costo laboral',
    title: 'Programa a tu equipo y detecta la presion del costo laboral antes de cerrar nomina.',
    body:
      'Schedulaa ofrece a los managers de servicio un solo lugar para seguir horas trabajadas, riesgo de horas extra, totales listos para nomina y presion de dotacion sin esperar hojas de calculo o cierres semanales.',
    primaryCta: 'Reservar demo',
    secondaryCta: 'Ver precios',
    videoTitle: 'Una plataforma. Una sola fuente de verdad',
    bullets: [
      'Costo laboral de hoy: conoce el costo del personal antes del dia de nomina.',
      'Riesgo de horas extra: detecta empleados que se acercan al overtime antes de que crezca.',
      'Horas listas para nomina: revisa horas aprobadas, ausencias y excepciones en un solo lugar.',
      'Visibilidad diaria y semanal del costo laboral para managers, operaciones y contabilidad.',
      'Sustituye hojas dispersas y cierres manuales por una sola vista operativa.',
    ],
  },
  fr: {
    badge: 'Visibilite du cout du travail',
    title: "Planifiez votre equipe et voyez la pression sur les couts de main-d'oeuvre avant la cloture de la paie.",
    body:
      "Schedulaa donne aux responsables de service un seul espace pour suivre les heures travaillees, le risque d'heures supplementaires, les totaux prets pour la paie et la pression de staffing sans attendre des feuilles de calcul ni des bilans de fin de semaine.",
    primaryCta: 'Reserver une demo',
    secondaryCta: 'Voir les tarifs',
    videoTitle: 'Une plateforme. Une seule source de verite',
    bullets: [
      "Cout du travail du jour : voyez le cout du personnel avant le jour de paie.",
      "Risque d'heures supplementaires : reperez les employes proches du seuil avant que cela ne s'accumule.",
      "Heures pretes pour la paie : verifiez heures approuvees, conges et exceptions au meme endroit.",
      'Visibilite quotidienne et hebdomadaire des couts de main-d oeuvre pour managers, operations et comptabilite.',
      'Remplacez les tableurs disperses et les consolidations manuelles par une seule vue operationnelle.',
    ],
  },
  de: {
    badge: 'Transparenz der Personalkosten',
    title: 'Plane dein Team und erkenne Personalkostendruck, bevor die Lohnabrechnung schliesst.',
    body:
      'Schedulaa gibt Service-Managern einen zentralen Ort, um geleistete Stunden, Ueberstundenrisiko, lohnfertige Summen und Staffing-Druck ohne Tabellen oder Wochenend-Rollups zu verfolgen.',
    primaryCta: 'Demo buchen',
    secondaryCta: 'Preise ansehen',
    videoTitle: 'Eine Plattform. Eine Quelle der Wahrheit',
    bullets: [
      'Heutige Personalkosten: erkenne Personalkosten vor dem Payroll-Tag.',
      'Ueberstundenrisiko: erkenne Mitarbeiter, die sich dem Ueberstundenlimit naehern, fruehzeitig.',
      'Payroll-fertige Stunden: pruefe freigegebene Stunden, Abwesenheiten und Ausnahmen an einem Ort.',
      'Taegliche und woechentliche Transparenz fuer Manager, Operations und Buchhaltung.',
      'Ersetze verstreute Tabellen und manuelle Summen durch eine operative Gesamtansicht.',
    ],
  },
  ar: {
    badge: 'وضوح تكلفة العمالة',
    title: 'جدول فريقك واعرف ضغط تكلفة العمالة قبل اغلاق دورة الرواتب.',
    body:
      'يوفر Schedulaa لمديري الخدمات مكانا واحدا لمتابعة الساعات المنجزة ومخاطر العمل الاضافي والاجماليات الجاهزة للرواتب وضغط التوظيف دون انتظار الجداول او تجميعات نهاية الاسبوع.',
    primaryCta: 'احجز عرضا',
    secondaryCta: 'عرض الاسعار',
    videoTitle: 'منصة واحدة. مصدر حقيقة واحد',
    bullets: [
      'تكلفة العمالة اليوم: اعرف شكل تكلفة التوظيف قبل يوم الرواتب.',
      'مخاطر العمل الاضافي: راقب الموظفين الذين يقتربون من حد العمل الاضافي قبل تفاقمه.',
      'الساعات الجاهزة للرواتب: راجع الساعات المعتمدة والاجازات والاستثناءات في مكان واحد.',
      'رؤية يومية واسبوعية لتكلفة العمالة للمديرين والمشغلين والمحاسبين.',
      'استبدل الجداول المبعثرة والتجميع اليدوي برؤية تشغيلية واحدة.',
    ],
  },
  pt: {
    badge: 'Visibilidade do custo de trabalho',
    title: 'Planeje sua equipe e veja a pressao do custo de trabalho antes do fechamento da folha.',
    body:
      'A Schedulaa da aos gestores de servicos um unico lugar para acompanhar horas trabalhadas, risco de horas extras, totais prontos para folha e pressao de equipe sem depender de planilhas ou fechamentos manuais.',
    primaryCta: 'Agendar demo',
    secondaryCta: 'Ver precos',
    videoTitle: 'Uma plataforma. Uma unica fonte de verdade',
    bullets: [
      'Custo de trabalho hoje: veja como esta o custo da equipe antes do dia da folha.',
      'Risco de horas extras: identifique funcionarios se aproximando do overtime antes que cresca.',
      'Horas prontas para folha: revise horas aprovadas, licencas e excecoes em um lugar.',
      'Visibilidade diaria e semanal do custo de trabalho para gestores, operacoes e financeiro.',
      'Substitua planilhas dispersas e consolidacoes manuais por uma unica visao operacional.',
    ],
  },
};

// Forex skin homepage composition in vendor section order.
export default function HomeForexLayout({ locale }: Props) {
  const source = getLandingSource(locale, 'home');
  const laborCopy = LABOR_VISIBILITY_COPY[locale] || LABOR_VISIBILITY_COPY.en;
  const youtubeEmbedSrc =
    process.env.NEXT_PUBLIC_DEMO_YOUTUBE_EMBED || 'https://www.youtube.com/embed/y7kygIhnZm8';
  const bookDemoHref =
    process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
    'https://app.schedulaa.com/sale/meet/uzmTuuGPNNepce0r2vcx8WB4w3sJ2LA32Aqh7XIw9F8';
  const returnTo = marketingReturnTo(locale, '/');
  return (
    <main>
      <Hero source={source} locale={locale} />
      <Clients locale={locale} />
      <section className="py-12 md:py-16">
        <div className="main-container">
          <article className="overflow-hidden rounded-[28px] border border-stroke-2 bg-white shadow-[0_20px_65px_rgba(15,23,42,0.08)] dark:border-stroke-7 dark:bg-background-8">
            <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:p-10">
              <div className="space-y-5">
                <span className="badge badge-cyan">{MOBILE_APP_SECTION_COPY.eyebrow}</span>
                <div className="space-y-4">
                  <h2 className="max-w-[560px] text-heading-4 text-secondary md:text-heading-3 dark:text-white">
                    {MOBILE_APP_SECTION_COPY.title}
                  </h2>
                  <p className="max-w-[620px] text-[15px] leading-7 text-secondary/75 dark:text-accent/70">
                    {MOBILE_APP_SECTION_COPY.body}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {MOBILE_APP_SECTION_COPY.bullets.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-stroke-2 bg-background-12/55 px-4 py-3 dark:border-stroke-7 dark:bg-background-7/55"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-secondary/82 dark:text-accent/82">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-secondary/60 dark:text-accent/60">
                  {MOBILE_APP_SECTION_COPY.support}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <TrackedLink
                    href={bookDemoHref}
                    className="btn btn-secondary-v2 btn-md min-w-[170px]"
                    eventName="Lead"
                    eventParams={{
                      content_name: 'Homepage Mobile App Book Demo',
                      page_path: '/',
                    }}
                  >
                    {MOBILE_APP_SECTION_COPY.primaryCta}
                  </TrackedLink>
                  <TrackedLink
                    href={buildAppUrl('/register', { returnTo })}
                    className="btn btn-white btn-md min-w-[170px] dark:btn-transparent"
                    eventName="CompleteRegistration"
                    eventParams={{
                      content_name: 'Homepage Mobile App Start Free',
                      page_path: '/',
                    }}
                  >
                    {MOBILE_APP_SECTION_COPY.secondaryCta}
                  </TrackedLink>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[560px]">
                <div className="absolute inset-x-[8%] -top-8 h-24 rounded-full bg-secondary/12 blur-3xl dark:bg-primary/20" />
                <div className="absolute -bottom-10 left-1/2 h-24 w-[72%] -translate-x-1/2 rounded-full bg-[#1f7ae0]/12 blur-3xl dark:bg-[#1f7ae0]/20" />
                <div className="relative overflow-hidden rounded-[28px] border border-stroke-2 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5ff] p-4 shadow-[0_26px_65px_rgba(30,64,175,0.12)] dark:border-stroke-7 dark:from-background-7 dark:via-background-8 dark:to-background-7 md:p-5">
                  <div className="rounded-[22px] border border-white/70 bg-white/90 p-3 shadow-inner dark:border-white/5 dark:bg-background-8/95">
                    <Image
                      src={androidLaunchImg}
                      alt="Schedulaa Android mobile app interface preview"
                      className="h-auto w-full rounded-[18px] object-contain"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="main-container">
          <article className="group relative overflow-hidden rounded-[28px] bg-secondary p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-8 lg:p-10">
            <figure className="pointer-events-none absolute inset-0 -right-[38%] -bottom-[62%] z-0 opacity-100">
              <Image src={gradient28Img} alt="labor-cost-glow" className="h-full w-full object-cover opacity-80" />
            </figure>
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
              <div className="space-y-5 rounded-3xl bg-black/16 p-4 backdrop-blur-[1px] md:p-5">
                <span className="badge badge-yellow-v2 !bg-[#d7efb2] !text-secondary">{laborCopy.badge}</span>
                <h2 className="max-w-[560px] text-heading-4 text-white md:text-heading-3">
                  {laborCopy.title}
                </h2>
                <p className="max-w-[620px] text-[15px] leading-7 text-white/82">
                  {laborCopy.body}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <TrackedLink
                    href={bookDemoHref}
                    className="btn btn-white btn-md min-w-[170px] !border-0"
                    eventName="Lead"
                    eventParams={{
                      content_name: 'Homepage Proof Book Demo',
                      page_path: '/',
                    }}
                  >
                    {laborCopy.primaryCta}
                  </TrackedLink>
                  <TrackedLink
                    href="/pricing"
                    className="btn btn-transparent btn-md min-w-[170px] !border-white/25 !text-white hover:!bg-white hover:!text-secondary"
                  >
                    {laborCopy.secondaryCta}
                  </TrackedLink>
                </div>
              </div>
              <div className="grid gap-3 lg:pt-1">
                {laborCopy.bullets.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/12 bg-black/18 px-4 py-3 text-white backdrop-blur-sm"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3f6a5e] text-[11px] text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-white/90 md:text-[15px]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
      <Steps locale={locale} />
      <section className="py-12 md:py-16">
        <div className="main-container">
          <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
            <div className="space-y-3">
              <h2 className="text-heading-4 md:text-heading-3">{laborCopy.videoTitle}</h2>
              <div className="relative w-full overflow-hidden rounded-2xl border border-stroke-2 pb-[56.25%] dark:border-stroke-7">
                <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src={youtubeEmbedSrc}
                  title="Schedulaa platform walkthrough"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </article>
        </div>
      </section>
      <Feature source={source} locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Pricing locale={locale} />
      <Reviews locale={locale} />
      <Blog source={source} locale={locale} />
      <Contact locale={locale} />
      <CTA source={source} locale={locale} />
    </main>
  );
}
