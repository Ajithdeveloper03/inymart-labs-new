import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { AiSeoHeroBanner } from '@/components/ai-seo/AiSeoHeroBanner';
import { AiSeoQuickAnswer } from '@/components/ai-seo/AiSeoQuickAnswer';
import { AiSeoWhatIs } from '@/components/ai-seo/AiSeoWhatIs';
import { AiSeoWhatWeDo } from '@/components/ai-seo/AiSeoWhatWeDo';
import { AiSeoWhyChoose } from '@/components/ai-seo/AiSeoWhyChoose';
import { AiSeoComparison } from '@/components/ai-seo/AiSeoComparison';
import { AiSeoKeyFacts } from '@/components/ai-seo/AiSeoKeyFacts';
import { AiSeoProcess } from '@/components/ai-seo/AiSeoProcess';
import { AiSeoWhoThisIsFor } from '@/components/ai-seo/AiSeoWhoThisIsFor';
import { AiSeoExpectations } from '@/components/ai-seo/AiSeoExpectations';
import { AiSeoTrust } from '@/components/ai-seo/AiSeoTrust';
import { AiSeoFaq } from '@/components/ai-seo/AiSeoFaq';
import { AiSeoCta } from '@/components/ai-seo/AiSeoCta';

export const metadata = {
  alternates: {
    canonical: '/services/ai-seo-services/',
  },
  title: 'AI SEO Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs offers an AI SEO Service in Trichy, Tamil Nadu also called an AEO Service (Answer Engine Optimization), that helps businesses get found and recommended by AI tools.',
};

const aiSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/ai-seo-services/#service",
  "name": "AI SEO Services",
  "url": "https://inymartlabs.com/services/ai-seo-services/",
  "description": "Inymart Labs provides AI SEO services to help businesses optimize their online presence for AI-powered search, improve visibility across search engines and AI platforms, and attract relevant audiences.",
  "serviceType": "AI Search Engine Optimization",
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
  "@id": "https://inymartlabs.com/services/ai-seo-services/#breadcrumb",
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
      "name": "AI SEO Services",
      "item": "https://inymartlabs.com/services/ai-seo-services/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/ai-seo-services/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AI SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI SEO, also known as Answer Engine Optimization (AEO), prepares your website information for answer-based search. It focuses on clear answers, trustworthy facts, strong entities, and structured information so AI platforms can understand your business."
      }
    },
    {
      "@type": "Question",
      "name": "Does Inymart Labs provide AI SEO services in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs offers AI SEO Services in Trichy and Tamil Nadu, combining digital marketing experience with AI-focused content, entity building, AEO, and monitoring."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my business need AI SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Customers increasingly ask AI platforms for recommendations. Without AI SEO, these platforms may not mention your business, or may show incomplete or outdated details."
      }
    },
    {
      "@type": "Question",
      "name": "Does AI SEO replace traditional SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. AI SEO works alongside traditional SEO. Traditional SEO focuses on rankings, organic traffic, and website authority, while AI SEO focuses on direct answers, AI understanding, citations, and recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "How does an AI SEO service begin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It begins with an AI Visibility Audit. We check how AI platforms currently understand your business, including brand mentions, service descriptions, locations, and recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "How is AI SEO progress measured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We track visibility signals, business mentions, information accuracy, recommendations, content coverage, and changes in AI representation. Monthly reporting shows your progress."
      }
    },
    {
      "@type": "Question",
      "name": "Which businesses can benefit from AI SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local businesses, professional service providers, ecommerce brands, startups, growing companies, and established organizations can all benefit."
      }
    }
  ]
};

export default function AiSeoServicePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSeoSchema) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <AiSeoHeroBanner />
        <AiSeoQuickAnswer />
        <AiSeoWhatIs />
        <AiSeoWhatWeDo />
        <AiSeoProcess />
        <AiSeoComparison />
        <AiSeoWhoThisIsFor />
        <AiSeoExpectations />
        <AiSeoWhyChoose />
        <AiSeoFaq />
        <AiSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}