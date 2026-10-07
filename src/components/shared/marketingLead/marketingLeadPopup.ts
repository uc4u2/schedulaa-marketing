import { isSupportedLocale } from '@/utils/locale';

/** Cold-email homepage visits open the existing lead popup after this delay. */
export const MARKETING_LEAD_AUTO_OPEN_MS = 3000;

export const marketingLeadCopy = {
  launcher: 'Get your free demo',
  title: 'Website and online booking',
  description:
    'See a service website with online booking. Share a few details and we’ll follow up with a live look.',
  submit: 'Get your free demo',
  successTitle: 'Thanks — your demo request is in.',
  successBody: 'We’ll follow up with a live look at a website and online booking.',
  sendingTitle: 'Sending your demo request…',
  sendingBody: 'We are saving your details so the team can follow up.',
  autoOpenAnnouncement:
    'Schedulaa demo offer opened. Website and online booking. Get your free demo.',
} as const;

export function isMarketingHomepage(pathname: string | null | undefined): boolean {
  if (!pathname) {
    return false;
  }

  const withoutHash = pathname.split('#')[0] ?? '';
  const pathOnly = withoutHash.split('?')[0] ?? '';
  const normalized = pathOnly.length > 1 && pathOnly.endsWith('/') ? pathOnly.slice(0, -1) : pathOnly || '/';

  if (normalized === '/') {
    return true;
  }

  const segments = normalized.split('/').filter(Boolean);
  return segments.length === 1 && isSupportedLocale(segments[0]);
}
