const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";

const marketingCta = {
  overline: "Esta secao explica claramente o recurso no Schedulaa.",
  title: "Esta secao explica claramente o recurso no Schedulaa.",
  body: "Esta secao explica claramente o recurso no Schedulaa.",
  primary: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
  secondary: { label: "Entrar", href: "/login" },
};

const marketingSecondaryLinks = [
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing/clients-360#exports" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/booking" },
  { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/website-builder" },
];

export const marketingPages = {
  hub: {
    meta: {
      title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      description:
        "Sim, este recurso e suportado no fluxo atual da plataforma.",
      canonical: `${BASE_URL}/marketing`,
      og: {
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Sim, este recurso e suportado no fluxo atual da plataforma.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
        url: `${BASE_URL}/marketing`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Esta secao explica claramente o recurso no Schedulaa.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
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
      url: `${BASE_URL}/marketing`,
    },
    hero: {
      badge: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      subtitle:
          "Saiba mais",
      points: [
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Esta secao explica claramente o recurso no Schedulaa.",
        "Saiba mais",
      ],
      primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
      secondaryCta: { label: "Entrar", href: "/login" },
    },
    sections: [
      {
        overline: "Campanhas",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        body:
          "Esta secao explica claramente o recurso no Schedulaa.",
        points: [
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Saiba mais",
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Sim, este recurso e suportado no fluxo atual da plataforma.",
        ],
        buttons: [
          { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing/email-campaigns" },
        ],
      },
      {
        overline: "Segmentos",
        title: "Saiba mais",
        body:
          "Esta secao explica claramente o recurso no Schedulaa.",
        points: [
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Esta secao explica claramente o recurso no Schedulaa.",
        ],
        buttons: [
          { label: "Saiba mais", href: "/marketing/clients-360" },
        ],
      },
    ],
    lists: [
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        intro:
          "Esta secao explica claramente o recurso no Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "KPIs",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Esta secao explica claramente o recurso no Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Esta secao explica claramente o recurso no Schedulaa.",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Saiba mais",
          },
          {
            icon: "insights",
            label: "Reliability",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Saiba mais",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        content:
          "Saiba mais",
        actions: [
          { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing/clients-360", variant: "outlined" },
        ],
      },
      {
        overline: "Exportacoes",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        content:
          "Saiba mais",
        actions: [
          { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing/clients-360#exports", variant: "contained" },
        ],
      },
    ],
    faqHeading: "Esta secao explica claramente o recurso no Schedulaa.",
    faqTitle: "Esta secao explica claramente o recurso no Schedulaa.",
    faqIntro: "Esta secao explica claramente o recurso no Schedulaa.",
    faq: [
      {
        question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
        answer:
          "Sim, este recurso e suportado no fluxo atual da plataforma.",
      },
      {
        question: "Esta secao explica claramente o recurso no Schedulaa.",
        answer:
          "Saiba mais",
      },
      {
        question: "Sim, este recurso e suportado no fluxo atual da plataforma.",
        answer:
          "Saiba mais",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  campaigns: {
    meta: {
      title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      description:
        "Saiba mais",
      canonical: `${BASE_URL}/marketing/email-campaigns`,
      og: {
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Sim, este recurso e suportado no fluxo atual da plataforma.",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
        url: `${BASE_URL}/marketing/email-campaigns`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Saiba mais",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Sim, este recurso e suportado no fluxo atual da plataforma.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/email-campaigns`,
    },
    hero: {
      badge: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      subtitle:
        "Saiba mais",
      primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: REGISTER_URL },
      secondaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Conformidade",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        body:
          "Esta secao explica claramente o recurso no Schedulaa.",
        points: [
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Esta secao explica claramente o recurso no Schedulaa.",
        ],
      },
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Saiba mais",
        body:
          "Saiba mais",
        points: [
          "Saiba mais",
          "Esta secao explica claramente o recurso no Schedulaa.",
          "Saiba mais",
          "Esta secao explica claramente o recurso no Schedulaa.",
        ],
      },
    ],
    lists: [
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        columns: 2,
        items: [
          {
            icon: "campaign",
            label: "Broadcast",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Saiba mais",
            points: [
              "Esta secao explica claramente o recurso no Schedulaa.",
              "Esta secao explica claramente o recurso no Schedulaa.",
            ],
          },
          {
            icon: "campaign",
            label: "Win-back",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Saiba mais",
          },
          {
            icon: "campaign",
            label: "Rebook",
            title: "Saiba mais",
            body:
              "Saiba mais",
          },
          {
            icon: "campaign",
            label: "VIP",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Esta secao explica claramente o recurso no Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Anniversary",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Saiba mais",
          },
          {
            icon: "campaign",
            label: "Launch",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Esta secao explica claramente o recurso no Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Recovery",
            title: "Sim, este recurso e suportado no fluxo atual da plataforma.",
            body:
              "Saiba mais",
          },
          {
            icon: "campaign",
            label: "Upsell",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Esta secao explica claramente o recurso no Schedulaa.",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        content:
          "Saiba mais",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  analytics: {
    meta: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Esta secao explica claramente o recurso no Schedulaa.",
      canonical: `${BASE_URL}/marketing/analytics-dashboard`,
      og: {
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Saiba mais",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
        url: `${BASE_URL}/marketing/analytics-dashboard`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Esta secao explica claramente o recurso no Schedulaa.",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
  name: "Esta secao explica claramente o recurso no Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Saiba mais",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/analytics-dashboard`,
    },
    hero: {
  badge: "Esta secao explica claramente o recurso no Schedulaa.",
  title: "Esta secao explica claramente o recurso no Schedulaa.",
      subtitle:
        "Saiba mais",
      primaryCta: { label: "Saiba mais", href: REGISTER_URL },
      secondaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Filters",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        body:
          "Esta secao explica claramente o recurso no Schedulaa.",
      },
    ],
    lists: [
      {
        overline: "Metrics",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "Esta secao explica claramente o recurso no Schedulaa.",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Esta secao explica claramente o recurso no Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Mix",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Esta secao explica claramente o recurso no Schedulaa.",
          },
          {
            icon: "insights",
            label: "Leaders",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Saiba mais",
          },
          {
            icon: "insights",
            label: "Retention",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Saiba mais",
          },
          {
            icon: "lifecycle",
            label: "Segmentos",
            title: "Esta secao explica claramente o recurso no Schedulaa.",
            body:
              "Esta secao explica claramente o recurso no Schedulaa.",
          },
        ],
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  clients360: {
    meta: {
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      description:
        "Saiba mais",
      canonical: `${BASE_URL}/marketing/clients-360`,
      og: {
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Saiba mais",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
        url: `${BASE_URL}/marketing/clients-360`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        description:
          "Saiba mais",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
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
      url: `${BASE_URL}/marketing/clients-360`,
    },
    hero: {
      badge: "Esta secao explica claramente o recurso no Schedulaa.",
      title: "Esta secao explica claramente o recurso no Schedulaa.",
      subtitle:
        "Saiba mais",
      primaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing/clients-360" },
      secondaryCta: { label: "Esta secao explica claramente o recurso no Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Saiba mais",
        body:
          "Saiba mais",
      },
      {
        overline: "Saiba mais",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        body:
          "Esta secao explica claramente o recurso no Schedulaa.",
      },
      {
        overline: "Esta secao explica claramente o recurso no Schedulaa.",
        title: "Esta secao explica claramente o recurso no Schedulaa.",
        body:
          "Saiba mais",
        id: "exports",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
};
