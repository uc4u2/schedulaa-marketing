export type FooterSectionKey =
  | "company"
  | "product"
  | "resources"
  | "compare"
  | "legal";

export type FooterTranslationKey =
  | "company"
  | "product"
  | "resources"
  | "compareGroup"
  | "legal"
  | "contact"
  | "status"
  | "roadmap"
  | "features"
  | "workforce"
  | "booking"
  | "marketing"
  | "commerce"
  | "payroll"
  | "websiteBuilder"
  | "businessFinance"
  | "mobileApp"
  | "industries"
  | "pricing"
  | "blog"
  | "demo"
  | "docs"
  | "helpCenter"
  | "zapier"
  | "quickbooks"
  | "xero"
  | "compareHub"
  | "alternativesHub"
  | "privacy"
  | "refundPolicy"
  | "terms"
  | "userAgreement"
  | "cookiePolicy"
  | "acceptableUse"
  | "dataProcessing"
  | "security"
  | "accountDeletion"
  | "login"
  | "getStarted";

export type FooterLinkItem = {
  id: string;
  href: string;
  label?: string;
  labelKey?: FooterTranslationKey;
  externalAppLink?: boolean;
};

export type FooterSection = {
  id: FooterSectionKey;
  titleKey: FooterTranslationKey;
  links: FooterLinkItem[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    id: "company",
    titleKey: "company",
    links: [
      { id: "company-contact", href: "/contact", labelKey: "contact" },
      { id: "company-status", href: "/status", labelKey: "status" },
      { id: "company-roadmap", href: "/roadmap", labelKey: "roadmap" },
      {
        id: "company-login",
        href: "/login",
        labelKey: "login",
        externalAppLink: true,
      },
      {
        id: "company-get-started",
        href: "/register",
        labelKey: "getStarted",
        externalAppLink: true,
      },
    ],
  },
  {
    id: "product",
    titleKey: "product",
    links: [
      { id: "product-features", href: "/features", labelKey: "features" },
      { id: "product-workforce", href: "/workforce", labelKey: "workforce" },
      { id: "product-booking", href: "/booking", labelKey: "booking" },
      { id: "product-industries", href: "/industries", labelKey: "industries" },
      { id: "product-marketing", href: "/marketing", labelKey: "marketing" },
      { id: "product-commerce", href: "/commerce", labelKey: "commerce" },
      { id: "product-payroll", href: "/payroll", labelKey: "payroll" },
      {
        id: "product-website-builder",
        href: "/website-builder",
        labelKey: "websiteBuilder",
      },
      {
        id: "product-business-finance",
        href: "/business-finance",
        labelKey: "businessFinance",
      },
      { id: "product-mobile-app", href: "/mobile-app", labelKey: "mobileApp" },
      { id: "product-pricing", href: "/pricing", labelKey: "pricing" },
    ],
  },
  {
    id: "resources",
    titleKey: "resources",
    links: [
      { id: "resources-blog", href: "/blog", labelKey: "blog" },
      { id: "resources-demo", href: "/demo", labelKey: "demo" },
      { id: "resources-contact", href: "/contact", labelKey: "contact" },
      { id: "resources-docs", href: "/docs", labelKey: "docs" },
      { id: "resources-help", href: "/client/support", labelKey: "helpCenter" },
      { id: "resources-zapier", href: "/zapier", labelKey: "zapier" },
      {
        id: "resources-quickbooks",
        href: "/docs?topic=quickbooks-onboarding",
        labelKey: "quickbooks",
      },
      {
        id: "resources-xero",
        href: "/docs?topic=xero-onboarding",
        labelKey: "xero",
      },
    ],
  },
  {
    id: "compare",
    titleKey: "compareGroup",
    links: [{ id: "compare-hub", href: "/compare", labelKey: "compareHub" }],
  },
  {
    id: "legal",
    titleKey: "legal",
    links: [
      {
        id: "legal-user-agreement",
        href: "/user-agreement",
        labelKey: "userAgreement",
      },
      { id: "legal-terms", href: "/terms", labelKey: "terms" },
      { id: "legal-privacy", href: "/privacy", labelKey: "privacy" },
      {
        id: "legal-refund-policy",
        href: "/refund-policy",
        labelKey: "refundPolicy",
      },
      { id: "legal-cookie-policy", href: "/cookie", labelKey: "cookiePolicy" },
      {
        id: "legal-acceptable-use",
        href: "/acceptable-use",
        labelKey: "acceptableUse",
      },
      {
        id: "legal-data-processing",
        href: "/data-processing",
        labelKey: "dataProcessing",
      },
      { id: "legal-security", href: "/security", labelKey: "security" },
      {
        id: "legal-account-deletion",
        href: "/account-deletion",
        labelKey: "accountDeletion",
      },
    ],
  },
];
