const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";
const LIVE_SERVICE_DEMO = "/demo";

const sharedCta = {
  overline: "الحجوزات والرواتب والمواقع في نظام واحد",
  title: "ابدأ حجز العملاء في نفس يوم التسجيل",
  body: "أطلق الحجز عبر الإنترنت، وانشر التوفر، واربط Stripe بدون تثبيت إضافات أو دمج أدوات متعددة.",
  primary: { label: "ابدأ مجانا", href: REGISTER_URL },
  secondary: { label: "تحدث مع فريقنا", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "منشئ المواقع", href: "/website-builder" },
  { label: "أتمتة التسويق", href: "/marketing" },
  { label: "حجز الصالونات", href: "/booking/salon" },
  { label: "جدولة الدروس", href: "/booking/tutor" },
  { label: "الحجز الطبي", href: "/booking/doctor" },
];

const bookingHubConfig = {
  meta: {
    title: "Online Booking & Team Scheduling with Payments | Schedulaa",
    description:
      "Accept bookings online, manage availability and shifts, send smart invitations with forms, and take payments via Stripe. Powerful calendars and a clean client checkout in one platform.",
    canonical: `${BASE_URL}/booking`,
    og: {
      title: "Online Booking & Team Scheduling with Payments | Schedulaa",
      description:
        "Publish services, show real-time availability, manage staff calendars, and let clients pay with Stripe in one booking platform.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
      url: `${BASE_URL}/booking`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Online Booking & Team Scheduling with Payments | Schedulaa",
      description:
        "Schedulaa combines booking, availability, team calendars, and Stripe checkout in one workflow.",
      image: `${BASE_URL}/images/booking-hub-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Schedulaa Booking & Scheduling",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Online booking, staff availability, team calendars, invitations with forms, and Stripe checkout.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking`,
  },
  hero: {
    badge: "توفر فوري",
    title: "الحجز عبر الإنترنت وجدولة الفريق مع مدفوعات Stripe",
    subtitle:
      "يوفر Schedulaa تدفق حجز متكامل مع توفر فوري، واختيار مقدم الخدمة، وتقويمات الموظفين، والدعوات، وصفحة دفع مدعومة من Stripe.",
    image: '/images/marketing/showcase/clients-pick2.png',
    imageAlt: 'معاينة تدفق حجز العميل',
    images: [
      { src: '/images/marketing/showcase/service-management.png', alt: 'إدارة الخدمات' },
      { src: '/images/marketing/showcase/payment-collection3d.png', alt: 'تحصيل المدفوعات' },
      { src: '/images/marketing/showcase/clients-pick2.png', alt: 'تدفق الدفع' },
      { src: '/images/marketing/showcase/employee-availability.png', alt: 'توفر الموظفين' },
    ],
    bullets: [
      "انشر الخدمات واعرض التوفر المباشر عبر مقدمي الخدمة.",
      "امنح المديرين تقويما رئيسيا مع أدوات إدارة الورديات والإجازات.",
      "قدم للعملاء دفعا سلسا مع الدفع الكامل أو العربون أو حفظ البطاقة.",
    ],
    primaryCta: { label: "ابدأ الحجز عبر الإنترنت", href: REGISTER_URL },
    secondaryCta: { label: "معاينة صفحة خدمة مباشرة", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "لماذا تختار الفرق Schedulaa",
  featuresTitle: "الحجز والجدولة والمدفوعات في مركز واحد",
  featuresIntro:
    "كل شيء من توفر مقدم الخدمة حتى الدفع يتم داخل Schedulaa بدون إدخال مكرر أو إضافات خارجية.",
  features: [
    {
      icon: "availability",
      label: "التوفر",
      title: "اختيار المواعيد في الوقت الفعلي",
      description:
        "اعرض الأوقات المتاحة لكل مقدم خدمة ودع العملاء يختارون الشخص والوقت المناسبين. تتحدث الفترات مباشرة عند تحديث توفر الموظفين.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "عرض التوفر المباشر",
    },
    {
      icon: "meeting",
      label: "روابط عامة",
      title: "صفحات \"احجز معي\" القابلة للمشاركة",
      description:
        "اسمح للموظفين بنشر رابط عام للاستشارات أو المقابلات. التوفر يأتي من جدولهم، وتتضمن التأكيدات رابط Jitsi وروابط الإلغاء وإعادة الجدولة، وتنتقل الحجوزات إلى لوحة الاجتماعات القادمة.",
      link: "/demo",
      linkLabel: "فتح إعدادات الرابط العام",
    },
    {
      icon: "calendar",
      label: "التقويمات",
      title: "تقويمات المدير والفريق",
      description:
        "استخدم التقويم الرئيسي لمراجعة الحجوزات وتغطية الورديات والإجازات. تجعل عروض التوفر المؤسسية التعديلات الجماعية سريعة.",
      link: "/booking/salon",
      linkLabel: "استكشاف حلول القطاعات",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "مدفوعات Stripe عند الحجز",
      description:
        "قدم تدفقات دفع فوري أو عربون أو تحصيل لاحق (بطاقة محفوظة). يدعم الإضافات والقسائم والعرض متعدد العملات والإكراميات.",
      link: "/booking/tutor",
      linkLabel: "عرض خيارات الدفع",
    },
  ],
  highlights: [
    {
      overline: "تجربة العميل",
      title: "توفر فوري مع اختيار مقدم الخدمة",
      body:
        "يرى العملاء الأيام والأوقات المتاحة مسبقا، ثم يختارون فترة ويؤكدون مقدم الخدمة داخل نفس النافذة. يتم توحيد المناطق الزمنية لكل زائر حتى لا يفوّت أحد موعدا.",
      points: [
        "يوضح عرض التقويم بالنقاط الخضراء الأيام التي تحتوي على مواعيد متاحة.",
        "قائمة اختيار مقدم الخدمة المضمنة تعرض المتاحين للوقت المحدد.",
      ],
      links: [{ label: "جرّب تقويما تجريبيا", href: LIVE_SERVICE_DEMO }],
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        alt: "شاشة اختيار الخدمة في Schedulaa",
      },
    },
    {
      overline: "قابلني",
      title: "روابط حجز عامة للموظفين بدون خدمات مدفوعة",
      body:
        "يمكن للموظفين تفعيل رابط عام من لوحة التحكم، وتحديد توفر متكرر، ومشاركته في أي مكان. يختار العملاء وقتا حسب منطقتهم الزمنية؛ وتتضمن التأكيدات اسم منطقتك الزمنية ورابط Jitsi وعناصر الإلغاء وإعادة الجدولة.",
      points: [
        "توفر المضيف يدعم كل من الدعوات والروابط العامة.",
        "لا يتطلب دفعا، وهو مثالي للمقابلات والاستشارات.",
        "تعرض لوحة الاجتماعات القادمة الحجوزات العامة مع تفاصيل المرشحين.",
      ],
      links: [{ label: "تفعيل الحجوزات العامة (يتطلب تسجيل الدخول)", href: "/demo" }],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "مثال على رابط حجز عام",
      },
    },
    {
      overline: "العمليات",
      title: "تقويم المدير مع أدوات التحكم في الورديات والإجازات",
      body:
        "اعرض الحجوزات عبر الأقسام، ووافق على طلبات تبديل الورديات، وأغلق أو افتح نطاقات زمنية متحركة. يضبط الموظفون توفرهم مع بقاء ضوابط المدير.",
      points: [
        "قم بتصفية التقويم الرئيسي حسب القسم أو الموظف أو الحالة.",
        "أغلق أو أبقِ أو أعد فتح نطاقات بشكل جماعي دون المساس بالفترات المحجوزة.",
      ],
      links: [{ label: "مراجعة أدوات توفر الفريق", href: "/booking/salon" }],
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        alt: "نظرة عامة على تقويم فريق Schedulaa",
      },
    },
  ],
  howItWorks: {
    overline: "العملية",
    title: "كيف يعمل الحجز عبر الإنترنت في Schedulaa",
    intro:
      "من نشر الخدمة إلى إرسال التأكيدات واستلام المدفوعات، تحتاج العملية إلى بضع خطوات فقط.",
    steps: [
      {
        title: "نشر الخدمات ومقدمي الخدمة",
        description:
          "حدد الخدمات ومددها وأسعارها وعيّن مقدمي الخدمة. يتم تحديث التوفر مباشرة في صفحة العميل.",
      },
      {
        title: "اختيار العميل للوقت ومقدم الخدمة",
        description:
          "يفتح الزوار صفحة الحجز، ويختارون يوما ووقتا، ثم يؤكدون مقدم الخدمة الأنسب.",
      },
      {
        title: "الدفع والإشعارات",
        description:
          "يدفع العملاء أو يتركون عربونا أو يحفظون بطاقة. تتزامن المواعيد والإيصالات مع التقويمات، ويرى الموظفون الحجز فورا.",
      },
    ],
  },
  managerControls: {
    overline: "ضوابط المدير",
    title: "حافظ على تقويم فريقك متناسقا",
    body:
      "تساعد أدوات التقويم القوية المديرين على ضبط السعة مع إبقاء الموظفين مسيطرين على جداولهم.",
    points: [
      "تقويم رئيسي مع فلاتر حسب القسم أو الموظف أو الوردية.",
      "إغلاق أيام جماعيا، أو إبقاء نطاقات محددة، أو تعديل فترات منفردة.",
      "الموافقة على طلبات التبديل وتتبع الإجازات من نفس لوحة التحكم.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      alt: "ضوابط تقويم المدير في Schedulaa",
    },
  },
  invitations: {
    overline: "الدعوات ونماذج الاستقبال",
    title: "أرسل دعوات مخصصة حسب التخصص مع نماذج",
    body:
      "أنشئ دعوات تتضمن أسماء العملاء وروابط حجز فريدة ومتطلبات الاستقبال. أرفق الاستبيانات ليملأ الضيوف النماذج الطبية أو نماذج الانضمام قبل الوصول.",
    points: [
      "قوالب تخصصية للمجندين والأطباء والصالونات والمعلمين وغيرهم.",
      "متغيرات تلقائية مثل {client_name} و {booking_link} تُدرج في رسائل البريد.",
      "إرفاق استبيانات مع اشتراط إكمالها بعد الحجز.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop",
      alt: "محرر الدعوات في Schedulaa",
    },
  },
  checkout: {
    overline: "دفع العميل",
    title: "مدفوعات مرنة وإكراميات مدعومة بـ Stripe",
    body:
      "قدم الدفع الكامل أو العربون أو التحصيل اللاحق ببطاقة محفوظة. يمكن للعملاء إضافة إكرامية أو تطبيق قسائم، وتعرض صفحة النجاح كل بنود الخدمات أو المنتجات المشتراة.",
    points: [
      "دعم الإكراميات بنسبة مئوية أو مبلغ ثابت مع إضافات اختيارية.",
      "تهيئة سياسات الدفع لكل شركة (دفع، عربون، تحصيل).",
      "معالجة الإيصالات وحفظ البطاقات عبر Stripe Connect.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584473457406-6240486418e5?q=80&w=1200&auto=format&fit=crop",
      alt: "شاشة الدفع للحجز في Schedulaa",
    },
  },
  faqHeading: "الأسئلة الشائعة",
  faqTitle: "أسئلة الحجز والجدولة",
  faqIntro: "إجابات مبنية على ما يقدمه Schedulaa فعليا في بيئة الإنتاج اليوم.",
  faq: [
    {
      question: "كيف يختار العملاء مقدم الخدمة؟",
      answer:
        "بمجرد أن يختار العميل وقتا، يعرض Schedulaa مقدمي الخدمة المتاحين لتلك الفترة. ثم يختار العميل الشخص المناسب قبل التأكيد.",
    },
    {
      question: "هل يمكن للمديرين تعديل التوفر بشكل جماعي؟",
      answer:
        "نعم. تتيح أدوات التوفر المؤسسية للمديرين إغلاق يوم كامل، أو الإغلاق قبل/بعد وقت معين، أو الإبقاء على نطاق محدد مع الحفاظ على الحجوزات الحالية.",
    },
    {
      question: "هل تدعمون العربون أو حفظ البطاقة؟",
      answer:
        "بالتأكيد. يمكن للشركات اختيار الدفع الفوري أو العربون أو التحصيل ببطاقة محفوظة. يعالج Stripe المدفوعات بأمان في كل الحالات.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const salonConfig = {
  meta: {
    title: "Salon Booking Software with Online Payments | Schedulaa",
    description:
      "Let salon clients pick stylists and times, manage chairs and shifts, and collect payments or tips with Stripe. Real-time availability and team calendars built in.",
    canonical: `${BASE_URL}/booking/salon`,
    og: {
      title: "Salon Booking & Staff Scheduling | Schedulaa",
      description:
        "Real-time stylist availability, team calendars, deposits, add-ons, and tips — all in one salon booking platform.",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
      url: `${BASE_URL}/booking/salon`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Salon Booking & Staff Scheduling | Schedulaa",
      description:
        "Schedulaa powers salon booking, stylist availability, shift calendars, and Stripe checkout with add-ons and tips.",
      image: `${BASE_URL}/images/booking-salon-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Schedulaa Salon Booking",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Salon booking, staff availability, team scheduling, and Stripe payments in one platform.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/salon`,
  },
  hero: {
    badge: "Salon scheduling",
    title: "Salon Booking & Staff Scheduling",
    subtitle:
      "Let clients choose stylists and times while you manage chairs, shifts, and leave. Stripe checkout handles deposits, add-ons, and tips automatically.",
    bullets: [
      "Show stylist availability with real-time slot selection.",
      "Manage chair assignments, shift coverage, and time-off requests.",
      "Collect deposits, tips, and add-ons during checkout.",
    ],
    primaryCta: { label: "Start free", href: REGISTER_URL },
    secondaryCta: { label: "View a live service page", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Salon-ready features",
  featuresTitle: "Stylists, shifts, and payments covered",
  features: [
    {
      icon: "availability",
      label: "Stylists",
      title: "Real-time stylist availability",
      description:
        "Show which stylists have openings, let guests pick their favorite, and keep calendars in sync even when shifts change.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "See stylist picker",
    },
    {
      icon: "calendar",
      label: "Chairs",
      title: "Team availability calendar",
      description:
        "Track chair usage, close ranges for color processing, and keep service durations aligned with your staff schedule.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Deposits, add-ons, tips",
      description:
        "Offer pay-in-full or deposit modes and upsell add-ons like deep conditioning. Clients add tips at checkout with one tap.",
      link: "/booking",
      linkLabel: "See full booking flow",
    },
  ],
  highlights: [
    {
      overline: "Stylist picker",
      title: "Real-time availability across stylists",
      body:
        "Clients see which stylists are available for their chosen time. The provider modal sits right inside the booking flow so they never lose their spot.",
      image: {
        src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
        alt: "Salon stylist availability",
      },
    },
    {
      overline: "Operations",
      title: "Manage chairs, shifts, and leave",
      body:
        "Use the enterprise availability calendar to bulk-close chairs, limit morning or evening slots, and approve stylist time off without breaking the booking flow.",
      image: {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
        alt: "Salon team calendar",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Salon booking questions",
  faq: [
    {
      question: "Can clients pick a specific stylist?",
      answer:
        "Yes. When guests choose a time, Schedulaa lists the stylists who are available. They pick the stylist before confirming.",
    },
    {
      question: "Do you support chair-based schedules?",
      answer:
        "Enterprise availability views let you manage chairs, block out processing time, and keep slots aligned with stylist shifts.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const tutorConfig = {
  meta: {
    title: "Tutor Scheduling & Booking App with Payments | Schedulaa",
    description:
      "Let students book sessions, manage tutor availability, send personalized invitations, and collect payments with Stripe in one platform.",
    canonical: `${BASE_URL}/booking/tutor`,
    og: {
      title: "Tutor Scheduling & Payment in One Place | Schedulaa",
      description:
        "Publish tutor availability, send invitations with intake questions, and take payment or store cards for follow-up charges.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
      url: `${BASE_URL}/booking/tutor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Tutor Scheduling & Payment in One Place | Schedulaa",
      description:
        "Schedulaa helps tutoring teams manage availability, invitations, and Stripe payments in one dashboard.",
      image: `${BASE_URL}/images/booking-tutor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Schedulaa Tutor Scheduling",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Tutor scheduling, invitations, and Stripe payments in one workflow.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/tutor`,
  },
  hero: {
    badge: "Tutor scheduling",
    title: "Tutor Scheduling & Payment in One Place",
    subtitle:
      "Students pick a time in seconds while tutors control availability, rescheduling, and invitations with custom questionnaires. Stripe handles payments or card-on-file capture.",
    bullets: [
      "Real-time tutor availability with provider choice.",
      "Personalized invitations and intake forms for each session.",
      "Card-on-file capture to charge after the session if needed.",
    ],
    primaryCta: { label: "Start free", href: REGISTER_URL },
    secondaryCta: { label: "Preview booking flow", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Why tutors love Schedulaa",
  featuresTitle: "Availability, forms, and payments covered",
  features: [
    {
      icon: "availability",
      label: "Availability",
      title: "Tutor-controlled schedules",
      description:
        "Tutors publish one-time or recurring availability, drag and drop changes, and keep students in the loop automatically.",
    },
    {
      icon: "form",
      label: "Invitations",
      title: "Personalized outreach",
      description:
        "Send branded invitations with session details, auto variables, and required student questionnaires.",
    },
    {
      icon: "payment",
      label: "Payments",
      title: "Card on file or upfront payment",
      description:
        "Charge for sessions up front or save the card to settle after the appointment — all through Stripe capture flows.",
    },
  ],
  highlights: [
    {
      overline: "Invitations",
      title: "Templates for every tutoring program",
      body:
        "Build templates that auto-fill student names, lesson topics, upload links, or homework fields. Require questionnaires so you know what to prepare.",
      image: {
        src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop",
        alt: "Tutor invitation preview",
      },
    },
    {
      overline: "Rescheduling",
      title: "Student-friendly booking management",
      body:
        "Students can reschedule within policy limits, and tutors get instant notifications. Availability updates automatically across calendars.",
      image: {
        src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
        alt: "Tutor calendar management",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Tutor scheduling questions",
  faq: [
    {
      question: "Can I save a student's card for later?",
      answer:
        "Yes. Use the capture (card-on-file) checkout mode to store the card securely via Stripe and charge after the session.",
    },
    {
      question: "Can I send custom questionnaires?",
      answer:
        "Absolutely. Attach questionnaires to invitations so students complete intake forms after they confirm a booking.",
    },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

const doctorConfig = {
  meta: {
    title: "Doctor Appointment Scheduler with Intake Forms | Schedulaa",
    description:
      "Give patients a clean booking flow, attach medical intake forms, manage departments, and handle payments or card capture with Stripe.",
    canonical: `${BASE_URL}/booking/doctor`,
    og: {
      title: "Medical Booking with Intake Questionnaires | Schedulaa",
      description:
        "Attach medical questionnaires, manage staff calendars, and let patients complete checkout in a HIPAA-friendly Stripe flow.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
      url: `${BASE_URL}/booking/doctor`,
    },
    twitter: {
      card: "summary_large_image",
      title: "Medical Booking with Intake Questionnaires | Schedulaa",
      description:
        "Schedulaa powers medical booking, intake questionnaires, staff calendar management, and Stripe receipts in one platform.",
      image: `${BASE_URL}/images/booking-doctor-preview.png`,
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Schedulaa Medical Booking",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Medical booking, intake questionnaires, staff scheduling, and Stripe checkout in one workflow.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    url: `${BASE_URL}/booking/doctor`,
  },
  hero: {
    badge: "Medical scheduling",
    title: "Medical Booking with Intake Questionnaires",
    subtitle:
      "Attach medical questionnaires to invitations, require patients to complete forms, and keep provider calendars synced. Stripe receipts ensure payments and card data stay secure.",
    bullets: [
      "Provider calendars scoped by department or specialty.",
      "Required intake forms attached to invites and follow-up emails.",
      "Stripe receipts and card storage handled via Stripe Connect.",
    ],
    primaryCta: { label: "Start free", href: REGISTER_URL },
    secondaryCta: { label: "Preview a patient booking", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Clinic-ready workflows",
  featuresTitle: "Scheduling, intake, and payments on one platform",
  features: [
    {
      icon: "availability",
      label: "Providers",
      title: "Department-based availability",
      description:
        "Group providers by department or specialty, surface the right calendar to patients, and filter views in the manager dashboard.",
    },
    {
      icon: "form",
      label: "Intake",
      title: "Required questionnaires",
      description:
        "Attach medical questionnaires to every invitation. Patients must complete forms before the booking is confirmed.",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Secure payments and receipts",
      description:
        "Collect payments or save a card via Stripe during checkout. Receipts include itemized services for patient records.",
    },
  ],
  highlights: [
    {
      overline: "Intake workflow",
      title: "Attach and enforce medical questionnaires",
      body:
        "Every invitation can include a required questionnaire. Patients complete forms immediately after selecting a time, keeping compliance on track.",
      image: {
        src: "https://images.unsplash.com/photo-1580281657521-054f5ef49902?q=80&w=1200&auto=format&fit=crop",
        alt: "Medical intake questionnaire",
      },
    },
    {
      overline: "Calendars",
      title: "Department and provider views",
      body:
        "Master and team calendars highlight provider schedules, leaves, and on-call coverage. Bulk close days for internal meetings without canceling booked visits.",
      image: {
        src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
        alt: "Medical team calendar",
      },
    },
  ],
  howItWorks: bookingHubConfig.howItWorks,
  managerControls: bookingHubConfig.managerControls,
  invitations: bookingHubConfig.invitations,
  checkout: bookingHubConfig.checkout,
  faqHeading: "FAQ",
  faqTitle: "Medical booking questions",
  faq: [
    {
      question: "Can I require questionnaires before booking?",
      answer:
        "Yes. Attach questionnaires to invitations and mark them as mandatory. Patients must complete the form to finish the booking.",
    },
    {
      question: "Do you support departments or specialties?",
      answer:
        "Absolutely. Organize calendars by department, filter views by provider, and keep leave and shift coverage visible to managers.",
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
      title: "Spa Booking Software with Memberships & Payments | Schedulaa",
      description:
        "Give spa guests a relaxing booking experience, manage therapists and rooms, and collect deposits, add-ons, and tips at checkout.",
      canonical: `${BASE_URL}/booking/spa`,
      og: {
        title: "Spa Booking & Staff Scheduling | Schedulaa",
        description:
          "Manage therapist availability, room capacity, intake forms, and Stripe checkout with deposits and tips.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
        url: `${BASE_URL}/booking/spa`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Spa Booking & Staff Scheduling | Schedulaa",
        description:
          "Schedulaa brings spa booking, therapist availability, room calendars, and Stripe payments into one flow.",
        image: `${BASE_URL}/images/booking-spa-preview.png`,
      },
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Schedulaa Spa Booking",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Spa booking, therapist scheduling, intake forms, and Stripe checkout in one platform.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      url: `${BASE_URL}/booking/spa`,
    },
    hero: {
      badge: "Spa scheduling",
      title: "Spa Booking & Therapist Scheduling",
      subtitle:
        "Guests book treatments online, therapists manage their own schedules, and managers assign rooms while Stripe handles deposits, add-ons, and tips.",
      bullets: [
        "Display therapist availability and room capacity in real time.",
        "Attach wellness intake forms to bookings.",
        "Collect deposits or full payment with tips and add-ons.",
      ],
      primaryCta: { label: "Start free", href: REGISTER_URL },
      secondaryCta: { label: "Preview a spa booking", href: LIVE_SERVICE_DEMO },
    },
    featuresHeading: "Spa-friendly features",
    featuresTitle: "Keep therapists, rooms, and payments aligned",
    features: [
      {
        icon: "availability",
        label: "Therapists",
        title: "Therapist and room availability",
        description:
          "Map therapists to rooms, show combined availability to guests, and keep treatment durations aligned with the calendar.",
      },
      {
        icon: "form",
        label: "Intake",
        title: "Wellness questionnaires",
        description:
          "Require wellness or medical questionnaires before the visit so therapists know the guest profile ahead of time.",
      },
      {
        icon: "payment",
        label: "Checkout",
        title: "Deposits, packages, tips",
        description:
          "Accept deposits, upsell add-ons like aromatherapy, apply packages or coupons, and handle tips at checkout.",
      },
    ],
    highlights: [
      {
        overline: "Guest experience",
        title: "Room-aware availability picker",
        body:
          "Schedulaa shows openings that consider both therapist schedules and room limits, so guests only see valid times.",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
          alt: "Spa booking availability",
        },
      },
      {
        overline: "Operations",
        title: "Team calendar with room controls",
        body:
          "Use the team availability calendar to block rooms for maintenance, close time ranges for deep cleans, or keep specific windows open.",
        image: {
          src: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1200&auto=format&fit=crop",
          alt: "Spa team calendar",
        },
      },
    ],
    howItWorks: bookingHubConfig.howItWorks,
    managerControls: bookingHubConfig.managerControls,
    invitations: bookingHubConfig.invitations,
    checkout: bookingHubConfig.checkout,
    faqHeading: "FAQ",
    faqTitle: "Spa booking questions",
    faq: [
      {
        question: "Can I assign rooms as well as therapists?",
        answer:
          "Yes. Map rooms to services, and Schedulaa keeps both therapist and room availability in sync.",
      },
      {
        question: "Can I require wellness forms?",
        answer:
          "Absolutely. Attach questionnaires to each booking so guests complete wellness or consent forms before arrival.",
      },
    ],
    cta: sharedCta,
    secondaryLinks: sharedSecondaryLinks,
  },
  tutor: tutorConfig,
  doctor: doctorConfig,
};
