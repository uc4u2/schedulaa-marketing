export type AlternativeComparisonRow = {
  label: string;
  schedulaa: string;
  competitor: string;
};

export type AlternativeFaq = {
  question: string;
  answer: string;
};

export type AlternativePageContent = {
  competitor: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  intro: string[];
  contextHeading: string;
  contextParagraphs: string[];
  differentiatorsHeading: string;
  differentiators: Array<{ title: string; body: string }>;
  comparisonHeading: string;
  comparisonRows: AlternativeComparisonRow[];
  fitHeading: string;
  fitMatrix: Array<{ scenario: string; recommendation: string }>;
  faqHeading: string;
  faq: AlternativeFaq[];
  conclusionHeading: string;
  conclusion: string;
  primaryCta: { label: string; href: string };
  relatedLinks: Array<{ label: string; href: string }>;
};

export const alternativePageContent: Record<string, AlternativePageContent> = {
  gusto: {
    competitor: 'Gusto',
    title: 'Gusto Alternatives for Service Businesses | Schedulaa',
    description:
      'Compare Gusto alternatives for service businesses that need booking, staff scheduling, time tracking, customer management, invoices, and payroll-ready workflows.',
    h1: 'Gusto alternatives for service-business operations',
    lead: 'If you are researching Gusto alternatives, first decide whether you need full-service payroll and HR, a service-operations platform, or a combination of both.',
    intro: [
      'Gusto combines U.S. payroll, HR, benefits, and time tools, and now offers international contractor payments and employer-of-record services through Gusto Global. It should not be described simply as a U.S.-only platform.',
      'Schedulaa takes a different approach: it connects customer booking, staff scheduling, approved time, invoices, payment links, and payroll-ready calculations. It does not replace payroll tax filing, remittance, benefits brokerage, or employer-of-record services.',
    ],
    contextHeading: 'What to look for in a Gusto alternative',
    contextParagraphs: [
      'Start with the workflow creating the most friction. If payroll filing, benefits, and HR administration are the priority, evaluate full-service payroll providers. If bookings, shifts, time records, customer work, and billing are disconnected, evaluate an operations platform.',
      'Regional limits also matter. Schedulaa supports payroll calculations and documented exports in supported jurisdictions, but does not promise Quebec payroll, nationwide U.S. finalization, or government e-filing.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits among Gusto alternatives',
    differentiators: [
      {
        title: 'Customer work and workforce operations share one system',
        body: 'Booking, customer records, employee availability, shifts, and time tracking stay connected instead of starting only when payroll is ready to run.',
      },
      {
        title: 'Approved time becomes payroll-ready input',
        body: 'Managers can prepare payroll calculations and exports from approved operational hours within Schedulaa\'s documented regional limits.',
      },
      {
        title: 'Invoices and payment links stay in the workflow',
        body: 'Service teams can move from booked work to customer billing without treating payroll and customer operations as unrelated systems.',
      },
    ],
    comparisonHeading: 'How Gusto alternatives differ by primary job',
    comparisonRows: [
      {
        label: 'Primary product focus',
        schedulaa: 'Connected service operations across booking, customers, staff schedules, time records, invoices, and payroll-ready calculations.',
        competitor: 'Payroll, HR, benefits, time tools, and related people operations, with global contractor and EOR options.',
      },
      {
        label: 'Customer-facing operations',
        schedulaa: 'Includes a public website, real-time booking, customer records, estimates, invoices, and hosted payment links.',
        competitor: 'Primarily focused on payroll and people operations rather than public booking and service delivery.',
      },
      {
        label: 'Payroll administration',
        schedulaa: 'Prepares calculations, documents, and exports for supported jurisdictions; tax filing and remittance are not automated.',
        competitor: 'Provides U.S. payroll tax filing and related administration, plus international contractor payments and EOR services through Gusto Global.',
      },
      {
        label: 'Scheduling and approved time',
        schedulaa: 'Connects employee availability, shifts, clock-in/out, breaks, and approvals to service operations.',
        competitor: 'Offers time and attendance capabilities; evaluate current plans and integrations for the scheduling workflow your team needs.',
      },
      {
        label: 'Best evaluation method',
        schedulaa: 'Test the path from customer request through staffing, approved hours, billing, and payroll-ready handoff.',
        competitor: 'Test payroll, tax filing, HR, benefits, and global-worker requirements against current packages and availability.',
      },
    ],
    fitHeading: 'Which type of platform fits?',
    fitMatrix: [
      {
        scenario: 'You need full-service U.S. payroll tax filing, benefits, and HR administration.',
        recommendation: 'Evaluate Gusto or another full-service payroll provider',
      },
      {
        scenario: 'You need booking, customers, staff schedules, time tracking, invoices, and payroll-ready calculations connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need both connected service operations and full-service payroll administration.',
        recommendation: 'Evaluate using an operations platform with a payroll provider',
      },
    ],
    faqHeading: 'Gusto alternative FAQs',
    faq: [
      {
        question: 'Is Schedulaa a full replacement for Gusto?',
        answer:
          'Not for every payroll and HR requirement. Schedulaa focuses on service operations and payroll-ready workflows; it does not replace automated payroll tax filing, benefits brokerage, or employer-of-record services.',
      },
      {
        question: 'Is Gusto only available for U.S. workers?',
        answer:
          'No. Gusto\'s core domestic payroll serves U.S. employers, while Gusto Global supports international contractor payments and employer-of-record services for eligible international employees.',
      },
      {
        question: 'What does Schedulaa add for service businesses?',
        answer:
          'Schedulaa connects public booking, customer records, employee schedules, time tracking, invoices, payment links, and payroll-ready calculations in one operational workflow.',
      },
      {
        question: 'Can a business use Schedulaa with a payroll provider?',
        answer:
          'Yes. A business can use Schedulaa to manage operational data and payroll-ready handoff while retaining a provider for filing, remittance, benefits, or other payroll administration.',
      },
    ],
    conclusionHeading: 'Choose by the work you need to connect',
    conclusion:
      'Schedulaa is worth evaluating when customer work, staffing, time records, invoices, and payroll-ready calculations need one operational source. Choose a full-service payroll or HR provider when filing, remittance, benefits, or employer-of-record services are the primary requirement.',
    primaryCta: { label: 'Explore workforce operations', href: '/workforce' },
    relatedLinks: [
      { label: 'Compare Schedulaa vs Gusto directly', href: '/compare/gusto' },
      { label: 'Read the Gusto evaluation guide', href: '/blog/schedulaa-vs-gusto' },
      { label: 'Review payroll coverage', href: '/payroll' },
      { label: 'Explore online booking', href: '/booking' },
    ],
  },
  adp: {
    competitor: 'ADP',
    title: 'ADP Alternatives for Service Businesses | Schedulaa',
    description:
      'Compare ADP alternatives for service businesses that need booking, staff scheduling, time tracking, customer management, invoices, and payroll-ready workflows.',
    h1: 'ADP alternatives for service-business operations',
    lead: 'If you are researching ADP alternatives, first decide whether you need managed payroll and HR, connected service operations, or both systems working side by side.',
    intro: [
      'ADP offers payroll and HR products for small, midsize, and large employers, as well as global payroll services. It should not be described as an enterprise-only platform.',
      'Schedulaa addresses a different operational need: it connects customer booking, staff scheduling, approved time, invoices, payment links, and payroll-ready calculations. It does not replace payroll tax filing, remittance, benefits administration, or global payroll services.',
    ],
    contextHeading: 'What to compare in an ADP alternative',
    contextParagraphs: [
      'Start with the workflow you need to improve. If payroll processing, tax filing, benefits, and broader HR administration are the priority, compare managed payroll and HCM providers. If customer work, employee schedules, time records, and billing are disconnected, compare service-operations platforms.',
      'Regional coverage matters. Schedulaa supports payroll calculations, documents, and exports within documented jurisdictions, but does not automate government filing or remittance and does not support Quebec payroll. Confirm ADP product and feature availability for the countries, states, provinces, and plan you need.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits among ADP alternatives',
    differentiators: [
      {
        title: 'Customer work and workforce operations share one workflow',
        body: 'Booking, customer records, employee availability, shifts, and time tracking stay connected before payroll-ready records are prepared.',
      },
      {
        title: 'Approved time becomes payroll-ready input',
        body: 'Managers can prepare calculations and exports from approved operational hours within Schedulaa\'s documented regional limits.',
      },
      {
        title: 'Invoices and payment links remain connected',
        body: 'Service teams can move from booked work to customer billing without treating customer operations and workforce records as unrelated systems.',
      },
    ],
    comparisonHeading: 'How ADP alternatives differ by primary job',
    comparisonRows: [
      {
        label: 'Primary product focus',
        schedulaa: 'Connected service operations across booking, customers, staff schedules, time records, invoices, and payroll-ready calculations.',
        competitor: 'Payroll, HR, benefits, time, and broader human-capital-management products for employers of different sizes.',
      },
      {
        label: 'Customer-facing operations',
        schedulaa: 'Includes a public website, real-time booking, customer records, estimates, invoices, and hosted payment links.',
        competitor: 'Primarily focused on payroll and people operations rather than public booking and service delivery.',
      },
      {
        label: 'Payroll administration',
        schedulaa: 'Prepares calculations, documents, and exports for supported jurisdictions; government filing and remittance are not automated.',
        competitor: 'Offers payroll processing and tax administration, with capabilities that vary by product, business size, and region.',
      },
      {
        label: 'Scheduling and approved time',
        schedulaa: 'Connects employee availability, shifts, clock-in/out, breaks, and approvals to service operations.',
        competitor: 'Offers time, attendance, and scheduling solutions; confirm the applicable ADP product and package for your team.',
      },
      {
        label: 'Best evaluation method',
        schedulaa: 'Test the path from customer request through staffing, approved hours, billing, and payroll-ready handoff.',
        competitor: 'Test payroll, tax, HR, benefits, time, and regional requirements against the current ADP offering and package.',
      },
    ],
    fitHeading: 'Which type of platform fits?',
    fitMatrix: [
      {
        scenario: 'You need managed payroll, tax filing, benefits, or a broader HR/HCM suite.',
        recommendation: 'Evaluate ADP or another managed payroll provider',
      },
      {
        scenario: 'You need booking, customers, staff schedules, time tracking, invoices, and payroll-ready calculations connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need connected service operations and managed payroll administration.',
        recommendation: 'Evaluate an operations platform alongside a payroll provider',
      },
    ],
    faqHeading: 'ADP alternative FAQs',
    faq: [
      {
        question: 'Is ADP only for large enterprises?',
        answer:
          'No. ADP publishes products for small businesses, midsize employers, and enterprises. Evaluate the product and package intended for your team size and region.',
      },
      {
        question: 'Is Schedulaa a full replacement for ADP?',
        answer:
          'Not for every payroll and HR requirement. Schedulaa focuses on service operations and payroll-ready workflows; it does not replace government filing, remittance, benefits administration, or global payroll services.',
      },
      {
        question: 'Does ADP offer time tracking and scheduling?',
        answer:
          'Yes. ADP offers time, attendance, and scheduling capabilities. Availability and integration depend on the ADP product and package being evaluated.',
      },
      {
        question: 'Can a business use Schedulaa with a payroll provider?',
        answer:
          'Yes. A business can use Schedulaa for customer and workforce operations plus payroll-ready handoff while retaining a provider for filing, remittance, benefits, or other payroll administration.',
      },
    ],
    conclusionHeading: 'Choose by the workflow you need to improve',
    conclusion:
      'Schedulaa is worth evaluating when booking, customer work, staffing, approved time, invoices, and payroll-ready calculations need one operational source. Choose a managed payroll or HCM provider when filing, remittance, benefits, or multi-country payroll administration is the primary requirement.',
    primaryCta: { label: 'Explore workforce operations', href: '/workforce' },
    relatedLinks: [
      { label: 'Compare Schedulaa vs ADP directly', href: '/compare/adp' },
      { label: 'Read the Canada/U.S. evaluation guide', href: '/blog/adp-alternative-canada-us-service-teams' },
      { label: 'Review payroll coverage', href: '/payroll' },
      { label: 'Explore employee scheduling', href: '/workforce' },
    ],
  },
  homebase: {
    competitor: 'Homebase',
    title: 'Homebase Alternatives for Service Businesses | Schedulaa',
    description:
      'Compare Homebase alternatives for service businesses that need customer booking, staff scheduling, time tracking, work orders, invoices, and payment links.',
    h1: 'Homebase alternatives for service-business operations',
    lead:
      'Researching Homebase alternatives? Compare the workflow you actually need: hourly-team scheduling and payroll, customer-facing service operations, or a combination of both.',
    intro: [
      'Homebase offers employee scheduling, time clocks, team communication, hiring and onboarding, HR tools, and full-service U.S. payroll. It should not be described as only a shift scheduler.',
      'Schedulaa focuses on connecting customer booking, employee availability and shifts, approved time, dispatch and work orders, estimates, invoices, and hosted payment links. Its payroll tools support documented calculations and exports, but do not automate government filing or remittance.',
    ],
    contextHeading: 'What to evaluate in a Homebase alternative',
    contextParagraphs: [
      'Start with the boundary between employee operations and customer work. Homebase is designed around hourly teams and offers payroll and HR capabilities. Schedulaa is designed for service businesses that want bookings, customers, field work, staff operations, and billing to share one workflow.',
      'A business that needs full-service U.S. payroll tax filing should retain or evaluate a payroll provider. A team trying to connect booked work, staff assignment, job completion, and customer billing should test the complete service lifecycle.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits among Homebase alternatives',
    differentiators: [
      {
        title: 'Customer bookings connect to staff availability',
        body: 'Public booking, customer records, employee availability, shifts, and appointment changes remain connected instead of living in separate scheduling and customer systems.',
      },
      {
        title: 'Field work continues into billing',
        body: 'Dispatch, work orders, estimates, invoices, and hosted payment links support the work that happens after a customer books or requests service.',
      },
      {
        title: 'Approved hours support payroll-ready workflows',
        body: 'Clock-in/out and approved time feed documented payroll calculations and exports within Schedulaa\'s supported regional boundaries.',
      },
    ],
    comparisonHeading: 'Homebase and Schedulaa solve different operational jobs',
    comparisonRows: [
      {
        label: 'Primary focus',
        schedulaa: 'Customer-facing service operations connected to workforce, jobs, billing, and payroll-ready records.',
        competitor: 'Hourly-team scheduling, time tracking, communication, HR, hiring, and optional full-service U.S. payroll.',
      },
      {
        label: 'Customer booking and records',
        schedulaa: 'Includes public booking, customer profiles, appointment changes, reminders, and related service history.',
        competitor: 'Focuses on employee and labor operations rather than customer appointment and service-delivery workflows.',
      },
      {
        label: 'Work orders and billing',
        schedulaa: 'Supports dispatch, work orders, estimates, invoices, and hosted payment links.',
        competitor: 'Not positioned as a quote-to-work-order-to-invoice platform for customer service jobs.',
      },
      {
        label: 'Payroll boundary',
        schedulaa: 'Supports calculations and documented exports in supported regions; filing and remittance remain external.',
        competitor: 'Offers full-service payroll for U.S.-based customers, including tax calculation, filing, payment, and employee tax forms.',
      },
      {
        label: 'Team operations',
        schedulaa: 'Supports availability, shifts, clock-in/out, breaks, approvals, assignments, and service-work context.',
        competitor: 'Supports scheduling, time clocks, timesheets, communication, time off, hiring, onboarding, and HR tools by plan.',
      },
    ],
    fitHeading: 'Which Homebase alternative fits your workflow?',
    fitMatrix: [
      {
        scenario: 'You mainly need hourly scheduling, time clocks, team communication, HR, and full-service U.S. payroll.',
        recommendation: 'Evaluate Homebase and other workforce or payroll platforms',
      },
      {
        scenario: 'You need customer booking, staff scheduling, field work, estimates, invoices, and payment links connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need connected service operations plus outsourced payroll filing and remittance.',
        recommendation: 'Evaluate Schedulaa alongside a full-service payroll provider',
      },
    ],
    faqHeading: 'Homebase alternative FAQs',
    faq: [
      {
        question: 'Is Homebase only an employee scheduling tool?',
        answer:
          'No. Homebase currently offers scheduling, time tracking, team communication, hiring and onboarding, HR tools, and optional full-service U.S. payroll. Features vary by plan.',
      },
      {
        question: 'Does Schedulaa replace full-service payroll filing?',
        answer:
          'No. Schedulaa supports payroll calculations and documented exports within supported regions, but it does not automate government filing or remittance.',
      },
      {
        question: 'What does Schedulaa add for service businesses?',
        answer:
          'Schedulaa connects public booking, customers, staff availability and shifts, dispatch, work orders, estimates, invoices, and hosted payment links.',
      },
      {
        question: 'Can I use Schedulaa with a payroll provider?',
        answer:
          'Yes. Teams can manage customer and workforce operations in Schedulaa and retain a provider for payroll filing, remittance, benefits, or other payroll administration.',
      },
    ],
    conclusionHeading: 'Choose around the work your team must connect',
    conclusion:
      'Homebase is a credible option for hourly-team scheduling and U.S. payroll. Schedulaa is worth evaluating when customer demand, service delivery, staffing, billing, and payroll-ready records need to stay connected.',
    primaryCta: { label: 'Explore workforce management', href: '/workforce' },
    relatedLinks: [
      { label: 'Online booking', href: '/booking' },
      { label: 'Payroll coverage and boundaries', href: '/payroll' },
      { label: 'Invoices and payment links', href: '/business-finance/invoices' },
      { label: 'Compare Schedulaa and Homebase directly', href: '/compare/homebase' },
    ],
  },
  'when-i-work': {
    competitor: 'When I Work',
    title: 'When I Work Alternatives for Service Teams | Schedulaa',
    description:
      'Compare When I Work alternatives for employee scheduling, time tracking, customer booking, work orders, invoices, and payroll-ready service operations.',
    h1: 'When I Work alternatives for service teams',
    lead:
      'If you are researching When I Work alternatives, decide whether you need focused hourly workforce management, broader service operations, or both.',
    intro: [
      'When I Work documents employee scheduling, time and attendance, team communication, shift coverage, and payroll-provider integrations for hourly teams.',
      'Schedulaa connects staff scheduling and approved time with customer booking, customer records, estimates, work orders, invoices, and payment links. It does not automate government payroll filing or remittance.',
    ],
    contextHeading: 'What to look for in a When I Work alternative',
    contextParagraphs: [
      'Start with the daily workflow. A workforce-focused product may be the right fit when schedules, attendance, time off, shift requests, and team communication are the core requirements.',
      'A service-operations platform is worth evaluating when the customer journey, assigned work, field execution, billing, and payroll-ready handoff must stay connected to the team schedule.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits among When I Work alternatives',
    differentiators: [
      {
        title: 'Customer demand and staffing share one workflow',
        body: 'Online booking, customer records, employee availability, shifts, and assigned work remain connected.',
      },
      {
        title: 'Service work continues beyond the shift',
        body: 'Supported estimates, work orders, field reports, invoices, and payment links carry the workflow through completion and collection.',
      },
      {
        title: 'Payroll claims stay bounded',
        body: 'Schedulaa prepares calculations, documents, and exports only within supported jurisdictions; it does not promise tax filing or remittance.',
      },
    ],
    comparisonHeading: 'How When I Work alternatives differ by primary job',
    comparisonRows: [
      {
        label: 'Primary focus',
        schedulaa: 'Connected customer, workforce, field-service, billing, and website operations.',
        competitor: 'Employee scheduling, time and attendance, team communication, and payroll integrations.',
      },
      {
        label: 'Employee scheduling and time',
        schedulaa: 'Availability, shifts, clock-in/out, breaks, leave, swaps, approvals, and assigned work.',
        competitor: 'Schedules, availability, time clock, breaks, time off, OpenShifts, and shift requests.',
      },
      {
        label: 'Customer and job operations',
        schedulaa: 'Public booking, customers, estimates, work orders, field reports, invoices, and payment links.',
        competitor: 'Workforce management rather than a customer booking and job-finance system.',
      },
      {
        label: 'Payroll handoff',
        schedulaa: 'Payroll-ready calculations and exports in supported jurisdictions, without government filing.',
        competitor: 'Time data can flow to supported payroll-provider integrations; provider terms and regions vary.',
      },
    ],
    fitHeading: 'Which type of platform fits?',
    fitMatrix: [
      {
        scenario: 'You primarily need hourly employee schedules, attendance, and team communication.',
        recommendation: 'Evaluate When I Work and other workforce platforms',
      },
      {
        scenario: 'You need customer booking, team operations, work orders, invoices, and payments connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need government payroll filing and remittance.',
        recommendation: 'Evaluate a payroll provider alongside the operational platform',
      },
    ],
    faqHeading: 'When I Work alternative FAQs',
    faq: [
      {
        question: 'What should I compare in a When I Work alternative?',
        answer:
          'Compare scheduling, attendance, availability, time off, shift coverage, team communication, payroll handoff, customer workflows, permissions, mobile access, and regional support.',
      },
      {
        question: 'Does When I Work support payroll integrations?',
        answer:
          'Yes. When I Work documents supported payroll-provider integrations and exports. Requirements and regional availability differ by provider and plan.',
      },
      {
        question: 'What does Schedulaa add beyond workforce scheduling?',
        answer:
          'Schedulaa connects customer booking and records with employee schedules, time tracking, estimates, work orders, field reports, invoices, and payment links.',
      },
    ],
    conclusionHeading: 'Choose around the workflow that creates the work',
    conclusion:
      'When I Work remains a focused option for hourly scheduling and attendance. Schedulaa is worth evaluating when customer work, staffing, billing, and payroll-ready handoff need one operational source.',
    primaryCta: { label: 'Explore employee scheduling', href: '/workforce' },
    relatedLinks: [
      { label: 'Compare Schedulaa vs When I Work', href: '/compare/when-i-work' },
      { label: 'Explore online booking', href: '/booking' },
      { label: 'Explore work orders and invoices', href: '/business-finance' },
    ],
  },
  'square-appointments': {
    competitor: 'Square Appointments',
    title: 'Square Appointments Alternatives | Schedulaa',
    description:
      'Compare Square Appointments alternatives for online booking, customer records, staff operations, websites, invoices, and payment workflows.',
    h1: 'Square Appointments alternatives for service businesses',
    lead:
      'If you are comparing Square Appointments alternatives, evaluate the full path from discovery and booking through staff coordination, service delivery, and payment.',
    intro: [
      'Square Appointments offers online booking, staff calendars, reminders, customer profiles, and connected Square payments. Current Square plans can also include multi-staff booking, resources, waitlists, and related team capabilities.',
      'Schedulaa connects booking with a tenant website, customer records, employee shifts and time, estimates, work orders, invoices, and Stripe-backed payment links when configured.',
    ],
    contextHeading: 'What to look for in a Square Appointments alternative',
    contextParagraphs: [
      'Compare the public booking experience, staff and resource availability, reminders, customer history, deposits, cancellations, payment-provider requirements, and plan limits.',
      'Then test what happens after the appointment. Businesses with field work, estimates, work orders, employee time approval, invoicing, or product orders may need a broader operational workflow.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits among Square Appointments alternatives',
    differentiators: [
      {
        title: 'Website and booking share tenant content',
        body: 'Managers can publish a responsive tenant website and connect supported services, providers, availability, articles, products, and booking entry points.',
      },
      {
        title: 'Workforce and field operations continue after booking',
        body: 'Shifts, clock-in/out, assigned work orders, field reports, and payroll-ready approved hours can remain connected to customer work.',
      },
      {
        title: 'Payment ecosystems differ',
        body: 'Schedulaa uses supported Stripe-backed flows, while Square Appointments connects to Square payments and point of sale. Verify the provider and region your business needs.',
      },
    ],
    comparisonHeading: 'Square Appointments alternatives: workflow differences',
    comparisonRows: [
      {
        label: 'Primary focus',
        schedulaa: 'Customer, workforce, field-service, finance, ecommerce, and website operations.',
        competitor: 'Appointments, customer records, payments, and point-of-sale workflows in the Square ecosystem.',
      },
      {
        label: 'Online booking',
        schedulaa: 'Tenant website booking with services, eligible providers, real-time availability, and configured payment rules.',
        competitor: 'Booking website and widgets with staff, services, locations, reminders, deposits, and plan-dependent capabilities.',
      },
      {
        label: 'Staff and job operations',
        schedulaa: 'Employee shifts and time plus work orders, field reports, estimates, and operational assignments.',
        competitor: 'Staff calendars and related Square workforce capabilities; verify the current plan and products required.',
      },
      {
        label: 'Payments',
        schedulaa: 'Eligible booking, invoice, and product payments use supported Stripe flows when configured.',
        competitor: 'Square payments and point-of-sale options connected to appointment checkout.',
      },
    ],
    fitHeading: 'Which booking ecosystem fits?',
    fitMatrix: [
      {
        scenario: 'Your business is centered on Square POS, Square payments, and appointment checkout.',
        recommendation: 'Evaluate Square Appointments',
      },
      {
        scenario: 'You need website, booking, staff operations, field work, estimates, and invoices connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'Payment processing or hardware will decide the purchase.',
        recommendation: 'Verify current provider, hardware, regional, and plan terms directly',
      },
    ],
    faqHeading: 'Square Appointments alternative FAQs',
    faq: [
      {
        question: 'Is Square Appointments only a booking calendar?',
        answer:
          'No. Square documents online booking, staff calendars, reminders, customer profiles, payments, and additional capabilities that vary by plan and related Square products.',
      },
      {
        question: 'Can Schedulaa accept appointment payments?',
        answer:
          'Yes, for eligible configured tenants. Schedulaa uses supported Stripe-backed booking and payment flows rather than Square payments.',
      },
      {
        question: 'What should a salon compare before switching?',
        answer:
          'Compare booking, staff and resource availability, reminders, customer records, deposits, cancellations, payment processing, point of sale, invoices, plan limits, and the mobile customer experience.',
      },
    ],
    conclusionHeading: 'Compare the entire appointment workflow',
    conclusion:
      'Square Appointments is compelling for Square-centered booking and checkout. Schedulaa is worth evaluating when booking must connect to a broader tenant website, workforce, field-service, invoice, and payment workflow.',
    primaryCta: { label: 'Explore online booking', href: '/booking' },
    relatedLinks: [
      { label: 'Compare Schedulaa vs Square Appointments', href: '/compare/square-appointments' },
      { label: 'Explore salon booking', href: '/booking/salon' },
      { label: 'Explore invoices and payment links', href: '/business-finance/invoices' },
    ],
  },
  xero: {
    competitor: 'Xero',
    title: 'Xero Alternatives for Service Businesses | Schedulaa',
    description:
      'Research Xero alternatives and adjacent tools for accounting or service operations. Compare ledger needs with booking, workforce, jobs, invoices, and payments.',
    h1: 'Xero alternatives: accounting or service operations?',
    lead:
      'If you are researching Xero alternatives, first decide whether you need another accounting ledger, an operational system for a service business, or both layers working together.',
    intro: [
      'Xero provides cloud accounting capabilities such as invoicing, bills, bank reconciliation, financial reporting, tax workflows, and an app ecosystem. Payroll availability varies by country and current product offering.',
      'Schedulaa is not a general-ledger replacement. It connects booking, customers, staff schedules and time, estimates, work orders, invoices, payment links, and operational reporting. A configured Xero connection can post mapped accounting journals.',
    ],
    contextHeading: 'What to look for in a Xero alternative',
    contextParagraphs: [
      'For accounting intent, compare the general ledger, bank feeds and reconciliation, bills, invoicing, reporting, accountant collaboration, tax workflow, currency support, and regional payroll availability.',
      'For operational intent, compare how customer work is booked, staffed, completed, billed, collected, and handed to accounting. Business Finance in Schedulaa is operational finance, not double-entry accounting or tax filing.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits in Xero-alternative research',
    differentiators: [
      {
        title: 'Schedulaa manages the work before the ledger',
        body: 'Customer bookings, staff time, estimates, jobs, invoices, costs, and payment status create the operational record.',
      },
      {
        title: 'Xero remains an accounting system',
        body: 'Xero is designed for ledger, reconciliation, financial reporting, and region-specific accounting workflows that Schedulaa does not claim to replace.',
      },
      {
        title: 'The live connection is deliberately narrow',
        body: 'Schedulaa can post mapped payroll and revenue journals to a configured Xero organization; it does not create Xero employees, pay runs, payslips, or year-end slips.',
      },
    ],
    comparisonHeading: 'Xero alternatives differ by the job they own',
    comparisonRows: [
      {
        label: 'Primary product role',
        schedulaa: 'Service-business operations across customers, staff, jobs, billing, and websites.',
        competitor: 'Cloud accounting across ledger, reconciliation, invoices, bills, reports, and tax-related workflows.',
      },
      {
        label: 'Operational finance',
        schedulaa: 'Estimates, invoices, costs, inventory, job profitability, tax summaries, payment links, and accountant handoff.',
        competitor: 'Accounting records, reconciliation, reporting, and connected financial workflows.',
      },
      {
        label: 'Accounting boundary',
        schedulaa: 'No double-entry ledger, bank reconciliation, or tax filing.',
        competitor: 'Built for accounting and bookkeeping requirements; verify the current regional plan and features.',
      },
      {
        label: 'Integration boundary',
        schedulaa: 'Mapped accounting journal export for configured payroll and revenue summaries.',
        competitor: 'Receives journal data; employee payroll issuance is outside the Schedulaa integration.',
      },
    ],
    fitHeading: 'Which category fits?',
    fitMatrix: [
      {
        scenario: 'You need a general ledger, bank reconciliation, and accountant-facing financial reporting.',
        recommendation: 'Evaluate Xero and other accounting platforms',
      },
      {
        scenario: 'You need booking, customers, staff operations, jobs, invoices, and payment links connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need service operations plus an accounting ledger.',
        recommendation: 'Evaluate Schedulaa with a configured Xero connection',
      },
    ],
    faqHeading: 'Xero alternative FAQs',
    faq: [
      {
        question: 'Is Schedulaa a replacement for Xero accounting?',
        answer:
          'No. Schedulaa does not provide a double-entry general ledger, bank reconciliation, or tax filing. It is an operational system for service businesses.',
      },
      {
        question: 'Does Schedulaa integrate with Xero?',
        answer:
          'Yes. The live connection supports mapped accounting journal export for configured payroll and revenue summaries. It does not create Xero employees, pay runs, payslips, or year-end slips.',
      },
      {
        question: 'When should I compare accounting alternatives instead?',
        answer:
          'Compare accounting platforms when ledger, reconciliation, bills, financial statements, accountant collaboration, or tax workflows are the primary requirements.',
      },
    ],
    conclusionHeading: 'Choose the layer your business is missing',
    conclusion:
      'Use accounting software for the books and Schedulaa for connected service operations. When both are required, evaluate the verified journal-export boundary rather than treating the products as feature-equivalent substitutes.',
    primaryCta: { label: 'Explore Business Finance', href: '/business-finance' },
    relatedLinks: [
      { label: 'Compare Schedulaa vs Xero', href: '/compare/xero' },
      { label: 'Review invoices and payment links', href: '/business-finance/invoices' },
      { label: 'Explore online booking', href: '/booking' },
    ],
  },
  vagaro: {
    competitor: 'Vagaro',
    title: 'Vagaro Alternatives for Salons & Service Teams | Schedulaa',
    description:
      'Compare Vagaro alternatives for salons and service teams. See how Schedulaa connects branded websites, online booking, staff scheduling, invoices, and payment links.',
    h1: 'Vagaro alternatives for salons and service teams',
    lead: 'If you are comparing Vagaro alternatives, start with the client journey you want to own: discovery, booking, staff coordination, invoicing, and payment.',
    intro: [
      'Vagaro positions its software for beauty, wellness, and fitness businesses. Schedulaa is designed for service businesses that want their public website and day-to-day operations connected in one system.',
      'The right choice depends on your industry, preferred customer experience, and the exact features included in each current plan. This guide focuses on those practical workflow differences without treating every service business as the same.',
    ],
    contextHeading: 'What to look for in a Vagaro alternative',
    contextParagraphs: [
      'Map the full path from a visitor landing on your website to an appointment appearing on the team schedule. Then include customer records, rescheduling, invoices, payment links, and staff access in the evaluation.',
      'Schedulaa is a strong fit when you want a published business website, online booking, customer management, staff scheduling, and billing workflows connected under the same operating account.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits',
    differentiators: [
      {
        title: 'Website and booking work together',
        body: 'Publish a responsive service-business website and connect it to real-time booking availability, services, and providers.',
      },
      {
        title: 'Operations continue after the appointment is booked',
        body: 'Managers can coordinate customers, employee schedules, invoices, and payment links without rebuilding the same client record across disconnected tools.',
      },
      {
        title: 'A broader service-business model',
        body: 'Schedulaa supports appointment-based and field-service workflows beyond beauty and wellness, while still serving salons and independent providers.',
      },
    ],
    comparisonHeading: 'Vagaro alternatives: key workflow differences',
    comparisonRows: [
      {
        label: 'Primary product focus',
        schedulaa: 'Connected websites, booking, customers, workforce operations, invoices, and payment links for service businesses.',
        competitor: 'Business software positioned for beauty, wellness, and fitness providers.',
      },
      {
        label: 'Public customer journey',
        schedulaa: 'A published business website can connect directly to services, providers, and real-time booking availability.',
        competitor: 'Offers online booking, calendars, and website options within the Vagaro product family.',
      },
      {
        label: 'Team operations',
        schedulaa: 'Employee availability, shifts, time tracking, and customer work are managed alongside booking.',
        competitor: 'Review current Vagaro packages for the staff and calendar workflow required by your business.',
      },
      {
        label: 'Invoices and payments',
        schedulaa: 'Managers can create invoices, email them, issue hosted payment links, and track payment status when a provider is configured.',
        competitor: 'Confirm current payment products, transaction terms, and regional availability directly with Vagaro.',
      },
      {
        label: 'Best evaluation method',
        schedulaa: 'Test the complete website-to-booking-to-payment workflow with your own services and staff roles.',
        competitor: 'Test the marketplace, booking, and business-management experience against the same workflow.',
      },
    ],
    fitHeading: 'Which platform fits your workflow?',
    fitMatrix: [
      {
        scenario: "You want beauty, wellness, or fitness software and value Vagaro's industry-specific product ecosystem.",
        recommendation: 'Evaluate Vagaro',
      },
      {
        scenario: 'You want your website, booking, customer records, employee schedules, invoices, and payment links connected.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'Plan details or transaction terms will decide the purchase.',
        recommendation: "Verify both vendors' current plans before switching",
      },
    ],
    faqHeading: 'Vagaro alternative FAQs',
    faq: [
      {
        question: 'What should a salon compare when evaluating Vagaro alternatives?',
        answer:
          'Compare the public website, booking flow, provider availability, customer records, staff scheduling, invoices, payment links, plan limits, and the customer experience on mobile.',
      },
      {
        question: 'Can Schedulaa provide online booking for a salon?',
        answer:
          'Yes. When configured, Schedulaa publishes services and providers with real-time availability so customers can book through the business website.',
      },
      {
        question: 'Does Schedulaa include a website builder?',
        answer: 'Yes. Managers can build and publish a responsive website with pages, services, articles, products, and booking entry points.',
      },
      {
        question: 'Should I verify pricing before switching from Vagaro?',
        answer:
          "Yes. Product packaging and payment terms change. Confirm each vendor's current plan, regional availability, provider requirements, and transaction terms before deciding.",
      },
    ],
    conclusionHeading: 'A practical way to choose',
    conclusion:
      'Choose the platform that supports your real customer and staff workflow with the fewest handoffs. Schedulaa is worth evaluating when a branded website, booking, scheduling, customer management, invoices, and payment links need to operate together.',
    primaryCta: { label: 'Explore salon booking', href: '/booking/salon' },
    relatedLinks: [
      { label: 'Online booking', href: '/booking' },
      { label: 'Website builder', href: '/website-builder' },
      {
        label: 'Invoices and payment links',
        href: '/business-finance/invoices',
      },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  quickbooks: {
    competitor: 'QuickBooks',
    title: 'Programs Like QuickBooks for Service Operations | Schedulaa',
    description:
      'Looking for programs like QuickBooks that also handle service operations? Compare Schedulaa for booking, scheduling, customer records, invoices, and payment links.',
    h1: 'Programs like QuickBooks for service operations',
    lead: 'Some searches for programs like QuickBooks are really searches for a better way to run bookings, staff schedules, customer work, invoices, and payments—not a replacement general ledger.',
    intro: [
      'QuickBooks is accounting software with financial, invoicing, payroll, and related business tools. Schedulaa focuses on the operational workflow of a service business, from the public website and booking through scheduling and customer billing.',
      'Schedulaa is not a general-ledger or bookkeeping replacement. A service business may use Schedulaa for daily operations and keep QuickBooks or another accounting system for bookkeeping, reconciliation, tax preparation, and financial reporting.',
    ],
    contextHeading: 'First decide what you need to replace',
    contextParagraphs: [
      'If the problem is bookkeeping, expense categorization, bank reconciliation, or tax-ready accounting, choose an accounting product. If the problem is coordinating customers, appointments, employees, invoices, and payment links, evaluate an operations platform.',
      'Separating those needs prevents a misleading feature checklist. It also helps teams decide whether they need an alternative to QuickBooks or an operational system alongside it.',
    ],
    differentiatorsHeading: 'What Schedulaa adds to a service workflow',
    differentiators: [
      {
        title: 'Customer-facing booking',
        body: 'Publish services and real-time availability so customers can book with an eligible provider from the business website.',
      },
      {
        title: 'Scheduling linked to service delivery',
        body: 'Manage employee availability, shifts, time tracking, and customer appointments in the same operational system.',
      },
      {
        title: 'Invoices at the end of the workflow',
        body: 'Create and email invoices, issue hosted payment links, and track payment status after the customer work is recorded.',
      },
    ],
    comparisonHeading: 'Schedulaa and QuickBooks solve different primary jobs',
    comparisonRows: [
      {
        label: 'Primary job',
        schedulaa: 'Run service-business workflows across website, booking, customers, employees, invoices, and payments.',
        competitor: 'Manage accounting, financial records, invoicing, payments, and related business-finance workflows.',
      },
      {
        label: 'Online appointment booking',
        schedulaa: 'Built around services, providers, availability, customer intake, and booking management.',
        competitor: 'Check the current QuickBooks product and app ecosystem for the appointment workflow you need.',
      },
      {
        label: 'Accounting boundary',
        schedulaa: 'Provides operational finance views, invoices, payment links, and payroll-ready workflows; it is not a general ledger.',
        competitor: 'Designed for bookkeeping, accounting records, and financial reporting.',
      },
      {
        label: 'Workforce workflow',
        schedulaa: 'Connects employee schedules, availability, shifts, and time data with service operations.',
        competitor: 'Offers payroll and team-management products; verify plan and regional availability for current details.',
      },
      {
        label: 'Using both',
        schedulaa: 'Use Schedulaa as the operational source for appointments, customers, staff work, and billing events.',
        competitor: 'Keep QuickBooks as the accounting system when general-ledger and bookkeeping capabilities are required.',
      },
    ],
    fitHeading: 'Alternative, companion, or both?',
    fitMatrix: [
      {
        scenario: 'Your main need is bookkeeping, reconciliation, financial statements, or tax-ready accounting records.',
        recommendation: 'Use an accounting platform such as QuickBooks',
      },
      {
        scenario: 'Your main need is booking, customer management, employee scheduling, invoices, and payment links.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need both service operations and a general ledger.',
        recommendation: 'Use Schedulaa alongside an accounting system',
      },
    ],
    faqHeading: 'Programs like QuickBooks: common questions',
    faq: [
      {
        question: 'Is Schedulaa a QuickBooks replacement?',
        answer:
          'Not for general-ledger accounting. Schedulaa handles service operations, customer booking, workforce workflows, invoices, and payment links. Keep an accounting platform when you need bookkeeping, reconciliation, and formal financial statements.',
      },
      {
        question: 'Can Schedulaa create invoices and payment links?',
        answer: 'Yes. Managers can create and email invoices, generate hosted payment links, and track payment status when the payment provider is configured.',
      },
      {
        question: 'Can Schedulaa and QuickBooks be used together?',
        answer:
          'Yes. They can serve different roles: Schedulaa for customer and workforce operations, and QuickBooks for accounting. Confirm the current export or integration workflow needed by your finance process.',
      },
      {
        question: 'What should service businesses compare besides accounting?',
        answer:
          'Compare booking, customer records, employee availability, shift management, invoicing, payment collection, permissions, and the public website experience.',
      },
    ],
    conclusionHeading: 'Choose by workflow, not by category label',
    conclusion:
      'Schedulaa is an option for service businesses whose biggest gap is operational: getting customers booked, assigning work, coordinating employees, and turning completed work into invoices and payment links. Keep dedicated accounting software wherever the general ledger remains essential.',
    primaryCta: {
      label: 'Explore invoices and payment links',
      href: '/business-finance/invoices',
    },
    relatedLinks: [
      { label: 'Business Finance', href: '/business-finance' },
      { label: 'Online booking', href: '/booking' },
      { label: 'Workforce management', href: '/workforce' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  paychex: {
    competitor: 'Paychex',
    title: 'Paychex Alternatives for Service Businesses | Schedulaa',
    description:
      'Compare Paychex alternatives for service teams needing scheduling, time tracking, and payroll-ready calculations. See where Schedulaa fits—and where it does not.',
    h1: 'Paychex alternatives for service-business operations',
    lead: 'A useful Paychex alternative comparison starts by separating payroll and HR administration from the customer and workforce operations that produce approved hours.',
    intro: [
      'Paychex positions Paychex Flex around payroll, HR, time and attendance, and benefits. Schedulaa connects customer booking and service delivery with shifts, time tracking, approved hours, and payroll-ready calculations.',
      'Schedulaa does not replace benefits brokerage, a PEO, or full-service payroll tax filing. Teams that need those services may keep Paychex while using Schedulaa to manage the operational work that happens before payroll.',
    ],
    contextHeading: 'What kind of Paychex alternative do you need?',
    contextParagraphs: [
      'If you need payroll tax administration, benefits, or outsourced HR, compare full-service payroll and HCM providers. If you need booking, jobs, shifts, time tracking, approved hours, and customer billing connected, compare operations platforms.',
      'For Schedulaa payroll workflows, regional availability matters: Canada excludes Quebec, and full U.S. payroll finalization is limited to supported states. Confirm coverage before adopting the payroll workflow.',
    ],
    differentiatorsHeading: 'Where Schedulaa fits',
    differentiators: [
      {
        title: 'Service work is connected to workforce data',
        body: 'Customer bookings and operational work can be managed alongside employee schedules, shifts, time records, and approvals.',
      },
      {
        title: 'Payroll-ready, not outsourced payroll administration',
        body: 'Schedulaa calculates payroll from approved operational data and supports documented exports, while employers retain responsibility for filing and remittance workflows.',
      },
      {
        title: 'Customer operations stay in scope',
        body: 'Booking, customer records, invoices, and payment links remain connected to the same service-business workflow.',
      },
    ],
    comparisonHeading: 'Schedulaa and Paychex: key workflow differences',
    comparisonRows: [
      {
        label: 'Primary focus',
        schedulaa: 'Service operations spanning customers, bookings, shifts, time data, invoices, and payroll-ready calculations.',
        competitor: 'Payroll and HR platform with time and attendance, benefits, and related workforce services.',
      },
      {
        label: 'Scheduling and time',
        schedulaa: 'Employee availability, shifts, time tracking, and approvals are connected to customer operations.',
        competitor: 'Paychex offers time, attendance, and scheduling capabilities within its current product packages.',
      },
      {
        label: 'Payroll boundary',
        schedulaa: 'Calculates payroll-ready results from approved hours within documented regional limits; filing and remittance are not automated.',
        competitor: 'Offers payroll processing and tax-administration services; availability and package details should be confirmed directly.',
      },
      {
        label: 'Benefits and PEO',
        schedulaa: 'Tracks supported deductions but does not provide benefits brokerage, PEO, or co-employment services.',
        competitor: 'Offers benefits administration and PEO services among its HR products.',
      },
      {
        label: 'Customer-facing operations',
        schedulaa: 'Includes website, booking, customer-management, invoice, and payment-link workflows.',
        competitor: 'Primarily positioned around payroll, HR, benefits, time, and workforce administration.',
      },
    ],
    fitHeading: 'When to choose Schedulaa, Paychex, or both',
    fitMatrix: [
      {
        scenario: 'You need full-service payroll administration, benefits, PEO, or broader outsourced HR support.',
        recommendation: 'Evaluate Paychex or another full-service provider',
      },
      {
        scenario: 'You need customer booking and service delivery connected to shifts, time tracking, invoices, and payroll-ready calculations.',
        recommendation: 'Evaluate Schedulaa',
      },
      {
        scenario: 'You need operational data in Schedulaa and full-service payroll or HR administration elsewhere.',
        recommendation: 'Evaluate using both systems',
      },
    ],
    faqHeading: 'Paychex alternative FAQs',
    faq: [
      {
        question: 'Does Schedulaa replace Paychex payroll tax filing?',
        answer:
          'No. Schedulaa supports payroll calculations and documented exports within its supported regions, but it does not automate payroll tax filing or remittance.',
      },
      {
        question: 'Does Schedulaa provide benefits brokerage or PEO services?',
        answer: 'No. Schedulaa can track supported deductions, but it is not a benefits broker, PEO, or co-employer.',
      },
      {
        question: 'Can Schedulaa manage shifts and time tracking?',
        answer:
          'Yes. Managers can manage employee availability and shifts, while employees can view schedules and use configured clock-in and clock-out workflows.',
      },
      {
        question: 'Can a business use Schedulaa with Paychex?',
        answer:
          'Yes. A business may use Schedulaa for customer and operational workflows while retaining Paychex for payroll administration, tax services, benefits, or HR support.',
      },
    ],
    conclusionHeading: 'Choose the boundary that matches your team',
    conclusion:
      'Schedulaa is worth evaluating when service delivery, scheduling, approved time, customer billing, and payroll-ready calculations need to share one operational workflow. Keep or select a full-service provider when payroll filing, benefits, PEO, or outsourced HR is the actual requirement.',
    primaryCta: { label: 'Review payroll coverage', href: '/payroll' },
    relatedLinks: [
      { label: 'Workforce management', href: '/workforce' },
      { label: 'Payroll for Canada', href: '/payroll/canada' },
      { label: 'Payroll for the United States', href: '/payroll/usa' },
      { label: 'Online booking', href: '/booking' },
    ],
  },
};

export const getAlternativePageContent = (vendor: string) => alternativePageContent[vendor.toLowerCase()] || null;

export const buildAlternativeFaqJsonLd = (content: AlternativePageContent) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: content.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});
