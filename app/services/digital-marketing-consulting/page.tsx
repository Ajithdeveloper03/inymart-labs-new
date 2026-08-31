import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { DmcHeroBanner } from '@/components/dmc/DmcHeroBanner';
import { DmcQuickAnswer } from '@/components/dmc/DmcQuickAnswer';
import { DmcWhatIs } from '@/components/dmc/DmcWhatIs';
import { DmcWhatWeDo } from '@/components/dmc/DmcWhatWeDo';
import { DmcWhyChoose } from '@/components/dmc/DmcWhyChoose';
import { DmcComparison } from '@/components/dmc/DmcComparison';
import { DmcKeyFacts } from '@/components/dmc/DmcKeyFacts';
import { DmcProcess } from '@/components/dmc/DmcProcess';
import { DmcWhoThisIsFor } from '@/components/dmc/DmcWhoThisIsFor';
import { DmcExpectations } from '@/components/dmc/DmcExpectations';
import { DmcTrust } from '@/components/dmc/DmcTrust';
import { DmcFaq } from '@/components/dmc/DmcFaq';
import { DmcCta } from '@/components/dmc/DmcCta';

export const metadata = {
  alternates: {
    canonical: '/services/digital-marketing-consulting/',
  },
  title: 'Digital Marketing Consulting in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs offers expert Digital Marketing Consulting in Trichy, Tamil Nadu, giving businesses a clear, prioritized action plan for SEO, social media, ads, and analytics.',
};

const dmcSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/digital-marketing-consulting/#service",
  "name": "Digital Marketing Consulting Services",
  "url": "https://inymartlabs.com/services/digital-marketing-consulting/",
  "description": "Inymart Labs provides digital marketing consulting services to help businesses develop effective marketing strategies, improve online visibility, generate quality leads, and achieve measurable business growth.",
  "serviceType": "Digital Marketing Consulting",
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

export default function DigitalMarketingConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dmcSchema) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <DmcHeroBanner />
        <DmcQuickAnswer />
        <DmcWhatIs />
        <DmcWhatWeDo />
        <DmcWhyChoose />
        <DmcComparison />
        <DmcKeyFacts />
        <DmcProcess />
        <DmcWhoThisIsFor />
        <DmcExpectations />
        <DmcTrust />
        <DmcFaq />
        <DmcCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
