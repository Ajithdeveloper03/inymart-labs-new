import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SmoHeroBanner } from '@/components/smo/SmoHeroBanner';
import { SmoQuickAnswer } from '@/components/smo/SmoQuickAnswer';
import { SmoWhatWeDo } from '@/components/smo/SmoWhatWeDo';
import { SmoWhyChoose } from '@/components/smo/SmoWhyChoose';
import { SmoKeyFacts } from '@/components/smo/SmoKeyFacts';
import { SmoProcess } from '@/components/smo/SmoProcess';
import { SmoWhoThisIsFor } from '@/components/smo/SmoWhoThisIsFor';
import { SmoExpectations } from '@/components/smo/SmoExpectations';
import { SmoFaq } from '@/components/smo/SmoFaq';
import { SmoCta } from '@/components/smo/SmoCta';

export const metadata = {
  alternates: {
    canonical: '/services/smo/',
  },
  title: 'Social Media Optimization Company in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a social media optimization company in Tamil Nadu and social media optimization company in Trichy that builds and manages organic social media presence.',
  keywords: ['Social Media Optimization Company in Trichy'],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/smo/#service",
  "name": "Social Media Optimization Services",
  "url": "https://inymartlabs.com/services/smo/",
  "description": "Inymart Labs provides Social Media Optimization services to help businesses build a strong social media presence, improve brand visibility, increase audience engagement, and generate quality enquiries.",
  "serviceType": "Social Media Optimization",
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
  "@id": "https://inymartlabs.com/services/smo/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SMO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMO, short for Social Media Optimization, focuses on strengthening your social profiles and content to build visibility, engagement, and brand recognition."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer SMO service in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Inymart Labs runs SMO Service for businesses across Trichy and Tamil Nadu, spanning strategy, content, profile work, and engagement."
      }
    },
    {
      "@type": "Question",
      "name": "How is SMO different from SMM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMO focuses on organic profile and content optimization, while SMM typically refers to paid advertising campaigns on social platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Which platforms do you work on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mainly Facebook, Instagram, LinkedIn, and YouTube, depending on where your audience actually spends time."
      }
    },
    {
      "@type": "Question",
      "name": "How often will you post for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Posting frequency depends on your strategy and industry, but we build a content calendar to keep publishing consistent."
      }
    },
    {
      "@type": "Question",
      "name": "Will you respond to comments and messages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, active engagement with comments and messages is part of the service, since it builds trust and surfaces customer feedback."
      }
    },
    {
      "@type": "Question",
      "name": "How do you measure whether SMO is working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We track reach, engagement, follower growth, profile visits, and enquiries to see what's performing and where to adjust."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/services/smo/#breadcrumb",
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
      "name": "Social Media Optimization",
      "item": "https://inymartlabs.com/services/smo/"
    }
  ]
};

export default function SmoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SmoHeroBanner />
        <SmoQuickAnswer />
        <SmoWhatWeDo />
        <SmoWhyChoose />
        <SmoKeyFacts />
        <SmoProcess />
        <SmoWhoThisIsFor />
        <SmoExpectations />
        <SmoFaq />
        <SmoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}