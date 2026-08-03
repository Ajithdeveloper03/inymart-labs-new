import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SmoHeroBanner } from '@/components/smo/SmoHeroBanner';
import { SmoQuickAnswer } from '@/components/smo/SmoQuickAnswer';
import { SmoWhatWeDo } from '@/components/smo/SmoWhatWeDo';
import { SmoWhyChoose } from '@/components/smo/SmoWhyChoose';
import { SmoKeyFacts } from '@/components/smo/SmoKeyFacts';
import { SmoProcess } from '@/components/smo/SmoProcess';
import { SmoWhoThisIsFor } from '@/components/smo/SmoWhoThisIsFor';
import { SmoExpectations } from '@/components/smo/SmoExpectations';
import { SmoFaq } from '@/components/smo/SmoFaq';
import { SmoCta } from '@/components/smo/SmoCta';

export const metadata = {
  title: 'Social Media Optimization Company in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a social media optimization company in Tamil Nadu and social media optimization company in Trichy that builds and manages organic social media presence.',
};

export default function SmoServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SmoHeroBanner />
        <SmoQuickAnswer />
        <SmoWhatWeDo />
        <SmoWhyChoose />
        <SmoKeyFacts />
        <SmoProcess />
        <SmoWhoThisIsFor />
        <SmoExpectations />
        <SmoFaq />
        <SmoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}