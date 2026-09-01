import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SmmHeroBanner } from '@/components/smm/SmmHeroBanner';
import { SmmQuickAnswer } from '@/components/smm/SmmQuickAnswer';
import { SmmWhatIs } from '@/components/smm/SmmWhatIs';
import { SmmWhatWeDo } from '@/components/smm/SmmWhatWeDo';
import { SmmWhyChoose } from '@/components/smm/SmmWhyChoose';
import { SmmComparison } from '@/components/smm/SmmComparison';
import { SmmKeyFacts } from '@/components/smm/SmmKeyFacts';
import { SmmProcess } from '@/components/smm/SmmProcess';
import { SmmWhoThisIsFor } from '@/components/smm/SmmWhoThisIsFor';
import { SmmExpectations } from '@/components/smm/SmmExpectations';
import { SmmFaq } from '@/components/smm/SmmFaq';
import { SmmTrust } from '@/components/smm/SmmTrust';
import { SmmCta } from '@/components/smm/SmmCta';

export const metadata = {
  alternates: {
    canonical: '/services/smm/',
  },
  title: 'Social Media Marketing Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a social media marketing agency in Trichy, Tamil Nadu that plans, creates, and manages paid ad campaigns on Facebook, Instagram, and LinkedIn.',
  keywords: ['Social Media Marketing Agency in Trichy'],
};

const smmSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/smm/#service",
  "name": "Social Media Marketing Services",
  "url": "https://inymartlabs.com/services/smm/",
  "description": "Inymart Labs provides Social Media Marketing services to help businesses increase brand awareness, reach their target audience, drive engagement, generate quality leads, and achieve measurable business growth.",
  "serviceType": "Social Media Marketing",
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
  "@id": "https://inymartlabs.com/services/smm/#breadcrumb",
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
      "name": "SMM Services",
      "item": "https://inymartlabs.com/services/smm/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a social media marketing agency in Tamil Nadu do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A social media marketing agency in Tamil Nadu helps businesses promote their products and services through platforms such as Facebook, Instagram, LinkedIn, and other relevant social channels. Services may include strategy, content creation, paid advertising, audience targeting, campaign management, and performance tracking."
      }
    },
    {
      "@type": "Question",
      "name": "Is social media marketing the same as social media optimization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Social media marketing focuses on promoting a business through organic content and paid advertising, while social media optimization focuses on improving social profiles, content, engagement, and overall visibility. Both can work together as part of a complete social media strategy."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I budget for social media ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ideal social media advertising budget depends on your business goals, target audience, industry, location, competition, and campaign objectives. Inymart Labs can recommend a suitable budget based on your marketing goals and expected results."
      }
    },
    {
      "@type": "Question",
      "name": "How soon will I see results from social media ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Social media advertising can generate initial data and engagement soon after a campaign launches, but the time required to achieve consistent results varies based on the audience, creative, offer, budget, campaign objective, and ongoing optimisation."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right social media marketing agency in Tamil Nadu and social media marketing agency in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs creates customised social media marketing strategies based on your business goals, target audience, industry, and budget. We focus on effective campaign planning, audience targeting, creative testing, performance monitoring, and continuous optimisation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you run ads for both local and online businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Inymart Labs can manage social media advertising campaigns for both local and online businesses. Campaigns can be customised to target specific locations, audiences, interests, behaviours, or online customer segments."
      }
    },
    {
      "@type": "Question",
      "name": "Will I know exactly where my ad budget is going?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Campaign performance can be monitored through regular reporting that shows important metrics such as ad spend, impressions, clicks, reach, leads, conversions, cost per result, and overall campaign performance."
      }
    }
  ]
};

export default function SmmServicePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smmSchema) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SmmHeroBanner />
        <SmmQuickAnswer />
        <SmmWhatIs />
        <SmmWhatWeDo />
        <SmmWhyChoose />
        <SmmComparison />
        <SmmKeyFacts />
        <SmmProcess />
        <SmmWhoThisIsFor />
        <SmmExpectations />
        <SmmTrust />
        <SmmFaq />
        <SmmCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}