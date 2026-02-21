const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";
const LIVE_SERVICE_DEMO = "/demo";

const sharedCta = {
  overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  body: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  primary: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
  secondary: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/website-builder" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/booking/salon" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/booking/tutor" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/booking/doctor" },
];

const bookingHubConfig = {
  meta: {
    title: "En savoir plus",
    description:
      "En savoir plus",
    canonical: `${BASE_URL}/booking`,
    og: {
      title: "En savoir plus",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
      url: `${BASE_URL}/booking`,
    },
    twitter: {
      card: "summary_large_image",
      title: "En savoir plus",
      description:
        "En savoir plus",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "En savoir plus",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "En savoir plus",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking`,
  },
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    image: '/images/marketing/showcase/clients-pick2.png',
    imageAlt: 'Cette section explique clairement la fonctionnalite dans Schedulaa.',
    images: [
      { src: '/images/marketing/showcase/service-management.png', alt: 'Cette section explique clairement la fonctionnalite dans Schedulaa.' },
      { src: '/images/marketing/showcase/payment-collection3d.png', alt: 'Cette section explique clairement la fonctionnalite dans Schedulaa.' },
      { src: '/images/marketing/showcase/clients-pick2.png', alt: 'Cette section explique clairement la fonctionnalite dans Schedulaa.' },
      { src: '/images/marketing/showcase/employee-availability.png', alt: 'Cette section explique clairement la fonctionnalite dans Schedulaa.' },
    ],
    bullets: [
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  featuresIntro:
    "En savoir plus",
  features: [
    {
      icon: "availability",
      label: "Availability",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "En savoir plus",
    },
    {
      icon: "meeting",
      label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "En savoir plus",
      description:
        "En savoir plus",
      link: "/demo",
      linkLabel: "En savoir plus",
    },
    {
      icon: "calendar",
      label: "Calendars",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
      link: "/booking/salon",
      linkLabel: "En savoir plus",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "En savoir plus",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      link: "/booking/tutor",
      linkLabel: "En savoir plus",
    },
  ],
  highlights: [
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      points: [
        "En savoir plus",
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      ],
      links: [{ label: "En savoir plus", href: LIVE_SERVICE_DEMO }],
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "En savoir plus",
      body:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
        "En savoir plus",
      ],
      links: [{ label: "En savoir plus", href: "/demo" }],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "En savoir plus",
      },
    },
    {
      overline: "Operations",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
      ],
      links: [{ label: "En savoir plus", href: "/booking/salon" }],
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        alt: "En savoir plus",
      },
    },
  ],
  howItWorks: {
    overline: "Process",
    title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    intro:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    steps: [
      {
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
      {
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "En savoir plus",
      },
      {
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "En savoir plus",
      },
    ],
  },
  managerControls: {
    overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    body:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    points: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  },
  invitations: {
    overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    body:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    points: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "En savoir plus",
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  },
  checkout: {
    overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    body:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    points: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584473457406-6240486418e5?q=80&w=1200&auto=format&fit=crop",
      alt: "En savoir plus",
    },
  },
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faqIntro: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  faq: [
    {
      question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      answer:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      answer:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const salonConfig = {
  meta: {
    title: "En savoir plus",
    description:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    canonical: `${BASE_URL}/booking/salon`,
    og: {
      title: "En savoir plus",
      description:
        "En savoir plus",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
      url: `${BASE_URL}/booking/salon`,
    },
    twitter: {
      card: "summary_large_image",
      title: "En savoir plus",
      description:
        "En savoir plus",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "En savoir plus",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "En savoir plus",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/salon`,
  },
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "En savoir plus",
    subtitle:
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    bullets: [
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Commencer gratuitement", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "En savoir plus",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Stylists",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "En savoir plus",
    },
    {
      icon: "calendar",
      label: "Chairs",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      link: "/booking",
      linkLabel: "En savoir plus",
    },
  ],
  highlights: [
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      image: {
        src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
    {
      overline: "Operations",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "En savoir plus",
      image: {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      answer:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "En savoir plus",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const tutorConfig = {
  meta: {
    title: "En savoir plus",
    description:
      "En savoir plus",
    canonical: `${BASE_URL}/booking/tutor`,
    og: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
      url: `${BASE_URL}/booking/tutor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/tutor`,
  },
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    subtitle:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    bullets: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Commencer gratuitement", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Availability",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      icon: "form",
      label: "Invitations",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      icon: "payment",
      label: "Payments",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Invitations",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: {
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        alt: "En savoir plus",
      },
    },
    {
      overline: "Rescheduling",
      title: "En savoir plus",
      body:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const doctorConfig = {
  meta: {
    title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    description:
      "En savoir plus",
    canonical: `${BASE_URL}/booking/doctor`,
    og: {
      title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
      url: `${BASE_URL}/booking/doctor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "En savoir plus",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/doctor`,
  },
  hero: {
    badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    subtitle:
      "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    bullets: [
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    ],
    primaryCta: { label: "Commencer gratuitement", href: REGISTER_URL },
    secondaryCta: { label: "En savoir plus", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "En savoir plus",
  featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Providers",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
    },
    {
      icon: "form",
      label: "Intake",
      title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      body:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      image: {
        src: "https://images.unsplash.com/photo-1580281657521-054f5ef49902?q=80&w=1200&auto=format&fit=crop",
        alt: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
    },
    {
      overline: "Calendars",
      title: "En savoir plus",
      body:
        "En savoir plus",
      image: {
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
  faq: [
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    },
    {
      question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      answer:
        "En savoir plus",
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
      title: "En savoir plus",
      description:
        "En savoir plus",
      canonical: `${BASE_URL}/booking/spa`,
      og: {
        title: "En savoir plus",
        description:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
        url: `${BASE_URL}/booking/spa`,
      },
      twitter: {
        card: "summary_large_image",
        title: "En savoir plus",
        description:
          "En savoir plus",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "En savoir plus",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "En savoir plus",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/booking/spa`,
    },
    hero: {
      badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "En savoir plus",
      subtitle:
        "En savoir plus",
      bullets: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      ],
      primaryCta: { label: "Commencer gratuitement", href: REGISTER_URL },
      secondaryCta: { label: "En savoir plus", href: LIVE_SERVICE_DEMO },
    },
    featuresHeading: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    featuresTitle: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    features: [
      {
        icon: "availability",
        label: "Therapists",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
      {
        icon: "form",
        label: "Intake",
        title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        description:
          "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
      {
        icon: "payment",
        label: "Checkout",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    ],
    highlights: [
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        body:
          "En savoir plus",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
          alt: "En savoir plus",
        },
      },
      {
        overline: "Operations",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        body:
          "En savoir plus",
        image: {
          src: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop",
          alt: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        },
      },
    ],
    howItWorks: bookingHubConfig.howItWorks,
    managerControls: bookingHubConfig.managerControls,
    invitations: bookingHubConfig.invitations,
    checkout: bookingHubConfig.checkout,
    faqHeading: "FAQ",
    faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    faq: [
      {
        question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        answer:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
      {
        question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        answer:
          "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
    ],
    cta: sharedCta,
    secondaryLinks: sharedSecondaryLinks,
  },
  tutor: tutorConfig,
  doctor: doctorConfig,
};
