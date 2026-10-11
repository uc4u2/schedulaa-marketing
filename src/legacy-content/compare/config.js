import compareSource from './landing-compare.json';

const compareEntries = Object.entries(compareSource || {});
const defaultPageTypes = ['compare', 'alternatives'];

const normalizePageTypes = (entry) => {
  const requested = Array.isArray(entry?.pageTypes) ? entry.pageTypes : defaultPageTypes;
  const supported = requested.filter((pageType) => defaultPageTypes.includes(pageType));
  return supported.length ? [...new Set(supported)] : defaultPageTypes;
};

export const supportsComparePageType = (entry, pageType) =>
  normalizePageTypes(entry).includes(pageType);

export const compareList = compareEntries.map(([key, value]) => {
  const slug = key.startsWith('schedulaa-vs-') ? key.replace('schedulaa-vs-', '') : key;
  return {
    key,
    slug,
    competitor: value.competitor || slug,
    title: value.heroTitle || `Schedulaa vs ${value.competitor || slug}`,
    description: value.metaDescription || '',
    pageTypes: normalizePageTypes(value),
  };
});

export const getCompareListForPageType = (pageType) =>
  compareList.filter((entry) => entry.pageTypes.includes(pageType));

export const resolveCompareKey = (slug, pageType = 'compare') => {
  if (!slug) return null;
  if (compareSource[slug] && supportsComparePageType(compareSource[slug], pageType)) return slug;
  const prefixed = `schedulaa-vs-${slug}`;
  if (
    pageType === 'alternatives' &&
    compareSource[prefixed] &&
    supportsComparePageType(compareSource[prefixed], pageType)
  ) {
    return prefixed;
  }
  return null;
};

export const getCompareEntry = (slug, pageType = 'compare') => {
  const key = resolveCompareKey(slug, pageType);
  if (!key) return null;
  const entry = compareSource[key];
  const altSlug = key.startsWith('schedulaa-vs-') ? key.replace('schedulaa-vs-', '') : key;
  return { key, altSlug, ...entry, pageTypes: normalizePageTypes(entry) };
};
