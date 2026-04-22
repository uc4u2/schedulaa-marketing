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

const AppleBadge = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M16.84 12.12c.02 2.36 2.08 3.15 2.1 3.16-.02.05-.33 1.16-1.08 2.29-.65.98-1.33 1.96-2.39 1.98-1.04.02-1.37-.62-2.56-.62-1.18 0-1.55.6-2.52.64-1.01.04-1.78-1.02-2.44-1.99-1.34-1.96-2.37-5.55-.99-7.96.69-1.2 1.93-1.96 3.27-1.98 1.02-.02 1.98.68 2.56.68.58 0 1.68-.84 2.83-.72.48.02 1.81.2 2.67 1.45-.07.04-1.6.93-1.58 3.07ZM15.06 4.2c.54-.66.9-1.58.8-2.5-.77.03-1.69.51-2.24 1.17-.5.58-.94 1.52-.82 2.42.86.07 1.72-.44 2.26-1.09Z"
      fill="currentColor"
    />
  </svg>
);

const GooglePlayBadge = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4.8 3.44 14.9 13.55 4.87 20.56c-.35-.18-.57-.54-.57-1V4.45c0-.46.19-.82.5-1.01Z" fill="#00C853" />
    <path d="M18.16 10.82 15.6 9.38 12.98 12l2.63 2.63 2.55-1.44c1.09-.61 1.09-1.77 0-2.37Z" fill="#FFAB00" />
    <path d="M4.87 3.44c.1-.06.22-.1.35-.12l10.38 8.68-2.62 2.62L4.87 3.44Z" fill="#00B8D4" />
    <path d="m5.22 20.68 10.38-8.68 2.56 1.44c1.09.61 1.09 1.77 0 2.37L8.2 21.44c-1.02.57-2.19-.02-2.98-.76Z" fill="#FF5252" />
  </svg>
);

const heroCopyByLocale: Record<string, HeroCopy> = {
  en: {
    line1: 'The Operations OS for',
    line2: 'Service-Based Teams',
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

const chipItemsByLocale: Record<string, string[]> = {
  en: ['Role-based access', 'Audit-ready reports', 'QuickBooks/Xero exports', 'Stripe billing'],
  fa: ['\u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0631 \u0627\u0633\u0627\u0633 \u0646\u0642\u0634', '\u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627\u06cc \u0622\u0645\u0627\u062f\u0647 \u0645\u0645\u06cc\u0632\u06cc', '\u062e\u0631\u0648\u062c\u06cc QuickBooks/Xero', '\u0635\u0648\u0631\u062a\u062d\u0633\u0627\u0628 Stripe'],
  ru: ['\u0414\u043e\u0441\u0442\u0443\u043f \u043f\u043e \u0440\u043e\u043b\u044f\u043c', '\u041e\u0442\u0447\u0435\u0442\u044b \u0434\u043b\u044f \u0430\u0443\u0434\u0438\u0442\u0430', '\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u044b QuickBooks/Xero', '\u0411\u0438\u043b\u043b\u0438\u043d\u0433 Stripe'],
  zh: ['\u57fa\u4e8e\u89d2\u8272\u7684\u6743\u9650\u63a7\u5236', '\u53ef\u5ba1\u8ba1\u62a5\u8868', 'QuickBooks/Xero \u5bfc\u51fa', 'Stripe \u8ba1\u8d39'],
  es: ['Acceso por roles', 'Reportes listos para auditoria', 'Exportaciones QuickBooks/Xero', 'Facturacion Stripe'],
  fr: ['Acces par roles', 'Rapports prets pour audit', 'Exports QuickBooks/Xero', 'Facturation Stripe'],
  de: ['Rollenbasierter Zugriff', 'Audit-fahige Berichte', 'QuickBooks/Xero-Exporte', 'Stripe-Abrechnung'],
  ar: ['صلاحيات حسب الدور', 'تقارير جاهزة للتدقيق', 'تصدير QuickBooks/Xero', 'فوترة Stripe'],
  pt: ['Acesso por funcao', 'Relatorios prontos para auditoria', 'Exportacoes QuickBooks/Xero', 'Cobranca Stripe'],
};

const bottomLineByLocale: Record<string, string> = {
  en: 'Built for payroll integrity across US + Canada.',
  fa: '\u0628\u0631\u0627\u06cc \u06cc\u06a9\u067e\u0627\u0631\u0686\u06af\u06cc \u062d\u0642\u0648\u0642 \u062f\u0631 \u0627\u06cc\u0627\u0644\u0627\u062a \u0645\u062a\u062d\u062f\u0647 \u0648 \u06a9\u0627\u0646\u0627\u062f\u0627 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a.',
  ru: '\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0434\u043b\u044f \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0445 payroll-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0432 \u0421\u0428\u0410 \u0438 \u041a\u0430\u043d\u0430\u0434\u0435.',
  zh: '\u4e3a\u7f8e\u56fd\u4e0e\u52a0\u62ff\u5927\u7684\u85aa\u8d44\u5408\u89c4\u6d41\u7a0b\u800c\u8bbe\u8ba1\u3002',
  es: 'Disenado para la integridad de nomina en EE. UU. y Canada.',
  fr: 'Concu pour une paie fiable aux Etats-Unis et au Canada.',
  de: 'Entwickelt fur sichere Payroll-Prozesse in den USA und Kanada.',
  ar: 'مصمم لسلامة عمليات الرواتب في الولايات المتحدة وكندا.',
  pt: 'Feito para integridade da folha nos EUA e no Canada.',
};

const noCardByLocale: Record<string, string> = {
  en: 'No credit card required \u00b7 Cancel anytime',
  fa: '\u0628\u062f\u0648\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0631\u062a \u0628\u0627\u0646\u06a9\u06cc \u00b7 \u0627\u0646\u0644\u063a\u0627 \u062f\u0631 \u0647\u0631 \u0632\u0645\u0627\u0646',
  ru: '\u0411\u0435\u0437 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u00b7 \u041e\u0442\u043c\u0435\u043d\u0430 \u0432 \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442',
  zh: '\u65e0\u9700\u4fe1\u7528\u5361 \u00b7 \u53ef\u968f\u65f6\u53d6\u6d88',
  es: 'Sin tarjeta de credito · Cancela cuando quieras',
  fr: 'Sans carte bancaire · Annulez a tout moment',
  de: 'Keine Kreditkarte erforderlich · Jederzeit kundbar',
  ar: 'بدون بطاقة ائتمان · يمكنك الالغاء في اي وقت',
  pt: 'Sem cartao de credito · Cancele a qualquer momento',
};

const Hero = ({ source, locale = 'en' }: HeroProps) => {
  const returnTo = marketingReturnTo(locale, '/');
  const hero = source?.hero || {};
  const heroCopy = heroCopyByLocale[locale] || heroCopyByLocale.en;
  const featureItems = featureItemsByLocale[locale] || featureItemsByLocale.en;
  const chips = chipItemsByLocale[locale] || chipItemsByLocale.en;

  return (
    <section className="relative z-20 overflow-hidden bg-[url('/images/ns-img-295.jpg')] bg-cover bg-top bg-no-repeat pt-[170px] pb-[110px] md:pt-[206px] md:pb-[150px]">
      <div className="absolute top-[10%] left-1/2 -z-10 mx-auto max-w-[1365px] -translate-x-1/2">
        <figure>
          <Image src={heroVectorImg} alt="hero" />
        </figure>
      </div>
      <div className="main-container">
        <div className="space-y-5 md:space-y-4 md:text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="mx-auto max-w-[380px] leading-[1.08] tracking-[-0.02em] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[776px]">
              <span className="block text-white">{heroCopy.line1 || hero.title?.line1 || heroCopyByLocale.en.line1}</span>
              <span className="hero-text-gradient hero-text-color-2 block pt-1 md:pt-1.5">{heroCopy.line2 || hero.title?.line2 || heroCopyByLocale.en.line2}</span>
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-accent/60 mx-auto max-w-[380px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
              {heroCopy.subtitle || hero.subtitle || heroCopyByLocale.en.subtitle}
            </p>
          </RevealAnimation>
          <ul className="flex flex-wrap items-center gap-5 sm:justify-center md:gap-9">
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
        </div>
        <ul className="mt-14 flex flex-col items-center justify-center gap-4 md:flex-row">
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
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={ANDROID_APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-[188px] items-center gap-3 rounded-[18px] border border-white/14 bg-white/10 px-4 py-3 text-left shadow-[0_10px_32px_rgba(3,8,20,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7fe36c]/45 hover:bg-white/14 hover:shadow-[0_14px_38px_rgba(8,20,45,0.28)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/92 text-secondary shadow-sm">
              <GooglePlayBadge />
            </span>
            <span className="block">
              <span className="block text-[11px] uppercase tracking-[0.18em] text-white/56">Android app</span>
              <span className="block text-base font-semibold text-white">Download APK</span>
            </span>
          </a>
          <div className="flex min-w-[188px] items-center gap-3 rounded-[18px] border border-dashed border-white/16 bg-white/6 px-4 py-3 text-left opacity-90 shadow-[0_8px_24px_rgba(3,8,20,0.16)] backdrop-blur-md">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/16 text-white shadow-sm">
              <AppleBadge />
            </span>
            <span className="block">
              <span className="block text-[11px] uppercase tracking-[0.18em] text-white/50">iPhone app</span>
              <span className="block text-base font-semibold text-white">Coming soon</span>
            </span>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-white/68">{noCardByLocale[locale] || noCardByLocale.en}</p>
        <div className="mt-4 space-y-2.5">
          <p className="text-center text-sm text-white/80">{bottomLineByLocale[locale] || bottomLineByLocale.en}</p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {chips.map((item) => (
              <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/82">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <RevealAnimation delay={0.8} instant>
          <HeroWorkflowHexShowcase locale={locale} />
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
