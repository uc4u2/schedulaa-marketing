export const workforcePage = {
  meta: {
    title: 'Centre de commande de la main-d oeuvre | Suivi du temps, planification et paie',
    description:
      'Close the loop with Schedulaa’s workforce command center—clock-in/out policies, approvals, availability, and payroll-ready exports in one dashboard.',
  },
  hero: {
    badge: 'Main-d oeuvre',
    title: 'Centre de pilotage RH tout-en-un',
    subtitle:
      'Schedulaa already unified online scheduling, payroll, and website pages. Now we’ve closed the loop on time tracking so hours, templates, policy audits, and payroll-ready approvals live in one dashboard—with IP/device hints captured automatically for every punch.',
    image: '/images/marketing/showcase/time-tracking.png',
    imageAlt: 'Schedulaa time tracking workspace',
    images: [
      { src: '/images/marketing/payroll-manage.png', alt: 'Payroll management' },
      { src: '/images/marketing/shift-pre.png', alt: 'Shift management' },
      { src: '/images/marketing/showcase/t4.png', alt: 'T4 generation' },
      { src: '/images/marketing/showcase/w2-4d.png', alt: 'W-2 generation' },
    ],
    primaryCta: { label: 'Commencer gratuitement', href: '/register' },
    secondaryCta: { label: 'Demander une presentation', href: '/contact' },
  },
  sections: [
    {
      title: 'Pointage en temps reel avec application des regles',
      points: [
        'Employees clock in/out from the streamlined My Time workspace with a live timer that subtracts break minutes, shows hours worked, and visualizes the shift timeline.',
        'Break controls respect company policy—managers define default windows inside shift templates and the employee UI enforces them for payroll, flagging missed or overdue breaks instantly.',
        'Personal weekly insights (for example “32h worked • 2h overtime • 3 breaks taken”) keep the process transparent.',
      ],
    },
    {
      title: 'Supervision niveau manager',
      points: [
        'Every time entry flows into the approvals page where supervisors filter by department, employee, or status before approving or rejecting—even mid-shift if something looks off.',
        'IP/device hints expose unusual punch locations while compliance chips surface shifts missing breaks or trending toward overtime.',
        'Need to correct multiple entries? Apply a break or shift template across selected rows and update everything at once.',
      ],
    },
    {
      title: 'Modeles de shifts avec conformite integree',
      points: [
        'Templates capture break start/end times, duration, paid/unpaid flags, and availability links.',
        'Applying a template pushes those rules into every shift assignment and the employee clock UI automatically—no manual edits.',
        'Force clock-out and annotate overdue shifts so approvals stay clean for payroll.',
      ],
    },
    {
      title: 'Exports prets pour la paie',
      points: [
        'Approved entries carry metadata for both supervisors and payroll teams (who approved, when, policy references, and punch location hints).',
        'Exports stay clean, audits stay simple, and payroll files ingest directly into accounting.',
      ],
    },
  ],
  cta: {
    overline: 'Main-d oeuvre + payroll together',
    title:
      'Reservation, planification, paie, sites web et suivi du temps conforme aux regles dans la meme plateforme.',
    body: 'No spreadsheets, no copy/paste, and no compliance surprises.',
    primary: { label: 'Voir l espace de suivi du temps', href: '/register' },
    secondary: { label: 'Parler aux ventes', href: '/contact' },
  },
};

export const industriesPage = {
  meta: {
    title: 'Annuaire des secteurs | Schedulaa booking sites by industry',
    description:
      'Browse Schedulaa-powered workflows by industry. Discover salons, clinics, fitness studios, legal services, and more using unified scheduling, payroll, and commerce.',
  },
  hero: {
    badge: 'Industries',
    title: 'Parcourir par secteur',
    subtitle:
      'Pick an industry to see how businesses use Schedulaa for booking, payroll, workforce operations, websites, and commerce.',
    primaryCta: { label: 'Explorer les reservations', href: '/booking' },
    secondaryCta: { label: 'Contacter l equipe', href: '/contact' },
  },
  sections: [
    {
      title: 'Verticales populaires',
      items: [
        { title: 'Salons & spas', body: 'Real-time stylist booking, tips, and retention campaigns.' },
        { title: 'Healthcare clinics', body: 'Scheduling, reminders, and documentation-aware workflows.' },
        { title: 'Tutors & educators', body: 'Session booking, recurring schedules, and attendance trails.' },
        { title: 'Creative studios', body: 'Client journey automation from booking to payroll.' },
        { title: 'Legal & professional services', body: 'Structured intake, scheduling, and secure records.' },
        { title: 'Multi-location teams', body: 'Branch-aware controls for staffing, payroll, and analytics.' },
      ],
    },
  ],
};

export const statusPage = {
  meta: {
    title: 'Schedulaa Statut | System Availability',
    description: 'Real-time system status for Schedulaa booking, payroll, HR, websites, and integrations.',
  },
  hero: {
    badge: 'Statut',
    title: 'Tous les systemes operationnels',
    subtitle:
      'Monitor platform health, incident history, and upcoming maintenance across booking, payroll, websites, and integrations.',
    primaryCta: { label: 'S abonner aux alertes', href: 'mailto:status@schedulaa.com' },
    secondaryCta: { label: 'RSS feed', href: 'https://status.schedulaa.com/rss' },
  },
  sections: [
    {
      title: 'Service availability',
      items: [
        { title: 'Schedulaa Dashboard & Login', body: 'Operationnel' },
        { title: 'API reservations et rendez-vous', body: 'Operationnel' },
        { title: 'Stripe Payments & Checkout', body: 'Operationnel' },
        { title: 'Paie et conformite (US et Canada)', body: 'Operationnel' },
        { title: 'Createur de site / hebergement', body: 'Operationnel' },
        { title: 'Notifications et emails marketing', body: 'Operationnel' },
      ],
    },
    {
      title: 'Exemple d incident recent',
      points: [
        'October 10, 2025: Temporary slowdown in appointment booking API due to a caching layer misconfiguration.',
        'Impact: 4% of requests experienced increased latency for roughly 18 minutes.',
        'Resolution: Reverted update and redeployed stable cache instance.',
      ],
    },
    {
      title: 'Apercu de disponibilite',
      points: ['Last 24 hours: 100%', 'Last 7 days: 99.97%', 'Last 30 days: 99.99%', 'Last 90 days: 99.98%'],
    },
  ],
};

export const roadmapPage = {
  hero: {
    badge: 'Feuille de route',
    title: 'Demandes de feuille de route produit',
    subtitle:
      'Share roadmap requests with our team at admin@schedulaa.com. We review customer feedback continuously and publish updates in release notes.',
    primaryCta: { label: 'Envoyer une demande par email', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Voir le statut', href: '/status' },
  },
};

export const demoPage = {
  meta: {
    title: 'Schedulaa Demo Login | Test the Manager Dashboard',
    description:
      'Use the shared manager credentials to explore scheduling, payroll, compliance, automation, and integrations to Zapier, QuickBooks, and Xero.',
  },
  hero: {
    badge: 'Demo / Essai',
    title: 'Experience the Schedulaa manager dashboard in minutes',
    subtitle:
      'Use the shared staging login to explore scheduling, time tracking, payroll, compliance, Automatisation Zapiers, and accounting exports end-to-end.',
    primaryCta: { label: 'Aller a la connexion', href: '/login' },
    secondaryCta: { label: 'Parler a l equipe de deploiement', href: '/contact' },
  },
  sections: [
    {
      title: 'Identifiants demo',
      points: ['Email: testschedulaa@gmail.com', 'Password: Test!12345', 'OTP code: 0000', 'Environment: Staging'],
    },
    {
      title: 'Demarrage rapide en 3 etapes',
      points: [
        '1. Login at /login with the demo email + password.',
        '2. Use OTP code 0000.',
        '3. Explore Scheduling, Payroll, Websites, and Analytics.',
      ],
    },
  ],
};

export const contactPage = {
  meta: {
    title: 'Contact Schedulaa',
    description: 'Talk to the Schedulaa team about custom rollouts, partnerships, or migration support.',
  },
  hero: {
    badge: 'Contact',
    title: "Parlons de votre deploiement.",
    subtitle:
      'Looking for a custom implementation, partner program, or migration help? Our specialists respond within one business day.',
    primaryCta: { label: 'Ecrivez-nous', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Call +1 (415) 555-0198', href: 'tel:+14155550198' },
  },
  sections: [
    {
      title: 'Comment nous aidons',
      items: [
        { title: 'Sales & demos', body: 'Plan walkthroughs, pricing guidance, and migration timelines tailored to your team.' },
        { title: 'Partnerships', body: 'Reseller, integration, and co-marketing opportunities for platforms serving creatives.' },
        { title: 'Support', body: '24-hour ticket response, enterprise onboarding, and dedicated success managers on Pro.' },
        { title: 'Migration support', body: 'Data imports, template mapping, and sandbox reviews that de-risk your launch.' },
      ],
    },
  ],
  faqTitle: 'Questions frequentes de contact',
  faq: [
    {
      question: 'En combien de temps quelqu un repond-il ?',
      answer: 'Enterprise rollout specialists respond within one business day for scheduling, payroll, and migration requests.',
    },
    {
      question: 'Do you offer implementation services?',
      answer: 'Yes. Our team handles data imports, template mapping, staff onboarding, and payroll validation for every location.',
    },
    {
      question: 'Comment les partenaires ou revendeurs vous contactent-ils ?',
      answer: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
    },
  ],
};

export const supportPage = {
  hero: {
    badge: 'Centre d aide',
    title: 'Support pour clients et equipes',
    subtitle:
      'Get help with account setup, booking, payroll, workflows, Automatisation Zapier, and accounting integrations. Our team responds quickly and can route technical issues to specialists.',
    primaryCta: { label: 'Contacter le support', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Ouvrir la documentation', href: '/docs' },
  },
  sections: [
    {
      title: 'Sujets de support',
      points: [
        'Account, access, and onboarding',
        'Operations de reservation et planification',
        'Payroll preview/finalize and export questions',
        'Website builder and domain setup',
        'Zapier, QuickBooks, and Xero setup',
      ],
    },
  ],
};

export const zapierPage = {
  meta: {
    title: 'Zapier for Schedulaa — automate bookings, scheduling, break compliance, and payroll',
    description:
      'Connect Schedulaa to 6,000+ apps with Zapier. Stream bookings, shifts, timeclock, break compliance, PTO, onboarding, and payroll data.',
  },
  hero: {
    badge: 'Automatisation Zapier',
    title: 'Automate every booking, shift, break, and payroll moment with Zapier',
    subtitle:
      'Schedulaa streams bookings, scheduling, timeclock, break compliance, PTO, onboarding, and payroll detail into Zapier while actions can create bookings, employees, and shifts inside Schedulaa.',
    primaryCta: { label: 'Ouvrir les parametres Zapier', href: '/settings/zapier' },
    secondaryCta: { label: 'Voir demo', href: '/demo' },
  },
  sections: [
    {
      title: 'Groupes de declencheurs en direct',
      items: [
        { title: 'Evenements de reservation', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
        { title: 'Scheduling & shifts', body: 'shift.published, shift.updated, swap.requested, swap.approved, swap.rejected' },
        { title: 'Timeclock & break compliance', body: 'timeclock.clock_in, timeclock.clock_out, break.started, break.ended, break.missed' },
        { title: 'Leave, onboarding, documents', body: 'leave.requested, leave.approved, leave.denied, onboarding.started, onboarding.document_signed' },
        { title: 'Payroll events', body: 'payroll.ready, payroll.finalized, payroll.details' },
      ],
    },
    {
      title: 'Live actions',
      points: ['create_booking', 'create_employee', 'create_shift / update_shift', 'attach_document'],
    },
  ],
};
