import {
  workforcePage as workforcePageEn,
  industriesPage,
  statusPage,
  roadmapPage,
  demoPage,
  contactPage,
  supportPage,
  zapierPage,
} from './config';

export const workforcePage = {
  ...workforcePageEn,
  meta: {
    ...workforcePageEn.meta,
    title: '员工运营指挥中心 | 工时、排班与薪资',
    description:
      '在 Schedulaa 中闭环员工运营：打卡规则、审批、可用性与薪资就绪导出统一在一个面板。',
  },
  hero: {
    ...workforcePageEn.hero,
    badge: '员工管理',
    title: '一体化员工运营中心',
    subtitle:
      'Schedulaa 已将排班、薪资与网站统一。现在工时、模板、策略审计与薪资审批也集中在同一工作台。',
    imageAlt: 'Schedulaa 工时工作区',
    images: [
      { ...workforcePageEn.hero.images[0], alt: '薪资管理' },
      { ...workforcePageEn.hero.images[1], alt: '班次管理' },
      { ...workforcePageEn.hero.images[2], alt: 'T4 生成' },
      { ...workforcePageEn.hero.images[3], alt: 'W-2 生成' },
    ],
    primaryCta: { ...workforcePageEn.hero.primaryCta, label: '免费开始' },
    secondaryCta: { ...workforcePageEn.hero.secondaryCta, label: '申请演示' },
  },
  sections: [
    {
      title: '实时打卡与策略执行',
      points: [
        '员工在 My Time 中打卡，实时计时器自动扣除休息并展示班次时间线。',
        '休息规则由管理者在模板中定义，并在员工端自动执行。',
        '每周个人摘要让工时流程更透明。',
      ],
    },
    {
      title: '管理级监督',
      points: [
        '所有工时进入审批页，主管可按部门、员工、状态筛选并审批。',
        'IP/设备提示可识别异常打卡，合规标记提示高风险班次。',
        '可批量应用休息或班次模板，快速修正多条记录。',
      ],
    },
    {
      title: '内置合规的班次模板',
      points: [
        '模板记录休息起止、时长、是否带薪与可用性规则。',
        '应用模板后，规则自动同步到班次与员工打卡界面。',
        '强制下班与逾期标记可提高薪资前审批质量。',
      ],
    },
    {
      title: '薪资就绪导出',
      points: [
        '已审批记录包含完整元数据（审批人、时间、策略引用、位置提示）。',
        '导出更干净、审计更简单，可直接用于财务处理。',
      ],
    },
  ],
  cta: {
    ...workforcePageEn.cta,
    overline: '员工管理 + 薪资一体化',
    title: '预约、排班、薪资、网站与策略化工时管理在同一平台完成。',
    body: '无需表格，无需复制粘贴，避免合规风险。',
    primary: { ...workforcePageEn.cta.primary, label: '查看工时工作区' },
    secondary: { ...workforcePageEn.cta.secondary, label: '联系销售' },
  },
};

export { industriesPage, statusPage, roadmapPage, demoPage, contactPage, supportPage, zapierPage };
