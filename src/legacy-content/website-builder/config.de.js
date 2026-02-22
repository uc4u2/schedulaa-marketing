const PAGE_URL = 'https://www.schedulaa.com/website-builder';

const featureCards = [
  {
    title: 'Drag-and-drop-Builder',
    body: 'Mehr erfahren',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    body: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    body: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    body: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    body: 'Mehr erfahren',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    body: 'Mehr erfahren',
  },
];

const howToSteps = [
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    description: 'Mehr erfahren',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    description: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    description: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    description: 'Mehr erfahren',
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    description: 'Mehr erfahren',
  },
];

const faqs = [
  {
    question: 'Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.',
    answer:
      'Mehr erfahren',
  },
  {
    question: 'Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.',
    answer:
      'Mehr erfahren',
  },
  {
    question: 'Mehr erfahren',
    answer:
      'Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.',
  },
  {
    question: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    answer:
      'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  },
  {
    question: 'Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.',
    answer:
      'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  },
  {
    question: 'Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.',
    answer:
      'Mehr erfahren',
  },
  {
    question: 'Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.',
    answer:
      'Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.',
  },
];

const resourceHighlights = [
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    body: 'Mehr erfahren',
    links: [
      { label: 'Mehr erfahren', href: '/docs#website-builder' },
      { label: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.', href: '/sitemap.xml' },
    ],
  },
  {
    title: 'Mehr erfahren',
    body: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    links: [
      { label: 'Mehr erfahren', href: '/docs#seo' },
      { label: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.', href: '/contact' },
    ],
  },
  {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    body: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    links: [
      { label: 'Mehr erfahren', href: '/booking' },
      { label: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.', href: '/contact' },
    ],
  },
];

export const websiteBuilderPage = {
  meta: {
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    description:
      'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    canonical: PAGE_URL,
    og: {
      title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
      description:
        'Mehr erfahren',
      image: 'https://www.schedulaa.com/images/website-builder-preview.png',
      url: PAGE_URL,
    },
  },
  hero: {
    badge: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    subtitle:
      'Mehr erfahren',
    primaryCta: { label: 'Mehr erfahren', href: '/register' },
    secondaryCta: { label: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.', href: '/booking' },
  },
  sections: [
    {
      overline: 'Kernfunktionen',
      title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
      items: featureCards,
    },
    {
      overline: 'Ressourcen',
      title: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
      items: resourceHighlights,
    },
  ],
  stepsTitle: 'Mehr erfahren',
  steps: howToSteps,
  faqTitle: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
  faq: faqs,
  cta: {
    overline: 'Mehr erfahren',
    title: 'Mehr erfahren',
    body: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    primary: { label: 'Mehr erfahren', href: '/register' },
    secondary: { label: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.', href: '/contact' },
  },
};
