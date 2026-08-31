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
  alternates: {
    canonical: '/services/ai-seo-services/',
  },
  title: 'AI SEO Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs offers an AI SEO Service in Trichy, Tamil Nadu also called an AEO Service (Answer Engine Optimization), that helps businesses get found and recommended by AI tools.',
};

const aiSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/ai-seo-services/#service",
  "name": "AI SEO Services",
  "url": "https://inymartlabs.com/services/ai-seo-services/",
  "description": "Inymart Labs provides AI SEO services to help businesses optimize their online presence for AI-powered search, improve visibility across search engines and AI platforms, and attract relevant audiences.",
  "serviceType": "AI Search Engine Optimization",
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

export default function AiSeoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSeoSchema) }}
      />
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