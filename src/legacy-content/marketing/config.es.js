const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";

const marketingCta = {
  overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  body: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  primary: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
  secondary: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/login" },
};

const marketingSecondaryLinks = [
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing/clients-360#exports" },
  { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/booking" },
  { label: "Mas informacion", href: "/website-builder" },
];

export const marketingPages = {
  hub: {
    meta: {
      title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      description:
        "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      canonical: `${BASE_URL}/marketing`,
      og: {
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
        url: `${BASE_URL}/marketing`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
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
      url: `${BASE_URL}/marketing`,
    },
    hero: {
      badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      subtitle:
          "Mas informacion",
      points: [
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        "Mas informacion",
      ],
      primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
      secondaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/login" },
    },
    sections: [
      {
        overline: "Campanas",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        body:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        points: [
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Mas informacion",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        ],
        buttons: [
          { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing/email-campaigns" },
        ],
      },
      {
        overline: "Segmentos",
        title: "Mas informacion",
        body:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        points: [
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        ],
        buttons: [
          { label: "Mas informacion", href: "/marketing/clients-360" },
        ],
      },
    ],
    lists: [
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        intro:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "KPIs",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Mas informacion",
          },
          {
            icon: "insights",
            label: "Reliability",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Mas informacion",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        content:
          "Mas informacion",
        actions: [
          { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing/clients-360", variant: "outlined" },
        ],
      },
      {
        overline: "Exportaciones",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        content:
          "Mas informacion",
        actions: [
          { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing/clients-360#exports", variant: "contained" },
        ],
      },
    ],
    faqHeading: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    faqTitle: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    faqIntro: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
    faq: [
      {
        question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        answer:
          "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      },
      {
        question: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        answer:
          "Mas informacion",
      },
      {
        question: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        answer:
          "Mas informacion",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  campaigns: {
    meta: {
      title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      description:
        "Mas informacion",
      canonical: `${BASE_URL}/marketing/email-campaigns`,
      og: {
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
        url: `${BASE_URL}/marketing/email-campaigns`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Mas informacion",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/email-campaigns`,
    },
    hero: {
      badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      subtitle:
        "Mas informacion",
      primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: REGISTER_URL },
      secondaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Cumplimiento",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        body:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        points: [
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        ],
      },
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Mas informacion",
        body:
          "Mas informacion",
        points: [
          "Mas informacion",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          "Mas informacion",
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        ],
      },
    ],
    lists: [
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        columns: 2,
        items: [
          {
            icon: "campaign",
            label: "Broadcast",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Mas informacion",
            points: [
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            ],
          },
          {
            icon: "campaign",
            label: "Win-back",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Mas informacion",
          },
          {
            icon: "campaign",
            label: "Rebook",
            title: "Mas informacion",
            body:
              "Mas informacion",
          },
          {
            icon: "campaign",
            label: "VIP",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Anniversary",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Mas informacion",
          },
          {
            icon: "campaign",
            label: "Launch",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Recovery",
            title: "Si, esta funcionalidad esta soportada dentro del flujo actual de la plataforma.",
            body:
              "Mas informacion",
          },
          {
            icon: "campaign",
            label: "Upsell",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        content:
          "Mas informacion",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  analytics: {
    meta: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      canonical: `${BASE_URL}/marketing/analytics-dashboard`,
      og: {
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Mas informacion",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
        url: `${BASE_URL}/marketing/analytics-dashboard`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
  name: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Mas informacion",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/analytics-dashboard`,
    },
    hero: {
  badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
  title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      subtitle:
        "Mas informacion",
      primaryCta: { label: "Mas informacion", href: REGISTER_URL },
      secondaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Filters",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        body:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
    ],
    lists: [
      {
        overline: "Metrics",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Mix",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          },
          {
            icon: "insights",
            label: "Leaders",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Mas informacion",
          },
          {
            icon: "insights",
            label: "Retention",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Mas informacion",
          },
          {
            icon: "lifecycle",
            label: "Segmentos",
            title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
            body:
              "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
          },
        ],
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  clients360: {
    meta: {
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      description:
        "Mas informacion",
      canonical: `${BASE_URL}/marketing/clients-360`,
      og: {
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Mas informacion",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
        url: `${BASE_URL}/marketing/clients-360`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        description:
          "Mas informacion",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
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
      url: `${BASE_URL}/marketing/clients-360`,
    },
    hero: {
      badge: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      subtitle:
        "Mas informacion",
      primaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing/clients-360" },
      secondaryCta: { label: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Mas informacion",
        body:
          "Mas informacion",
      },
      {
        overline: "Mas informacion",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        body:
          "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
      },
      {
        overline: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        title: "Esta seccion explica claramente la funcionalidad dentro de Schedulaa.",
        body:
          "Mas informacion",
        id: "exports",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
};
