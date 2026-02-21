const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";
const LIVE_SERVICE_DEMO = "/demo";

const sharedCta = {
  overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  body: "Mehr erfahren",
  primary: { label: "Mehr erfahren", href: REGISTER_URL },
  secondary: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Website-Builder", href: "/website-builder" },
  { label: "Marketing-Automatisierung", href: "/marketing" },
  { label: "Salon-Buchung", href: "/booking/salon" },
  { label: "Nachhilfe-Terminplanung", href: "/booking/tutor" },
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/booking/doctor" },
];

const bookingHubConfig = {
  meta: {
    title: "Mehr erfahren",
    description:
      "Mehr erfahren",
    canonical: `${BASE_URL}/booking`,
    og: {
      title: "Mehr erfahren",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
      url: `${BASE_URL}/booking`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mehr erfahren",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Mehr erfahren",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking`,
  },
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    image: '/images/marketing/showcase/clients-pick2.png',
    imageAlt: 'Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.',
    images: [
      { src: '/images/marketing/showcase/service-management.png', alt: 'Serviceverwaltung' },
      { src: '/images/marketing/showcase/payment-collection3d.png', alt: 'Zahlungserfassung' },
      { src: '/images/marketing/showcase/clients-pick2.png', alt: 'Checkout-Ablauf' },
      { src: '/images/marketing/showcase/employee-availability.png', alt: 'Mitarbeiterverfuegbarkeit' },
    ],
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Mehr erfahren", href: REGISTER_URL },
    secondaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  featuresIntro:
    "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
  features: [
    {
      icon: "availability",
      label: "Verfuegbarkeit",
      title: "Echtzeit-Slot-Auswahl",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "meeting",
      label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
      link: "/demo",
      linkLabel: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "calendar",
      label: "Kalender",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      link: "/booking/salon",
      linkLabel: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      link: "/booking/tutor",
      linkLabel: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Kundenerlebnis",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      links: [{ label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: LIVE_SERVICE_DEMO }],
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Mehr erfahren",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      links: [{ label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/demo" }],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
    {
      overline: "Betrieb",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      links: [{ label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/booking/salon" }],
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  howItWorks: {
    overline: "Ablauf",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    intro:
      "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    steps: [
      {
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
      {
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
      {
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    ],
  },
  managerControls: {
    overline: "Manager-Steuerung",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    body:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    points: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  },
  invitations: {
    overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    body:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    points: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Mehr erfahren",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Schedulaa-Einladungseditor",
    },
  },
  checkout: {
    overline: "Kunden-Checkout",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    body:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    points: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584473457406-6240486418e5?q=80&w=1200&auto=format&fit=crop",
      alt: "Schedulaa-Buchungs-Checkout-Bildschirm",
    },
  },
  faqHeading: "FAQ",
  faqTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  faqIntro: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
  faq: [
    {
      question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const salonConfig = {
  meta: {
    title: "Mehr erfahren",
    description:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    canonical: `${BASE_URL}/booking/salon`,
    og: {
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
      url: `${BASE_URL}/booking/salon`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mehr erfahren",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Mehr erfahren",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/salon`,
  },
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Mehr erfahren",
    subtitle:
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    bullets: [
      "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Kostenlos starten", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Mehr erfahren",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Stylists",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "Mehr erfahren",
    },
    {
      icon: "calendar",
      label: "Chairs",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      link: "/booking",
      linkLabel: "Mehr erfahren",
    },
  ],
  highlights: [
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Mehr erfahren",
      image: {
        src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
    {
      overline: "Operations",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Mehr erfahren",
      image: {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
  faq: [
    {
      question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      answer:
        "Mehr erfahren",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const tutorConfig = {
  meta: {
    title: "Mehr erfahren",
    description:
      "Mehr erfahren",
    canonical: `${BASE_URL}/booking/tutor`,
    og: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
      url: `${BASE_URL}/booking/tutor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/tutor`,
  },
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    subtitle:
      "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Kostenlos starten", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Availability",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      icon: "form",
      label: "Invitations",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    },
    {
      icon: "payment",
      label: "Payments",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Invitations",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      body:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      image: {
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        alt: "Mehr erfahren",
      },
    },
    {
      overline: "Rescheduling",
      title: "Mehr erfahren",
      body:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      image: {
        src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      answer:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const doctorConfig = {
  meta: {
    title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    description:
      "Mehr erfahren",
    canonical: `${BASE_URL}/booking/doctor`,
    og: {
      title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
      url: `${BASE_URL}/booking/doctor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Mehr erfahren",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/doctor`,
  },
  hero: {
    badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    subtitle:
      "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    bullets: [
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    ],
    primaryCta: { label: "Kostenlos starten", href: REGISTER_URL },
    secondaryCta: { label: "Mehr erfahren", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Mehr erfahren",
  featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  features: [
    {
      icon: "availability",
      label: "Providers",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
    },
    {
      icon: "form",
      label: "Intake",
      title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    },
  ],
  highlights: [
    {
      overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      body:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      image: {
        src: "https://images.unsplash.com/photo-1580281657521-054f5ef49902?q=80&w=1200&auto=format&fit=crop",
        alt: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      },
    },
    {
      overline: "Calendars",
      title: "Mehr erfahren",
      body:
        "Mehr erfahren",
      image: {
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
  faq: [
    {
      question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      answer:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    },
    {
      question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      answer:
        "Mehr erfahren",
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
      title: "Mehr erfahren",
      description:
        "Mehr erfahren",
      canonical: `${BASE_URL}/booking/spa`,
      og: {
        title: "Mehr erfahren",
        description:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
        url: `${BASE_URL}/booking/spa`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Mehr erfahren",
        description:
          "Mehr erfahren",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Mehr erfahren",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Mehr erfahren",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/booking/spa`,
    },
    hero: {
      badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Mehr erfahren",
      subtitle:
        "Mehr erfahren",
      bullets: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Mehr erfahren",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      ],
      primaryCta: { label: "Kostenlos starten", href: REGISTER_URL },
      secondaryCta: { label: "Mehr erfahren", href: LIVE_SERVICE_DEMO },
    },
    featuresHeading: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    featuresTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    features: [
      {
        icon: "availability",
        label: "Therapists",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      },
      {
        icon: "form",
        label: "Intake",
        title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        description:
          "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      },
      {
        icon: "payment",
        label: "Checkout",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    ],
    highlights: [
      {
        overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        body:
          "Mehr erfahren",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
          alt: "Mehr erfahren",
        },
      },
      {
        overline: "Operations",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        body:
          "Mehr erfahren",
        image: {
          src: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop",
          alt: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        },
      },
    ],
    howItWorks: bookingHubConfig.howItWorks,
    managerControls: bookingHubConfig.managerControls,
    invitations: bookingHubConfig.invitations,
    checkout: bookingHubConfig.checkout,
    faqHeading: "FAQ",
    faqTitle: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
    faq: [
      {
        question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        answer:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
      {
        question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        answer:
          "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      },
    ],
    cta: sharedCta,
    secondaryLinks: sharedSecondaryLinks,
  },
  tutor: tutorConfig,
  doctor: doctorConfig,
};
