import compareSource from './landing-compare.json';

const compareEntries = Object.entries(compareSource || {});

export const compareList = compareEntries.map(([key, value]) => {
  const slug = key.startsWith('schedulaa-vs-') ? key.replace('schedulaa-vs-', '') : key;
  return {
    key,
    slug,
    competitor: value.competitor || slug,
    title: value.heroTitle || `Schedulaa vs ${value.competitor || slug}`,
    description: value.metaDescription || '',
  };
});

export const resolveCompareKey = (slug, pageType = 'compare') => {
  if (!slug) return null;
  if (compareSource[slug]) return slug;
  const prefixed = `schedulaa-vs-${slug}`;
  if (pageType === 'alternatives' && compareSource[prefixed]) return prefixed;
  return null;
};

export const getCompareEntry = (slug, pageType = 'compare') => {
  const key = resolveCompareKey(slug, pageType);
  if (!key) return null;
  const entry = compareSource[key];
  const altSlug = key.startsWith('schedulaa-vs-') ? key.replace('schedulaa-vs-', '') : key;
  return { key, altSlug, ...entry };
};
