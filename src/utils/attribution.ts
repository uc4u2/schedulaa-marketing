'use client';

export const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
] as const;

const STORAGE_KEY = 'schedulaa_campaign_attribution';
const MAX_VALUE_LENGTH = 300;

export type CampaignAttribution = Partial<Record<(typeof ATTRIBUTION_KEYS)[number], string>>;

const cleanAttributionValue = (value: string) =>
  value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, MAX_VALUE_LENGTH);

export const readAttributionFromSearch = (search: string): CampaignAttribution => {
  const params = new URLSearchParams(search);
  return Object.fromEntries(
    ATTRIBUTION_KEYS.map((key) => [key, cleanAttributionValue(params.get(key) || '')]).filter(
      ([, value]) => Boolean(value),
    ),
  ) as CampaignAttribution;
};

export const captureCampaignAttribution = (search?: string) => {
  if (typeof window === 'undefined') {
    return {};
  }
  const incoming = readAttributionFromSearch(search ?? window.location.search);
  if (Object.keys(incoming).length) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
    return incoming;
  }

  try {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}') as CampaignAttribution;
  } catch {
    return {};
  }
};

export const appendAttributionToAppUrl = (href: string) => {
  if (typeof window === 'undefined') {
    return href;
  }
  const url = new URL(href, window.location.href);
  const appOrigin = new URL(
    process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.schedulaa.com',
  ).origin;
  if (url.origin !== appOrigin) {
    return href;
  }

  const attribution = captureCampaignAttribution();
  for (const [key, value] of Object.entries(attribution)) {
    if (value && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  }
  return url.toString();
};
