import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PortfolioBanner } from '@/components/portfolio/PortfolioBanner';
import { PortfolioQuickAnswer } from '@/components/portfolio/PortfolioQuickAnswer';
import { PortfolioBrands } from '@/components/portfolio/PortfolioBrands';
import { PortfolioKeyFacts } from '@/components/portfolio/PortfolioKeyFacts';
import { PortfolioWhyTrustUs } from '@/components/portfolio/PortfolioWhyTrustUs';
import { PortfolioFaqs } from '@/components/portfolio/PortfolioFaqs';
import { PortfolioCta } from '@/components/portfolio/PortfolioCta';

export const metadata: Metadata = {
  alternates: {
    canonical: '/portfolio/',
  },
  title: 'Our Portfolio | Inymart Labs - Digital Marketing Agency',
  description: 'View the portfolio of Inymart Labs, a Digital Marketing Agency in Trichy, Tamil Nadu that has served 50+ brands across diverse industries.',
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://inymartlabs.com/portfolio/#collectionpage",
  "url": "https://inymartlabs.com/portfolio/",
  "name": "Portfolio | Inymart Labs",
  "description": "Explore the portfolio of Inymart Labs featuring digital marketing, SEO, web development, social media marketing, and other digital marketing projects.",
  "isPartOf": {
    "@id": "https://inymartlabs.com/#website"
  },
  "about": {
    "@id": "https://inymartlabs.com/#organization"
  },
  "publisher": {
    "@id": "https://inymartlabs.com/#organization"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/portfolio/#breadcrumb",
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
      "name": "Portfolio",
      "item": "https://inymartlabs.com/portfolio/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What kind of businesses has Inymart Labs worked with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs works with businesses across different industries, including startups, small businesses, local businesses, service providers, and growing companies that want to improve their online presence and generate more leads."
      }
    },
    {
      "@type": "Question",
      "name": "Does Inymart Labs only work with businesses in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Although Inymart Labs is based in Tamil Nadu, the agency can work with businesses from different locations and provide digital marketing services based on their business goals and requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can I see examples of Inymart Labs' client work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs can share relevant examples, case studies, or selected client work where permission is available. The examples may demonstrate different digital marketing strategies and campaign outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "What services have these clients used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients may use services such as SEO, Local SEO, Google Ads, PPC, social media marketing, social media optimisation, web analytics, web development, and digital marketing consulting depending on their specific business needs."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right Digital Marketing Agency in Trichy, Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs provides customised digital marketing strategies based on each business's goals, target audience, industry, competition, and budget. The approach focuses on measurable performance, consistent optimisation, and building sustainable online growth."
      }
    }
  ]
};

export default function PortfolioPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <Header />
      <main className="flex flex-col min-h-screen gap-4 [&>*:not(:nth-child(6))]:!pt-8 [&>*:not(:nth-child(6))]:!pb-4 [&>*:nth-child(6)]:!pt-12 [&>*:nth-child(6)]:!pb-12">
        <PortfolioBanner />
        <PortfolioQuickAnswer />
        <PortfolioBrands />
        <PortfolioKeyFacts />
        <PortfolioWhyTrustUs />
        <PortfolioFaqs />
        <PortfolioCta />
      </main>
      <Footer />
    </>
  );
}
