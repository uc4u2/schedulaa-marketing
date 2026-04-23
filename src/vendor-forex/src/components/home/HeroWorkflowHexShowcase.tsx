'use client';

import bookingImg from '@public/images/marketing/showcase/clients-pick2.png';
import schedulingImg from '@public/images/marketing/shift-pre.png';
import timeTrackingImg from '@public/images/marketing/hero/module-3-mobile.png';
import payrollImg from '@public/images/marketing/payroll-manage.png';
import reportsImg from '@public/images/marketing/hero/module-5-mobile.png';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { AppLocale } from '@/utils/locale';

type WorkflowNode = {
  id: string;
  label: string;
  image: StaticImageData;
  alt: string;
};

const workflowNodesEn: WorkflowNode[] = [
  { id: 'time-tracking', label: 'Time Tracking', image: timeTrackingImg, alt: 'Time tracking workflow preview' },
  { id: 'scheduling', label: 'Scheduling', image: schedulingImg, alt: 'Scheduling workflow preview' },
  { id: 'booking', label: 'Booking', image: bookingImg, alt: 'Booking workflow preview' },
  { id: 'payroll', label: 'Payroll', image: payrollImg, alt: 'Payroll workflow preview' },
  { id: 'reports', label: 'Reports', image: reportsImg, alt: 'Reports workflow preview' },
];

const mapNodesByLocale = (locale: AppLocale): WorkflowNode[] => {
  const labelsByLocale: Record<string, Record<string, { label: string; alt: string }>> = {
    fa: {
      booking: { label: 'رزرو', alt: 'پیش‌نمایش فرآیند رزرو' },
      scheduling: { label: 'زمان‌بندی', alt: 'پیش‌نمایش فرآیند زمان‌بندی' },
      'time-tracking': { label: 'ردیابی زمان', alt: 'پیش‌نمایش ردیابی زمان' },
      payroll: { label: 'حقوق', alt: 'پیش‌نمایش فرآیند حقوق' },
      reports: { label: 'گزارش‌ها', alt: 'پیش‌نمایش گزارش‌ها' },
    },
    ru: {
      booking: { label: 'Бронирование', alt: 'Предпросмотр процесса бронирования' },
      scheduling: { label: 'Планирование', alt: 'Предпросмотр процесса планирования' },
      'time-tracking': { label: 'Учет времени', alt: 'Предпросмотр учета времени' },
      payroll: { label: 'Зарплата', alt: 'Предпросмотр процесса зарплаты' },
      reports: { label: 'Отчеты', alt: 'Предпросмотр отчетов' },
    },
    zh: {
      booking: { label: '预约', alt: '预约流程预览' },
      scheduling: { label: '排班', alt: '排班流程预览' },
      'time-tracking': { label: '工时追踪', alt: '工时追踪预览' },
      payroll: { label: '薪资', alt: '薪资流程预览' },
      reports: { label: '报表', alt: '报表预览' },
    },
    es: {
      booking: { label: 'Reservas', alt: 'Vista previa del flujo de reservas' },
      scheduling: { label: 'Planificacion', alt: 'Vista previa del flujo de planificacion' },
      'time-tracking': { label: 'Control horario', alt: 'Vista previa del control horario' },
      payroll: { label: 'Nomina', alt: 'Vista previa del flujo de nomina' },
      reports: { label: 'Reportes', alt: 'Vista previa de reportes' },
    },
    fr: {
      booking: { label: 'Reservation', alt: 'Apercu du flux de reservation' },
      scheduling: { label: 'Planification', alt: 'Apercu du flux de planification' },
      'time-tracking': { label: 'Suivi du temps', alt: 'Apercu du suivi du temps' },
      payroll: { label: 'Paie', alt: 'Apercu du flux de paie' },
      reports: { label: 'Rapports', alt: 'Apercu des rapports' },
    },
    de: {
      booking: { label: 'Buchung', alt: 'Vorschau des Buchungsablaufs' },
      scheduling: { label: 'Planung', alt: 'Vorschau des Planungsablaufs' },
      'time-tracking': { label: 'Zeiterfassung', alt: 'Vorschau der Zeiterfassung' },
      payroll: { label: 'Payroll', alt: 'Vorschau des Payroll-Ablaufs' },
      reports: { label: 'Berichte', alt: 'Vorschau der Berichte' },
    },
    ar: {
      booking: { label: 'الحجوزات', alt: 'معاينة سير الحجوزات' },
      scheduling: { label: 'الجدولة', alt: 'معاينة سير الجدولة' },
      'time-tracking': { label: 'تتبع الوقت', alt: 'معاينة تتبع الوقت' },
      payroll: { label: 'الرواتب', alt: 'معاينة سير الرواتب' },
      reports: { label: 'التقارير', alt: 'معاينة التقارير' },
    },
    pt: {
      booking: { label: 'Reservas', alt: 'Previa do fluxo de reservas' },
      scheduling: { label: 'Agendamento', alt: 'Previa do fluxo de agendamento' },
      'time-tracking': { label: 'Controle de tempo', alt: 'Previa do controle de tempo' },
      payroll: { label: 'Folha', alt: 'Previa do fluxo de folha' },
      reports: { label: 'Relatorios', alt: 'Previa de relatorios' },
    },
  };
  const labels = labelsByLocale[locale] || {};
  return workflowNodesEn.map((node) => ({ ...node, ...(labels[node.id] || {}) }));
};

const HeroWorkflowHexShowcase = ({ locale = 'en' }: { locale?: AppLocale }) => {
  const workflowNodes = mapNodesByLocale(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeNode = workflowNodes[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowNodes.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="mt-8 lg:mt-3" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="mx-auto max-w-[680px] lg:max-w-[760px] xl:max-w-[860px]">
        <div className="relative mb-4 overflow-hidden rounded-[22px] border border-white/10 bg-[#09111e]/78 px-2 py-2 shadow-[0_18px_44px_rgba(0,0,0,0.32)] backdrop-blur-md lg:mb-5 lg:px-3">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/24 to-transparent" />
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto snap-x snap-mandatory md:justify-center md:overflow-visible">
            {workflowNodes.map((node, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={node.id} className="flex snap-start items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative flex min-w-[132px] shrink-0 items-center gap-2 rounded-[16px] border px-3 py-2 text-left transition-all duration-300 lg:min-w-[148px] ${
                      isActive
                        ? 'border-cyan-200/55 bg-gradient-to-r from-cyan-300/14 via-sky-300/10 to-lime-300/8 shadow-[0_8px_22px_rgba(60,186,255,0.18)]'
                        : 'border-white/12 bg-white/[0.03] opacity-90 hover:border-white/28 hover:bg-white/[0.05] hover:opacity-100'
                    }`}
                    aria-pressed={isActive}
                    aria-label={node.label}
                  >
                    <span className={`inline-flex size-2 rounded-full ${isActive ? 'bg-cyan-200 shadow-[0_0_10px_rgba(125,211,252,0.75)]' : 'bg-white/40'}`} />
                    <span className="grid min-w-0 gap-0.5">
                      <span className={`whitespace-nowrap text-[10px] tracking-[0.12em] uppercase ${isActive ? 'text-cyan-100/80' : 'text-white/45'}`}>
                        Module {index + 1}
                      </span>
                      <span
                        className={`whitespace-nowrap text-[13px] font-semibold leading-[1.08] tracking-[-0.02em] ${
                          isActive ? 'hero-text-gradient hero-text-color-2 inline-block' : 'text-white/85'
                        }`}
                      >
                        {node.label}
                      </span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex items-center justify-center text-[11px] uppercase tracking-[0.16em] text-white/42">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1">
              {activeNode.label}
            </span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[680px] lg:max-w-[760px] xl:max-w-[860px]" style={{ transform: 'perspective(1400px) rotateX(2.2deg)' }}>
        <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-linear-[145deg,rgba(0,194,255,0.16)_0%,rgba(157,255,0,0.05)_45%,rgba(0,0,0,0.12)_100%] blur-xl" />
        <div className="pointer-events-none absolute -inset-x-8 -bottom-8 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.26)_0%,rgba(0,0,0,0)_72%)]" />
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1220]/42 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.44)] backdrop-blur before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/18 lg:p-1.5">
          <div className="relative aspect-[16/9.8] w-full overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98)_0%,rgba(248,251,255,0.99)_58%,rgba(237,244,255,0.97)_100%)] lg:aspect-[16/9.3]">
            {workflowNodes.map((node, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={node.id}
                  className="absolute inset-0 flex items-center justify-center p-5 transition-all duration-700 ease-in-out lg:p-6"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1.01) translateY(0)' : 'scale(0.995) translateY(4px)',
                    zIndex: isActive ? 2 : 1,
                  }}>
                  <Image
                    src={node.image}
                    alt={node.alt}
                    className="h-[92%] w-[92%] rounded-[18px] object-contain object-center"
                    priority={index === 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWorkflowHexShowcase;
