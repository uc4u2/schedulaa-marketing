export const workforcePage = {
  meta: {
    title: 'Staff Scheduling & Shift Management for Service Businesses | Schedulaa',
    description:
      'Manage staff scheduling, shift approvals, availability, coverage, overtime risk, and approved hours for service businesses in one Schedulaa workforce dashboard.',
  },
  hero: {
    badge: 'Workforce',
    title: 'Staff scheduling and shift management for service businesses',
    subtitle:
      'Manage team availability, shift swaps, approvals, coverage, and overtime risk from one workforce dashboard so service businesses can keep daily operations moving without juggling chats, spreadsheets, and disconnected calendars.',
    image: '/images/marketing/showcase/time-tracking.png',
    imageAlt: 'Schedulaa staff scheduling and workforce workspace',
    images: [
      { src: '/images/marketing/payroll-manage.png', alt: 'Workforce dashboard' },
      { src: '/images/marketing/shift-pre.png', alt: 'Shift management' },
      { src: '/images/marketing/showcase/t4.png', alt: 'Approved hours and summaries' },
      { src: '/images/marketing/showcase/w2-4d.png', alt: 'Workforce reporting' },
    ],
    primaryCta: { label: 'Start free', href: '/register' },
    secondaryCta: { label: 'Request a walkthrough', href: '/contact' },
  },
  sections: [
    {
      title: 'Availability, hours, and shift timing in one live view',
      points: [
        'Employees clock in/out from the My Time workspace with a live timer that shows hours worked and keeps the shift timeline visible for both staff and managers.',
        'Break controls follow company policy so teams can protect shift flow, catch missed breaks, and reduce end-of-week cleanup before it becomes an operational problem.',
        'Personal weekly insights keep schedules, hours, and overtime visibility transparent for the team.',
      ],
    },
    {
      title: 'Manager approvals with overtime and coverage visibility',
      points: [
        'Every time entry flows into the approvals page where supervisors filter by department, employee, or status before approving or rejecting—even mid-shift if something looks off.',
        'IP/device hints expose unusual punch locations while alert chips surface shifts missing breaks or trending toward overtime.',
        'Need to correct multiple entries? Apply a break or shift template across selected rows and update everything at once so schedules and approvals stay aligned.',
      ],
    },
    {
      title: 'Shift templates and scheduling rules built for service teams',
      points: [
        'Templates capture break start/end times, duration, paid/unpaid flags, and availability links.',
        'Applying a template pushes those rules into every shift assignment and the employee clock UI automatically—no manual edits.',
        'Force clock-out and annotate overdue shifts so approvals stay clean for payroll or accounting handoff later.',
      ],
    },
    {
      title: 'Approved hours ready for handoff',
      points: [
        'Approved entries carry metadata for supervisors and back-office teams, including who approved, when, policy references, and punch location hints.',
        'Exports stay clean, audits stay simple, and approved-hour totals are ready for payroll or accounting when needed.',
      ],
    },
  ],
  cta: {
    overline: 'Workforce operations',
    title:
      'Booking, scheduling, approved hours, and workforce visibility in the same platform.',
    body: 'No spreadsheets, no copy/paste, and no disconnected scheduling workflow.',
    primary: { label: 'See the time tracking workspace', href: '/register' },
    secondary: { label: 'Talk to sales', href: '/contact' },
  },
};

export const industriesPage = {
  meta: {
    title: 'Industry Directory | Schedulaa booking sites by industry',
    description:
      'Browse Schedulaa-powered workflows by industry. Discover salons, clinics, fitness studios, legal services, and more using client bookings, staff scheduling, invoices, payments, websites, and commerce.',
  },
  hero: {
    badge: 'Industries',
    title: 'Browse by industry',
    subtitle:
      'Pick an industry to see how businesses use Schedulaa for client bookings, appointment history, staff scheduling, websites, invoices, payments, and commerce.',
    primaryCta: { label: 'Explore booking', href: '/booking' },
    secondaryCta: { label: 'Contact team', href: '/contact' },
  },
  sections: [
    {
      title: 'Popular verticals',
      items: [
        { title: 'Salons & spas', body: 'Real-time stylist booking, tips, and retention campaigns.' },
        { title: 'Healthcare clinics', body: 'Scheduling, reminders, and documentation-aware workflows.' },
        { title: 'Tutors & educators', body: 'Session booking, recurring schedules, and attendance trails.' },
        { title: 'Creative studios', body: 'Client journey automation from booking to invoice and payment.' },
        { title: 'Legal & professional services', body: 'Structured intake, appointment history, scheduling, and secure records.' },
        { title: 'Multi-location teams', body: 'Branch-aware controls for client bookings, staffing, billing, and analytics.' },
      ],
    },
  ],
};

export const statusPage = {
  meta: {
    title: 'Schedulaa Status | System Availability',
    description: 'Real-time system status for Schedulaa client bookings, websites, invoices, payments, staff scheduling, commerce, and integrations.',
  },
  hero: {
    badge: 'Status',
    title: 'All systems operational',
    subtitle:
      'Monitor platform health, incident history, and upcoming maintenance across client bookings, websites, invoices, payments, staff scheduling, commerce, and integrations.',
    primaryCta: { label: 'Subscribe for alerts', href: 'mailto:status@schedulaa.com' },
    secondaryCta: { label: 'RSS feed', href: 'https://status.schedulaa.com/rss' },
  },
  sections: [
    {
      title: 'Service availability',
      items: [
        { title: 'Schedulaa Dashboard & Login', body: 'Operational' },
        { title: 'Booking & Appointments API', body: 'Operational' },
        { title: 'Stripe Payments & Checkout', body: 'Operational' },
        { title: 'Website Builder / Hosting', body: 'Operational' },
        { title: 'Back-office exports & payroll handoff', body: 'Operational' },
        { title: 'Notifications & Marketing Emails', body: 'Operational' },
      ],
    },
    {
      title: 'Recent incident example',
      points: [
        'October 10, 2025: Temporary slowdown in appointment booking API due to a caching layer misconfiguration.',
        'Impact: 4% of requests experienced increased latency for roughly 18 minutes.',
        'Resolution: Reverted update and redeployed stable cache instance.',
      ],
    },
    {
      title: 'Uptime overview',
      points: ['Last 24 hours: 100%', 'Last 7 days: 99.97%', 'Last 30 days: 99.99%', 'Last 90 days: 99.98%'],
    },
  ],
};

export const roadmapPage = {
  hero: {
    badge: 'Roadmap',
    title: 'Product roadmap requests',
    subtitle:
      'Share roadmap requests with our team at admin@schedulaa.com. We review customer feedback continuously and publish updates in release notes.',
    primaryCta: { label: 'Email roadmap request', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'See status', href: '/status' },
  },
};

export const demoPage = {
  meta: {
    title: 'Schedulaa Demo Login | Test the Manager Dashboard',
    description:
      'Use the shared manager credentials to explore client bookings, websites, staff scheduling, invoices, payments, automation, and integrations to Zapier, QuickBooks, and Xero.',
  },
  hero: {
    badge: 'Demo / Test Drive',
    title: 'Experience the Schedulaa manager dashboard in minutes',
    subtitle:
      'Use the shared staging login to explore client bookings, appointment workflows, staff scheduling, approved hours, Zapier automations, invoices, payments, and accounting exports end-to-end.',
    primaryCta: { label: 'Go to login', href: '/login' },
    secondaryCta: { label: 'Talk to rollout team', href: '/contact' },
  },
  sections: [
    {
      title: 'Demo credentials',
      points: ['Email: testschedulaa@gmail.com', 'Password: Test!12345', 'OTP code: 0000', 'Environment: Staging'],
    },
    {
      title: '3-step quick start',
      points: [
        '1. Login at /login with the demo email + password.',
        '2. Use OTP code 0000.',
        '3. Explore client bookings, staff scheduling, websites, invoices, payments, and analytics.',
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
    title: "Let's talk about your rollout.",
    subtitle:
      'Looking for a custom implementation, partner program, or migration help? Our specialists respond within one business day.',
    primaryCta: { label: 'Email us', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Call +1 (289) 514-9260', href: 'tel:+12895149260' },
  },
  sections: [
    {
      title: 'How we help',
      items: [
        { title: 'Sales & demos', body: 'Plan walkthroughs, pricing guidance, and migration timelines tailored to your team.' },
        { title: 'Partnerships', body: 'Reseller, integration, and co-marketing opportunities for platforms serving creatives.' },
        { title: 'Support', body: '24-hour ticket response, enterprise onboarding, and dedicated success managers on Pro.' },
        { title: 'Migration support', body: 'Data imports, template mapping, and sandbox reviews that de-risk your launch.' },
      ],
    },
  ],
  faqTitle: 'Contact FAQ',
  faq: [
    {
      question: 'How fast will someone reply?',
      answer: 'Enterprise rollout specialists respond within one business day for booking, website, billing, and migration requests.',
    },
    {
      question: 'Do you offer implementation services?',
      answer: 'Yes. Our team handles data imports, template mapping, staff onboarding, booking setup, billing workflows, and back-office handoff reviews for every location.',
    },
    {
      question: 'How do partners or resellers reach you?',
      answer: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
    },
  ],
};

export const supportPage = {
  meta: {
    title: 'Schedulaa Support | Booking, websites, billing, and team operations help',
    description:
      'Get help with website setup, client bookings, appointment history, invoices, payments, staff scheduling, domains, and connected workflows in Schedulaa.',
  },
  hero: {
    badge: 'Help Center',
    title: 'Support for clients and teams',
    subtitle:
      'Get help with account setup, client bookings, appointment history, websites, invoices, payments, staff scheduling, Zapier automations, and accounting integrations. Our team responds quickly and can route technical issues to specialists.',
    primaryCta: { label: 'Contact support', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Open docs', href: '/docs' },
  },
  sections: [
    {
      title: 'Support topics',
      points: [
        'Account, access, and onboarding',
        'Client bookings, appointment history, and scheduling operations',
        'Invoices, payments, and export questions',
        'Website builder, domains, and public page setup',
        'Client records, billing workflows, and service operations',
        'Staff scheduling, approvals, and availability controls',
        'Zapier, QuickBooks, and Xero setup',
      ],
    },
  ],
};

export const zapierPage = {
  meta: {
    title: 'Zapier for Schedulaa — automate client bookings, scheduling, invoices, payments, and handoffs',
    description:
      'Connect Schedulaa to 6,000+ apps with Zapier. Stream client bookings, shifts, timeclock, invoice and payment handoffs, PTO, onboarding, and back-office events.',
  },
  hero: {
    badge: 'Zapier automation',
    title: 'Automate client bookings, staff scheduling, billing handoffs, and daily operations with Zapier',
    subtitle:
      'Schedulaa streams client booking events, staff scheduling activity, timeclock updates, onboarding steps, and back-office handoff events into Zapier while actions can create bookings, employees, and shifts inside Schedulaa.',
    primaryCta: { label: 'Open Zapier settings', href: '/settings/zapier' },
    secondaryCta: { label: 'See demo', href: '/demo' },
  },
  sections: [
    {
      title: 'Live trigger groups',
      items: [
        { title: 'Client booking events', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
        { title: 'Scheduling & shifts', body: 'shift.published, shift.updated, swap.requested, swap.approved, swap.rejected' },
        { title: 'Timeclock & break controls', body: 'timeclock.clock_in, timeclock.clock_out, break.started, break.ended, break.missed' },
        { title: 'Leave, onboarding, documents', body: 'leave.requested, leave.approved, leave.denied, onboarding.started, onboarding.document_signed' },
        { title: 'Back-office handoff events', body: 'payroll.ready, payroll.finalized, payroll.details' },
      ],
    },
    {
      title: 'Live actions',
      points: ['create_booking', 'create_employee', 'create_shift / update_shift', 'attach_document'],
    },
  ],
};
