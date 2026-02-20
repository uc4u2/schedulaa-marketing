export const workforcePage = {
  meta: {
    title: 'Workforce Command Center | Time Tracking, Scheduling & Payroll',
    description:
      'Close the loop with Schedulaa’s workforce command center—clock-in/out policies, approvals, availability, and payroll-ready exports in one dashboard.',
  },
  hero: {
    badge: 'Workforce',
    title: 'All-in-one workforce command center',
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
    primaryCta: { label: 'Start free', href: '/register' },
    secondaryCta: { label: 'Request a walkthrough', href: '/contact' },
  },
  sections: [
    {
      title: 'Real-time clocking with policy enforcement',
      points: [
        'Employees clock in/out from the streamlined My Time workspace with a live timer that subtracts break minutes, shows hours worked, and visualizes the shift timeline.',
        'Break controls respect company policy—managers define default windows inside shift templates and the employee UI enforces them for payroll, flagging missed or overdue breaks instantly.',
        'Personal weekly insights (for example “32h worked • 2h overtime • 3 breaks taken”) keep the process transparent.',
      ],
    },
    {
      title: 'Manager-grade oversight',
      points: [
        'Every time entry flows into the approvals page where supervisors filter by department, employee, or status before approving or rejecting—even mid-shift if something looks off.',
        'IP/device hints expose unusual punch locations while compliance chips surface shifts missing breaks or trending toward overtime.',
        'Need to correct multiple entries? Apply a break or shift template across selected rows and update everything at once.',
      ],
    },
    {
      title: 'Shift templates with compliance baked in',
      points: [
        'Templates capture break start/end times, duration, paid/unpaid flags, and availability links.',
        'Applying a template pushes those rules into every shift assignment and the employee clock UI automatically—no manual edits.',
        'Force clock-out and annotate overdue shifts so approvals stay clean for payroll.',
      ],
    },
    {
      title: 'Payroll-ready exports',
      points: [
        'Approved entries carry metadata for both supervisors and payroll teams (who approved, when, policy references, and punch location hints).',
        'Exports stay clean, audits stay simple, and payroll files ingest directly into accounting.',
      ],
    },
  ],
  cta: {
    overline: 'Workforce + payroll together',
    title:
      'Booking, scheduling, payroll, websites, and policy-aware time tracking in the same platform.',
    body: 'No spreadsheets, no copy/paste, and no compliance surprises.',
    primary: { label: 'See the time tracking workspace', href: '/register' },
    secondary: { label: 'Talk to sales', href: '/contact' },
  },
};

export const industriesPage = {
  meta: {
    title: 'Industry Directory | Schedulaa booking sites by industry',
    description:
      'Browse Schedulaa-powered workflows by industry. Discover salons, clinics, fitness studios, legal services, and more using unified scheduling, payroll, and commerce.',
  },
  hero: {
    badge: 'Industries',
    title: 'Browse by industry',
    subtitle:
      'Pick an industry to see how businesses use Schedulaa for booking, payroll, workforce operations, websites, and commerce.',
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
    title: 'All systems operational',
    subtitle:
      'Monitor platform health, incident history, and upcoming maintenance across booking, payroll, websites, and integrations.',
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
        { title: 'Payroll & Compliance (US & Canada)', body: 'Operational' },
        { title: 'Website Builder / Hosting', body: 'Operational' },
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
      'Use the shared manager credentials to explore scheduling, payroll, compliance, automation, and integrations to Zapier, QuickBooks, and Xero.',
  },
  hero: {
    badge: 'Demo / Test Drive',
    title: 'Experience the Schedulaa manager dashboard in minutes',
    subtitle:
      'Use the shared staging login to explore scheduling, time tracking, payroll, compliance, Zapier automations, and accounting exports end-to-end.',
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
    title: "Let's talk about your rollout.",
    subtitle:
      'Looking for a custom implementation, partner program, or migration help? Our specialists respond within one business day.',
    primaryCta: { label: 'Email us', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Call +1 (415) 555-0198', href: 'tel:+14155550198' },
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
      answer: 'Enterprise rollout specialists respond within one business day for scheduling, payroll, and migration requests.',
    },
    {
      question: 'Do you offer implementation services?',
      answer: 'Yes. Our team handles data imports, template mapping, staff onboarding, and payroll validation for every location.',
    },
    {
      question: 'How do partners or resellers reach you?',
      answer: 'Email admin@schedulaa.com and we will route your note to our partnership, integration, or reseller teams.',
    },
  ],
};

export const supportPage = {
  hero: {
    badge: 'Help Center',
    title: 'Support for clients and teams',
    subtitle:
      'Get help with account setup, booking, payroll, workflows, Zapier automation, and accounting integrations. Our team responds quickly and can route technical issues to specialists.',
    primaryCta: { label: 'Contact support', href: 'mailto:admin@schedulaa.com' },
    secondaryCta: { label: 'Open docs', href: '/docs' },
  },
  sections: [
    {
      title: 'Support topics',
      points: [
        'Account, access, and onboarding',
        'Booking and scheduling operations',
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
    badge: 'Zapier automation',
    title: 'Automate every booking, shift, break, and payroll moment with Zapier',
    subtitle:
      'Schedulaa streams bookings, scheduling, timeclock, break compliance, PTO, onboarding, and payroll detail into Zapier while actions can create bookings, employees, and shifts inside Schedulaa.',
    primaryCta: { label: 'Open Zapier settings', href: '/settings/zapier' },
    secondaryCta: { label: 'See demo', href: '/demo' },
  },
  sections: [
    {
      title: 'Live trigger groups',
      items: [
        { title: 'Booking events', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
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
