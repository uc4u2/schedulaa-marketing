const PAGE_URL = 'https://www.schedulaa.com/website-builder';

const featureCards = [
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    body: 'Mas informacion',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    body: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
  },
  {
    title: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    body: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    body: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    body: 'Mas informacion',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    body: 'Mas informacion',
  },
];

const howToSteps = [
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    description: 'Mas informacion',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    description: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    description: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    description: 'Mas informacion',
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    description: 'Mas informacion',
  },
];

const faqs = [
  {
    question: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    answer:
      'Mas informacion',
  },
  {
    question: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    answer:
      'Mas informacion',
  },
  {
    question: 'Mas informacion',
    answer:
      'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
  },
  {
    question: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    answer:
      'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
  },
  {
    question: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    answer:
      'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
  },
  {
    question: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    answer:
      'Mas informacion',
  },
  {
    question: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    answer:
      'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
  },
];

const resourceHighlights = [
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    body: 'Mas informacion',
    links: [
      { label: 'Mas informacion', href: '/docs#website-builder' },
      { label: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.', href: '/sitemap.xml' },
    ],
  },
  {
    title: 'Mas informacion',
    body: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    links: [
      { label: 'Mas informacion', href: '/docs#seo' },
      { label: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.', href: '/contact' },
    ],
  },
  {
    title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    body: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    links: [
      { label: 'Mas informacion', href: '/booking' },
      { label: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.', href: '/contact' },
    ],
  },
];

export const websiteBuilderPage = {
  meta: {
    title: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    description:
      'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    canonical: PAGE_URL,
    og: {
      title: 'Mas informacion',
      description:
        'Mas informacion',
      image: 'https://www.schedulaa.com/images/website-builder-preview.png',
      url: PAGE_URL,
    },
  },
  hero: {
    badge: 'Mas informacion',
    title: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    subtitle:
      'Mas informacion',
    primaryCta: { label: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.', href: '/register' },
    secondaryCta: { label: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.', href: '/booking' },
  },
  sections: [
    {
      overline: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
      title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
      items: featureCards,
    },
    {
      overline: 'Recursos',
      title: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
      items: resourceHighlights,
    },
  ],
  stepsTitle: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
  steps: howToSteps,
  faqTitle: 'Mas informacion',
  faq: faqs,
  cta: {
    overline: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    title: 'Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.',
    body: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    primary: { label: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.', href: '/register' },
    secondary: { label: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.', href: '/contact' },
  },
};
