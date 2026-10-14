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
import { SmmReporting } from '@/components/smm/SmmReporting';
import { SmmReportingAndExpectations } from '@/components/smm/SmmReportingAndExpectations';
import { SmmWhoThisIsFor } from '@/components/smm/SmmWhoThisIsFor';
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
      "name": "Services",
      "item": "https://inymartlabs.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Social Media Marketing",
      "item": "https://inymartlabs.com/services/smm/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/smm/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SMM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMM, or Social Media Marketing, means running paid campaigns on platforms like Facebook and Instagram to reach a chosen audience beyond your existing followers."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer SMM service in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Inymart Labs runs SMM campaigns for businesses across Trichy and Tamil Nadu, covering strategy, creative, setup, testing, and reporting."
      }
    },
    {
      "@type": "Question",
      "name": "How is SMM different from organic social media management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Organic posts only reach your existing followers. SMM uses paid ads to reach new people chosen by location, interests, and behaviour."
      }
    },
    {
      "@type": "Question",
      "name": "Which platforms do you run ads on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mainly Facebook and Instagram, along with LinkedIn and other platforms when they suit your audience and goals."
      }
    },
    {
      "@type": "Question",
      "name": "What can SMM realistically bring in for a business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the goal set, but common outcomes include leads, calls, site visits, enquiries, bookings, and online sales."
      }
    },
    {
      "@type": "Question",
      "name": "How do you make sure ad spend isn't wasted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We keep an eye on what each click and lead costs, how many convert, and how spend compares to return, then shift budget toward what's actually performing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you target a specific area for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, local campaigns can be built to reach people within a specific city or region."
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
        <SmmWhyChoose />
        <SmmProcess />
        <SmmReportingAndExpectations />
        <SmmWhoThisIsFor />
        <SmmFaq />
        <SmmCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}