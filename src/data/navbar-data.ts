export type NavbarLabelKey =
  | 'product'
  | 'resources'
  | 'pricing'
  | 'features'
  | 'workforce'
  | 'booking'
  | 'marketing'
  | 'payroll'
  | 'websiteBuilder'
  | 'industries'
  | 'status'
  | 'roadmap'
  | 'demo'
  | 'contact'
  | 'blog'
  | 'documentation'
  | 'zapier'
  | 'quickbooks'
  | 'xero'
  | 'faq'
  | 'helpCenter'
  | 'employeeDashboard'
  | 'managerDashboard'
  | 'login'
  | 'startFree'
  | 'language';

export type NavbarLinkItem = {
  id: string;
  href: string;
  labelKey: NavbarLabelKey;
};

export type NavbarLocaleOption = {
  code: 'en' | 'fa' | 'ru' | 'zh' | 'es' | 'fr' | 'de' | 'ar' | 'pt';
  label: string;
  supported: boolean;
};

export const PRODUCT_MENU_LINKS: NavbarLinkItem[] = [
  { id: 'features', href: '/features', labelKey: 'features' },
  { id: 'workforce', href: '/workforce', labelKey: 'workforce' },
  { id: 'booking', href: '/booking', labelKey: 'booking' },
  { id: 'marketing', href: '/marketing', labelKey: 'marketing' },
  { id: 'payroll', href: '/payroll', labelKey: 'payroll' },
  { id: 'website-builder', href: '/website-builder', labelKey: 'websiteBuilder' },
  { id: 'industries', href: '/industries', labelKey: 'industries' },
  { id: 'status', href: '/status', labelKey: 'status' },
  { id: 'roadmap', href: '/roadmap', labelKey: 'roadmap' },
  { id: 'demo', href: '/demo', labelKey: 'demo' },
  { id: 'contact', href: '/contact', labelKey: 'contact' },
];

export const RESOURCES_MENU_LINKS: NavbarLinkItem[] = [
  { id: 'blog', href: '/blog', labelKey: 'blog' },
  { id: 'docs', href: '/docs', labelKey: 'documentation' },
  { id: 'zapier', href: '/zapier', labelKey: 'zapier' },
  { id: 'quickbooks', href: '/docs?topic=quickbooks-onboarding', labelKey: 'quickbooks' },
  { id: 'xero', href: '/docs?topic=xero-onboarding', labelKey: 'xero' },
  { id: 'faq', href: '/faq', labelKey: 'faq' },
  { id: 'help-center', href: '/client/support', labelKey: 'helpCenter' },
];

export const PRIMARY_NAV_LINKS: NavbarLinkItem[] = [{ id: 'pricing', href: '/pricing', labelKey: 'pricing' }];

export const MOBILE_NAV_LINKS: NavbarLinkItem[] = [...PRODUCT_MENU_LINKS, ...PRIMARY_NAV_LINKS, ...RESOURCES_MENU_LINKS];

export const DASHBOARD_LINKS: Array<{ id: string; href: string; labelKey: NavbarLabelKey }> = [
  { id: 'employee-dashboard', href: '/employee', labelKey: 'employeeDashboard' },
  { id: 'manager-dashboard', href: '/manager/dashboard', labelKey: 'managerDashboard' },
];

export const AUTH_LINKS: Array<{ id: string; href: string; labelKey: NavbarLabelKey }> = [
  { id: 'login', href: '/login', labelKey: 'login' },
  { id: 'start-free', href: '/register', labelKey: 'startFree' },
];

export const LOCALE_OPTIONS: NavbarLocaleOption[] = [
  { code: 'en', label: 'EN', supported: true },
  { code: 'fa', label: 'FA', supported: true },
  { code: 'ru', label: 'RU', supported: true },
  { code: 'zh', label: 'ZH', supported: true },
  { code: 'es', label: 'ES', supported: true },
  { code: 'fr', label: 'FR', supported: true },
  { code: 'de', label: 'DE', supported: true },
  { code: 'ar', label: 'AR', supported: true },
  { code: 'pt', label: 'PT', supported: true },
];
