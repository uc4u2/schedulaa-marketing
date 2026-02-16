import source from './landing-docs.json';

const quickLinks = Object.values(source.quickLinks?.items || {}).map((item) => ({
  title: item.label,
  body: item.description,
}));

const gettingStarted = (source.gettingStarted?.cards || []).map((card) => ({
  title: card.title,
  body: card.description,
  points: card.items || [],
}));

const guides = (source.productGuides?.cards || []).map((card) => ({
  title: card.title,
  body: card.description,
  points: card.items || [],
}));

const integrations = (source.integrations?.items || []).map((item) => ({
  title: item.name,
  body: item.description,
  points: item.features || [],
}));

const changelog = (source.changelog?.releases || []).map((release) => ({
  title: `${release.version} — ${release.date}`,
  points: release.items || [],
}));

export const docsPage = {
  meta: source.meta,
  hero: {
    badge: source.hero?.eyebrow,
    title: Array.isArray(source.hero?.title) ? source.hero.title.join(' ') : source.hero?.title,
    subtitle: source.hero?.subtitle,
    primaryCta: { label: source.hero?.primaryCta?.label || 'Search docs', href: '#search' },
    secondaryCta: { label: source.hero?.secondaryCta?.label || 'API reference', href: '#api-reference' },
  },
  sections: [
    {
      overline: source.quickLinks?.eyebrow,
      title: source.quickLinks?.title,
      body: source.quickLinks?.subtitle,
      items: quickLinks,
    },
    {
      title: source.gettingStarted?.title,
      items: gettingStarted,
    },
    {
      title: source.productGuides?.title,
      items: guides,
    },
    {
      title: source.integrations?.title,
      body: source.integrations?.description,
      items: integrations,
    },
    {
      title: source.changelog?.title,
      items: changelog,
    },
  ],
  faqTitle: source.faq?.title,
  faq: source.faq?.items || [],
  cta: {
    overline: 'Docs',
    title: 'Need implementation help?',
    body: 'Read setup guides for scheduling, payroll workflows, and website booking flows.',
    primary: { label: 'Get started', href: '/register' },
    secondary: { label: 'Contact support', href: '/client/support' },
  },
};
