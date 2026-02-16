import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'product',
    title: 'Product',
    submenu: [
      { id: 'features', label: 'Features', href: '/features' },
      { id: 'pricing', label: 'Pricing', href: '/pricing' },
      { id: 'payroll', label: 'Payroll', href: '/payroll' },
      { id: 'docs', label: 'Docs', href: '/docs' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'compare', label: 'Compare', href: '/compare' },
      { id: 'alternatives', label: 'Alternatives', href: '/alternatives' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
    ],
  },
  {
    id: 'legal',
    title: 'Legal',
    submenu: [
      { id: 'privacy', label: 'Privacy', href: '/privacy' },
      { id: 'terms', label: 'Terms', href: '/terms' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Payroll', href: '/payroll' },
      { label: 'Docs', href: '/docs' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Compare', href: '/compare' },
      { label: 'Alternatives', href: '/alternatives' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];
