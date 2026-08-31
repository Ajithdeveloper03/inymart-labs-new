import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SeoHeroBanner } from '@/components/seo/SeoHeroBanner';
import { SeoQuickAnswer } from '@/components/seo/SeoQuickAnswer';
import { SeoWhatWeDo } from '@/components/seo/SeoWhatWeDo';
import { SeoWhyChoose } from '@/components/seo/SeoWhyChoose';
import { SeoKeyFacts } from '@/components/seo/SeoKeyFacts';
import { SeoProcess } from '@/components/seo/SeoProcess';
import { SeoWhoThisIsFor } from '@/components/seo/SeoWhoThisIsFor';
import { SeoExpectations } from '@/components/seo/SeoExpectations';
import { SeoFaq } from '@/components/seo/SeoFaq';
import { SeoCta } from '@/components/seo/SeoCta';

export const metadata = {
  alternates: {
    canonical: '/services/seo/',
  },
  title: 'SEO Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is an SEO agency in Trichy, Tamil Nadu that helps businesses rank higher on Google Search and Google Maps.',
};

export default function SeoServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SeoHeroBanner />
        <SeoQuickAnswer />
        <SeoWhatWeDo />
        <SeoWhyChoose />
        <SeoKeyFacts />
        <SeoProcess />
        <SeoWhoThisIsFor />
        <SeoExpectations />
        <SeoFaq />
        <SeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}