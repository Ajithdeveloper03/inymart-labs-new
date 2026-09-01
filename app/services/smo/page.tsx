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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a social media optimization company in Tamil Nadu do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A social media optimization company in Tamil Nadu like Inymart Labs plans, creates, and manages organic content on platforms like Facebook, Instagram, and LinkedIn to build brand presence and generate real enquiries."
      }
    },
    {
      "@type": "Question",
      "name": "How often will you post on my social media pages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on your plan, but most businesses see good results with 3–5 posts per week across key platforms."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle both content creation and posting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs designs the content, writes the captions, and manages posting and scheduling — you don't have to do anything."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right social media optimization company in Tamil Nadu and social media optimization company in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs combines local audience understanding with a clear content strategy, focusing on real engagement instead of just follower counts."
      }
    },
    {
      "@type": "Question",
      "name": "Can you manage my Instagram, Facebook, and LinkedIn together?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs can manage one platform or all of them together, depending on where your customers are most active."
      }
    },
    {
      "@type": "Question",
      "name": "Will I get to approve content before it's posted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs shares your content calendar in advance so you can review and approve everything before it goes live."
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
      "name": "SMO Services",
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