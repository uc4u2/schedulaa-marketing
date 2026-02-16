import source from './landing-pricing.json';

const plans = source.plans?.table?.list || [];

const planCards = plans.map((plan) => ({
  title: `${plan.name} — ${plan.price}`,
  body: plan.description,
  points: [
    ...(plan.positioning ? [plan.positioning] : []),
    ...(plan.trialNote ? [plan.trialNote] : []),
    ...(plan.features || []).map((f) => (typeof f === 'string' ? f : f.text)),
  ],
}));

const comparisonHeaders = source.comparison?.headers || {};
const comparisonValues = source.comparison?.values || {};
const comparisonRows = source.comparison?.rows || {};
const comparisonItems = Object.keys(comparisonRows).map((key) => ({
  title: comparisonRows[key],
  body: `${comparisonHeaders.starter || 'Starter'}: ${comparisonValues?.starter?.[key] || ''}`,
  points: [
    `${comparisonHeaders.pro || 'Pro'}: ${comparisonValues?.pro?.[key] || ''}`,
    `${comparisonHeaders.business || 'Business'}: ${comparisonValues?.business?.[key] || ''}`,
  ],
}));

const assuranceItems = (source.assurances?.items || []).map((item) => ({
  title: item.title,
  body: item.description,
}));

const whyTeamItems = (source.whyTeams?.items || []).map((item) => ({
  title: item.title,
  body: item.description,
}));

const addonRows = (source.plans?.addons?.items || []).map((item) => ({
  title: item.name,
  body: item.price,
}));

export const pricingPage = {
  meta: source.meta,
  hero: {
    badge: source.hero?.eyebrow,
    title: Array.isArray(source.hero?.title) ? source.hero.title.join(' ') : source.hero?.title,
    subtitle: source.hero?.subtitle,
    primaryCta: { label: source.hero?.primaryCta?.label || 'Start free trial', href: '/register' },
    secondaryCta: { label: source.hero?.secondaryCta?.label || 'Compare plans', href: '/pricing#plans' },
    bullets: [source.ribbon?.message].filter(Boolean),
  },
  sections: [
    {
      overline: source.plans?.table?.eyebrow,
      title: source.plans?.table?.title,
      body: source.plans?.table?.subtitle,
      items: planCards,
    },
    {
      title: source.comparison?.title,
      body: source.comparison?.subtitle,
      items: comparisonItems,
    },
    {
      title: source.assurances?.title,
      body: source.assurances?.subtitle,
      items: assuranceItems,
    },
    {
      title: source.whyTeams?.title,
      items: whyTeamItems,
    },
    {
      title: source.plans?.addons?.title,
      items: addonRows,
    },
  ],
  callouts: [
    {
      title: source.included?.title,
      points: source.included?.items || [],
    },
    {
      title: source.websiteDesignService?.title,
      body: source.websiteDesignService?.description,
      points: source.websiteDesignService?.points || [],
    },
  ],
  cta: {
    overline: source.ctaBanner?.eyebrow,
    title: source.ctaBanner?.title,
    body: source.ctaBanner?.description,
    primary: { label: source.ctaBanner?.primaryCta?.label || 'Start free trial', href: '/register' },
    secondary: { label: source.ctaBanner?.secondaryCta?.label || 'Talk to sales', href: '/contact' },
  },
};
