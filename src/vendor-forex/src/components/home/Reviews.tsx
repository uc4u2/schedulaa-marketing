'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import dashboardImg from '@public/images/marketing/showcase/dashboard.png';
import employeeDashboardImg from '@public/images/marketing/showcase/employee-dashboard.png';
import myShiftImg from '@public/images/marketing/showcase/my-shift.png';
import qbImg from '@public/images/marketing/showcase/qb.png';
import roeImg from '@public/images/marketing/showcase/roe.png';
import stripeImg from '@public/images/marketing/showcase/stripe.png';
import t4Img from '@public/images/marketing/showcase/t4.png';
import w2Img from '@public/images/marketing/showcase/w2.png';
import websiteBuilderImg from '@public/images/marketing/showcase/website-builder.png';
import xeroImg from '@public/images/marketing/showcase/xero.png';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type ShowcaseItem = {
  id: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
};

const showcaseItems: ShowcaseItem[] = [
  { id: 'dashboard', title: 'Manager dashboard', subtitle: 'Operations overview', image: dashboardImg },
  { id: 'employee-dashboard', title: 'Employee dashboard', subtitle: 'Time and shifts', image: employeeDashboardImg },
  { id: 'my-shift', title: 'Shift timeline', subtitle: 'Live schedule updates', image: myShiftImg },
  { id: 'qb', title: 'QuickBooks sync', subtitle: 'Accounting workflow', image: qbImg },
  { id: 'roe', title: 'ROE workflow', subtitle: 'Compliance records', image: roeImg },
  { id: 'stripe', title: 'Stripe status', subtitle: 'Payments and subscriptions', image: stripeImg },
  { id: 't4', title: 'T4 generation', subtitle: 'Canada payroll exports', image: t4Img },
  { id: 'w2', title: 'W-2 forms', subtitle: 'US payroll exports', image: w2Img },
  { id: 'website-builder', title: 'Website builder', subtitle: 'Launch pages quickly', image: websiteBuilderImg },
  { id: 'xero', title: 'Xero integration', subtitle: 'Finance handoff', image: xeroImg },
];

const Reviews = () => {
  return (
    <section className="relative bg-[linear-gradient(180deg,#f4f6f9_0%,#e9edf3_100%)] py-16 md:py-20 lg:py-[100px] dark:bg-[#0f172a] shadow-[inset_0_1px_0_rgba(15,23,42,0.06)] dark:shadow-[inset_0_1px_0_rgba(148,163,184,0.14)]">
      <div className="main-container bg-transparent flex flex-col gap-[70px] max-[426px]:gap-10">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5">Customer Success</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3">Real apps. Real results.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-[426px]:text-tagline-2 max-w-[580px] max-[426px]:max-w-[320px]">
              Explore live product visuals across scheduling, payroll, websites, and accounting integrations.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="relative bg-transparent">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={22}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              speed={850}
              autoplay={{
                delay: 1400,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1.15, spaceBetween: 14 },
                768: { slidesPerView: 2.1, spaceBetween: 18 },
                1200: { slidesPerView: 3, spaceBetween: 22 },
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}
            >
              <div className="swiper-wrapper">
                {showcaseItems.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="group relative mx-1 overflow-visible rounded-[22px] transition-transform duration-300 hover:z-30 hover:scale-[1.65] sm:mx-0">
                      <div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-linear-[145deg,rgba(0,194,255,0.16)_0%,rgba(157,255,0,0.08)_45%,rgba(0,0,0,0.1)_100%] blur-md" />
                      <div className="relative rounded-[22px] border border-white/10 bg-[#0d1322] p-3 shadow-[0_20px_58px_rgba(0,0,0,0.42)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                        <div className="mb-3 rounded-[14px] border border-white/10 bg-white/4 px-4 py-3">
                          <p className="text-tagline-3 uppercase tracking-[0.12em] text-accent/65">{item.subtitle}</p>
                          <h3 className="mt-1 text-heading-6 text-white">{item.title}</h3>
                        </div>
                        <figure className="overflow-hidden rounded-[16px] border border-white/10 bg-black/30">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                          />
                        </figure>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.5}>
          <div className="text-center">
            <LinkButton
              href="/features"
              className="btn btn-md btn-secondary dark:btn-transparent hover:btn-white w-full sm:w-auto"
            >
              Explore platform visuals
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
