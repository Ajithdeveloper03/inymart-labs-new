import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SmmHeroBanner } from '@/components/smm/SmmHeroBanner';
import { SmmQuickAnswer } from '@/components/smm/SmmQuickAnswer';
import { SmmWhatIs } from '@/components/smm/SmmWhatIs';
import { SmmWhatWeDo } from '@/components/smm/SmmWhatWeDo';
import { SmmWhyChoose } from '@/components/smm/SmmWhyChoose';
import { SmmComparison } from '@/components/smm/SmmComparison';
import { SmmKeyFacts } from '@/components/smm/SmmKeyFacts';
import { SmmProcess } from '@/components/smm/SmmProcess';
import { SmmWhoThisIsFor } from '@/components/smm/SmmWhoThisIsFor';
import { SmmExpectations } from '@/components/smm/SmmExpectations';
import { SmmFaq } from '@/components/smm/SmmFaq';
import { SmmTrust } from '@/components/smm/SmmTrust';
import { SmmCta } from '@/components/smm/SmmCta';

export const metadata = {
  title: 'Social Media Marketing Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a social media marketing agency in Trichy, Tamil Nadu that plans, creates, and manages paid ad campaigns on Facebook, Instagram, and LinkedIn.',
};

export default function SmmServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SmmHeroBanner />
        <SmmQuickAnswer />
        <SmmWhatIs />
        <SmmWhatWeDo />
        <SmmWhyChoose />
        <SmmComparison />
        <SmmKeyFacts />
        <SmmProcess />
        <SmmWhoThisIsFor />
        <SmmExpectations />
        <SmmTrust />
        <SmmFaq />
        <SmmCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}