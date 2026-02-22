const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "Paie + RH dans une seule plateforme",
  title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  body: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  primary: { label: "Commencer gratuitement", href: REGISTER_URL },
  secondary: { label: "En savoir plus", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/canada" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/usa" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/tools/roe" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/tools/t4" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/tools/w2" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payslips" },
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
    title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    description:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "En savoir plus",
      description: "En savoir plus",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
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
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "En savoir plus",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "Cette section explique clairement la fonctionnalite dans Schedulaa." },
      { src: "/images/marketing/showcase/t4.png", alt: "Cette section explique clairement la fonctionnalite dans Schedulaa." },
      { src: "/images/marketing/showcase/roe.png", alt: "Cette section explique clairement la fonctionnalite dans Schedulaa." },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "Cette section explique clairement la fonctionnalite dans Schedulaa." },
    ],
    bullets: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "En savoir plus",
      "En savoir plus",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "En savoir plus", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: "/docs#payroll" },
    notice:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  },
  featuresHeading: "Platform",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  featuresIntro:
    "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  features: [
    {
      icon: "timeline",
      label: "Workflow",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      link: "/features",
      linkLabel: "En savoir plus",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      link: "/payroll/canada",
      linkLabel: "En savoir plus",
    },
    {
      icon: "retirement",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      link: "/payroll/usa",
      linkLabel: "En savoir plus",
    },
    {
      icon: "document",
      label: "Documents",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      link: "/payslips",
      linkLabel: "En savoir plus",
    },
  ],
  highlights: [
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
    },
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      points: [
        "En savoir plus",
        "En savoir plus",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
    },
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
    },
  ],
  stepsHeading: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  stepsTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  stepsIntro: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  steps: [
    {
      title: "En savoir plus",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "En savoir plus",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      description:
        "En savoir plus",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "En savoir plus",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      links: [
        { label: "En savoir plus", href: "/marketing/analytics-dashboard" },
        { label: "En savoir plus", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "En savoir plus",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      points: [
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "En savoir plus",
    },
    {
      question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      answer:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "En savoir plus", href: "/docs#payroll" },
    { label: "En savoir plus", href: "/compare/gusto" },
    { label: "En savoir plus", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "Prochaines etapes",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    description: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    links: [
      {
        label: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        description: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        href: "/pricing",
        cta: "En savoir plus",
      },
      {
        label: "En savoir plus",
        description: "En savoir plus",
        href: "/payroll/canada",
        cta: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
      {
        label: "En savoir plus",
        description: "En savoir plus",
        href: "/docs#payroll",
        cta: "Lire la documentation",
      },
      {
        label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        href: "/payroll/tools/t4",
        cta: "En savoir plus",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    description:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "CAD",
      },
      featureList: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Cette section explique clairement la fonctionnalite dans Schedulaa.", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    bullets: [
      "En savoir plus",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  featuresIntro:
    "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  features: [
    {
      icon: "compliance",
      label: "Compliance",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      link: "/payslips",
      linkLabel: "En savoir plus",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "En savoir plus",
      description:
        "En savoir plus",
    },
  ],
  highlights: [
    {
      overline: "En savoir plus",
      title: "En savoir plus",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      links: [
        { label: "En savoir plus", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
    },
    {
      overline: "Exports",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
      ],
      links: [
        { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/tools/t4" },
        { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  stepsIntro:
    "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  steps: [
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "En savoir plus",
      description:
        "En savoir plus",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      links: [{ label: "En savoir plus", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      links: [
        { label: "En savoir plus", href: "/payroll/tools/t4" },
        { label: "En savoir plus", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faqIntro: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Cette section explique clairement la fonctionnalite dans Schedulaa.",
};

const usaConfig = {
  meta: {
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    description:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Cette section explique clairement la fonctionnalite dans Schedulaa.", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    subtitle:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    bullets: [
      "En savoir plus",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "En savoir plus",
  featuresIntro:
    "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  features: [
    {
      icon: "compliance",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      icon: "retirement",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "En savoir plus",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      link: "/payroll/tools/w2",
      linkLabel: "En savoir plus",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
    },
    {
      overline: "Delivery",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      ],
      links: [
        { label: "En savoir plus", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  stepsIntro:
    "En savoir plus",
  steps: [
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
    },
    {
      title: "En savoir plus",
      description:
        "En savoir plus",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      icon: "document",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      links: [{ label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/tools/w2" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faqIntro: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
};

const roeConfig = {
  meta: {
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    description:
      "En savoir plus",
    canonical: `${BASE_URL}/payroll/tools/roe`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("Cette section explique clairement la fonctionnalite dans Schedulaa.", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "En savoir plus",
    bullets: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  featuresIntro: "En savoir plus",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Export",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  stepsHeading: "Workflow",
  stepsTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  steps: [
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "En savoir plus",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      links: [{ label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "En savoir plus",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    description:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    canonical: `${BASE_URL}/payroll/tools/t4`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("Cette section explique clairement la fonctionnalite dans Schedulaa.", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    bullets: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "En savoir plus",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "En savoir plus",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "En savoir plus",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  steps: [
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "En savoir plus",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      links: [{ label: "En savoir plus", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "En savoir plus",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    description:
      "En savoir plus",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("Cette section explique clairement la fonctionnalite dans Schedulaa.", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    bullets: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Multi-state",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  highlights: [
    {
      overline: "En savoir plus",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  steps: [
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "En savoir plus",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      links: [{ label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const payslipConfig = {
  meta: {
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    description:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    canonical: `${BASE_URL}/payslips`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Cette section explique clairement la fonctionnalite dans Schedulaa.", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    bullets: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: "/payroll/canada" },
  },
  featuresHeading: "Highlights",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  features: [
    {
      icon: "timeline",
      label: "Access",
      title: "En savoir plus",
      description:
        "En savoir plus",
    },
    {
      icon: "document",
      label: "Delivery",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  steps: [
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      links: [{ label: "En savoir plus", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
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
