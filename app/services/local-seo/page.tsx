import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { LocalSeoHeroBanner } from '@/components/local-seo/LocalSeoHeroBanner';
import { LocalSeoQuickAnswer } from '@/components/local-seo/LocalSeoQuickAnswer';
import { LocalSeoWhatWeDo } from '@/components/local-seo/LocalSeoWhatWeDo';
import { LocalSeoWhyChoose } from '@/components/local-seo/LocalSeoWhyChoose';
import { LocalSeoKeyFacts } from '@/components/local-seo/LocalSeoKeyFacts';
import { LocalSeoProcess } from '@/components/local-seo/LocalSeoProcess';
import { LocalSeoWhoThisIsFor } from '@/components/local-seo/LocalSeoWhoThisIsFor';
import { LocalSeoExpectations } from '@/components/local-seo/LocalSeoExpectations';
import { LocalSeoFaq } from '@/components/local-seo/LocalSeoFaq';
import { LocalSeoCta } from '@/components/local-seo/LocalSeoCta';

export const metadata = {
  alternates: {
    canonical: '/services/local-seo/',
  },
  title: 'Local SEO Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Local SEO agency in Trichy Tamil Nadu that helps businesses show up first in Google Maps and near me searches.',
  keywords: ['Local SEO agency in Tamil Nadu', 'Local SEO agency in Trichy'],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/local-seo/#service",
  "name": "Local SEO Services",
  "url": "https://inymartlabs.com/services/local-seo/",
  "description": "Inymart Labs provides Local SEO services to help businesses improve their visibility on Google Search and Google Maps, attract nearby customers, generate enquiries, and grow their local presence.",
  "serviceType": "Local Search Engine Optimization",
  "provider": {
    "@type": "Organization",
    "@id": "https://inymartlabs.com/#organization",
    "name": "Inymart Labs",
    "url": "https://inymartlabs.com/"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Tiruchirappalli"
    },
    {
      "@type": "City",
      "name": "Chennai"
    },
    {
      "@type": "City",
      "name": "Madurai"
    },
    {
      "@type": "City",
      "name": "Coimbatore"
    },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a Local SEO agency in Tamil Nadu do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Local SEO agency in Tamil Nadu like Inymart Labs helps businesses show up first in Google Maps and \"near me\" search results through Google Business Profile optimization, listings, reviews, and location-based content."
      }
    },
    {
      "@type": "Question",
      "name": "How is Local SEO different from regular SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local SEO focuses specifically on getting found by nearby customers through Google Maps and local search results, while regular SEO covers your whole website's visibility."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Local SEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many businesses see improvements in local visibility within a few weeks, with stronger results building over 2–3 months."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right Local SEO agency in Tamil Nadu and Local SEO agency in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs combines deep local market knowledge with proven Local SEO practices, focusing on real calls and visits, not just rankings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with managing customer reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Review collection and response are a core part of Inymart Labs' Local SEO process."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help if my business has multiple locations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs manages Local SEO for single-location businesses as well as multi-branch businesses across Tamil Nadu."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas does Inymart Labs' Local SEO service cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs provides Local SEO for businesses across Trichy, Chennai, Madurai, Coimbatore, and nearby regions in Tamil Nadu."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/services/local-seo/#breadcrumb",
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
      "name": "Local SEO Services",
      "item": "https://inymartlabs.com/services/local-seo/"
    }
  ]
};

export default function LocalSeoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <LocalSeoHeroBanner />
        <LocalSeoQuickAnswer />
        <LocalSeoWhatWeDo />
        <LocalSeoWhyChoose />
        <LocalSeoKeyFacts />
        <LocalSeoProcess />
        <LocalSeoWhoThisIsFor />
        <LocalSeoExpectations />
        <LocalSeoFaq />
        <LocalSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}