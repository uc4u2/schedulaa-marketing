const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";
const LIVE_SERVICE_DEMO = "/demo";

const sharedCta = {
  overline: "الحجوزات, الرواتب",
  title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  body: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  primary: { label: "ابدأ مجانا", href: REGISTER_URL },
  secondary: { label: "تحدث مع فريقنا", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", href: "/website-builder" },
  { label: "التسويق", href: "/marketing" },
  { label: "الحجوزات", href: "/booking/salon" },
  { label: "الجدولة", href: "/booking/tutor" },
  { label: "الحجوزات", href: "/booking/doctor" },
];

const bookingHubConfig = {
  meta: {
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/booking`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
      url: `${BASE_URL}/booking`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    operatingSystem: "Web",
    description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking`,
  },
  hero: {
    badge: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    image: '/images/marketing/showcase/clients-pick2.png',
    imageAlt: 'الحجوزات المعاينة',
    images: [
      { src: '/images/marketing/showcase/service-management.png', alt: 'يوضح هذا القسم تفاصيل الميزة داخل المنصة.' },
      { src: '/images/marketing/showcase/payment-collection3d.png', alt: 'يوضح هذا القسم تفاصيل الميزة داخل المنصة.' },
      { src: '/images/marketing/showcase/clients-pick2.png', alt: 'يوضح هذا القسم تفاصيل الميزة داخل المنصة.' },
      { src: '/images/marketing/showcase/employee-availability.png', alt: 'الموظف' },
    ],
    bullets: [
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "الحجوزات", href: REGISTER_URL },
    secondaryCta: { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  featuresIntro:
    "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "عرض",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/demo",
      linkLabel: "فتح",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "المدير & الفريق",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/booking/salon",
      linkLabel: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/booking/tutor",
      linkLabel: "عرض",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
        "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      ],
      links: [{ label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: LIVE_SERVICE_DEMO }],
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa",
      },
    },
    {
      overline: "me",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
        "اطّلع على التفاصيل",
        "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      ],
      links: [{ label: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.", href: "/demo" }],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "الحجوزات",
      },
    },
    {
      overline: "العمليات",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      points: [
        "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
        "اطّلع على التفاصيل",
      ],
      links: [{ label: "الفريق", href: "/booking/salon" }],
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      },
    },
  ],
  howItWorks: {
    overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    intro:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    steps: [
      {
        title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
      {
        title: "العملاء",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
      {
        title: "الاشعارات",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
    ],
  },
  managerControls: {
    overline: "المدير",
    title: "الفريق",
    body:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    points: [
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "يوضح هذا القسم الميزة بشكل عملي داخل المنصة مع تجربة استخدام واضحة.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    },
  },
  invitations: {
    overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    body:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    points: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Schedulaa",
    },
  },
  checkout: {
    overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    body:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    points: [
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584473457406-6240486418e5?q=80&w=1200&auto=format&fit=crop",
      alt: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    },
  },
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "الحجوزات الجدولة الاسئلة",
  faqIntro: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  faq: [
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "المديرون ?",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const salonConfig = {
  meta: {
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/booking/salon`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
      url: `${BASE_URL}/booking/salon`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    operatingSystem: "Web",
    description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/salon`,
  },
  hero: {
    badge: "الجدولة",
    title: "الحجوزات & الجدولة",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "ابدأ مجانا", href: REGISTER_URL },
    secondaryCta: { label: "a", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "ميزات",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "عرض",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الفريق",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      link: "/booking",
      linkLabel: "عرض الحجوزات",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
        alt: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      },
    },
    {
      overline: "العمليات",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
        alt: "الفريق",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "الحجوزات الاسئلة",
  faq: [
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const tutorConfig = {
  meta: {
    title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/booking/tutor`,
    og: {
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
      url: `${BASE_URL}/booking/tutor`,
    },
    twitter: {
      card: "__",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    operatingSystem: "Web",
    description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/tutor`,
  },
  hero: {
    badge: "الجدولة",
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "ابدأ مجانا", href: REGISTER_URL },
    secondaryCta: { label: "المعاينة الحجوزات", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Schedulaa",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        alt: "المعاينة",
      },
    },
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "الحجوزات",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
        alt: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "الجدولة الاسئلة",
  faq: [
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const doctorConfig = {
  meta: {
    title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    description:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    canonical: `${BASE_URL}/booking/doctor`,
    og: {
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
      url: `${BASE_URL}/booking/doctor`,
    },
    twitter: {
      card: "__",
      title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
    operatingSystem: "Web",
    description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/doctor`,
  },
  hero: {
    badge: "الجدولة",
    title: "الحجوزات",
    subtitle:
      "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    bullets: [
      "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
    ],
    primaryCta: { label: "ابدأ مجانا", href: REGISTER_URL },
    secondaryCta: { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
  featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
  features: [
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
  ],
  highlights: [
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1580281657521-054f5ef49902?q=80&w=1200&auto=format&fit=crop",
        alt: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      },
    },
    {
      overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      body:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      image: {
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        alt: "الفريق",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "الاسئلة الشائعة",
  faqTitle: "الحجوزات الاسئلة",
  faq: [
    {
      question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    },
    {
      question: "هل يدعم هذا الخيار احتياجات فريقك؟",
      answer:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
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
      title: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      description:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      canonical: `${BASE_URL}/booking/spa`,
      og: {
        title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
        url: `${BASE_URL}/booking/spa`,
      },
      twitter: {
        card: "__",
        title: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      name: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      applicationCategory: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
      operatingSystem: "Web",
      description: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      offers: { "@type": "يوضح هذا القسم تفاصيل الميزة داخل المنصة.", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/booking/spa`,
    },
    hero: {
      badge: "الجدولة",
      title: "الحجوزات & الجدولة",
      subtitle:
        "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      bullets: [
        "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
        "يوفر هذا القسم تدفق حجز وجدولة واضحًا مع توفر فوري للفرق والعملاء.",
        "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
      ],
      primaryCta: { label: "ابدأ مجانا", href: REGISTER_URL },
      secondaryCta: { label: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.", href: LIVE_SERVICE_DEMO },
    },
    featuresHeading: "ميزات",
    featuresTitle: "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
    features: [
      {
        icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
      {
        icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
      {
        icon: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        label: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        description:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
    ],
    highlights: [
      {
        overline: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        title: "يوضح هذا القسم تفاصيل الميزة داخل المنصة.",
        body:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
          alt: "الحجوزات",
        },
      },
      {
        overline: "العمليات",
        title: "الفريق",
        body:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
        image: {
          src: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop",
          alt: "الفريق",
        },
      },
    ],
    howItWorks: bookingHubConfig.howItWorks,
    managerControls: bookingHubConfig.managerControls,
    invitations: bookingHubConfig.invitations,
    checkout: bookingHubConfig.checkout,
    faqHeading: "الاسئلة الشائعة",
    faqTitle: "الحجوزات الاسئلة",
    faq: [
      {
        question: "هل يدعم هذا الخيار احتياجات فريقك؟",
        answer:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
      {
        question: "توضح هذه الفقرة الميزة بشكل واضح داخل Schedulaa.",
        answer:
          "يوضح هذا القسم تفاصيل الميزة بشكل واضح داخل المنصة.",
      },
    ],
    cta: sharedCta,
    secondaryLinks: sharedSecondaryLinks,
  },
  tutor: tutorConfig,
  doctor: doctorConfig,
};
