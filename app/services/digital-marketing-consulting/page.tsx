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
  keywords: ['Digital Marketing Consulting in Tamil Nadu', 'Digital Marketing Consulting in Trichy'],
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/services/digital-marketing-consulting/#breadcrumb",
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
      "name": "Digital Marketing Consulting",
      "item": "https://inymartlabs.com/services/digital-marketing-consulting/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/digital-marketing-consulting/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is digital marketing consulting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is expert guidance that reviews your current marketing, studies your goals and competitors, and gives you a prioritised roadmap for improvement."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer digital marketing consulting in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs provides a Digital Marketing Consulting Service in Trichy and Tamil Nadu for businesses that want a clearer strategy."
      }
    },
    {
      "@type": "Question",
      "name": "What does a digital marketing audit include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We review your website, SEO, social media, paid campaigns, content, and analytics to show what works and where to improve."
      }
    },
    {
      "@type": "Question",
      "name": "Will I get a generic plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Recommendations depend on your own website, market, audience, and budget."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help implement the plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can advise your in-house team or support the work alongside them, depending on your needs."
      }
    },
    {
      "@type": "Question",
      "name": "Who should consider marketing consulting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Businesses starting out, reviewing an existing strategy, or planning their next stage of growth."
      }
    },
    {
      "@type": "Question",
      "name": "Which marketing areas can you advise on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO, social media, paid advertising, web analytics, and competitor and market analysis."
      }
    }
  ]
};

export default function DigitalMarketingConsultingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dmcSchema) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <DmcHeroBanner />
        <DmcQuickAnswer />
        <DmcWhatIs />
        <DmcWhatWeDo />
        <DmcProcess />
        <DmcComparison />
        <DmcWhoThisIsFor />
        <DmcWhyChoose />
        {/* <DmcKeyFacts /> */}
        {/* <DmcTrust /> */}
        <DmcFaq />
        <DmcCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
