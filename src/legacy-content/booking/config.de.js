const BASE_URL = "https://www.schedulaa.com";
const REGISTER_URL = "/register";
const CONTACT_URL = "/contact";
const LIVE_SERVICE_DEMO = "/demo";

const sharedCta = {
  overline: "Buchung, Lohnabrechnung und Websites in einem System",
  title: "Beginnen Sie noch am Tag der Anmeldung mit Online-Buchungen",
  body: "Starten Sie Online-Buchungen, veroeffentlichen Sie Verfuegbarkeiten und verbinden Sie Stripe, ohne Plugins zu installieren oder Tools zusammenzufuegen.",
  primary: { label: "Kostenlos starten", href: REGISTER_URL },
  secondary: { label: "Mit unserem Team sprechen", href: CONTACT_URL },
};

const sharedSecondaryLinks = [
  { label: "Website-Builder", href: "/website-builder" },
  { label: "Marketing-Automatisierung", href: "/marketing" },
  { label: "Salon-Buchung", href: "/booking/salon" },
  { label: "Nachhilfe-Terminplanung", href: "/booking/tutor" },
  { label: "Medizinische Terminbuchung", href: "/booking/doctor" },
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
    badge: "Verfuegbarkeit in Echtzeit",
    title: "Online-Buchung und Teamplanung mit Stripe-Zahlungen",
    subtitle:
      "Schedulaa bietet einen vollstaendigen Buchungsablauf mit Echtzeit-Verfuegbarkeit, Anbieterauswahl, Mitarbeiterkalendern, Einladungen und Stripe-Checkout.",
    image: '/images/marketing/showcase/clients-pick2.png',
    imageAlt: 'Vorschau des Kunden-Buchungsablaufs',
    images: [
      { src: '/images/marketing/showcase/service-management.png', alt: 'Serviceverwaltung' },
      { src: '/images/marketing/showcase/payment-collection3d.png', alt: 'Zahlungserfassung' },
      { src: '/images/marketing/showcase/clients-pick2.png', alt: 'Checkout-Ablauf' },
      { src: '/images/marketing/showcase/employee-availability.png', alt: 'Mitarbeiterverfuegbarkeit' },
    ],
    bullets: [
      "Veroeffentlichen Sie Services und zeigen Sie Live-Verfuegbarkeit ueber alle Anbieter hinweg.",
      "Bieten Sie Managern einen Master-Kalender mit Schicht- und Abwesenheitssteuerung.",
      "Bieten Sie Kunden einen reibungslosen Checkout mit Zahlung, Anzahlung oder gespeicherter Karte.",
    ],
    primaryCta: { label: "Online-Buchung starten", href: REGISTER_URL },
    secondaryCta: { label: "Live-Service-Seite ansehen", href: LIVE_SERVICE_DEMO },
  },
  featuresHeading: "Warum Teams Schedulaa waehlen",
  featuresTitle: "Buchung, Planung und Zahlungen in einem Hub",
  featuresIntro:
    "Alles von der Anbieterverfuegbarkeit bis zum Checkout passiert in Schedulaa - ohne doppelte Eingaben oder Zusatz-Plugins.",
  features: [
    {
      icon: "availability",
      label: "Verfuegbarkeit",
      title: "Echtzeit-Slot-Auswahl",
      description:
        "Zeigen Sie freie Zeiten pro Anbieter und lassen Sie Kunden Person und Termin waehlen. Slots passen sich sofort an, wenn Mitarbeitende ihre Verfuegbarkeit aktualisieren.",
      link: LIVE_SERVICE_DEMO,
      linkLabel: "Live-Verfuegbarkeit ansehen",
    },
    {
      icon: "meeting",
      label: "Oeffentliche Links",
      title: "Teilbare \"Buchen Sie bei mir\"-Seiten",
      description:
        "Lassen Sie Mitarbeitende einen oeffentlichen Link fuer Beratungen oder Interviews veroeffentlichen. Die Verfuegbarkeit stammt aus ihrem Kalender, Bestaetigungen enthalten Jitsi sowie Storno-/Umbuchungslinks, und Buchungen fliessen in \"Anstehende Meetings\".",
      link: "/demo",
      linkLabel: "Einstellungen fuer oeffentliche Links oeffnen",
    },
    {
      icon: "calendar",
      label: "Kalender",
      title: "Manager- und Teamkalender",
      description:
        "Nutzen Sie den Master-Kalender, um Buchungen, Schichtabdeckung und Abwesenheit zu pruefen. Enterprise-Verfuegbarkeitsansichten machen Massenanpassungen schnell.",
      link: "/booking/salon",
      linkLabel: "Branchenspezifische Loesungen entdecken",
    },
    {
      icon: "payment",
      label: "Checkout",
      title: "Stripe-Zahlungen bei der Buchung",
      description:
        "Bieten Sie Checkout-Ablaufe mit Sofortzahlung, Anzahlung oder Capture (Karte hinterlegt). Unterstuetzen Sie Add-ons, Gutscheine, Mehrwaehrung und Trinkgeld.",
      link: "/booking/tutor",
      linkLabel: "Zahlungsoptionen ansehen",
    },
  ],
  highlights: [
    {
      overline: "Kundenerlebnis",
      title: "Echtzeit-Verfuegbarkeit mit Anbieterauswahl",
      body:
        "Kunden sehen offene Tage und Zeiten sofort, waehlen einen Slot und bestaetigen ihren Anbieter im selben Dialog. Zeitzonen werden fuer jeden Besucher normalisiert, damit niemand einen Termin verpasst.",
      points: [
        "Die Kalenderansicht mit gruenen Punkten zeigt Tage mit freien Terminen.",
        "Der Inline-Anbieterauswahler zeigt, wer zur gewaehlten Zeit verfuegbar ist.",
      ],
      links: [{ label: "Demo-Kalender testen", href: LIVE_SERVICE_DEMO }],
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Schedulaa-Bildschirm fuer Serviceauswahl",
      },
    },
    {
      overline: "Treffen mit mir",
      title: "Oeffentliche Mitarbeiter-Buchungslinks ohne Bezahlservice",
      body:
        "Mitarbeitende koennen einen oeffentlichen Link im Dashboard aktivieren, wiederkehrende Verfuegbarkeit festlegen und ihn ueberall teilen. Kunden waehlen eine Zeit in ihrer lokalen Zeitzone; Bestaetigungen enthalten Ihre Zeitzone, den Jitsi-Link und Storno-/Umbuchungsoptionen.",
      points: [
        "Host-seitige Verfuegbarkeit steuert sowohl Einladungen als auch oeffentliche Links.",
        "Keine Zahlung erforderlich - ideal fuer Interviews und Beratungen.",
        "\"Anstehende Meetings\" zeigt oeffentliche Buchungen mit Kandidatendetails.",
      ],
      links: [{ label: "Oeffentliche Buchungen aktivieren (Login erforderlich)", href: "/demo" }],
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        alt: "Beispiel fuer oeffentlichen Buchungslink",
      },
    },
    {
      overline: "Betrieb",
      title: "Manager-Kalender mit Schicht- und Abwesenheitssteuerung",
      body:
        "Sehen Sie Buchungen ueber Abteilungen hinweg, genehmigen Sie Tausch-Anfragen und schliessen oder oeffnen Sie rollierende Zeitfenster. Mitarbeitende passen ihre Verfuegbarkeit an, waehrend Manager Leitplanken setzen.",
      points: [
        "Filtern Sie den Master-Kalender nach Abteilung, Mitarbeitendem oder Status.",
        "Schliessen, behalten oder oeffnen Sie Bereiche gesammelt, ohne gebuchte Slots zu veraendern.",
      ],
      links: [{ label: "Tools fuer Team-Verfuegbarkeit pruefen", href: "/booking/salon" }],
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
        alt: "Uebersicht des Schedulaa-Teamkalenders",
      },
    },
  ],
  howItWorks: {
    overline: "Ablauf",
    title: "So funktioniert Online-Buchung in Schedulaa",
    intro:
      "Vom Veroeffentlichen eines Services bis zu Bestaetigungen und Zahlungen braucht der Ablauf nur wenige Schritte.",
    steps: [
      {
        title: "Services und Anbieter veroeffentlichen",
        description:
          "Definieren Sie Services, Dauer und Preise und weisen Sie Anbieter zu. Die Verfuegbarkeit aktualisiert sich sofort fuer die Kundenseite.",
      },
      {
        title: "Kunden waehlen Zeit und Anbieter",
        description:
          "Besucher oeffnen Ihre Buchungsseite, waehlen einen Tag, einen Termin und bestaetigen den passenden Anbieter.",
      },
      {
        title: "Checkout und Benachrichtigungen",
        description:
          "Kunden zahlen, hinterlegen eine Anzahlung oder speichern eine Karte. Termine und Belege werden mit Kalendern synchronisiert, und Mitarbeitende sehen die Buchung sofort.",
      },
    ],
  },
  managerControls: {
    overline: "Manager-Steuerung",
    title: "Halten Sie Ihren Teamkalender abgestimmt",
    body:
      "Leistungsstarke Kalenderfunktionen helfen Managern, Kapazitaet zu sichern und gleichzeitig Mitarbeitenden Kontrolle ueber eigene Plaene zu geben.",
    points: [
      "Master-Kalender mit Filtern nach Abteilung, Mitarbeitendem oder Schicht.",
      "Schliessen Sie Tage gesammelt, behalten Sie bestimmte Bereiche oder bearbeiten Sie einzelne Slots.",
      "Genehmigen Sie Tausch-Anfragen und verfolgen Sie Abwesenheiten im selben Dashboard.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop",
      alt: "Steuerung des Schedulaa-Managerkalenders",
    },
  },
  invitations: {
    overline: "Einladungen und Intake",
    title: "Berufsbezogene Einladungen mit Formularen senden",
    body:
      "Erstellen Sie Einladungen mit Kundennamen, eindeutigen Buchungslinks und Intake-Anforderungen. Fuegen Sie Frageboegen hinzu, damit Gaeste medizinische oder Onboarding-Formulare vorab ausfuellen.",
    points: [
      "Branchentemplates fuer Recruiter, Aerzte, Salons, Nachhilfe und mehr.",
      "Automatische Variablen wie {client_name} und {booking_link} werden in E-Mails eingefuegt.",
      "Frageboegen anhaengen und Abschluss nach der Buchung verpflichtend machen.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Schedulaa-Einladungseditor",
    },
  },
  checkout: {
    overline: "Kunden-Checkout",
    title: "Flexible Zahlungen und Trinkgeld mit Stripe",
    body:
      "Bieten Sie Vollzahlung, Anzahlungen oder Card-on-File-Capture. Kunden koennen Trinkgeld geben oder Gutscheine anwenden, und die Erfolgsseite zeigt jede Position fuer gekaufte Services oder Produkte.",
    points: [
      "Unterstuetzen Sie prozentuales oder festes Trinkgeld und optionale Add-ons.",
      "Konfigurieren Sie unternehmensbezogene Zahlungsrichtlinien (Zahlung, Anzahlung, Capture).",
      "Belege und Kartenspeicherung werden ueber Stripe Connect abgewickelt.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1584473457406-6240486418e5?q=80&w=1200&auto=format&fit=crop",
      alt: "Schedulaa-Buchungs-Checkout-Bildschirm",
    },
  },
  faqHeading: "FAQ",
  faqTitle: "Fragen zu Buchung und Terminplanung",
  faqIntro: "Antworten auf Basis dessen, was Schedulaa heute produktiv bereitstellt.",
  faq: [
    {
      question: "Wie waehlen Kunden einen Anbieter aus?",
      answer:
        "Sobald ein Kunde eine Zeit waehlt, zeigt Schedulaa die fuer diesen Slot verfuegbaren Anbieter. Vor der Bestaetigung waehlen sie die gewuenschte Person.",
    },
    {
      question: "Koennen Manager Verfuegbarkeiten gesammelt bearbeiten?",
      answer:
        "Ja. Mit Enterprise-Verfuegbarkeitstools koennen Manager einen ganzen Tag schliessen, Zeiten vor oder nach einem Zeitpunkt sperren oder nur einen bestimmten Bereich offen lassen - bei Erhalt bestehender Buchungen.",
    },
    {
      question: "Unterstuetzen Sie Anzahlungen oder das Speichern einer Karte?",
      answer:
        "Absolut. Unternehmen waehlen Richtlinien fuer Sofortzahlung, Anzahlung oder Card-on-File-Capture. Stripe verarbeitet Zahlungen in jedem Fall sicher.",
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
