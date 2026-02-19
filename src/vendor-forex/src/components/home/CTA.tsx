import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import source from '@/legacy-content/features/landing-features.json';

const CTA = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-secondary dark:bg-background-6 py-20 md:py-16 lg:py-[76px]">
        <div className="main-container">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow mb-5">Let&apos;s start</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-white">{source.cta.title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-6 text-white/60">{source.cta.description}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="text-center">
                <LinkButton
                  href="/pricing"
                  className="btn btn-primary btn-md hover:btn-green mx-auto w-[90%] md:mx-0 md:w-auto">
                  {source.cta.primaryCta.label}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
