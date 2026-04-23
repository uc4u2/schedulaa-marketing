'use client';

import bookingImg from '@public/images/marketing/hero/module-3-booking.png';
import schedulingImg from '@public/images/marketing/hero/module-2-schedule.png';
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
  imageClassName?: string;
};

const workflowNodesEn: WorkflowNode[] = [
  {
    id: 'time-tracking',
    label: 'Time Tracking',
    image: timeTrackingImg,
    alt: 'Time tracking workflow preview',
    imageClassName: 'object-contain object-center scale-[1.02]',
  },
  {
    id: 'scheduling',
    label: 'Scheduling',
    image: schedulingImg,
    alt: 'Scheduling workflow preview',
    imageClassName: 'object-contain object-center scale-[0.96] p-3',
  },
  {
    id: 'booking',
    label: 'Booking',
    image: bookingImg,
    alt: 'Booking workflow preview',
    imageClassName: 'object-cover object-center scale-[1.12]',
  },
  {
    id: 'payroll',
    label: 'Payroll',
    image: payrollImg,
    alt: 'Payroll workflow preview',
    imageClassName: 'object-contain object-center scale-[1.06] p-1.5',
  },
  {
    id: 'reports',
    label: 'Reports',
    image: reportsImg,
    alt: 'Reports workflow preview',
    imageClassName: 'object-contain object-center scale-[1.02]',
  },
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

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowNodes.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [isPaused, workflowNodes.length]);

  return (
    <div className="mt-6 lg:mt-2" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="relative mx-auto max-w-[680px] lg:max-w-[760px] xl:max-w-[740px]" style={{ transform: 'perspective(1400px) rotateX(1.2deg)' }}>
        <div className="relative overflow-hidden rounded-[15px] border border-white/10 bg-[#09121f]/58 shadow-[0_18px_44px_rgba(0,0,0,0.28)] backdrop-blur-md before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/14">
          <div className="relative overflow-hidden border-b border-white/8 bg-[#0a1220]/62 px-2 py-2.5">
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto snap-x snap-mandatory md:justify-center md:overflow-visible">
              {workflowNodes.map((node, index) => {
                const isActive = index === activeIndex;
                return (
                  <div key={node.id} className="flex snap-start items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group relative flex min-w-[130px] shrink-0 items-center gap-2 rounded-[9px] border px-3 py-2 text-left transition-all duration-300 lg:min-w-[144px] ${
                        isActive
                          ? 'border-cyan-200/30 bg-white/[0.05] shadow-[0_4px_12px_rgba(60,186,255,0.08)]'
                          : 'border-white/8 bg-white/[0.02] opacity-90 hover:border-white/18 hover:bg-white/[0.035] hover:opacity-100'
                      }`}
                      aria-pressed={isActive}
                      aria-label={node.label}
                    >
                      <span className={`inline-flex size-2 rounded-full ${isActive ? 'bg-cyan-200 shadow-[0_0_8px_rgba(125,211,252,0.55)]' : 'bg-white/34'}`} />
                      <span className="grid min-w-0 gap-0.5">
                        <span className={`whitespace-nowrap text-[10px] tracking-[0.12em] uppercase ${isActive ? 'text-cyan-100/80' : 'text-white/42'}`}>
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
          </div>

          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.985)_0%,rgba(248,251,255,0.995)_58%,rgba(237,244,255,0.98)_100%)]">
            <div className="relative aspect-[16/8.8] w-full overflow-hidden lg:aspect-[16/8.4]">
              {workflowNodes.map((node, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={node.id}
                    className="absolute inset-0 flex items-center justify-center p-0 transition-all duration-700 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1.002) translateY(0)' : 'scale(0.998) translateY(3px)',
                      zIndex: isActive ? 2 : 1,
                    }}>
                    <Image
                      src={node.image}
                      alt={node.alt}
                      className={`h-full w-full ${node.imageClassName || 'object-contain object-center'}`}
                      priority={index === 0}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWorkflowHexShowcase;
