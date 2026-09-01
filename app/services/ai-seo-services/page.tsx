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
      "name": "AI SEO Services",
      "item": "https://inymartlabs.com/services/ai-seo-services/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AEO or AI SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO stands for Answer Engine Optimisation, while AI SEO focuses on improving a business's visibility across AI-powered search and answer platforms. These strategies help make content clear, relevant, authoritative, and easier for search engines and AI systems to understand."
      }
    },
    {
      "@type": "Question",
      "name": "Is AI SEO different from regular SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Traditional SEO primarily focuses on improving visibility in search engine results, while AI SEO also considers how content and business information may be discovered, understood, and referenced by AI-powered search and answer systems. Both approaches can work together."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from AI SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time required to see results from AI SEO varies depending on factors such as website authority, content quality, competition, online presence, and the strategies implemented. Consistent optimisation and quality content may improve visibility over time."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right AI SEO Service in Tamil Nadu and AI SEO Service in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs provides customised AI SEO strategies based on your business goals, industry, target audience, and online presence. Our approach focuses on creating useful content, improving information clarity, strengthening website visibility, and preparing content for AI-powered search experiences."
      }
    },
    {
      "@type": "Question",
      "name": "Do I still need traditional SEO if I invest in AI SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Traditional SEO remains important because AI SEO and traditional SEO complement each other. A strong technical foundation, quality content, relevant keywords, website optimisation, and authority signals can support visibility across both traditional search engines and AI-powered search experiences."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fix incorrect information AI tools currently show about my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can help identify inaccurate or inconsistent business information across online sources and improve the accuracy and consistency of your website and business profiles. However, AI platforms control their own outputs, so specific corrections or changes cannot be guaranteed."
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
        <AiSeoWhyChoose />
        <AiSeoComparison />
        <AiSeoKeyFacts />
        <AiSeoProcess />
        <AiSeoWhoThisIsFor />
        <AiSeoExpectations />
        <AiSeoTrust />
        <AiSeoFaq />
        <AiSeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}