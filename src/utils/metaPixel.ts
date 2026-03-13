'use client';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

const CONSENT_KEYS = [
  'schedulaa_marketing_consent',
  'marketing_consent',
  'cookie_consent',
];

const GRANTED_VALUES = new Set(['accepted', 'accept', 'granted', 'grant', 'true', 'yes', '1']);
const DENIED_VALUES = new Set(['rejected', 'reject', 'denied', 'deny', 'false', 'no', '0']);

const readCookie = (key: string) => {
  if (typeof document === 'undefined') return '';
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${key}=`));
  return match ? decodeURIComponent(match.split('=').slice(1).join('=')) : '';
};

export const getMetaConsentState = () => {
  if (typeof window === 'undefined') return 'unknown';

  for (const key of CONSENT_KEYS) {
    const localValue = String(window.localStorage.getItem(key) || '').trim().toLowerCase();
    if (GRANTED_VALUES.has(localValue)) return 'granted';
    if (DENIED_VALUES.has(localValue)) return 'denied';

    const cookieValue = readCookie(key).trim().toLowerCase();
    if (GRANTED_VALUES.has(cookieValue)) return 'granted';
    if (DENIED_VALUES.has(cookieValue)) return 'denied';
  }

  return 'unknown';
};

export const isMetaPixelEnabled = () => {
  if (!META_PIXEL_ID) return false;
  return getMetaConsentState() !== 'denied';
};

export const trackMetaPixel = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function' || !isMetaPixelEnabled()) return;
  if (params) {
    window.fbq('track', eventName, params);
    return;
  }
  window.fbq('track', eventName);
};
