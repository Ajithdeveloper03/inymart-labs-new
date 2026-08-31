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

export default function WebAnalyticsServicePage() {
  return (
    <>
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