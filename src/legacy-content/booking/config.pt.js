const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";
const LIVE_SERVICE_DEMO = "/demo";

const sharedCta = {
  overline: "Esta secao explica claramente o recurso no Schedulaa.",
  title: "Esta secao explica claramente o recurso no Schedulaa.",
  body: "Esta secao explica claramente o recurso no Schedulaa.",
  primary: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
  secondary: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/website-builder" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/booking/salon" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/booking/tutor" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/booking/doctor" },
];

const bookingHubConfig = {
  meta: {
    title: "Saiba mais",
    description:
      "Saiba mais",
    canonical: `${BASE_URL}/booking`,
    og: {
      title: "Saiba mais",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
      url: `${BASE_URL}/booking`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Saiba mais",
      description:
        "Saiba mais",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Saiba mais",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Saiba mais",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking`,
  },
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Esta secao explica claramente o recurso no Schedulaa.",
    image: '/images/marketing/showcase/clients-pick2.png',
    imageAlt: 'Esta secao explica claramente o recurso no Schedulaa.',
    images: [
      { src: '/images/marketing/showcase/service-management.png', alt: 'Esta secao explica claramente o recurso no Schedulaa.' },
      { src: '/images/marketing/showcase/payment-collection3d.png', alt: 'Esta secao explica claramente o recurso no Schedulaa.' },
      { src: '/images/marketing/showcase/clients-pick2.png', alt: 'Esta secao explica claramente o recurso no Schedulaa.' },
      { src: '/images/marketing/showcase/employee-availability.png', alt: 'Esta secao explica claramente o recurso no Schedulaa.' },
    ],
    bullets: [
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Esta secao explica claramente o recurso no Schedulaa.",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  featuresIntro:
    "Saiba mais",
  features: [
    {
      icon: "availability",
      label: "Availability",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "Saiba mais",
    },
    {
      icon: "meeting",
      label: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Saiba mais",
      description:
        "Saiba mais",
      link: "/demo",
      linkLabel: "Saiba mais",
    },
    {
      icon: "calendar",
      label: "Calendars",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
      link: "/booking/salon",
      linkLabel: "Saiba mais",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Saiba mais",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      link: "/booking/tutor",
      linkLabel: "Saiba mais",
    },
  ],
  highlights: [
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      points: [
        "Saiba mais",
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      ],
      links: [{ label: "Saiba mais", href: LIVE_SERVICE_DEMO }],
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Saiba mais",
      body:
        "Esta secao explica claramente o recurso no Schedulaa.",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
        "Saiba mais",
      ],
      links: [{ label: "Saiba mais", href: "/demo" }],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Saiba mais",
      },
    },
    {
      overline: "Operations",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
      ],
      links: [{ label: "Saiba mais", href: "/booking/salon" }],
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        alt: "Saiba mais",
      },
    },
  ],
  howItWorks: {
    overline: "Process",
    title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
    intro:
      "Esta secao explica claramente o recurso no Schedulaa.",
    steps: [
      {
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Esta secao explica claramente o recurso no Schedulaa.",
      },
      {
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Saiba mais",
      },
      {
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Saiba mais",
      },
    ],
  },
  managerControls: {
    overline: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    body:
      "Esta secao explica claramente o recurso no Schedulaa.",
    points: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      alt: "Esta secao explica claramente o recurso no Schedulaa.",
    },
  },
  invitations: {
    overline: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    body:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    points: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Saiba mais",
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Esta secao explica claramente o recurso no Schedulaa.",
    },
  },
  checkout: {
    overline: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    body:
      "Esta secao explica claramente o recurso no Schedulaa.",
    points: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584473457406-6240486418e5?q=80&w=1200&auto=format&fit=crop",
      alt: "Saiba mais",
    },
  },
  faqHeading: "FAQ",
  faqTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  faqIntro: "Esta secao explica claramente o recurso no Schedulaa.",
  faq: [
    {
      question: "Esta secao explica claramente o recurso no Schedulaa.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Esta secao explica claramente o recurso no Schedulaa.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Esta secao explica claramente o recurso no Schedulaa.",
      answer:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const salonConfig = {
  meta: {
    title: "Saiba mais",
    description:
      "Esta secao explica claramente o recurso no Schedulaa.",
    canonical: `${BASE_URL}/booking/salon`,
    og: {
      title: "Saiba mais",
      description:
        "Saiba mais",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
      url: `${BASE_URL}/booking/salon`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Saiba mais",
      description:
        "Saiba mais",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Saiba mais",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Saiba mais",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/salon`,
  },
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Saiba mais",
    subtitle:
      "Esta secao explica claramente o recurso no Schedulaa.",
    bullets: [
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Comecar gratis", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Saiba mais",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Stylists",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "Saiba mais",
    },
    {
      icon: "calendar",
      label: "Chairs",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      link: "/booking",
      linkLabel: "Saiba mais",
    },
  ],
  highlights: [
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      image: {
        src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
    {
      overline: "Operations",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Saiba mais",
      image: {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Esta secao explica claramente o recurso no Schedulaa.",
      answer:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Saiba mais",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const tutorConfig = {
  meta: {
    title: "Saiba mais",
    description:
      "Saiba mais",
    canonical: `${BASE_URL}/booking/tutor`,
    og: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
      url: `${BASE_URL}/booking/tutor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Esta secao explica claramente o recurso no Schedulaa.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Esta secao explica claramente o recurso no Schedulaa.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/tutor`,
  },
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    subtitle:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    bullets: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Comecar gratis", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Availability",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      icon: "form",
      label: "Invitations",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      icon: "payment",
      label: "Payments",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Invitations",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: {
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        alt: "Saiba mais",
      },
    },
    {
      overline: "Rescheduling",
      title: "Saiba mais",
      body:
        "Esta secao explica claramente o recurso no Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const doctorConfig = {
  meta: {
    title: "Esta secao explica claramente o recurso no Schedulaa.",
    description:
      "Saiba mais",
    canonical: `${BASE_URL}/booking/doctor`,
    og: {
      title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
      url: `${BASE_URL}/booking/doctor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Saiba mais",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Sim, este recurso e suportado no fluxo atual da plataforma.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/doctor`,
  },
  hero: {
    badge: "Esta secao explica claramente o recurso no Schedulaa.",
    title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
    subtitle:
      "Sim, este recurso e suportado no fluxo atual da plataforma.",
    bullets: [
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
      "Esta secao explica claramente o recurso no Schedulaa.",
    ],
    primaryCta: { label: "Comecar gratis", href: REGISTER_URL },
    secondaryCta: { label: "Saiba mais", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Saiba mais",
  featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Providers",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
    },
    {
      icon: "form",
      label: "Intake",
      title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      body:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      image: {
        src: "https://images.unsplash.com/photo-1580281657521-054f5ef49902?q=80&w=1200&auto=format&fit=crop",
        alt: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
    },
    {
      overline: "Calendars",
      title: "Saiba mais",
      body:
        "Saiba mais",
      image: {
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta secao explica claramente o recurso no Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
  faq: [
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
    },
    {
      question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      answer:
        "Saiba mais",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

export const bookingPages = {
  hub: bookingHubConfig,
  salon: salonConfig,
  spa: {
    meta: {
      title: "Saiba mais",
      description:
        "Saiba mais",
      canonical: `${BASE_URL}/booking/spa`,
      og: {
        title: "Saiba mais",
        description:
          "Esta secao explica claramente o recurso no Schedulaa.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
        url: `${BASE_URL}/booking/spa`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Saiba mais",
        description:
          "Saiba mais",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Saiba mais",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Saiba mais",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/booking/spa`,
    },
    hero: {
      badge: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Saiba mais",
      subtitle:
        "Saiba mais",
      bullets: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
        "Esta secao explica claramente o recurso no Schedulaa.",
      ],
      primaryCta: { label: "Comecar gratis", href: REGISTER_URL },
      secondaryCta: { label: "Saiba mais", href: LIVE_SERVICE_DEMO },
    },
    featuresHeading: "Esta secao explica claramente o recurso no Schedulaa.",
    featuresTitle: "Esta secao explica claramente o recurso no Schedulaa.",
    features: [
      {
        icon: "availability",
        label: "Therapists",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
      {
        icon: "form",
        label: "Intake",
        title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
        description:
          "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
      {
        icon: "payment",
        label: "Checkout",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Esta secao explica claramente o recurso no Schedulaa.",
      },
    ],
    highlights: [
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        body:
          "Saiba mais",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
          alt: "Saiba mais",
        },
      },
      {
        overline: "Operations",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        body:
          "Saiba mais",
        image: {
          src: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop",
          alt: "Esta secao explica claramente o recurso no Schedulaa.",
        },
      },
    ],
    howItWorks: bookingHubConfig.howItWorks,
    managerControls: bookingHubConfig.managerControls,
    invitations: bookingHubConfig.invitations,
    checkout: bookingHubConfig.checkout,
    faqHeading: "FAQ",
    faqTitle: "Sim, este recurso e suportado no fluxo atual da plataforma.",
    faq: [
      {
        question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
        answer:
          "Esta secao explica claramente o recurso no Schedulaa.",
      },
      {
        question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
        answer:
          "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
    ],
    cta: sharedCta,
    secondaryLinks: sharedSecondaryLinks,
  },
  tutor: tutorConfig,
  doctor: doctorConfig,
};
