type ComparisonRow = {
  label: string;
  schedulaa: string;
  competitor: string;
};

export type ComparisonFaq = {
  question: string;
  answer: string;
};

export type ComparisonPageOverride = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  contextBlock: { title: string; paragraphs: string[] };
  executiveOverview: { rows: ComparisonRow[] };
  differentiators: Array<{ title: string; body: string }>;
  fitMatrix: Array<{ scenario: string; recommendation: string }>;
  faq: ComparisonFaq[];
  conclusion: string;
  relatedLinks: Array<{ label: string; href: string }>;
  testimonial?: undefined;
  summaryTable?: undefined;
};

export const comparisonPageContent: Record<string, ComparisonPageOverride> = {
  'when-i-work': {
    metaTitle: 'Schedulaa vs When I Work | Service Operations Comparison',
    metaDescription:
      'Compare Schedulaa vs When I Work for employee scheduling, time tracking, customer booking, work orders, invoices, and payroll-ready workflows.',
    heroTitle: 'Schedulaa vs When I Work for service teams',
    heroSubtitle:
      'Compare a service-operations platform with a workforce scheduling and time-tracking platform, then choose around the workflow your team actually needs.',
    intro: [
      'When I Work focuses on employee scheduling, time and attendance, team communication, shift coverage, and payroll-provider integrations for hourly teams.',
      'Schedulaa connects staff scheduling and approved time with customer booking, customer records, estimates, work orders, invoices, payment links, and payroll-ready calculations. It does not replace government payroll filing or remittance.',
    ],
    contextBlock: {
      title: 'The practical difference: workforce scheduling or connected service delivery',
      paragraphs: [
        'When I Work is designed around hourly workforce coordination. Schedulaa covers workforce coordination too, but its primary distinction is the connection from customer demand through scheduled work, field execution, billing, and payroll-ready handoff.',
        'Compare current plans, integrations, regional availability, and permissions directly. Neither product should be evaluated from a single checklist without testing the workflow your managers and employees will use.',
      ],
    },
    executiveOverview: {
      rows: [
        {
          label: 'Primary focus',
          schedulaa: 'Customer and workforce operations for service businesses.',
          competitor: 'Employee scheduling, time and attendance, team communication, and payroll integrations for hourly teams.',
        },
        {
          label: 'Scheduling and time',
          schedulaa: 'Employee availability, shifts, clock-in/out, breaks, approvals, and operational assignments.',
          competitor: 'Employee schedules, availability, time clock, breaks, time off, OpenShifts, and shift requests.',
        },
        {
          label: 'Customer and job workflow',
          schedulaa: 'Public booking, customer records, estimates, work orders, field reports, invoices, and payment links.',
          competitor: 'Workforce management rather than a customer booking, work-order, and billing system.',
        },
        {
          label: 'Payroll boundary',
          schedulaa: 'Payroll calculations, documents, and exports in supported jurisdictions; no government filing or remittance.',
          competitor: 'Time data and supported payroll-provider integrations; payroll processing depends on the connected provider.',
        },
      ],
    },
    differentiators: [
      {
        title: 'Customer work stays connected to staffing',
        body: 'Schedulaa links booking and customer records to employee schedules and assigned operational work.',
      },
      {
        title: 'Estimates, jobs, and invoices continue the workflow',
        body: 'Managers can move supported work from estimate approval through work orders, field reporting, invoices, and hosted payment links.',
      },
      {
        title: 'When I Work remains a focused workforce option',
        body: 'When employee scheduling, attendance, WorkChat, and payroll handoff are the main requirements, When I Work should remain on the shortlist.',
      },
    ],
    fitMatrix: [
      {
        scenario: 'Your main need is hourly employee scheduling, attendance, and team communication.',
        recommendation: 'Evaluate When I Work',
      },
      {
        scenario: 'You need customer booking, jobs, staff operations, invoices, and payment links connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'Payroll tax filing and remittance are required.',
        recommendation: 'Evaluate a payroll provider alongside the operational platform',
      },
    ],
    faq: [
      {
        question: 'Does When I Work support time tracking and shift coverage?',
        answer:
          'Yes. When I Work documents employee scheduling, time and attendance, breaks, time off, OpenShifts, and shift-request workflows. Availability depends on the selected plan and settings.',
      },
      {
        question: 'Is Schedulaa a payroll tax filing service?',
        answer:
          'No. Schedulaa prepares payroll calculations, documents, and exports within supported jurisdictions, but it does not automate government payroll filing or remittance.',
      },
      {
        question: 'What does Schedulaa add for a service business?',
        answer:
          'Schedulaa connects public booking, customer records, employee scheduling, time tracking, estimates, work orders, invoices, and payment links in one operational workflow.',
      },
    ],
    conclusion:
      'Choose When I Work when focused hourly workforce scheduling and attendance are the priority. Evaluate Schedulaa when customer work, team operations, billing, and payroll-ready handoff need to share one operational system.',
    relatedLinks: [
      { label: 'Research When I Work alternatives', href: '/alternatives/when-i-work' },
      { label: 'Explore employee scheduling', href: '/workforce' },
      { label: 'Explore work orders and invoices', href: '/business-finance' },
    ],
  },
  'square-appointments': {
    metaTitle: 'Schedulaa vs Square Appointments | Booking Comparison',
    metaDescription:
      'Compare Schedulaa vs Square Appointments for online booking, staff calendars, customer records, payments, workforce operations, and invoicing.',
    heroTitle: 'Schedulaa vs Square Appointments',
    heroSubtitle:
      'Compare two booking-capable platforms by customer experience, payments, staff operations, and the broader workflow your business needs.',
    intro: [
      'Square Appointments offers online booking, staff calendars, reminders, customer profiles, and tightly connected Square payments and point-of-sale capabilities. It should not be described as a booking-only product.',
      'Schedulaa connects public booking with a tenant website, customer records, employee shifts and time, estimates, work orders, invoices, and Stripe-backed payment links when configured.',
    ],
    contextBlock: {
      title: 'The practical difference: Square commerce ecosystem or broader service operations',
      paragraphs: [
        'Square Appointments is a strong fit when Square checkout, point of sale, booking, and related Square products are central to the business. Current plans also cover capabilities such as multi-staff booking, resources, waitlists, and team tools at eligible tiers.',
        'Schedulaa is worth evaluating when the same tenant needs its website, booking, workforce schedule, approved time, field work, estimates, invoices, and hosted payment links connected beyond the appointment calendar.',
      ],
    },
    executiveOverview: {
      rows: [
        {
          label: 'Primary focus',
          schedulaa: 'Connected customer, workforce, field-service, finance, and website operations.',
          competitor: 'Appointments, customer records, payments, and point-of-sale workflows in the Square ecosystem.',
        },
        {
          label: 'Online booking',
          schedulaa: 'Tenant website booking with services, providers, real-time availability, and supported payment rules.',
          competitor: 'Online booking site and widgets with services, staff, locations, reminders, deposits, and eligible resources or waitlists.',
        },
        {
          label: 'Payments',
          schedulaa: 'Stripe-backed booking, invoice, and product payment flows when the tenant is configured and eligible.',
          competitor: 'Square payments and point-of-sale options connected to appointment checkout.',
        },
        {
          label: 'Workforce and field operations',
          schedulaa: 'Shifts, availability, clock-in/out, work orders, field reports, and payroll-ready approved hours.',
          competitor: 'Staff calendars plus additional scheduling and workforce capabilities available through current Square plans and products.',
        },
      ],
    },
    differentiators: [
      {
        title: 'Schedulaa extends beyond the appointment',
        body: 'Customer booking can continue into assigned work, field reporting, estimates, invoices, and payment links.',
      },
      {
        title: 'Square keeps booking close to POS',
        body: 'Square Appointments connects scheduling with Square checkout, customer directory, and the wider Square product family.',
      },
      {
        title: 'Provider choice is a real boundary',
        body: 'Schedulaa uses supported Stripe flows; Square Appointments uses the Square payments ecosystem. Confirm processing, hardware, and regional needs directly.',
      },
    ],
    fitMatrix: [
      {
        scenario: 'Square POS and Square payments are central to appointment checkout.',
        recommendation: 'Evaluate Square Appointments',
      },
      {
        scenario: 'Website, booking, employee scheduling, field work, estimates, and invoices need one operational system.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'Plan, payment, hardware, or regional terms will decide the purchase.',
        recommendation: 'Verify both vendors’ current terms before choosing',
      },
    ],
    faq: [
      {
        question: 'Is Square Appointments only an appointment calendar?',
        answer:
          'No. Square documents online booking, staff calendars, reminders, customer profiles, payments, and additional capabilities that vary by plan and related Square products.',
      },
      {
        question: 'Which payment provider does Schedulaa use?',
        answer:
          'Schedulaa uses supported Stripe-backed flows for eligible booking, invoice, and product payments when a tenant has completed the required configuration.',
      },
      {
        question: 'Can Schedulaa manage work after a booking?',
        answer:
          'Yes. Supported workflows connect bookings and customers with employee schedules, work orders, field reports, estimates, invoices, and payment links.',
      },
    ],
    conclusion:
      'Choose around the operating model, not a simplified feature claim. Square Appointments is compelling for Square-centered booking and checkout; Schedulaa is designed to connect booking with broader customer, workforce, field-service, and finance operations.',
    relatedLinks: [
      { label: 'Research Square Appointments alternatives', href: '/alternatives/square-appointments' },
      { label: 'Explore online booking', href: '/booking' },
      { label: 'Explore salon booking', href: '/booking/salon' },
    ],
  },
  xero: {
    metaTitle: 'Schedulaa vs Xero | Operations and Accounting Compared',
    metaDescription:
      'Compare Schedulaa vs Xero: service-business operations, booking, workforce workflows, invoices, accounting, reporting, and the live journal-export boundary.',
    heroTitle: 'Schedulaa vs Xero: operations and accounting',
    heroSubtitle:
      'Schedulaa and Xero solve different primary jobs. Compare the operational workflow with the accounting ledger—and understand where the live connection fits.',
    intro: [
      'Xero is cloud accounting software for invoicing, bills, bank reconciliation, reporting, tax workflows, and connected apps. Payroll availability and capabilities vary by country and current offering.',
      'Schedulaa manages service operations such as booking, customer records, employee schedules, approved time, estimates, work orders, invoices, and payment links. Its live Xero connection posts mapped accounting journal data; it does not create Xero employees, pay runs, payslips, or year-end slips.',
    ],
    contextBlock: {
      title: 'The practical difference: operational source or accounting ledger',
      paragraphs: [
        'Use an accounting platform when bank reconciliation, the general ledger, financial statements, and accountant collaboration are the primary requirements. Schedulaa Business Finance is an operational finance workflow, not a double-entry ledger or tax-filing replacement.',
        'Use Schedulaa when customer work and workforce activity need to produce estimates, jobs, invoices, payment status, and controlled accounting handoff. A configured Xero connection can support mapped journal export without turning either product into the other.',
      ],
    },
    executiveOverview: {
      rows: [
        {
          label: 'Primary focus',
          schedulaa: 'Service-business customer, workforce, job, billing, and website operations.',
          competitor: 'Cloud accounting, bank reconciliation, invoicing, bills, reporting, and tax-related workflows.',
        },
        {
          label: 'Customer and workforce operations',
          schedulaa: 'Public booking, customer records, staff schedules, clock-in/out, work orders, and field reports.',
          competitor: 'Accounting platform with an app ecosystem rather than native service booking and workforce operations.',
        },
        {
          label: 'Finance boundary',
          schedulaa: 'Operational estimates, invoices, costs, tax summaries, payment links, and accountant handoff; no general ledger or bank reconciliation.',
          competitor: 'General ledger, bank reconciliation, financial reporting, invoices, bills, and region-specific tax capabilities.',
        },
        {
          label: 'Live integration',
          schedulaa: 'Posts mapped payroll and revenue accounting journals to a configured Xero organization.',
          competitor: 'Receives accounting journal data; Schedulaa does not create Xero payroll runs, employees, or payslips.',
        },
      ],
    },
    differentiators: [
      {
        title: 'Schedulaa starts with the work',
        body: 'Bookings, customers, staff time, estimates, jobs, invoices, and payment status create operational records before accounting handoff.',
      },
      {
        title: 'Xero remains the accounting system',
        body: 'Xero provides ledger, bank-reconciliation, reporting, and region-specific accounting capabilities that Schedulaa does not claim to replace.',
      },
      {
        title: 'The integration has a narrow verified boundary',
        body: 'Schedulaa’s live Xero connection supports mapped accounting journal export, not employee payroll issuance or universal two-way synchronization.',
      },
    ],
    fitMatrix: [
      {
        scenario: 'You need a general ledger, bank reconciliation, and accountant-facing financial reporting.',
        recommendation: 'Evaluate Xero or another accounting platform',
      },
      {
        scenario: 'You need booking, customers, staff operations, jobs, invoices, and payment links connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need service operations plus an accounting ledger.',
        recommendation: 'Evaluate Schedulaa with a configured Xero accounting connection',
      },
    ],
    faq: [
      {
        question: 'Does Schedulaa replace Xero?',
        answer:
          'No. Schedulaa Business Finance does not provide a double-entry general ledger, bank reconciliation, or tax filing. Xero remains an accounting platform.',
      },
      {
        question: 'Does Schedulaa integrate with Xero?',
        answer:
          'Yes. The live connection supports mapped accounting journal export for configured payroll and revenue summaries. It does not create Xero employees, pay runs, payslips, or year-end slips.',
      },
      {
        question: 'What does Schedulaa manage before accounting?',
        answer:
          'Schedulaa connects public booking, customer records, staff scheduling and time, estimates, work orders, invoices, payment links, and operational reporting.',
      },
    ],
    conclusion:
      'Schedulaa and Xero are not feature-equivalent substitutes. Choose Xero for accounting-ledger needs, Schedulaa for connected service operations, or use the verified journal-export connection when both layers are required.',
    relatedLinks: [
      { label: 'Research Xero alternatives', href: '/alternatives/xero' },
      { label: 'Explore Business Finance', href: '/business-finance' },
      { label: 'Review invoices and payment links', href: '/business-finance/invoices' },
    ],
  },
};

export function getComparisonPageContent(vendor: string): ComparisonPageOverride | undefined {
  return comparisonPageContent[vendor];
}

export function buildComparisonFaqJsonLd(faq: ComparisonFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
