const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "Nomina + RR. HH. en una sola plataforma",
  title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  body: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  primary: { label: "Comenzar gratis", href: REGISTER_URL },
  secondary: { label: "Mas informacion", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/canada" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/usa" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/tools/roe" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/tools/t4" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/tools/w2" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payslips" },
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
    title: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    description:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Mas informacion",
      description: "Mas informacion",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
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
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "Mas informacion",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa." },
      { src: "/images/marketing/showcase/t4.png", alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa." },
      { src: "/images/marketing/showcase/roe.png", alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa." },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa." },
    ],
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Mas informacion",
      "Mas informacion",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Mas informacion", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: "/docs#payroll" },
    notice:
      "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  },
  featuresHeading: "Platform",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  featuresIntro:
    "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  features: [
    {
      icon: "timeline",
      label: "Workflow",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      link: "/features",
      linkLabel: "Mas informacion",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      link: "/payroll/canada",
      linkLabel: "Mas informacion",
    },
    {
      icon: "retirement",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      link: "/payroll/usa",
      linkLabel: "Mas informacion",
    },
    {
      icon: "document",
      label: "Documents",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      link: "/payslips",
      linkLabel: "Mas informacion",
    },
  ],
  highlights: [
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
    },
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      points: [
        "Mas informacion",
        "Mas informacion",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
    },
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
    },
  ],
  stepsHeading: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  stepsTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  stepsIntro: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  steps: [
    {
      title: "Mas informacion",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Mas informacion",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      title: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      description:
        "Mas informacion",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "Mas informacion",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      links: [
        { label: "Mas informacion", href: "/marketing/analytics-dashboard" },
        { label: "Mas informacion", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "Mas informacion",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      points: [
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Mas informacion",
    },
    {
      question: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      question: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "Mas informacion", href: "/docs#payroll" },
    { label: "Mas informacion", href: "/compare/gusto" },
    { label: "Mas informacion", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "Siguientes pasos",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    description: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    links: [
      {
        label: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
        description: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
        href: "/pricing",
        cta: "Mas informacion",
      },
      {
        label: "Mas informacion",
        description: "Mas informacion",
        href: "/payroll/canada",
        cta: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
      {
        label: "Mas informacion",
        description: "Mas informacion",
        href: "/docs#payroll",
        cta: "Leer documentacion",
      },
      {
        label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        href: "/payroll/tools/t4",
        cta: "Mas informacion",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    description:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "CAD",
      },
      featureList: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    bullets: [
      "Mas informacion",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  featuresIntro:
    "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  features: [
    {
      icon: "compliance",
      label: "Compliance",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      link: "/payslips",
      linkLabel: "Mas informacion",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Mas informacion",
      description:
        "Mas informacion",
    },
  ],
  highlights: [
    {
      overline: "Mas informacion",
      title: "Mas informacion",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      links: [
        { label: "Mas informacion", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      },
    },
    {
      overline: "Exports",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
      ],
      links: [
        { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/tools/t4" },
        { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  stepsIntro:
    "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  steps: [
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Mas informacion",
      description:
        "Mas informacion",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      links: [{ label: "Mas informacion", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      links: [
        { label: "Mas informacion", href: "/payroll/tools/t4" },
        { label: "Mas informacion", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faqIntro: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
};

const usaConfig = {
  meta: {
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    description:
      "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    subtitle:
      "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    bullets: [
      "Mas informacion",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Mas informacion",
  featuresIntro:
    "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  features: [
    {
      icon: "compliance",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      icon: "retirement",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Mas informacion",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      link: "/payroll/tools/w2",
      linkLabel: "Mas informacion",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      },
    },
    {
      overline: "Delivery",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      ],
      links: [
        { label: "Mas informacion", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  stepsIntro:
    "Mas informacion",
  steps: [
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
    },
    {
      title: "Mas informacion",
      description:
        "Mas informacion",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      icon: "document",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      links: [{ label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/tools/w2" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faqIntro: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
};

const roeConfig = {
  meta: {
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    description:
      "Mas informacion",
    canonical: `${BASE_URL}/payroll/tools/roe`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Mas informacion",
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  featuresIntro: "Mas informacion",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Export",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  stepsHeading: "Workflow",
  stepsTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  steps: [
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Mas informacion",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      links: [{ label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Mas informacion",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    description:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    canonical: `${BASE_URL}/payroll/tools/t4`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Mas informacion",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Mas informacion",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Mas informacion",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  steps: [
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Mas informacion",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      links: [{ label: "Mas informacion", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Mas informacion",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    description:
      "Mas informacion",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Multi-state",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  highlights: [
    {
      overline: "Mas informacion",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  steps: [
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Mas informacion",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      links: [{ label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const payslipConfig = {
  meta: {
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    description:
      "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    canonical: `${BASE_URL}/payslips`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: "/payroll/canada" },
  },
  featuresHeading: "Highlights",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  features: [
    {
      icon: "timeline",
      label: "Access",
      title: "Mas informacion",
      description:
        "Mas informacion",
    },
    {
      icon: "document",
      label: "Delivery",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  steps: [
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      links: [{ label: "Mas informacion", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
  faq: [
    {
      question: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
    },
    {
      question: "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada en el flujo actual de la plataforma.",
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
