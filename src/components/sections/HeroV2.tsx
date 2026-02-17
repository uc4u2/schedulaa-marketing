'use client';

import Link from 'next/link';

import { AppLocale, withLocalePath } from '@/utils/locale';
import AnimatedSection from '@/components/shared/motion/AnimatedSection';
import ParallaxAccent from '@/components/shared/motion/ParallaxAccent';

type HeroV2Props = {
  locale: AppLocale;
};

export default function HeroV2({ locale }: HeroV2Props) {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden rounded-[24px] border border-stroke-2 bg-[linear-gradient(135deg,#0b1220_0%,#111827_48%,#1d2a52_100%)] p-8 shadow-2 dark:border-stroke-7 md:p-12">
        <div
          className="vendor-noise-overlay"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9) 0.5px, transparent 0.5px), radial-gradient(circle at 70% 35%, rgba(255,255,255,0.45) 0.5px, transparent 0.5px)',
            backgroundSize: '30px 30px, 44px 44px',
          }}
          aria-hidden="true"
        />
        <ParallaxAccent className="-top-18 -right-10 h-72 w-72 opacity-70" />
        <ParallaxAccent className="-bottom-14 left-8 h-56 w-56 opacity-55" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="badge badge-yellow-v2">Enterprise operations platform</p>
            <h1 className="mt-5 max-w-[760px] text-white">
              Run booking, shifts, payroll-ready exports, and website ops from one command center.
            </h1>
            <p className="mt-4 max-w-[700px] text-tagline-1 text-white/80">
              Schedulaa keeps demand capture, staffing execution, and payroll workflows connected so managers can run operations with fewer handoffs and cleaner audits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={withLocalePath('/pricing', locale)} className="btn btn-primary hover:btn-secondary dark:hover:btn-accent">
                View pricing
              </Link>
              <Link href={withLocalePath('/demo', locale)} className="btn btn-primary-v2 !text-white dark:btn-transparent">
                Book demo
              </Link>
            </div>
          </div>

          <div className="rounded-[20px] border border-white/20 bg-white/8 p-5 backdrop-blur-sm">
            <p className="text-tagline-3 uppercase tracking-[0.16em] text-primary-200">How it works</p>
            <ol className="mt-4 space-y-3">
              {[
                'Booking captures demand and intake context',
                'Scheduling aligns staff capacity and shifts',
                'Payroll exports are finalized with audit history',
              ].map((step, index) => (
                <li key={step} className="rounded-xl border border-white/20 bg-white/10 p-4 text-tagline-1 text-white/90">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: 'Bookings', value: '+34%' },
                { label: 'Shift fit', value: '98.9%' },
                { label: 'Prep time', value: '-7h/wk' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-white/15 bg-black/20 px-3 py-2">
                  <p className="text-[11px] text-white/65">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
