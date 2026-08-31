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

export default function PortfolioPage() {
  return (
    <>
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
