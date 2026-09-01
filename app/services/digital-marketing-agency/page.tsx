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
  keywords: ['Digital Marketing Service in Tamil Nadu', 'Digital Marketing Service in Trichy'],
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/services/digital-marketing-agency/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://inymartlabs.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Digital Marketing Agency",
      "item": "https://inymartlabs.com/services/digital-marketing-agency/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a Digital Marketing Agency do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Digital Marketing Agency helps businesses grow their online presence through services such as SEO, Local SEO, Google Ads, PPC, social media marketing, content marketing, web analytics, and digital marketing strategy."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to use all your services, or can I choose just one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do not need to use all our services. Inymart Labs offers individual digital marketing services, allowing you to choose the services that best match your business goals, requirements, and budget."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from hiring separate freelancers for each service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Working with Inymart Labs provides a coordinated digital marketing approach where different marketing activities can work together under one strategy, helping maintain consistency and simplify campaign management."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right Digital Marketing Agency in Tamil Nadu and Digital Marketing Agency in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs provides customised digital marketing strategies based on your business goals, target audience, industry, competition, and budget. Our approach focuses on measurable performance, continuous optimisation, and long-term online growth."
      }
    },
    {
      "@type": "Question",
      "name": "How soon will I start seeing results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time required to see results depends on the services used, competition, industry, budget, website condition, and campaign strategy. Paid advertising may generate results faster, while SEO and organic strategies generally require consistent effort over several months."
      }
    },
    {
      "@type": "Question",
      "name": "Will I get regular updates on performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs provides regular performance updates based on the services and campaign requirements. Reports may include traffic, leads, conversions, keyword rankings, engagement, advertising performance, and other relevant metrics."
      }
    }
  ]
};

export default function DigitalMarketingAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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