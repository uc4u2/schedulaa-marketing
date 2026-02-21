const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "Folha + RH em uma unica plataforma",
  title: "Esta secao explica claramente o recurso no Schedulaa.",
  body: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  primary: { label: "Comecar gratis", href: REGISTER_URL },
  secondary: { label: "Saiba mais", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/canada" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/usa" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/tools/roe" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/tools/t4" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/tools/w2" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payslips" },
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
    title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
    description:
      "Esta secao explica claramente o recurso no Schedulaa.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Saiba mais",
      description: "Saiba mais",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
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
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "Saiba mais",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "Esta secao explica claramente o recurso no Schedulaa." },
      { src: "/images/marketing/showcase/t4.png", alt: "Esta secao explica claramente o recurso no Schedulaa." },
      { src: "/images/marketing/showcase/roe.png", alt: "Esta secao explica claramente o recurso no Schedulaa." },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "Esta secao explica claramente o recurso no Schedulaa." },
    ],
    bullets: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Saiba mais",
      "Saiba mais",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Saiba mais", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: "/docs#payroll" },
    notice:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
  },
  featuresHeading: "Platform",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  featuresIntro:
    "Sim, este recurso e suportado no fluxo atual da plataforma.",
  features: [
    {
      icon: "timeline",
      label: "Workflow",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      link: "/features",
      linkLabel: "Saiba mais",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      link: "/payroll/canada",
      linkLabel: "Saiba mais",
    },
    {
      icon: "retirement",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      link: "/payroll/usa",
      linkLabel: "Saiba mais",
    },
    {
      icon: "document",
      label: "Documents",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      link: "/payslips",
      linkLabel: "Saiba mais",
    },
  ],
  highlights: [
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Esta secao explica claramente o recurso no Schedulaa.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
    },
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      points: [
        "Saiba mais",
        "Saiba mais",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
    },
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
    },
  ],
  stepsHeading: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  stepsTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  stepsIntro: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  steps: [
    {
      title: "Saiba mais",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Saiba mais",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      description:
        "Saiba mais",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "Saiba mais",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      links: [
        { label: "Saiba mais", href: "/marketing/analytics-dashboard" },
        { label: "Saiba mais", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "Saiba mais",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      points: [
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Saiba mais",
    },
    {
      question: "Esta secao explica claramente o recurso no Schedulaa.",
      answer:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      question: "Esta secao explica claramente o recurso no Schedulaa.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "Saiba mais", href: "/docs#payroll" },
    { label: "Saiba mais", href: "/compare/gusto" },
    { label: "Saiba mais", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "Proximos passos",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    description: "Esta secao explica claramente o recurso no Schedulaa.",
    links: [
      {
        label: "Sim, este recurso e suportado no fluxo atual da plataforma.",
        description: "Sim, este recurso e suportado no fluxo atual da plataforma.",
        href: "/pricing",
        cta: "Saiba mais",
      },
      {
        label: "Saiba mais",
        description: "Saiba mais",
        href: "/payroll/canada",
        cta: "Esta secao explica claramente o recurso no Schedulaa.",
      },
      {
        label: "Saiba mais",
        description: "Saiba mais",
        href: "/docs#payroll",
        cta: "Ler documentacao",
      },
      {
        label: "Esta secao explica claramente o recurso no Schedulaa.",
        description: "Esta secao explica claramente o recurso no Schedulaa.",
        href: "/payroll/tools/t4",
        cta: "Saiba mais",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
    description:
      "Esta secao explica claramente o recurso no Schedulaa.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "CAD",
      },
      featureList: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Esta secao explica claramente o recurso no Schedulaa.", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Esta secao explica claramente o recurso no Schedulaa.",
    bullets: [
      "Saiba mais",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  featuresIntro:
    "Sim, este recurso e suportado no fluxo atual da plataforma.",
  features: [
    {
      icon: "compliance",
      label: "Compliance",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      link: "/payslips",
      linkLabel: "Saiba mais",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Saiba mais",
      description:
        "Saiba mais",
    },
  ],
  highlights: [
    {
      overline: "Saiba mais",
      title: "Saiba mais",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      links: [
        { label: "Saiba mais", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
    },
    {
      overline: "Exports",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Esta secao explica claramente o recurso no Schedulaa.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
      ],
      links: [
        { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/tools/t4" },
        { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  stepsIntro:
    "Sim, este recurso e suportado no fluxo atual da plataforma.",
  steps: [
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Saiba mais",
      description:
        "Saiba mais",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      links: [{ label: "Saiba mais", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Esta secao explica claramente o recurso no Schedulaa.",
      links: [
        { label: "Saiba mais", href: "/payroll/tools/t4" },
        { label: "Saiba mais", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faqIntro: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Esta secao explica claramente o recurso no Schedulaa.",
};

const usaConfig = {
  meta: {
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    description:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Esta secao explica claramente o recurso no Schedulaa.", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
    subtitle:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    bullets: [
      "Saiba mais",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Saiba mais",
  featuresIntro:
    "Esta secao explica claramente o recurso no Schedulaa.",
  features: [
    {
      icon: "compliance",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      icon: "retirement",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Saiba mais",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      link: "/payroll/tools/w2",
      linkLabel: "Saiba mais",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
    },
    {
      overline: "Delivery",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      ],
      links: [
        { label: "Saiba mais", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  stepsIntro:
    "Saiba mais",
  steps: [
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
    },
    {
      title: "Saiba mais",
      description:
        "Saiba mais",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      icon: "document",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      links: [{ label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/tools/w2" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faqIntro: "Esta secao explica claramente o recurso no Schedulaa.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Sim, este recurso e suportado no fluxo atual da plataforma.",
};

const roeConfig = {
  meta: {
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    description:
      "Saiba mais",
    canonical: `${BASE_URL}/payroll/tools/roe`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("Esta secao explica claramente o recurso no Schedulaa.", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Saiba mais",
    bullets: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  featuresIntro: "Saiba mais",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Export",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  stepsHeading: "Workflow",
  stepsTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  steps: [
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Saiba mais",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Esta secao explica claramente o recurso no Schedulaa.",
      links: [{ label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Saiba mais",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    description:
      "Esta secao explica claramente o recurso no Schedulaa.",
    canonical: `${BASE_URL}/payroll/tools/t4`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("Esta secao explica claramente o recurso no Schedulaa.", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Esta secao explica claramente o recurso no Schedulaa.",
    bullets: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Saiba mais",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Saiba mais",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Saiba mais",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  steps: [
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Saiba mais",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body: "Esta secao explica claramente o recurso no Schedulaa.",
      links: [{ label: "Saiba mais", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Saiba mais",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    description:
      "Saiba mais",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("Esta secao explica claramente o recurso no Schedulaa.", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Esta secao explica claramente o recurso no Schedulaa.",
    bullets: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Multi-state",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  highlights: [
    {
      overline: "Saiba mais",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  steps: [
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Saiba mais",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      links: [{ label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const payslipConfig = {
  meta: {
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    description:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    canonical: `${BASE_URL}/payslips`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Esta secao explica claramente o recurso no Schedulaa.", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    bullets: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: "/payroll/canada" },
  },
  featuresHeading: "Highlights",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  features: [
    {
      icon: "timeline",
      label: "Access",
      title: "Saiba mais",
      description:
        "Saiba mais",
    },
    {
      icon: "document",
      label: "Delivery",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  steps: [
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      links: [{ label: "Saiba mais", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Esta secao explica claramente o recurso no Schedulaa.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
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
