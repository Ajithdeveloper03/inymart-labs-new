import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SeoHeroBanner } from '@/components/seo/SeoHeroBanner';
import { SeoQuickAnswer } from '@/components/seo/SeoQuickAnswer';
import { SeoWhatWeDo } from '@/components/seo/SeoWhatWeDo';
import { SeoWhyChoose } from '@/components/seo/SeoWhyChoose';
import { SeoKeyFacts } from '@/components/seo/SeoKeyFacts';
import { SeoProcess } from '@/components/seo/SeoProcess';
import { SeoWhoThisIsFor } from '@/components/seo/SeoWhoThisIsFor';
import { SeoExpectations } from '@/components/seo/SeoExpectations';
import { SeoFaq } from '@/components/seo/SeoFaq';
import { SeoCta } from '@/components/seo/SeoCta';

export const metadata = {
  alternates: {
    canonical: '/services/seo/',
  },
  title: 'SEO Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is an SEO agency in Trichy, Tamil Nadu that helps businesses rank higher on Google Search and Google Maps.',
  keywords: ['SEO agency in Trichy'],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/seo/#service",
  "name": "SEO Services",
  "url": "https://inymartlabs.com/services/seo/",
  "description": "Inymart Labs provides SEO services to help businesses improve search engine visibility, organic rankings, website traffic, leads, and conversions through research-based SEO strategies.",
  "serviceType": "Search Engine Optimization",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/seo/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly does an SEO service in Trichy include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It typically covers keyword research, technical fixes, on-page work, content development, local visibility, and link-building, all aimed at growing your organic presence in the markets you target."
      }
    },
    {
      "@type": "Question",
      "name": "How long before SEO starts showing results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your competition, current site condition, target keywords, and industry, but steady work and regular monitoring are what drive lasting improvement."
      }
    },
    {
      "@type": "Question",
      "name": "Can SEO bring in more enquiries for a local business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, local SEO brings your business into location-based search results, connecting you with nearby customers actively looking for what you offer."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle SEO for businesses outside Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we build SEO plans for businesses reaching customers well beyond Trichy, adjusting the approach based on where your audience is actually located."
      }
    },
    {
      "@type": "Question",
      "name": "What's the first step to starting SEO with Inymart Labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It starts with a conversation about your website and goals, after which we assess where your search presence stands today and sketch out a practical plan suited to your audience and competitors."
      }
    },
    {
      "@type": "Question",
      "name": "Will SEO work alongside my other marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SEO tends to complement paid ads and social media rather than compete with them, and can even lift how those other channels perform."
      }
    },
    {
      "@type": "Question",
      "name": "How do you decide which keywords to target?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus on terms that show real buying or enquiry intent, rather than high-volume terms that bring visitors unlikely to convert."
      }
    }
  ]
};

const breadcrumbSchemaNew = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/services/seo/#breadcrumb",
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
      "name": "SEO Services",
      "item": "https://inymartlabs.com/services/seo/"
    }
  ]
};

export default function SeoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaNew) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SeoHeroBanner />
        <SeoQuickAnswer />
        <SeoWhatWeDo />
        <SeoWhyChoose />
        <SeoKeyFacts />
        <SeoProcess />
        <SeoWhoThisIsFor />
        <SeoExpectations />
        <SeoFaq />
        <SeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}