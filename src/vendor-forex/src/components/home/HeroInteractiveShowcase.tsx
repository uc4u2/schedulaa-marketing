'use client';

import bookingImg from '@public/images/marketing/showcase/workflow-01.png';
import schedulingImg from '@public/images/marketing/showcase/workflow-02.png';
import timeTrackingImg from '@public/images/marketing/showcase/workflow-03.png';
import payrollImg from '@public/images/marketing/showcase/workflow-04.png';
import reportsImg from '@public/images/marketing/hero/module-5-mobile.png';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

type WorkflowItem = {
  id: string;
  label: string;
  alt: string;
  image: StaticImageData;
};

const workflowItems: WorkflowItem[] = [
  { id: 'booking', label: 'Booking', alt: 'Client slot selection preview', image: bookingImg },
  { id: 'scheduling', label: 'Scheduling', alt: 'Shift management preview', image: schedulingImg },
  { id: 'time', label: 'Time Tracking', alt: 'Employee management preview', image: timeTrackingImg },
  { id: 'payroll', label: 'Payroll', alt: 'Payroll management preview', image: payrollImg },
  { id: 'reports', label: 'Reports', alt: 'Time tracking report preview', image: reportsImg },
];

const AUTO_ROTATE_MS = 4500;

const HeroInteractiveShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowItems.length);
    }, AUTO_ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="mt-[50px] lg:mt-[100px]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="mx-auto max-w-[700px] lg:max-w-[900px] xl:max-w-[1240px]">
        <div className="mb-5 hidden items-center justify-center lg:mb-6 lg:flex">
          {workflowItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={item.id} className="flex items-center">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-xl border p-1 shadow-[0_14px_32px_rgba(0,0,0,0.4)] transition-all duration-300 ${
                    isActive
                      ? 'border-lime-300/50 bg-[#0b1220]/80 ring-1 ring-lime-300/35'
                      : 'border-white/20 bg-[#0b1220]/55 hover:border-white/35'
                  }`}
                  style={{
                    transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                    animation: `heroCardDrop 850ms cubic-bezier(0.23,1,0.32,1) ${120 + index * 160}ms both`,
                  }}
                  aria-pressed={isActive}
                  aria-label={`Show ${item.label} preview`}>
                  {item.id === 'payroll' ? (
                    <span className="absolute top-2 right-2 z-10 inline-flex items-center rounded-full border border-lime-200/30 bg-lime-300/95 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-900 shadow-[0_8px_20px_rgba(157,255,0,0.28)]">
                      Popular
                    </span>
                  ) : null}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    quality={100}
                    unoptimized
                    className={`h-[88px] w-[180px] rounded-lg object-cover transition-transform duration-300 ${
                      isActive ? 'scale-[1.03]' : 'group-hover:scale-[1.02]'
                    }`}
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent px-3 py-2 text-left text-xs font-semibold tracking-wide text-white/90">
                    {item.label}
                  </span>
                </button>

                {index < workflowItems.length - 1 ? <span className="mx-2 h-px w-8 bg-white/35" /> : null}
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
            {workflowItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1.03) rotate(0.2deg)' : 'scale(1.01) rotate(-0.1deg)',
                    zIndex: isActive ? 2 : 1,
                  }}>
                  <Image src={item.image} alt={item.alt} className="h-full w-full object-cover object-top" priority={index === 0} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInteractiveShowcase;
