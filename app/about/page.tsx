import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutBanner } from '@/components/about/AboutBanner';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { WhatMakesUsDifferent } from '@/components/about/WhatMakesUsDifferent';
import { MeetTheTeam } from '@/components/about/MeetTheTeam';
import { OurApproach } from '@/components/about/OurApproach';
import { WhereWeWork } from '@/components/about/WhereWeWork';
import { AboutFaqs } from '@/components/about/AboutFaqs';
import { AboutCta } from '@/components/about/AboutCta';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about/',
  },
  title: 'About Us | Inymart Labs',
  description: 'Learn about Inymart Labs, a leading digital marketing agency in Tamil Nadu offering SEO, Local SEO, AEO, and GEO services.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen space-y-4">
        <AboutBanner />
        <AboutHero />
        <OurStory />
        <WhatMakesUsDifferent />
        <MeetTheTeam />
        <OurApproach />
        <WhereWeWork />
        <AboutFaqs />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
