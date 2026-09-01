import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutBanner } from '@/components/about/AboutBanner';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { WhatMakesUsDifferent } from '@/components/about/WhatMakesUsDifferent';
import { MeetTheTeam } from '@/components/about/MeetTheTeam';
import { OurApproach } from '@/components/about/OurApproach';
import { WhereWeWork } from '@/components/about/WhereWeWork';
import { AboutFaqs } from '@/components/about/AboutFaqs';
import { AboutCta } from '@/components/about/AboutCta';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about/',
  },
  title: 'About Us | Inymart Labs',
  description: 'Learn about Inymart Labs, a leading digital marketing agency in Tamil Nadu offering SEO, Local SEO, AEO, and GEO services.',
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://inymartlabs.com/about/#aboutpage",
  "url": "https://inymartlabs.com/about/",
  "name": "About Inymart Labs",
  "description": "Learn about Inymart Labs, a digital marketing agency in Tamil Nadu and Tiruchirappalli offering SEO, Local SEO, AEO, GEO, social media marketing, web development, PPC, and AI SEO services.",
  "isPartOf": {
    "@id": "https://inymartlabs.com/#website"
  },
  "about": {
    "@id": "https://inymartlabs.com/#organization"
  },
  "mainEntity": {
    "@id": "https://inymartlabs.com/#organization"
  }
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
        "text": "We offer SEO, Local SEO, AEO, GEO, social media marketing, and effective marketing strategies including web development and PPC to grow visibility, leads, and conversions."
      }
    },
    {
      "@type": "Question",
      "name": "How is Inymart Labs different from other Tamil Nadu agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We place early emphasis on AEO and GEO — helping brands appear in AI tools like ChatGPT and Perplexity, and focusing on online reputation management, not just Google."
      }
    },
    {
      "@type": "Question",
      "name": "How long has Inymart Labs been in business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Founded in 2016 in Tiruchirappalli, with 9+ years of marketing expertise serving clients across India, UAE, UK, and the USA."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas does Inymart Labs serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tamil Nadu (Trichy, Chennai, Madurai, Coimbatore, Salem, Thanjavur), plus India, UAE, UK, the USA, and Australia."
      }
    }
  ]
};

const breadcrumbSchemaNew = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/about/#breadcrumb",
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
      "name": "About",
      "item": "https://inymartlabs.com/about/"
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaNew) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutSchema, faqSchema]) }}
      />
      <Header />
      <main className="flex flex-col min-h-screen space-y-4">
        <AboutBanner />
        <AboutHero />
        <OurStory />
        <WhatMakesUsDifferent />
        <MeetTheTeam />
        <OurApproach />
        <WhereWeWork />
        <AboutFaqs />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
