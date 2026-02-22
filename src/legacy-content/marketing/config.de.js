const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";

const marketingCta = {
  overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  title: "Mehr erfahren",
  body: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  primary: { label: "Mehr erfahren", href: REGISTER_URL },
  secondary: { label: "Anmelden", href: "/login" },
};

const marketingSecondaryLinks = [
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing/clients-360#exports" },
  { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/booking" },
  { label: "Website-Builder", href: "/website-builder" },
];

export const marketingPages = {
  hub: {
    meta: {
      title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      description:
        "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      canonical: `${BASE_URL}/marketing`,
      og: {
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
        url: `${BASE_URL}/marketing`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
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
      url: `${BASE_URL}/marketing`,
    },
    hero: {
      badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      subtitle:
          "Mehr erfahren",
      points: [
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        "Mehr erfahren",
      ],
      primaryCta: { label: "Mehr erfahren", href: REGISTER_URL },
      secondaryCta: { label: "Anmelden", href: "/login" },
    },
    sections: [
      {
        overline: "Kampagnen",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        body:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        points: [
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Mehr erfahren",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        ],
        buttons: [
          { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing/email-campaigns" },
        ],
      },
      {
        overline: "Segmente",
        title: "Mehr erfahren",
        body:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        points: [
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        ],
        buttons: [
          { label: "Mehr erfahren", href: "/marketing/clients-360" },
        ],
      },
    ],
    lists: [
      {
        overline: "Enterprise-Analytik",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        intro:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "KPIs",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Mehr erfahren",
          },
          {
            icon: "insights",
            label: "Reliability",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Mehr erfahren",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Kundenintelligenz",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        content:
          "Mehr erfahren",
        actions: [
          { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing/clients-360", variant: "outlined" },
        ],
      },
      {
        overline: "Exporte",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        content:
          "Mehr erfahren",
        actions: [
          { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing/clients-360#exports", variant: "contained" },
        ],
      },
    ],
    faqHeading: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    faqTitle: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    faqIntro: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
    faq: [
      {
        question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        answer:
          "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      },
      {
        question: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        answer:
          "Mehr erfahren",
      },
      {
        question: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        answer:
          "Mehr erfahren",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  campaigns: {
    meta: {
      title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      description:
        "Mehr erfahren",
      canonical: `${BASE_URL}/marketing/email-campaigns`,
      og: {
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
        url: `${BASE_URL}/marketing/email-campaigns`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Mehr erfahren",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/email-campaigns`,
    },
    hero: {
      badge: "Kampagnen-Builder",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      subtitle:
        "Mehr erfahren",
      primaryCta: { label: "Mehr erfahren", href: REGISTER_URL },
      secondaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Konformitaet",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        body:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        points: [
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        ],
      },
      {
        overline: "Qualitaetskontrollen",
        title: "Mehr erfahren",
        body:
          "Mehr erfahren",
        points: [
          "Mehr erfahren",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          "Mehr erfahren",
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        ],
      },
    ],
    lists: [
      {
        overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        columns: 2,
        items: [
          {
            icon: "campaign",
            label: "Broadcast",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Mehr erfahren",
            points: [
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            ],
          },
          {
            icon: "campaign",
            label: "Win-back",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Mehr erfahren",
          },
          {
            icon: "campaign",
            label: "Rebook",
            title: "Mehr erfahren",
            body:
              "Mehr erfahren",
          },
          {
            icon: "campaign",
            label: "VIP",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Anniversary",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Mehr erfahren",
          },
          {
            icon: "campaign",
            label: "Launch",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Recovery",
            title: "Ja, diese Funktion wird im aktuellen Plattform-Workflow unterstuetzt.",
            body:
              "Mehr erfahren",
          },
          {
            icon: "campaign",
            label: "Upsell",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        content:
          "Mehr erfahren",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  analytics: {
    meta: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      canonical: `${BASE_URL}/marketing/analytics-dashboard`,
      og: {
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Mehr erfahren",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
        url: `${BASE_URL}/marketing/analytics-dashboard`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
  name: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Mehr erfahren",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/analytics-dashboard`,
    },
    hero: {
  badge: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
  title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      subtitle:
        "Mehr erfahren",
      primaryCta: { label: "Mehr erfahren", href: REGISTER_URL },
      secondaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Filters",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        body:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
    ],
    lists: [
      {
        overline: "Metrics",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Mix",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          },
          {
            icon: "insights",
            label: "Leaders",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Mehr erfahren",
          },
          {
            icon: "insights",
            label: "Retention",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Mehr erfahren",
          },
          {
            icon: "lifecycle",
            label: "Segmente",
            title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
            body:
              "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
          },
        ],
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  clients360: {
    meta: {
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      description:
        "Mehr erfahren",
      canonical: `${BASE_URL}/marketing/clients-360`,
      og: {
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Mehr erfahren",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
        url: `${BASE_URL}/marketing/clients-360`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        description:
          "Mehr erfahren",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
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
      url: `${BASE_URL}/marketing/clients-360`,
    },
    hero: {
      badge: "Kundenintelligenz",
      title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      subtitle:
        "Mehr erfahren",
      primaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing/clients-360" },
      secondaryCta: { label: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        title: "Mehr erfahren",
        body:
          "Mehr erfahren",
      },
      {
        overline: "Mehr erfahren",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        body:
          "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
      },
      {
        overline: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        title: "Dieser Abschnitt erklaert die Funktion klar innerhalb von Schedulaa.",
        body:
          "Mehr erfahren",
        id: "exports",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
};
