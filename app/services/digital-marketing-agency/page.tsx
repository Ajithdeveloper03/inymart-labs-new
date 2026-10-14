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
      "name": "Services",
      "item": "https://inymartlabs.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Digital Marketing Agency",
      "item": "https://inymartlabs.com/services/digital-marketing-agency/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/digital-marketing-agency/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the role of a digital marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It plans, runs, and improves several marketing channels together, including search rankings, social, paid ads, your website, and analytics, instead of handling each one separately."
      }
    },
    {
      "@type": "Question",
      "name": "Is this service available for businesses in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we run this Digital Marketing Agency Service for businesses across Trichy and Tamil Nadu, spanning search rankings, social, ads, websites, analytics, and consulting."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to use every service you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you can start with one service, such as SEO or paid ads, and add others later as your needs grow."
      }
    },
    {
      "@type": "Question",
      "name": "How is a coordinated strategy different from hiring separately for each channel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When channels are managed together, your messaging stays consistent and decisions are based on a full picture of performance, rather than one channel viewed in isolation."
      }
    },
    {
      "@type": "Question",
      "name": "Which businesses can you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local shops, startups, online stores, professional firms, schools and colleges, hospitality brands, and growing companies of most sizes."
      }
    },
    {
      "@type": "Question",
      "name": "How will I know if the marketing is working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We track traffic, conversions, and channel performance, and share regular reports showing what's working and where attention is needed."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help if I already have some marketing running?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we review what you currently have in place and build a plan around it rather than starting from scratch."
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

        <DmaTrust />
        <DmaFaq />
        <DmaCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}