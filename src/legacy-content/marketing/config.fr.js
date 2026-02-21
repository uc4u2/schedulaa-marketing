const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";

const marketingCta = {
  overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  body: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  primary: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
  secondary: { label: "Connexion", href: "/login" },
};

const marketingSecondaryLinks = [
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing/clients-360#exports" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/booking" },
  { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/website-builder" },
];

export const marketingPages = {
  hub: {
    meta: {
      title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      description:
        "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      canonical: `${BASE_URL}/marketing`,
      og: {
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
        url: `${BASE_URL}/marketing`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        image: `${BASE_URL}/images/marketing-hub-preview.png`,
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
      url: `${BASE_URL}/marketing`,
    },
    hero: {
      badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      subtitle:
          "En savoir plus",
      points: [
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        "En savoir plus",
      ],
      primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
      secondaryCta: { label: "Connexion", href: "/login" },
    },
    sections: [
      {
        overline: "Campagnes",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        body:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        points: [
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "En savoir plus",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        ],
        buttons: [
          { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing/email-campaigns" },
        ],
      },
      {
        overline: "Segments",
        title: "En savoir plus",
        body:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        points: [
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        ],
        buttons: [
          { label: "En savoir plus", href: "/marketing/clients-360" },
        ],
      },
    ],
    lists: [
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        intro:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "KPIs",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "En savoir plus",
          },
          {
            icon: "insights",
            label: "Reliability",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "En savoir plus",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        content:
          "En savoir plus",
        actions: [
          { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing/clients-360", variant: "outlined" },
        ],
      },
      {
        overline: "Exports",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        content:
          "En savoir plus",
        actions: [
          { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing/clients-360#exports", variant: "contained" },
        ],
      },
    ],
    faqHeading: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    faqTitle: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
    faqIntro: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
    faq: [
      {
        question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        answer:
          "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      },
      {
        question: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        answer:
          "En savoir plus",
      },
      {
        question: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        answer:
          "En savoir plus",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  campaigns: {
    meta: {
      title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      description:
        "En savoir plus",
      canonical: `${BASE_URL}/marketing/email-campaigns`,
      og: {
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
        url: `${BASE_URL}/marketing/email-campaigns`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "En savoir plus",
        image: `${BASE_URL}/images/marketing-campaigns-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/email-campaigns`,
    },
    hero: {
      badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      subtitle:
        "En savoir plus",
      primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: REGISTER_URL },
      secondaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Conformite",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        body:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        points: [
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        ],
      },
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "En savoir plus",
        body:
          "En savoir plus",
        points: [
          "En savoir plus",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          "En savoir plus",
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        ],
      },
    ],
    lists: [
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        columns: 2,
        items: [
          {
            icon: "campaign",
            label: "Broadcast",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "En savoir plus",
            points: [
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            ],
          },
          {
            icon: "campaign",
            label: "Win-back",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "En savoir plus",
          },
          {
            icon: "campaign",
            label: "Rebook",
            title: "En savoir plus",
            body:
              "En savoir plus",
          },
          {
            icon: "campaign",
            label: "VIP",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Anniversary",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "En savoir plus",
          },
          {
            icon: "campaign",
            label: "Launch",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          },
          {
            icon: "campaign",
            label: "Recovery",
            title: "Oui, cette fonctionnalite est prise en charge dans le flux actuel de la plateforme.",
            body:
              "En savoir plus",
          },
          {
            icon: "campaign",
            label: "Upsell",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          },
        ],
      },
    ],
    highlights: [
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        content:
          "En savoir plus",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  analytics: {
    meta: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      canonical: `${BASE_URL}/marketing/analytics-dashboard`,
      og: {
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "En savoir plus",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
        url: `${BASE_URL}/marketing/analytics-dashboard`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        image: `${BASE_URL}/images/marketing-analytics-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
  name: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "En savoir plus",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/marketing/analytics-dashboard`,
    },
    hero: {
  badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
  title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      subtitle:
        "En savoir plus",
      primaryCta: { label: "En savoir plus", href: REGISTER_URL },
      secondaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Filters",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        body:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
    ],
    lists: [
      {
        overline: "Metrics",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        items: [
          {
            icon: "analytics",
            label: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          },
          {
            icon: "timeline",
            label: "Mix",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          },
          {
            icon: "insights",
            label: "Leaders",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "En savoir plus",
          },
          {
            icon: "insights",
            label: "Retention",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "En savoir plus",
          },
          {
            icon: "lifecycle",
            label: "Segments",
            title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
            body:
              "Cette section explique clairement la fonctionnalite dans Schedulaa.",
          },
        ],
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
  clients360: {
    meta: {
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      description:
        "En savoir plus",
      canonical: `${BASE_URL}/marketing/clients-360`,
      og: {
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "En savoir plus",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
        url: `${BASE_URL}/marketing/clients-360`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        description:
          "En savoir plus",
        image: `${BASE_URL}/images/marketing-clients360-preview.png`,
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
      url: `${BASE_URL}/marketing/clients-360`,
    },
    hero: {
      badge: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      subtitle:
        "En savoir plus",
      primaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing/clients-360" },
      secondaryCta: { label: "Cette section explique clairement la fonctionnalite dans Schedulaa.", href: "/marketing" },
    },
    sections: [
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "En savoir plus",
        body:
          "En savoir plus",
      },
      {
        overline: "En savoir plus",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        body:
          "Cette section explique clairement la fonctionnalite dans Schedulaa.",
      },
      {
        overline: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        title: "Cette section explique clairement la fonctionnalite dans Schedulaa.",
        body:
          "En savoir plus",
        id: "exports",
      },
    ],
    cta: marketingCta,
    secondaryLinks: marketingSecondaryLinks,
  },
};
