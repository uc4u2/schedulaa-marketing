const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "حقوق و منابع انسانی در یک هاب",
  title: "اجرای حقوق، صدور فیش و انتشار پرتال در چند دقیقه",
  body: "Schedulaa محاسبات حقوق، خروجی‌های انطباق و ابزارهای سلف‌سرویس کارکنان را یکپارچه می‌کند تا مالی و عملیات از یک داشبورد مشترک کار کنند.",
  primary: { label: "شروع رایگان", href: REGISTER_URL },
  secondary: { label: "تماس با ما", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "حقوق کانادا", href: "/payroll/canada" },
  { label: "حقوق آمریکا", href: "/payroll/usa" },
  { label: "مولد ROE", href: "/payroll/tools/roe" },
  { label: "مولد T4", href: "/payroll/tools/t4" },
  { label: "مولد W-2", href: "/payroll/tools/w2" },
  { label: "فیش حقوقی کارکنان", href: "/payslips" },
];

const buildBreadcrumbList = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.href,
  })),
});

const payrollBreadcrumb = (name, href) =>
  buildBreadcrumbList([
    { name: "Home", href: BASE_URL },
    { name: "Payroll", href: `${BASE_URL}/payroll` },
    ...(name && href ? [{ name, href }] : []),
  ]);

const overviewConfig = {
  meta: {
    title: "Payroll Software & Payslip Automation | Schedulaa",
    description:
      "Tie scheduling data, regional tax engines, and employee self-serve portals into one payroll workspace. Support Canada, USA, and statement exports from day one.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Unified Payroll & Scheduling Platform | Schedulaa",
      description:
        "Run payroll for Canada and the USA, generate ROE/T4/W-2 files, and publish payslips through the employee portal.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Schedulaa Payroll Overview",
      description: "Preview deductions, finalize slips, and keep employees informed across every region you support.",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Schedulaa Payroll",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Schedulaa unifies scheduling, HR, and payroll automation. Employees automatically use the correct Canadian or US compliance engine and can access payslips instantly.",
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      areaServed: ["CA", "US"],
    },
    buildBreadcrumbList([
      { name: "Home", href: BASE_URL },
      { name: "Payroll", href: `${BASE_URL}/payroll` },
    ]),
  ],
  hero: {
    badge: "زمان‌بندی + حقوق + مستندات",
    title: "پرداخت حقوق همگام با عملیات",
    subtitle:
      "ساعت‌های واقعی را از زمان‌بندی و تایم‌ترکینگ بگیرید، قوانین CRA یا IRS را اعمال کنید، انعام، پاداش، کمیسیون، پریمیوم شیفت، حق عضویت اتحادیه، کسورات قضایی و بازپرداخت‌های غیرمشمول مالیات را اضافه کنید و بدون خروج از Schedulaa فیش‌ها و فایل‌های ROE/T4/W-2 را تحویل دهید. فاینال کامل آمریکا فعلاً در AK, FL, NV, SD, TX, WA, WY, TN و NH فعال است و سایر ایالت‌ها در حالت پیش‌نمایش خام اجرا می‌شوند.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "پیش‌نمایش مدیریت حقوق Schedulaa",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "مدیریت حقوق" },
      { src: "/images/marketing/showcase/t4.png", alt: "تولید T4" },
      { src: "/images/marketing/showcase/roe.png", alt: "جریان ROE" },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "تولید W-2" },
    ],
    bullets: [
      "موتورهای منطقه‌ای برای کانادا (CPP/EI/BPA و معافیت‌های CPP/EI) و آمریکا (مالیات فدرال، FICA/Medicare و گزارش FUTA/SUTA کارفرما).",
      "آیتم‌های مشمول مالیات مثل پریمیوم شیفت، انعام، کمیسیون، پاداش و کسورات مثل حق عضویت اتحادیه و گارنیشمنت؛ خالص پرداخت با پیش‌نمایش منطبق می‌ماند.",
      "ایالت‌های پشتیبانی‌نشده آمریکا همچنان با هشدار واضح در حالت پیش‌نمایش خام در دسترس هستند و فاینال مسدود است.",
      "خروجی ROE، T4 (با Box 40/44)، W-2 و فیش حقوقی مطابق مستندات عمومی ما.",
      "پرتال سلف‌سرویس کارکنان به‌همراه اعلان‌های خودکار.",
    ],
    primaryCta: { label: "مشاهده فضای کاری حقوق", href: REGISTER_URL },
    secondaryCta: { label: "مشاهده مستندات", href: "/docs#payroll" },
    notice:
      "* فاینال کامل آمریکا فقط در AK, FL, NV, SD, TX, WA, WY, TN, NH فعال است. ** سایر ایالت‌ها فقط پیش‌نمایش خام دارند (فاینال مسدود). *** مالیات‌های محلی/شهری و برنامه‌های خاص (مثل WA PFML / WA Cares) خارج از سیستم مدیریت می‌شوند.",
  },
  featuresHeading: "پلتفرم",
  featuresTitle: "یک مکان برای محاسبات، فیش‌ها و به‌روزرسانی کارکنان",
  featuresIntro:
    "محتوای این بخش از صفحات Features، Docs و صفحات حقوق منطقه‌ای ما می‌آید تا کاربر و گوگل هر دو تصویر کاملی از /payroll ببینند.",
  features: [
    {
      icon: "timeline",
      label: "گردش کار",
      title: "پرداخت‌های حقوق متصل به عملیات",
      description:
        "پیش از محاسبه کسورات، ساعات واقعی، اضافه‌کاری و انعام را از مجموعه زمان‌بندی وارد کنید. موتور صحیح کشور برای هر کارمند خودکار اعمال می‌شود. وقتی یک دوره به payroll.ready یا payroll.finalized می‌رسد، رویدادهای Zapier می‌توانند مالی را مطلع کنند، خروجی‌ها را ارسال کنند یا فلوهای بعدی را اجرا کنند. تمام مراحل برای ممیزی مالی و HR ثبت می‌شوند، حتی تاریخچه بازنویسی هنگام فاینال مجدد.",
      link: "/features",
      linkLabel: "گردش در پلتفرم",
    },
    {
      icon: "compliance",
      label: "انطباق",
      title: "موتور مالیاتی کانادا و آمریکا",
      description:
        "پرداخت کارکنان بر اساس محل کار به‌صورت خودکار با منطق کانادایی CPP/EI/BPA (به‌همراه معافیت‌ها) یا مالیات فدرال آمریکا + FICA/Medicare انجام می‌شود. فاینال کامل آمریکا در AK, FL, NV, SD, TX, WA, WY, TN و NH پشتیبانی می‌شود و ایالت‌های دیگر با هشدار در حالت پیش‌نمایش خام باقی می‌مانند. هر دو موتور از پریمیوم شیفت، انعام، کمیسیون، پاداش، حق عضویت اتحادیه، گارنیشمنت و بازپرداخت غیرمشمول مالیات پشتیبانی می‌کنند.",
      link: "/payroll/canada",
      linkLabel: "مشاهده ماشین‌حساب‌های منطقه‌ای",
    },
    {
      icon: "retirement",
      label: "بازنشستگی سازمانی (401(k) آمریکا)",
      title: "کسورات 401(k)، سقف‌ها و هم‌ترازی با W-2",
      description:
        "محاسبه خودکار 401(k) و Roth 401(k) با سقف‌های سالانه، محدودیت مچ کارفرما و پایه‌های مزدی مرتبط. خروجی‌های بعد از فاینال کدهای W-2 Box 12D را نشان می‌دهند تا پرونده‌های پایان سال با داده حقوق منطبق باشند.",
      link: "/payroll/usa",
      linkLabel: "بررسی پوشش حقوق آمریکا",
    },
    {
      icon: "document",
      label: "اسناد",
      title: "ROE، T4، W-2 و فیش‌های حقوقی",
      description:
        "دوره حقوق را فاینال کنید، فیش‌ها را ایمیل بزنید، در پرتال فیش منتشر کنید و فایل‌های ROE/T4/W-2 مطابق استاندارد CRA و IRS بگیرید.",
      link: "/payslips",
      linkLabel: "باز کردن پرتال فیش حقوقی",
    },
  ],
  highlights: [
    {
      overline: "پوشش در یک نگاه",
      title: "موتورها برای کانادا (به‌جز کبک) و ایالت‌های پشتیبانی‌شده آمریکا",
      body:
        "دو موتور منطقه‌ای، یک فضای کاری. هر کارمند بر اساس محل کار خودکار از منطق درست CRA یا IRS/FICA/ایالتی استفاده می‌کند؛ بدون تنظیمات تکراری.",
      points: [
        "کانادا: مالیات فدرال و استانی، CPP/EI (با معافیت‌ها)، مرخصی/تعطیلات قانونی، فیلدهای T4 شامل 14/16/18/22/24/26/40/44 و ROE.",
        "آمریکا: مالیات فدرال، FICA/Medicare، گزارش FUTA/SUTA کارفرما و خروجی W-2. فاینال کامل در AK, FL, NV, SD, TX, WA, WY, TN, NH فعال است.",
        "مالیات‌های محلی/شهری/شهرداری در محل‌های لازم خارج از سیستم مدیریت می‌شوند.",
      ],
    },
    {
      overline: "فلوهای مستندسازی‌شده",
      title: "فرآیند حقوق مرحله‌به‌مرحله مطابق Docs",
      body:
        "پیش‌نمایش → اصلاح → فاینال → انتشار دقیقاً مطابق مستندات عمومی. مرحله پنهان ندارید و مدیر جدید می‌تواند همان پلی‌بوک تیم مالی را دنبال کند.",
      points: [
        "اسکرین‌شات همه مراحل پیش‌نمایش در Docs موجود است.",
        "لینک مستقیم به راهنماهای ROE/T4/W-2 (از جمله Box 40/44) برای بررسی عمیق‌تر.",
        "راهنمای درون‌برنامه‌ای مدیران را در مسیر درست نگه می‌دارد.",
      ],
    },
    {
      overline: "تجربه کارکنان",
      title: "فیش‌های سلف‌سرویس و اعلان‌ها",
      body:
        "پرتال برندشده + اعلان‌ها: کارکنان هر زمان فیش خود را دانلود می‌کنند؛ تیم مالی اعلان ایمیل، SMS یا درون‌برنامه را انتخاب می‌کند. آیتم‌های مشمول و غیرمشمول مالیات شفاف برچسب‌گذاری می‌شوند.",
      points: [
        "پرتال به‌صورت خودکار رنگ‌های برند سایت شما را می‌گیرد.",
        "دسترسی محدودشده برای هر کارمند امنیت داده را حفظ می‌کند.",
        "میانبرهای /payroll/tools برای خروجی‌های منطقه‌ای در دسترس است.",
      ],
    },
  ],
  stepsHeading: "نحوه اجرای حقوق در Schedulaa",
  stepsTitle: "از برنامه‌ریزی تا فیش نهایی در چند گام",
  stepsIntro: "مالیات‌های محلی و شهری خارج از سیستم مدیریت می‌شوند.",
  steps: [
    {
      title: "ورود ساعات و بررسی زمینه پرداخت",
      description:
        "ساعات را از زمان‌بندی بگیرید، پاداش، انعام، کمیسیون یا پریمیوم شیفت را همگام کنید و قبل از محاسبه با دوره‌های قبلی مقایسه کنید.",
    },
    {
      title: "اعمال کسورات با موتور صحیح",
      description:
        "قوانین درست کشور بر اساس محل کارمند خودکار اعمال می‌شود. منطق CRA یا IRS به‌همراه حقوق مرخصی، مزایا، حق عضویت اتحادیه، گارنیشمنت و بازپرداخت غیرمشمول مالیات فوراً اعمال می‌گردد.",
    },
    {
      title: "فاینال و خروجی‌گیری",
      description:
        "فیش حقوقی و خلاصه‌های CSV یا Excel را تولید کنید و فایل‌های ROE/T4/W-2 را برای بررسی ممیز به بخش ابزارها بفرستید.",
    },
    {
      title: "انتشار در پرتال",
      description:
        "کارکنان را مطلع کنید، فیش‌ها را در پرتال منتشر کنید و همه‌چیز را برای ممیزی‌های بعدی قابل جست‌وجو نگه دارید.",
    },
    {
      title: "کنترل نهایی آمادگی پایان سال",
      description:
        "تأیید کنید حق عضویت اتحادیه، مزایای مشمول مالیات و معافیت‌ها درست اعمال شده‌اند تا جمع‌های T4/W-2 با انتظار تیم مالی هم‌راستا باشد.",
    },
    {
      title: "تحویل به مالی و عملیات",
      description:
        "خروجی‌های تمیز را به حسابداری یا BI تحویل دهید با همان ارقام ناخالص، کسورات و خالصی که مدیران در پیش‌نمایش دیدند.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "پوشش و محدودیت‌ها",
      title: "مرزهای پشتیبانی فعلی آمریکا",
      body:
        "فاینال کامل آمریکا فعلاً فقط در AK, FL, NV, SD, TX, WA, WY, TN و NH پشتیبانی می‌شود. سایر ایالت‌ها با هشدار در حالت پیش‌نمایش خام هستند و فاینال مسدود است. FUTA/SUTA کارفرما جداگانه گزارش می‌شود و از خالص پرداخت کارمند کم نمی‌شود.",
      points: [
        "* ایالت‌های فاینال کامل: AK, FL, NV, SD, TX, WA, WY, TN, NH",
        "** ایالت‌های پشتیبانی‌نشده: فقط حالت پیش‌نمایش خام",
        "*** مالیات‌های محلی/شهری + WA PFML/WA Cares: مدیریت خارج از سیستم",
      ],
    },
    {
      icon: "analytics",
      label: "بینش",
      title: "مالی و منابع انسانی یک حقیقت مشترک می‌بینند",
      body:
        "تاریخچه حقوق، منطق کسورات و خروجی اسناد در داشبوردهای تحلیلی قابل مشاهده است تا مدیریت بدون ابزار BI جداگانه روندها را ببیند.",
      links: [
        { label: "مشاهده تور تحلیل", href: "/marketing/analytics-dashboard" },
        { label: "راهنمای حقوق", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "داده زمان آماده حقوق",
      title: "ساعات با استراحت، اضافه‌کاری و لاگ ممیزی وارد می‌شوند",
      body:
        "ورودی‌های زمانی تأییدشده با کسر استراحت‌های بدون حقوق، برچسب اضافه‌کاری و استراحت ازدست‌رفته و متادیتای IP/UA برای ممیزی ثبت می‌شوند. تیم مالی بدون اکسل خروجی CSV/PDF می‌گیرد یا با حسابداری همگام می‌کند.",
      points: [
        "Clock-out اجباری و اصلاحات قالب استراحت گروهی کاملاً ممیزی‌پذیر هستند.",
        "فلگ‌های OT و استراحت ازدست‌رفته با هر دوره پرداخت منتقل می‌شوند.",
        "لینک‌های امن پرتال، کارمند را روی دامنه محلی درست نگه می‌دارند.",
      ],
    },
  ],
  faqHeading: "سؤالات متداول",
  faqTitle: "پرسش‌های رایج درباره نمای کلی حقوق",
  faq: [
    {
      question: "آیا همه ایالت‌های آمریکا برای فاینال پشتیبانی می‌شوند؟",
      answer:
        "خیر. فاینال کامل فعلاً در AK, FL, NV, SD, TX, WA, WY, TN و NH پشتیبانی می‌شود. سایر ایالت‌ها در حالت پیش‌نمایش خام هستند و فاینال مسدود است.",
    },
    {
      question: "آیا /payroll با صفحات کانادا و آمریکا فرق دارد؟",
      answer:
        "این صفحه نمای کلی را یک‌جا برای کاربر و خزنده‌ها نشان می‌دهد و به ماشین‌حساب‌های کانادا/آمریکا و ابزارهای ROE/T4/W-2 برای جزئیات مقررات لینک می‌دهد.",
    },
    {
      question: "آیا دسترسی گوگل به محتوای حقوق مسدود است؟",
      answer:
        "خیر. robots.txt مسیر /payroll را مجاز کرده و sitemap همه URLهای منطقه‌ای را لیست می‌کند تا خزنده‌ها از طریق لینک‌های HTML به آن‌ها برسند.",
    },
    {
      question: "برای پرتال فیش حقوقی نیاز به ورود جداگانه است؟",
      answer:
        "خیر. کارکنان با همان حساب Schedulaa وارد می‌شوند. دسترسی بر اساس نقش کنترل می‌شود و مدیر هر زمان می‌تواند دسترسی را لغو کند.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "مستندات: پیش‌نمایش حقوق", href: "/docs#payroll" },
    { label: "مقایسه: Schedulaa در برابر Gusto", href: "/compare/gusto" },
    { label: "مقایسه: Schedulaa در برابر ADP", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "گام بعدی",
    title: "مسیر بعدی خود را انتخاب کنید",
    description: "کاوش حقوق را ادامه دهید؛ از قیمت‌گذاری تا ماشین‌حساب‌ها و مستندات کاربرمحور.",
    links: [
      {
        label: "مقایسه پلن‌های قیمت‌گذاری",
        description: "ببینید امکانات حقوق، زمان‌بندی و بازاریابی چطور کنار هم قرار می‌گیرند.",
        href: "/pricing",
        cta: "مشاهده قیمت‌گذاری",
      },
      {
        label: "شروع یک دوره حقوق کانادا",
        description: "CPP، EI و پوشش استانی را با جزئیات بررسی کنید.",
        href: "/payroll/canada",
        cta: "حقوق کانادا",
      },
      {
        label: "باز کردن مستندات",
        description: "جریان پیش‌نمایش حقوق را مرحله‌به‌مرحله در مستندات دنبال کنید.",
        href: "/docs#payroll",
        cta: "مطالعه مستندات",
      },
      {
        label: "دانلود قالب‌های ROE/T4/W-2",
        description: "مستقیم وارد ابزارهای حقوق و خروجی فرم‌های نهایی شوید.",
        href: "/payroll/tools/t4",
        cta: "مشاهده ابزارها",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Canada Payroll Calculator & Software (CPP, EI, BPA) | Schedulaa",
    description:
      "Run Canadian payroll with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches. Finalize payslips as PDF, CSV, or Excel and email employees automatically.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Canada Payroll Calculator for Small Businesses | Schedulaa",
      description:
        "Preview and finalize Canadian payroll with CPP, EI, provincial tax, bonuses, and tips. Export payslips, email staff, and provide a self-serve portal.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Canada Payroll Calculator for Small Businesses | Schedulaa",
      description:
        "Automate Canadian payroll with CPP, EI, provincial tax, vacation pay, and employee portals in one platform.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Canada Payroll",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "CAD",
      },
      featureList: [
        "CPP and EI calculations",
        "Federal and provincial income tax deductions",
        "Vacation pay automation",
        "Bonuses, tips, and commissions support",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service payslip portal",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Canada payroll", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "CPP, EI, BPA tracking",
    title: "Canada Payroll Calculator for Small Businesses",
    subtitle:
      "Calculate gross-to-net with CPP, EI, federal and provincial tax, vacation pay, bonuses, tips, and employer matches in one dashboard.",
    bullets: [
      "Preview deductions line by line before finalizing payroll.",
      "Automate BPA pro-rating, CPP/EI ceilings, and YTD breakouts.",
      "Export payslips as PDF, CSV, or Excel and email employees instantly.",
    ],
    primaryCta: { label: "Run Canadian payroll", href: REGISTER_URL },
    secondaryCta: { label: "Book a walkthrough", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Everything Canadian payroll teams expect",
  featuresIntro:
    "Schedulaa aligns with CRA guidance for CPP, EI, and federal/provincial tax brackets so you can trust every pay cycle.",
  features: [
    {
      icon: "compliance",
      label: "Compliance",
      title: "CPP, EI, and tax automation",
      description:
        "Calculate CPP, EI, and federal/provincial income tax with BPA pro-rating per employee. YTD ceilings and clawbacks are tracked automatically.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Finalize and export slips",
      description:
        "Finalize payroll and export slips as PDF, CSV, or Excel. Email documents to each employee directly from the pay run.",
      link: "/payslips",
      linkLabel: "See the payslip portal",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Preview, adjust, finalize",
      description:
        "Preview every deduction, edit overtime, bonuses, tips, commissions, and employer contributions, then finalize once amounts look right.",
    },
  ],
  highlights: [
    {
      overline: "Preview and finalize",
      title: "Line-item preview with BPA and YTD context",
      body:
        "See how federal, provincial, CPP, and EI deductions apply before committing a pay run. Every employee view includes BPA usage, vacation pay, and net pay totals.",
      points: [
        "Override hours, rates, and taxable benefits on the fly.",
        "Break out employer contributions alongside employee deductions.",
        "Keep an audit trail of each recalculation before finalizing.",
      ],
      links: [
        { label: "View payroll workflow", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payroll preview showing Canadian deductions",
      },
    },
    {
      overline: "Exports",
      title: "Deliver payslips and compliance files in one click",
      body:
        "Finalize a run, export slips as PDF, CSV, or Excel, and send them to staff instantly. Need year-end filings? Jump straight into T4 or ROE generation with prefilled data.",
      points: [
        "One-click email of finalized PDF slips to each employee.",
        "Batch downloads for accounting and year-end review.",
      ],
      links: [
        { label: "Generate T4 slips", href: "/payroll/tools/t4" },
        { label: "Create ROEs", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payroll export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Run a Canadian pay cycle in three steps",
  stepsIntro:
    "Schedulaa connects scheduling, timesheets, and payroll data so finance teams can close each pay period quickly.",
  steps: [
    {
      title: "Import hours or enter earnings",
      description:
        "Bring in hours from scheduling or upload CSV data. Add bonuses, tips, commissions, and employer contributions before calculating.",
    },
    {
      title: "Preview deductions and adjust",
      description:
        "Review CPP, EI, and tax amounts with BPA context. Override vacation pay, taxable benefits, or RRSP/401k matches as needed.",
    },
    {
      title: "Finalize and deliver payslips",
      description:
        "Lock the pay run, email PDF slips to employees, download CSV or Excel exports, and queue T4/ROE filings directly.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Employee access",
      title: "Self-serve payslip portal",
      body:
        "Employees can sign in to Schedulaa and download their finalized PDF payslips any time. Filters make it easy to locate past periods without asking payroll staff.",
      links: [{ label: "See the portal", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Year-end filings",
      title: "T4 and ROE tooling included",
      body:
        "Generate CRA-compliant T4 slips and XML files, plus Records of Employment with PDF and XML exports. Prefilled data comes straight from the latest pay runs.",
      links: [
        { label: "Open the T4 generator", href: "/payroll/tools/t4" },
        { label: "Open the ROE generator", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Canadian payroll questions",
  faqIntro: "Honest answers based on what Schedulaa already powers for Canadian teams.",
  faq: [
    {
      question: "Do you support Québec payroll?",
      answer:
        "Schedulaa's standard payroll flow covers every province except Québec. We maintain a dedicated Québec path to handle QPP and RQAP; contact us so we can review your setup and enable the correct configuration.",
    },
    {
      question: "Can employees download their own payslips?",
      answer:
        "Yes. Once you finalize payroll, Schedulaa can email PDF slips to employees and surfaces the same documents inside the Employee Payslip Portal for self-serve downloads.",
    },
    {
      question: "How are CPP and EI ceilings handled?",
      answer:
        "Schedulaa tracks CPP and EI year-to-date totals per employee. When annual maximums are reached, deductions automatically stop and employer portions adjust accordingly.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Note: Local provincial programs such as health premiums or workers' compensation remittances remain manager-configured outside the core payroll engine.",
};

const usaConfig = {
  meta: {
    title: "USA Payroll Calculator (Federal, FICA/Medicare, Supported State Finalize) | Schedulaa",
    description:
      "Calculate US payroll with federal tax, FICA, Medicare, and employer FUTA/SUTA reporting. Full finalize is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; other states run in raw preview mode.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "USA Payroll Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Preview US payroll in all states with federal tax, FICA, and Medicare. Finalize is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "USA Payroll Calculator for Teams with Multi-State Workers | Schedulaa",
      description:
        "Schedulaa automates US payroll calculations, payslip exports, and employee self-serve downloads in one workflow.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa USA Payroll",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Federal income tax withholding",
        "Supported-state full finalize (AK, FL, NV, SD, TX, WA, WY, TN, NH)",
        "Raw preview mode for unsupported states",
        "FICA and Medicare deductions",
        "Employer FUTA/SUTA reporting (not deducted from net pay)",
        "Bonuses, tips, and commissions support",
        "Payslip PDF, CSV, and Excel export",
        "Employee self-service portal",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("USA payroll", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Federal + FICA + employer unemployment",
    title: "USA Payroll Calculator with FICA and Medicare built in",
    subtitle:
      "Handle federal withholding, FICA, Medicare, bonuses, tips, commissions, and employer taxes in the same pay run. Full finalize is available in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states stay in raw preview mode.",
    bullets: [
      "Preview payroll in all U.S. states before finalize.",
      "Track employer FUTA/SUTA alongside employee withholding without reducing employee net pay.",
      "Unsupported states return raw mode warnings and finalize is blocked.",
      "Email PDF payslips and keep a downloadable archive for staff.",
    ],
    primaryCta: { label: "Run US payroll", href: REGISTER_URL },
    secondaryCta: { label: "See a live demo", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "US payroll covered from preview to payslip",
  featuresIntro:
    "Schedulaa keeps the deductions accurate while giving finance teams control over overrides and exceptions.",
  features: [
    {
      icon: "compliance",
      label: "Tax engine",
      title: "Federal withholding + supported-state finalize",
      description:
        "Automatically apply federal income tax and FICA/Medicare by employee work location. Full finalize is supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain available in raw preview with explicit warnings. Employer FUTA/SUTA is reported separately from employee deductions.",
    },
    {
      icon: "retirement",
      label: "Enterprise Retirement (U.S. 401(k))",
      title: "401(k) and Roth 401(k) with wage bases and caps",
      description:
        "Calculate 401(k) and Roth 401(k) deferrals with annual caps, employer match limits, and applicable wage bases. Post-finalization exports surface W-2 Box 12D codes so filings stay aligned with payroll data.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Multi-state previews",
      description:
        "Preview each employee's deductions, edit wages and taxable benefits, rerun in seconds, and keep payroll audit/overwrite history when a period is re-finalized. Unsupported states can preview in raw mode but cannot finalize.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Payslips and W-2 outputs",
      description:
        "Finalize payroll, export PDF, CSV, or Excel for accounting, and generate W-2 PDF and EFW2 files at year-end with prefilled data.",
      link: "/payroll/tools/w2",
      linkLabel: "Open the W-2 generator",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Transparent deductions before you finalize",
      body:
        "See how each tax and contribution will hit net pay, including federal brackets, FICA, and Medicare. Employer FUTA/SUTA is shown for reporting and does not reduce employee net pay. Override earnings and recalc on demand.",
      points: [
        "Highlight overtime, tips, bonuses, and commissions for every employee.",
        "Record employer 401(k) matches and insurance premiums next to payroll taxes.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payroll preview showing US deductions",
      },
    },
    {
      overline: "Delivery",
      title: "Finalize, export, and notify employees",
      body:
        "Once numbers look correct, finalize the run, email payslips, and archive exports for finance. Employees can log in to download past slips any time.",
      points: [
        "Generated slips stay available in the employee portal.",
        "Accounting teams can download CSV or Excel for journal entries.",
      ],
      links: [
        { label: "See employee portal", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Laptop with payroll export confirmation",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "How teams finish a US pay cycle in Schedulaa",
  stepsIntro:
    "Bring in hours, preview withholding, and finalize where supported without leaving the platform.",
  steps: [
    {
      title: "Import hours or salaries",
      description:
        "Pull data from scheduling or upload spreadsheets. Enter bonuses, tips, commissions, and employer contributions.",
    },
    {
      title: "Preview deductions per jurisdiction",
      description:
        "Review federal withholding, FICA, Medicare, and employer FUTA/SUTA. Unsupported states run in raw preview mode with warnings. Adjust wages or overrides and rerun the preview.",
    },
    {
      title: "Finalize and export",
      description:
        "Finalize payroll in AK, FL, NV, SD, TX, WA, WY, TN, and NH; email PDF payslips, download CSV/Excel, and prepare W-2s at year end.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "State support and local taxes",
      body:
        "Full U.S. finalize is currently supported only in AK, FL, NV, SD, TX, WA, WY, TN, and NH. Other states remain preview-only (raw mode). Local/city taxes and special programs (for example WA PFML / WA Cares) are not automated and should be handled externally.",
    },
    {
      icon: "document",
      label: "Year-end filing",
      title: "W-2 outputs included",
      body:
        "Generate six-copy IRS W-2 PDFs, flattened forms for e-delivery, and EFW2 text files. Multi-state wages are supported with per-state coding.",
      links: [{ label: "Generate W-2s", href: "/payroll/tools/w2" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "US payroll questions",
  faqIntro: "Answers based on the capabilities shipping in Schedulaa today.",
  faq: [
    {
      question: "Do you handle local or city income taxes?",
      answer:
        "Not yet. Schedulaa calculates federal withholding plus FICA/Medicare, and reports employer FUTA/SUTA. Local and city levies should be tracked separately and uploaded if needed.",
    },
    {
      question: "Can I run multi-state payroll?",
      answer:
        "Yes for preview. You can preview payroll in all U.S. states. Finalize is currently supported in AK, FL, NV, SD, TX, WA, WY, TN, and NH; unsupported states remain in raw preview mode.",
    },
    {
      question: "How do employees get their payslips?",
      answer:
        "Once you finalize payroll you can email PDF payslips directly to recipients. The same documents appear in the Employee Payslip Portal for self-serve downloads.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "* Full U.S. finalize: AK, FL, NV, SD, TX, WA, WY, TN, NH. ** Other states: raw preview only (finalize blocked). *** Employer FUTA/SUTA is reporting-only (not deducted from employee net pay). **** Local/city taxes and WA PFML / WA Cares are handled externally.",
};

const roeConfig = {
  meta: {
    title: "ROE Generator (Record of Employment) – Canada | Schedulaa",
    description:
      "Generate Canadian ROEs with prefilled insurable hours and earnings, approval workflow, and PDF/XML exports ready for Service Canada.",
    canonical: `${BASE_URL}/payroll/tools/roe`,
    og: {
      title: "ROE Generator with PDF & XML Export | Schedulaa",
      description:
        "Create, review, and export Records of Employment with prefilled data from your latest pay runs, plus approvals and audit trail.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    twitter: {
      card: "summary_large_image",
      title: "ROE Generator with PDF & XML Export | Schedulaa",
      description:
        "Schedulaa automates ROEs with prefilled insurable earnings, approvals, and CRA-compliant PDF/XML exports.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa ROE Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Prefill insurable hours and earnings from payroll",
        "Approval workflow with audit trail",
        "PDF and XML export for Service Canada",
        "Department and employee filters",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("ROE generator", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Record of Employment",
    title: "ROE Generator with PDF and XML export",
    subtitle:
      "Prefill insurable hours and earnings from your latest pay runs, review in-app, and export CRA-compliant PDF and XML files.",
    bullets: [
      "Prefill ROEs using finalized payroll data.",
      "Route submissions through approve or reject workflow.",
      "Export PDF or XML packages for Service Canada.",
    ],
    primaryCta: { label: "Generate an ROE", href: REGISTER_URL },
    secondaryCta: { label: "Talk to compliance", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Everything needed for compliant ROEs",
  featuresIntro: "Schedulaa keeps your ROE workflow fast, auditable, and ready for Service Canada.",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-complete with payroll data",
      description:
        "Pull insurable hours and earnings from the latest paystub for each employee, including vacation pay and separation pay.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Approve or reject submissions",
      description:
        "Route drafted ROEs through approvals. Capture comments and maintain an audit trail before exporting.",
    },
    {
      icon: "compliance",
      label: "Export",
      title: "PDF and XML packages",
      description:
        "Generate PDF copies for internal records and XML submissions compatible with Service Canada portals.",
    },
  ],
  highlights: [
    {
      overline: "Audit trail",
      title: "Track every change and approval",
      body:
        "Schedulaa keeps a detailed log for each ROE. See who prepared, approved, or rejected the form, with timestamps for compliance reviews.",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "ROE approval audit trail",
      },
    },
  ],
  stepsHeading: "Workflow",
  stepsTitle: "How the ROE generator works",
  steps: [
    {
      title: "Create from payroll history",
      description:
        "Choose an employee and pull their latest pay runs to prefill insurable hours, earnings, and separation details.",
    },
    {
      title: "Review and approve",
      description:
        "Validate the data, capture comments, and approve or reject. All changes are logged for auditing.",
    },
    {
      title: "Export and submit",
      description:
        "Download PDF for records or XML for Service Canada upload. Batch exports help you keep filings organized.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Related tools",
      title: "Need T4 slips too?",
      body:
        "Schedulaa links ROE data to year-end filings. Generate T4s from the same payroll data set and stay compliant without duplicating work.",
      links: [{ label: "Generate T4s", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "ROE questions",
  faq: [
    {
      question: "Which fields are prefilled automatically?",
      answer:
        "Schedulaa pulls insurable hours, earnings, vacation pay, and separation pay from the latest finalized pay runs so you only confirm details before exporting.",
    },
    {
      question: "Can I export XML for bulk upload?",
      answer:
        "Yes. The generator creates XML files ready for upload to the Service Canada portal, alongside PDF copies for internal records.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "T4 Generator – Canada Year-End Slips (PDF & XML) | Schedulaa",
    description:
      "Generate CRA-compliant T4 slips with PDF, XML, and ZIP packages. Prefill boxes from payroll runs and batch deliver to employees.",
    canonical: `${BASE_URL}/payroll/tools/t4`,
    og: {
      title: "T4 Generator with CRA XML Export | Schedulaa",
      description:
        "Create T4 slips, render PDF copies, export CRA XML, and bundle everything in a ZIP with a single workflow.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    twitter: {
      card: "summary_large_image",
      title: "T4 Generator with CRA XML Export | Schedulaa",
      description:
        "Schedulaa fills T4 boxes from payroll data, renders PDF, builds CRA XML, and bundles slips in one workflow.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa T4 Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Prefill CRA boxes from payroll",
        "Render PDF copies",
        "Generate CRA XML",
        "Batch ZIP download",
        "Delivery-ready slip packages",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("T4 generator", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Year-end payroll",
    title: "T4 Generator with PDF and CRA XML exports",
    subtitle:
      "Prefill CRA boxes from your Schedulaa payroll history, render PDF slips for employees, and export CRA XML with one click.",
    bullets: [
      "Prefill T4 boxes from finalized payroll data.",
      "Render employee-ready PDF slips.",
      "Export CRA XML and batch ZIP for filing.",
    ],
    primaryCta: { label: "Generate T4 slips", href: REGISTER_URL },
    secondaryCta: { label: "Get help with filings", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Year-end slips without manual data entry",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Auto-populated CRA boxes",
      description:
        "Schedulaa maps payroll earnings, deductions, and taxable benefits into the correct CRA boxes so you spend time reviewing, not retyping.",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "XML ready for CRA upload",
      description:
        "Produce CRA XML files that align with the latest specifications. Keep archives organized with batch ZIP exports.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Batch delivery",
      description:
        "Bundle PDF, XML, and CSV summaries in a single ZIP file for safe storage or delivery to your compliance team.",
    },
  ],
  highlights: [
    {
      overline: "Prefill accuracy",
      title: "CRA boxes filled straight from payroll",
      body:
        "Every T4 uses the same data you finalized in payroll. Review employment income, CPP/EI, taxable benefits, and pension adjustments before exporting.",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "T4 generator showing CRA boxes",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From payroll history to T4 packages",
  steps: [
    {
      title: "Select the tax year",
      description:
        "Choose the year you need slips for and let Schedulaa fetch the payroll history.",
    },
    {
      title: "Review prefilled data",
      description:
        "Confirm CRA boxes, employer information, and footnotes before exporting.",
    },
    {
      title: "Export PDF, XML, ZIP",
      description:
        "Download employee PDFs, CRA XML, and a ZIP archive to share with stakeholders or upload to the CRA portal.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "ROE generator included",
      body: "Need Records of Employment as well? Switch to the ROE generator without leaving your workflow.",
      links: [{ label: "Open ROE generator", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "T4 generator questions",
  faq: [
    {
      question: "Do you generate CRA XML automatically?",
      answer:
        "Yes. The T4 generator produces XML files ready for CRA submission along with PDF copies for employees.",
    },
    {
      question: "Can employees receive their T4 online?",
      answer:
        "After you generate T4 slips, you can distribute the PDF copies through the payslip portal or your preferred delivery channel.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "W-2 Generator – US Year-End (IRS Fillable PDF & EFW2) | Schedulaa",
    description:
      "Generate IRS W-2 forms with fillable multi-copy PDFs, flattened employee copies, and EFW2 text files ready for SSA submission.",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "W-2 Generator with IRS PDF and EFW2 Export | Schedulaa",
      description:
        "Prefill W-2 boxes from Schedulaa payroll data, render six-copy PDFs, flatten for e-delivery, and export EFW2 files.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    twitter: {
      card: "summary_large_image",
      title: "W-2 Generator with IRS PDF and EFW2 Export | Schedulaa",
      description:
        "Schedulaa fills W-2 boxes, renders IRS-compliant PDFs, and builds EFW2 text files for SSA reporting.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa W-2 Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Prefill IRS W-2 boxes from payroll",
        "Render six-copy IRS PDF",
        "Flatten employee copies",
        "Generate EFW2 text files",
        "Support for multi-state wages",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("W-2 generator", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Year-end payroll",
    title: "W-2 Generator with IRS PDF and EFW2 export",
    subtitle:
      "Fill every W-2 box automatically, render the official six-copy PDF, flatten employee copies, and generate EFW2 text in one workflow.",
    bullets: [
      "Prefill wages, withholding, and benefits from Schedulaa payroll.",
      "Render multi-copy IRS PDF forms and flattened employee versions.",
      "Generate SSA EFW2 text files for electronic submission.",
    ],
    primaryCta: { label: "Generate W-2 forms", href: REGISTER_URL },
    secondaryCta: { label: "Request onboarding", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Accurate W-2 filing without manual edits",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "W-2 boxes filled from payroll history",
      description:
        "Schedulaa maps wages, withholding, tips, and deferred compensation right into the correct W-2 boxes.",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "IRS PDF and EFW2 outputs",
      description:
        "Generate the official six-copy W-2 PDF, flattened employee copies for e-delivery, and EFW2 text files for SSA.",
    },
    {
      icon: "timeline",
      label: "Multi-state",
      title: "Support for multi-state wages",
      description:
        "Track wages across multiple states and ensure the correct locality codes are included in the exported forms.",
    },
  ],
  highlights: [
    {
      overline: "Ready for SSA",
      title: "EFW2 export in one click",
      body:
        "Generate the EFW2 text file using your finalized payroll data. Keep employer and employee copies synced without duplicate data entry.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "W-2 generator export options",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "From payroll to filed W-2s",
  steps: [
    {
      title: "Select tax year and employees",
      description:
        "Pick the tax year, filter the employees you need, and let Schedulaa prefill their data.",
    },
    {
      title: "Review and approve forms",
      description:
        "Confirm each box, adjust if necessary, and approve the batch prior to export.",
    },
    {
      title: "Export PDF and EFW2",
      description:
        "Download the six-copy PDF and flattened versions for employees, plus the EFW2 file for SSA submission.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected tools",
      title: "Need live payroll runs?",
      body:
        "W-2 forms are built on the same payroll engine that handles federal, state, FICA, and Medicare calculations.",
      links: [{ label: "Run US payroll", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "W-2 generator questions",
  faq: [
    {
      question: "Do you support multi-state wages?",
      answer:
        "Yes. W-2 exports include per-state wage totals and codes so employees with multiple work locations are supported.",
    },
    {
      question: "Can I deliver W-2s electronically?",
      answer:
        "Schedulaa renders flattened PDF copies you can distribute electronically alongside the employee portal.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const payslipConfig = {
  meta: {
    title: "Employee Payslip Portal – Download Payslips Online | Schedulaa",
    description:
      "Employees can access finalized payslips, filter by date, and download secure PDF copies any time. Managers control access and track downloads.",
    canonical: `${BASE_URL}/payslips`,
    og: {
      title: "Employee Payslip Portal | Schedulaa",
      description:
        "Give staff a secure portal to download finalized payslips, track history, and stay compliant with delivery requirements.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Employee Payslip Portal | Schedulaa",
      description:
        "Schedulaa powers a secure payslip portal so employees can download PDF slips without emailing payroll.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Payslip Portal",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Employee self-service payslip access",
        "PDF downloads with date filters",
        "Email notifications on new slips",
        "Manager controls and auditing",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Payslip portal", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Employee experience",
    title: "Employee payslip portal with instant downloads",
    subtitle:
      "Give staff a secure, branded portal where they can view and download finalized payslips any time without emailing payroll.",
    bullets: [
      "Search and filter payslips by date or payroll run.",
      "Download PDF copies that match the finalized export.",
      "Control access with role-based permissions.",
    ],
    primaryCta: { label: "Enable the portal", href: REGISTER_URL },
    secondaryCta: { label: "See payroll features", href: "/payroll/canada" },
  },
  featuresHeading: "Highlights",
  featuresTitle: "Keep employees informed without extra tickets",
  features: [
    {
      icon: "timeline",
      label: "Access",
      title: "All finalized payslips in one view",
      description:
        "Employees see their full payslip history with filters by pay period, employment type, or date range.",
    },
    {
      icon: "document",
      label: "Delivery",
      title: "Secure PDF downloads",
      description:
        "Every payslip matches the finalized PDF generated during payroll. Employees can download on desktop or mobile instantly.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Role-based permissions and logging",
      description:
        "Managers control who can access the portal and review logs for auditing. Disable access when employees leave.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Branded portal your team trusts",
      body:
        "Customize colors, logos, and links so the portal matches your company brand. Employees log in with their existing Schedulaa credentials.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa payslip portal dashboard",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "How the payslip portal works",
  steps: [
    {
      title: "Finalize payroll",
      description:
        "Run payroll in Schedulaa. Finalized PDF slips automatically sync to the payslip portal.",
    },
    {
      title: "Notify employees",
      description:
        "Send emails from payroll or notify staff through your HR channels that new slips are ready.",
    },
    {
      title: "Employees download securely",
      description:
        "Employees log in, filter by pay period, and download the PDF copies whenever they need them.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected",
      title: "Works with Canadian and US payroll",
      body:
        "The payslip portal receives finalized slips from both Canadian and US payroll runs, so multinational teams share the same experience.",
      links: [{ label: "Run a payroll preview", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Payslip portal questions",
  faq: [
    {
      question: "Do employees need a separate login?",
      answer:
        "No. Employees use their existing Schedulaa login. Access is controlled by manager permissions and can be revoked any time.",
    },
    {
      question: "Can we email payslips as well?",
      answer:
        "Yes. When you finalize payroll you can email PDF copies to each employee and still keep the portal enabled as a backup.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

export const payrollPages = {
  overview: overviewConfig,
  canada: canadaConfig,
  usa: usaConfig,
  roe: roeConfig,
  t4: t4Config,
  w2: w2Config,
  payslips: payslipConfig,
};
