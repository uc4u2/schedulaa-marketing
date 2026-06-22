import testimonials from '@/data/json/testimonials/testimonials.json';
import sourceEn from '@/legacy-content/features/landing-features.json';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Reviews = ({ source }: { source?: any }) => {
  const content = source || sourceEn;
  return (
    <section className="bg-background-3 dark:bg-background-8 space-y-[70px] pt-[100px] pb-[200px]">
      <div className="main-container">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge !badge-cyan">Service team perspectives</span>
          </RevealAnimation>

          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>{content.testimonials.title}</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p>
                These cards highlight the workflows service businesses usually want to keep in one system: websites,
                bookings, invoices, payments, staff scheduling, and client operations.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <div className="relative">
          <div className="from-background-3 dark:from-background-7 absolute top-0 left-0 z-40 h-full w-[10%] bg-gradient-to-r to-transparent" />
          <div className="from-background-3 dark:from-background-7 absolute top-0 right-0 z-40 h-full w-[10%] bg-gradient-to-l to-transparent" />

          <Marquee autoFill pauseOnHover speed={30}>
            <div className="flex items-center gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-background-1/90 dark:bg-background-5 dark:hover:bg-background-8 hover:shadow-1 w-full max-w-[358px] min-w-[358px] shrink-0 rounded-[20px] p-8 transition-colors duration-300 ease-linear first:ml-8 hover:bg-white">
                  <p className="line-clamp-3 text-wrap">{testimonial.quote}</p>
                  <div className="bg-stroke-4 dark:bg-stroke-8 my-8 h-px w-full" />
                  <div>
                    <div className="flex items-center gap-3">
                      <figure className="size-12 overflow-hidden rounded-full">
                        <div className="flex h-full w-full items-center justify-center bg-linear-[156deg,#83E7EE_2.92%,#C6F56F_91%] text-sm font-semibold text-secondary">
                          {testimonial.name
                            .split(' ')
                            .map((part) => part[0])
                            .join('')
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>
                      </figure>
                      <div>
                        <h3 className="text-tagline-1 text-secondary dark:text-accent font-medium">
                          {testimonial.name}
                        </h3>
                        <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Reviews;
