import { websiteBuilderPage as websiteBuilderPageEn } from './config';

const featureCards = [
  { title: '拖拽式建站', body: '无需代码，几分钟内完成页面、图集、评价与预约入口。' },
  { title: '内置 Stripe 支付', body: '从第一天开始支持定金、全额支付与绑卡。' },
  { title: '免费域名 + SSL 托管', body: '可绑定自有域名或使用 schedulaa.site，SSL 自动启用。' },
  { title: '清晰的数据分析', body: '在同一面板查看访问、预约与收入，也可连接 Google Analytics。' },
  { title: '响应式行业模板', body: '提供沙龙、教培、教练、诊所等行业模板。' },
  { title: '客户数据安全', body: '基于角色权限、加密存储与 SOC2-ready 流程保护数据。' },
];

const howToSteps = [
  { title: '创建 Schedulaa 账号', description: '两分钟内免费开始，首次发布无需信用卡。' },
  { title: '选择匹配品牌的模板', description: '按行业选择现代化模板，移动端与桌面端均适配。' },
  { title: '通过拖拽模块自定义页面', description: '可直接修改文案、主视觉、服务项与评价内容。' },
  { title: '连接 Stripe 与预约流程', description: '启用支付、绑卡与在线预约，实现一站式转化。' },
  { title: '绑定域名并查看分析', description: '带 SSL 上线，并依据内置 SEO 建议持续优化。' },
];

const faqs = [
  { question: 'Schedulaa 适合做小企业免费建站吗？', answer: '是的。可在 schedulaa.site 免费设计并发布首个网站。' },
  { question: '未订阅前网站能保留吗？', answer: '可以。每个账号都提供免费站点路径，可先发布后升级。' },
  { question: '客户可以直接在网站预约吗？', answer: '可以。模板内置预约组件，访客可选择服务、员工并完成支付。' },
  { question: '网站构建器支持 Stripe 吗？', answer: '支持。一键连接即可收款、保存支付方式并同步结算。' },
  { question: '可以使用自己的域名吗？', answer: '可以。支持自定义域名，SSL 证书自动配置。' },
  { question: '适用于沙龙、导师和教练吗？', answer: '适用。提供行业模板与内容模块，可快速个性化。' },
  { question: '是否提供代建服务？', answer: '提供。Website Design Service 由我们团队收集需求并完成设计与上线。' },
];

const resourceHighlights = [
  {
    title: '分步操作指南',
    body: '提供页面搭建、预约流程、Stripe 开通与域名切换的完整文档。',
    links: [
      { label: '查看文档', href: '/docs#website-builder' },
      { label: '下载站点地图', href: '/sitemap.xml' },
    ],
  },
  {
    title: '索引友好结构',
    body: '自动生成 canonical、Open Graph 与 sitemap 更新，提升抓取效率。',
    links: [
      { label: '查看 SEO 清单', href: '/docs#seo' },
      { label: '联系上线团队', href: '/contact' },
    ],
  },
  {
    title: '高转化模板',
    body: '工作室、诊所与招聘团队可在无开发资源下快速上线新页面。',
    links: [
      { label: '查看行业方案', href: '/booking' },
      { label: '预约演示讲解', href: '/contact' },
    ],
  },
];

export const websiteBuilderPage = {
  ...websiteBuilderPageEn,
  meta: {
    ...websiteBuilderPageEn.meta,
    title: '小型企业网站构建器 - 免费域名与托管 | Schedulaa',
    description:
      '使用 Schedulaa 免费网站构建器搭建企业官网：免费站点地址、支持自定义域名，也可选择代建服务。',
    og: {
      ...websiteBuilderPageEn.meta.og,
      title: '小型企业网站构建器 - Schedulaa',
      description: '通过预约、Stripe 与分析能力快速上线企业网站；可免费启动或选择代建。',
    },
  },
  hero: {
    ...websiteBuilderPageEn.hero,
    badge: '面向小型企业的免费网站构建器',
    title: '小型企业网站构建器（含免费托管）',
    subtitle:
      '在同一平台搭建响应式网站并接入预约、Stripe 支付和分析。每个账号都包含免费网站入口。',
    primaryCta: { ...websiteBuilderPageEn.hero.primaryCta, label: '免费创建网站' },
    secondaryCta: { ...websiteBuilderPageEn.hero.secondaryCta, label: '查看预约功能' },
  },
  sections: [
    { overline: '核心能力', title: '在一个工作流中完成搭建、发布与变现', items: featureCards },
    { overline: '资源支持', title: '文档、SEO 与上线支持', items: resourceHighlights },
  ],
  stepsTitle: '如何在 Schedulaa 上线网站',
  steps: howToSteps,
  faqTitle: '网站构建器常见问题',
  faq: faqs,
  cta: {
    ...websiteBuilderPageEn.cta,
    overline: '准备上线了吗？',
    title: '立即创建免费网站并接入预约',
    body: '先快速上线，后续按需扩展自动化与多门店能力。',
    primary: { ...websiteBuilderPageEn.cta.primary, label: '免费开始' },
    secondary: { ...websiteBuilderPageEn.cta.secondary, label: '联系团队' },
  },
};
