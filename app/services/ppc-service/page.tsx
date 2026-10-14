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
      "name": "Services",
      "item": "https://inymartlabs.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "PPC Services",
      "item": "https://inymartlabs.com/services/ppc-service/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/ppc-service/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PPC advertising?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PPC, or Pay-Per-Click, is a paid search model where your ad appears in search results and you pay each time someone clicks it."
      }
    },
    {
      "@type": "Question",
      "name": "Where does Inymart Labs offer PPC service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer PPC service in Trichy and across Tamil Nadu for local businesses, ecommerce companies, and growing brands."
      }
    },
    {
      "@type": "Question",
      "name": "What can PPC bring to my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on your goal, PPC can bring phone calls, enquiries, bookings, leads, or online sales."
      }
    },
    {
      "@type": "Question",
      "name": "Is PPC better than SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They work differently. PPC gives fast visibility, while SEO builds traffic gradually. Many businesses use both."
      }
    },
    {
      "@type": "Question",
      "name": "How do you keep ad spend under control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We review spend, bids, keywords, ads, and conversions regularly, then shift budget toward the campaigns that perform best."
      }
    },
    {
      "@type": "Question",
      "name": "How do you know a campaign is working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We track conversions such as calls, forms, and purchases, not just clicks, and share the numbers in regular reports."
      }
    },
    {
      "@type": "Question",
      "name": "Can you improve a campaign I already run?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can launch a new campaign or review and refine an existing one."
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
        <PpcProcess />
        <PpcComparison />
        {/* <PpcKeyFacts /> */}
        <PpcWhoThisIsFor />
        <PpcTrust />
        <PpcWhyChoose />
        <PpcFaq />
        <PpcCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}