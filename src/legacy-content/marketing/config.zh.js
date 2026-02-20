import { marketingPages as marketingPagesEn } from './config';

const marketingCta = {
  overline: '随时可启动',
  title: '发起下一轮营销活动并实时追踪结果',
  body: 'Schedulaa 将活动、分群、分析与导出统一在一个运营流程中。',
  primary: { label: '开始活动', href: '/register' },
  secondary: { label: '登录', href: '/login' },
};

const marketingSecondaryLinks = [
  { label: '客户导出总览', href: '/marketing/clients-360#exports' },
  { label: '查看预约能力', href: '/booking' },
  { label: '网站构建器', href: '/website-builder' },
];

const hubEn = marketingPagesEn.hub;

const hub = {
  ...hubEn,
  meta: {
    ...hubEn.meta,
    title: '服务型企业营销与分析平台 | Schedulaa',
    description: '运行定向邮件活动、导出客户列表，并在高级分析中跟踪核心 KPI。',
  },
  hero: {
    ...hubEn.hero,
    badge: '生命周期与 KPI',
    title: '营销与分析——增长、留存与客户洞察',
    subtitle:
      'Schedulaa 提供开箱即用活动、生命周期分群、客户导出与高级分析。从唤回、VIP 到收入与复购指标一体化管理。',
    points: [
      '内置活动：win-back、VIP、周年关怀、新服务推广等。',
      '生命周期分群支持阈值自定义。',
      '企业级分析覆盖预约、收入、留存、小费与绑卡表现。',
    ],
    primaryCta: { ...hubEn.hero.primaryCta, label: '开始活动' },
    secondaryCta: { ...hubEn.hero.secondaryCta, label: '登录' },
  },
  sections: [
    {
      overline: '活动',
      title: '今天即可上线的活动模板',
      body: '使用预置流程、分群过滤、优惠码前缀与有效期窗口。每个活动都支持 dry-run 与收件人数上限。',
      points: [
        '营业公告：节假日营业时间、门店通知、政策更新。',
        'Win-Back：针对回访间隔拉长的客户。',
        'Skipped Rebook Nudge：未复约客户自动跟进。',
        'VIP 活动：面向高价值客户的专属优惠。',
        '周年活动：基于首次到店月份触发。',
        '新服务推广活动。',
        'No-Show Recovery 与 Add-on Upsell。',
      ],
      buttons: [{ label: '打开活动构建器', href: '/marketing/email-campaigns' }],
    },
    {
      overline: '分群',
      title: '开箱即用的生命周期分群',
      body: '使用生命周期 cohort 聚焦留存动作，并按业务节奏调整阈值。',
      points: [
        'VIP、Loyal、New、Active、At-Risk、Lost 可参数化配置。',
        'At-Risk 基于客户个体回访间隔倍数；Lost 基于长期未活跃。',
        '分群结果自动用于活动、分析与导出。',
      ],
      buttons: [{ label: '查看 Client 360°', href: '/marketing/clients-360' }],
    },
  ],
  lists: [
    {
      overline: '企业级分析',
      title: '分析套件关键能力',
      intro: '支持按时间范围、时区和分组（日/周/月）快速刷新。',
      items: [
        {
          icon: 'analytics',
          label: 'KPI',
          title: '核心指标',
          body: '预约、取消、no-show、活跃客户、提前预约时长、客单价、收入、小费、退款等。',
        },
        {
          icon: 'timeline',
          label: '趋势',
          title: '结构与变化',
          body: '按天/小时分布、LTV 分位、预约与收入趋势、员工利用率、高收入服务。',
        },
        {
          icon: 'insights',
          label: '留存',
          title: '稳定性与复购',
          body: '到店率、30/60/90 天复约率、复约间隔、取消窗口、退款率与绑卡成功率。',
        },
      ],
    },
  ],
  highlights: [
    {
      overline: '客户洞察',
      title: 'Client 360° 与行为分析',
      content: '按部门/员工过滤，按姓名/邮箱/电话搜索，并打开客户 360 面板查看关键行为与 KPI。',
      actions: [{ label: '打开 Client 360°', href: '/marketing/clients-360', variant: 'outlined' }],
    },
    {
      overline: '导出',
      title: '秒级导出客户 CSV',
      content: '支持 seen in last N days、min visits、require email、limit 等过滤条件导出。',
      actions: [{ label: '查看导出流程', href: '/marketing/clients-360#exports', variant: 'contained' }],
    },
  ],
  faqHeading: '常见问题',
  faqTitle: '营销与分析相关问题',
  faqIntro: '以下回答基于 Schedulaa 当前线上能力。',
  faq: [
    {
      question: '活动收件人数可以限制吗？',
      answer: '可以。每个活动都支持 Limit，并可先 dry-run 预览收件名单。',
    },
    {
      question: '生命周期分群如何更新？',
      answer: '系统会根据预约历史自动刷新，支持按业务节奏调整阈值参数。',
    },
    {
      question: '分析数据支持导出吗？',
      answer: '支持。高级分析可导出 CSV，客户 cohort 也可独立导出。',
    },
  ],
  cta: marketingCta,
  secondaryLinks: marketingSecondaryLinks,
};

export const marketingPages = {
  ...marketingPagesEn,
  hub,
};
