'use client';

import bookingImg from '@public/images/marketing/showcase/clients-pick2.png';
import schedulingImg from '@public/images/marketing/shift-pre.png';
import timeTrackingImg from '@public/images/marketing/showcase/time-tracking.png';
import payrollImg from '@public/images/marketing/payroll-manage.png';
import reportsImg from '@public/images/marketing/showcase/manager-dashboards1.png';
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
  { id: 'booking', label: 'Booking', image: bookingImg, alt: 'Booking workflow preview' },
  { id: 'scheduling', label: 'Scheduling', image: schedulingImg, alt: 'Scheduling workflow preview' },
  { id: 'time-tracking', label: 'Time Tracking', image: timeTrackingImg, alt: 'Time tracking workflow preview' },
  { id: 'payroll', label: 'Payroll', image: payrollImg, alt: 'Payroll workflow preview' },
  { id: 'reports', label: 'Reports', image: reportsImg, alt: 'Reports workflow preview' },
];

const mapNodesByLocale = (locale: AppLocale): WorkflowNode[] => {
  if (locale === 'fa') {
    const labels: Record<string, { label: string; alt: string }> = {
      booking: { label: 'رزرو', alt: 'پیش‌نمایش فرآیند رزرو' },
      scheduling: { label: 'زمان‌بندی', alt: 'پیش‌نمایش فرآیند زمان‌بندی' },
      'time-tracking': { label: 'ردیابی زمان', alt: 'پیش‌نمایش ردیابی زمان' },
      payroll: { label: 'حقوق', alt: 'پیش‌نمایش فرآیند حقوق' },
      reports: { label: 'گزارش‌ها', alt: 'پیش‌نمایش گزارش‌ها' },
    };
    return workflowNodesEn.map((node) => ({ ...node, ...(labels[node.id] || {}) }));
  }
  if (locale === 'ru') {
    const labels: Record<string, { label: string; alt: string }> = {
      booking: { label: 'Бронирование', alt: 'Предпросмотр процесса бронирования' },
      scheduling: { label: 'Планирование', alt: 'Предпросмотр процесса планирования' },
      'time-tracking': { label: 'Учет времени', alt: 'Предпросмотр учета времени' },
      payroll: { label: 'Зарплата', alt: 'Предпросмотр процесса зарплаты' },
      reports: { label: 'Отчеты', alt: 'Предпросмотр отчетов' },
    };
    return workflowNodesEn.map((node) => ({ ...node, ...(labels[node.id] || {}) }));
  }
  if (locale === 'zh') {
    const labels: Record<string, { label: string; alt: string }> = {
      booking: { label: '预约', alt: '预约流程预览' },
      scheduling: { label: '排班', alt: '排班流程预览' },
      'time-tracking': { label: '工时追踪', alt: '工时追踪预览' },
      payroll: { label: '薪资', alt: '薪资流程预览' },
      reports: { label: '报表', alt: '报表预览' },
    };
    return workflowNodesEn.map((node) => ({ ...node, ...(labels[node.id] || {}) }));
  }
  return workflowNodesEn;
};

const showByLocale: Record<string, string> = {
  en: 'Show',
  fa: 'نمایش',
  ru: 'Показать',
  zh: '显示',
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
  }, [isPaused]);

  return (
    <div className="mt-[50px] lg:mt-[100px]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="mx-auto max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px]">
        <div className="mb-5 hidden items-center justify-center gap-2 lg:mb-6 lg:flex">
          {workflowNodes.map((node, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={node.id} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative px-7 py-3.5 [clip-path:polygon(25%_4%,75%_4%,100%_50%,75%_96%,25%_96%,0_50%)] border shadow-[0_14px_26px_rgba(0,0,0,0.36)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                    isActive ? 'border-lime-300/70 bg-[#0b1220]/55' : 'border-white/38 bg-[#0b1220]/35'
                  }`}
                  style={{
                    animation: `heroCardDrop 820ms cubic-bezier(0.23,1,0.32,1) ${120 + index * 210}ms both, heroCardDrift 7.8s ease-in-out ${1.1 + index * 0.22}s infinite`,
                  }}
                  aria-pressed={isActive}
                  aria-label={`${showByLocale[locale] || showByLocale.en} ${node.label}`}>
                  <span className={`pointer-events-none absolute inset-[3px] [clip-path:polygon(25%_4%,75%_4%,100%_50%,75%_96%,25%_96%,0_50%)] border ${isActive ? 'border-lime-300/45' : 'border-white/18'}`} />
                  <span className="pointer-events-none absolute -inset-x-2 top-1/2 h-6 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.26)_0%,rgba(0,0,0,0)_68%)]" />
                  <div className="relative z-10 flex min-w-[120px] items-center gap-2">
                    <span className={`inline-flex size-7 items-center justify-center rounded-full border text-xs font-semibold ${isActive ? 'border-lime-300/65 bg-lime-300/18 text-lime-200' : 'border-white/25 bg-white/10 text-white/90'}`}>
                      {index + 1}
                    </span>
                    <span className={`text-sm font-semibold tracking-wide ${isActive ? 'text-lime-100' : 'text-white/92'}`}>{node.label}</span>
                  </div>
                </button>
                {index < workflowNodes.length - 1 ? (
                  <span className="inline-flex items-center gap-1 text-white/80">
                    <span className="h-[2px] w-8 bg-white/70" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                      <path
                        fillRule="evenodd"
                        d="M3.25 10a.75.75 0 0 1 .75-.75h10.19l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H4a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ) : null}
              </div>
            );
          })}
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
