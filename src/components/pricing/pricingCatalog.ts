import { toPricingContentLocale } from '@/legacy-content/pricing/getPricingSource';
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

type LocaleKey = 'en' | 'fa' | 'ru' | 'zh' | 'es' | 'fr' | 'de' | 'ar' | 'pt';

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
        key: 'starter' | 'pro' | 'business';
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
};

const EXACT_PRICES = {
  starter: '$19.99/mo',
  pro: '$49.99/mo',
  business: '$119.99/mo',
  basic: '$500 USD',
  growth: '$1,500 USD',
  premium: 'From $2,500 USD',
} as const;

const TRIAL_CTA = 'Start 14-day free trial';
const TRIAL_NOTE = '14-day free trial • Cancel anytime';

export const STARTER_COMPATIBLE_NEEDS = new Set([
  'Website only',
  'Online booking',
  'Contact / lead forms',
  'Services',
  'Products',
]);

export const TEAM_WORKFLOW_NEEDS = new Set(['Staff scheduling', 'Employee portal']);

export const BUSINESS_FINANCE_NEEDS = new Set([
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
]);

const SERVICE_BUSINESS_NEEDS = new Set([
  'Online booking',
  'Contact / lead forms',
  'Services',
  'Products',
]);

const NEED_KEYS = {
  websiteOnly: 'Website only',
  booking: 'Online booking',
  leads: 'Contact / lead forms',
  services: 'Services',
  products: 'Products',
  scheduling: 'Staff scheduling',
  employeePortal: 'Employee portal',
  payrollReady: 'Payroll-ready reports',
  quoteRequests: 'Quote requests',
  estimates: 'Estimates',
  workOrders: 'Work orders',
  fieldReports: 'Field reports',
  invoices: 'Invoices',
  expenses: 'Expenses / purchases',
  inventory: 'Inventory / materials',
  vendors: 'Vendors',
  profitability: 'Profitability',
  taxSummary: 'Tax summary',
  monthEnd: 'Month-end review',
} as const;

const includesAny = (needs: string[], set: Set<string>) => needs.some((need) => set.has(need));
const includesOnly = (needs: string[], set: Set<string>) => needs.every((need) => set.has(need));

type LocaleCopy = {
  planPositioning: {
    starter: string;
    pro: string;
    business: string;
    businessDescription: string;
  };
  businessFinance: {
    heading: string;
    bullets: string[];
  };
  setup: {
    title: string;
    subtitle: string;
    note: string;
    basicPriceNote: string;
    growthPriceNote: string;
    premiumPriceNote: string;
    basicBestFor: string;
    growthBestFor: string;
    premiumBestFor: string;
    basicDescription: string;
    growthDescription: string;
    premiumDescription: string;
    basicIncludes: string[];
    growthIncludes: string[];
    premiumIncludes: string[];
    basicCta: string;
    growthCta: string;
    premiumCta: string;
  };
  quoteToInvoice: {
    badge: string;
    title: string;
    subtitle: string;
    bullets: string[];
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  comparison: {
    headers: {
      feature: string;
      starter: string;
      pro: string;
      business: string;
    };
    bestForLabel: string;
    bestForValues: {
      starter: string;
      pro: string;
      business: string;
    };
    businessFinanceSection: string;
    businessFinanceRows: string[];
  };
  planFinder: PricingExperienceContent['planFinder'];
};

const planFinderEn: PricingExperienceContent['planFinder'] = {
  badge: 'Guided recommendation',
  title: 'Find the Right Plan',
  subtitle: 'Not sure which plan fits? Choose based on how your business runs, not just your industry.',
  intro: 'Answer a few quick questions and we’ll recommend the right Schedulaa plan and optional website setup.',
  startCta: 'Start Plan Finder',
  compareCta: 'Compare plans manually',
  close: 'Close',
  back: 'Back',
  next: 'Next',
  done: 'Done',
  stepLabel: 'Step',
  ofLabel: 'of',
  questions: {
    businessType: {
      label: 'What type of business do you run?',
      helper: 'This gives us context. The recommendation is still driven by workflow and team size.',
      options: [
        { key: 'appointment', label: 'Appointment-based service business' },
        { key: 'project', label: 'Project-based service business' },
        { key: 'field', label: 'Field service business' },
        { key: 'home', label: 'Home service business' },
        { key: 'install', label: 'Installation / repair business' },
        { key: 'professional', label: 'Professional services' },
        { key: 'health', label: 'Health / wellness business' },
        { key: 'education', label: 'Education / training business' },
        { key: 'events', label: 'Events / staffing business' },
        { key: 'cabinet', label: 'Cabinet / Millwork' },
        { key: 'renovation', label: 'Renovation' },
        { key: 'medspa', label: 'Medspa' },
        { key: 'tattoo', label: 'Tattoo / PMU Studio' },
        { key: 'cleaning', label: 'Cleaning Company' },
        { key: 'hvac', label: 'HVAC / Plumbing / Electrical' },
        { key: 'other', label: 'Other service business' },
      ],
    },
    teamSize: {
      label: 'How many people are on your team?',
      helper: 'Team size helps separate solo, small-team, and operationally heavier workflows.',
      options: [
        { key: 'just_me', label: 'Just me' },
        { key: '2_5', label: '2-5 people' },
        { key: '6_15', label: '6-15 people' },
        { key: '16_40', label: '16-40 people' },
        { key: '40_plus', label: '40+ people' },
      ],
    },
    needs: {
      label: 'What do you need to manage?',
      helper: 'Pick the workflows you want Schedulaa to cover.',
      websiteOnlyHint:
        'Website only is a simple-intent option. If you choose another workflow, Website only is removed automatically.',
      sections: [
        {
          title: 'Website & Leads',
          options: [
            { key: NEED_KEYS.websiteOnly, label: NEED_KEYS.websiteOnly },
            { key: NEED_KEYS.booking, label: NEED_KEYS.booking },
            { key: NEED_KEYS.leads, label: NEED_KEYS.leads },
            { key: NEED_KEYS.services, label: NEED_KEYS.services },
            { key: NEED_KEYS.products, label: NEED_KEYS.products },
          ],
        },
        {
          title: 'Team Operations',
          options: [
            { key: NEED_KEYS.scheduling, label: NEED_KEYS.scheduling },
            { key: NEED_KEYS.employeePortal, label: NEED_KEYS.employeePortal },
            { key: NEED_KEYS.payrollReady, label: NEED_KEYS.payrollReady },
          ],
        },
        {
          title: 'Quote-to-Invoice Operations',
          options: [
            { key: NEED_KEYS.quoteRequests, label: NEED_KEYS.quoteRequests },
            { key: NEED_KEYS.estimates, label: NEED_KEYS.estimates },
            { key: NEED_KEYS.workOrders, label: NEED_KEYS.workOrders },
            { key: NEED_KEYS.fieldReports, label: NEED_KEYS.fieldReports },
            { key: NEED_KEYS.invoices, label: NEED_KEYS.invoices },
          ],
        },
        {
          title: 'Finance & Reporting',
          options: [
            { key: NEED_KEYS.expenses, label: NEED_KEYS.expenses },
            { key: NEED_KEYS.inventory, label: NEED_KEYS.inventory },
            { key: NEED_KEYS.vendors, label: NEED_KEYS.vendors },
            { key: NEED_KEYS.profitability, label: NEED_KEYS.profitability },
            { key: NEED_KEYS.taxSummary, label: NEED_KEYS.taxSummary },
            { key: NEED_KEYS.monthEnd, label: NEED_KEYS.monthEnd },
          ],
        },
      ],
    },
    websiteNeed: {
      label: 'Do you need a website?',
      helper: 'This determines whether we also recommend setup help.',
      options: [
        { key: 'new_website', label: 'Yes, I need a new website' },
        { key: 'improve_website', label: 'Yes, I want to improve or move my current website' },
        { key: 'internal_only', label: 'No, I only need internal operations' },
        { key: 'not_sure', label: 'Not sure' },
      ],
    },
    setupPreference: {
      label: 'Do you want to build it yourself or have Schedulaa set it up?',
      helper: 'This only affects the optional website setup recommendation.',
      options: [
        { key: 'diy', label: 'I will build it myself' },
        { key: 'done_for_you', label: 'I want Schedulaa to set it up' },
        { key: 'not_sure', label: 'Not sure yet' },
      ],
    },
    pageCount: {
      label: 'How many website pages do you need?',
      helper: 'This helps us estimate whether your setup fits Basic, Growth, or Premium.',
      options: [
        { key: '1_5', label: '1-5 pages', description: 'Simple website: Home, Services, Contact, Booking/Quote, About or Gallery.' },
        { key: '6_10', label: '6-10 pages', description: 'Fuller sales site: services, products, gallery, reviews, quote/contact pages.' },
        { key: '11_15', label: '11-15 pages', description: 'Larger site: multiple service pages, project pages, location pages, or richer content.' },
        { key: '15_plus', label: '15+ pages', description: 'Usually custom scope. Best handled through Premium or sales review.' },
        { key: 'unknown', label: 'I don’t know', description: 'We’ll usually recommend Growth, then confirm the scope before setup starts.' },
      ],
    },
    contentComplexity: {
      label: 'Do you need content migration or lots of galleries, projects, or products?',
      helper: 'This helps separate simple setups from heavier migration or upload work.',
      options: [
        { key: 'simple', label: 'No, simple content', description: 'Logo, contact info, basic text, a few images, and normal service/product entries.' },
        { key: 'many_assets', label: 'Yes, I have many images/projects/products', description: 'Large gallery, many portfolio items, many services/products, or heavy manual uploads. Usually Premium.' },
        { key: 'migration', label: 'Yes, I need content moved from my old website', description: 'Migration from an existing website. Scope depends on how much content must be moved. Usually Premium.' },
        { key: 'not_sure', label: 'Not sure', description: 'We’ll recommend based on page count and confirm the setup scope before work begins.' },
      ],
    },
  },
  setupScopeHint:
    'Website setup includes page structure, basic content placement, and launch support. Large content libraries, custom copywriting, advanced SEO pages, or heavy manual uploads may require Premium or a custom quote.',
  final: {
    title: 'Your recommended package',
    subtitle:
      'You only need one monthly Schedulaa plan. Website setup is optional and one-time if you want our team to build the site for you.',
    monthlyPlanLabel: 'Recommended monthly plan',
    monthlySubscriptionLabel: 'Monthly subscription',
    optionalSetupLabel: 'Optional one-time website setup',
    startTrialTemplate: 'Start 14-day free trial with {{plan}}',
    noSetupTitle: 'No setup required',
    noSetupPrice: '$0',
    includedWithPlan: 'Included with your monthly plan',
    whyLabel: 'Why:',
    startTrialNote: 'This starts the monthly Schedulaa plan. Website setup can be added separately if needed.',
    viewPlanTemplate: 'View {{plan}} plan',
    talkToSales: 'Talk to sales',
    summaryTitle: 'Your recommendation:',
    summaryMonthlyTemplate: 'Monthly plan: {{plan}} - {{price}}',
    summaryOptionalSetupTemplate: 'Optional one-time setup: {{setup}} - {{price}}',
    summaryNoSetup: 'Website setup: Not needed. You can build it yourself.',
    recurringNote: 'The monthly plan is recurring. Website setup is optional and one-time.',
    addLaterNote: 'You can add website setup later if needed.',
    reassurance: 'You can start with the monthly plan first and add website setup later.',
    activeSubscriptionNote: 'Requires an active Schedulaa subscription. Domain purchase is not included.',
    scopeConfirmedNote:
      'Final setup scope is confirmed before work begins. Extra pages, large content migration, custom copywriting, advanced SEO pages, or heavy gallery/product uploads may be quoted separately.',
    recommendationTitle: 'Your recommended setup',
    noSetupDescription: 'Build it yourself with the included website builder. You can add setup help later if needed.',
    loadingTrial: 'Starting your free trial...',
    reasons: {
      starter:
        'Starter is recommended because you mainly need a website, online booking, contact forms, services, and products without staff scheduling or finance workflows.',
      starterFallback:
        'Starter is recommended because your needs still fit a simple website, booking, and lead-capture workflow.',
      proScheduling: 'Pro is recommended because you selected staff scheduling and team visibility workflows.',
      proEmployeePortal: 'Pro is recommended because you selected employee portal and team workflows.',
      proTeamService:
        'Pro is recommended because you have a team and selected service-business needs like online booking, contact forms, services, or products. Starter may be enough if one person manages everything and you do not need staff workflows.',
      proFallback:
        'Pro is recommended because you have a team and may benefit from staff-facing workflows even if one person can still manage the basics today.',
      business:
        'Business is recommended because you selected quote-to-invoice or finance-ready workflows such as quotes, work orders, invoices, inventory, reporting, or month-end review.',
      setupNone: 'You can use the included website builder and add setup help later if needed.',
      setupBasic: 'Basic is recommended because your site looks like a simple 1-5 page setup with straightforward content.',
      setupGrowth:
        'Growth is recommended because your site needs a fuller structure with services, content, and lead capture.',
      setupPremiumLarge:
        'Premium is recommended because your page count suggests a larger site with more structure and setup work.',
      setupPremiumAssets:
        'Premium is recommended because migration or heavy content uploads usually need a scoped setup review.',
    },
    guidance: {
      starter: 'Need staff scheduling, employee logins, or team visibility? Pro may be a better fit.',
      pro: 'Need quotes, estimates, work orders, invoices, inventory, or month-end reporting? Business may be a better fit.',
      business: 'Best fit for quote-to-invoice operations, job tracking, finance-ready reporting, and more operational control.',
    },
  },
};


const planFinderEs: PricingExperienceContent['planFinder'] = {
  ...planFinderEn,
  badge: 'Recomendación guiada',
  title: 'Encuentra el plan adecuado',
  subtitle: 'Si no tienes claro qué plan encaja, elige según cómo funciona tu negocio, no solo por tu industria.',
  intro: 'Responde unas pocas preguntas y te recomendaremos el plan de Schedulaa y el Website Setup opcional que mejor encajan.',
  startCta: 'Iniciar Plan Finder',
  compareCta: 'Comparar planes manualmente',
  close: 'Cerrar',
  back: 'Atrás',
  next: 'Siguiente',
  done: 'Listo',
  stepLabel: 'Paso',
  ofLabel: 'de',
  questions: {
    businessType: {
      label: '¿Qué tipo de negocio manejas?',
      helper: 'Esto nos da contexto. La recomendación sigue basándose principalmente en tu flujo operativo y el tamaño del equipo.',
      options: [
        { key: 'appointment', label: 'Negocio de servicios con citas' },
        { key: 'project', label: 'Negocio de servicios por proyectos' },
        { key: 'field', label: 'Negocio de servicios de campo' },
        { key: 'home', label: 'Negocio de servicios para el hogar' },
        { key: 'install', label: 'Negocio de instalación / reparación' },
        { key: 'professional', label: 'Servicios profesionales' },
        { key: 'health', label: 'Negocio de salud / bienestar' },
        { key: 'education', label: 'Negocio de educación / formación' },
        { key: 'events', label: 'Negocio de eventos / staffing' },
        { key: 'cabinet', label: 'Cabinet / Millwork' },
        { key: 'renovation', label: 'Renovation' },
        { key: 'medspa', label: 'Medspa' },
        { key: 'tattoo', label: 'Tattoo / PMU Studio' },
        { key: 'cleaning', label: 'Cleaning Company' },
        { key: 'hvac', label: 'HVAC / Plumbing / Electrical' },
        { key: 'other', label: 'Otro negocio de servicios' },
      ],
    },
    teamSize: {
      label: '¿Cuántas personas hay en tu equipo?',
      helper: 'El tamaño del equipo nos ayuda a distinguir entre operación individual, equipo pequeño y operación más compleja.',
      options: [
        { key: 'just_me', label: 'Solo yo' },
        { key: '2_5', label: '2-5 personas' },
        { key: '6_15', label: '6-15 personas' },
        { key: '16_40', label: '16-40 personas' },
        { key: '40_plus', label: '40+ personas' },
      ],
    },
    needs: {
      label: '¿Qué necesitas gestionar?',
      helper: 'Elige los flujos que quieres que cubra Schedulaa.',
      websiteOnlyHint: 'Solo sitio web es una opción de intención simple. Si eliges otro flujo, se quitará automáticamente.',
      sections: [
        { title: 'Sitio web y leads', options: [{ key: NEED_KEYS.websiteOnly, label: 'Solo sitio web' }, { key: NEED_KEYS.booking, label: 'Reservas en línea' }, { key: NEED_KEYS.leads, label: 'Formularios de contacto / leads' }, { key: NEED_KEYS.services, label: 'Servicios' }, { key: NEED_KEYS.products, label: 'Productos' }] },
        { title: 'Operaciones del equipo', options: [{ key: NEED_KEYS.scheduling, label: 'Programación del personal' }, { key: NEED_KEYS.employeePortal, label: 'Portal del empleado' }, { key: NEED_KEYS.payrollReady, label: 'Reportes listos para nómina' }] },
        { title: 'Operaciones Quote-to-Invoice', options: [{ key: NEED_KEYS.quoteRequests, label: 'Solicitudes de presupuesto' }, { key: NEED_KEYS.estimates, label: 'Presupuestos' }, { key: NEED_KEYS.workOrders, label: 'Órdenes de trabajo' }, { key: NEED_KEYS.fieldReports, label: 'Reportes de campo' }, { key: NEED_KEYS.invoices, label: 'Facturas' }] },
        { title: 'Finanzas y reportes', options: [{ key: NEED_KEYS.expenses, label: 'Gastos / compras' }, { key: NEED_KEYS.inventory, label: 'Inventario / materiales' }, { key: NEED_KEYS.vendors, label: 'Proveedores' }, { key: NEED_KEYS.profitability, label: 'Rentabilidad' }, { key: NEED_KEYS.taxSummary, label: 'Resumen fiscal' }, { key: NEED_KEYS.monthEnd, label: 'Cierre de fin de mes' }] },
      ],
    },
    websiteNeed: {
      label: '¿Necesitas un sitio web?',
      helper: 'Esto define si también debemos recomendar ayuda de setup.',
      options: [
        { key: 'new_website', label: 'Sí, necesito un sitio web nuevo' },
        { key: 'improve_website', label: 'Sí, quiero mejorar o migrar mi sitio actual' },
        { key: 'internal_only', label: 'No, solo necesito operaciones internas' },
        { key: 'not_sure', label: 'No estoy seguro' },
      ],
    },
    setupPreference: {
      label: '¿Quieres construirlo tú mismo o que Schedulaa lo configure por ti?',
      helper: 'Esto solo afecta la recomendación del Website Setup opcional.',
      options: [
        { key: 'diy', label: 'Lo construiré yo mismo' },
        { key: 'done_for_you', label: 'Quiero que Schedulaa lo configure por mí' },
        { key: 'not_sure', label: 'Todavía no estoy seguro' },
      ],
    },
    pageCount: {
      label: '¿Cuántas páginas web necesitas?',
      helper: 'Esto nos ayuda a estimar si tu setup encaja mejor en Basic, Growth o Premium.',
      options: [
        { key: '1_5', label: '1-5 páginas', description: 'Sitio simple: Home, Services, Contact, Booking/Quote, About o Gallery.' },
        { key: '6_10', label: '6-10 páginas', description: 'Sitio comercial más completo: services, products, gallery, reviews y páginas de quote/contact.' },
        { key: '11_15', label: '11-15 páginas', description: 'Sitio más grande: varias páginas de servicios, proyectos, ubicaciones o contenido más rico.' },
        { key: '15_plus', label: '15+ páginas', description: 'Normalmente requiere un alcance personalizado y se maneja mejor con Premium o revisión comercial.' },
        { key: 'unknown', label: 'No lo sé', description: 'Normalmente recomendaremos Growth y confirmaremos el alcance antes de empezar.' },
      ],
    },
    contentComplexity: {
      label: '¿Necesitas migración de contenido o muchas galerías, proyectos o productos?',
      helper: 'Esto ayuda a separar un setup simple de una migración o carga manual más pesada.',
      options: [
        { key: 'simple', label: 'No, contenido simple', description: 'Logo, datos de contacto, texto básico, algunas imágenes y entradas normales de servicios/productos.' },
        { key: 'many_assets', label: 'Sí, tengo muchas imágenes/proyectos/productos', description: 'Galería grande, muchos elementos de portafolio, muchos services/products o mucha carga manual. Normalmente Premium.' },
        { key: 'migration', label: 'Sí, necesito mover contenido desde mi sitio anterior', description: 'Migración desde un sitio existente. El alcance depende de cuánto contenido haya que mover. Normalmente Premium.' },
        { key: 'not_sure', label: 'No estoy seguro', description: 'Recomendaremos según el número de páginas y confirmaremos el alcance antes de comenzar.' },
      ],
    },
  },
  setupScopeHint: 'El Website Setup incluye la estructura de páginas, la colocación básica de contenido y el soporte de lanzamiento. Bibliotecas de contenido grandes, redacción personalizada, páginas SEO avanzadas o cargas manuales pesadas pueden requerir Premium o una cotización personalizada.',
  final: {
    ...planFinderEn.final,
    title: 'Tu paquete recomendado',
    subtitle: 'Solo necesitas un plan mensual de Schedulaa. El Website Setup es opcional y de una sola vez si quieres que nuestro equipo construya el sitio por ti.',
    monthlyPlanLabel: 'Plan mensual recomendado',
    monthlySubscriptionLabel: 'Suscripción mensual',
    optionalSetupLabel: 'Website setup opcional de una sola vez',
    startTrialTemplate: 'Iniciar 14-day free trial con {{plan}}',
    noSetupTitle: 'No se necesita setup',
    includedWithPlan: 'Incluido con tu plan mensual',
    whyLabel: 'Por qué:',
    startTrialNote: 'Esto inicia el plan mensual de Schedulaa. Website setup se puede añadir por separado si hace falta.',
    viewPlanTemplate: 'Ver plan {{plan}}',
    talkToSales: 'Hablar con ventas',
    summaryTitle: 'Tu recomendación:',
    summaryMonthlyTemplate: 'Plan mensual: {{plan}} - {{price}}',
    summaryOptionalSetupTemplate: 'Setup opcional de una sola vez: {{setup}} - {{price}}',
    summaryNoSetup: 'Website setup: no es necesario. Puedes construirlo tú mismo.',
    recurringNote: 'El plan mensual es recurrente. Website setup es opcional y de una sola vez.',
    addLaterNote: 'Puedes añadir Website setup más adelante si lo necesitas.',
    reassurance: 'Puedes empezar con el plan mensual y añadir Website setup después.',
    activeSubscriptionNote: 'Requiere una suscripción activa de Schedulaa. La compra del dominio no está incluida.',
    scopeConfirmedNote: 'El alcance final del setup se confirma antes de empezar. Páginas extra, migración grande de contenido, copywriting personalizado, páginas SEO avanzadas o cargas pesadas de galerías/productos pueden cotizarse por separado.',
    recommendationTitle: 'Tu configuración recomendada',
    noSetupDescription: 'Constrúyelo tú mismo con el constructor de sitios incluido. Puedes añadir ayuda de setup más adelante si lo necesitas.',
    loadingTrial: 'Abriendo tu período de prueba...',
    reasons: {
      starter: 'Starter se recomienda porque principalmente necesitas un sitio web, reservas en línea, formularios de contacto, servicios y productos sin programación del personal ni flujos financieros.',
      starterFallback: 'Starter se recomienda porque tus necesidades todavía encajan en un flujo simple de sitio web, reservas y captación de leads.',
      proScheduling: 'Pro se recomienda porque seleccionaste programación del personal y flujos de visibilidad del equipo.',
      proEmployeePortal: 'Pro se recomienda porque seleccionaste portal del empleado y flujos de equipo.',
      proTeamService: 'Pro se recomienda porque tienes un equipo y seleccionaste necesidades de negocio de servicios como reservas en línea, formularios de contacto, servicios o productos. Starter puede ser suficiente si una sola persona gestiona todo y no necesitas flujos de equipo.',
      proFallback: 'Pro se recomienda porque tienes un equipo y probablemente te beneficies de flujos para el personal, incluso si hoy una sola persona puede gestionar lo básico.',
      business: 'Business se recomienda porque seleccionaste flujos quote-to-invoice o listos para finanzas como presupuestos, órdenes de trabajo, facturas, inventario, reportes o cierre de fin de mes.',
      setupNone: 'Puedes usar el constructor de sitios incluido y añadir ayuda de setup más adelante si lo necesitas.',
      setupBasic: 'Basic se recomienda porque tu sitio parece un setup simple de 1-5 páginas con contenido directo.',
      setupGrowth: 'Growth se recomienda porque tu sitio necesita una estructura más completa con servicios, contenido y captación de leads.',
      setupPremiumLarge: 'Premium se recomienda porque tu cantidad de páginas sugiere un sitio más grande con más estructura y trabajo de setup.',
      setupPremiumAssets: 'Premium se recomienda porque la migración o las cargas pesadas de contenido suelen necesitar una revisión de alcance.',
    },
    guidance: {
      starter: '¿Necesitas programación del personal, accesos para empleados o visibilidad del equipo? Pro puede ser una mejor opción.',
      pro: '¿Necesitas presupuestos, órdenes de trabajo, facturas, inventario o cierre de fin de mes? Business puede ser una mejor opción.',
      business: 'La mejor opción para operaciones quote-to-invoice, seguimiento de trabajos, reportes listos para finanzas y mayor control operativo.',
    },
  },
};

const planFinderFr: PricingExperienceContent['planFinder'] = {
  ...planFinderEn,
  badge: 'Recommandation guidée',
  title: 'Trouvez le bon plan',
  subtitle: 'Vous hésitez sur le plan adapté ? Choisissez selon le fonctionnement réel de votre activité, pas uniquement selon votre secteur.',
  intro: 'Répondez à quelques questions et nous vous recommanderons le bon plan Schedulaa ainsi que le Website Setup optionnel si nécessaire.',
  startCta: 'Lancer le Plan Finder',
  compareCta: 'Comparer les plans manuellement',
  close: 'Fermer', back: 'Retour', next: 'Suivant', done: 'Terminer', stepLabel: 'Étape', ofLabel: 'sur',
  questions: { ...planFinderEn.questions,
    businessType: { label: 'Quel type d’entreprise exploitez-vous ?', helper: 'Cela nous donne du contexte. La recommandation repose toujours surtout sur vos workflows et la taille de votre équipe.', options: [
      { key: 'appointment', label: 'Entreprise de services sur rendez-vous' }, { key: 'project', label: 'Entreprise de services orientée projets' }, { key: 'field', label: 'Entreprise de services sur le terrain' }, { key: 'home', label: 'Entreprise de services à domicile' }, { key: 'install', label: 'Entreprise d’installation / réparation' }, { key: 'professional', label: 'Services professionnels' }, { key: 'health', label: 'Activité santé / bien-être' }, { key: 'education', label: 'Activité éducation / formation' }, { key: 'events', label: 'Activité événements / staffing' }, { key: 'cabinet', label: 'Cabinet / Millwork' }, { key: 'renovation', label: 'Renovation' }, { key: 'medspa', label: 'Medspa' }, { key: 'tattoo', label: 'Tattoo / PMU Studio' }, { key: 'cleaning', label: 'Cleaning Company' }, { key: 'hvac', label: 'HVAC / Plumbing / Electrical' }, { key: 'other', label: 'Autre entreprise de services' }, ] },
    teamSize: { label: 'Combien de personnes composent votre équipe ?', helper: 'La taille de l’équipe aide à distinguer les usages solo, petites équipes et opérations plus lourdes.', options: [ { key: 'just_me', label: 'Moi seul' }, { key: '2_5', label: '2-5 personnes' }, { key: '6_15', label: '6-15 personnes' }, { key: '16_40', label: '16-40 personnes' }, { key: '40_plus', label: '40+ personnes' } ] },
    needs: { label: 'Que devez-vous gérer ?', helper: 'Choisissez les workflows que vous voulez couvrir avec Schedulaa.', websiteOnlyHint: 'Site web uniquement est une option simple. Si vous choisissez un autre workflow, cette option sera retirée automatiquement.', sections: [
      { title: 'Site web et leads', options: [{ key: NEED_KEYS.websiteOnly, label: 'Site web uniquement' }, { key: NEED_KEYS.booking, label: 'Réservation en ligne' }, { key: NEED_KEYS.leads, label: 'Formulaires de contact / leads' }, { key: NEED_KEYS.services, label: 'Services' }, { key: NEED_KEYS.products, label: 'Produits' }] },
      { title: 'Opérations d’équipe', options: [{ key: NEED_KEYS.scheduling, label: 'Planification du personnel' }, { key: NEED_KEYS.employeePortal, label: 'Portail employé' }, { key: NEED_KEYS.payrollReady, label: 'Rapports prêts pour la paie' }] },
      { title: 'Opérations devis à facture', options: [{ key: NEED_KEYS.quoteRequests, label: 'Demandes de devis' }, { key: NEED_KEYS.estimates, label: 'Estimations' }, { key: NEED_KEYS.workOrders, label: 'Ordres de travail' }, { key: NEED_KEYS.fieldReports, label: 'Rapports terrain' }, { key: NEED_KEYS.invoices, label: 'Factures' }] },
      { title: 'Finance et reporting', options: [{ key: NEED_KEYS.expenses, label: 'Dépenses / achats' }, { key: NEED_KEYS.inventory, label: 'Inventaire / matériaux' }, { key: NEED_KEYS.vendors, label: 'Fournisseurs' }, { key: NEED_KEYS.profitability, label: 'Rentabilité' }, { key: NEED_KEYS.taxSummary, label: 'Synthèse fiscale' }, { key: NEED_KEYS.monthEnd, label: 'Clôture de fin de mois' }] },
    ] },
    websiteNeed: { label: 'Avez-vous besoin d’un site web ?', helper: 'Cela détermine si nous devons aussi recommander une aide de setup.', options: [ { key: 'new_website', label: 'Oui, j’ai besoin d’un nouveau site' }, { key: 'improve_website', label: 'Oui, je veux améliorer ou migrer mon site actuel' }, { key: 'internal_only', label: 'Non, je veux seulement les opérations internes' }, { key: 'not_sure', label: 'Je ne suis pas sûr' } ] },
    setupPreference: { label: 'Voulez-vous le construire vous-même ou confier le setup à Schedulaa ?', helper: 'Cela n’affecte que la recommandation de Website Setup.', options: [ { key: 'diy', label: 'Je le construirai moi-même' }, { key: 'done_for_you', label: 'Je veux que Schedulaa s’en charge' }, { key: 'not_sure', label: 'Je ne suis pas encore sûr' } ] },
    pageCount: { label: 'Combien de pages de site vous faut-il ?', helper: 'Cela nous aide à estimer si votre setup correspond à Basic, Growth ou Premium.', options: [ { key: '1_5', label: '1-5 pages', description: 'Site simple : Home, Services, Contact, Booking/Quote, About ou Gallery.' }, { key: '6_10', label: '6-10 pages', description: 'Site commercial plus complet : services, products, gallery, reviews et pages quote/contact.' }, { key: '11_15', label: '11-15 pages', description: 'Site plus large : plusieurs pages services, projets, localisations ou contenu plus riche.' }, { key: '15_plus', label: '15+ pages', description: 'Relève généralement d’un périmètre personnalisé et convient mieux à Premium ou à une revue commerciale.' }, { key: 'unknown', label: 'Je ne sais pas', description: 'Nous recommanderons généralement Growth puis confirmerons le périmètre avant de démarrer.' } ] },
    contentComplexity: { label: 'Avez-vous besoin d’une migration de contenu ou de nombreuses galeries, projets ou produits ?', helper: 'Cela nous aide à distinguer un setup simple d’un travail plus lourd de migration ou de chargement.', options: [ { key: 'simple', label: 'Non, contenu simple', description: 'Logo, coordonnées, texte de base, quelques images et entrées normales de services/produits.' }, { key: 'many_assets', label: 'Oui, j’ai beaucoup d’images/projets/produits', description: 'Grande gallery, nombreux portfolio items, nombreux services/products ou chargements manuels importants. Généralement Premium.' }, { key: 'migration', label: 'Oui, je dois migrer du contenu depuis mon ancien site', description: 'Migration depuis un site existant. Le périmètre dépend du volume à déplacer. Généralement Premium.' }, { key: 'not_sure', label: 'Je ne suis pas sûr', description: 'Nous recommanderons selon le nombre de pages puis confirmerons le périmètre avant le début.' } ] },
  },
  setupScopeHint: 'Le Website Setup inclut la structure des pages, le placement du contenu de base et l’accompagnement au lancement. De grosses bibliothèques de contenu, de la rédaction sur mesure, des pages SEO avancées ou de lourds chargements manuels peuvent nécessiter Premium ou un devis spécifique.',
  final: { ...planFinderEn.final, title: 'Votre formule recommandée', subtitle: 'Vous n’avez besoin que d’un plan mensuel Schedulaa. Le Website Setup est optionnel et facturé une seule fois si vous voulez que notre équipe construise le site pour vous.', monthlyPlanLabel: 'Plan mensuel recommandé', monthlySubscriptionLabel: 'Abonnement mensuel', optionalSetupLabel: 'Configuration web optionnelle en une seule fois', startTrialTemplate: 'Lancer 14-day free trial avec {{plan}}', noSetupTitle: 'Aucun setup nécessaire', includedWithPlan: 'Inclus dans votre plan mensuel', whyLabel: 'Pourquoi :', startTrialNote: 'Cela lance le plan mensuel Schedulaa. Le Website Setup peut être ajouté séparément si nécessaire.', viewPlanTemplate: 'Voir le plan {{plan}}', talkToSales: 'Parler aux ventes', summaryTitle: 'Votre recommandation :', summaryMonthlyTemplate: 'Plan mensuel : {{plan}} - {{price}}', summaryOptionalSetupTemplate: 'Configuration web optionnelle en une fois : {{setup}} - {{price}}', summaryNoSetup: 'Configuration web : non nécessaire. Vous pouvez la créer vous-même.', recurringNote: 'Le plan mensuel est récurrent. Le Website Setup est optionnel et facturé une seule fois.', addLaterNote: 'Vous pourrez ajouter un Website Setup plus tard si besoin.', reassurance: 'Vous pouvez commencer par le plan mensuel puis ajouter le Website Setup plus tard.', activeSubscriptionNote: 'Nécessite un abonnement Schedulaa actif. L’achat du domaine n’est pas inclus.', scopeConfirmedNote: 'Le périmètre final du setup est confirmé avant le démarrage. Des pages supplémentaires, une migration volumineuse, de la rédaction sur mesure, des pages SEO avancées ou de gros chargements de galeries / produits peuvent faire l’objet d’un devis séparé.', recommendationTitle: 'Votre configuration recommandée', noSetupDescription: 'Créez-le vous-même avec le constructeur de sites inclus. Vous pourrez ajouter de l’aide au setup plus tard si nécessaire.', loadingTrial: 'Ouverture de votre période d’essai...', reasons: { starter: 'Starter est recommandé parce que vous avez surtout besoin d’un site web, de réservation en ligne, de formulaires de contact, de services et de produits, sans planification du personnel ni workflow financier.', starterFallback: 'Starter est recommandé parce que vos besoins restent compatibles avec un workflow simple de site, de réservation et de capture de leads.', proScheduling: 'Pro est recommandé parce que vous avez sélectionné la planification du personnel et des workflows de visibilité d’équipe.', proEmployeePortal: 'Pro est recommandé parce que vous avez sélectionné le portail employé et des workflows d’équipe.', proTeamService: 'Pro est recommandé parce que vous avez une équipe et avez sélectionné des besoins métiers comme la réservation en ligne, les formulaires de contact, les services ou les produits. Starter peut suffire si une seule personne gère tout et que vous n’avez pas besoin de workflows d’équipe.', proFallback: 'Pro est recommandé parce que vous avez une équipe et pouvez bénéficier de workflows côté staff, même si une seule personne peut encore gérer les bases aujourd’hui.', business: 'Business est recommandé parce que vous avez sélectionné des workflows devis à facture ou prêts pour la finance, comme les devis, ordres de travail, factures, inventaire, reporting ou clôture de fin de mois.', setupNone: 'Vous pouvez utiliser le constructeur de sites inclus et ajouter de l’aide au setup plus tard si nécessaire.', setupBasic: 'Basic est recommandé parce que votre site ressemble à un setup simple de 1 à 5 pages avec un contenu direct.', setupGrowth: 'Growth est recommandé parce que votre site a besoin d’une structure plus complète avec services, contenu et capture de leads.', setupPremiumLarge: 'Premium est recommandé parce que votre nombre de pages suggère un site plus large avec plus de structure et de travail de setup.', setupPremiumAssets: 'Premium est recommandé parce qu’une migration ou de gros chargements de contenu nécessitent généralement une revue de périmètre.' }, guidance: { starter: 'Besoin de planification du personnel, d’accès employés ou de visibilité d’équipe ? Pro peut être plus adapté.', pro: 'Besoin de devis, d’ordres de travail, de factures, d’inventaire ou de clôture de fin de mois ? Business peut être plus adapté.', business: 'Le meilleur choix pour les opérations devis à facture, le suivi des jobs, le reporting prêt pour la finance et un contrôle opérationnel plus poussé.' } },
};

const planFinderDe: PricingExperienceContent['planFinder'] = {
  ...planFinderEn,
  badge: 'Geführte Empfehlung', title: 'Den passenden Plan finden', subtitle: 'Wenn Sie nicht sicher sind, welcher Plan passt, wählen Sie nach Ihrer Arbeitsweise und nicht nur nach Ihrer Branche.', intro: 'Beantworten Sie ein paar kurze Fragen, und wir empfehlen den passenden Schedulaa Plan sowie optionales Website Setup.', startCta: 'Plan Finder starten', compareCta: 'Pläne manuell vergleichen', close: 'Schließen', back: 'Zurück', next: 'Weiter', done: 'Fertig', stepLabel: 'Schritt', ofLabel: 'von',
  questions: { ...planFinderEn.questions,
    businessType: { label: 'Welche Art von Unternehmen führen Sie?', helper: 'Das gibt uns Kontext. Die Empfehlung richtet sich weiterhin vor allem nach Workflow und Teamgröße.', options: [ { key: 'appointment', label: 'Terminbasiertes Serviceunternehmen' }, { key: 'project', label: 'Projektbasiertes Serviceunternehmen' }, { key: 'field', label: 'Field-Service-Unternehmen' }, { key: 'home', label: 'Home-Service-Unternehmen' }, { key: 'install', label: 'Installations- / Reparaturbetrieb' }, { key: 'professional', label: 'Professionelle Dienstleistungen' }, { key: 'health', label: 'Gesundheit / Wellness' }, { key: 'education', label: 'Bildung / Training' }, { key: 'events', label: 'Events / Staffing' }, { key: 'cabinet', label: 'Cabinet / Millwork' }, { key: 'renovation', label: 'Renovation' }, { key: 'medspa', label: 'Medspa' }, { key: 'tattoo', label: 'Tattoo / PMU Studio' }, { key: 'cleaning', label: 'Cleaning Company' }, { key: 'hvac', label: 'HVAC / Plumbing / Electrical' }, { key: 'other', label: 'Anderes Serviceunternehmen' } ] },
    teamSize: { label: 'Wie viele Personen gehören zu Ihrem Team?', helper: 'Die Teamgröße hilft dabei, Solo-, Kleinteam- und komplexere Betriebsmodelle zu unterscheiden.', options: [ { key: 'just_me', label: 'Nur ich' }, { key: '2_5', label: '2-5 Personen' }, { key: '6_15', label: '6-15 Personen' }, { key: '16_40', label: '16-40 Personen' }, { key: '40_plus', label: '40+ Personen' } ] },
    needs: { label: 'Was müssen Sie verwalten?', helper: 'Wählen Sie die Workflows, die Schedulaa abdecken soll.', websiteOnlyHint: 'Nur Website ist eine einfache Bedarfsauswahl. Wenn Sie einen anderen Workflow wählen, wird diese Option automatisch entfernt.', sections: [ { title: 'Website und Leads', options: [{ key: NEED_KEYS.websiteOnly, label: 'Nur Website' }, { key: NEED_KEYS.booking, label: 'Online-Buchung' }, { key: NEED_KEYS.leads, label: 'Kontakt- / Lead-Formulare' }, { key: NEED_KEYS.services, label: 'Services' }, { key: NEED_KEYS.products, label: 'Produkte' }] }, { title: 'Team-Operationen', options: [{ key: NEED_KEYS.scheduling, label: 'Personalplanung' }, { key: NEED_KEYS.employeePortal, label: 'Mitarbeiterportal' }, { key: NEED_KEYS.payrollReady, label: 'Berichte für die Lohnvorbereitung' }] }, { title: 'Angebot-bis-Rechnung-Abläufe', options: [{ key: NEED_KEYS.quoteRequests, label: 'Angebotsanfragen' }, { key: NEED_KEYS.estimates, label: 'Kostenvoranschläge' }, { key: NEED_KEYS.workOrders, label: 'Arbeitsaufträge' }, { key: NEED_KEYS.fieldReports, label: 'Feldberichte' }, { key: NEED_KEYS.invoices, label: 'Rechnungen' }] }, { title: 'Finanzen und Reporting', options: [{ key: NEED_KEYS.expenses, label: 'Ausgaben / Einkäufe' }, { key: NEED_KEYS.inventory, label: 'Inventar / Materialien' }, { key: NEED_KEYS.vendors, label: 'Lieferanten' }, { key: NEED_KEYS.profitability, label: 'Rentabilität' }, { key: NEED_KEYS.taxSummary, label: 'Steuerübersicht' }, { key: NEED_KEYS.monthEnd, label: 'Monatsabschluss' }] } ] },
    websiteNeed: { label: 'Benötigen Sie eine Website?', helper: 'Damit bestimmen wir, ob wir zusätzlich Setup-Hilfe empfehlen sollen.', options: [ { key: 'new_website', label: 'Ja, ich brauche eine neue Website' }, { key: 'improve_website', label: 'Ja, ich möchte meine bestehende Website verbessern oder umziehen' }, { key: 'internal_only', label: 'Nein, ich brauche nur interne Abläufe' }, { key: 'not_sure', label: 'Ich bin nicht sicher' } ] },
    setupPreference: { label: 'Möchten Sie die Seite selbst bauen oder von Schedulaa einrichten lassen?', helper: 'Das beeinflusst nur die Empfehlung für optionales Website Setup.', options: [ { key: 'diy', label: 'Ich baue sie selbst' }, { key: 'done_for_you', label: 'Ich möchte, dass Schedulaa sie einrichtet' }, { key: 'not_sure', label: 'Noch nicht sicher' } ] },
    pageCount: { label: 'Wie viele Website-Seiten benötigen Sie?', helper: 'Damit schätzen wir ein, ob Basic, Growth oder Premium am besten passt.', options: [ { key: '1_5', label: '1-5 Seiten', description: 'Einfache Website: Home, Services, Contact, Booking/Quote, About oder Gallery.' }, { key: '6_10', label: '6-10 Seiten', description: 'Umfangreichere Sales-Website: services, products, gallery, reviews und quote/contact-Seiten.' }, { key: '11_15', label: '11-15 Seiten', description: 'Größere Seite: mehrere Service-, Projekt- oder Standortseiten oder inhaltlich umfangreicher.' }, { key: '15_plus', label: '15+ Seiten', description: 'Erfordert meist einen individuellen Umfang und ist besser über Premium oder eine Sales-Prüfung abbildbar.' }, { key: 'unknown', label: 'Ich weiß es nicht', description: 'In der Regel empfehlen wir Growth und bestätigen den Umfang vor dem Start.' } ] },
    contentComplexity: { label: 'Brauchen Sie Content-Migration oder viele Galerien, Projekte oder Produkte?', helper: 'Das hilft, ein einfaches Setup von schwererer Migration oder manuellen Uploads zu unterscheiden.', options: [ { key: 'simple', label: 'Nein, einfacher Inhalt', description: 'Logo, Kontaktdaten, Basistext, einige Bilder und normale Service-/Product-Einträge.' }, { key: 'many_assets', label: 'Ja, ich habe viele Bilder/Projekte/Produkte', description: 'Große Gallery, viele Portfolio-Elemente, viele services/products oder umfangreiche manuelle Uploads. Meist Premium.' }, { key: 'migration', label: 'Ja, ich muss Inhalte von meiner alten Website übernehmen', description: 'Migration von einer bestehenden Website. Der Umfang hängt von der zu übernehmenden Content-Menge ab. Meist Premium.' }, { key: 'not_sure', label: 'Ich bin nicht sicher', description: 'Wir empfehlen nach Seitenumfang und bestätigen den Setup-Scope vor dem Start.' } ] },
  },
  setupScopeHint: 'Das Website Setup umfasst Seitenstruktur, grundlegende Inhaltsplatzierung und Launch-Support. Große Inhaltsbibliotheken, individuelle Texterstellung, erweiterte SEO-Seiten oder aufwendige manuelle Uploads können Premium oder ein individuelles Angebot erfordern.',
  final: { ...planFinderEn.final, title: 'Ihr empfohlenes Paket', subtitle: 'Sie benötigen nur einen monatlichen Schedulaa Plan. Das Website Setup ist optional und einmalig, wenn unser Team die Seite für Sie bauen soll.', monthlyPlanLabel: 'Empfohlener Monatsplan', monthlySubscriptionLabel: 'Monatliches Abonnement', optionalSetupLabel: 'Optionale einmalige Website-Einrichtung', startTrialTemplate: '14-day free trial mit {{plan}} starten', noSetupTitle: 'Kein Setup erforderlich', includedWithPlan: 'In Ihrem Monatsplan enthalten', whyLabel: 'Warum:', startTrialNote: 'Damit starten Sie den monatlichen Schedulaa Plan. Das Website Setup kann bei Bedarf separat ergänzt werden.', viewPlanTemplate: '{{plan}} Plan ansehen', talkToSales: 'Mit Sales sprechen', summaryTitle: 'Ihre Empfehlung:', summaryMonthlyTemplate: 'Monatsplan: {{plan}} - {{price}}', summaryOptionalSetupTemplate: 'Optionale einmalige Einrichtung: {{setup}} - {{price}}', summaryNoSetup: 'Website-Einrichtung: nicht erforderlich. Sie können die Seite selbst bauen.', recurringNote: 'Der Monatsplan ist wiederkehrend. Das Website Setup ist optional und einmalig.', addLaterNote: 'Sie können das Website Setup später ergänzen, wenn es nötig wird.', reassurance: 'Sie können zuerst mit dem Monatsplan starten und das Website Setup später ergänzen.', activeSubscriptionNote: 'Erfordert ein aktives Schedulaa-Abonnement. Der Domainkauf ist nicht enthalten.', scopeConfirmedNote: 'Der finale Setup-Umfang wird vor Beginn bestätigt. Zusätzliche Seiten, große Content-Migration, individuelle Texterstellung, erweiterte SEO-Seiten oder umfangreiche Galerie- / Produkt-Uploads können separat angeboten werden.', recommendationTitle: 'Ihre empfohlene Konfiguration', noSetupDescription: 'Bauen Sie die Seite selbst mit dem integrierten Website-Builder. Setup-Hilfe können Sie später ergänzen.', loadingTrial: 'Ihre Testphase wird geöffnet ...', reasons: { starter: 'Starter wird empfohlen, weil Sie vor allem eine Website, Online-Buchung, Kontaktformulare, Services und Produkte ohne Personalplanung oder Finanz-Workflows benötigen.', starterFallback: 'Starter wird empfohlen, weil Ihre Anforderungen weiterhin in einen einfachen Website-, Buchungs- und Lead-Workflow passen.', proScheduling: 'Pro wird empfohlen, weil Sie Personalplanung und teambezogene Sichtbarkeits-Workflows gewählt haben.', proEmployeePortal: 'Pro wird empfohlen, weil Sie das Mitarbeiterportal und Team-Workflows gewählt haben.', proTeamService: 'Pro wird empfohlen, weil Sie ein Team haben und servicebezogene Anforderungen wie Online-Buchung, Kontaktformulare, Services oder Produkte gewählt haben. Starter kann ausreichen, wenn eine Person alles steuert und keine Team-Workflows nötig sind.', proFallback: 'Pro wird empfohlen, weil Sie ein Team haben und von mitarbeiterbezogenen Workflows profitieren können, auch wenn heute noch eine Person die Basis steuert.', business: 'Business wird empfohlen, weil Sie Angebot-bis-Rechnung- oder finanzbereite Workflows wie Angebotsanfragen, Arbeitsaufträge, Rechnungen, Inventar, Reporting oder Monatsabschluss gewählt haben.', setupNone: 'Sie können den integrierten Website-Builder nutzen und bei Bedarf später Setup-Hilfe hinzufügen.', setupBasic: 'Basic wird empfohlen, weil Ihre Seite wie ein einfaches 1-5-Seiten-Setup mit überschaubarem Inhalt wirkt.', setupGrowth: 'Growth wird empfohlen, weil Ihre Seite eine umfassendere Struktur mit Services, Inhalten und Lead-Erfassung braucht.', setupPremiumLarge: 'Premium wird empfohlen, weil Ihr Seitenumfang auf eine größere Seite mit mehr Struktur und Setup-Aufwand hindeutet.', setupPremiumAssets: 'Premium wird empfohlen, weil Migration oder umfangreiche Inhalts-Uploads meist eine Scope-Prüfung erfordern.' }, guidance: { starter: 'Benötigen Sie Personalplanung, Mitarbeiter-Logins oder Team-Visibility? Dann passt Pro wahrscheinlich besser.', pro: 'Benötigen Sie Angebote, Arbeitsaufträge, Rechnungen, Inventar oder Monatsabschluss? Dann passt Business wahrscheinlich besser.', business: 'Die beste Wahl für Angebot-bis-Rechnung-Abläufe, Job-Tracking, finanzbereites Reporting und mehr operative Kontrolle.' } },
};

const planFinderAr: PricingExperienceContent['planFinder'] = {
  ...planFinderEn,
  badge: 'توصية موجهة', title: 'اعثر على الخطة المناسبة', subtitle: 'إذا لم تكن متأكدًا من الخطة الأنسب، فاختر بناءً على طريقة تشغيل عملك، لا على نوع الصناعة فقط.', intro: 'أجب عن عدة أسئلة قصيرة وسنقترح عليك خطة Schedulaa المناسبة وخدمة إعداد الموقع الاختيارية إذا احتجتها.', startCta: 'ابدأ أداة التوصية', compareCta: 'قارن الخطط يدويًا', close: 'إغلاق', back: 'رجوع', next: 'التالي', done: 'تم', stepLabel: 'الخطوة', ofLabel: 'من',
  questions: { ...planFinderEn.questions,
    businessType: { label: 'ما نوع النشاط الذي تديره؟', helper: 'هذا يعطينا سياقًا فقط. التوصية تعتمد أساسًا على أسلوب التشغيل وحجم الفريق.', options: [ { key: 'appointment', label: 'نشاط خدمات قائم على المواعيد' }, { key: 'project', label: 'نشاط خدمات قائم على المشاريع' }, { key: 'field', label: 'نشاط خدمات ميدانية' }, { key: 'home', label: 'نشاط خدمات منزلية' }, { key: 'install', label: 'نشاط تركيب / إصلاح' }, { key: 'professional', label: 'خدمات احترافية' }, { key: 'health', label: 'نشاط صحي / رفاهية' }, { key: 'education', label: 'نشاط تعليم / تدريب' }, { key: 'events', label: 'نشاط فعاليات / توظيف' }, { key: 'cabinet', label: 'Cabinet / Millwork' }, { key: 'renovation', label: 'Renovation' }, { key: 'medspa', label: 'Medspa' }, { key: 'tattoo', label: 'Tattoo / PMU Studio' }, { key: 'cleaning', label: 'شركة تنظيف' }, { key: 'hvac', label: 'HVAC / Plumbing / Electrical' }, { key: 'other', label: 'نشاط خدمات آخر' } ] },
    teamSize: { label: 'كم عدد الأشخاص في فريقك؟', helper: 'يساعد حجم الفريق على التمييز بين التشغيل الفردي والفِرق الصغيرة والعمليات الأكثر تعقيدًا.', options: [ { key: 'just_me', label: 'أنا فقط' }, { key: '2_5', label: '2-5 أشخاص' }, { key: '6_15', label: '6-15 شخصًا' }, { key: '16_40', label: '16-40 شخصًا' }, { key: '40_plus', label: 'أكثر من 40' } ] },
    needs: { label: 'ما الذي تحتاج إلى إدارته؟', helper: 'اختر مسارات العمل التي تريد من Schedulaa أن يغطيها.', websiteOnlyHint: 'الموقع فقط هو خيار بسيط. إذا اخترت مسار عمل آخر، فسيتم حذف هذا الخيار تلقائيًا.', sections: [ { title: 'الموقع والعملاء المحتملون', options: [{ key: NEED_KEYS.websiteOnly, label: 'الموقع فقط' }, { key: NEED_KEYS.booking, label: 'الحجز عبر الإنترنت' }, { key: NEED_KEYS.leads, label: 'نماذج التواصل / العملاء المحتملين' }, { key: NEED_KEYS.services, label: 'الخدمات' }, { key: NEED_KEYS.products, label: 'المنتجات' }] }, { title: 'عمليات الفريق', options: [{ key: NEED_KEYS.scheduling, label: 'جدولة الموظفين' }, { key: NEED_KEYS.employeePortal, label: 'بوابة الموظف' }, { key: NEED_KEYS.payrollReady, label: 'تقارير جاهزة للرواتب' }] }, { title: 'عمليات من العرض إلى الفاتورة', options: [{ key: NEED_KEYS.quoteRequests, label: 'طلبات التسعير' }, { key: NEED_KEYS.estimates, label: 'التقديرات' }, { key: NEED_KEYS.workOrders, label: 'أوامر العمل' }, { key: NEED_KEYS.fieldReports, label: 'تقارير ميدانية' }, { key: NEED_KEYS.invoices, label: 'الفواتير' }] }, { title: 'المالية والتقارير', options: [{ key: NEED_KEYS.expenses, label: 'المصروفات / المشتريات' }, { key: NEED_KEYS.inventory, label: 'المخزون / المواد' }, { key: NEED_KEYS.vendors, label: 'المورّدون' }, { key: NEED_KEYS.profitability, label: 'الربحية' }, { key: NEED_KEYS.taxSummary, label: 'ملخص الضرائب' }, { key: NEED_KEYS.monthEnd, label: 'مراجعة نهاية الشهر' }] } ] },
    websiteNeed: { label: 'هل تحتاج إلى موقع إلكتروني؟', helper: 'هذا يحدد ما إذا كنا سنوصي أيضًا بخدمة إعداد.', options: [ { key: 'new_website', label: 'نعم، أحتاج إلى موقع جديد' }, { key: 'improve_website', label: 'نعم، أريد تحسين أو نقل موقعي الحالي' }, { key: 'internal_only', label: 'لا، أحتاج فقط إلى العمليات الداخلية' }, { key: 'not_sure', label: 'لست متأكدًا' } ] },
    setupPreference: { label: 'هل تريد بناءه بنفسك أم أن يقوم Schedulaa بإعداده لك؟', helper: 'هذا يؤثر فقط على توصية إعداد الموقع الاختيارية.', options: [ { key: 'diy', label: 'سأبنيه بنفسي' }, { key: 'done_for_you', label: 'أريد أن يتولى Schedulaa الإعداد' }, { key: 'not_sure', label: 'لست متأكدًا بعد' } ] },
    pageCount: { label: 'كم عدد صفحات الموقع التي تحتاجها؟', helper: 'هذا يساعدنا على تقدير ما إذا كان الإعداد الأنسب هو Basic أو Growth أو Premium.', options: [ { key: '1_5', label: '1-5 صفحات', description: 'موقع بسيط: الرئيسية، الخدمات، التواصل، الحجز/طلب التسعير، من نحن أو المعرض.' }, { key: '6_10', label: '6-10 صفحات', description: 'موقع مبيعات أكثر اكتمالًا: خدمات، منتجات، معرض، مراجعات، وصفحات طلب التسعير / التواصل.' }, { key: '11_15', label: '11-15 صفحة', description: 'موقع أكبر: عدة صفحات خدمات أو مشاريع أو مواقع أو محتوى أغنى.' }, { key: '15_plus', label: 'أكثر من 15 صفحة', description: 'غالبًا ما يحتاج إلى نطاق مخصص ويُدار بشكل أفضل عبر Premium أو مراجعة من فريق المبيعات.' }, { key: 'unknown', label: 'لا أعرف', description: 'عادةً سنوصي بـ Growth ثم نؤكد النطاق قبل بدء العمل.' } ] },
    contentComplexity: { label: 'هل تحتاج إلى نقل محتوى أو لديك الكثير من المعارض أو المشاريع أو المنتجات؟', helper: 'هذا يساعد على التفريق بين الإعداد البسيط والعمل الأثقل في النقل أو الرفع اليدوي.', options: [ { key: 'simple', label: 'لا، المحتوى بسيط', description: 'شعار، معلومات تواصل، نص أساسي، بعض الصور، وعناصر خدمات أو منتجات عادية.' }, { key: 'many_assets', label: 'نعم، لدي الكثير من الصور/المشاريع/المنتجات', description: 'معرض كبير أو عدد كبير من عناصر الأعمال أو خدمات/منتجات كثيرة أو رفع يدوي ثقيل. غالبًا Premium.' }, { key: 'migration', label: 'نعم، أحتاج إلى نقل المحتوى من موقعي القديم', description: 'نقل من موقع موجود. يعتمد النطاق على كمية المحتوى المطلوب نقلها. غالبًا Premium.' }, { key: 'not_sure', label: 'لست متأكدًا', description: 'سنوصي بناءً على عدد الصفحات ثم نؤكد نطاق الإعداد قبل البدء.' } ] },
  },
  setupScopeHint: 'يشمل إعداد الموقع هيكل الصفحات، ووضع المحتوى الأساسي، ودعم الإطلاق. مكتبات المحتوى الكبيرة، والكتابة التسويقية المخصصة، وصفحات SEO المتقدمة، أو الرفع اليدوي الثقيل قد تتطلب Premium أو عرض سعر مخصص.',
  final: { ...planFinderEn.final, title: 'الباقة الموصى بها لك', subtitle: 'أنت تحتاج فقط إلى خطة شهرية واحدة من Schedulaa. إعداد الموقع اختياري ولمرة واحدة إذا أردت أن يبني فريقنا الموقع لك.', monthlyPlanLabel: 'الخطة الشهرية الموصى بها', monthlySubscriptionLabel: 'اشتراك شهري', optionalSetupLabel: 'إعداد موقع اختياري لمرة واحدة', startTrialTemplate: 'ابدأ 14-day free trial مع {{plan}}', noSetupTitle: 'لا حاجة إلى إعداد', includedWithPlan: 'مضمن مع خطتك الشهرية', whyLabel: 'السبب:', startTrialNote: 'هذا يبدأ الخطة الشهرية من Schedulaa. يمكن إضافة إعداد الموقع بشكل منفصل عند الحاجة.', viewPlanTemplate: 'عرض خطة {{plan}}', talkToSales: 'تحدث مع المبيعات', summaryTitle: 'توصيتك:', summaryMonthlyTemplate: 'الخطة الشهرية: {{plan}} - {{price}}', summaryOptionalSetupTemplate: 'إعداد اختياري لمرة واحدة: {{setup}} - {{price}}', summaryNoSetup: 'إعداد الموقع: غير مطلوب. يمكنك بناؤه بنفسك.', recurringNote: 'الخطة الشهرية متكررة. وإعداد الموقع اختياري ولمرة واحدة.', addLaterNote: 'يمكنك إضافة إعداد الموقع لاحقًا إذا احتجت إليه.', reassurance: 'يمكنك البدء بالخطة الشهرية أولًا ثم إضافة إعداد الموقع لاحقًا.', activeSubscriptionNote: 'يتطلب اشتراك Schedulaa فعال. شراء النطاق غير مشمول.', scopeConfirmedNote: 'يتم تأكيد النطاق النهائي للإعداد قبل بدء العمل. الصفحات الإضافية، أو نقل المحتوى الكبير، أو الكتابة التسويقية المخصصة، أو صفحات SEO المتقدمة، أو رفع المعارض / المنتجات بكثافة قد يتم تسعيرها بشكل منفصل.', recommendationTitle: 'الإعداد الموصى به لك', noSetupDescription: 'يمكنك بناؤه بنفسك باستخدام أداة بناء المواقع المضمنة. ويمكنك إضافة مساعدة للإعداد لاحقًا إذا احتجت.', loadingTrial: 'جارٍ فتح فترة التجربة الخاصة بك...', reasons: { starter: 'نوصي بخطة Starter لأنك تحتاج أساسًا إلى موقع إلكتروني، وحجز عبر الإنترنت، ونماذج تواصل، وخدمات، ومنتجات، من دون جدولة للموظفين أو مسارات عمل مالية.', starterFallback: 'نوصي بخطة Starter لأن احتياجاتك ما زالت تناسب مسار عمل بسيط للموقع والحجوزات والتقاط العملاء المحتملين.', proScheduling: 'نوصي بخطة Pro لأنك اخترت جدولة الموظفين ومسارات عمل تمنحك وضوحًا أكبر على مستوى الفريق.', proEmployeePortal: 'نوصي بخطة Pro لأنك اخترت بوابة الموظف ومسارات عمل خاصة بالفريق.', proTeamService: 'نوصي بخطة Pro لأن لديك فريقًا واخترت احتياجات أعمال خدمات مثل الحجز عبر الإنترنت أو نماذج التواصل أو الخدمات أو المنتجات. قد تكون Starter كافية إذا كان شخص واحد يدير كل شيء ولا تحتاج إلى مسارات عمل للفريق.', proFallback: 'نوصي بخطة Pro لأن لديك فريقًا وقد تستفيد من مسارات العمل الموجهة للموظفين، حتى لو كان شخص واحد يدير الأساسيات اليوم.', business: 'نوصي بخطة Business لأنك اخترت مسارات عمل من العرض إلى الفاتورة أو مسارات جاهزة للتقارير المالية، مثل طلبات التسعير أو أوامر العمل أو الفواتير أو المخزون أو التقارير أو مراجعة نهاية الشهر.', setupNone: 'يمكنك استخدام أداة بناء المواقع المضمنة وإضافة مساعدة للإعداد لاحقًا عند الحاجة.', setupBasic: 'نوصي بـ Basic لأن موقعك يبدو كإعداد بسيط من 1-5 صفحات بمحتوى مباشر.', setupGrowth: 'نوصي بـ Growth لأن موقعك يحتاج إلى هيكل أوسع مع خدمات، ومحتوى، والتقاط العملاء المحتملين.', setupPremiumLarge: 'نوصي بـ Premium لأن عدد الصفحات يشير إلى موقع أكبر مع هيكل وعمل إعداد أكثر.', setupPremiumAssets: 'نوصي بـ Premium لأن نقل المحتوى أو الرفع الكبير عادةً يحتاج إلى مراجعة نطاق.' }, guidance: { starter: 'إذا كنت تحتاج إلى جدولة الموظفين أو تسجيلات دخول للموظفين أو رؤية أوضح للفريق، فقد يكون Pro أنسب.', pro: 'إذا كنت تحتاج إلى طلبات تسعير أو أوامر عمل أو فواتير أو مخزون أو مراجعة نهاية الشهر، فقد يكون Business أنسب.', business: 'الخيار الأنسب لعمليات من العرض إلى الفاتورة، وتتبع الأعمال، والتقارير الجاهزة للتسليم المالي، وتحكم تشغيلي أكبر.' } },
};

const planFinderPt: PricingExperienceContent['planFinder'] = {
  ...planFinderEn,
  badge: 'Recomendação guiada', title: 'Encontre o plano certo', subtitle: 'Se você não tem certeza sobre qual plano se encaixa melhor, escolha com base em como o seu negócio opera, e não apenas no setor.', intro: 'Responda a algumas perguntas rápidas e vamos recomendar o plano Schedulaa e o Website Setup opcional mais adequados.', startCta: 'Iniciar Plan Finder', compareCta: 'Comparar planos manualmente', close: 'Fechar', back: 'Voltar', next: 'Avançar', done: 'Concluir', stepLabel: 'Etapa', ofLabel: 'de',
  questions: { ...planFinderEn.questions,
    businessType: { label: 'Que tipo de negócio você administra?', helper: 'Isso nos dá contexto. A recomendação continua sendo guiada principalmente pelo workflow e pelo tamanho da equipe.', options: [ { key: 'appointment', label: 'Negócio de serviços com agendamento' }, { key: 'project', label: 'Negócio de serviços baseado em projetos' }, { key: 'field', label: 'Negócio de serviços de campo' }, { key: 'home', label: 'Negócio de serviços residenciais' }, { key: 'install', label: 'Negócio de instalação / reparo' }, { key: 'professional', label: 'Serviços profissionais' }, { key: 'health', label: 'Negócio de saúde / bem-estar' }, { key: 'education', label: 'Negócio de educação / treinamento' }, { key: 'events', label: 'Negócio de eventos / staffing' }, { key: 'cabinet', label: 'Cabinet / Millwork' }, { key: 'renovation', label: 'Renovation' }, { key: 'medspa', label: 'Medspa' }, { key: 'tattoo', label: 'Tattoo / PMU Studio' }, { key: 'cleaning', label: 'Cleaning Company' }, { key: 'hvac', label: 'HVAC / Plumbing / Electrical' }, { key: 'other', label: 'Outro negócio de serviços' } ] },
    teamSize: { label: 'Quantas pessoas fazem parte da sua equipe?', helper: 'O tamanho da equipe ajuda a separar cenários solo, equipes pequenas e operações mais pesadas.', options: [ { key: 'just_me', label: 'Só eu' }, { key: '2_5', label: '2-5 pessoas' }, { key: '6_15', label: '6-15 pessoas' }, { key: '16_40', label: '16-40 pessoas' }, { key: '40_plus', label: '40+ pessoas' } ] },
    needs: { label: 'O que você precisa gerenciar?', helper: 'Escolha os fluxos de trabalho que você quer que a Schedulaa cubra.', websiteOnlyHint: 'Apenas site é uma opção de intenção simples. Se você escolher outro fluxo, essa opção será removida automaticamente.', sections: [ { title: 'Site e leads', options: [{ key: NEED_KEYS.websiteOnly, label: 'Apenas site' }, { key: NEED_KEYS.booking, label: 'Agendamento online' }, { key: NEED_KEYS.leads, label: 'Formulários de contato / leads' }, { key: NEED_KEYS.services, label: 'Serviços' }, { key: NEED_KEYS.products, label: 'Produtos' }] }, { title: 'Operações da equipe', options: [{ key: NEED_KEYS.scheduling, label: 'Escalas da equipe' }, { key: NEED_KEYS.employeePortal, label: 'Portal do colaborador' }, { key: NEED_KEYS.payrollReady, label: 'Relatórios prontos para folha' }] }, { title: 'Operações de orçamento a faturação', options: [{ key: NEED_KEYS.quoteRequests, label: 'Solicitações de orçamento' }, { key: NEED_KEYS.estimates, label: 'Estimativas' }, { key: NEED_KEYS.workOrders, label: 'Ordens de trabalho' }, { key: NEED_KEYS.fieldReports, label: 'Relatórios de campo' }, { key: NEED_KEYS.invoices, label: 'Faturas' }] }, { title: 'Finanças e relatórios', options: [{ key: NEED_KEYS.expenses, label: 'Despesas / compras' }, { key: NEED_KEYS.inventory, label: 'Inventário / materiais' }, { key: NEED_KEYS.vendors, label: 'Fornecedores' }, { key: NEED_KEYS.profitability, label: 'Rentabilidade' }, { key: NEED_KEYS.taxSummary, label: 'Resumo fiscal' }, { key: NEED_KEYS.monthEnd, label: 'Fechamento de fim de mês' }] } ] },
    websiteNeed: { label: 'Você precisa de um site?', helper: 'Isso define se também devemos recomendar ajuda de setup.', options: [ { key: 'new_website', label: 'Sim, preciso de um site novo' }, { key: 'improve_website', label: 'Sim, quero melhorar ou migrar meu site atual' }, { key: 'internal_only', label: 'Não, preciso apenas das operações internas' }, { key: 'not_sure', label: 'Não tenho certeza' } ] },
    setupPreference: { label: 'Você quer construir o site por conta própria ou prefere que a Schedulaa faça o setup?', helper: 'Isso afeta apenas a recomendação do Website Setup opcional.', options: [ { key: 'diy', label: 'Vou construir por conta própria' }, { key: 'done_for_you', label: 'Quero que a Schedulaa faça o setup' }, { key: 'not_sure', label: 'Ainda não tenho certeza' } ] },
    pageCount: { label: 'Quantas páginas o seu site precisa ter?', helper: 'Isso nos ajuda a estimar se o setup ideal é Basic, Growth ou Premium.', options: [ { key: '1_5', label: '1-5 páginas', description: 'Site simples: Home, Services, Contact, Booking/Quote, About ou Gallery.' }, { key: '6_10', label: '6-10 páginas', description: 'Site comercial mais completo: services, products, gallery, reviews e páginas de quote/contact.' }, { key: '11_15', label: '11-15 páginas', description: 'Site maior: várias páginas de serviços, projetos, localidades ou conteúdo mais rico.' }, { key: '15_plus', label: '15+ páginas', description: 'Normalmente exige escopo personalizado e é melhor tratado com Premium ou revisão comercial.' }, { key: 'unknown', label: 'Não sei', description: 'Normalmente recomendaremos Growth e confirmaremos o escopo antes do início.' } ] },
    contentComplexity: { label: 'Você precisa de migração de conteúdo ou tem muitas galerias, projetos ou produtos?', helper: 'Isso ajuda a diferenciar um setup simples de uma migração ou carga manual mais pesada.', options: [ { key: 'simple', label: 'Não, conteúdo simples', description: 'Logo, contatos, texto básico, algumas imagens e entradas normais de serviços/produtos.' }, { key: 'many_assets', label: 'Sim, tenho muitas imagens/projetos/produtos', description: 'Gallery grande, muitos portfolio items, muitos services/products ou muita carga manual. Normalmente Premium.' }, { key: 'migration', label: 'Sim, preciso migrar conteúdo do meu site antigo', description: 'Migração de um site existente. O escopo depende da quantidade de conteúdo a mover. Normalmente Premium.' }, { key: 'not_sure', label: 'Não tenho certeza', description: 'Vamos recomendar com base na quantidade de páginas e confirmar o escopo antes do início.' } ] },
  },
  setupScopeHint: 'Website setup inclui a estrutura das páginas, a colocação básica de conteúdo e o suporte de lançamento. Bibliotecas grandes de conteúdo, copywriting personalizado, páginas avançadas de SEO ou uploads manuais pesados podem exigir Premium ou uma proposta sob medida.',
  final: { ...planFinderEn.final, title: 'Seu pacote recomendado', subtitle: 'Você precisa de apenas um plano mensal da Schedulaa. O Website Setup é opcional e cobrado uma única vez se você quiser que nossa equipe construa o site para você.', monthlyPlanLabel: 'Plano mensal recomendado', monthlySubscriptionLabel: 'Assinatura mensal', optionalSetupLabel: 'Configuração web opcional de pagamento único', startTrialTemplate: 'Iniciar 14-day free trial com {{plan}}', noSetupTitle: 'Nenhum setup necessário', includedWithPlan: 'Incluído no seu plano mensal', whyLabel: 'Motivo:', startTrialNote: 'Isso inicia o plano mensal da Schedulaa. O Website Setup pode ser adicionado separadamente se necessário.', viewPlanTemplate: 'Ver plano {{plan}}', talkToSales: 'Falar com vendas', summaryTitle: 'Sua recomendação:', summaryMonthlyTemplate: 'Plano mensal: {{plan}} - {{price}}', summaryOptionalSetupTemplate: 'Configuração web opcional de pagamento único: {{setup}} - {{price}}', summaryNoSetup: 'Configuração web: não é necessária. Você pode construir o site por conta própria.', recurringNote: 'O plano mensal é recorrente. O Website Setup é opcional e cobrado uma única vez.', addLaterNote: 'Você pode adicionar Website Setup mais tarde, se precisar.', reassurance: 'Você pode começar primeiro pelo plano mensal e adicionar Website Setup depois.', activeSubscriptionNote: 'Requer uma assinatura ativa da Schedulaa. A compra do domínio não está incluída.', scopeConfirmedNote: 'O escopo final do setup é confirmado antes do início do trabalho. Páginas extras, migração grande de conteúdo, redação personalizada, páginas avançadas de SEO ou uploads pesados de galeria / produtos podem ser cobrados separadamente.', recommendationTitle: 'Sua configuração recomendada', noSetupDescription: 'Construa o site por conta própria com o construtor de sites incluído. Você pode adicionar ajuda de setup depois, se precisar.', loadingTrial: 'Abrindo seu período de teste...', reasons: { starter: 'Starter é recomendado porque você precisa principalmente de site, agendamento online, formulários de contacto, serviços e produtos sem escalas da equipe nem fluxos financeiros.', starterFallback: 'Starter é recomendado porque suas necessidades ainda se encaixam em um fluxo simples de site, reservas e captação de leads.', proScheduling: 'Pro é recomendado porque você selecionou escalas da equipe e fluxos de visibilidade da equipa.', proEmployeePortal: 'Pro é recomendado porque você selecionou o portal do colaborador e fluxos da equipa.', proTeamService: 'Pro é recomendado porque você tem uma equipa e selecionou necessidades de negócios de serviços, como agendamento online, formulários de contacto, serviços ou produtos. Starter pode ser suficiente se uma única pessoa gerir tudo e você não precisar de fluxos da equipa.', proFallback: 'Pro é recomendado porque você tem uma equipa e pode se beneficiar de fluxos voltados para colaboradores, mesmo que hoje uma única pessoa ainda consiga administrar o básico.', business: 'Business é recomendado porque você selecionou fluxos de orçamento a faturação ou fluxos prontos para finanças, como solicitações de orçamento, ordens de trabalho, faturas, inventário, relatórios ou fechamento de fim de mês.', setupNone: 'Você pode usar o construtor de sites incluído e adicionar ajuda de setup mais tarde, se precisar.', setupBasic: 'Basic é recomendado porque o seu site parece um setup simples de 1-5 páginas com conteúdo direto.', setupGrowth: 'Growth é recomendado porque o seu site precisa de uma estrutura mais completa com serviços, conteúdo e captação de leads.', setupPremiumLarge: 'Premium é recomendado porque a quantidade de páginas sugere um site maior com mais estrutura e trabalho de setup.', setupPremiumAssets: 'Premium é recomendado porque migração ou uploads pesados de conteúdo normalmente exigem uma revisão de escopo.' }, guidance: { starter: 'Precisa de escalas da equipe, acessos de colaboradores ou visibilidade da equipa? Pro pode ser uma opção melhor.', pro: 'Precisa de orçamentos, ordens de trabalho, faturas, inventário ou fechamento de fim de mês? Business pode ser uma opção melhor.', business: 'Melhor opção para operações de orçamento a faturação, acompanhamento de jobs, relatórios prontos para finanças e maior controlo operacional.' } },
};

const localeCopy: Record<LocaleKey, LocaleCopy> = {
  en: {
    planPositioning: {
      starter: 'Simple website, booking, and sales basics.',
      pro: 'Run daily operations from one system.',
      business: 'Built for quote-to-invoice operations and finance-ready workflows.',
      businessDescription:
        'For service businesses that manage quotes, work orders, invoices, expenses, inventory, and reporting.',
    },
    businessFinance: {
      heading: 'Finanzas operativas',
      bullets: [
        'Quote requests and custom-price intake',
        'Estimates and client approval workflow',
        'Work orders and job assignments',
        'Field reports with manager review',
        'Invoices, expenses, and purchases',
        'Materials, inventory, and vendor tracking',
        'Profitability, tax summary, and month-end review',
      ],
    },
    setup: {
      title: 'Optional Website Setup Services',
      subtitle:
        'Every Schedulaa plan includes the website builder. Build it yourself, or let our team set up your site for you.',
      note:
        'Requires an active Schedulaa subscription. Domain purchase is not included. We can help connect your domain.',
      basicPriceNote: 'Optional one-time setup',
      growthPriceNote: 'Optional one-time setup',
      premiumPriceNote: 'Scoped one-time setup',
      basicBestFor: 'Best for simple websites with up to 5 pages.',
      growthBestFor:
        'Best for service businesses that need a fuller website with services, gallery, reviews, products, or quote pages.',
      premiumBestFor: 'Best for larger websites, content migration, and custom refinement.',
      basicDescription:
        'A fast branded setup for businesses that want our team to prepare the site instead of building it themselves.',
      growthDescription:
        'Our recommended setup for businesses that want a stronger sales website, richer content, and better lead capture.',
      premiumDescription:
        'For businesses with larger content libraries, more pages, and more hands-on setup needs.',
      basicIncludes: [
        'Template setup',
        'Logo, colors, and branding applied',
        'Up to 5 pages',
        'Booking, contact, or quote form setup',
        'Publish support',
        '1 revision round',
      ],
      growthIncludes: [
        'Branded website setup',
        'Up to 10 pages',
        'Services and products setup',
        'Gallery, projects, reviews, and contact pages',
        'Quote request or lead capture flow',
        'Basic SEO and social sharing setup',
        'Domain connection support',
        '2 revision rounds',
      ],
      premiumIncludes: [
        'Everything in Growth',
        'Larger content migration',
        'Additional landing pages',
        'More layout customization',
        'Copy refinement support',
        '3 revision rounds',
      ],
      basicCta: 'Comprar Basic Website Setup',
      growthCta: 'Hablar con ventas sobre Growth Setup',
      premiumCta: 'Hablar con ventas sobre Premium Setup',
    },
    quoteToInvoice: {
      badge: 'Business Finance',
      title: 'Built for Quote-to-Invoice Operations',
      subtitle:
        'Schedulaa Business helps service businesses manage custom-price work from first request to estimate, work order, field report, invoice, and month-end reporting.',
      bullets: [
        'Capture quote requests for custom-price jobs',
        'Turn requests into estimates and invoices',
        'Create work orders and assign jobs',
        'Review field reports before materials or billing become final',
        'Track expenses, purchases, inventory, and vendors',
        'Prepare profitability, tax summary, and month-end reports',
      ],
      primaryCtaLabel: 'See Business plan',
      secondaryCtaLabel: 'Talk to sales',
    },
    comparison: {
      headers: { feature: 'Feature', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'Best for',
      bestForValues: {
        starter: 'Simple website, booking, and service catalogs',
        pro: 'Teams that need scheduling and employee workflows',
        business: 'Quote-to-invoice operations and finance-ready reporting',
      },
      businessFinanceSection: 'Business Finance',
      businessFinanceRows: [
        'Quote requests',
        'Estimates',
        'Work orders',
        'Field reports',
        'Manager review approvals',
        'Expenses & purchases',
        'Inventory / materials',
        'Vendors',
        'Profitability reports',
        'Tax summary',
        'Month-end review',
      ],
    },
    planFinder: planFinderEn,
  },
  fa: {
    planPositioning: {
      starter: 'وب‌سایت ساده، رزرو و فروش پایه.',
      pro: 'عملیات روزانه را از یک سیستم مدیریت کنید.',
      business: 'مناسب برای عملیات quote-to-invoice و گردش‌کارهای آماده گزارش مالی.',
      businessDescription:
        'برای کسب‌وکارهای خدماتی که quote، work order، invoice، هزینه، موجودی و گزارش‌گیری را مدیریت می‌کنند.',
    },
    businessFinance: {
      heading: 'عملیات مالی',
      bullets: [
        'درخواست‌های قیمت و ثبت پروژه‌های قیمت‌متغیر',
        'برآورد قیمت و مسیر تأیید مشتری',
        'دستور کار و تخصیص کارها',
        'گزارش‌های میدانی با بازبینی مدیر',
        'فاکتورها، هزینه‌ها و خریدها',
        'مواد، موجودی و رهگیری تأمین‌کننده',
        'سودآوری، خلاصه مالیات و جمع‌بندی پایان ماه',
      ],
    },
    setup: {
      title: 'خدمات اختیاری Website Setup',
      subtitle: 'در همه پلن‌های Schedulaa سایت‌ساز وجود دارد. می‌توانید خودتان سایت را بسازید یا از تیم ما برای راه‌اندازی استفاده کنید.',
      note: 'نیازمند اشتراک فعال Schedulaa است. خرید دامنه شامل نمی‌شود. در اتصال دامنه کمک می‌کنیم.',
      basicPriceNote: 'راه‌اندازی یک‌باره اختیاری',
      growthPriceNote: 'راه‌اندازی یک‌باره اختیاری',
      premiumPriceNote: 'راه‌اندازی یک‌باره با تعیین دامنه کار',
      basicBestFor: 'مناسب برای وب‌سایت‌های ساده تا ۵ صفحه.',
      growthBestFor: 'مناسب برای کسب‌وکارهای خدماتی که به سایت کامل‌تر با خدمات، گالری، نظرات، محصولات یا صفحات quote نیاز دارند.',
      premiumBestFor: 'مناسب برای سایت‌های بزرگ‌تر، انتقال محتوا و شخصی‌سازی بیشتر.',
      basicDescription: 'راه‌اندازی سریع و برندشده برای کسب‌وکارهایی که می‌خواهند تیم ما سایت را آماده کند.',
      growthDescription: 'پیشنهاد اصلی ما برای کسب‌وکارهایی که سایت فروش قوی‌تر، محتوای بیشتر و جذب لید بهتر می‌خواهند.',
      premiumDescription: 'برای کسب‌وکارهایی با محتوای زیاد، صفحات بیشتر و نیاز به راه‌اندازی سنگین‌تر.',
      basicIncludes: ['تنظیم قالب', 'اعمال لوگو، رنگ و برند', 'تا ۵ صفحه', 'تنظیم فرم رزرو، تماس یا quote', 'پشتیبانی انتشار', '۱ دور بازبینی'],
      growthIncludes: ['راه‌اندازی برندشده سایت', 'تا ۱۰ صفحه', 'تنظیم خدمات و محصولات', 'گالری، پروژه‌ها، نظرات و صفحات تماس', 'جریان درخواست quote یا جذب لید', 'SEO پایه و تنظیم اشتراک‌گذاری اجتماعی', 'پشتیبانی اتصال دامنه', '۲ دور بازبینی'],
      premiumIncludes: ['همه موارد Growth', 'انتقال محتوای بیشتر', 'صفحات فرود اضافی', 'شخصی‌سازی بیشتر لایه‌بندی', 'پشتیبانی بهبود متن', '۳ دور بازبینی'],
      basicCta: 'خرید Basic Website Setup',
      growthCta: 'تماس با فروش برای Growth Setup',
      premiumCta: 'تماس با فروش برای Premium Setup',
    },
    quoteToInvoice: {
      badge: 'عملیات مالی',
      title: 'مناسب برای عملیات Quote-to-Invoice',
      subtitle:
        'Schedulaa Business به کسب‌وکارهای خدماتی کمک می‌کند کارهای قیمت‌متغیر را از درخواست اولیه تا estimate، work order، field report، invoice و گزارش پایان ماه مدیریت کنند.',
      bullets: [
        'دریافت درخواست quote برای کارهای قیمت‌متغیر',
        'تبدیل درخواست‌ها به estimate و invoice',
        'ایجاد work order و تخصیص کارها',
        'بازبینی field report پیش از نهایی‌شدن مواد یا صورتحساب',
        'رهگیری هزینه‌ها، خریدها، موجودی و تأمین‌کنندگان',
        'آماده‌سازی گزارش سودآوری، خلاصه مالیات و پایان ماه',
      ],
      primaryCtaLabel: 'مشاهده پلن Business',
      secondaryCtaLabel: 'تماس با فروش',
    },
    comparison: {
      headers: { feature: 'ویژگی', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'مناسب برای',
      bestForValues: {
        starter: 'وب‌سایت ساده، رزرو و کاتالوگ خدمات',
        pro: 'تیم‌هایی که به زمان‌بندی و گردش‌کار کارکنان نیاز دارند',
        business: 'عملیات quote-to-invoice و گزارش‌گیری آماده مالی',
      },
      businessFinanceSection: 'عملیات مالی',
      businessFinanceRows: ['درخواست quote', 'Estimate', 'Work order', 'Field report', 'تأیید بازبینی مدیر', 'هزینه‌ها و خریدها', 'موجودی / مواد', 'تأمین‌کنندگان', 'گزارش سودآوری', 'خلاصه مالیات', 'جمع‌بندی پایان ماه'],
    },
    planFinder: {
      badge: 'پیشنهاد هدایت‌شده',
      title: 'پلن مناسب را پیدا کنید',
      subtitle: 'اگر مطمئن نیستید کدام پلن مناسب است، بر اساس نحوه کار کسب‌وکارتان انتخاب کنید، نه فقط صنعت.',
      intro: 'به چند سؤال کوتاه پاسخ دهید تا پلن مناسب Schedulaa و Website Setup اختیاری را پیشنهاد دهیم.',
      startCta: 'شروع Plan Finder',
      compareCta: 'مقایسه دستی پلن‌ها',
      close: 'بستن',
      back: 'بازگشت',
      next: 'بعدی',
      done: 'تمام',
      stepLabel: 'مرحله',
      ofLabel: 'از',
      questions: {
        businessType: {
          label: 'چه نوع کسب‌وکاری دارید؟',
          helper: 'این فقط برای درک بهتر است. پیشنهاد نهایی همچنان بر اساس workflow و اندازه تیم انجام می‌شود.',
          options: [
            { key: 'appointment', label: 'کسب‌وکار خدماتی نوبت‌محور' },
            { key: 'project', label: 'کسب‌وکار خدماتی پروژه‌محور' },
            { key: 'field', label: 'کسب‌وکار خدمات میدانی' },
            { key: 'home', label: 'کسب‌وکار خدمات خانگی' },
            { key: 'install', label: 'کسب‌وکار نصب / تعمیر' },
            { key: 'professional', label: 'خدمات حرفه‌ای' },
            { key: 'health', label: 'کسب‌وکار سلامت / تندرستی' },
            { key: 'education', label: 'کسب‌وکار آموزش / دوره' },
            { key: 'events', label: 'کسب‌وکار رویداد / staffing' },
            { key: 'cabinet', label: 'Cabinet / Millwork' },
            { key: 'renovation', label: 'بازسازی' },
            { key: 'medspa', label: 'Medspa' },
            { key: 'tattoo', label: 'Tattoo / PMU Studio' },
            { key: 'cleaning', label: 'شرکت نظافتی' },
            { key: 'hvac', label: 'HVAC / Plumbing / Electrical' },
            { key: 'other', label: 'سایر کسب‌وکارهای خدماتی' },
          ],
        },
        teamSize: {
          label: 'چند نفر در تیم شما هستند؟',
          helper: 'اندازه تیم به ما کمک می‌کند بین پلن تک‌نفره، تیم کوچک و عملیات سنگین‌تر تفاوت بگذاریم.',
          options: [{ key: 'just_me', label: 'فقط خودم' }, { key: '2_5', label: '۲ تا ۵ نفر' }, { key: '6_15', label: '۶ تا ۱۵ نفر' }, { key: '16_40', label: '۱۶ تا ۴۰ نفر' }, { key: '40_plus', label: 'بیش از ۴۰ نفر' }],
        },
        needs: {
          label: 'چه چیزهایی را باید مدیریت کنید؟',
          helper: 'گردش‌کارهایی را انتخاب کنید که می‌خواهید Schedulaa پوشش دهد.',
          websiteOnlyHint: 'گزینه Website only یک نیاز ساده است. اگر گزینه دیگری انتخاب کنید، Website only خودکار حذف می‌شود.',
          sections: [
            { title: 'وب‌سایت و لید', options: [{ key: NEED_KEYS.websiteOnly, label: 'Website only' }, { key: NEED_KEYS.booking, label: 'Online booking' }, { key: NEED_KEYS.leads, label: 'Contact / lead forms' }, { key: NEED_KEYS.services, label: 'Services' }, { key: NEED_KEYS.products, label: 'Products' }] },
            { title: 'عملیات تیم', options: [{ key: NEED_KEYS.scheduling, label: 'Staff scheduling' }, { key: NEED_KEYS.employeePortal, label: 'Employee portal' }, { key: NEED_KEYS.payrollReady, label: 'Payroll-ready reports' }] },
            { title: 'عملیات Quote-to-Invoice', options: [{ key: NEED_KEYS.quoteRequests, label: 'Quote requests' }, { key: NEED_KEYS.estimates, label: 'Estimates' }, { key: NEED_KEYS.workOrders, label: 'Work orders' }, { key: NEED_KEYS.fieldReports, label: 'Field reports' }, { key: NEED_KEYS.invoices, label: 'Invoices' }] },
            { title: 'مالی و گزارش', options: [{ key: NEED_KEYS.expenses, label: 'Expenses / purchases' }, { key: NEED_KEYS.inventory, label: 'Inventory / materials' }, { key: NEED_KEYS.vendors, label: 'Vendors' }, { key: NEED_KEYS.profitability, label: 'Profitability' }, { key: NEED_KEYS.taxSummary, label: 'Tax summary' }, { key: NEED_KEYS.monthEnd, label: 'Month-end review' }] },
          ],
        },
        websiteNeed: {
          label: 'آیا به وب‌سایت نیاز دارید؟',
          helper: 'این مشخص می‌کند آیا باید خدمات setup هم پیشنهاد دهیم یا نه.',
          options: [{ key: 'new_website', label: 'بله، به وب‌سایت جدید نیاز دارم' }, { key: 'improve_website', label: 'بله، می‌خواهم سایت فعلی را بهتر کنم یا منتقل کنم' }, { key: 'internal_only', label: 'خیر، فقط عملیات داخلی می‌خواهم' }, { key: 'not_sure', label: 'مطمئن نیستم' }],
        },
        setupPreference: {
          label: 'می‌خواهید خودتان سایت را بسازید یا Schedulaa آن را راه‌اندازی کند؟',
          helper: 'این فقط روی پیشنهاد Website Setup اثر می‌گذارد.',
          options: [{ key: 'diy', label: 'خودم می‌سازم' }, { key: 'done_for_you', label: 'می‌خواهم Schedulaa آن را راه‌اندازی کند' }, { key: 'not_sure', label: 'فعلاً مطمئن نیستم' }],
        },
        pageCount: {
          label: 'به چند صفحه وب‌سایت نیاز دارید؟',
          helper: 'این به ما کمک می‌کند Basic، Growth یا Premium را پیشنهاد دهیم.',
          options: [
            { key: '1_5', label: '۱ تا ۵ صفحه', description: 'سایت ساده: Home، Services، Contact، Booking/Quote، About یا Gallery.' },
            { key: '6_10', label: '۶ تا ۱۰ صفحه', description: 'سایت فروش کامل‌تر: services، products، gallery، reviews، صفحات quote/contact.' },
            { key: '11_15', label: '۱۱ تا ۱۵ صفحه', description: 'سایت بزرگ‌تر: چند صفحه خدمات، پروژه، location یا محتوای غنی‌تر.' },
            { key: '15_plus', label: 'بیش از ۱۵ صفحه', description: 'معمولاً نیازمند scope سفارشی است و بهتر است با Premium یا بررسی فروش انجام شود.' },
            { key: 'unknown', label: 'نمی‌دانم', description: 'معمولاً Growth پیشنهاد می‌دهیم و قبل از شروع، scope را تأیید می‌کنیم.' },
          ],
        },
        contentComplexity: {
          label: 'آیا به انتقال محتوا یا گالری، پروژه یا محصول زیاد نیاز دارید؟',
          helper: 'این بخش setup ساده را از انتقال یا بارگذاری سنگین محتوا جدا می‌کند.',
          options: [
            { key: 'simple', label: 'خیر، محتوای ساده', description: 'لوگو، اطلاعات تماس، متن پایه، چند تصویر و چند ورودی عادی خدمات/محصول.' },
            { key: 'many_assets', label: 'بله، تصاویر/پروژه‌ها/محصولات زیادی دارم', description: 'گالری بزرگ، نمونه‌کارهای زیاد، خدمات/محصولات زیاد یا بارگذاری دستی سنگین. معمولاً Premium.' },
            { key: 'migration', label: 'بله، باید محتوا از سایت قبلی منتقل شود', description: 'انتقال از وب‌سایت فعلی. میزان کار به حجم محتوای قابل انتقال بستگی دارد. معمولاً Premium.' },
            { key: 'not_sure', label: 'مطمئن نیستم', description: 'بر اساس تعداد صفحات پیشنهاد می‌دهیم و قبل از شروع، دامنه کار را تأیید می‌کنیم.' },
          ],
        },
      },
      setupScopeHint: 'Website setup شامل ساختار صفحات، جای‌گذاری محتوای پایه و پشتیبانی راه‌اندازی است. کتابخانه محتوای بزرگ، copywriting سفارشی، صفحات SEO پیشرفته یا بارگذاری دستی سنگین ممکن است به Premium یا quote سفارشی نیاز داشته باشد.',
      final: {
        title: 'پکیج پیشنهادی شما',
        subtitle: 'شما فقط به یک پلن ماهانه Schedulaa نیاز دارید. Website setup اختیاری و یک‌باره است اگر بخواهید تیم ما سایت را برایتان آماده کند.',
        monthlyPlanLabel: 'پلن ماهانه پیشنهادی',
        monthlySubscriptionLabel: 'اشتراک ماهانه',
        optionalSetupLabel: 'Website setup یک‌باره اختیاری',
        startTrialTemplate: 'Start 14-day free trial with {{plan}}',
        noSetupTitle: 'نیازی به setup نیست',
        noSetupPrice: '$0',
        includedWithPlan: 'در پلن ماهانه شما شامل است',
        whyLabel: 'دلیل:',
        startTrialNote: 'این دکمه پلن ماهانه Schedulaa را شروع می‌کند. در صورت نیاز، Website setup را جداگانه می‌توان اضافه کرد.',
        viewPlanTemplate: 'مشاهده پلن {{plan}}',
        talkToSales: 'تماس با فروش',
        summaryTitle: 'پیشنهاد شما:',
        summaryMonthlyTemplate: 'پلن ماهانه: {{plan}} - {{price}}',
        summaryOptionalSetupTemplate: 'Website setup یک‌باره اختیاری: {{setup}} - {{price}}',
        summaryNoSetup: 'Website setup: نیاز نیست. می‌توانید خودتان آن را بسازید.',
        recurringNote: 'پلن ماهانه recurring است. Website setup اختیاری و یک‌باره است.',
        addLaterNote: 'اگر نیاز داشتید، بعداً هم می‌توانید Website setup را اضافه کنید.',
        reassurance: 'می‌توانید ابتدا با پلن ماهانه شروع کنید و بعداً Website setup را اضافه کنید.',
        activeSubscriptionNote: 'نیازمند اشتراک فعال Schedulaa است. خرید دامنه شامل نمی‌شود.',
        scopeConfirmedNote: 'دامنه نهایی setup پیش از شروع کار تأیید می‌شود. صفحات اضافه، انتقال محتوای زیاد، copywriting سفارشی، صفحات SEO پیشرفته یا بارگذاری سنگین گالری/محصول ممکن است جداگانه قیمت‌گذاری شوند.',
        recommendationTitle: 'پیشنهاد نهایی شما',
        noSetupDescription: 'با سایت‌ساز موجود خودتان آن را بسازید. اگر بعداً لازم شد، می‌توانید setup help اضافه کنید.',
        loadingTrial: 'Starting your free trial...',
        reasons: {
          starter: 'Starter پیشنهاد می‌شود چون شما بیشتر به وب‌سایت، رزرو آنلاین، فرم‌های تماس، خدمات و محصولات نیاز دارید و هنوز workflow تیمی یا مالی ندارید.',
          starterFallback: 'Starter پیشنهاد می‌شود چون نیازهای شما هنوز در قالب یک workflow ساده برای وب‌سایت، رزرو و جذب لید قرار می‌گیرد.',
          proScheduling: 'Pro پیشنهاد می‌شود چون workflow زمان‌بندی کارکنان و دید تیمی را انتخاب کرده‌اید.',
          proEmployeePortal: 'Pro پیشنهاد می‌شود چون Employee portal و workflow تیمی را انتخاب کرده‌اید.',
          proTeamService: 'Pro پیشنهاد می‌شود چون تیم دارید و نیازهای service-business مانند online booking، contact forms، services یا products را انتخاب کرده‌اید. اگر فقط یک نفر همه چیز را مدیریت می‌کند و workflow تیمی نیاز ندارید، Starter هم می‌تواند کافی باشد.',
          proFallback: 'Pro پیشنهاد می‌شود چون تیم دارید و احتمالاً از workflow‌های کارمندمحور سود می‌برید، حتی اگر امروز یک نفر بتواند پایه‌ها را مدیریت کند.',
          business: 'Business پیشنهاد می‌شود چون workflowهای quote-to-invoice یا گزارش‌گیری مالی مانند quotes، work orders، invoices، inventory، reporting یا month-end review را انتخاب کرده‌اید.',
          setupNone: 'می‌توانید از سایت‌ساز موجود استفاده کنید و در صورت نیاز بعداً setup help اضافه کنید.',
          setupBasic: 'Basic پیشنهاد می‌شود چون سایت شما شبیه یک setup ساده ۱ تا ۵ صفحه‌ای با محتوای مستقیم است.',
          setupGrowth: 'Growth پیشنهاد می‌شود چون سایت شما به ساختار کامل‌تر با services، content و lead capture نیاز دارد.',
          setupPremiumLarge: 'Premium پیشنهاد می‌شود چون تعداد صفحات شما نشان‌دهنده سایتی بزرگ‌تر با ساختار و setup سنگین‌تر است.',
          setupPremiumAssets: 'Premium پیشنهاد می‌شود چون انتقال محتوا یا بارگذاری حجیم معمولاً به بررسی دامنه کار نیاز دارد.',
        },
        guidance: {
          starter: 'اگر به Staff scheduling، employee logins یا team visibility نیاز دارید، Pro گزینه بهتری است.',
          pro: 'اگر به quotes، estimates، work orders، invoices، inventory یا month-end reporting نیاز دارید، Business گزینه بهتری است.',
          business: 'بهترین گزینه برای عملیات quote-to-invoice، رهگیری کارها، گزارش‌گیری آماده مالی و کنترل عملیاتی بیشتر.',
        },
      },
    },
  },
  ru: {
    planPositioning: {
      starter: 'Простой сайт, бронирование и базовые продажи.',
      pro: 'Управляйте ежедневными операциями из одной системы.',
      business: 'Для quote-to-invoice операций и финансово-готовых рабочих процессов.',
      businessDescription:
        'Для сервисных компаний, которым нужны quotes, work orders, invoices, расходы, склад и отчетность.',
    },
    businessFinance: {
      heading: 'Финансовые операции',
      bullets: [
        'Quote requests и прием работ с плавающей стоимостью',
        'Estimates и согласование с клиентом',
        'Work orders и назначение задач',
        'Field reports с проверкой менеджера',
        'Invoices, расходы и закупки',
        'Материалы, склад и поставщики',
        'Рентабельность, сводка по налогам и закрытие месяца',
      ],
    },
    setup: {
      title: 'Дополнительные услуги Website Setup',
      subtitle: 'Конструктор сайта входит в каждый план Schedulaa. Вы можете собрать сайт сами или поручить это нашей команде.',
      note: 'Требуется активная подписка Schedulaa. Покупка домена не включена. С подключением домена поможем.',
      basicPriceNote: 'Дополнительная разовая настройка',
      growthPriceNote: 'Дополнительная разовая настройка',
      premiumPriceNote: 'Разовая настройка по согласованному объему',
      basicBestFor: 'Подходит для простых сайтов до 5 страниц.',
      growthBestFor: 'Подходит сервисным компаниям, которым нужен более полный сайт с услугами, галереей, отзывами, продуктами или страницами quote.',
      premiumBestFor: 'Подходит для крупных сайтов, миграции контента и более глубокой доработки.',
      basicDescription: 'Быстрый брендированный запуск для компаний, которым нужно, чтобы сайт подготовила наша команда.',
      growthDescription: 'Наш основной вариант для компаний, которым нужен более сильный продающий сайт, больше контента и лучшая генерация лидов.',
      premiumDescription: 'Для компаний с большими библиотеками контента, большим числом страниц и более тяжелой подготовкой.',
      basicIncludes: ['Настройка шаблона', 'Применение логотипа, цветов и бренда', 'До 5 страниц', 'Настройка формы бронирования, контакта или quote', 'Поддержка публикации', '1 раунд правок'],
      growthIncludes: ['Брендированный запуск сайта', 'До 10 страниц', 'Настройка услуг и продуктов', 'Галерея, проекты, отзывы и страницы контактов', 'Поток quote request или захват лидов', 'Базовая SEO и social sharing настройка', 'Помощь с подключением домена', '2 раунда правок'],
      premiumIncludes: ['Все из Growth', 'Более крупная миграция контента', 'Дополнительные landing pages', 'Больше кастомизации layout', 'Поддержка доработки текста', '3 раунда правок'],
      basicCta: 'Купить Basic Website Setup',
      growthCta: 'Связаться с продажами по Growth Setup',
      premiumCta: 'Связаться с продажами по Premium Setup',
    },
    quoteToInvoice: {
      badge: 'Финансовые операции',
      title: 'Подходит для Quote-to-Invoice операций',
      subtitle:
        'Schedulaa Business помогает сервисным компаниям вести работы с нестандартной ценой от первого запроса до estimate, work order, field report, invoice и отчетности конца месяца.',
      bullets: [
        'Принимайте quote requests для работ с нестандартной ценой',
        'Преобразуйте запросы в estimates и invoices',
        'Создавайте work orders и назначайте работы',
        'Проверяйте field reports до финализации материалов или биллинга',
        'Отслеживайте расходы, закупки, склад и поставщиков',
        'Готовьте отчеты по рентабельности, налогам и закрытию месяца',
      ],
      primaryCtaLabel: 'Смотреть план Business',
      secondaryCtaLabel: 'Связаться с продажами',
    },
    comparison: {
      headers: { feature: 'Функция', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'Лучше всего для',
      bestForValues: {
        starter: 'Простой сайт, бронирование и каталог услуг',
        pro: 'Команды, которым нужны расписание и рабочие процессы сотрудников',
        business: 'Quote-to-invoice операции и отчетность для финансовой передачи',
      },
      businessFinanceSection: 'Финансовые операции',
      businessFinanceRows: ['Quote requests', 'Estimates', 'Work orders', 'Field reports', 'Проверка менеджером', 'Расходы и закупки', 'Склад / материалы', 'Поставщики', 'Отчеты по рентабельности', 'Сводка по налогам', 'Закрытие месяца'],
    },
    planFinder: {
      badge: 'Подбор плана',
      title: 'Найдите подходящий план',
      subtitle: 'Не уверены, какой план подойдет? Выбирайте по тому, как работает ваш бизнес, а не только по отрасли.',
      intro: 'Ответьте на несколько коротких вопросов, и мы порекомендуем подходящий план Schedulaa и при необходимости Website Setup.',
      startCta: 'Запустить Plan Finder',
      compareCta: 'Сравнить планы вручную',
      close: 'Закрыть',
      back: 'Назад',
      next: 'Далее',
      done: 'Готово',
      stepLabel: 'Шаг',
      ofLabel: 'из',
      questions: {
        businessType: {
          label: 'Какой у вас тип бизнеса?',
          helper: 'Это только контекст. Рекомендация все равно строится на workflow и размере команды.',
          options: [
            { key: 'appointment', label: 'Сервисный бизнес по записи' },
            { key: 'project', label: 'Проектный сервисный бизнес' },
            { key: 'field', label: 'Выездной сервисный бизнес' },
            { key: 'home', label: 'Домашние сервисы' },
            { key: 'install', label: 'Установка / ремонт' },
            { key: 'professional', label: 'Профессиональные услуги' },
            { key: 'health', label: 'Здоровье / wellness' },
            { key: 'education', label: 'Обучение / тренинги' },
            { key: 'events', label: 'Events / staffing' },
            { key: 'cabinet', label: 'Cabinet / Millwork' },
            { key: 'renovation', label: 'Renovation' },
            { key: 'medspa', label: 'Medspa' },
            { key: 'tattoo', label: 'Tattoo / PMU Studio' },
            { key: 'cleaning', label: 'Cleaning Company' },
            { key: 'hvac', label: 'HVAC / Plumbing / Electrical' },
            { key: 'other', label: 'Другой сервисный бизнес' },
          ],
        },
        teamSize: {
          label: 'Сколько людей в вашей команде?',
          helper: 'Размер команды помогает отделить solo-сценарии от более операционно нагруженных.',
          options: [{ key: 'just_me', label: 'Только я' }, { key: '2_5', label: '2-5 человек' }, { key: '6_15', label: '6-15 человек' }, { key: '16_40', label: '16-40 человек' }, { key: '40_plus', label: '40+ человек' }],
        },
        needs: {
          label: 'Что вам нужно управлять?',
          helper: 'Выберите рабочие процессы, которые должен покрывать Schedulaa.',
          websiteOnlyHint: 'Website only — это простой сценарий. Если выбрать другой workflow, Website only будет снят автоматически.',
          sections: [
            { title: 'Сайт и лиды', options: [{ key: NEED_KEYS.websiteOnly, label: 'Website only' }, { key: NEED_KEYS.booking, label: 'Online booking' }, { key: NEED_KEYS.leads, label: 'Contact / lead forms' }, { key: NEED_KEYS.services, label: 'Services' }, { key: NEED_KEYS.products, label: 'Products' }] },
            { title: 'Командные операции', options: [{ key: NEED_KEYS.scheduling, label: 'Staff scheduling' }, { key: NEED_KEYS.employeePortal, label: 'Employee portal' }, { key: NEED_KEYS.payrollReady, label: 'Payroll-ready reports' }] },
            { title: 'Quote-to-Invoice операции', options: [{ key: NEED_KEYS.quoteRequests, label: 'Quote requests' }, { key: NEED_KEYS.estimates, label: 'Estimates' }, { key: NEED_KEYS.workOrders, label: 'Work orders' }, { key: NEED_KEYS.fieldReports, label: 'Field reports' }, { key: NEED_KEYS.invoices, label: 'Invoices' }] },
            { title: 'Финансы и отчетность', options: [{ key: NEED_KEYS.expenses, label: 'Expenses / purchases' }, { key: NEED_KEYS.inventory, label: 'Inventory / materials' }, { key: NEED_KEYS.vendors, label: 'Vendors' }, { key: NEED_KEYS.profitability, label: 'Profitability' }, { key: NEED_KEYS.taxSummary, label: 'Tax summary' }, { key: NEED_KEYS.monthEnd, label: 'Month-end review' }] },
          ],
        },
        websiteNeed: {
          label: 'Нужен ли вам сайт?',
          helper: 'Это определяет, нужна ли еще и рекомендация по setup.',
          options: [{ key: 'new_website', label: 'Да, мне нужен новый сайт' }, { key: 'improve_website', label: 'Да, хочу улучшить или перенести текущий сайт' }, { key: 'internal_only', label: 'Нет, мне нужны только внутренние операции' }, { key: 'not_sure', label: 'Не уверен' }],
        },
        setupPreference: {
          label: 'Хотите собрать сайт сами или поручить настройку Schedulaa?',
          helper: 'Это влияет только на рекомендацию по Website Setup.',
          options: [{ key: 'diy', label: 'Соберу сам' }, { key: 'done_for_you', label: 'Хочу, чтобы Schedulaa настроил' }, { key: 'not_sure', label: 'Пока не уверен' }],
        },
        pageCount: {
          label: 'Сколько страниц вам нужно?',
          helper: 'Это помогает определить, подходит ли Basic, Growth или Premium.',
          options: [
            { key: '1_5', label: '1-5 страниц', description: 'Простой сайт: Home, Services, Contact, Booking/Quote, About или Gallery.' },
            { key: '6_10', label: '6-10 страниц', description: 'Более полный продающий сайт: services, products, gallery, reviews, quote/contact pages.' },
            { key: '11_15', label: '11-15 страниц', description: 'Крупнее: несколько service pages, project pages, location pages или более богатый контент.' },
            { key: '15_plus', label: '15+ страниц', description: 'Обычно это индивидуальный scope и лучше решается через Premium или review с продажами.' },
            { key: 'unknown', label: 'Не знаю', description: 'Обычно рекомендуем Growth, а затем подтверждаем объем до старта.' },
          ],
        },
        contentComplexity: {
          label: 'Нужна ли миграция контента или много галерей, проектов и товаров?',
          helper: 'Это отделяет простой setup от тяжелой миграции и больших ручных загрузок.',
          options: [
            { key: 'simple', label: 'Нет, простой контент', description: 'Логотип, контакты, базовый текст, несколько изображений и обычные записи услуг/товаров.' },
            { key: 'many_assets', label: 'Да, у меня много изображений/проектов/товаров', description: 'Большая галерея, много portfolio items, много services/products или тяжелые ручные загрузки. Обычно Premium.' },
            { key: 'migration', label: 'Да, нужно перенести контент со старого сайта', description: 'Миграция с существующего сайта. Объем зависит от количества переносимого контента. Обычно Premium.' },
            { key: 'not_sure', label: 'Не уверен', description: 'Мы дадим рекомендацию по числу страниц и подтвердим объем до начала работ.' },
          ],
        },
      },
      setupScopeHint: 'Website setup включает структуру страниц, базовое размещение контента и поддержку запуска. Большие библиотеки контента, кастомный copywriting, продвинутые SEO pages или тяжелые ручные загрузки могут потребовать Premium или индивидуальный quote.',
      final: {
        title: 'Ваш рекомендуемый пакет',
        subtitle: 'Вам нужен только один ежемесячный план Schedulaa. Website setup — дополнительная разовая услуга, если вы хотите, чтобы сайт подготовила наша команда.',
        monthlyPlanLabel: 'Рекомендуемый ежемесячный план',
        monthlySubscriptionLabel: 'Ежемесячная подписка',
        optionalSetupLabel: 'Дополнительный разовый Website Setup',
        startTrialTemplate: 'Start 14-day free trial with {{plan}}',
        noSetupTitle: 'Setup не требуется',
        noSetupPrice: '$0',
        includedWithPlan: 'Входит в ежемесячный план',
        whyLabel: 'Почему:',
        startTrialNote: 'Эта кнопка запускает ежемесячный план Schedulaa. Website setup можно добавить отдельно при необходимости.',
        viewPlanTemplate: 'Смотреть план {{plan}}',
        talkToSales: 'Связаться с продажами',
        summaryTitle: 'Ваша рекомендация:',
        summaryMonthlyTemplate: 'Ежемесячный план: {{plan}} - {{price}}',
        summaryOptionalSetupTemplate: 'Дополнительный разовый setup: {{setup}} - {{price}}',
        summaryNoSetup: 'Website setup: не нужен. Вы можете собрать сайт самостоятельно.',
        recurringNote: 'Ежемесячный план является recurring. Website setup — дополнительная разовая услуга.',
        addLaterNote: 'Website setup можно добавить позже, если понадобится.',
        reassurance: 'Вы можете начать с ежемесячного плана и добавить Website setup позже.',
        activeSubscriptionNote: 'Требуется активная подписка Schedulaa. Покупка домена не включена.',
        scopeConfirmedNote: 'Финальный объем setup подтверждается до начала работ. Дополнительные страницы, большая миграция контента, custom copywriting, advanced SEO pages или тяжелые загрузки галерей/товаров могут тарифицироваться отдельно.',
        recommendationTitle: 'Ваша рекомендация',
        noSetupDescription: 'Соберите сайт самостоятельно с помощью встроенного website builder. При необходимости помощь по setup можно добавить позже.',
        loadingTrial: 'Starting your free trial...',
        reasons: {
          starter: 'Starter рекомендуется, потому что вам в основном нужны сайт, online booking, contact forms, services и products без staff scheduling и финансовых workflow.',
          starterFallback: 'Starter рекомендуется, потому что ваши потребности все еще укладываются в простой workflow сайта, бронирования и лидов.',
          proScheduling: 'Pro рекомендуется, потому что вы выбрали staff scheduling и workflows для видимости команды.',
          proEmployeePortal: 'Pro рекомендуется, потому что вы выбрали employee portal и командные workflows.',
          proTeamService: 'Pro рекомендуется, потому что у вас есть команда и вы выбрали service-business потребности, такие как online booking, contact forms, services или products. Starter может быть достаточным, если всем управляет один человек и staff workflows не нужны.',
          proFallback: 'Pro рекомендуется, потому что у вас есть команда и вам могут быть полезны staff-facing workflows, даже если базу пока может вести один человек.',
          business: 'Business рекомендуется, потому что вы выбрали quote-to-invoice или finance-ready workflows: quotes, work orders, invoices, inventory, reporting или month-end review.',
          setupNone: 'Вы можете использовать встроенный website builder и при необходимости добавить помощь по setup позже.',
          setupBasic: 'Basic рекомендуется, потому что ваш сайт похож на простой setup на 1-5 страниц с прямым контентом.',
          setupGrowth: 'Growth рекомендуется, потому что вашему сайту нужна более полная структура с services, content и lead capture.',
          setupPremiumLarge: 'Premium рекомендуется, потому что число страниц указывает на более крупный сайт с более тяжелой структурой и setup.',
          setupPremiumAssets: 'Premium рекомендуется, потому что миграция или тяжелые загрузки контента обычно требуют scoped review.',
        },
        guidance: {
          starter: 'Нужны staff scheduling, employee logins или team visibility? Pro может подойти лучше.',
          pro: 'Нужны quotes, estimates, work orders, invoices, inventory или month-end reporting? Business может подойти лучше.',
          business: 'Лучший вариант для quote-to-invoice операций, контроля задач, finance-ready reporting и более сильного операционного контроля.',
        },
      },
    },
  },
  zh: {
    planPositioning: {
      starter: '简单网站、预约与基础销售。',
      pro: '用一个系统管理日常运营。',
      business: '适合 quote-to-invoice 流程和财务交接型工作流。',
      businessDescription: '适合需要 quotes、work orders、invoices、费用、库存和报表的服务型企业。',
    },
    businessFinance: {
      heading: '业务财务',
      bullets: ['Quote requests 与浮动报价项目录入', 'Estimates 与客户确认流程', 'Work orders 与任务分配', 'Field reports 与经理审核', 'Invoices、费用与采购', '材料、库存与供应商跟踪', '盈利、税务汇总与月末复盘'],
    },
    setup: {
      title: '可选 Website Setup 服务',
      subtitle: '每个 Schedulaa 方案都包含网站构建器。你可以自己搭建，也可以让我们的团队为你设置。',
      note: '需要有效的 Schedulaa 订阅。不包含域名购买。我们可以协助连接域名。',
      basicPriceNote: '可选一次性设置',
      growthPriceNote: '可选一次性设置',
      premiumPriceNote: '按范围确定的一次性设置',
      basicBestFor: '适合最多 5 页的简单网站。',
      growthBestFor: '适合需要更完整网站结构的服务型企业，例如 services、gallery、reviews、products 或 quote 页面。',
      premiumBestFor: '适合更大的网站、内容迁移和更深度的定制。',
      basicDescription: '适合希望由我们团队快速完成品牌化网站准备的企业。',
      growthDescription: '适合希望获得更强销售网站、更丰富内容和更好线索获取能力的企业。',
      premiumDescription: '适合内容库更大、页面更多、需要更重度设置支持的企业。',
      basicIncludes: ['模板设置', '应用 logo、颜色和品牌', '最多 5 页', '预约、联系或 quote 表单设置', '发布支持', '1 轮修改'],
      growthIncludes: ['品牌化网站设置', '最多 10 页', 'services 和 products 设置', 'gallery、projects、reviews 和 contact 页面', 'quote request 或 lead capture 流程', '基础 SEO 与社交分享设置', '域名连接支持', '2 轮修改'],
      premiumIncludes: ['包含 Growth 的全部内容', '更大规模的内容迁移', '额外 landing pages', '更多布局定制', '文案优化支持', '3 轮修改'],
      basicCta: '购买 Basic Website Setup',
      growthCta: '联系销售了解 Growth Setup',
      premiumCta: '联系销售了解 Premium Setup',
    },
    quoteToInvoice: {
      badge: '业务财务',
      title: '适合 Quote-to-Invoice 流程',
      subtitle: 'Schedulaa Business 帮助服务型企业把自定义报价工作从首次请求一路管理到 estimate、work order、field report、invoice 和月末报表。',
      bullets: ['接收自定义报价项目的 quote requests', '把请求转换为 estimates 和 invoices', '创建 work orders 并分配任务', '在材料或账单最终确认前审核 field reports', '跟踪费用、采购、库存和供应商', '准备盈利、税务汇总和月末报表'],
      primaryCtaLabel: '查看 Business 方案',
      secondaryCtaLabel: '联系销售',
    },
    comparison: {
      headers: { feature: '功能', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: '适合',
      bestForValues: {
        starter: '简单网站、预约和服务目录',
        pro: '需要排班和员工工作流的团队',
        business: 'Quote-to-invoice 流程和财务交接型报表',
      },
      businessFinanceSection: '业务财务',
      businessFinanceRows: ['Quote requests', 'Estimates', 'Work orders', 'Field reports', '经理审核批准', '费用与采购', '库存 / 材料', '供应商', '盈利报表', '税务汇总', '月末复盘'],
    },
    planFinder: {
      badge: '引导式推荐',
      title: '找到合适的方案',
      subtitle: '如果你不确定该选哪个方案，请根据业务实际运作方式来选择，而不是只看行业。',
      intro: '回答几个简短问题，我们会推荐合适的 Schedulaa 方案和可选 Website Setup。',
      startCta: '开始 Plan Finder',
      compareCta: '手动比较方案',
      close: '关闭',
      back: '上一步',
      next: '下一步',
      done: '完成',
      stepLabel: '步骤',
      ofLabel: '/',
      questions: {
        businessType: {
          label: '你经营哪种类型的业务？',
          helper: '这只是提供背景。推荐结果仍然主要由工作流和团队规模决定。',
          options: [
            { key: 'appointment', label: '预约型服务业务' },
            { key: 'project', label: '项目型服务业务' },
            { key: 'field', label: '现场服务业务' },
            { key: 'home', label: '家庭服务业务' },
            { key: 'install', label: '安装 / 维修业务' },
            { key: 'professional', label: '专业服务' },
            { key: 'health', label: '健康 / wellness 业务' },
            { key: 'education', label: '教育 / 培训业务' },
            { key: 'events', label: '活动 / staffing 业务' },
            { key: 'cabinet', label: 'Cabinet / Millwork' },
            { key: 'renovation', label: 'Renovation' },
            { key: 'medspa', label: 'Medspa' },
            { key: 'tattoo', label: 'Tattoo / PMU Studio' },
            { key: 'cleaning', label: 'Cleaning Company' },
            { key: 'hvac', label: 'HVAC / Plumbing / Electrical' },
            { key: 'other', label: '其他服务型业务' },
          ],
        },
        teamSize: {
          label: '你的团队有多少人？',
          helper: '团队规模有助于区分单人、成长型团队和更复杂的运营场景。',
          options: [{ key: 'just_me', label: '只有我自己' }, { key: '2_5', label: '2-5 人' }, { key: '6_15', label: '6-15 人' }, { key: '16_40', label: '16-40 人' }, { key: '40_plus', label: '40+ 人' }],
        },
        needs: {
          label: '你需要管理什么？',
          helper: '请选择希望由 Schedulaa 覆盖的工作流。',
          websiteOnlyHint: 'Website only 是简单意图选项。如果选择其他工作流，Website only 会自动移除。',
          sections: [
            { title: '网站与线索', options: [{ key: NEED_KEYS.websiteOnly, label: 'Website only' }, { key: NEED_KEYS.booking, label: 'Online booking' }, { key: NEED_KEYS.leads, label: 'Contact / lead forms' }, { key: NEED_KEYS.services, label: 'Services' }, { key: NEED_KEYS.products, label: 'Products' }] },
            { title: '团队运营', options: [{ key: NEED_KEYS.scheduling, label: 'Staff scheduling' }, { key: NEED_KEYS.employeePortal, label: 'Employee portal' }, { key: NEED_KEYS.payrollReady, label: 'Payroll-ready reports' }] },
            { title: 'Quote-to-Invoice 流程', options: [{ key: NEED_KEYS.quoteRequests, label: 'Quote requests' }, { key: NEED_KEYS.estimates, label: 'Estimates' }, { key: NEED_KEYS.workOrders, label: 'Work orders' }, { key: NEED_KEYS.fieldReports, label: 'Field reports' }, { key: NEED_KEYS.invoices, label: 'Invoices' }] },
            { title: '财务与报表', options: [{ key: NEED_KEYS.expenses, label: 'Expenses / purchases' }, { key: NEED_KEYS.inventory, label: 'Inventory / materials' }, { key: NEED_KEYS.vendors, label: 'Vendors' }, { key: NEED_KEYS.profitability, label: 'Profitability' }, { key: NEED_KEYS.taxSummary, label: 'Tax summary' }, { key: NEED_KEYS.monthEnd, label: 'Month-end review' }] },
          ],
        },
        websiteNeed: {
          label: '你需要网站吗？',
          helper: '这决定我们是否同时推荐 setup 服务。',
          options: [{ key: 'new_website', label: '是，我需要一个新网站' }, { key: 'improve_website', label: '是，我想改进或迁移现有网站' }, { key: 'internal_only', label: '不，我只需要内部运营' }, { key: 'not_sure', label: '还不确定' }],
        },
        setupPreference: {
          label: '你想自己搭建网站，还是让 Schedulaa 帮你设置？',
          helper: '这只影响可选的 Website Setup 推荐。',
          options: [{ key: 'diy', label: '我自己搭建' }, { key: 'done_for_you', label: '我希望 Schedulaa 帮我设置' }, { key: 'not_sure', label: '还不确定' }],
        },
        pageCount: {
          label: '你需要多少个网站页面？',
          helper: '这有助于判断适合 Basic、Growth 还是 Premium。',
          options: [
            { key: '1_5', label: '1-5 页', description: '简单网站：Home、Services、Contact、Booking/Quote、About 或 Gallery。' },
            { key: '6_10', label: '6-10 页', description: '更完整的销售型网站：services、products、gallery、reviews、quote/contact 页面。' },
            { key: '11_15', label: '11-15 页', description: '更大型网站：多个 service pages、project pages、location pages 或更丰富的内容。' },
            { key: '15_plus', label: '15+ 页', description: '通常属于自定义范围，更适合通过 Premium 或销售评估处理。' },
            { key: 'unknown', label: '我不确定', description: '通常我们会先推荐 Growth，并在项目开始前确认范围。' },
          ],
        },
        contentComplexity: {
          label: '你是否需要内容迁移，或有大量 gallery、projects、products？',
          helper: '这有助于区分简单 setup 与重度迁移或大量手工上传工作。',
          options: [
            { key: 'simple', label: '不，内容很简单', description: 'Logo、联系方式、基础文案、少量图片，以及常规 services/products 条目。' },
            { key: 'many_assets', label: '是，我有很多图片/项目/产品', description: '大型 gallery、大量 portfolio items、大量 services/products，或较重的手工上传工作。通常属于 Premium。' },
            { key: 'migration', label: '是，我需要从旧网站迁移内容', description: '从现有网站迁移内容。范围取决于需要迁移的内容量。通常属于 Premium。' },
            { key: 'not_sure', label: '还不确定', description: '我们会根据页面数量给出建议，并在开始前确认 setup 范围。' },
          ],
        },
      },
      setupScopeHint: 'Website setup 包含页面结构、基础内容摆放和上线支持。大型内容库、自定义文案、进阶 SEO 页面或大量手工上传，可能需要 Premium 或单独报价。',
      final: {
        title: '你的推荐方案',
        subtitle: '你只需要一个 Schedulaa 月度方案。如果希望我们团队代建网站，Website setup 是可选的一次性服务。',
        monthlyPlanLabel: '推荐月度方案',
        monthlySubscriptionLabel: '月度订阅',
        optionalSetupLabel: '可选一次性 Website Setup',
        startTrialTemplate: 'Start 14-day free trial with {{plan}}',
        noSetupTitle: '无需 setup',
        noSetupPrice: '$0',
        includedWithPlan: '已包含在你的月度方案中',
        whyLabel: '原因：',
        startTrialNote: '这个按钮会启动 Schedulaa 月度方案。Website setup 可在之后单独添加。',
        viewPlanTemplate: '查看 {{plan}} 方案',
        talkToSales: '联系销售',
        summaryTitle: '你的推荐：',
        summaryMonthlyTemplate: '月度方案：{{plan}} - {{price}}',
        summaryOptionalSetupTemplate: '可选一次性 setup：{{setup}} - {{price}}',
        summaryNoSetup: 'Website setup：不需要。你可以自己搭建。',
        recurringNote: '月度方案是 recurring。Website setup 是可选的一次性服务。',
        addLaterNote: '如果需要，之后也可以再添加 Website setup。',
        reassurance: '你可以先从月度方案开始，之后再添加 Website setup。',
        activeSubscriptionNote: '需要有效的 Schedulaa 订阅。不包含域名购买。',
        scopeConfirmedNote: '最终 setup 范围会在开始前确认。额外页面、大规模内容迁移、自定义文案、advanced SEO 页面或大量 gallery/product 上传，可能需要单独报价。',
        recommendationTitle: '你的推荐结果',
        noSetupDescription: '使用内置 website builder 自己搭建即可。如果之后需要，也可以再添加 setup 帮助。',
        loadingTrial: 'Starting your free trial...',
        reasons: {
          starter: '之所以推荐 Starter，是因为你主要需要网站、Online booking、Contact forms、Services 和 Products，而不需要 staff scheduling 或财务工作流。',
          starterFallback: '之所以推荐 Starter，是因为你的需求仍然适合简单的网站、预约和获客工作流。',
          proScheduling: '之所以推荐 Pro，是因为你选择了 staff scheduling 和团队可见性工作流。',
          proEmployeePortal: '之所以推荐 Pro，是因为你选择了 employee portal 和团队工作流。',
          proTeamService: '之所以推荐 Pro，是因为你有团队，并选择了 online booking、contact forms、services 或 products 等 service-business 需求。如果仍由一个人管理全部工作且不需要员工工作流，Starter 也可能足够。',
          proFallback: '之所以推荐 Pro，是因为你有团队，即使目前基础工作还能由一个人管理，员工侧工作流也可能带来帮助。',
          business: '之所以推荐 Business，是因为你选择了 quote-to-invoice 或财务交接型工作流，例如 quotes、work orders、invoices、inventory、reporting 或 month-end review。',
          setupNone: '你可以使用内置 website builder，之后如有需要再添加 setup 帮助。',
          setupBasic: '推荐 Basic，因为你的网站看起来是一个 1-5 页、内容较直接的简单 setup。',
          setupGrowth: '推荐 Growth，因为你的网站需要更完整的结构、内容和 lead capture。',
          setupPremiumLarge: '推荐 Premium，因为页面数量表明你的网站规模更大，结构和 setup 工作也更重。',
          setupPremiumAssets: '推荐 Premium，因为内容迁移或大量上传通常需要先做范围评估。',
        },
        guidance: {
          starter: '如果你需要 staff scheduling、employee logins 或 team visibility，Pro 可能更合适。',
          pro: '如果你需要 quotes、estimates、work orders、invoices、inventory 或 month-end reporting，Business 可能更合适。',
          business: '最适合 quote-to-invoice 流程、任务跟踪、财务交接型报表和更强的运营控制。',
        },
      },
    },
  },
  es: {
    planPositioning: {
      starter: 'Sitio simple, reservas y ventas básicas.',
      pro: 'Gestiona las operaciones diarias desde un solo sistema.',
      business: 'Pensado para operaciones de presupuesto a cobro y flujos listos para finanzas.',
      businessDescription: 'Para negocios de servicios que gestionan presupuestos, órdenes de trabajo, facturas, gastos, inventario y reportes.',
    },
    businessFinance: {
      heading: 'Finanzas operativas',
      bullets: [
        'Solicitudes de presupuesto y captura de trabajos con precio variable',
        'Presupuestos y flujo de aprobación del cliente',
        'Órdenes de trabajo y asignación de trabajos',
        'Reportes de campo con revisión del gerente',
        'Facturas, gastos y compras',
        'Materiales, inventario y seguimiento de proveedores',
        'Rentabilidad, resumen fiscal y cierre de fin de mes',
      ],
    },
    setup: {
      title: 'Servicios opcionales de configuración web',
      subtitle: 'Todos los planes de Schedulaa incluyen el constructor de sitios. Puedes hacerlo tú mismo o dejar que nuestro equipo lo configure por ti.',
      note: 'Requiere una suscripción activa de Schedulaa. La compra del dominio no está incluida. Podemos ayudarte a conectarlo.',
      basicPriceNote: 'Setup opcional de una sola vez',
      growthPriceNote: 'Setup opcional de una sola vez',
      premiumPriceNote: 'Setup de una sola vez con alcance definido',
      basicBestFor: 'Ideal para sitios simples de hasta 5 páginas.',
      growthBestFor: 'Ideal para negocios de servicios que necesitan un sitio más completo con servicios, galería, reseñas, productos o páginas de presupuesto.',
      premiumBestFor: 'Ideal para sitios más grandes, migración de contenido y mayor personalización.',
      basicDescription: 'Una configuración rápida y con branding para negocios que prefieren que nuestro equipo prepare el sitio.',
      growthDescription: 'Nuestra recomendación principal para negocios que quieren un sitio más sólido, más contenido y mejor captación de leads.',
      premiumDescription: 'Para negocios con más contenido, más páginas y una necesidad de configuración más intensiva.',
      basicIncludes: ['Configuración de plantilla', 'Aplicación de logo, colores y branding', 'Hasta 5 páginas', 'Configuración de formulario de reserva, contacto o presupuesto', 'Soporte de publicación', '1 ronda de revisión'],
      growthIncludes: ['Configuración de sitio con branding', 'Hasta 10 páginas', 'Configuración de servicios y productos', 'Galería, proyectos, reseñas y páginas de contacto', 'Flujo de solicitud de presupuesto o captación de leads', 'SEO básico y configuración de compartición social', 'Soporte para conexión de dominio', '2 rondas de revisión'],
      premiumIncludes: ['Todo lo de Growth', 'Migración de contenido más amplia', 'Páginas de aterrizaje adicionales', 'Más personalización de diseño', 'Soporte para mejorar textos', '3 rondas de revisión'],
      basicCta: 'Comprar Basic Website Setup',
      growthCta: 'Hablar con ventas sobre Growth Setup',
      premiumCta: 'Hablar con ventas sobre Premium Setup',
    },
    quoteToInvoice: {
      badge: 'Finanzas operativas',
      title: 'Pensado para operaciones de presupuesto a cobro',
      subtitle: 'Schedulaa Business ayuda a negocios de servicios a gestionar trabajos de precio variable desde la primera solicitud hasta el presupuesto, la orden de trabajo, el reporte de campo, la factura y el reporting de fin de mes.',
      bullets: [
        'Captura solicitudes de presupuesto para trabajos con precio variable',
        'Convierte solicitudes en presupuestos y facturas',
        'Crea órdenes de trabajo y asigna trabajos',
        'Revisa reportes de campo antes de cerrar materiales o facturación',
        'Controla gastos, compras, inventario y proveedores',
        'Prepara reportes de rentabilidad, resumen fiscal y fin de mes',
      ],
      primaryCtaLabel: 'Ver plan Business',
      secondaryCtaLabel: 'Hablar con ventas',
    },
    comparison: {
      headers: { feature: 'Función', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'Ideal para',
      bestForValues: {
        starter: 'Sitio simple, booking y catálogos de servicios',
        pro: 'Equipos que necesitan scheduling y flujos para empleados',
        business: 'Operaciones de presupuesto a cobro y reporting listo para finanzas',
      },
      businessFinanceSection: 'Finanzas operativas',
      businessFinanceRows: ['Solicitudes de presupuesto', 'Presupuestos', 'Órdenes de trabajo', 'Reportes de campo', 'Aprobaciones de revisión del gerente', 'Gastos y compras', 'Inventario / materiales', 'Proveedores', 'Reportes de rentabilidad', 'Resumen fiscal', 'Cierre de fin de mes'],
    },
    planFinder: planFinderEs,
  },
  fr: {
    planPositioning: {
      starter: 'Site simple, réservation et ventes de base.',
      pro: 'Pilotez les opérations quotidiennes depuis un seul système.',
      business: 'Conçu pour les opérations devis à facture et les workflows prêts pour la finance.',
      businessDescription: 'Pour les entreprises de services qui gèrent devis, ordres de travail, factures, dépenses, inventaire et reporting.',
    },
    businessFinance: {
      heading: 'Finance opérationnelle',
      bullets: [
        'Demandes de devis et prise en charge des travaux à prix variable',
        'Estimations et workflow d’approbation client',
        'Ordres de travail et affectation des tâches',
        'Rapports terrain avec revue du manager',
        'Factures, dépenses et achats',
        'Matériaux, inventaire et suivi fournisseurs',
        'Rentabilité, synthèse fiscale et revue de fin de mois',
      ],
    },
    setup: {
      title: 'Services optionnels de configuration web',
      subtitle: 'Chaque plan Schedulaa inclut le website builder. Vous pouvez créer le site vous-même ou demander à notre équipe de le préparer.',
      note: 'Nécessite un abonnement Schedulaa actif. L’achat du domaine n’est pas inclus. Nous pouvons vous aider à le connecter.',
      basicPriceNote: 'Setup optionnel en une fois',
      growthPriceNote: 'Setup optionnel en une fois',
      premiumPriceNote: 'Setup en une fois avec périmètre défini',
      basicBestFor: 'Idéal pour les sites simples jusqu’à 5 pages.',
      growthBestFor: 'Idéal pour les entreprises de services qui ont besoin d’un site plus complet avec services, galerie, avis, produits ou pages de devis.',
      premiumBestFor: 'Idéal pour les sites plus larges, la migration de contenu et une personnalisation plus poussée.',
      basicDescription: 'Un lancement rapide et brandé pour les entreprises qui veulent que notre équipe prépare le site.',
      growthDescription: 'Notre recommandation principale pour les entreprises qui veulent un site plus solide, plus de contenu et une meilleure capture de leads.',
      premiumDescription: 'Pour les entreprises avec plus de contenu, plus de pages et un besoin de setup plus important.',
      basicIncludes: ['Configuration du template', 'Application du logo, des couleurs et du branding', 'Jusqu’à 5 pages', 'Configuration du formulaire de réservation, contact ou devis', 'Support de mise en ligne', '1 cycle de révision'],
      growthIncludes: ['Setup complet du site', 'Jusqu’à 10 pages', 'Configuration des services et produits', 'Galerie, projets, avis et pages de contact', 'Flux de demande de devis ou capture de leads', 'SEO de base et partage social', 'Support de connexion du domaine', '2 cycles de révision'],
      premiumIncludes: ['Tout le contenu de Growth', 'Migration de contenu plus large', 'Pages d’atterrissage supplémentaires', 'Plus de personnalisation de la mise en page', 'Support d’amélioration des textes', '3 cycles de révision'],
      basicCta: 'Acheter Basic Website Setup',
      growthCta: 'Parler aux ventes pour Growth Setup',
      premiumCta: 'Parler aux ventes pour Premium Setup',
    },
    quoteToInvoice: {
      badge: 'Finance opérationnelle',
      title: 'Conçu pour les opérations devis à facture',
      subtitle: 'Schedulaa Business aide les entreprises de services à gérer les travaux à prix variable depuis la première demande jusqu’au devis, à l’ordre de travail, au rapport terrain, à la facture et au reporting de fin de mois.',
      bullets: [
        'Capturez les demandes de devis pour les travaux à prix variable',
        'Transformez les demandes en estimations et factures',
        'Créez des ordres de travail et affectez les tâches',
        'Revoyez les rapports terrain avant de finaliser les matériaux ou la facturation',
        'Suivez les dépenses, achats, inventaire et fournisseurs',
        'Préparez les rapports de rentabilité, la synthèse fiscale et la revue de fin de mois',
      ],
      primaryCtaLabel: 'Voir le plan Business',
      secondaryCtaLabel: 'Parler aux ventes',
    },
    comparison: {
      headers: { feature: 'Fonctionnalité', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'Idéal pour',
      bestForValues: {
        starter: 'Site simple, booking et catalogue de services',
        pro: 'Équipes ayant besoin de scheduling et de workflows employés',
        business: 'Opérations devis à facture et reporting prêt pour la finance',
      },
      businessFinanceSection: 'Finance opérationnelle',
      businessFinanceRows: ['Demandes de devis', 'Estimations', 'Ordres de travail', 'Rapports terrain', 'Approbations de revue manager', 'Dépenses et achats', 'Inventaire / matériaux', 'Fournisseurs', 'Rapports de rentabilité', 'Synthèse fiscale', 'Revue de fin de mois'],
    },
    planFinder: planFinderFr,
  },
  de: {
    planPositioning: {
      starter: 'Einfache Website, Buchungen und grundlegende Verkäufe.',
      pro: 'Steuern Sie den Tagesbetrieb aus einem System.',
      business: 'Für Angebot-bis-Rechnung-Abläufe und finanzbereite Workflows.',
      businessDescription: 'Für Serviceunternehmen, die Angebote, Arbeitsaufträge, Rechnungen, Ausgaben, Inventar und Reporting steuern.',
    },
    businessFinance: {
      heading: 'Betriebsfinanzen',
      bullets: [
        'Angebotsanfragen und Aufnahme variabler Preisarbeiten',
        'Kostenvoranschläge und Kundenfreigaben',
        'Arbeitsaufträge und Aufgabenzuweisung',
        'Feldberichte mit Manager-Freigabe',
        'Rechnungen, Ausgaben und Einkäufe',
        'Materialien, Inventar und Lieferantenverfolgung',
        'Profitabilität, Steuerübersicht und Monatsabschluss',
      ],
    },
    setup: {
      title: 'Optionale Web-Einrichtungsservices',
      subtitle: 'Jeder Schedulaa Plan enthält den Website Builder. Sie können die Seite selbst bauen oder unser Team mit der Einrichtung beauftragen.',
      note: 'Erfordert ein aktives Schedulaa-Abonnement. Der Domainkauf ist nicht enthalten. Wir helfen bei der Verbindung der Domain.',
      basicPriceNote: 'Optionales einmaliges Setup',
      growthPriceNote: 'Optionales einmaliges Setup',
      premiumPriceNote: 'Einmaliges Setup mit abgestimmtem Umfang',
      basicBestFor: 'Geeignet für einfache Websites mit bis zu 5 Seiten.',
      growthBestFor: 'Geeignet für Serviceunternehmen, die eine umfassendere Website mit Services, Galerie, Bewertungen, Produkten oder Angebotsseiten brauchen.',
      premiumBestFor: 'Geeignet für größere Websites, Content-Migration und stärkere Anpassung.',
      basicDescription: 'Schnelles gebrandetes Setup für Unternehmen, die möchten, dass unser Team die Seite vorbereitet.',
      growthDescription: 'Unsere Hauptempfehlung für Unternehmen, die eine stärkere Sales-Website, mehr Inhalte und bessere Lead-Erfassung wollen.',
      premiumDescription: 'Für Unternehmen mit größeren Content-Bibliotheken, mehr Seiten und höherem Setup-Aufwand.',
      basicIncludes: ['Template-Setup', 'Logo, Farben und Branding anwenden', 'Bis zu 5 Seiten', 'Booking-, Kontakt- oder Angebotsformular einrichten', 'Publish-Support', '1 Revisionsrunde'],
      growthIncludes: ['Gebrandetes Website-Setup', 'Bis zu 10 Seiten', 'Services- und Produkt-Setup', 'Galerie, Projekte, Bewertungen und Kontaktseiten', 'Angebotsanfrage- oder Lead-Capture-Flow', 'Basis-SEO und Social-Sharing-Setup', 'Domain-Anbindung', '2 Revisionsrunden'],
      premiumIncludes: ['Alles aus Growth', 'Größere Content-Migration', 'Zusätzliche Landing Pages', 'Mehr Layout-Anpassung', 'Unterstützung bei Copy-Überarbeitung', '3 Revisionsrunden'],
      basicCta: 'Basic Website Setup kaufen',
      growthCta: 'Mit Sales über Growth Setup sprechen',
      premiumCta: 'Mit Sales über Premium Setup sprechen',
    },
    quoteToInvoice: {
      badge: 'Betriebsfinanzen',
      title: 'Für Angebot-bis-Rechnung-Abläufe gebaut',
      subtitle: 'Schedulaa Business hilft Serviceunternehmen, variable Preisarbeiten vom ersten Request bis zum Kostenvoranschlag, Arbeitsauftrag, Feldbericht, zur Rechnung und zum Monatsreporting zu steuern.',
      bullets: [
        'Angebotsanfragen für variable Preisarbeiten erfassen',
        'Anfragen in Kostenvoranschläge und Rechnungen umwandeln',
        'Arbeitsaufträge erstellen und Aufgaben zuweisen',
        'Feldberichte prüfen, bevor Material oder Abrechnung final wird',
        'Ausgaben, Einkäufe, Inventar und Lieferanten verfolgen',
        'Profitabilität, Steuerübersicht und Monatsreports vorbereiten',
      ],
      primaryCtaLabel: 'Business Plan ansehen',
      secondaryCtaLabel: 'Mit Sales sprechen',
    },
    comparison: {
      headers: { feature: 'Funktion', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'Am besten für',
      bestForValues: {
        starter: 'Einfache Website, Booking und Service-Kataloge',
        pro: 'Teams mit Scheduling- und Mitarbeiter-Workflows',
        business: 'Angebot-bis-Rechnung-Abläufe und finanzbereites Reporting',
      },
      businessFinanceSection: 'Betriebsfinanzen',
      businessFinanceRows: ['Angebotsanfragen', 'Kostenvoranschläge', 'Arbeitsaufträge', 'Feldberichte', 'Manager-Freigaben', 'Ausgaben & Einkäufe', 'Inventar / Materialien', 'Lieferanten', 'Profitabilitätsberichte', 'Steuerübersicht', 'Monatsabschluss'],
    },
    planFinder: planFinderDe,
  },
  ar: {
    planPositioning: {
      starter: 'موقع بسيط، حجوزات، ومبيعات أساسية.',
      pro: 'أدر العمليات اليومية من نظام واحد.',
      business: 'مناسب لعمليات من العرض إلى الفاتورة ومسارات العمل الجاهزة للتقارير المالية.',
      businessDescription: 'لأعمال الخدمات التي تدير طلبات التسعير وأوامر العمل والفواتير والمصروفات والمخزون والتقارير.',
    },
    businessFinance: {
      heading: 'العمليات المالية',
      bullets: [
        'طلبات التسعير واستقبال الأعمال ذات التسعير المتغير',
        'التقديرات ومسار موافقة العميل',
        'أوامر العمل وتوزيع المهام',
        'التقارير الميدانية مع مراجعة المدير',
        'الفواتير والمصروفات والمشتريات',
        'المواد والمخزون وتتبع المورّدين',
        'الربحية وملخص الضرائب ومراجعة نهاية الشهر',
      ],
    },
    setup: {
      title: 'خدمات إعداد الموقع الاختيارية',
      subtitle: 'كل خطة في Schedulaa تتضمن أداة بناء الموقع. يمكنك بناء الموقع بنفسك أو ترك فريقنا يقوم بإعداده لك.',
      note: 'يتطلب اشتراك Schedulaa فعال. شراء النطاق غير مشمول. يمكننا مساعدتك في ربط النطاق.',
      basicPriceNote: 'إعداد اختياري لمرة واحدة',
      growthPriceNote: 'إعداد اختياري لمرة واحدة',
      premiumPriceNote: 'إعداد لمرة واحدة وفق نطاق يتم تحديده',
      basicBestFor: 'مناسب للمواقع البسيطة حتى 5 صفحات.',
      growthBestFor: 'مناسب لأعمال الخدمات التي تحتاج موقعًا أكثر اكتمالًا مع الخدمات والمعرض والمراجعات والمنتجات أو صفحات طلب التسعير.',
      premiumBestFor: 'مناسب للمواقع الأكبر، وترحيل المحتوى، والتخصيص الأعمق.',
      basicDescription: 'إعداد سريع بهوية العلامة التجارية للأعمال التي تريد من فريقنا تجهيز الموقع لها.',
      growthDescription: 'توصيتنا الأساسية للأعمال التي تريد موقع مبيعات أقوى، ومحتوى أغنى، والتقاط leads بشكل أفضل.',
      premiumDescription: 'للأعمال التي لديها محتوى أكبر، وصفحات أكثر، واحتياج أكبر إلى setup.',
      basicIncludes: ['إعداد القالب', 'تطبيق الشعار والألوان والهوية', 'حتى 5 صفحات', 'إعداد نموذج booking أو contact أو quote', 'دعم النشر', 'جولة مراجعة واحدة'],
      growthIncludes: ['إعداد موقع بهوية كاملة', 'حتى 10 صفحات', 'إعداد الخدمات والمنتجات', 'صفحات المعرض والمشاريع والمراجعات والتواصل', 'تدفق طلب التسعير أو التقاط العملاء المحتملين', 'SEO أساسي وإعداد المشاركة الاجتماعية', 'دعم ربط النطاق', 'جولتا مراجعة'],
      premiumIncludes: ['كل ما في Growth', 'ترحيل محتوى أكبر', 'Landing pages إضافية', 'تخصيص أكثر للتخطيط', 'دعم تحسين النصوص', '3 جولات مراجعة'],
      basicCta: 'شراء Basic Website Setup',
      growthCta: 'التحدث مع المبيعات حول Growth Setup',
      premiumCta: 'التحدث مع المبيعات حول Premium Setup',
    },
    quoteToInvoice: {
      badge: 'العمليات المالية',
      title: 'مناسب لعمليات من العرض إلى الفاتورة',
      subtitle: 'يساعد Schedulaa Business شركات الخدمات على إدارة الأعمال ذات السعر المتغير من أول طلب حتى التقدير وأمر العمل والتقرير الميداني والفاتورة وتقارير نهاية الشهر.',
      bullets: [
        'استقبل طلبات التسعير للأعمال ذات السعر المتغير',
        'حوّل الطلبات إلى تقديرات وفواتير',
        'أنشئ أوامر العمل ووزّع المهام',
        'راجع التقارير الميدانية قبل اعتماد المواد أو الفواتير',
        'تتبّع المصروفات والمشتريات والمخزون والمورّدين',
        'حضّر تقارير الربحية وملخص الضرائب ونهاية الشهر',
      ],
      primaryCtaLabel: 'عرض خطة Business',
      secondaryCtaLabel: 'تحدث مع المبيعات',
    },
    comparison: {
      headers: { feature: 'الميزة', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'الأنسب لـ',
      bestForValues: {
        starter: 'موقع بسيط، booking، وكتالوج خدمات',
        pro: 'الفرق التي تحتاج scheduling ومسارات عمل للموظفين',
        business: 'عمليات من العرض إلى الفاتورة وتقارير جاهزة للتسليم المالي',
      },
      businessFinanceSection: 'العمليات المالية',
      businessFinanceRows: ['طلبات التسعير', 'التقديرات', 'أوامر العمل', 'التقارير الميدانية', 'موافقات مراجعة المدير', 'المصروفات والمشتريات', 'المخزون / المواد', 'المورّدون', 'تقارير الربحية', 'ملخص الضرائب', 'مراجعة نهاية الشهر'],
    },
    planFinder: planFinderAr,
  },
  pt: {
    planPositioning: {
      starter: 'Site simples, reservas e vendas básicas.',
      pro: 'Gerencie as operações do dia a dia em um único sistema.',
      business: 'Feito para operações de orçamento a faturação e fluxos prontos para finanças.',
      businessDescription: 'Para empresas de serviços que gerenciam solicitações de orçamento, ordens de trabalho, faturas, despesas, inventário e relatórios.',
    },
    businessFinance: {
      heading: 'Finanças operacionais',
      bullets: [
        'Solicitações de orçamento e entrada de trabalhos com preço variável',
        'Estimativas e fluxo de aprovação do cliente',
        'Ordens de trabalho e atribuição de tarefas',
        'Relatórios de campo com revisão do gerente',
        'Faturas, despesas e compras',
        'Materiais, inventário e acompanhamento de fornecedores',
        'Rentabilidade, resumo fiscal e fechamento de fim de mês',
      ],
    },
    setup: {
      title: 'Serviços opcionais de configuração web',
      subtitle: 'Todos os planos da Schedulaa incluem o construtor de sites. Você pode montar o site sozinho ou deixar nossa equipe configurar para você.',
      note: 'Requer uma assinatura ativa da Schedulaa. A compra do domínio não está incluída. Podemos ajudar a conectar o domínio.',
      basicPriceNote: 'Setup opcional de pagamento único',
      growthPriceNote: 'Setup opcional de pagamento único',
      premiumPriceNote: 'Setup de pagamento único com escopo definido',
      basicBestFor: 'Ideal para sites simples com até 5 páginas.',
      growthBestFor: 'Ideal para empresas de serviços que precisam de um site mais completo com serviços, galeria, avaliações, produtos ou páginas de orçamento.',
      premiumBestFor: 'Ideal para sites maiores, migração de conteúdo e personalização mais profunda.',
      basicDescription: 'Uma configuração rápida e com branding para empresas que querem que nossa equipe prepare o site.',
      growthDescription: 'Nossa principal recomendação para empresas que querem um site comercial mais forte, mais conteúdo e melhor captura de leads.',
      premiumDescription: 'Para empresas com bibliotecas maiores de conteúdo, mais páginas e necessidade de setup mais intenso.',
      basicIncludes: ['Configuração de template', 'Aplicação de logo, cores e branding', 'Até 5 páginas', 'Configuração de formulário de booking, contact ou quote', 'Suporte de publicação', '1 rodada de revisão'],
      growthIncludes: ['Setup completo com branding', 'Até 10 páginas', 'Configuração de serviços e produtos', 'Galeria, projetos, avaliações e páginas de contacto', 'Fluxo de solicitação de orçamento ou captação de leads', 'SEO básico e partilha social', 'Suporte para conexão de domínio', '2 rodadas de revisão'],
      premiumIncludes: ['Tudo do Growth', 'Migração de conteúdo maior', 'Landing pages adicionais', 'Mais personalização de layout', 'Suporte para refinamento de copy', '3 rodadas de revisão'],
      basicCta: 'Comprar Basic Website Setup',
      growthCta: 'Falar com vendas sobre Growth Setup',
      premiumCta: 'Falar com vendas sobre Premium Setup',
    },
    quoteToInvoice: {
      badge: 'Finanças operacionais',
      title: 'Feito para operações de orçamento a faturação',
      subtitle: 'Schedulaa Business ajuda empresas de serviços a gerenciar trabalhos com preço variável desde a primeira solicitação até a estimativa, a ordem de trabalho, o relatório de campo, a fatura e os relatórios de fim de mês.',
      bullets: [
        'Capture solicitações de orçamento para trabalhos com preço variável',
        'Converta solicitações em estimativas e faturas',
        'Crie ordens de trabalho e atribua tarefas',
        'Revise relatórios de campo antes de fechar materiais ou faturação',
        'Acompanhe despesas, compras, inventário e fornecedores',
        'Prepare relatórios de rentabilidade, resumo fiscal e fim de mês',
      ],
      primaryCtaLabel: 'Ver plano Business',
      secondaryCtaLabel: 'Falar com vendas',
    },
    comparison: {
      headers: { feature: 'Recurso', starter: 'Starter', pro: 'Pro', business: 'Business' },
      bestForLabel: 'Melhor para',
      bestForValues: {
        starter: 'Site simples, booking e catálogos de serviços',
        pro: 'Equipes que precisam de scheduling e fluxos para funcionários',
        business: 'Operações de orçamento a faturação e relatórios prontos para finanças',
      },
      businessFinanceSection: 'Finanças operacionais',
      businessFinanceRows: ['Solicitações de orçamento', 'Estimativas', 'Ordens de trabalho', 'Relatórios de campo', 'Aprovações de revisão do gerente', 'Despesas e compras', 'Inventário / materiais', 'Fornecedores', 'Relatórios de rentabilidade', 'Resumo fiscal', 'Fechamento de fim de mês'],
    },
    planFinder: planFinderPt,
  },
};

const buildComparisonSections = (source: PricingSource, copy: LocaleCopy): ComparisonSection[] => {
  const rows = source.comparison.rows;
  const yes = source.comparison.values.yes;
  const dash = source.comparison.values.dash;
  const businessHours = source.comparison.values.businessHours;
  const always = source.comparison.values.always;
  return [
    {
      section: rows.website.section,
      items: [
        { label: rows.website.builder, starter: yes, pro: yes, business: yes },
        { label: rows.website.customDomain, starter: yes, pro: yes, business: yes },
        { label: rows.website.publicBooking, starter: yes, pro: yes, business: yes },
        { label: rows.website.embedded, starter: yes, pro: yes, business: yes },
        { label: rows.website.branding, starter: dash, pro: dash, business: yes },
      ],
    },
    {
      section: rows.booking.section,
      items: [
        { label: rows.booking.online, starter: yes, pro: yes, business: yes },
        { label: rows.booking.reschedule, starter: yes, pro: yes, business: yes },
        { label: rows.booking.multi, starter: yes, pro: yes, business: yes },
        { label: rows.booking.staffScheduling, starter: dash, pro: yes, business: yes },
        { label: rows.booking.shiftSwaps, starter: dash, pro: yes, business: yes },
        { label: rows.booking.bulk, starter: dash, pro: dash, business: yes },
      ],
    },
    {
      section: rows.time.section,
      items: [
        { label: rows.time.clock, starter: dash, pro: yes, business: yes },
        { label: rows.time.breakPolicy, starter: dash, pro: yes, business: yes },
        { label: rows.time.staggered, starter: dash, pro: yes, business: yes },
        { label: rows.time.ipHints, starter: dash, pro: yes, business: yes },
        { label: rows.time.overtime, starter: dash, pro: yes, business: yes },
      ],
    },
    {
      section: rows.payroll.section,
      items: [
        { label: rows.payroll.processing, starter: dash, pro: yes, business: yes },
        { label: rows.payroll.holiday, starter: dash, pro: yes, business: yes },
        { label: rows.payroll.payslip, starter: dash, pro: yes, business: yes },
        { label: rows.payroll.exports, starter: dash, pro: dash, business: yes },
        { label: rows.payroll.invoicing, starter: dash, pro: yes, business: yes },
      ],
    },
    {
      section: copy.comparison.businessFinanceSection,
      items: copy.comparison.businessFinanceRows.map((label) => ({
        label,
        starter: dash,
        pro: dash,
        business: yes,
      })),
    },
    {
      section: rows.compliance.section,
      items: [
        { label: rows.compliance.revenueReports, starter: yes, pro: yes, business: yes },
        { label: rows.compliance.exports, starter: yes, pro: yes, business: yes },
        { label: rows.compliance.w2, starter: dash, pro: dash, business: yes },
        { label: rows.compliance.t4, starter: dash, pro: dash, business: yes },
        { label: rows.compliance.audit, starter: dash, pro: dash, business: yes },
      ],
    },
    {
      section: rows.analytics.section,
      items: [
        { label: rows.analytics.revenueDash, starter: yes, pro: yes, business: yes },
        { label: rows.analytics.utilization, starter: dash, pro: yes, business: yes },
        { label: rows.analytics.segmentation, starter: dash, pro: yes, business: yes },
        { label: rows.analytics.multiLocation, starter: dash, pro: dash, business: yes },
      ],
    },
    {
      section: rows.automation.section,
      items: [
        { label: rows.automation.notifications, starter: yes, pro: yes, business: yes },
        { label: rows.automation.campaigns, starter: dash, pro: yes, business: yes },
        { label: rows.automation.zapier, starter: dash, pro: yes, business: yes },
        { label: rows.automation.workflows, starter: dash, pro: yes, business: yes },
      ],
    },
    {
      section: rows.hiring.section,
      items: [
        { label: rows.hiring.jobs, starter: dash, pro: yes, business: yes },
        { label: rows.hiring.resume, starter: dash, pro: yes, business: yes },
        { label: rows.hiring.onboarding, starter: dash, pro: yes, business: yes },
        { label: rows.hiring.handoff, starter: dash, pro: yes, business: yes },
      ],
    },
    {
      section: rows.scale.section,
      items: [
        { label: rows.scale.seatsIncluded, starter: rows.scale.starterSeats, pro: rows.scale.proSeats, business: rows.scale.businessSeats },
        { label: rows.scale.additionalSeats, starter: dash, pro: rows.scale.seatPrice, business: rows.scale.seatPrice },
        { label: rows.scale.multiLocation, starter: rows.scale.starterLocations, pro: rows.scale.proLocations, business: rows.scale.businessLocations },
        { label: rows.scale.roleAccess, starter: rows.scale.starterAccess, pro: rows.scale.proAccess, business: rows.scale.businessAccess },
        { label: rows.scale.branchPermissions, starter: dash, pro: dash, business: yes },
      ],
    },
    {
      section: rows.support.section,
      items: [
        { label: rows.support.standard, starter: yes, pro: yes, business: yes },
        { label: rows.support.priority, starter: dash, pro: businessHours, business: always },
        { label: rows.support.audit, starter: dash, pro: dash, business: yes },
      ],
    },
  ];
};

export const getPricingExperience = (locale: AppLocale | string | null | undefined, pricingSource: PricingSource): PricingExperienceContent => {
  const localeKey = toPricingContentLocale(locale) as LocaleKey;
  const copy = localeCopy[localeKey] || localeCopy.en;
  const planList = pricingSource.plans.table.list || [];
  const planMap = new Map(planList.map((plan) => [plan.key, plan]));
  const starter = planMap.get('starter') || planList[0];
  const pro = planMap.get('pro') || planList[1];
  const business = planMap.get('business') || planList[2];

  if (!starter || !pro || !business) {
    throw new Error(`Pricing source is missing required plan entries for locale ${localeKey}`);
  }

  const businessFeatureList = Array.isArray(business.features) ? business.features : [];
  const businessFeatures: PlanFeature[] = [];
  const firstBusinessFeature = businessFeatureList[0];
  if (firstBusinessFeature) {
    businessFeatures.push(firstBusinessFeature);
  }
  businessFeatures.push({ type: 'heading', text: copy.businessFinance.heading });
  copy.businessFinance.bullets.forEach((item) => businessFeatures.push(item));
  businessFeatureList.slice(1).forEach((item) => businessFeatures.push(item));

  return {
    subscriptionPlans: [
      {
        ...starter,
        price: EXACT_PRICES.starter,
        positioning: copy.planPositioning.starter,
        trialNote: TRIAL_NOTE,
        ctaLabel: TRIAL_CTA,
      },
      {
        ...pro,
        price: EXACT_PRICES.pro,
        positioning: copy.planPositioning.pro,
        trialNote: TRIAL_NOTE,
        ctaLabel: TRIAL_CTA,
      },
      {
        ...business,
        price: EXACT_PRICES.business,
        positioning: copy.planPositioning.business,
        description: copy.planPositioning.businessDescription,
        trialNote: TRIAL_NOTE,
        ctaLabel: TRIAL_CTA,
        features: businessFeatures,
      },
    ],
    websiteSetupServices: {
      title: copy.setup.title,
      subtitle: copy.setup.subtitle,
      note: copy.setup.note,
      items: [
        {
          key: 'basic',
          name: 'Basic Website Setup',
          price: EXACT_PRICES.basic,
          priceNote: copy.setup.basicPriceNote,
          bestFor: copy.setup.basicBestFor,
          description: copy.setup.basicDescription,
          includes: copy.setup.basicIncludes,
          ctaLabel: copy.setup.basicCta,
          ctaMode: 'checkout',
        },
        {
          key: 'growth',
          name: 'Growth Website Setup',
          price: EXACT_PRICES.growth,
          priceNote: copy.setup.growthPriceNote,
          bestFor: copy.setup.growthBestFor,
          description: copy.setup.growthDescription,
          includes: copy.setup.growthIncludes,
          ctaLabel: copy.setup.growthCta,
          ctaMode: 'contact',
        },
        {
          key: 'premium',
          name: 'Premium Website Setup',
          price: EXACT_PRICES.premium,
          priceNote: copy.setup.premiumPriceNote,
          bestFor: copy.setup.premiumBestFor,
          description: copy.setup.premiumDescription,
          includes: copy.setup.premiumIncludes,
          ctaLabel: copy.setup.premiumCta,
          ctaMode: 'contact',
        },
      ],
    },
    quoteToInvoiceSection: copy.quoteToInvoice,
    comparison: {
      title: pricingSource.comparison.title,
      subtitle: pricingSource.comparison.subtitle,
      headers: copy.comparison.headers,
      rows: {
        price: {
          label: pricingSource.comparison.rows.price.label,
          starter: EXACT_PRICES.starter,
          pro: EXACT_PRICES.pro,
          business: EXACT_PRICES.business,
        },
        bestFor: {
          label: copy.comparison.bestForLabel,
          starter: copy.comparison.bestForValues.starter,
          pro: copy.comparison.bestForValues.pro,
          business: copy.comparison.bestForValues.business,
        },
      },
      sections: buildComparisonSections(pricingSource, copy),
    },
    planFinder: copy.planFinder,
  };
};

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
