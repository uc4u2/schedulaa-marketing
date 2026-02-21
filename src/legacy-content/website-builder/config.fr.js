const PAGE_URL = 'https://www.schedulaa.com/website-builder';

const featureCards = [
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    body: 'En savoir plus',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    body: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    body: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    body: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    body: 'En savoir plus',
  },
  {
    title: 'En savoir plus',
    body: 'En savoir plus',
  },
];

const howToSteps = [
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    description: 'En savoir plus',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    description: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    description: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    description: 'En savoir plus',
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    description: 'En savoir plus',
  },
];

const faqs = [
  {
    question: 'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
    answer:
      'En savoir plus',
  },
  {
    question: 'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
    answer:
      'En savoir plus',
  },
  {
    question: 'En savoir plus',
    answer:
      'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
  },
  {
    question: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    answer:
      'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  },
  {
    question: 'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
    answer:
      'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  },
  {
    question: 'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
    answer:
      'En savoir plus',
  },
  {
    question: 'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
    answer:
      'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
  },
];

const resourceHighlights = [
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    body: 'En savoir plus',
    links: [
      { label: 'En savoir plus', href: '/docs#website-builder' },
      { label: 'Cette section explique clairement la fonctionnalite dans Schedulaa.', href: '/sitemap.xml' },
    ],
  },
  {
    title: 'En savoir plus',
    body: 'En savoir plus',
    links: [
      { label: 'En savoir plus', href: '/docs#seo' },
      { label: 'Cette section explique clairement la fonctionnalite dans Schedulaa.', href: '/contact' },
    ],
  },
  {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    body: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    links: [
      { label: 'En savoir plus', href: '/booking' },
      { label: 'Cette section explique clairement la fonctionnalite dans Schedulaa.', href: '/contact' },
    ],
  },
];

export const websiteBuilderPage = {
  meta: {
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    description:
      'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    canonical: PAGE_URL,
    og: {
      title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
      description:
        'En savoir plus',
      image: 'https://www.schedulaa.com/images/website-builder-preview.png',
      url: PAGE_URL,
    },
  },
  hero: {
    badge: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    subtitle:
      'En savoir plus',
    primaryCta: { label: 'Cette section explique clairement la fonctionnalite dans Schedulaa.', href: '/register' },
    secondaryCta: { label: 'En savoir plus', href: '/booking' },
  },
  sections: [
    {
      overline: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
      title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
      items: featureCards,
    },
    {
      overline: 'Ressources',
      title: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
      items: resourceHighlights,
    },
  ],
  stepsTitle: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
  steps: howToSteps,
  faqTitle: 'Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.',
  faq: faqs,
  cta: {
    overline: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    title: 'En savoir plus',
    body: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    primary: { label: 'Cette section explique clairement la fonctionnalite dans Schedulaa.', href: '/register' },
    secondary: { label: 'Cette section explique clairement la fonctionnalite dans Schedulaa.', href: '/contact' },
  },
};
