const PAGE_URL = 'https://www.schedulaa.com/website-builder';

const featureCards = [
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    body: 'Saiba mais',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    body: 'Esta secao explica claramente o recurso no Schedulaa.',
  },
  {
    title: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    body: 'Esta secao explica claramente o recurso no Schedulaa.',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    body: 'Esta secao explica claramente o recurso no Schedulaa.',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    body: 'Saiba mais',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    body: 'Saiba mais',
  },
];

const howToSteps = [
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    description: 'Saiba mais',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    description: 'Esta secao explica claramente o recurso no Schedulaa.',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    description: 'Esta secao explica claramente o recurso no Schedulaa.',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    description: 'Saiba mais',
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    description: 'Saiba mais',
  },
];

const faqs = [
  {
    question: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    answer:
      'Saiba mais',
  },
  {
    question: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    answer:
      'Saiba mais',
  },
  {
    question: 'Saiba mais',
    answer:
      'Sim, este recurso e suportado no fluxo atual da plataforma.',
  },
  {
    question: 'Esta secao explica claramente o recurso no Schedulaa.',
    answer:
      'Esta secao explica claramente o recurso no Schedulaa.',
  },
  {
    question: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    answer:
      'Esta secao explica claramente o recurso no Schedulaa.',
  },
  {
    question: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    answer:
      'Saiba mais',
  },
  {
    question: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    answer:
      'Sim, este recurso e suportado no fluxo atual da plataforma.',
  },
];

const resourceHighlights = [
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    body: 'Saiba mais',
    links: [
      { label: 'Saiba mais', href: '/docs#website-builder' },
      { label: 'Esta secao explica claramente o recurso no Schedulaa.', href: '/sitemap.xml' },
    ],
  },
  {
    title: 'Saiba mais',
    body: 'Esta secao explica claramente o recurso no Schedulaa.',
    links: [
      { label: 'Saiba mais', href: '/docs#seo' },
      { label: 'Esta secao explica claramente o recurso no Schedulaa.', href: '/contact' },
    ],
  },
  {
    title: 'Esta secao explica claramente o recurso no Schedulaa.',
    body: 'Esta secao explica claramente o recurso no Schedulaa.',
    links: [
      { label: 'Saiba mais', href: '/booking' },
      { label: 'Esta secao explica claramente o recurso no Schedulaa.', href: '/contact' },
    ],
  },
];

export const websiteBuilderPage = {
  meta: {
    title: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    description:
      'Esta secao explica claramente o recurso no Schedulaa.',
    canonical: PAGE_URL,
    og: {
      title: 'Esta secao explica claramente o recurso no Schedulaa.',
      description:
        'Saiba mais',
      image: 'https://www.schedulaa.com/images/website-builder-preview.png',
      url: PAGE_URL,
    },
  },
  hero: {
    badge: 'Esta secao explica claramente o recurso no Schedulaa.',
    title: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    subtitle:
      'Saiba mais',
    primaryCta: { label: 'Esta secao explica claramente o recurso no Schedulaa.', href: '/register' },
    secondaryCta: { label: 'Esta secao explica claramente o recurso no Schedulaa.', href: '/booking' },
  },
  sections: [
    {
      overline: 'Esta secao explica claramente o recurso no Schedulaa.',
      title: 'Esta secao explica claramente o recurso no Schedulaa.',
      items: featureCards,
    },
    {
      overline: 'Recursos',
      title: 'Esta secao explica claramente o recurso no Schedulaa.',
      items: resourceHighlights,
    },
  ],
  stepsTitle: 'Esta secao explica claramente o recurso no Schedulaa.',
  steps: howToSteps,
  faqTitle: 'Esta secao explica claramente o recurso no Schedulaa.',
  faq: faqs,
  cta: {
    overline: 'Esta secao explica claramente o recurso no Schedulaa.',
    title: 'Sim, este recurso e suportado no fluxo atual da plataforma.',
    body: 'Esta secao explica claramente o recurso no Schedulaa.',
    primary: { label: 'Esta secao explica claramente o recurso no Schedulaa.', href: '/register' },
    secondary: { label: 'Esta secao explica claramente o recurso no Schedulaa.', href: '/contact' },
  },
};
