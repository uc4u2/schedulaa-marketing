'use client';

import { AppLocale } from '@/utils/locale';
import { TabProvider } from '../../context/TabContext';
import RevealAnimation from '../animation/RevealAnimation';
import AboutTabContent from './AboutTabContent';
import AboutTabList from './AboutTabList';

const About = ({ locale = 'en' }: { locale?: AppLocale }) => {
  return (
    <RevealAnimation delay={0.3}>
      <section className="overflow-hidden bg-[url('/images/ns-img-295.jpg')] bg-cover bg-top bg-no-repeat pt-20 pb-14 dark:bg-background-6">
        <div className="main-container">
          <TabProvider defaultValue={0}>
            <AboutTabList locale={locale} />
            <AboutTabContent locale={locale} />
          </TabProvider>
        </div>
      </section>
    </RevealAnimation>
  );
};
About.displayName = 'About';
export default About;
