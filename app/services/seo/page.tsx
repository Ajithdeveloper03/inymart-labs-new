import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SeoHeroBanner } from '@/components/seo/SeoHeroBanner';
import { SeoQuickAnswer } from '@/components/seo/SeoQuickAnswer';
import { SeoWhatWeDo } from '@/components/seo/SeoWhatWeDo';
import { SeoWhyChoose } from '@/components/seo/SeoWhyChoose';
import { SeoKeyFacts } from '@/components/seo/SeoKeyFacts';
import { SeoProcess } from '@/components/seo/SeoProcess';
import { SeoWhoThisIsFor } from '@/components/seo/SeoWhoThisIsFor';
import { SeoExpectations } from '@/components/seo/SeoExpectations';
import { SeoFaq } from '@/components/seo/SeoFaq';
import { SeoCta } from '@/components/seo/SeoCta';

export const metadata = {
  alternates: {
    canonical: '/services/seo/',
  },
  title: 'SEO Agency in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is an SEO agency in Trichy, Tamil Nadu that helps businesses rank higher on Google Search and Google Maps.',
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/seo/#service",
  "name": "SEO Services",
  "url": "https://inymartlabs.com/services/seo/",
  "description": "Inymart Labs provides SEO services to help businesses improve search engine visibility, organic rankings, website traffic, leads, and conversions through research-based SEO strategies.",
  "serviceType": "Search Engine Optimization",
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
      "name": "What does Inymart Labs do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs is an SEO agency in Tamil Nadu and SEO agency in Trichy that helps businesses rank higher on Google Search and Google Maps through research-based SEO strategy and transparent monthly reporting."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most businesses start seeing early improvements in 2–3 months, with stronger results building over 6 months as rankings grow."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer SEO for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs offers SEO plans built for small and local businesses that want more visibility without a big budget."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right SEO agency in Tamil Nadu and SEO agency in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs combines deep local market knowledge with proven SEO practices, focusing on real, measurable results instead of vanity metrics."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a new website for SEO to work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Inymart Labs first audits your current website and only recommends changes or a rebuild if it's truly needed."
      }
    },
    {
      "@type": "Question",
      "name": "Will I get regular updates on my SEO progress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs provides clear monthly reports showing rankings, traffic, and leads, explained in simple language."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Inymart Labs located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs is headquartered in Tiruchirappalli (Trichy), Tamil Nadu, and serves clients across Tamil Nadu, India, UAE, UK, and the USA."
      }
    }
  ]
};

export default function SeoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <SeoHeroBanner />
        <SeoQuickAnswer />
        <SeoWhatWeDo />
        <SeoWhyChoose />
        <SeoKeyFacts />
        <SeoProcess />
        <SeoWhoThisIsFor />
        <SeoExpectations />
        <SeoFaq />
        <SeoCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}