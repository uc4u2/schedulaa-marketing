import source from './landing-docs.json';

export const buildDocsPage = (src) => {
  const quickLinks = Object.values(src.quickLinks?.items || {}).map((item) => ({
    title: item.label,
    body: item.description,
  }));

  const gettingStarted = (src.gettingStarted?.cards || []).map((card) => ({
    title: card.title,
    body: card.description,
    points: card.items || [],
  }));

  const guides = (src.productGuides?.cards || []).map((card) => ({
    title: card.title,
    body: card.description,
    points: card.items || [],
  }));

  const integrations = (src.integrations?.items || []).map((item) => ({
    title: item.name,
    body: item.description || item.details,
    points: item.features || [],
  }));

  const changelog = (src.changelog?.releases || []).map((release) => ({
    title: `${release.version} — ${release.date}`,
    points: release.items || release.entries || [],
  }));

  return {
    meta: src.meta,
    hero: {
      badge: src.hero?.eyebrow,
      title: Array.isArray(src.hero?.title) ? src.hero.title.join(' ') : src.hero?.title,
      subtitle: src.hero?.subtitle,
      primaryCta: { label: src.hero?.primaryCta?.label || 'Search docs', href: '#search' },
      secondaryCta: { label: src.hero?.secondaryCta?.label || 'API reference', href: '#api-reference' },
    },
    sections: [
      {
        overline: src.quickLinks?.eyebrow,
        title: src.quickLinks?.title,
        body: src.quickLinks?.subtitle,
        items: quickLinks,
      },
      {
        title: src.gettingStarted?.title,
        items: gettingStarted,
      },
      {
        title: src.productGuides?.title,
        items: guides,
      },
      {
        title: src.integrations?.title,
        body: src.integrations?.description,
        items: integrations,
      },
      {
        title: src.changelog?.title,
        items: changelog,
      },
    ],
    faqTitle: src.faq?.title,
    faq: src.faq?.items || [],
    cta: {
      overline: 'Docs',
      title: 'Need implementation help?',
      body: 'Read setup guides for scheduling, payroll workflows, and website booking flows.',
      primary: { label: 'Get started', href: '/register' },
      secondary: { label: 'Contact support', href: '/client/support' },
    },
  };
};

export const docsPage = buildDocsPage(source);
