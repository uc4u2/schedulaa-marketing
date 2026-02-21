export const workforcePage = {
  meta: {
    title: 'Central de comando da forca de trabalho | Controle de tempo, agendamento e folha',
    description:
      'Close the loop with Schedulaa’s workforce command center—clock-in/out policies, approvals, availability, and payroll-ready exports in one dashboard.',
  },
  hero: {
    badge: 'Forca de trabalho',
    title: 'Central completa da forca de trabalho',
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
    primaryCta: { label: 'Comece gratis', href: '/register' },
    secondaryCta: { label: 'Solicitar apresentacao', href: '/contact' },
  },
  sections: [
    {
      title: 'Registro em tempo real com regras aplicadas',
      points: [
        'Employees clock in/out from the streamlined My Time workspace with a live timer that subtracts break minutes, shows hours worked, and visualizes the shift timeline.',
        'Break controls respect company policy—managers define default windows inside shift templates and the employee UI enforces them for payroll, flagging missed or overdue breaks instantly.',
        'Personal weekly insights (for example “32h worked • 2h overtime • 3 breaks taken”) keep the process transparent.',
      ],
    },
    {
      title: 'Supervisao de nivel gerencial',
      points: [
        'Every time entry flows into the approvals page where supervisors filter by department, employee, or status before approving or rejecting—even mid-shift if something looks off.',
        'IP/device hints expose unusual punch locations while compliance chips surface shifts missing breaks or trending toward overtime.',
        'Need to correct multiple entries? Apply a break or shift template across selected rows and update everything at once.',
      ],
    },
    {
      title: 'Modelos de turno com conformidade integrada',
      points: [
        'Templates capture break start/end times, duration, paid/unpaid flags, and availability links.',
        'Applying a template pushes those rules into every shift assignment and the employee clock UI automatically—no manual edits.',
        'Force clock-out and annotate overdue shifts so approvals stay clean for payroll.',
      ],
    },
    {
      title: 'Exportacoes prontas para folha',
      points: [
        'Approved entries carry metadata for both supervisors and payroll teams (who approved, when, policy references, and punch location hints).',
        'Exports stay clean, audits stay simple, and payroll files ingest directly into accounting.',
      ],
    },
  ],
  cta: {
    overline: 'Forca de trabalho + payroll together',
    title:
      'Reservas, agendamento, folha, sites e controle de tempo com politicas na mesma plataforma.',
    body: 'No spreadsheets, no copy/paste, and no compliance surprises.',
    primary: { label: 'Ver espaco de controle de tempo', href: '/register' },
    secondary: { label: 'Falar com vendas', href: '/contact' },
  },
};

export const industriesPage = {
  meta: {
    title: 'Diretorio de setores | Schedulaa booking sites by industry',
    description:
      'Browse Schedulaa-powered workflows by industry. Discover salons, clinics, fitness studios, legal services, and more using unified scheduling, payroll, and commerce.',
  },
  hero: {
    badge: 'Industries',
    title: 'Navegar por setor',
    subtitle:
      'Pick an industry to see how businesses use Schedulaa for booking, payroll, workforce operations, websites, and commerce.',
    primaryCta: { label: 'Explorar reservas', href: '/booking' },
    secondaryCta: { label: 'Falar com a equipe', href: '/contact' },
  },
  sections: [
    {
      title: 'Verticais populares',
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
    title: 'Schedulaa Status | System Availability',
    description: 'Real-time system status for Schedulaa booking, payroll, HR, websites, and integrations.',
  },
  hero: {
    badge: 'Status',
    title: 'Todos os sistemas operacionais',
    subtitle:
      'Monitor platform health, incident history, and upcoming maintenance across booking, payroll, websites, and integrations.',
    primaryCta: { label: 'Assinar alertas', href: 'mailto:status@schedulaa.com' },
    secondaryCta: { label: 'RSS feed', href: 'https://status.schedulaa.com/rss' },
  },
  sections: [
    {
      title: 'Service availability',
      items: [
        { title: 'Schedulaa Dashboard & Login', body: 'Operacional' },
        { title: 'API de reservas e agendamentos', body: 'Operacional' },
        { title: 'Stripe Payments & Checkout', body: 'Operacional' },
        { title: 'Folha e conformidade (EUA e Canada)', body: 'Operacional' },
        { title: 'Construtor de sites / hospedagem', body: 'Operacional' },
        { title: 'Notificacoes e emails de marketing', body: 'Operacional' },
      ],
    },
    {
      title: 'Exemplo de incidente recente',
      points: [
        'October 10, 2025: Temporary slowdown in appointment booking API due to a caching layer misconfiguration.',
        'Impact: 4% of requests experienced increased latency for roughly 18 minutes.',
        'Resolution: Reverted update and redeployed stable cache instance.',
      ],
    },
    {
      title: 'Visao geral de uptime',
      points: ['Last 24 hours: 100%', 'Last 7 days: 99.97%', 'Last 30 days: 99.99%', 'Last 90 days: 99.98%'],
    },
  ],
};

export const roadmapPage = {
  hero: {
    badge: 'Roteiro',
    title: 'Solicitacoes de roteiro do produto',
    subtitle:
      'Share roadmap requests with our team at admin@schedulaa.com. We review customer feedback continuously and publish updates in release notes.',
    primaryCta: { label: 'Enviar solicitacao de roteiro por e-mail', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Ver status', href: '/status' },
  },
};

export const demoPage = {
  meta: {
    title: 'Schedulaa Demo Login | Test the Manager Dashboard',
    description:
      'Use the shared manager credentials to explore scheduling, payroll, compliance, automation, and integrations to Zapier, QuickBooks, and Xero.',
  },
  hero: {
    badge: 'Demo / Teste',
    title: 'Experience the Schedulaa manager dashboard in minutes',
    subtitle:
      'Use the shared staging login to explore scheduling, time tracking, payroll, compliance, Automacao Zapiers, and accounting exports end-to-end.',
    primaryCta: { label: 'Ir para login', href: '/login' },
    secondaryCta: { label: 'Falar com a equipe de rollout', href: '/contact' },
  },
  sections: [
    {
      title: 'Credenciais de demo',
      points: ['Email: testschedulaa@gmail.com', 'Password: Test!12345', 'OTP code: 0000', 'Environment: Staging'],
    },
    {
      title: 'Inicio rapido em 3 passos',
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
    title: 'Contato Schedulaa',
    description: 'Talk to the Schedulaa team about custom rollouts, partnerships, or migration support.',
  },
  hero: {
    badge: 'Contato',
    title: "Vamos falar sobre seu rollout.",
    subtitle:
      'Looking for a custom implementation, partner program, or migration help? Our specialists respond within one business day.',
    primaryCta: { label: 'Envie e-mail', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Call +1 (415) 555-0198', href: 'tel:+14155550198' },
  },
  sections: [
    {
      title: 'Como ajudamos',
      items: [
        { title: 'Sales & demos', body: 'Plan walkthroughs, pricing guidance, and migration timelines tailored to your team.' },
        { title: 'Partnerships', body: 'Reseller, integration, and co-marketing opportunities for platforms serving creatives.' },
        { title: 'Support', body: '24-hour ticket response, enterprise onboarding, and dedicated success managers on Pro.' },
        { title: 'Migration support', body: 'Data imports, template mapping, and sandbox reviews that de-risk your launch.' },
      ],
    },
  ],
  faqTitle: 'Perguntas frequentes de contato',
  faq: [
    {
      question: 'Qual e o prazo de resposta?',
      answer: 'Enterprise rollout specialists respond within one business day for scheduling, payroll, and migration requests.',
    },
    {
      question: 'Do you offer implementation services?',
      answer: 'Yes. Our team handles data imports, template mapping, staff onboarding, and payroll validation for every location.',
    },
    {
      question: 'Como parceiros ou revendedores entram em contato?',
      answer: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
    },
  ],
};

export const supportPage = {
  hero: {
    badge: 'Central de ajuda',
    title: 'Suporte para clientes e equipes',
    subtitle:
      'Get help with account setup, booking, payroll, workflows, Automacao Zapier, and accounting integrations. Our team responds quickly and can route technical issues to specialists.',
    primaryCta: { label: 'Contato support', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Abrir documentacao', href: '/docs' },
  },
  sections: [
    {
      title: 'Topicos de suporte',
      points: [
        'Account, access, and onboarding',
        'Operacoes de reservas e agendamento',
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
    badge: 'Automacao Zapier',
    title: 'Automate every booking, shift, break, and payroll moment with Zapier',
    subtitle:
      'Schedulaa streams bookings, scheduling, timeclock, break compliance, PTO, onboarding, and payroll detail into Zapier while actions can create bookings, employees, and shifts inside Schedulaa.',
    primaryCta: { label: 'Abrir configuracoes do Zapier', href: '/settings/zapier' },
    secondaryCta: { label: 'Ver demo', href: '/demo' },
  },
  sections: [
    {
      title: 'Grupos de gatilhos ao vivo',
      items: [
        { title: 'Eventos de reserva', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
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
