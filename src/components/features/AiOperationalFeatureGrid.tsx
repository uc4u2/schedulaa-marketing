import Image, { StaticImageData } from 'next/image';

import cardOneImg from '@public/images/ns-img-90.png';
import cardOneImgDark from '@public/images/ns-img-dark-63.png';
import cardTwoImg from '@public/images/ns-img-91.png';
import cardTwoImgDark from '@public/images/ns-img-dark-64.png';
import cardThreeImg from '@public/images/ns-img-92.png';
import cardThreeImgDark from '@public/images/ns-img-dark-65.png';
import cardFourImg from '@public/images/ns-img-93.png';
import cardFourImgDark from '@public/images/ns-img-dark-66.png';
import cardFiveImg from '@public/images/ns-img-94.png';
import cardFiveImgDark from '@public/images/ns-img-dark-67.png';

type FeatureGridItem = {
  title: string;
  description: string;
};

type AiOperationalFeatureGridProps = {
  heading: string;
  subheading: string;
  items: FeatureGridItem[];
};

const assets: Array<{ light: StaticImageData; dark: StaticImageData }> = [
  { light: cardOneImg, dark: cardOneImgDark },
  { light: cardTwoImg, dark: cardTwoImgDark },
  { light: cardThreeImg, dark: cardThreeImgDark },
  { light: cardFourImg, dark: cardFourImgDark },
  { light: cardFiveImg, dark: cardFiveImgDark },
];

const AiOperationalFeatureGrid = ({ heading, subheading, items }: AiOperationalFeatureGridProps) => {
  const merged = items.slice(0, 5).map((item, idx) => ({ ...item, asset: assets[idx % assets.length] }));

  return (
    <section className="pt-8 pb-20 lg:pb-[120px]" aria-label="Operational feature grid">
      <div className="main-container">
        <div className="space-y-[60px]">
          <div className="space-y-3 text-center">
            <h2 className="mx-auto max-w-[860px]">{heading}</h2>
            <p className="mx-auto max-w-[780px]">{subheading}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {merged.slice(0, 3).map((item) => (
              <article key={item.title} className="space-y-3">
                <div className="dark:bg-background-5 w-full rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image src={item.asset.light} alt={item.title} className="h-full w-full object-cover dark:hidden" />
                    <Image src={item.asset.dark} alt={item.title} className="hidden h-full w-full object-cover dark:block" />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-[860px] lg:mx-auto">
            {merged.slice(3, 5).map((item) => (
              <article key={item.title} className="space-y-3">
                <div className="dark:bg-background-5 w-full rounded-[20px] bg-white p-2.5">
                  <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                    <Image src={item.asset.light} alt={item.title} className="h-full w-full object-cover dark:hidden" />
                    <Image src={item.asset.dark} alt={item.title} className="hidden h-full w-full object-cover dark:block" />
                  </figure>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-5">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiOperationalFeatureGrid;

