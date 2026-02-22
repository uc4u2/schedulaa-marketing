const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";

const sharedCta = {
  overline: "Lohnabrechnung + HR in einer Plattform",
  title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  body: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  primary: { label: "Kostenlos starten", href: REGISTER_URL },
  secondary: { label: "Mehr erfahren", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/canada" },
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/usa" },
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/tools/roe" },
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/tools/t4" },
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/tools/w2" },
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payslips" },
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
    title: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    description:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    canonical: `${BASE_URL}/payroll`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-overview.png`,
      url: `${BASE_URL}/payroll`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Mehr erfahren",
      description: "Mehr erfahren",
      image: `${BASE_URL}/images/payroll-overview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${BASE_URL}/payroll`,
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
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
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    image: "/images/marketing/payroll-manage.png",
    imageAlt: "Mehr erfahren",
    images: [
      { src: "/images/marketing/payroll-manage.png", alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa." },
      { src: "/images/marketing/showcase/t4.png", alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa." },
      { src: "/images/marketing/showcase/roe.png", alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa." },
      { src: "/images/marketing/showcase/w2-4d.png", alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa." },
    ],
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Mehr erfahren",
      "Mehr erfahren",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Mehr erfahren", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: "/docs#payroll" },
    notice:
      "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  },
  featuresHeading: "Platform",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  featuresIntro:
    "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  features: [
    {
      icon: "timeline",
      label: "Workflow",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      link: "/features",
      linkLabel: "Mehr erfahren",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      link: "/payroll/canada",
      linkLabel: "Mehr erfahren",
    },
    {
      icon: "retirement",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      link: "/payroll/usa",
      linkLabel: "Mehr erfahren",
    },
    {
      icon: "document",
      label: "Documents",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      link: "/payslips",
      linkLabel: "Mehr erfahren",
    },
  ],
  highlights: [
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
    },
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      points: [
        "Mehr erfahren",
        "Mehr erfahren",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
    },
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
    },
  ],
  stepsHeading: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  stepsTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  stepsIntro: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  steps: [
    {
      title: "Mehr erfahren",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Mehr erfahren",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      title: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      description:
        "Mehr erfahren",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Mehr erfahren",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
    },
    {
      icon: "analytics",
      label: "Insights",
      title: "Mehr erfahren",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      links: [
        { label: "Mehr erfahren", href: "/marketing/analytics-dashboard" },
        { label: "Mehr erfahren", href: "/docs#payroll" },
      ],
    },
    {
      icon: "schedule",
      label: "Mehr erfahren",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Mehr erfahren",
      points: [
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Mehr erfahren",
    },
    {
      question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: [
    { label: "Mehr erfahren", href: "/docs#payroll" },
    { label: "Mehr erfahren", href: "/compare/gusto" },
    { label: "Mehr erfahren", href: "/compare/adp" },
    ...sharedSecondaryLinks,
  ],
  nextSteps: {
    overline: "Naechste Schritte",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    description: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    links: [
      {
        label: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
        description: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
        href: "/pricing",
        cta: "Mehr erfahren",
      },
      {
        label: "Mehr erfahren",
        description: "Mehr erfahren",
        href: "/payroll/canada",
        cta: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
      {
        label: "Mehr erfahren",
        description: "Mehr erfahren",
        href: "/docs#payroll",
        cta: "Dokumentation lesen",
      },
      {
        label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        href: "/payroll/tools/t4",
        cta: "Mehr erfahren",
      },
    ],
  },
};

const canadaConfig = {
  meta: {
    title: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    description:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    canonical: `${BASE_URL}/payroll/canada`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
      url: `${BASE_URL}/payroll/canada`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-canada-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "CAD",
      },
      featureList: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/canada`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", `${BASE_URL}/payroll/canada`),
  ],
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    bullets: [
      "Mehr erfahren",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  featuresIntro:
    "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  features: [
    {
      icon: "compliance",
      label: "Compliance",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      icon: "document",
      label: "Payslips",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      link: "/payslips",
      linkLabel: "Mehr erfahren",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
    },
  ],
  highlights: [
    {
      overline: "Mehr erfahren",
      title: "Mehr erfahren",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      links: [
        { label: "Mehr erfahren", href: "/payroll/usa" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
        alt: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      },
    },
    {
      overline: "Exports",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Mehr erfahren",
      ],
      links: [
        { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/tools/t4" },
        { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/tools/roe" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  stepsIntro:
    "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  steps: [
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      links: [{ label: "Mehr erfahren", href: "/payslips" }],
    },
    {
      icon: "document",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      links: [
        { label: "Mehr erfahren", href: "/payroll/tools/t4" },
        { label: "Mehr erfahren", href: "/payroll/tools/roe" },
      ],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faqIntro: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
};

const usaConfig = {
  meta: {
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    description:
      "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    canonical: `${BASE_URL}/payroll/usa`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
      url: `${BASE_URL}/payroll/usa`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-usa-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "USD",
      },
      featureList: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Mehr erfahren",
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/usa`,
      provider: {
        "@type": "Organization",
        name: "Schedulaa",
        url: BASE_URL,
      },
    },
    payrollBreadcrumb("Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", `${BASE_URL}/payroll/usa`),
  ],
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    subtitle:
      "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    bullets: [
      "Mehr erfahren",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: CONTACT_URL },
  },
  featuresHeading: "Features",
  featuresTitle: "Mehr erfahren",
  featuresIntro:
    "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  features: [
    {
      icon: "compliance",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      icon: "retirement",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Mehr erfahren",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      icon: "document",
      label: "Exports",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      link: "/payroll/tools/w2",
      linkLabel: "Mehr erfahren",
    },
  ],
  highlights: [
    {
      overline: "Preview",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1200&auto=format&fit=crop",
        alt: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      },
    },
    {
      overline: "Delivery",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      ],
      links: [
        { label: "Mehr erfahren", href: "/payslips" },
      ],
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  stepsIntro:
    "Mehr erfahren",
  steps: [
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
    },
    {
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  callouts: [
    {
      icon: "compliance",
      label: "Limitations",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      icon: "document",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      links: [{ label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/tools/w2" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faqIntro: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
  notice:
    "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
};

const roeConfig = {
  meta: {
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    description:
      "Mehr erfahren",
    canonical: `${BASE_URL}/payroll/tools/roe`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-roe-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/roe`,
    },
    payrollBreadcrumb("Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", `${BASE_URL}/payroll/tools/roe`),
  ],
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Mehr erfahren",
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  featuresIntro: "Mehr erfahren",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Export",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Mehr erfahren",
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  stepsHeading: "Workflow",
  stepsTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  steps: [
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Mehr erfahren",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      links: [{ label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/tools/t4" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Mehr erfahren",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const t4Config = {
  meta: {
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    description:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    canonical: `${BASE_URL}/payroll/tools/t4`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-t4-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "CAD" },
      featureList: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Mehr erfahren",
      ],
      url: `${BASE_URL}/payroll/tools/t4`,
    },
    payrollBreadcrumb("Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", `${BASE_URL}/payroll/tools/t4`),
  ],
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Mehr erfahren",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Mehr erfahren",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Mehr erfahren",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Workflow",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Mehr erfahren",
      image: {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        alt: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  steps: [
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Mehr erfahren",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      links: [{ label: "Mehr erfahren", href: "/payroll/tools/roe" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Mehr erfahren",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const w2Config = {
  meta: {
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    description:
      "Mehr erfahren",
    canonical: `${BASE_URL}/payroll/tools/w2`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-w2-preview.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      url: `${BASE_URL}/payroll/tools/w2`,
    },
    payrollBreadcrumb("Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", `${BASE_URL}/payroll/tools/w2`),
  ],
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: CONTACT_URL },
  },
  featuresHeading: "Capabilities",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  features: [
    {
      icon: "document",
      label: "Prefill",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "compliance",
      label: "Compliance",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "timeline",
      label: "Multi-state",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  highlights: [
    {
      overline: "Mehr erfahren",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Mehr erfahren",
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  steps: [
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Mehr erfahren",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      links: [{ label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/payroll/usa" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const payslipConfig = {
  meta: {
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    description:
      "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    canonical: `${BASE_URL}/payslips`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
      url: `${BASE_URL}/payslips`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      image: `${BASE_URL}/images/payroll-payslip-portal.png`,
    },
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
      featureList: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      url: `${BASE_URL}/payslips`,
    },
    payrollBreadcrumb("Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", `${BASE_URL}/payslips`),
  ],
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: "/payroll/canada" },
  },
  featuresHeading: "Highlights",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  features: [
    {
      icon: "timeline",
      label: "Access",
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
    },
    {
      icon: "document",
      label: "Delivery",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      icon: "compliance",
      label: "Controls",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
  ],
  highlights: [
    {
      overline: "Experience",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  stepsHeading: "Process",
  stepsTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  steps: [
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  callouts: [
    {
      icon: "document",
      label: "Connected",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      links: [{ label: "Mehr erfahren", href: "/payroll/canada" }],
    },
  ],
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
  faq: [
    {
      question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Workflow der Plattform unterstuetzt.",
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
