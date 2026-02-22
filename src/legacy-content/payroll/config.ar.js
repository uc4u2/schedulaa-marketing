const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  body: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  primary: { label: "ابدأ مجانا", href: REGISTER_URL },
  secondary: { label: "تحدث معنا", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "الرواتب", href: "/payroll/canada" },
  { label: "الرواتب", href: "/payroll/usa" },
  { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/tools/roe" },
  { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/tools/t4" },
  { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/tools/w2" },
  { label: "الموظف", href: "/payslips" },
];

const buildBreadcrumbList = (items) => ({
  "@context": "https://schema.org",
  "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  itemListElement: items.map((item, index) => ({
    "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    position: index + 1,
    name: item.name,
    item: item.href,
  })),
});

const payrollBreadcrumb = (name, href) =>
  buildBreadcrumbList([
    { name: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", href: BASE_URL },
    { name: "الرواتب", href: `${BASE_URL}/payroll` },
    ...(name && href ? [{ name, href }] : []),
  ]);

const overviewConfig = {
  meta: {
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      provider: {
        "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        name: "Schedulaa",
        url: BASE_URL,
      },
      offers: {
        "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        price: "0.00",
        priceCurrency: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      },
      areaServed: ["CA", "US"],
    },
    buildBreadcrumbList([
      { name: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", href: BASE_URL },
      { name: "الرواتب", href: `${BASE_URL}/payroll` },
    ]),
  ],
  hero: {
    badge: "الجدولة + الرواتب +",
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "الرواتب" },
      { src: "/images/marketing/showcase/t4.png", alt: "T4" },
      { src: "/images/marketing/showcase/roe.png", alt: "ROE" },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "W-2" },
    ],
    bullets: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "اطّلع على التفاصيل",
      "اطّلع على التفاصيل",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "عرض الرواتب", href: REGISTER_URL },
    secondaryCta: { label: "اقرأ الوثائق", href: "/docs#payroll" },
    notice:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  },
  featuresHeading: "المنصة",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  featuresIntro:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "سير العمل",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/features",
      linkLabel: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "الامتثال",
      title: "&",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/payroll/canada",
      linkLabel: "عرض",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/payroll/usa",
      linkLabel: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/payslips",
      linkLabel: "فتح البوابة",
    },
  ],
  highlights: [
    {
      overline: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
    },
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "اطّلع على التفاصيل",
        "اطّلع على التفاصيل",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
    },
    {
      overline: "الموظف",
      title: "الاشعارات",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
    },
  ],
  stepsHeading: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  stepsTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  stepsIntro: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  steps: [
    {
      title: "&",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "الاعتماد النهائي",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "&",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  callouts: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "&",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "اطّلع على التفاصيل",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
    },
    {
      icon: "التحليلات",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      links: [
        { label: "فتح التحليلات", href: "/marketing/analytics-dashboard" },
        { label: "الرواتب", href: "/docs#payroll" },
      ],
    },
    {
      icon: "الجدولة",
      label: "الرواتب",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "الرواتب الاسئلة",
  faq: [
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "الرواتب المعاينة", href: "/docs#payroll" },
    { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/compare/gusto" },
    { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "الخطوات التالية",
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    links: [
      {
        label: "قارن الاسعار",
        description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        href: "/pricing",
        cta: "عرض الاسعار",
      },
      {
        label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        href: "/payroll/canada",
        cta: "الرواتب",
      },
      {
        label: "افتح الوثائق",
        description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        href: "/docs#payroll",
        cta: "اقرأ الوثائق",
      },
      {
        label: "ROE/T4/W-2",
        description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        href: "/payroll/tools/t4",
        cta: "عرض",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      offers: {
        "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        price: "0.00",
        priceCurrency: "CAD",
      },
      featureList: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    title: "الرواتب الحاسبة",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "الرواتب", href: REGISTER_URL },
    secondaryCta: { label: "a", href: CONTACT_URL },
  },
  featuresHeading: "الميزات",
  featuresTitle: "الرواتب الفرق",
  featuresIntro:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "الامتثال",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الاعتماد النهائي",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/payslips",
      linkLabel: "عرض البوابة",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "سير العمل",
      title: "المعاينة, , الاعتماد النهائي",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  highlights: [
    {
      overline: "المعاينة الاعتماد النهائي",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      links: [
        { label: "الرواتب", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      },
    },
    {
      overline: "عمليات التصدير",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "هل يدعم هذا الخيار احتياجات فريقك؟",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "اطّلع على التفاصيل",
      ],
      links: [
        { label: "T4", href: "/payroll/tools/t4" },
        { label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      },
    },
  ],
  stepsHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  stepsTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  stepsIntro:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  steps: [
    {
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "المعاينة",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "الاعتماد النهائي",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  callouts: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "الموظف",
      title: "البوابة",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      links: [{ label: "عرض البوابة", href: "/payslips" }],
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "T4 ROE",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      links: [
        { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/tools/t4" },
        { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "الرواتب الاسئلة",
  faqIntro: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  faq: [
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
};

const usaConfig = {
  meta: {
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "__",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      offers: {
        "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        price: "0.00",
        priceCurrency: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      },
      featureList: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "اطّلع على التفاصيل",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "الميزات",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  featuresIntro:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "+ الاعتماد النهائي",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "سير العمل",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "عمليات التصدير",
      title: "W-2",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/payroll/tools/w2",
      linkLabel: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "المعاينة",
      title: "الاعتماد النهائي",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      },
    },
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الاعتماد النهائي, , الموظفون",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      links: [
        { label: "عرض الموظف البوابة", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "الرواتب",
      },
    },
  ],
  stepsHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  stepsTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  stepsIntro:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  steps: [
    {
      title: "or",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "المعاينة",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "الاعتماد النهائي",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  callouts: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الدعم",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "W-2",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      links: [{ label: "W-2s", href: "/payroll/tools/w2" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  faqIntro: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  faq: [
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
};

const roeConfig = {
  meta: {
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/payroll/tools/roe`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "يوضح هذا القسم الميزة بشكل عملي داخل المنصة مع تجربة استخدام واضحة.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "of",
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "يوضح هذا القسم الميزة بشكل عملي داخل المنصة مع تجربة استخدام واضحة.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "to", href: CONTACT_URL },
  },
  featuresHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  featuresIntro: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الرواتب",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "سير العمل",
      title: "or",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "ROE",
      },
    },
  ],
  stepsHeading: "سير العمل",
  stepsTitle: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  steps: [
    {
      title: "الرواتب",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  callouts: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      links: [{ label: "T4s", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  faq: [
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/payroll/tools/t4`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "اطّلع على التفاصيل",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "الرواتب",
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "اطّلع على التفاصيل",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "T4", href: REGISTER_URL },
    secondaryCta: { label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", href: CONTACT_URL },
  },
  featuresHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "CRA",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "الامتثال",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "سير العمل",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      },
    },
  ],
  stepsHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  stepsTitle: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  steps: [
    {
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  callouts: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      body: "هل يدعم هذا الخيار احتياجات فريقك؟",
      links: [{ label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  faq: [
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0.00", priceCurrency: "يوضح هذا القسم تفاصيل الميزة داخل المنصة." },
      featureList: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "الرواتب",
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "W-2", href: REGISTER_URL },
    secondaryCta: { label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", href: CONTACT_URL },
  },
  featuresHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "الامتثال",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الدعم",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      },
    },
  ],
  stepsHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  stepsTitle: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  steps: [
    {
      title: "الموظفون",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  callouts: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الرواتب ?",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      links: [{ label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  faq: [
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const payslipConfig = {
  meta: {
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/payslips`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0.00", priceCurrency: "يوضح هذا القسم تفاصيل الميزة داخل المنصة." },
      featureList: [
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "الموظف",
    title: "الموظف البوابة",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "البوابة", href: REGISTER_URL },
    secondaryCta: { label: "عرض الرواتب ميزات", href: "/payroll/canada" },
  },
  featuresHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "PDF",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "البوابة الفريق",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      },
    },
  ],
  stepsHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  stepsTitle: "كيف البوابة",
  steps: [
    {
      title: "الاعتماد النهائي الرواتب",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "الموظفون",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      title: "الموظفون",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  callouts: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      links: [{ label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "البوابة الاسئلة",
  faq: [
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
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
