import { bookingPages as bookingPagesEn } from './config';

const sharedCta = {
  overline: '预约、薪资与网站一体化',
  title: '注册当天即可上线在线预约',
  body: '发布可用时段并连接 Stripe，无需插件和多工具拼接。',
  primary: { label: '免费开始', href: '/register' },
  secondary: { label: '联系团队', href: '/contact' },
};

const sharedSecondaryLinks = [
  { label: '网站构建器', href: '/website-builder' },
  { label: '营销自动化', href: '/marketing' },
  { label: '沙龙预约', href: '/booking/salon' },
  { label: '导师排课', href: '/booking/tutor' },
  { label: '医疗预约', href: '/booking/doctor' },
];

const hubEn = bookingPagesEn.hub;

const hub = {
  ...hubEn,
  meta: {
    ...hubEn.meta,
    title: '在线预约与团队排班（含支付）| Schedulaa',
    description: '支持在线预约、可用性与班次管理、智能邀请表单以及 Stripe 支付。',
  },
  hero: {
    ...hubEn.hero,
    badge: '实时可用性',
    title: '在线预约与团队排班 —— 集成 Stripe 支付',
    subtitle: 'Schedulaa 提供完整预约流程：实时时段、员工选择、团队日历、邀请与 Stripe 结算。',
    imageAlt: '客户预约流程预览',
    images: [
      { ...hubEn.hero.images[0], alt: '服务管理' },
      { ...hubEn.hero.images[1], alt: '收款流程' },
      { ...hubEn.hero.images[2], alt: '结账流程' },
      { ...hubEn.hero.images[3], alt: '员工可用性' },
    ],
    bullets: ['发布服务并展示员工实时可约时段。', '管理端统一查看班次与请假。', '支持全额、定金或绑卡支付流程。'],
    primaryCta: { ...hubEn.hero.primaryCta, label: '开始在线预约' },
    secondaryCta: { ...hubEn.hero.secondaryCta, label: '查看实时服务页面' },
  },
  featuresHeading: '团队选择 Schedulaa 的原因',
  featuresTitle: '预约、排班与支付统一在一个中心',
  featuresIntro: '从员工可用性到结账都在 Schedulaa 内完成，无需重复录入。',
  features: [
    {
      ...hubEn.features[0],
      label: '可用性',
      title: '实时时段选择',
      description: '按员工显示可用时段，让客户选择最合适的时间与服务人员。',
      linkLabel: '查看实时可用性',
    },
    {
      ...hubEn.features[1],
      label: '公开链接',
      title: '可分享的 “Book with me” 页面',
      description: '员工可发布公开预约链接，确认信息包含会议链接与改约/取消入口。',
      linkLabel: '打开公开链接设置',
    },
    {
      ...hubEn.features[2],
      label: '日历',
      title: '经理与团队日历',
      description: '在主日历中查看预约、排班覆盖与请假，支持批量调整。',
      linkLabel: '查看行业模板场景',
    },
    {
      ...hubEn.features[3],
      label: '结账',
      title: '预约时完成 Stripe 支付',
      description: '支持全额、定金与绑卡扣款，兼容优惠券、小费和附加项。',
      linkLabel: '查看支付选项',
    },
  ],
  highlights: [
    {
      ...hubEn.highlights[0],
      overline: '客户体验',
      title: '实时可约 + 员工选择',
      body: '客户可直接看到可预约日期和时段，并在同一流程选择服务人员。',
      points: ['日历清晰标记有可用时段的日期。', '员工选择器显示该时段可服务人员。'],
      links: [{ label: '体验演示日历', href: '/demo' }],
    },
    {
      ...hubEn.highlights[1],
      overline: '公开预约',
      title: '员工公开链接预约（可无支付）',
      body: '员工开启公开链接并共享，客户按本地时区选择时间并收到带改约控制的确认信息。',
      points: ['邀请与公开链接使用同一可用性逻辑。', '无需支付，适合咨询或面谈。', '公开预约自动进入 Upcoming Meetings。'],
      links: [{ label: '启用公开预约', href: '/demo' }],
    },
    {
      ...hubEn.highlights[2],
      overline: '运营',
      title: '经理日历控制班次与请假',
      body: '按部门查看预约，审批换班请求，并批量开放/关闭时间区间。',
      points: ['主日历支持按部门、员工、状态筛选。', '可批量调整时间范围且不影响已预约时段。'],
      links: [{ label: '查看团队可用性工具', href: '/booking/salon' }],
    },
  ],
  howItWorks: {
    ...hubEn.howItWorks,
    overline: '流程',
    title: 'Schedulaa 在线预约如何运作',
    intro: '从发布服务到确认支付，只需几个步骤。',
    steps: [
      { title: '发布服务与员工', description: '配置服务时长、价格并分配员工，可用时段即时更新。' },
      { title: '客户选择时间与员工', description: '客户选择日期时段并确认服务人员。' },
      { title: '结账与通知', description: '完成支付或定金后，预约与通知会同步到团队日历。' },
    ],
  },
  managerControls: {
    ...hubEn.managerControls,
    overline: '管理控制',
    title: '保持团队日历一致',
    body: '通过日历工具控制容量，同时保留员工排班灵活性。',
    points: ['主日历按部门/员工/班次筛选。', '批量关闭日期或精细调整时间段。', '同一页面审批换班与请假。'],
  },
  invitations: {
    ...hubEn.invitations,
    overline: '邀请与表单',
    title: '按行业模板发送邀请',
    body: '邀请内容可自动插入客户名与预约链接，并附加入场前问卷。',
    points: ['覆盖招聘、医疗、沙龙、教育等行业模板。', '支持 {client_name}、{booking_link} 变量。', '可设置预约后必须完成问卷。'],
  },
  checkout: {
    ...hubEn.checkout,
    overline: '客户结账',
    title: 'Stripe 驱动的灵活支付',
    body: '支持全额、定金或绑卡扣款，客户可添加小费并使用优惠券。',
    points: ['支持比例/固定小费与可选附加项。', '按公司设置支付策略（pay/deposit/capture）。', '收据与卡信息由 Stripe Connect 安全处理。'],
  },
  faqHeading: '常见问题',
  faqTitle: '预约与排班问题',
  faqIntro: '以下回答基于 Schedulaa 当前线上能力。',
  faq: [
    { question: '客户如何选择服务人员？', answer: '客户选定时间后，系统会显示该时段可服务人员供其选择。' },
    { question: '经理可以批量编辑可用性吗？', answer: '可以。支持整天关闭、前后时段关闭或保留特定时间窗。' },
    { question: '支持定金与绑卡吗？', answer: '支持。可配置 pay-now、deposit 或 card-on-file capture。' },
  ],
  cta: sharedCta,
  secondaryLinks: sharedSecondaryLinks,
};

export const bookingPages = {
  ...bookingPagesEn,
  hub,
};
