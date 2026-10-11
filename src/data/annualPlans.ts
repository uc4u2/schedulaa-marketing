export type AnnualPlan = {
  slug: "starter-annual" | "pro-annual" | "business-annual";
  planKey: "starter" | "pro" | "business";
  feedId: string;
  name: string;
  shortName: string;
  price: string;
  description: string;
  positioning: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export const ANNUAL_PLANS: AnnualPlan[] = [
  {
    slug: "starter-annual",
    planKey: "starter",
    feedId: "schedulaa-starter-annual",
    name: "Schedulaa Starter (1-Year Subscription)",
    shortName: "Starter",
    price: "199.90",
    description:
      "Annual Schedulaa software subscription for solo service businesses. Includes Website Builder, online booking, customer portal, Stripe payments, and basic reporting.",
    positioning:
      "For solo professionals who need a website, booking, payments, and a connected customer flow.",
    image: "/images/merchant/schedulaa-starter-annual-v2.webp",
    imageAlt:
      "Enterprise visualization of the connected Schedulaa Starter booking, customer, and payment workflow",
    features: [
      "Website Builder with branded pages and templates",
      "Online booking, customer portal, and public booking links",
      "Stripe payments, refunds, and payment history when configured",
      "Basic reports and CSV or PDF exports",
      "1 staff seat and 1 location included",
      "Custom-domain connection and automatic SSL",
    ],
  },
  {
    slug: "pro-annual",
    planKey: "pro",
    feedId: "schedulaa-pro-annual",
    name: "Schedulaa Pro (1-Year Subscription)",
    shortName: "Pro",
    price: "499.90",
    description:
      "Annual Schedulaa software subscription with website, booking, payments, staff scheduling, time tracking, role-based access, and payroll-ready reports.",
    positioning:
      "For small service teams that need staff scheduling, time tracking, permissions, and payroll-ready operations.",
    image: "/images/merchant/schedulaa-pro-annual-v2.webp",
    imageAlt:
      "Enterprise visualization of Schedulaa Pro team scheduling, time tracking, and reporting",
    features: [
      "Everything included in Starter",
      "Staff scheduling and shared calendars",
      "Clock-in, clock-out, and break workflows",
      "Overtime indicators and attendance anomaly review",
      "Payroll-ready reports and approval trails",
      "Role-based access for managers and employees",
      "Up to 5 staff seats and 1 location included",
    ],
  },
  {
    slug: "business-annual",
    planKey: "business",
    feedId: "schedulaa-business-annual",
    name: "Schedulaa Business (1-Year Subscription)",
    shortName: "Business",
    price: "1199.90",
    description:
      "Annual Schedulaa software subscription with booking, staff management, estimates, invoices, payment links, work orders, inventory, and financial reporting.",
    positioning:
      "For service businesses that need customer approvals, job execution, billing, costs, inventory, and reporting in one workflow.",
    image: "/images/merchant/schedulaa-business-annual-v2.webp",
    imageAlt:
      "Enterprise visualization of the Schedulaa Business workflow from approval to reporting",
    features: [
      "Everything included in Pro",
      "Estimates and supported customer approval workflows",
      "Invoices and Stripe payment links when configured",
      "Work orders, job assignments, and reviewed field reports",
      "Expenses, purchases, materials, inventory, and vendors",
      "Profitability, tax-summary, and month-end operational reports",
      "Up to 10 staff seats and 5 locations or departments included",
    ],
  },
];

export const getAnnualPlan = (slug: string) =>
  ANNUAL_PLANS.find((plan) => plan.slug === slug);
