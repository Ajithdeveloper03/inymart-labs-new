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
  keywords: ['PPC service in Tamil Nadu', 'PPC service in Trichy'],
};

const ppcSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/ppc-service/#service",
  "name": "PPC Services",
  "url": "https://inymartlabs.com/services/ppc-service/",
  "description": "Inymart Labs provides PPC services to help businesses reach their target audience, drive qualified traffic, generate leads, and improve conversions through performance-focused paid advertising campaigns.",
  "serviceType": "Pay-Per-Click Advertising",
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
  "@id": "https://inymartlabs.com/services/ppc-service/#breadcrumb",
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
      "name": "PPC Services",
      "item": "https://inymartlabs.com/services/ppc-service/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PPC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PPC stands for Pay-Per-Click advertising. It is a digital advertising model where businesses pay when someone clicks on their advertisement. PPC can help businesses reach targeted customers, generate leads, increase website traffic, and drive sales."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I budget for Google Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The right Google Ads budget depends on your business goals, industry, target audience, competition, location, and expected results. Inymart Labs can recommend a suitable budget based on your specific business requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How soon will I see results from PPC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PPC campaigns can start generating traffic and performance data soon after they are launched. The time required to achieve consistent results depends on factors such as budget, competition, targeting, ad quality, landing pages, and ongoing campaign optimisation."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right PPC Service in Tamil Nadu and PPC Service in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs provides customised PPC strategies based on your business goals, target audience, industry, location, and budget. Our approach focuses on targeted campaigns, performance tracking, continuous optimisation, and improving the efficiency of your advertising spend."
      }
    },
    {
      "@type": "Question",
      "name": "Can you run PPC alongside my SEO efforts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. PPC and SEO can work together as part of a complete digital marketing strategy. PPC can provide immediate paid visibility and valuable campaign data, while SEO focuses on building long-term organic search visibility."
      }
    },
    {
      "@type": "Question",
      "name": "Will I know exactly where my ad budget is being spent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Campaign reports can provide visibility into advertising spend, impressions, clicks, conversions, cost per click, cost per lead, and other important performance metrics so you can understand how your budget is being used."
      }
    }
  ]
};

export default function PpcServicePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ppcSchema) }}
      />
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