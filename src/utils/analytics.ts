'use client';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

const SAFE_EVENT_NAMES = new Set([
  'primary_cta_click',
  'demo_panel_open',
  'demo_request_submit',
  'demo_submit',
  'contact_start',
  'contact_submit',
]);

const SAFE_PARAMETER_NAMES = new Set([
  'cta_name',
  'page_path',
  'destination',
  'placement',
  'form_name',
  'plan_interest',
  'has_company',
  'has_phone',
]);

const cleanValue = (value: unknown) => {
  if (typeof value === 'boolean' || typeof value === 'number') {
    return value;
  }
  if (typeof value !== 'string') {
    return undefined;
  }
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, 200);
};

export const isGoogleAnalyticsEnabled = () => Boolean(GA_MEASUREMENT_ID);

const trackedOnceKeys = new Set<string>();

export const trackAnalyticsEvent = (
  eventName: string,
  parameters: Record<string, unknown> = {},
) => {
  if (
    typeof window === 'undefined' ||
    typeof window.gtag !== 'function' ||
    !isGoogleAnalyticsEnabled() ||
    !SAFE_EVENT_NAMES.has(eventName)
  ) {
    return;
  }

  const safeParameters = Object.fromEntries(
    Object.entries(parameters)
      .filter(([key]) => SAFE_PARAMETER_NAMES.has(key))
      .map(([key, value]) => [key, cleanValue(value)])
      .filter(([, value]) => value !== undefined && value !== ''),
  );

  window.gtag('event', eventName, safeParameters);
};

export const trackAnalyticsEventOnce = (
  eventName: string,
  dedupeKey: string,
  parameters: Record<string, unknown> = {},
) => {
  if (
    typeof window === 'undefined' ||
    typeof window.gtag !== 'function' ||
    !isGoogleAnalyticsEnabled() ||
    !SAFE_EVENT_NAMES.has(eventName)
  ) {
    return;
  }

  const storageKey = `schedulaa:analytics:${dedupeKey}`;
  if (trackedOnceKeys.has(storageKey)) {
    return;
  }

  try {
    if (window.sessionStorage.getItem(storageKey)) {
      return;
    }
  } catch {
    // The in-memory key still prevents duplicates if storage is unavailable.
  }

  trackAnalyticsEvent(eventName, parameters);
  trackedOnceKeys.add(storageKey);
  try {
    window.sessionStorage.setItem(storageKey, '1');
  } catch {
    // Analytics must never block the visitor's primary action.
  }
};
