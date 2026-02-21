import {
  workforcePage as workforcePageEn,
  industriesPage as industriesPageEn,
  statusPage,
  roadmapPage,
  demoPage,
  contactPage,
  supportPage,
  zapierPage as zapierPageEn,
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

export const industriesPage = {
  ...industriesPageEn,
  meta: {
    ...industriesPageEn.meta,
    title: '行业目录 | 按行业浏览 Schedulaa 网站',
    description:
      '按行业查看 Schedulaa 工作流：沙龙、诊所、健身工作室、法律服务等，在同一平台完成排班、薪资与商业流程。',
  },
  hero: {
    ...industriesPageEn.hero,
    badge: '行业',
    title: '按行业浏览',
    subtitle:
      '选择行业，查看企业如何使用 Schedulaa 完成预约、薪资、员工运营、网站与交易流程。',
    primaryCta: { ...industriesPageEn.hero.primaryCta, label: '查看预约能力' },
    secondaryCta: { ...industriesPageEn.hero.secondaryCta, label: '联系团队' },
  },
  sections: [
    {
      title: '热门行业场景',
      items: [
        { title: '沙龙与水疗', body: '实时技师预约、消费小费与留存营销。' },
        { title: '医疗门诊', body: '排班、提醒与文档协同流程。' },
        { title: '家教与教育', body: '课程预约、周期排程与出勤轨迹。' },
        { title: '创意工作室', body: '从预约到薪资的客户旅程自动化。' },
        { title: '法律与专业服务', body: '结构化受理、排班与安全记录。' },
        { title: '多门店团队', body: '按分店管理人力、薪资与分析。' },
      ],
    },
  ],
};

export const zapierPage = {
  ...zapierPageEn,
  meta: {
    ...zapierPageEn.meta,
    title: 'Schedulaa 的 Zapier — 自动化预约、排班、休息合规与薪资流程',
    description:
      '通过 Zapier 将 Schedulaa 连接到 6000+ 应用。传递预约、班次、timeclock、休息、PTO、onboarding 与薪资数据。',
  },
  hero: {
    ...zapierPageEn.hero,
    badge: 'Zapier 自动化',
    title: '用 Zapier 自动化每一次预约、班次、休息与薪资节点',
    subtitle:
      'Schedulaa 会将预约、排班、timeclock、休息合规、PTO、onboarding 与薪资明细发送到 Zapier，同时动作也可在 Schedulaa 中创建预约、员工与班次。',
    primaryCta: { ...zapierPageEn.hero.primaryCta, label: '打开 Zapier 设置' },
    secondaryCta: { ...zapierPageEn.hero.secondaryCta, label: '查看演示' },
  },
  sections: [
    {
      title: '实时触发器分组',
      items: [
        { title: '预约事件', body: 'booking.created, booking.updated, booking.cancelled, booking.no_show, public_booking.created' },
        { title: '排班与班次', body: 'shift.published, shift.updated, swap.requested, swap.approved, swap.rejected' },
        { title: 'Timeclock 与休息合规', body: 'timeclock.clock_in, timeclock.clock_out, break.started, break.ended, break.missed' },
        { title: '请假、onboarding 与文档', body: 'leave.requested, leave.approved, leave.denied, onboarding.started, onboarding.document_signed' },
        { title: '薪资事件', body: 'payroll.ready, payroll.finalized, payroll.details' },
      ],
    },
    {
      title: '实时动作',
      points: ['create_booking', 'create_employee', 'create_shift / update_shift', 'attach_document'],
    },
  ],
};

export { industriesPage, statusPage, roadmapPage, demoPage, contactPage, supportPage, zapierPage };
