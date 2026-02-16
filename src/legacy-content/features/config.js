import source from './landing-features.json';

const highlightCards = Object.values(source.highlightCards || {}).map((card) => ({
  title: card.title,
  body: card.description,
  points: card.points || [],
}));

const platformPillars = (source.featureShowcase?.features || []).map((item) => ({
  title: item.title,
  points: item.description || [],
}));

const platformMap = {
  title: source.platformMap?.title,
  body: source.platformMap?.subtitle,
  points: Object.values(source.platformMap?.points || {}),
};

const integrations = {
  title: source.integrations?.title,
  body: source.integrations?.subtitle,
  points: Object.values(source.integrations?.points || {}),
};

const insightItems = (source.insight?.items || []).map((item) => ({
  title: item.headline,
  body: item.description,
  links: item.ctaHref ? [{ label: item.ctaLabel, href: item.ctaHref }] : [],
}));

export const featuresPage = {
  meta: source.meta,
  hero: {
    badge: source.hero?.eyebrow,
    title: `${source.hero?.title?.line1 || ''} ${source.hero?.title?.line2 || ''}`.trim(),
    subtitle: source.hero?.subtitle,
    primaryCta: { label: source.hero?.primaryCta?.label || 'Start free', href: '/register' },
    secondaryCta: { label: source.hero?.secondaryCta?.label || 'Compare plans', href: '/pricing' },
    bullets: source.hero?.banner?.body ? [source.hero.banner.body] : [],
    notice: source.hero?.primaryCta?.supporting || '',
  },
  sections: [
    {
      overline: source.hero?.featureCard?.eyebrow,
      title: source.hero?.featureCard?.title,
      body: source.hero?.featureCard?.subtitle,
      items: highlightCards,
    },
    {
      overline: source.featureShowcase?.eyebrow,
      title: source.featureShowcase?.title,
      body: source.featureShowcase?.subtitle,
      items: platformPillars,
    },
    {
      title: platformMap.title,
      body: platformMap.body,
      points: platformMap.points,
    },
    {
      title: integrations.title,
      body: integrations.body,
      points: integrations.points,
    },
    {
      overline: source.insight?.eyebrow,
      title: source.insight?.title,
      body: source.insight?.subtitle,
      items: insightItems,
    },
  ],
  cta: {
    overline: source.cta?.eyebrow,
    title: source.cta?.title,
    body: source.cta?.description,
    primary: { label: source.cta?.primaryCta?.label || 'Start free', href: '/register' },
    secondary: { label: source.cta?.secondaryCta?.label || 'Talk to sales', href: '/contact' },
  },
};
