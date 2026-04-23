import heroVectorImg from '@public/images/ns-img-296.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { AppLocale } from '@/utils/locale';
import HeroWorkflowHexShowcase from './HeroWorkflowHexShowcase';

type HeroProps = {
  source?: any;
  locale?: AppLocale;
};

type HeroFeatureItem = { id: number; text: string };
type HeroCopy = {
  line1: string;
  line2: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

const ANDROID_APK_URL =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/apk/schedulaa-staff-latest.apk';

const heroCopyByLocale: Record<string, HeroCopy> = {
  en: {
    line1: 'The Operations OS',
    line2: 'for',
    subtitle: 'Booking, scheduling, time tracking, and payroll unified in one workflow.',
    primaryCta: 'Start free trial',
    secondaryCta: 'Compare plans',
  },
  fa: {
    line1: 'سیستم‌عامل عملیات برای',
    line2: 'تیم‌های خدمات‌محور',
    subtitle: 'رزرو، زمان‌بندی، ردیابی زمان و حقوق در یک گردش‌کار یکپارچه قرار می‌گیرند.',
    primaryCta: 'شروع آزمایشی رایگان',
    secondaryCta: 'مقایسه پلن‌ها',
  },
  ru: {
    line1: 'Операционная ОС для',
    line2: 'сервисных команд',
    subtitle: 'Бронирование, планирование, учет времени и payroll объединены в одном процессе.',
    primaryCta: 'Начать бесплатно',
    secondaryCta: 'Сравнить тарифы',
  },
  zh: {
    line1: '面向服务型团队的',
    line2: '运营系统',
    subtitle: '预约、排班、工时追踪与薪资管理在一个工作流中统一完成。',
    primaryCta: '开始免费试用',
    secondaryCta: '比较方案',
  },
  es: {
    line1: 'El sistema operativo de operaciones para',
    line2: 'equipos de servicios',
    subtitle: 'Reservas, planificacion, control horario y nomina unificados en un solo flujo.',
    primaryCta: 'Iniciar prueba gratis',
    secondaryCta: 'Comparar planes',
  },
  fr: {
    line1: "Le systeme d'operations pour",
    line2: 'les equipes de services',
    subtitle: 'Reservation, planification, suivi du temps et paie unifies dans un seul flux.',
    primaryCta: "Demarrer l'essai gratuit",
    secondaryCta: 'Comparer les offres',
  },
  de: {
    line1: 'Das Operations-OS fur',
    line2: 'servicebasierte Teams',
    subtitle: 'Buchung, Einsatzplanung, Zeiterfassung und Payroll in einem einheitlichen Workflow.',
    primaryCta: 'Kostenlos starten',
    secondaryCta: 'Plane vergleichen',
  },
  ar: {
    line1: 'نظام التشغيل التشغيلي لـ',
    line2: 'الفرق الخدمية',
    subtitle: 'الحجز والجدولة وتتبع الوقت والرواتب موحدة في سير عمل واحد.',
    primaryCta: 'ابدأ الفترة المجانية',
    secondaryCta: 'قارن الخطط',
  },
  pt: {
    line1: 'O sistema operacional de operacoes para',
    line2: 'equipes de servicos',
    subtitle: 'Reservas, agendamento, controle de tempo e folha unificados em um unico fluxo.',
    primaryCta: 'Iniciar teste gratis',
    secondaryCta: 'Comparar planos',
  },
};

const featureItemsByLocale: Record<string, HeroFeatureItem[]> = {
  en: [
    { id: 1, text: 'Real-time booking and provider availability.' },
    { id: 2, text: 'Payroll-ready exports for US + Canada.' },
    { id: 3, text: 'Websites, checkout, and automation in one OS.' },
  ],
  fa: [
    { id: 1, text: '\u0631\u0632\u0631\u0648 \u0644\u062d\u0638\u0647\u200c\u0627\u06cc \u0648 \u0638\u0631\u0641\u06cc\u062a \u0628\u0647\u200c\u0631\u0648\u0632 \u0627\u0631\u0627\u0626\u0647\u200c\u062f\u0647\u0646\u062f\u06af\u0627\u0646.' },
    { id: 2, text: '\u062e\u0631\u0648\u062c\u06cc\u200c\u0647\u0627\u06cc \u062d\u0642\u0648\u0642 \u0622\u0645\u0627\u062f\u0647 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0627\u0644\u0627\u062a \u0645\u062a\u062d\u062f\u0647 \u0648 \u06a9\u0627\u0646\u0627\u062f\u0627.' },
    { id: 3, text: '\u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u060c \u067e\u0631\u062f\u0627\u062e\u062a \u0648 \u0627\u062a\u0648\u0645\u0627\u0633\u06cc\u0648\u0646 \u062f\u0631 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645.' },
  ],
  ru: [
    { id: 1, text: '\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432.' },
    { id: 2, text: '\u0413\u043e\u0442\u043e\u0432\u044b\u0435 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u0438 payroll \u0434\u043b\u044f \u0421\u0428\u0410 \u0438 \u041a\u0430\u043d\u0430\u0434\u044b.' },
    { id: 3, text: '\u0421\u0430\u0439\u0442\u044b, \u0447\u0435\u043a\u0430\u0443\u0442 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0432 \u043e\u0434\u043d\u043e\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435.' },
  ],
  zh: [
    { id: 1, text: '\u5b9e\u65f6\u9884\u7ea6\u4e0e\u670d\u52a1\u4eba\u5458\u53ef\u7528\u6027\u540c\u6b65\u3002' },
    { id: 2, text: '\u652f\u6301\u7f8e\u56fd\u4e0e\u52a0\u62ff\u5927\u7684\u85aa\u8d44\u5bfc\u51fa\u6d41\u7a0b\u3002' },
    { id: 3, text: '\u7f51\u7ad9\u3001\u7ed3\u8d26\u4e0e\u81ea\u52a8\u5316\u5728\u4e00\u4e2a\u7cfb\u7edf\u4e2d\u5b8c\u6210\u3002' },
  ],
  es: [
    { id: 1, text: 'Reservas en tiempo real y disponibilidad de proveedores.' },
    { id: 2, text: 'Exportaciones de nomina listas para EE. UU. y Canada.' },
    { id: 3, text: 'Sitios web, checkout y automatizacion en un solo sistema.' },
  ],
  fr: [
    { id: 1, text: 'Reservation en temps reel et disponibilite des intervenants.' },
    { id: 2, text: 'Exports de paie prets pour les Etats-Unis et le Canada.' },
    { id: 3, text: 'Sites, checkout et automatisation dans un seul systeme.' },
  ],
  de: [
    { id: 1, text: 'Echtzeit-Buchung und Verfugbarkeit der Anbieter.' },
    { id: 2, text: 'Payroll-Exporte fur die USA und Kanada.' },
    { id: 3, text: 'Websites, Checkout und Automatisierung in einem System.' },
  ],
  ar: [
    { id: 1, text: 'حجوزات فورية وتوفر مزودي الخدمة بشكل لحظي.' },
    { id: 2, text: 'تصدير رواتب جاهز للولايات المتحدة وكندا.' },
    { id: 3, text: 'الموقع والدفع والاتمتة في نظام واحد.' },
  ],
  pt: [
    { id: 1, text: 'Reservas em tempo real e disponibilidade de profissionais.' },
    { id: 2, text: 'Exportacoes de folha prontas para EUA e Canada.' },
    { id: 3, text: 'Sites, checkout e automacao em um unico sistema.' },
  ],
};

const Hero = ({ source, locale = 'en' }: HeroProps) => {
  const returnTo = marketingReturnTo(locale, '/');
  const hero = source?.hero || {};
  const heroCopy = heroCopyByLocale[locale] || heroCopyByLocale.en;
  const featureItems = featureItemsByLocale[locale] || featureItemsByLocale.en;
  const isEnglishHero = locale === 'en';

  return (
    <section className="relative z-20 overflow-hidden bg-[url('/images/ns-img-295.jpg')] bg-cover bg-top bg-no-repeat pt-[170px] pb-[88px] md:pt-[206px] md:pb-[112px]">
      <div className="absolute top-[10%] left-1/2 -z-10 mx-auto max-w-[1365px] -translate-x-1/2">
        <figure>
          <Image src={heroVectorImg} alt="hero" />
        </figure>
      </div>
      <div className="main-container">
        <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,560px)_minmax(0,740px)] xl:justify-between xl:gap-16">
          <div className="space-y-5 md:space-y-4 md:text-center xl:space-y-4 xl:pt-1 xl:text-left">
            <RevealAnimation delay={0.1}>
              <h1 className="mx-auto max-w-[400px] text-center leading-[0.98] tracking-[-0.04em] sm:max-w-[520px] md:max-w-[620px] xl:mx-0 xl:max-w-[560px] xl:text-[clamp(48px,3.7vw,60px)]">
                {isEnglishHero ? (
                  <>
                    <span className="block whitespace-nowrap text-white">The Operations OS</span>
                    <span className="block pt-1 text-white md:pt-1.5">for</span>
                    <span className="hero-text-gradient hero-text-color-2 block pt-1 whitespace-nowrap md:pt-1.5">
                      Service-Based Teams
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-white">{heroCopy.line1 || hero.title?.line1 || heroCopyByLocale.en.line1}</span>
                    <span className="hero-text-gradient hero-text-color-2 block pt-1 whitespace-nowrap md:pt-1.5">
                      {heroCopy.line2 || hero.title?.line2 || heroCopyByLocale.en.line2}
                    </span>
                  </>
                )}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-accent/60 mx-auto max-w-[380px] sm:max-w-[500px] md:max-w-[600px] xl:mx-0 xl:max-w-[500px]">
                {heroCopy.subtitle || hero.subtitle || heroCopyByLocale.en.subtitle}
              </p>
            </RevealAnimation>
            <ul className="flex flex-wrap items-center gap-5 sm:justify-center md:gap-9 xl:justify-start xl:gap-5">
              {featureItems.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
                  <li className="flex items-center gap-1.5">
                    <span className="bg-accent/20 inline-flex size-[18px] items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width={11} height={8} viewBox="0 0 11 8" fill="none" className="shrink-0">
                        <path d="M4.81661 7.25605L10.2491 1.92144C10.5836 1.5959 10.5836 1.0697 10.2491 0.744158C9.91446 0.418614 9.37363 0.418614 9.03904 0.744158L4.2116 5.49012L1.96096 3.28807C1.62636 2.96253 1.08554 2.96253 0.750945 3.28807C0.416352 3.61362 0.416352 4.13982 0.750945 4.46536L3.6066 7.25605C3.77347 7.41841 3.99253 7.5 4.2116 7.5C4.43067 7.5 4.64974 7.41841 4.81661 7.25605Z" fill="white" />
                      </svg>
                    </span>
                    <span className="text-accent/60 text-tagline-2">{item.text}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
            <ul className="pt-4 flex flex-col items-center justify-center gap-4 md:flex-row xl:justify-start">
              <RevealAnimation delay={0.6} direction="left" offset={50}>
                <li className="w-full text-center sm:w-auto sm:text-left">
                  <LinkButton
                    href={buildAppUrl('/register', { returnTo })}
                    className="btn hover:btn-secondary dark:hover:btn-accent btn-green btn-xl w-[90%] border-0 text-center md:w-auto">
                    {heroCopy.primaryCta || hero.primaryCta?.label || heroCopyByLocale.en.primaryCta}
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7} direction="left" offset={50}>
                <li className="w-full text-center sm:w-auto sm:text-left">
                  <LinkButton
                    href="/pricing"
                    className="btn btn-dark hover:btn-green bg-accent/22 btn-xl w-[90%] text-center text-white hover:border-0 md:w-auto">
                    {heroCopy.secondaryCta || hero.secondaryCta?.label || heroCopyByLocale.en.secondaryCta}
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
            <p className="text-sm text-white/58 md:text-center xl:text-left">
              <a href={ANDROID_APK_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-white/78 transition-colors hover:text-[#d9ff6a]">
                Android app available now
              </a>
              <span className="px-2 text-white/28">·</span>
              <span>iPhone coming soon</span>
            </p>
          </div>
          <RevealAnimation delay={0.8} instant>
            <div className="xl:pt-0">
              <HeroWorkflowHexShowcase locale={locale} />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
