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
      "name": "Services",
      "item": "https://inymartlabs.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Analytics",
      "item": "https://inymartlabs.com/services/web-analytics/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/web-analytics/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is web analytics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's the process of collecting and interpreting website data, covering where visitors come from, what pages they view, and what actions they take."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer web analytics service in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Inymart Labs runs a Web Analytics Service for businesses across Trichy and Tamil Nadu, covering everything from tracking setup to ongoing reporting."
      }
    },
    {
      "@type": "Question",
      "name": "I already have Google Analytics installed, do I still need this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often yes, having the tool installed doesn't mean it's tracking the right things. We check and fix common setup issues that quietly skew your data."
      }
    },
    {
      "@type": "Question",
      "name": "What can analytics actually tell me about my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can show which marketing channels bring valuable visitors, which pages perform well, and where people drop off before converting."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between the two main tracking tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One focuses on visitor behaviour once someone is on your site, while the other shows how you appear in search results, covering queries, clicks, and indexing."
      }
    },
    {
      "@type": "Question",
      "name": "How often will I get reports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We set up regular reporting so you can track performance over time, though the exact frequency depends on your plan."
      }
    },
    {
      "@type": "Question",
      "name": "Can you set up tracking for calls and form submissions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we configure event and conversion tracking for calls, forms, downloads, purchases, and other actions specific to your business."
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
        <WebAnalyticsWhyChoose />
        <WebAnalyticsProcess />
        <WebAnalyticsExpectations />
        <WebAnalyticsWhoThisIsFor />
        <WebAnalyticsFaq />
        <WebAnalyticsCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}