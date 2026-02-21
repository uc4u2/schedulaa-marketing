'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buildAppUrl, marketingReturnTo } from '@/utils/appLinks';
import { detectLocaleFromPath, withLocalePath } from '@/utils/locale';

const DEMO_EMAIL = process.env.NEXT_PUBLIC_DEMO_EMAIL || 'testschedulaa@gmail.com';
const DEMO_PASSWORD = process.env.NEXT_PUBLIC_DEMO_PASSWORD || 'Test!12345';
const DEMO_OTP = process.env.NEXT_PUBLIC_DEMO_OTP || '0000';
const DEMO_ENV = process.env.NEXT_PUBLIC_DEMO_ENV || 'Staging';

const DEMO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/manager-demo.mp4';
const DEMO_VIDEO_BUILDER_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_BUILDER ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/website-builder-demo.mp4';
const DEMO_VIDEO_TIME_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_TIME ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/schedulaa-time-tracking.mp4';
const DEMO_VIDEO_SHIFT_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_SHIFT ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/Schedulaa.shift.management.mp4';
const DEMO_VIDEO_PAYROLL_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_PAYROLL ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/Schedulaa.Payroll.Under1Min.mp4';
const DEMO_VIDEO_SERVICE_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_SERVICE ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/Schedulaa.Service.Management.mp4';
const DEMO_VIDEO_INVITES_SRC =
  process.env.NEXT_PUBLIC_DEMO_VIDEO_INVITES ||
  'https://pub-6cbed1dd8177417b96763fc4eb930d09.r2.dev/assets/videos/invitations.schedulaa.mp4';

const demoVideos = [
  {
    title: 'Watch the 9-minute walkthrough',
    description: '',
    src: DEMO_VIDEO_SRC,
  },
  {
    title: 'Edit the website step-by-step',
    description: 'Short guide to using the Visual Site Builder: change themes, edit sections, and publish.',
    src: DEMO_VIDEO_BUILDER_SRC,
  },
  {
    title: 'Clock in/out & approvals',
    description: 'How employees clock in/out and how managers review, approve, or adjust punches.',
    src: DEMO_VIDEO_TIME_SRC,
  },
  {
    title: 'Shift management overview',
    description: 'Assign shifts, review coverage, and manage the roster in a single view.',
    src: DEMO_VIDEO_SHIFT_SRC,
  },
  {
    title: 'Payroll in under a minute',
    description: 'Generate, finalize, and send payroll to employees in about a minute.',
    src: DEMO_VIDEO_PAYROLL_SRC,
  },
  {
    title: 'Service management + client booking',
    description: 'Add services, assign them to artists, and let clients book (Stripe off for demo checkout).',
    src: DEMO_VIDEO_SERVICE_SRC,
  },
  {
    title: 'Send invitations in minutes',
    description:
      'Send client/candidate invitations with the right templates, self-booking, and auto-confirmations.',
    src: DEMO_VIDEO_INVITES_SRC,
  },
];

export default function DemoLandingPage() {
  const pathname = usePathname() || '/';
  const locale = detectLocaleFromPath(pathname);
  const returnTo = marketingReturnTo(locale, '/demo');
  const loginHref = buildAppUrl('/login', { returnTo });
  const contactHref = withLocalePath('/contact', locale);
  const demoDescByLocale: Record<string, string> = {
    fa: 'ويديو کوتاه براي نمايش اين قابليت در محيط دمو.',
    ru: 'Короткое видео с демонстрацией этого сценария.',
    zh: '该视频演示此场景在系统中的操作方式。',
    es: 'Video corto para mostrar este flujo dentro de la plataforma.',
    fr: 'Courte video pour presenter ce flux dans la plateforme.',
    de: 'Kurzes Video zur Darstellung dieses Ablaufs in der Plattform.',
    ar: 'فيديو قصير يوضح هذا السيناريو داخل المنصة.',
    pt: 'Video curto para demonstrar este fluxo na plataforma.',
  };

  const copyByLocale: Record<string, any> = {
    fa: {
      badge: `آزمايش دمو - ${DEMO_ENV}`,
      title: 'داشبورد مدير Schedulaa را در چند دقيقه تجربه کنيد',
      subtitle: 'با ورود مشترک دمو، زمان بندي، حضور و غياب، حقوق، اتوماسيون و يکپارچه سازي را بررسي کنيد.',
      login: 'ورود به حساب',
      talk: 'گفتگو با تيم اجرا',
      credentials: 'اطلاعات ورود دمو',
      quickStart: 'شروع سريع 4 مرحله اي',
      step1: '1. در /login وارد شويد',
      step1d: 'ايميل و رمز عبور دمو را وارد کنيد.',
      step2: `2. کد OTP ${DEMO_OTP} را وارد کنيد`,
      step2d: 'در محيط دمو با اين کد به صورت سريع وارد مي شويد.',
      step3: '3. گردش کار مدير را بررسي کنيد',
      step3d: 'بخش هاي Scheduling، Payroll، Websites و Analytics را ببينيد.',
      step4: '4. Settings > Zapier و Payroll > Preview را باز کنيد',
      step4d: 'رويدادهاي تستي و نمونه خروجي ها را بررسي کنيد.',
      videoFallback: 'مرورگر شما از پخش ويديو پشتيباني نمي کند.',
      tryDemo: 'دمو را امتحان کنيد',
      videos: {
        'Watch the 9-minute walkthrough': 'ويديو راهنماي 9 دقيقه اي',
        'Edit the website step-by-step': 'ويرايش گام به گام وب سايت',
        'Clock in/out & approvals': 'ورود/خروج و تاييد حضور',
        'Shift management overview': 'نماي کلي مديريت شيفت',
        'Payroll in under a minute': 'حقوق در کمتر از يک دقيقه',
        'Service management + client booking': 'مديريت خدمات و رزرو مشتري',
        'Send invitations in minutes': 'ارسال دعوت نامه در چند دقيقه',
      },
    },
    ru: {
      badge: `Тест-драйв - ${DEMO_ENV}`,
      title: 'Откройте панель менеджера Schedulaa за несколько минут',
      subtitle: 'Используйте общий демо-вход для проверки расписания, payroll и интеграций.',
      login: 'Перейти ко входу',
      talk: 'Связаться с командой внедрения',
      credentials: 'Демо-данные',
      quickStart: 'Быстрый старт: 4 шага',
      step1: '1. Войдите через /login',
      step1d: 'Введите демо email и пароль.',
      step2: `2. Используйте код OTP ${DEMO_OTP}`,
      step2d: 'Для демо-входа этот код работает сразу.',
      step3: '3. Проверьте процессы менеджера',
      step3d: 'Откройте Scheduling, Payroll, Websites и Analytics.',
      step4: '4. Откройте Settings > Zapier и Payroll > Preview',
      step4d: 'Проверьте тестовые события и экспортные данные.',
      videoFallback: 'Ваш браузер не поддерживает видео.',
      tryDemo: 'Попробовать демо',
      videos: {},
    },
    zh: {
      badge: `试用演示 - ${DEMO_ENV}`,
      title: '几分钟体验 Schedulaa 管理后台',
      subtitle: '使用共享演示账号快速查看排班、工时、薪资与集成流程。',
      login: '前往登录',
      talk: '联系实施团队',
      credentials: '演示账号信息',
      quickStart: '4 步快速开始',
      step1: '1. 通过 /login 登录',
      step1d: '输入上方演示邮箱与密码。',
      step2: `2. 输入 OTP 代码 ${DEMO_OTP}`,
      step2d: '演示环境可直接使用固定代码登录。',
      step3: '3. 查看经理端核心流程',
      step3d: '打开 Scheduling、Payroll、Websites、Analytics。',
      step4: '4. 打开 Settings > Zapier 与 Payroll > Preview',
      step4d: '触发测试事件并查看导出映射。',
      videoFallback: '当前浏览器不支持视频标签。',
      tryDemo: '立即体验',
      videos: {},
    },
    es: { badge: `Prueba - ${DEMO_ENV}`, title: 'Explora el panel de manager en minutos', subtitle: 'Usa el acceso demo para revisar agenda, nomina, cumplimiento e integraciones.', login: 'Ir a login', talk: 'Hablar con el equipo', credentials: 'Credenciales demo', quickStart: 'Inicio rapido de 4 pasos', step1: '1. Inicia sesion en /login', step1d: 'Usa el email y password demo.', step2: `2. Usa el codigo OTP ${DEMO_OTP}`, step2d: 'El entorno demo permite acceso inmediato.', step3: '3. Explora flujos de manager', step3d: 'Abre Scheduling, Payroll, Websites y Analytics.', step4: '4. Revisa Settings > Zapier y Payroll > Preview', step4d: 'Valida eventos de prueba y exportaciones.', videoFallback: 'Tu navegador no soporta video.', tryDemo: 'Probar demo', videos: {} },
    fr: { badge: `Test drive - ${DEMO_ENV}`, title: 'Decouvrez le tableau manager Schedulaa en quelques minutes', subtitle: 'Utilisez le compte demo partage pour verifier planning, paie, automatisation et integrations.', login: 'Aller a la connexion', talk: "Parler a l'equipe", credentials: 'Identifiants demo', quickStart: 'Demarrage rapide en 4 etapes', step1: '1. Connectez-vous via /login', step1d: 'Saisissez email et mot de passe demo.', step2: `2. Utilisez le code OTP ${DEMO_OTP}`, step2d: 'Le code fixe fonctionne en environnement demo.', step3: '3. Explorez les workflows manager', step3d: 'Ouvrez Scheduling, Payroll, Websites et Analytics.', step4: '4. Ouvrez Settings > Zapier et Payroll > Preview', step4d: 'Testez les evenements et exports.', videoFallback: "Votre navigateur ne prend pas en charge la video.", tryDemo: 'Essayer la demo', videos: {} },
    de: { badge: `Testlauf - ${DEMO_ENV}`, title: 'Manager-Dashboard in wenigen Minuten testen', subtitle: 'Mit dem Demo-Login Planung, Abrechnung, Compliance und Integrationen pruefen.', login: 'Zum Login', talk: 'Mit dem Team sprechen', credentials: 'Demo-Zugangsdaten', quickStart: '4-Schritte-Start', step1: '1. Melden Sie sich unter /login an', step1d: 'Demo-E-Mail und Passwort eingeben.', step2: `2. OTP-Code ${DEMO_OTP} verwenden`, step2d: 'Im Demo-System funktioniert der feste Code direkt.', step3: '3. Manager-Workflows pruefen', step3d: 'Scheduling, Payroll, Websites und Analytics oeffnen.', step4: '4. Settings > Zapier und Payroll > Preview aufrufen', step4d: 'Testevents und Exporte pruefen.', videoFallback: 'Ihr Browser unterstuetzt kein Video.', tryDemo: 'Demo testen', videos: {} },
    ar: { badge: `تجربة - ${DEMO_ENV}`, title: 'اختبر لوحة مدير Schedulaa خلال دقائق', subtitle: 'استخدم بيانات الدخول التجريبية لمراجعة الجدولة والرواتب والامتثال والتكاملات.', login: 'الذهاب الى تسجيل الدخول', talk: 'التحدث مع فريق التنفيذ', credentials: 'بيانات دخول التجربة', quickStart: 'بداية سريعة من 4 خطوات', step1: '1. سجل الدخول عبر /login', step1d: 'ادخل البريد وكلمة المرور الخاصة بالتجربة.', step2: `2. استخدم رمز OTP ${DEMO_OTP}`, step2d: 'في بيئة التجربة يمكنك الدخول فورا بهذا الرمز.', step3: '3. استكشف مهام المدير', step3d: 'افتح Scheduling وPayroll وWebsites وAnalytics.', step4: '4. افتح Settings > Zapier و Payroll > Preview', step4d: 'اختبر الاحداث وراجع مخرجات التصدير.', videoFallback: 'متصفحك لا يدعم تشغيل الفيديو.', tryDemo: 'جرب الديمو', videos: {} },
    pt: { badge: `Teste - ${DEMO_ENV}`, title: 'Experimente o painel do gestor em minutos', subtitle: 'Use o login demo para validar agenda, folha, compliance e integracoes.', login: 'Ir para login', talk: 'Falar com a equipe', credentials: 'Credenciais demo', quickStart: 'Inicio rapido em 4 passos', step1: '1. Acesse /login', step1d: 'Informe email e senha demo.', step2: `2. Use o codigo OTP ${DEMO_OTP}`, step2d: 'No ambiente demo, o codigo fixo entra na hora.', step3: '3. Explore os fluxos do gestor', step3d: 'Abra Scheduling, Payroll, Websites e Analytics.', step4: '4. Abra Settings > Zapier e Payroll > Preview', step4d: 'Teste eventos e confira exportacoes.', videoFallback: 'Seu navegador nao suporta video.', tryDemo: 'Testar demo', videos: {} },
  };
  const copy = copyByLocale[locale] || {
    badge: `Test drive - ${DEMO_ENV}`,
    title: 'Experience the Schedulaa manager dashboard in minutes',
    subtitle:
      'Use the shared staging login to explore scheduling, time tracking, payroll, compliance, Zapier automations, and accounting exports end-to-end.',
    login: 'Go to login',
    talk: 'Talk to our rollout team',
    credentials: 'Demo credentials',
    quickStart: '4-step quick start',
    step1: '1. Login at app.schedulaa.com/login',
    step1d: 'Enter the demo email + password above.',
    step2: `2. Use OTP code ${DEMO_OTP}`,
    step2d: 'The test inbox is allowlisted in staging so the fixed code signs you in instantly.',
    step3: '3. Explore manager workflows',
    step3d: 'Open Scheduling, Payroll, Websites, and Analytics to see connected data.',
    step4: '4. Visit Settings > Zapier and Payroll > Preview',
    step4d: 'Trigger test events, inspect Zapier payload samples, and review how finalized payroll exports map to QuickBooks and Xero.',
    videoFallback: 'Your browser does not support the video tag.',
    tryDemo: 'Try the demo',
    videos: {},
  };

  return (
    <section className="relative pt-[110px] pb-18 md:pt-[150px] md:pb-24">
      <div className="main-container space-y-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="badge badge-cyan mb-4">{copy.badge}</span>
          <h1 className="mb-4">{copy.title}</h1>
          <p className="mx-auto mb-6 max-w-[800px]">{copy.subtitle}</p>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <a href={loginHref} className="btn btn-primary btn-md">
              {copy.login}
            </a>
            <Link href={contactHref} className="btn btn-white btn-md dark:btn-white-dark">
              {copy.talk}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 lg:col-span-2">
            <h2 className="mb-4">{copy.credentials}</h2>
            <ul className="space-y-4">
              <li>
                <p className="text-tagline-2 uppercase">Email</p>
                <div className="rounded-xl border border-stroke-2 px-4 py-2 dark:border-stroke-7">{DEMO_EMAIL}</div>
              </li>
              <li>
                <p className="text-tagline-2 uppercase">Password</p>
                <div className="rounded-xl border border-stroke-2 px-4 py-2 dark:border-stroke-7">{DEMO_PASSWORD}</div>
              </li>
              <li>
                <p className="text-tagline-2 uppercase">OTP code</p>
                <div className="rounded-xl border border-stroke-2 px-4 py-2 dark:border-stroke-7">{DEMO_OTP}</div>
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8 lg:col-span-3">
            <h2 className="mb-4">{copy.quickStart}</h2>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold">{copy.step1}</p>
                <p className="text-tagline-2">{copy.step1d}</p>
              </li>
              <li>
                <p className="font-semibold">{copy.step2}</p>
                <p className="text-tagline-2">{copy.step2d}</p>
              </li>
              <li>
                <p className="font-semibold">{copy.step3}</p>
                <p className="text-tagline-2">{copy.step3d}</p>
              </li>
              <li>
                <p className="font-semibold">{copy.step4}</p>
                <p className="text-tagline-2">{copy.step4d}</p>
              </li>
            </ul>
          </article>
        </div>

        <article className="rounded-3xl border border-stroke-2 bg-white p-6 dark:border-stroke-7 dark:bg-background-8">
          <div className="space-y-8">
            {demoVideos.map((video) => (
              <div key={video.title} className="space-y-3">
                <h3>{copy.videos[video.title] || video.title}</h3>
                {video.description ? (
                  <p className="text-tagline-2">{demoDescByLocale[locale] || video.description}</p>
                ) : null}
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-2xl border border-stroke-2 dark:border-stroke-7"
                  src={video.src}
                >
                  {copy.videoFallback}
                </video>
              </div>
            ))}
          </div>
        </article>
      </div>

      <a
        href={loginHref}
        className="btn btn-accent btn-md fixed right-4 bottom-5 z-50 md:right-8 md:bottom-8"
      >
        {copy.tryDemo}
      </a>
    </section>
  );
}
