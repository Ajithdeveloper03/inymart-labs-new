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
    canonical: '/services/advance-local-seo/',
  },
  title: 'Local SEO Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Local SEO agency in Trichy Tamil Nadu that helps businesses show up first in Google Maps and near me searches.',
  keywords: ['Local SEO agency in Tamil Nadu', 'Local SEO agency in Trichy', 'Advance Local SEO'],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/advance-local-seo/#service",
  "name": "Local SEO Services",
  "url": "https://inymartlabs.com/services/advance-local-seo/",
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
  "@id": "https://inymartlabs.com/services/advance-local-seo/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Local SEO different from regular SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local SEO focuses on location-based searches, giving more weight to your business location, listings, reviews, and map presence than typical ranking factors."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Local SEO service in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Inymart Labs runs Local SEO Service for businesses across Trichy and Tamil Nadu, covering Google Business Profile, citations, reviews, and local content."
      }
    },
    {
      "@type": "Question",
      "name": "How does a Google Business Profile help my local visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It puts your location, services, hours, photos, and reviews directly in front of searchers, and an optimized profile tends to perform better in local search results."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can I expect Local SEO to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It varies based on your industry, competition, current site condition, and target area, though consistent work and monitoring build visibility over time."
      }
    },
    {
      "@type": "Question",
      "name": "Can this help my business show up on Google Maps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work on your Google Business Profile alongside other local signals, citations, reviews, and accurate details, which all feed into your chances of appearing in the map pack."
      }
    },
    {
      "@type": "Question",
      "name": "Which businesses benefit most from Local SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shops, clinics, restaurants, hotels, local service teams, and professional firms that serve a specific area, whether they run one location or several."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/services/advance-local-seo/#breadcrumb",
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
      "name": "Local SEO",
      "item": "https://inymartlabs.com/services/advance-local-seo/"
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
        <LocalSeoKeyFacts />
        <LocalSeoProcess />
        <LocalSeoExpectations />
        <LocalSeoWhyChoose />
        <LocalSeoFaq />
        <LocalSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
