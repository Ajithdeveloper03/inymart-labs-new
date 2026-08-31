import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { PpcHeroBanner } from '@/components/ppc/PpcHeroBanner';
import { PpcQuickAnswer } from '@/components/ppc/PpcQuickAnswer';
import { PpcWhatIs } from '@/components/ppc/PpcWhatIs';
import { PpcWhatWeDo } from '@/components/ppc/PpcWhatWeDo';
import { PpcWhyChoose } from '@/components/ppc/PpcWhyChoose';
import { PpcComparison } from '@/components/ppc/PpcComparison';
import { PpcKeyFacts } from '@/components/ppc/PpcKeyFacts';
import { PpcProcess } from '@/components/ppc/PpcProcess';
import { PpcWhoThisIsFor } from '@/components/ppc/PpcWhoThisIsFor';
import { PpcExpectations } from '@/components/ppc/PpcExpectations';
import { PpcTrust } from '@/components/ppc/PpcTrust';
import { PpcFaq } from '@/components/ppc/PpcFaq';
import { PpcCta } from '@/components/ppc/PpcCta';

export const metadata = {
  alternates: {
    canonical: '/services/ppc-service/',
  },
  title: 'PPC Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a PPC Service in Trichy, Tamil Nadu that plans, sets up, and manages Google Ads campaigns to generate calls, leads, and sales.',
};

export default function PpcServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <PpcHeroBanner />
        <PpcQuickAnswer />
        <PpcWhatIs />
        <PpcWhatWeDo />
        <PpcWhyChoose />
        <PpcComparison />
        <PpcKeyFacts />
        <PpcProcess />
        <PpcWhoThisIsFor />
        <PpcExpectations />
        <PpcTrust />
        <PpcFaq />
        <PpcCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}