const PAGE_URL = 'https://www.schedulaa.com/website-builder';

const featureCards = [
  {
    title: 'Drag-and-drop-Builder',
    body: 'Launch a polished site in minutes with sections, galleries, testimonials, and bookings - no coding required.',
  },
  {
    title: 'Stripe-Zahlungen integriert',
    body: 'Collect deposits, take full payments, and save cards on file with Stripe from day one.',
  },
  {
    title: 'Kostenlose Domain + SSL-Hosting',
    body: 'Map your own domain or use a schedulaa.site address. Automatic SSL keeps every page secure.',
  },
  {
    title: 'Aussagekraeftige Analytik',
    body: 'Sehen Sie Besuche, Buchungen und Umsatz in einem Dashboard. Verbinden Sie Google Analytics oder nutzen Sie unsere nativen Einblicke.',
  },
  {
    title: 'Responsive Vorlagen',
    body: 'Choose from industry-ready templates for salons, coaches, tutors, clinics, and more.',
  },
  {
    title: 'Sichere Kundendaten',
    body: 'SOC 2-ready policies, role-based access, and encrypted storage keep client data protected.',
  },
];

const howToSteps = [
  {
    title: 'Erstellen Sie Ihr Schedulaa-Konto',
    description: 'Start for free in less than two minutes. No credit card required to publish your first site.',
  },
  {
    title: 'Waehlen Sie eine Vorlage, die zu Ihrer Marke passt',
    description: 'Choose from modern designs for salons, coaches, fitness studios, trades, and more - all fully responsive.',
  },
  {
    title: 'Passen Sie Seiten mit Drag-and-drop-Bloecken an',
    description: 'Edit copy, swap hero images, add services, and surface testimonials without touching code.',
  },
  {
    title: 'Verbinden Sie Stripe und Buchungsablaeufe',
    description: 'Enable checkout, card-on-file, and scheduling so clients can book and pay in one visit.',
  },
  {
    title: 'Veroeffentlichen Sie mit Ihrer Domain und verfolgen Sie Analytik',
    description: 'Go live with free SSL, view analytics, and keep improving with built-in SEO recommendations.',
  },
];

const faqs = [
  {
    question: 'Is Schedulaa a free website builder for small businesses?',
    answer:
      'Yes. You can design, preview, and publish your first site for free on a schedulaa.site domain. Upgrade only when you need advanced automation or multiple locations.',
  },
  {
    question: 'Can I keep my website if I haven’t subscribed yet?',
    answer:
      'Yes. Every account includes a free website at www.schedulaa.com/your-company-slug. You can publish and keep it before subscribing, then upgrade when you’re ready.',
  },
  {
    question: 'Can clients book appointments on my site?',
    answer:
      'Absolutely. The booking widget is built into every template, so visitors can reserve appointments, select staff, and pay deposits in real time.',
  },
  {
    question: 'Does the website builder include Stripe integration?',
    answer:
      'Yes. Connect Stripe in one click to accept cards, store payment methods, and sync payouts with your Schedulaa dashboard.',
  },
  {
    question: 'Can I bring my own domain name?',
    answer:
      'You can map any domain you own. Schedulaa provisions SSL certificates automatically, so your site stays secure with zero maintenance.',
  },
  {
    question: 'Is the builder suitable for salons, tutors, and coaches?',
    answer:
      'Schedulaa ships with industry-ready templates and copy blocks for salons, spas, tutors, coaches, clinics, and more. Customize anything in minutes.',
  },
  {
    question: 'Do you offer a done-for-you website design service?',
    answer:
      'Yes. Our Website Design Service is a one-time add-on where our team collects your requirements, designs your site, and publishes it for you.',
  },
];

const resourceHighlights = [
  {
    title: 'Step-by-step guides',
    body: 'Access detailed launch guides that cover page creation, booking flows, Stripe activation, and DNS/domain cutovers.',
    links: [
      { label: 'Read the docs', href: '/docs#website-builder' },
      { label: 'Download sitemap', href: '/sitemap.xml' },
    ],
  },
  {
    title: 'Index-ready structure',
    body: 'Schedulaa veroeffentlicht automatisch kanonische URLs, OG-Tags und Sitemap-Updates, damit Google jede Vorlage crawlen kann.',
    links: [
      { label: 'View SEO checklist', href: '/docs#seo' },
      { label: 'Contact rollout team', href: '/contact' },
    ],
  },
  {
    title: 'Templates that convert',
    body: 'Studios, clinics, and recruiters ship new landing pages without developers, then monitor conversions from the analytics hub.',
    links: [
      { label: 'Explore industries', href: '/booking' },
      { label: 'Schedule a walkthrough', href: '/contact' },
    ],
  },
];

export const websiteBuilderPage = {
  meta: {
    title: 'Website-Builder fuer kleine Unternehmen - Kostenlose Domain und Hosting | Schedulaa',
    description:
      'Build your business website with Schedulaa\'s free website builder. Get a free site on a Schedulaa URL, connect your domain, or use our Website Design Service for done-for-you design.',
    canonical: PAGE_URL,
    og: {
      title: 'Website-Builder fuer kleine Unternehmen - Schedulaa',
      description:
        'Build and host your business website with booking, Stripe, and analytics. Launch free or choose our Website Design Service for a done-for-you site.',
      image: 'https://www.schedulaa.com/images/website-builder-preview.png',
      url: PAGE_URL,
    },
  },
  hero: {
    badge: 'Kostenloser Website-Builder fuer kleine Unternehmen',
    title: 'Website-Builder fuer kleine Unternehmen - Kostenloses Hosting inklusive',
    subtitle:
      'Build a responsive website with booking, Stripe payments, and analytics in one platform. Every account includes a free website at www.schedulaa.com/your-company-slug (even before you subscribe).',
    primaryCta: { label: 'Starten Sie Ihre kostenlose Website', href: '/register' },
    secondaryCta: { label: 'Buchung erkunden', href: '/booking' },
  },
  sections: [
    {
      overline: 'Kernfunktionen',
      title: 'Build, publish, and monetize in one workflow',
      items: featureCards,
    },
    {
      overline: 'Ressourcen',
      title: 'Leitfaeden, SEO und Rollout-Support',
      items: resourceHighlights,
    },
  ],
  stepsTitle: 'Wie Sie Ihre Seite in Schedulaa starten',
  steps: howToSteps,
  faqTitle: 'Haeufige Fragen zum Website-Builder',
  faq: faqs,
  cta: {
    overline: 'Bereit zum Start?',
    title: 'Starten Sie Ihre kostenlose Website and connect bookings today',
    body: 'Go live now, then add advanced automations and multi-location workflows whenever your business needs them.',
    primary: { label: 'Kostenlos starten', href: '/register' },
    secondary: { label: 'Mit unserem Team sprechen', href: '/contact' },
  },
};
