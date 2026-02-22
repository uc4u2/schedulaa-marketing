const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";
const LIVE_SERVICE_DEMO = "/demo";

const sharedCta = {
  overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  body: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  primary: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
  secondary: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Mas informacion", href: "/website-builder" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/booking/salon" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/booking/tutor" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/booking/doctor" },
];

const bookingHubConfig = {
  meta: {
    title: "Mas informacion",
    description:
      "Mas informacion",
    canonical: `${BASE_URL}/booking`,
    og: {
      title: "Mas informacion",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
      url: `${BASE_URL}/booking`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Mas informacion",
      description:
        "Mas informacion",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mas informacion",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Mas informacion",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking`,
  },
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    image: '/images/marketing/showcase/clients-pick2.png',
    imageAlt: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.',
    images: [
      { src: '/images/marketing/showcase/service-management.png', alt: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.' },
      { src: '/images/marketing/showcase/payment-collection3d.png', alt: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.' },
      { src: '/images/marketing/showcase/clients-pick2.png', alt: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.' },
      { src: '/images/marketing/showcase/employee-availability.png', alt: 'Esta seccion explica claramente la funcionalidad dentro de Schedulaa.' },
    ],
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
    secondaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  featuresIntro:
    "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Disponibilidad",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "meeting",
      label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Mas informacion",
      description:
        "Mas informacion",
      link: "/demo",
      linkLabel: "Mas informacion",
    },
    {
      icon: "calendar",
      label: "Calendars",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
      link: "/booking/salon",
      linkLabel: "Mas informacion",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Mas informacion",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      link: "/booking/tutor",
      linkLabel: "Mas informacion",
    },
  ],
  highlights: [
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      points: [
        "Mas informacion",
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      ],
      links: [{ label: "Mas informacion", href: LIVE_SERVICE_DEMO }],
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Mas informacion",
      body:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
        "Mas informacion",
      ],
      links: [{ label: "Mas informacion", href: "/demo" }],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Mas informacion",
      },
    },
    {
      overline: "Operations",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
      ],
      links: [{ label: "Mas informacion", href: "/booking/salon" }],
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        alt: "Mas informacion",
      },
    },
  ],
  howItWorks: {
    overline: "Process",
    title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    intro:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    steps: [
      {
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
      {
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Mas informacion",
      },
      {
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Mas informacion",
      },
    ],
  },
  managerControls: {
    overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    body:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    points: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  },
  invitations: {
    overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    body:
      "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    points: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Mas informacion",
      "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  },
  checkout: {
    overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    body:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    points: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584473457406-6240486418e5?q=80&w=1200&auto=format&fit=crop",
      alt: "Mas informacion",
    },
  },
  faqHeading: "FAQ",
  faqTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  faqIntro: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  faq: [
    {
      question: "\u00bfC\u00f3mo eligen los clientes un proveedor?",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      question: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      question: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const salonConfig = {
  meta: {
    title: "Mas informacion",
    description:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    canonical: `${BASE_URL}/booking/salon`,
    og: {
      title: "Mas informacion",
      description:
        "Mas informacion",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
      url: `${BASE_URL}/booking/salon`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Mas informacion",
      description:
        "Mas informacion",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mas informacion",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Mas informacion",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/salon`,
  },
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Mas informacion",
    subtitle:
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    bullets: [
      "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Comenzar gratis", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Mas informacion",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Stylists",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "Mas informacion",
    },
    {
      icon: "calendar",
      label: "Chairs",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      link: "/booking",
      linkLabel: "Mas informacion",
    },
  ],
  highlights: [
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      image: {
        src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
    {
      overline: "Operations",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Mas informacion",
      image: {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
  faq: [
    {
      question: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      answer:
        "Mas informacion",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const tutorConfig = {
  meta: {
    title: "Mas informacion",
    description:
      "Mas informacion",
    canonical: `${BASE_URL}/booking/tutor`,
    og: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
      url: `${BASE_URL}/booking/tutor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/tutor`,
  },
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    subtitle:
      "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Comenzar gratis", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Availability",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      icon: "form",
      label: "Invitations",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    },
    {
      icon: "payment",
      label: "Payments",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Invitations",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      body:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      image: {
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        alt: "Mas informacion",
      },
    },
    {
      overline: "Rescheduling",
      title: "Mas informacion",
      body:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      answer:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
    {
      question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const doctorConfig = {
  meta: {
    title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    description:
      "Mas informacion",
    canonical: `${BASE_URL}/booking/doctor`,
    og: {
      title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
      url: `${BASE_URL}/booking/doctor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mas informacion",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/doctor`,
  },
  hero: {
    badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    subtitle:
      "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    bullets: [
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    ],
    primaryCta: { label: "Comenzar gratis", href: REGISTER_URL },
    secondaryCta: { label: "Mas informacion", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Mas informacion",
  featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Providers",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
    },
    {
      icon: "form",
      label: "Intake",
      title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      body:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      image: {
        src: "https://images.unsplash.com/photo-1580281657521-054f5ef49902?q=80&w=1200&auto=format&fit=crop",
        alt: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      },
    },
    {
      overline: "Calendars",
      title: "Mas informacion",
      body:
        "Mas informacion",
      image: {
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
  faq: [
    {
      question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      answer:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    },
    {
      question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      answer:
        "Mas informacion",
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
      title: "Mas informacion",
      description:
        "Mas informacion",
      canonical: `${BASE_URL}/booking/spa`,
      og: {
        title: "Mas informacion",
        description:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
        url: `${BASE_URL}/booking/spa`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Mas informacion",
        description:
          "Mas informacion",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Mas informacion",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Mas informacion",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/booking/spa`,
    },
    hero: {
      badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Mas informacion",
      subtitle:
        "Mas informacion",
      bullets: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      ],
      primaryCta: { label: "Comenzar gratis", href: REGISTER_URL },
      secondaryCta: { label: "Mas informacion", href: LIVE_SERVICE_DEMO },
    },
    featuresHeading: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    featuresTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    features: [
      {
        icon: "availability",
        label: "Therapists",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      },
      {
        icon: "form",
        label: "Intake",
        title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        description:
          "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      },
      {
        icon: "payment",
        label: "Checkout",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    ],
    highlights: [
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        body:
          "Mas informacion",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
          alt: "Mas informacion",
        },
      },
      {
        overline: "Operations",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        body:
          "Mas informacion",
        image: {
          src: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop",
          alt: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        },
      },
    ],
    howItWorks: bookingHubConfig.howItWorks,
    managerControls: bookingHubConfig.managerControls,
    invitations: bookingHubConfig.invitations,
    checkout: bookingHubConfig.checkout,
    faqHeading: "FAQ",
    faqTitle: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
    faq: [
      {
        question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        answer:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
      {
        question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        answer:
          "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      },
    ],
    cta: sharedCta,
    secondaryLinks: sharedSecondaryLinks,
  },
  tutor: tutorConfig,
  doctor: doctorConfig,
};
