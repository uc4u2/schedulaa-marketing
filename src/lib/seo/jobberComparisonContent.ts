import { LIVE_TRIP_GPS, ON_MY_WAY_EMAIL, PAYMENT_REMINDERS } from '@/components/dispatch/claims';
import type { AlternativePageContent } from '@/lib/seo/alternativePageContent';
import type { ComparisonPageOverride } from '@/lib/seo/comparisonPageContent';

const reviewed = 'Prices below are USD from Jobber’s pricing page (getjobber.com/pricing), reviewed October 2026.';

export const jobberComparisonPage: ComparisonPageOverride = {
  metaTitle: 'Schedulaa vs Jobber | Home Service Comparison',
  metaDescription:
    'Compare Schedulaa vs Jobber on price, seats, salon booking, dispatch GPS, websites, invoices, and payroll-ready reporting for service teams.',
  heroTitle: 'Schedulaa vs Jobber for home service and salons',
  heroSubtitle:
    'Jobber is built for home-service and contractor businesses. Schedulaa connects booking, a branded website, dispatch, invoices, and payroll-ready reporting, including appointment businesses.',
  intro: [
    `${reviewed} Core is $49 per month with no commitment, $39 with a one-year commitment, or $29 billed annually, for one user. It includes booking, quotes, invoices, online payments, a website, and reports.`,
    'Schedulaa Starter is $19.99 per month, Pro is $49.99 with 5 seats, and Business is $119.99 with 10 seats and up to 5 locations. Extra Pro and Business seats are $9 per month. The 14-day trial does not require a card, and annual billing is about two months free.',
  ],
  contextBlock: {
    title: 'The practical difference: contractor suite or broader service operations',
    paragraphs: [
      'Jobber’s published plans target home-service and contractor work. They do not include salon-specific or tattoo-specific plans. Schedulaa’s industry pages include salons, spas, and tattoo and piercing studios alongside field service.',
      'Connect ($139 / $119 / $99) adds automated reminders, auto payments, checklists, automated quote and invoice follow-ups, QuickBooks sync, and time and expenses. Grow ($199 / $169 / $149) adds advanced quotes and upsells, auto time tracking, job costing, two-way SMS, and custom automations. Plus starts at $499 / $439 / $399 and includes 5 users. Extra Jobber users are $29 per month.',
      'Schedulaa does not automatically chase unpaid invoices or unanswered quotes. Managers send a one-click payment reminder and follow-up emails from templates. Jobber’s automated follow-ups on Connect and above are a real Jobber capability, not a Schedulaa advantage.',
    ],
  },
  executiveOverview: {
    rows: [
      {
        label: 'Published starting price',
        schedulaa: 'Starter $19.99/month, Pro $49.99/month, Business $119.99/month. Annual billing is about two months free.',
        competitor: 'Core $49/month with no commitment, $39 on a one-year commitment, or $29 billed annually.',
      },
      {
        label: 'Users and locations',
        schedulaa: 'Starter includes 1 seat, Pro includes 5, and Business includes 10 seats and up to 5 locations. Extra Pro and Business seats are $9/month.',
        competitor: 'Core, Connect, and Grow include 1 user. Plus includes 5 users. Extra users are $29/month.',
      },
      {
        label: 'Booking and website',
        schedulaa: 'Online booking for service businesses, including salons, plus a branded website and custom domain with automatic SSL on every plan. Optional website setup is $500, $1,500, or from $2,500.',
        competitor: 'Core includes booking and a website. Published plans are aimed at home-service and contractor businesses, not salon-specific or tattoo-specific packages.',
      },
      {
        label: 'Dispatch and live location',
        schedulaa: `${LIVE_TRIP_GPS} ${ON_MY_WAY_EMAIL}`,
        competitor: 'The October 2026 pricing summary reviewed here does not list GPS. Confirm Jobber’s current tracking on Jobber’s site before treating location as a gap.',
      },
      {
        label: 'Quotes, invoices, and follow-up',
        schedulaa: PAYMENT_REMINDERS,
        competitor: 'Core includes quotes, invoices, and online payments. Connect and above add automated quote and invoice follow-ups.',
      },
      {
        label: 'Payments',
        schedulaa: 'Eligible booking, invoice, and product payments use a configured Stripe account. Processing terms follow Stripe.',
        competitor: 'Card processing is 2.9% + 30¢. Tap to Pay in the mobile app needs no hardware and is 2.7% + 30¢. ACH is 1%.',
      },
      {
        label: 'Payroll',
        schedulaa:
          'Payroll-ready calculations and supported T4, ROE, and W-2 documents from approved time, without a separate payroll subscription. Schedulaa does not file or remit payroll taxes. Canada excludes Quebec. Full U.S. finalization is limited to documented states.',
        competitor: 'The Gusto integration syncs timesheets and reimbursable expenses. Payroll itself runs in Gusto.',
      },
    ],
  },
  differentiators: [
    {
      title: 'Lower published subscription price and cheaper extra seats',
      body: 'Schedulaa starts at $19.99 per month, and extra Pro or Business seats are $9. Jobber Core starts at $29 to $49 depending on commitment, and extra users are $29 each.',
    },
    {
      title: 'Appointment booking and a branded website',
      body: 'Schedulaa publishes a tenant website with a custom domain and books salon and other appointment businesses. Jobber includes a website on Core and does not publish salon-specific or tattoo-specific plans.',
    },
    {
      title: 'Payroll-ready reporting without a payroll subscription',
      body: 'Schedulaa prepares calculations and supported T4, ROE, and W-2 documents inside the operations platform. It does not replace Gusto, ADP, or government filing. Jobber’s Gusto integration leaves payroll processing in Gusto.',
    },
    {
      title: 'Trip-scoped GPS and an optional client email',
      body: `${LIVE_TRIP_GPS} ${ON_MY_WAY_EMAIL}`,
    },
    {
      title: 'Jobber’s contractor automation is a real strength',
      body: 'Choose Jobber when automated quote and invoice follow-ups, QuickBooks sync, checklists, or Tap to Pay are the purchase requirement. Schedulaa does not claim those Jobber Connect and Grow features as its own.',
    },
  ],
  fitMatrix: [
    {
      scenario: 'You run a home-service company and want Jobber’s automated follow-ups, QuickBooks sync, or Tap to Pay.',
      recommendation: 'Evaluate Jobber',
    },
    {
      scenario: 'You need salon or appointment booking, a branded website, lower seat pricing, and payroll-ready documents in one system.',
      recommendation: 'Evaluate Schedulaa',
    },
    {
      scenario: 'You need software to file and remit payroll taxes.',
      recommendation: 'Use a payroll provider. Schedulaa does not file or remit, and Jobber payroll runs in Gusto.',
    },
  ],
  faq: [
    {
      question: 'Does Jobber lack no-hardware card payments?',
      answer:
        'No. Jobber offers Tap to Pay in the mobile app with no hardware at 2.7% + 30¢. Standard card processing is 2.9% + 30¢, and ACH is 1%. Schedulaa collects eligible payments through Stripe instead.',
    },
    {
      question: 'Does Schedulaa automatically chase unpaid invoices and unanswered quotes?',
      answer: PAYMENT_REMINDERS,
    },
    {
      question: 'What GPS tracking does Schedulaa include?',
      answer: `${LIVE_TRIP_GPS} ${ON_MY_WAY_EMAIL}`,
    },
    {
      question: 'Does Schedulaa replace Gusto or Jobber’s Gusto integration?',
      answer:
        'No. Jobber syncs timesheets and reimbursable expenses to Gusto, and payroll runs in Gusto. Schedulaa can prepare payroll calculations and supported T4, ROE, and W-2 documents for documented jurisdictions, without filing or remittance.',
    },
    {
      question: 'Which Jobber add-ons were on the pricing page?',
      answer: 'Marketing Suite is $99, Receptionist is $29, and Pipeline is $49. Confirm current packaging on getjobber.com/pricing.',
    },
  ],
  conclusion:
    'Jobber is a credible home-service platform, especially when Connect or Grow automation, QuickBooks sync, and Tap to Pay are required. Schedulaa is the closer fit when price, $9 seats, salon booking, a branded website, trip-scoped On my way GPS, and payroll-ready documents matter more than automatic invoice chasing.',
  relatedLinks: [
    { label: 'Research Jobber alternatives', href: '/alternatives/jobber' },
    { label: 'Explore dispatch and work orders', href: '/dispatch' },
    { label: 'Explore invoices and payment links', href: '/business-finance/invoices' },
    { label: 'Explore salon booking', href: '/booking/salon' },
  ],
};

export const jobberAlternativePage: AlternativePageContent = {
  competitor: 'Jobber',
  title: 'Jobber Alternatives for Service Teams | Schedulaa',
  description:
    'Compare Jobber alternatives for contractors and appointment businesses. Review pricing, dispatch, booking, invoices, websites, and payroll-ready workflows.',
  h1: 'Jobber alternatives for contractors and appointment teams',
  lead:
    'If you are comparing Jobber alternatives, separate contractor quoting and automated follow-up from the website, booking, dispatch, and payroll-ready work your team also needs.',
  intro: [
    `${reviewed} Jobber Core covers booking, quotes, invoices, online payments, a website, and reports for one user. Higher plans add automation, QuickBooks sync, and two-way SMS.`,
    'Schedulaa is an alternative when the same account should publish a branded website, book appointments, run trip-scoped dispatch, invoice the work, and prepare payroll documents without a separate payroll subscription.',
  ],
  contextHeading: 'What to look for in a Jobber alternative',
  contextParagraphs: [
    'Compare included users, extra-user price, quoting, invoicing, payment hardware, QuickBooks, SMS, and whether follow-ups are automatic. Jobber Connect and above advertise automated quote and invoice follow-ups.',
    'Then test appointment booking, a custom-domain website, and payroll-ready reporting. Schedulaa covers those workflows and does not automatically chase invoices or quotes.',
  ],
  differentiatorsHeading: 'Where Schedulaa fits among Jobber alternatives',
  differentiators: [
    {
      title: 'Price and seats',
      body: 'Schedulaa Starter is $19.99, Pro is $49.99 for 5 seats, and Business is $119.99 for 10 seats and up to 5 locations. Extra Pro and Business seats are $9. Jobber extra users are $29.',
    },
    {
      title: 'Salons and a branded website',
      body: 'Schedulaa includes online booking and a custom-domain website. The industry directory includes salons, spas, and tattoo and piercing. Jobber does not publish salon-specific or tattoo-specific plans.',
    },
    {
      title: 'Dispatch without all-day tracking',
      body: `${LIVE_TRIP_GPS} ${ON_MY_WAY_EMAIL}`,
    },
    {
      title: 'Reminders are manual',
      body: `${PAYMENT_REMINDERS} Automated chasing on Jobber Connect and above is not a Schedulaa feature.`,
    },
  ],
  comparisonHeading: 'Jobber alternatives: workflow differences',
  comparisonRows: [
    {
      label: 'Who it is for',
      schedulaa: 'Service businesses that mix appointments, field work, websites, invoicing, and payroll-ready reporting.',
      competitor: 'Home-service and contractor businesses. No salon-specific or tattoo-specific plans.',
    },
    {
      label: 'Follow-up',
      schedulaa: PAYMENT_REMINDERS,
      competitor: 'Connect and above include automated quote and invoice follow-ups.',
    },
    {
      label: 'Dispatch',
      schedulaa: `${LIVE_TRIP_GPS} ${ON_MY_WAY_EMAIL}`,
      competitor: 'Confirm current GPS and routing on Jobber’s site. This guide does not claim Jobber has no schedule or job tools.',
    },
    {
      label: 'Payments',
      schedulaa: 'Configured Stripe flows for eligible booking, invoice, and product payments.',
      competitor: 'Card 2.9% + 30¢, Tap to Pay with no hardware at 2.7% + 30¢, and ACH at 1%.',
    },
    {
      label: 'Payroll',
      schedulaa: 'Supported T4, ROE, and W-2 documents from approved time. No government filing or remittance.',
      competitor: 'Gusto syncs timesheets and reimbursable expenses. Payroll runs in Gusto.',
    },
  ],
  pricingRows: [
    {
      label: 'Monthly price with no annual commitment',
      schedulaa: 'Starter $19.99, Pro $49.99, Business $119.99.',
      competitor: 'Core $49, Connect $139, Grow $199, Plus from $499.',
    },
    {
      label: 'One-year commitment, billed monthly',
      schedulaa: 'Schedulaa does not publish a separate one-year monthly commitment price.',
      competitor: 'Core $39, Connect $119, Grow $169, Plus from $439.',
    },
    {
      label: 'Annual billing',
      schedulaa: 'About two months free: Starter $199.90, Pro $499.90, Business $1,199.90.',
      competitor: 'Core $29, Connect $99, Grow $149, Plus from $399.',
    },
    {
      label: 'Included users and extra users',
      schedulaa: '1, 5, or 10 seats by plan. Extra Pro and Business seats are $9/month. Business includes up to 5 locations.',
      competitor: '1 user on Core, Connect, and Grow. Plus includes 5 users. Extra users are $29/month.',
    },
  ],
  pricingNote: `${reviewed} Jobber add-ons on that page: Marketing Suite $99, Receptionist $29, and Pipeline $49. Schedulaa optional website setup is $500, $1,500, or from $2,500. The Schedulaa trial is 14 days and does not require a credit card. Verify purchase-critical Jobber terms on getjobber.com/pricing.`,
  fitHeading: 'Which operating model fits?',
  fitMatrix: [
    {
      scenario: 'Automated invoice follow-ups, QuickBooks sync, or Tap to Pay will decide the purchase.',
      recommendation: 'Evaluate Jobber',
    },
    {
      scenario: 'You want appointment booking, a custom-domain website, $9 seats, and payroll-ready documents.',
      recommendation: 'Evaluate Schedulaa',
    },
    {
      scenario: 'You need a company to file payroll taxes for you.',
      recommendation: 'Keep a payroll provider such as Gusto',
    },
  ],
  faqHeading: 'Jobber alternative FAQs',
  faq: [
    {
      question: 'Is Schedulaa cheaper than Jobber?',
      answer:
        'On the published monthly prices reviewed in October 2026, Schedulaa Starter is $19.99 and Jobber Core is $49 with no commitment, $39 on a one-year commitment, or $29 billed annually. Extra Schedulaa seats on Pro and Business are $9. Extra Jobber users are $29. Compare the plan that includes the automation you need, not only the starting price.',
    },
    {
      question: 'Can Schedulaa replace Jobber’s automated follow-ups?',
      answer: `${PAYMENT_REMINDERS} That is not the same as Jobber’s automated follow-ups on Connect and above.`,
    },
    {
      question: 'Does Jobber include Tap to Pay?',
      answer: 'Yes. Jobber lists Tap to Pay in the mobile app with no hardware at 2.7% + 30¢.',
    },
    {
      question: 'What does Schedulaa send when a technician is on the way?',
      answer: ON_MY_WAY_EMAIL,
    },
  ],
  conclusionHeading: 'Choose the follow-up model you actually need',
  conclusion:
    'Jobber is a strong alternative to keep when contractor automation, QuickBooks sync, and Tap to Pay are the reason you pay for Connect or Grow. Schedulaa is worth testing when price, seats, salon booking, a branded website, trip-scoped GPS, and payroll-ready reporting are the reason you are looking at Jobber alternatives.',
  primaryCta: { label: 'Explore dispatch and work orders', href: '/dispatch' },
  relatedLinks: [
    { label: 'Compare Schedulaa vs Jobber', href: '/compare/jobber' },
    { label: 'Explore salon booking', href: '/booking/salon' },
    { label: 'Review invoices and payment links', href: '/business-finance/invoices' },
    { label: 'See payroll coverage', href: '/payroll' },
  ],
  sources: [
    { label: 'Jobber pricing', href: 'https://www.getjobber.com/pricing' },
  ],
};
