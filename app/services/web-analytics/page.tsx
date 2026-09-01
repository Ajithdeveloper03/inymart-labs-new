import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WebAnalyticsHeroBanner } from '@/components/web-analytics/WebAnalyticsHeroBanner';
import { WebAnalyticsQuickAnswer } from '@/components/web-analytics/WebAnalyticsQuickAnswer';
import { WebAnalyticsWhatIs } from '@/components/web-analytics/WebAnalyticsWhatIs';
import { WebAnalyticsWhatWeDo } from '@/components/web-analytics/WebAnalyticsWhatWeDo';
import { WebAnalyticsWhyChoose } from '@/components/web-analytics/WebAnalyticsWhyChoose';
import { WebAnalyticsComparison } from '@/components/web-analytics/WebAnalyticsComparison';
import { WebAnalyticsKeyFacts } from '@/components/web-analytics/WebAnalyticsKeyFacts';
import { WebAnalyticsProcess } from '@/components/web-analytics/WebAnalyticsProcess';
import { WebAnalyticsWhoThisIsFor } from '@/components/web-analytics/WebAnalyticsWhoThisIsFor';
import { WebAnalyticsExpectations } from '@/components/web-analytics/WebAnalyticsExpectations';
import { WebAnalyticsTrust } from '@/components/web-analytics/WebAnalyticsTrust';
import { WebAnalyticsFaq } from '@/components/web-analytics/WebAnalyticsFaq';
import { WebAnalyticsCta } from '@/components/web-analytics/WebAnalyticsCta';

export const metadata = {
  alternates: {
    canonical: '/services/web-analytics/',
  },
  title: 'Web Analytics Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Web Analytics Service in Trichy Tamil Nadu that audits, fixes, and interprets website tracking data.',
  keywords: ['Web Analytics Service in Tamil Nadu', 'Web Analytics Service in Trichy'],
};

const webAnalyticsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/web-analytics/#service",
  "name": "Web Analytics Services",
  "url": "https://inymartlabs.com/services/web-analytics/",
  "description": "Inymart Labs provides Web Analytics services to help businesses track website performance, understand user behaviour, measure marketing results, and make data-driven decisions for better business growth.",
  "serviceType": "Web Analytics",
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
  "@id": "https://inymartlabs.com/services/web-analytics/#breadcrumb",
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
      "name": "Web Analytics Services",
      "item": "https://inymartlabs.com/services/web-analytics/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a Web Analytics Service do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Web Analytics Service helps businesses track, analyse, and understand website data such as traffic, user behaviour, conversions, engagement, and campaign performance. It helps identify opportunities to improve website performance and marketing results."
      }
    },
    {
      "@type": "Question",
      "name": "I already have Google Analytics installed - do I still need this service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Having Google Analytics installed provides access to data, but a Web Analytics Service helps interpret that data, identify important trends, find conversion issues, track key metrics, and turn website data into actionable marketing insights."
      }
    },
    {
      "@type": "Question",
      "name": "How often will I receive reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reporting frequency can be customised based on your business requirements. Inymart Labs can provide regular analytics reports covering website traffic, user behaviour, conversions, campaign performance, and other important metrics."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right Web Analytics Service in Tamil Nadu and Web Analytics Service in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs provides customised web analytics solutions focused on understanding user behaviour, measuring marketing performance, identifying conversion opportunities, and helping businesses make data-driven decisions."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help me understand why my website isn't converting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can analyse website traffic, user journeys, landing pages, engagement metrics, conversion paths, and other available data to identify potential reasons for low conversions and recommend areas for improvement."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to buy any special tools for this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Web analytics can often be managed using tools such as Google Analytics and Google Tag Manager. Depending on your business requirements, additional analytics or reporting tools may be recommended."
      }
    }
  ]
};

export default function WebAnalyticsServicePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAnalyticsSchema) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <WebAnalyticsHeroBanner />
        <WebAnalyticsQuickAnswer />
        <WebAnalyticsWhatIs />
        <WebAnalyticsWhatWeDo />
        <WebAnalyticsWhyChoose />
        <WebAnalyticsComparison />
        <WebAnalyticsKeyFacts />
        <WebAnalyticsProcess />
        <WebAnalyticsWhoThisIsFor />
        <WebAnalyticsExpectations />
        <WebAnalyticsTrust />
        <WebAnalyticsFaq />
        <WebAnalyticsCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}