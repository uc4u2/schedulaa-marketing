import { AppLocale } from '@/utils/locale';

export type PlanFeature = string | { type?: string; text?: string };

export type SubscriptionPlan = {
  key: 'starter' | 'pro' | 'business';
  name: string;
  price: string;
  positioning: string;
  description: string;
  trialNote: string;
  features: PlanFeature[];
  ctaLabel: string;
  highlight?: boolean;
  badge?: string;
};

export type WebsiteSetupService = {
  key: 'basic' | 'growth' | 'premium';
  name: string;
  price: string;
  priceNote: string;
  bestFor: string;
  description: string;
  includes: string[];
  ctaLabel: string;
  ctaMode: 'checkout' | 'contact';
};

export type SelectOption =
  | string
  | {
      key: string;
      label: string;
      description?: string;
      helper?: string;
    };

export type PlanFinderAnswers = {
  businessType: string;
  teamSize: string;
  needs: string[];
  websiteNeed: string;
  setupPreference: string;
  pageCount: string;
  contentComplexity: string;
};

export type ComparisonSection = {
  section: string;
  items: Array<{
    label: string;
    starter: string;
    pro: string;
    business: string;
  }>;
};

export type PricingExperienceContent = {
  subscriptionPlans: SubscriptionPlan[];
  websiteSetupServices: {
    title: string;
    subtitle: string;
    note: string;
    items: WebsiteSetupService[];
  };
  quoteToInvoiceSection: {
    badge: string;
    title: string;
    subtitle: string;
    bullets: string[];
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  comparison: {
    title: string;
    subtitle: string;
    headers: {
      feature: string;
      starter: string;
      pro: string;
      business: string;
    };
    rows: {
      price: {
        label: string;
        starter: string;
        pro: string;
        business: string;
      };
      bestFor: {
        label: string;
        starter: string;
        pro: string;
        business: string;
      };
    };
    sections: ComparisonSection[];
  };
  planFinder: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    startCta: string;
    compareCta: string;
    close: string;
    back: string;
    next: string;
    done: string;
    stepLabel: string;
    ofLabel: string;
    questions: {
      businessType: {
        label: string;
        helper: string;
        options: SelectOption[];
      };
      teamSize: {
        label: string;
        helper: string;
        options: SelectOption[];
      };
      needs: {
        label: string;
        helper: string;
        websiteOnlyHint: string;
        sections: Array<{
          title: string;
          options: SelectOption[];
        }>;
      };
      websiteNeed: {
        label: string;
        helper: string;
        options: SelectOption[];
      };
      setupPreference: {
        label: string;
        helper: string;
        options: SelectOption[];
      };
      pageCount: {
        label: string;
        helper: string;
        options: SelectOption[];
      };
      contentComplexity: {
        label: string;
        helper: string;
        options: SelectOption[];
      };
    };
    setupScopeHint: string;
    final: {
      title: string;
      subtitle: string;
      monthlyPlanLabel: string;
      monthlySubscriptionLabel: string;
      optionalSetupLabel: string;
      startTrialTemplate: string;
      noSetupTitle: string;
      noSetupPrice: string;
      includedWithPlan: string;
      whyLabel: string;
      startTrialNote: string;
      viewPlanTemplate: string;
      talkToSales: string;
      summaryTitle: string;
      summaryMonthlyTemplate: string;
      summaryOptionalSetupTemplate: string;
      summaryNoSetup: string;
      recurringNote: string;
      addLaterNote: string;
      reassurance: string;
      activeSubscriptionNote: string;
      scopeConfirmedNote: string;
      recommendationTitle: string;
      noSetupDescription: string;
      loadingTrial: string;
      reasons: {
        starter: string;
        starterFallback: string;
        proScheduling: string;
        proEmployeePortal: string;
        proTeamService: string;
        proFallback: string;
        business: string;
        setupNone: string;
        setupBasic: string;
        setupGrowth: string;
        setupPremiumLarge: string;
        setupPremiumAssets: string;
      };
      guidance: {
        starter: string;
        pro: string;
        business: string;
      };
    };
  };
};

export type PricingSource = {
  hero: {
    eyebrow: string;
    title: string[];
    subtitle: string;
    primaryCta: { label: string };
    secondaryCta: { label: string };
  };
  included: { title: string; items: string[] };
  whyTeams: { title: string; items: string[] };
  assurances: {
    title: string;
    subtitle: string;
    items: Array<{ key: string; title: string; description: string }>;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: { label: string };
    secondaryCta: { label: string };
  };
  ribbon: { message: string };
  plans: {
    table: {
      list: Array<{
        key: 'starter' | 'pro' | 'business' | string;
        name: string;
        price: string;
        positioning?: string;
        description: string;
        trialNote: string;
        features: PlanFeature[];
        ctaLabel: string;
        highlight?: boolean;
        badge?: string;
      }>;
    };
  };
  comparison: {
    title: string;
    subtitle: string;
    headers: { feature: string };
    values: { yes: string; dash: string; businessHours: string; always: string };
    rows: Record<string, Record<string, string>>;
  };
  pricingExperience: PricingExperienceContent;
};

const STARTER_COMPATIBLE_NEEDS = [
  'Website only',
  'Online booking',
  'Contact / lead forms',
  'Services',
  'Products',
] as const;

const BUSINESS_FINANCE_NEEDS = [
  'Quote requests',
  'Estimates',
  'Work orders',
  'Field reports',
  'Invoices',
  'Expenses / purchases',
  'Inventory / materials',
  'Vendors',
  'Profitability',
  'Tax summary',
  'Month-end review',
  'Payroll-ready reports',
] as const;

const SERVICE_BUSINESS_NEEDS = ['Online booking', 'Contact / lead forms', 'Services', 'Products'] as const;

const includesAny = (selected: string[], bucket: readonly string[]) => selected.some((item) => bucket.includes(item));
const includesOnly = (selected: string[], bucket: readonly string[]) => selected.every((item) => bucket.includes(item));

export const getPricingExperience = (
  _locale: AppLocale | string | null | undefined,
  pricingSource: PricingSource,
): PricingExperienceContent => pricingSource.pricingExperience;

export const getPlanFinderRecommendation = (
  answers: PlanFinderAnswers,
  content: PricingExperienceContent['planFinder']['final'],
) => {
  const { teamSize, needs, websiteNeed, setupPreference, pageCount, contentComplexity } = answers;
  const isSolo = teamSize === 'just_me';
  const hasBusinessFinanceNeed = includesAny(needs, BUSINESS_FINANCE_NEEDS);
  const hasServiceBusinessNeed = includesAny(needs, SERVICE_BUSINESS_NEEDS);
  const websiteOnly = needs.length === 1 && needs[0] === 'Website only';

  let planKey: 'starter' | 'pro' | 'business';
  let reason: string;

  if (hasBusinessFinanceNeed) {
    planKey = 'business';
    reason = content.reasons.business;
  } else if (needs.includes('Staff scheduling')) {
    planKey = 'pro';
    reason = content.reasons.proScheduling;
  } else if (needs.includes('Employee portal')) {
    planKey = 'pro';
    reason = content.reasons.proEmployeePortal;
  } else if (!isSolo && hasServiceBusinessNeed && !websiteOnly) {
    planKey = 'pro';
    reason = content.reasons.proTeamService;
  } else if (includesOnly(needs, STARTER_COMPATIBLE_NEEDS)) {
    planKey = 'starter';
    reason = content.reasons.starter;
  } else if (isSolo) {
    planKey = 'starter';
    reason = content.reasons.starterFallback;
  } else {
    planKey = 'pro';
    reason = content.reasons.proFallback;
  }

  if (websiteNeed === 'internal_only' || setupPreference === 'diy') {
    return { planKey, reason, setupKey: null, setupReason: content.reasons.setupNone };
  }
  if (pageCount === '11_15' || pageCount === '15_plus') {
    return { planKey, reason, setupKey: 'premium' as const, setupReason: content.reasons.setupPremiumLarge };
  }
  if (contentComplexity === 'many_assets' || contentComplexity === 'migration') {
    return { planKey, reason, setupKey: 'premium' as const, setupReason: content.reasons.setupPremiumAssets };
  }
  if (pageCount === '1_5' && contentComplexity === 'simple') {
    return { planKey, reason, setupKey: 'basic' as const, setupReason: content.reasons.setupBasic };
  }
  return { planKey, reason, setupKey: 'growth' as const, setupReason: content.reasons.setupGrowth };
};
