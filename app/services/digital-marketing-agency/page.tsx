import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { DmaHeroBanner } from '@/components/dma/DmaHeroBanner';
import { DmaQuickAnswer } from '@/components/dma/DmaQuickAnswer';
import { DmaWhatIs } from '@/components/dma/DmaWhatIs';
import { DmaWhatWeDo } from '@/components/dma/DmaWhatWeDo';
import { DmaWhyChoose } from '@/components/dma/DmaWhyChoose';
import { DmaComparison } from '@/components/dma/DmaComparison';
import { DmaKeyFacts } from '@/components/dma/DmaKeyFacts';
import { DmaServices } from '@/components/dma/DmaServices';
import { DmaProcess } from '@/components/dma/DmaProcess';
import { DmaWhoThisIsFor } from '@/components/dma/DmaWhoThisIsFor';
import { DmaExpectations } from '@/components/dma/DmaExpectations';
import { DmaTrust } from '@/components/dma/DmaTrust';
import { DmaFaq } from '@/components/dma/DmaFaq';
import { DmaCta } from '@/components/dma/DmaCta';

export const metadata = {
  alternates: {
    canonical: '/services/digital-marketing-agency/',
  },
  title: 'Digital Marketing Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a full-service Digital Marketing Agency in Trichy Tamil Nadu, offering SEO, Local SEO, social media optimization, and more.',
};

const dmaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/digital-marketing-agency/#service",
  "name": "Digital Marketing Agency Services",
  "url": "https://inymartlabs.com/services/digital-marketing-agency/",
  "description": "Inymart Labs provides comprehensive digital marketing services to help businesses improve online visibility, reach the right audience, generate quality leads, and achieve sustainable business growth.",
  "serviceType": "Digital Marketing Services",
  "provider": {
    "@type": "Organization",
    "@id": "https://inymartlabs.com/#organization",
    "name": "Inymart Labs",
    "url": "https://inymartlabs.com/"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ]
};

export default function DigitalMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dmaSchema) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <DmaHeroBanner />
        <DmaQuickAnswer />
        <DmaWhatIs />
        <DmaWhatWeDo />
        <DmaWhyChoose />
        <DmaComparison />
        <DmaKeyFacts />
        <DmaServices />
        <DmaProcess />
        <DmaWhoThisIsFor />
        <DmaExpectations />
        <DmaTrust />
        <DmaFaq />
        <DmaCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}