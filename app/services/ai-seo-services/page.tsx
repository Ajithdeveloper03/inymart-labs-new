import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { AiSeoHeroBanner } from '@/components/ai-seo/AiSeoHeroBanner';
import { AiSeoQuickAnswer } from '@/components/ai-seo/AiSeoQuickAnswer';
import { AiSeoWhatIs } from '@/components/ai-seo/AiSeoWhatIs';
import { AiSeoWhatWeDo } from '@/components/ai-seo/AiSeoWhatWeDo';
import { AiSeoWhyChoose } from '@/components/ai-seo/AiSeoWhyChoose';
import { AiSeoComparison } from '@/components/ai-seo/AiSeoComparison';
import { AiSeoKeyFacts } from '@/components/ai-seo/AiSeoKeyFacts';
import { AiSeoProcess } from '@/components/ai-seo/AiSeoProcess';
import { AiSeoWhoThisIsFor } from '@/components/ai-seo/AiSeoWhoThisIsFor';
import { AiSeoExpectations } from '@/components/ai-seo/AiSeoExpectations';
import { AiSeoTrust } from '@/components/ai-seo/AiSeoTrust';
import { AiSeoFaq } from '@/components/ai-seo/AiSeoFaq';
import { AiSeoCta } from '@/components/ai-seo/AiSeoCta';

export const metadata = {
  title: 'AI SEO Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs offers an AI SEO Service in Trichy, Tamil Nadu also called an AEO Service (Answer Engine Optimization), that helps businesses get found and recommended by AI tools.',
};

export default function AiSeoServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <AiSeoHeroBanner />
        <AiSeoQuickAnswer />
        <AiSeoWhatIs />
        <AiSeoWhatWeDo />
        <AiSeoWhyChoose />
        <AiSeoComparison />
        <AiSeoKeyFacts />
        <AiSeoProcess />
        <AiSeoWhoThisIsFor />
        <AiSeoExpectations />
        <AiSeoTrust />
        <AiSeoFaq />
        <AiSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}