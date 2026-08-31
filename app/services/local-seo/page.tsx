import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { LocalSeoHeroBanner } from '@/components/local-seo/LocalSeoHeroBanner';
import { LocalSeoQuickAnswer } from '@/components/local-seo/LocalSeoQuickAnswer';
import { LocalSeoWhatWeDo } from '@/components/local-seo/LocalSeoWhatWeDo';
import { LocalSeoWhyChoose } from '@/components/local-seo/LocalSeoWhyChoose';
import { LocalSeoKeyFacts } from '@/components/local-seo/LocalSeoKeyFacts';
import { LocalSeoProcess } from '@/components/local-seo/LocalSeoProcess';
import { LocalSeoWhoThisIsFor } from '@/components/local-seo/LocalSeoWhoThisIsFor';
import { LocalSeoExpectations } from '@/components/local-seo/LocalSeoExpectations';
import { LocalSeoFaq } from '@/components/local-seo/LocalSeoFaq';
import { LocalSeoCta } from '@/components/local-seo/LocalSeoCta';

export const metadata = {
  alternates: {
    canonical: '/services/local-seo/',
  },
  title: 'Local SEO Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Local SEO agency in Trichy Tamil Nadu that helps businesses show up first in Google Maps and near me searches.',
};

export default function LocalSeoServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <LocalSeoHeroBanner />
        <LocalSeoQuickAnswer />
        <LocalSeoWhatWeDo />
        <LocalSeoWhyChoose />
        <LocalSeoKeyFacts />
        <LocalSeoProcess />
        <LocalSeoWhoThisIsFor />
        <LocalSeoExpectations />
        <LocalSeoFaq />
        <LocalSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}