import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';

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
import { AppLocale, withLocalePath } from '@/utils/locale';

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

const getLocale = async (): Promise<AppLocale> => {
  const h = await headers();
  return h.get('x-locale') === 'fa' ? 'fa' : 'en';
};

const mosaicClasses = [
  'lg:col-span-6 lg:row-span-2 min-h-[340px]',
  'lg:col-span-6 lg:row-span-1 min-h-[160px]',
  'lg:col-span-6 lg:row-span-1 min-h-[160px]',
  'lg:col-span-4 lg:row-span-1 min-h-[220px]',
  'lg:col-span-4 lg:row-span-1 min-h-[220px]',
];

const AiOperationalFeatureGrid = async ({ heading, subheading, items }: AiOperationalFeatureGridProps) => {
  const locale = await getLocale();
  const merged = items.slice(0, 5).map((item, idx) => ({ ...item, asset: assets[idx % assets.length] }));

  return (
    <section className="pt-8 pb-20 lg:pb-[120px]" aria-label="Operational feature grid">
      <div className="main-container">
        <div className="space-y-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <span className="badge badge-green-v2">Features</span>
              <h2 className="max-w-[780px]">{heading}</h2>
              <p className="max-w-[760px]">{subheading}</p>
            </div>
            <Link
              href={withLocalePath('/features', locale)}
              className="btn btn-secondary btn-md dark:hover:btn-accent w-fit"
            >
              Explore features
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-3">
            {merged.map((item, idx) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[22px] border border-secondary/10 bg-white p-5 shadow-box transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-background-8 ${mosaicClasses[idx]}`}
              >
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-36 w-36 rounded-full bg-primary-400/15 blur-2xl transition duration-300 group-hover:bg-primary-400/25" />
                <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-ns-green/15 blur-2xl transition duration-300 group-hover:bg-ns-green/25" />
                <div className="relative flex h-full flex-col">
                  <div>
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">{item.description}</p>
                  </div>
                  <div className={`mt-4 ${idx === 0 ? 'flex-1 min-h-[190px]' : 'min-h-[95px]'}`}>
                    <figure className="bg-background-3/80 dark:bg-background-7/70 overflow-hidden rounded-2xl border border-secondary/8 p-3 dark:border-white/10">
                      <Image
                        src={item.asset.light}
                        alt={item.title}
                        className={`w-full object-cover dark:hidden ${idx === 0 ? 'h-[175px]' : 'h-[88px]'}`}
                      />
                      <Image
                        src={item.asset.dark}
                        alt={item.title}
                        className={`hidden w-full object-cover dark:block ${idx === 0 ? 'h-[175px]' : 'h-[88px]'}`}
                      />
                    </figure>
                  </div>
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
