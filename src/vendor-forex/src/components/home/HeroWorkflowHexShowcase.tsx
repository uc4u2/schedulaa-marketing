'use client';

import bookingImg from '@public/images/marketing/showcase/clients-pick2.png';
import schedulingImg from '@public/images/marketing/shift-pre.png';
import timeTrackingImg from '@public/images/marketing/showcase/time-tracking.png';
import payrollImg from '@public/images/marketing/payroll-manage.png';
import reportsImg from '@public/images/marketing/showcase/manager-dashboards1.png';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { AppLocale } from '@/utils/locale';

type WorkflowNode = {
  id: string;
  label: string;
  image: StaticImageData;
  alt: string;
};

const workflowNodesEn: WorkflowNode[] = [
  { id: 'booking', label: 'Booking', image: bookingImg, alt: 'Booking workflow preview' },
  { id: 'scheduling', label: 'Scheduling', image: schedulingImg, alt: 'Scheduling workflow preview' },
  { id: 'time-tracking', label: 'Time Tracking', image: timeTrackingImg, alt: 'Time tracking workflow preview' },
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
  const progress = useMemo(() => ((activeIndex + 1) / workflowNodes.length) * 100, [activeIndex, workflowNodes.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowNodes.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="mt-[50px] lg:mt-[100px]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="mx-auto max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px]">
        <div className="relative mb-6 rounded-2xl border border-white/12 bg-[#0b1220]/60 p-3 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm lg:mb-8 lg:p-4">
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 snap-x snap-mandatory md:justify-center md:overflow-visible lg:gap-3">
            {workflowNodes.map((node, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={node.id} className="flex snap-start items-center gap-2 lg:gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group relative flex min-w-[152px] shrink-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 lg:min-w-[172px] lg:px-4 ${
                      isActive
                        ? 'border-cyan-200/65 bg-gradient-to-r from-cyan-300/16 via-sky-300/12 to-lime-300/10 shadow-[0_10px_28px_rgba(60,186,255,0.28)]'
                        : 'border-white/20 bg-gradient-to-r from-white/[0.07] to-white/[0.03] opacity-90 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/10 hover:opacity-100 hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]'
                    }`}
                    aria-pressed={isActive}
                    aria-label={node.label}
                  >
                    <span className={`inline-flex size-2 rounded-full ${isActive ? 'bg-cyan-200 shadow-[0_0_12px_rgba(125,211,252,0.95)]' : 'bg-white/55'}`} />
                    <span className="grid min-w-0 gap-0.5">
                      <span className={`whitespace-nowrap text-[11px] tracking-[0.12em] uppercase ${isActive ? 'text-cyan-100/85' : 'text-white/55'}`}>
                        Module {index + 1}
                      </span>
                      <span className={`whitespace-nowrap text-sm font-semibold tracking-tight ${isActive ? 'text-white' : 'text-white/90'}`}>
                        {node.label}
                      </span>
                    </span>
                  </button>
                  {index < workflowNodes.length - 1 ? (
                    <div className="h-px w-5 shrink-0 bg-gradient-to-r from-white/20 via-white/55 to-white/20 lg:w-6" />
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-3 h-[2px] w-full rounded-full bg-white/12">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300/85 via-blue-300/80 to-cyan-200/85 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px]" style={{ transform: 'perspective(1400px) rotateX(3deg)' }}>
        <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-linear-[145deg,rgba(0,194,255,0.22)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.12)_100%] blur-xl" />
        <div className="pointer-events-none absolute -inset-x-10 -bottom-8 h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,180,255,0.38)_0%,rgba(0,0,0,0)_72%)]" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/40 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/20 lg:p-1">
          <div className="relative aspect-[16/9.1] w-full overflow-hidden rounded-xl lg:aspect-[16/8.5]">
            {workflowNodes.map((node, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={node.id}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1.03) rotate(0.2deg)' : 'scale(1.01) rotate(-0.1deg)',
                    zIndex: isActive ? 2 : 1,
                  }}>
                  <Image src={node.image} alt={node.alt} className="h-full w-full object-cover object-top" priority={index === 0} />
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
