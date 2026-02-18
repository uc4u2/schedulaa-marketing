export type FooterSectionKey = 'company' | 'product' | 'resources' | 'compare' | 'legal';

export type FooterTranslationKey =
  | 'company'
  | 'product'
  | 'resources'
  | 'compareGroup'
  | 'legal'
  | 'contact'
  | 'status'
  | 'roadmap'
  | 'features'
  | 'workforce'
  | 'booking'
  | 'marketing'
  | 'payroll'
  | 'websiteBuilder'
  | 'industries'
  | 'pricing'
  | 'blog'
  | 'demo'
  | 'docs'
  | 'helpCenter'
  | 'zapier'
  | 'quickbooks'
  | 'xero'
  | 'compareHub'
  | 'alternativesHub'
  | 'privacy'
  | 'terms'
  | 'login'
  | 'getStarted';

export type FooterLinkItem = {
  id: string;
  href: string;
  label?: string;
  labelKey?: FooterTranslationKey;
  externalAppLink?: boolean;
};

export type FooterSection = {
  id: FooterSectionKey;
  titleKey: FooterTranslationKey;
  links: FooterLinkItem[];
};

const COMPARE_LINKS: FooterLinkItem[] = [
  { id: 'compare-vagaro', label: 'Schedulaa vs Vagaro', href: '/compare/vagaro' },
  { id: 'compare-quickbooks', label: 'Schedulaa vs QuickBooks', href: '/compare/quickbooks' },
  {
    id: 'compare-quickbooks-payroll',
    label: 'Schedulaa vs QuickBooks Payroll',
    href: '/compare/quickbooks-payroll',
  },
  { id: 'compare-humi', label: 'Schedulaa vs Humi', href: '/compare/humi' },
  {
    id: 'compare-square-appointments',
    label: 'Schedulaa vs Square Appointments',
    href: '/compare/square-appointments',
  },
  { id: 'compare-xero', label: 'Schedulaa vs Xero', href: '/compare/xero' },
  { id: 'compare-deputy', label: 'Schedulaa vs Deputy', href: '/compare/deputy' },
  { id: 'compare-homebase', label: 'Schedulaa vs Homebase', href: '/compare/homebase' },
  { id: 'compare-when-i-work', label: 'Schedulaa vs When I Work', href: '/compare/when-i-work' },
  {
    id: 'compare-acuity',
    label: 'Schedulaa vs Acuity Scheduling',
    href: '/compare/schedulaa-vs-acuity-scheduling',
  },
  { id: 'compare-gusto', label: 'Schedulaa vs Gusto', href: '/compare/gusto' },
  { id: 'compare-adp', label: 'Schedulaa vs ADP', href: '/compare/adp' },
  { id: 'compare-paychex', label: 'Schedulaa vs Paychex', href: '/compare/paychex' },
];

export const FOOTER_COMPARE_MOBILE_LIMIT = 8;

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: 'company',
    titleKey: 'company',
    links: [
      { id: 'company-contact', href: '/contact', labelKey: 'contact' },
      { id: 'company-status', href: '/status', labelKey: 'status' },
      { id: 'company-roadmap', href: '/roadmap', labelKey: 'roadmap' },
    ],
  },
  {
    id: 'product',
    titleKey: 'product',
    links: [
      { id: 'product-features', href: '/features', labelKey: 'features' },
      { id: 'product-workforce', href: '/workforce', labelKey: 'workforce' },
      { id: 'product-booking', href: '/booking', labelKey: 'booking' },
      { id: 'product-industries', href: '/industries', labelKey: 'industries' },
      { id: 'product-marketing', href: '/marketing', labelKey: 'marketing' },
      { id: 'product-payroll', href: '/payroll', labelKey: 'payroll' },
      { id: 'product-website-builder', href: '/website-builder', labelKey: 'websiteBuilder' },
      { id: 'product-pricing', href: '/pricing', labelKey: 'pricing' },
    ],
  },
  {
    id: 'resources',
    titleKey: 'resources',
    links: [
      { id: 'resources-blog', href: '/blog', labelKey: 'blog' },
      { id: 'resources-demo', href: '/demo', labelKey: 'demo' },
      { id: 'resources-contact', href: '/contact', labelKey: 'contact' },
      { id: 'resources-docs', href: '/docs', labelKey: 'docs' },
      { id: 'resources-help', href: '/client/support', labelKey: 'helpCenter' },
      { id: 'resources-zapier', href: '/zapier', labelKey: 'zapier' },
      { id: 'resources-quickbooks', href: '/docs?topic=quickbooks-onboarding', labelKey: 'quickbooks' },
      { id: 'resources-xero', href: '/docs?topic=xero-onboarding', labelKey: 'xero' },
    ],
  },
  {
    id: 'compare',
    titleKey: 'compareGroup',
    links: [
      { id: 'compare-hub', href: '/compare', labelKey: 'compareHub' },
      { id: 'alternatives-hub', href: '/alternatives', labelKey: 'alternativesHub' },
      ...COMPARE_LINKS,
    ],
  },
  {
    id: 'legal',
    titleKey: 'legal',
    links: [
      { id: 'legal-privacy', href: '/privacy', labelKey: 'privacy' },
      { id: 'legal-terms', href: '/terms', labelKey: 'terms' },
      { id: 'legal-login', href: '/login', labelKey: 'login', externalAppLink: true },
      { id: 'legal-get-started', href: '/register', labelKey: 'getStarted', externalAppLink: true },
    ],
  },
];
