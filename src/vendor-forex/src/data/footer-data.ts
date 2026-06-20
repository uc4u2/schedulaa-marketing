import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Website Builder', href: '/website-builder' },
      { label: 'Online Booking', href: '/booking' },
      { label: 'Invoices & Estimates', href: '/business-finance/invoices' },
      { label: 'Shift Scheduling', href: '/workforce' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Payments & Commerce', href: '/commerce' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
      { label: 'Docs', href: '/docs' },
    ],
  },
  {
    title: 'Support & Legal',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Domain Help', href: '/help/domains' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
];
