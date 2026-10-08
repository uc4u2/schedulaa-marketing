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
