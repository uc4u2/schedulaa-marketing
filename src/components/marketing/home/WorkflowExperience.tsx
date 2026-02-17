'use client';

import { useMemo, useState } from 'react';

import { cn } from '@/utils/cn';

type WorkflowExperienceProps = {
  className?: string;
};

type Step = {
  id: 'booking' | 'scheduling' | 'payroll';
  title: string;
  headline: string;
  summary: string;
  points: string[];
  bars: number[];
};

const steps: Step[] = [
  {
    id: 'booking',
    title: 'Booking captures demand',
    headline: 'Capture intake data and calendar demand at source.',
    summary:
      'Use public booking flows to collect service context, preferred providers, and timing constraints before operations are scheduled.',
    points: ['Service intake + contact details', 'Automated reminders', 'Resource-aware slot options'],
    bars: [34, 52, 48, 76, 62, 84],
  },
  {
    id: 'scheduling',
    title: 'Scheduling aligns people & shifts',
    headline: 'Convert demand into practical staffing plans.',
    summary:
      'Managers align bookings with staff availability, break windows, and shift constraints so teams can execute without manual clean-up.',
    points: ['Role and location constraints', 'Shift conflict controls', 'Live manager visibility'],
    bars: [62, 48, 73, 66, 58, 78],
  },
  {
    id: 'payroll',
    title: 'Payroll exports become audit-ready',
    headline: 'Finalize payroll workflows with traceable records.',
    summary:
      'Connected shift and time data reduces disputes and keeps payroll exports auditable for internal controls and filing workflows.',
    points: ['Preview and finalize controls', 'Audit trail snapshots', 'Export-ready operational records'],
    bars: [46, 56, 68, 84, 72, 88],
  },
];

const chartColors = ['#0EA5E9', '#38BDF8', '#7DD3FC', '#22D3EE', '#2DD4BF', '#34D399'];

export default function WorkflowExperience({ className }: WorkflowExperienceProps) {
  const [activeStep, setActiveStep] = useState<Step['id']>('booking');
  const current = useMemo(() => steps.find((item) => item.id === activeStep) ?? steps[0], [activeStep]);

  return (
    <div className={cn('rounded-[24px] border border-stroke-2 bg-white p-6 shadow-2 dark:border-stroke-7 dark:bg-background-8 md:p-8', className)}>
      <div className="flex flex-wrap gap-2">
        {steps.map((step) => (
          <button
            key={step.id}
            type="button"
            onClick={() => setActiveStep(step.id)}
            className={cn(
              'rounded-full px-4 py-2 text-tagline-2 font-semibold transition',
              activeStep === step.id
                ? 'bg-primary-500 text-white'
                : 'bg-background-3 text-secondary/70 hover:bg-background-4 dark:bg-background-7 dark:text-accent/70 dark:hover:bg-background-9',
            )}
          >
            {step.title}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="text-heading-6 font-semibold">{current.headline}</h3>
          <p className="mt-3 text-tagline-1 text-secondary/70 dark:text-accent/70">{current.summary}</p>
          <ul className="mt-4 space-y-2">
            {current.points.map((point) => (
              <li key={point} className="rounded-xl border border-stroke-2 bg-background-3 px-4 py-3 text-tagline-2 dark:border-stroke-7 dark:bg-background-7">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[20px] border border-stroke-2 bg-background-3 p-4 dark:border-stroke-7 dark:bg-background-7">
          <p className="text-tagline-3 uppercase tracking-[0.16em] text-primary-500">Operational view</p>
          <div className="mt-4 rounded-xl border border-stroke-2 bg-white p-4 dark:border-stroke-7 dark:bg-background-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-tagline-2 font-semibold">Weekly capacity trend</p>
              <span className="rounded-full bg-primary-100 px-2 py-1 text-tagline-3 font-semibold text-primary-700">Live sync</span>
            </div>
            <svg viewBox="0 0 340 130" className="h-[130px] w-full">
              {current.bars.map((value, index) => {
                const barWidth = 36;
                const gap = 18;
                const x = 16 + index * (barWidth + gap);
                const height = value;
                const y = 110 - height;

                return (
                  <g key={`${current.id}-${index}`}>
                    <rect x={x} y={y} width={barWidth} height={height} rx={8} fill={chartColors[index % chartColors.length]} opacity={0.95} />
                    <rect x={x} y={112} width={barWidth} height={4} rx={2} fill="#E2E8F0" />
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="mt-3 text-tagline-3 text-secondary/60 dark:text-accent/60">Mock operational trend panel illustrating booking demand, shift capacity, and payroll workload readiness.</p>
        </div>
      </div>
    </div>
  );
}
