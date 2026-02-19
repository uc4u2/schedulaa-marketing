import { cn } from '@/utils/cn';
import dropboxLogo from '@public/images/icons/dropbox-v2.svg';
import dropboxDarkLogo from '@public/images/icons/dropbox-v2-dark.svg';
import driveLogo from '@public/images/icons/drive-google.svg';
import gmailLogo from '@public/images/icons/gmail.svg';
import googleMeetLogo from '@public/images/icons/google-meet.svg';
import notionLogo from '@public/images/icons/notion-v2.svg';
import notionDarkLogo from '@public/images/icons/notion-v2-dark.svg';
import slackLogo from '@public/images/icons/slack.svg';
import stripeLogo from '@public/images/icons/stripe.svg';
import stripeDarkLogo from '@public/images/icons/stripe-dark.svg';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: number;
  lightSrc: StaticImageData;
  darkSrc: StaticImageData;
  alt: string;
}

const clientLogos: ClientLogo[] = [
  {
    id: 1,
    lightSrc: stripeLogo,
    darkSrc: stripeDarkLogo,
    alt: 'Stripe integration',
  },
  {
    id: 2,
    lightSrc: googleMeetLogo,
    darkSrc: googleMeetLogo,
    alt: 'Google Meet integration',
  },
  {
    id: 3,
    lightSrc: gmailLogo,
    darkSrc: gmailLogo,
    alt: 'Gmail integration',
  },
  {
    id: 4,
    lightSrc: driveLogo,
    darkSrc: driveLogo,
    alt: 'Google Drive integration',
  },
  {
    id: 5,
    lightSrc: slackLogo,
    darkSrc: slackLogo,
    alt: 'Slack integration',
  },
  {
    id: 6,
    lightSrc: dropboxLogo,
    darkSrc: dropboxDarkLogo,
    alt: 'Dropbox integration',
  },
  {
    id: 7,
    lightSrc: notionLogo,
    darkSrc: notionDarkLogo,
    alt: 'Notion integration',
  },
];

const Clients = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="lg:py-[150px] py-10 md:py-[75px] mt-14 xl:mt-[250px] lg:mt-[200px] sm:mt-[150px]">
        <div className="main-container">
          <div className="relative max-w-[1000px] mx-auto">
            <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-2 to-transparent dark:from-background-5 z-40" />
            <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-2 to-transparent dark:from-background-5 z-40" />
            <Marquee>
              <div className="flex items-center justify-center gap-8">
                {clientLogos.map((logo, index) => (
                  <figure
                    key={logo.id}
                    aria-label="Client brand logo"
                    className={cn('min-w-[140px] md:min-w-[201px]', index === 0 && 'ml-8')}>
                    <Image src={logo.lightSrc} alt={logo.alt} className="block dark:hidden" />
                    <Image src={logo.darkSrc} alt={logo.alt} className="hidden dark:block" />
                  </figure>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Clients;
