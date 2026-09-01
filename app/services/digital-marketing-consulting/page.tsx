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
      "name": "Digital Marketing Consulting",
      "item": "https://inymartlabs.com/services/digital-marketing-consulting/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Digital Marketing Consulting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital Marketing Consulting provides expert guidance to help businesses plan, improve, and optimise their online marketing strategies. It can cover SEO, paid advertising, social media, content marketing, analytics, conversion optimisation, and overall digital growth."
      }
    },
    {
      "@type": "Question",
      "name": "Do you only offer advice, or do you also implement the strategy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs can provide both strategic guidance and implementation support. Depending on your business requirements, we can help develop the strategy and also assist with executing and optimising the recommended digital marketing activities."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a consulting engagement typically last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The duration of a digital marketing consulting engagement depends on your business goals, current marketing setup, project scope, and requirements. Consulting can range from short-term strategic sessions to ongoing support and optimisation."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right choice for Digital Marketing Consulting in Tamil Nadu and Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs provides customised digital marketing consulting based on your business goals, target audience, industry, competition, and existing marketing activities. Our approach focuses on practical strategies, measurable objectives, and actionable recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "Is this service only for businesses without any marketing in place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Digital Marketing Consulting can benefit businesses at different stages, including businesses that already have marketing campaigns in place. We can review existing strategies, identify gaps, recommend improvements, and help optimise current marketing efforts."
      }
    },
    {
      "@type": "Question",
      "name": "Will you help my team understand the strategy, not just hand over a report?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs focuses on helping your team understand the recommended strategy, priorities, processes, and key performance metrics so they can confidently apply the insights to their digital marketing activities."
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
