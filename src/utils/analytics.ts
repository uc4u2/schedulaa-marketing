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
  'demo_submit',
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
