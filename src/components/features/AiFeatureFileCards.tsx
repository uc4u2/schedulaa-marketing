'use client';

import Image from 'next/image';

import RevealAnimation from '@/components/animation/RevealAnimation';

import featureVideoCard1 from '@public/images/ns-img-311.png';
import featureVideoCard2 from '@public/images/ns-img-312.png';
import featureVideoCard3 from '@public/images/ns-img-313.png';

const AiFeatureFileCards = () => {
  return (
    <RevealAnimation delay={0.2}>
      <div className="space-y-8 rounded-[20px] bg-white p-5 sm:p-8 md:p-5 xl:p-8">
        <div className="flex items-center justify-center -space-x-12">
          <figure className="w-full max-w-[214px] rotate-[12deg] overflow-hidden rounded-b-[15px] shadow-[0_12px_30px_rgba(15,23,42,0.2)]">
            <Image src={featureVideoCard1} alt="Feature file card" className="h-full w-full object-cover" />
          </figure>
          <figure className="relative z-10 w-full max-w-[214px] overflow-hidden rounded-b-[15px]">
            <Image src={featureVideoCard2} alt="Feature file card" className="h-full w-full object-cover" />
          </figure>
          <figure className="relative z-10 w-full max-w-[214px] -rotate-[12deg] overflow-hidden rounded-b-[15px] shadow-[0_12px_30px_rgba(15,23,42,0.2)]">
            <Image src={featureVideoCard3} alt="Feature file card" className="h-full w-full object-cover" />
          </figure>
        </div>
        <RevealAnimation delay={0.1} start="top 97%">
          <div className="relative z-20 max-md:space-y-0.5">
            <h3 className="text-heading-6 md:text-heading-5">Get your completed files.</h3>
            <p className="max-w-[450px]">
              The inputs are multiplied by their respective weights, summed, and then passed through the activation
              function.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </RevealAnimation>
  );
};

export default AiFeatureFileCards;

