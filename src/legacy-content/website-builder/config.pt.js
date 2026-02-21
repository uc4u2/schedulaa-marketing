const PAGE_URL = 'https://www.schedulaa.com/website-builder';

const featureCards = [
  {
    title: 'Construtor de arrastar e soltar',
    body: 'Launch a polished site in minutes with sections, galleries, testimonials, and bookings - no coding required.',
  },
  {
    title: 'Pagamentos Stripe integrados',
    body: 'Collect deposits, take full payments, and save cards on file with Stripe from day one.',
  },
  {
    title: 'Dominio gratis + hospedagem SSL',
    body: 'Map your own domain or use a schedulaa.site address. Automatic SSL keeps every page secure.',
  },
  {
    title: 'Analitica clara',
    body: 'Veja visitas, reservas e receita em um unico painel. Conecte o Google Analytics ou use nossos insights nativos.',
  },
  {
    title: 'Modelos responsivos',
    body: 'Choose from industry-ready templates for salons, coaches, tutors, clinics, and more.',
  },
  {
    title: 'Dados de clientes protegidos',
    body: 'SOC 2-ready policies, role-based access, and encrypted storage keep client data protected.',
  },
];

const howToSteps = [
  {
    title: 'Crie sua conta Schedulaa',
    description: 'Start for free in less than two minutes. No credit card required to publish your first site.',
  },
  {
    title: 'Escolha um modelo que combine com sua marca',
    description: 'Choose from modern designs for salons, coaches, fitness studios, trades, and more - all fully responsive.',
  },
  {
    title: 'Personalize paginas com blocos de arrastar e soltar',
    description: 'Edit copy, swap hero images, add services, and surface testimonials without touching code.',
  },
  {
    title: 'Conecte Stripe e fluxos de reserva',
    description: 'Enable checkout, card-on-file, and scheduling so clients can book and pay in one visit.',
  },
  {
    title: 'Publique com seu dominio e acompanhe a analitica',
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
    body: 'A Schedulaa publica URLs canonicas, tags OG e atualizacoes de sitemap automaticamente para que o Google rastreie cada modelo.',
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
    title: 'Construtor de sites para pequenos negocios - Dominio e hospedagem gratis | Schedulaa',
    description:
      'Build your business website with Schedulaa\'s free website builder. Get a free site on a Schedulaa URL, connect your domain, or use our Website Design Service for done-for-you design.',
    canonical: PAGE_URL,
    og: {
      title: 'Construtor de sites para pequenos negocios - Schedulaa',
      description:
        'Build and host your business website with booking, Stripe, and analytics. Launch free or choose our Website Design Service for a done-for-you site.',
      image: 'https://www.schedulaa.com/images/website-builder-preview.png',
      url: PAGE_URL,
    },
  },
  hero: {
    badge: 'Construtor de sites gratuito para pequenos negocios',
    title: 'Construtor de sites para pequenos negocios - Hospedagem gratis incluida',
    subtitle:
      'Build a responsive website with booking, Stripe payments, and analytics in one platform. Every account includes a free website at www.schedulaa.com/your-company-slug (even before you subscribe).',
    primaryCta: { label: 'Inicie seu site gratis', href: '/register' },
    secondaryCta: { label: 'Explorar reservas', href: '/booking' },
  },
  sections: [
    {
      overline: 'Capacidades principais',
      title: 'Build, publish, and monetize in one workflow',
      items: featureCards,
    },
    {
      overline: 'Recursos',
      title: 'Guias, SEO e suporte de rollout',
      items: resourceHighlights,
    },
  ],
  stepsTitle: 'Como lancar seu site no Schedulaa',
  steps: howToSteps,
  faqTitle: 'Perguntas frequentes do construtor de sites',
  faq: faqs,
  cta: {
    overline: 'Pronto para lancar?',
    title: 'Inicie seu site gratis and connect bookings today',
    body: 'Go live now, then add advanced automations and multi-location workflows whenever your business needs them.',
    primary: { label: 'Comece gratis', href: '/register' },
    secondary: { label: 'Fale com nossa equipe', href: '/contact' },
  },
};
