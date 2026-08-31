import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { Brands } from '@/components/sections/Brands';
import { Industries } from '@/components/sections/Industries';
import { WhyDigitalMarketing } from '@/components/sections/WhyDigitalMarketing';
import { Faqs } from '@/components/sections/Faqs';
import { FinalCta } from '@/components/sections/FinalCta';
import { PopupTrigger } from '@/components/PopupTrigger';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://inymartlabs.com/#webpage",
  "url": "https://inymartlabs.com/",
  "name": "Inymart Labs - Digital Marketing Agency in Tiruchirappalli",
  "description": "Inymart Labs is a digital marketing agency in Tiruchirappalli, Tamil Nadu, offering SEO, Local SEO, AEO, GEO, social media marketing, web development, PPC, and AI SEO services.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://inymartlabs.com/#website",
    "url": "https://inymartlabs.com/",
    "name": "Inymart Labs"
  },
  "about": {
    "@id": "https://inymartlabs.com/#localbusiness"
  },
  "publisher": {
    "@id": "https://inymartlabs.com/#localbusiness"
  }
};

export const metadata = {
  title: 'Digital Marketing Agency Tamilnadu: Your Growth Partner',
  description: "Partner with our digital marketing agency in Tamil Nadu to unlock your business's potential. Learn how we can help you achieve your growth objectives!",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why should I choose Inymart Labs for digital marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs combines 10+ years of experience, customized strategies, transparent reporting, and result-driven marketing to help businesses improve their online presence, generate quality leads, and achieve sustainable growth."
      }
    },
    {
      "@type": "Question",
      "name": "What digital marketing services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide complete digital marketing solutions, including SEO, Local SEO, AI Search Optimization, Website Design & Development, Social Media Marketing, Content Marketing, Google Business Profile Optimization, and Branding Services."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with startups and small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work with startups, small businesses, SMEs, corporate companies, educational institutions, healthcare providers, and eCommerce businesses by creating strategies that fit their goals and budget."
      }
    },
    {
      "@type": "Question",
      "name": "How long does SEO take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO is a long-term investment. Depending on your industry, competition, and website condition, noticeable improvements usually take 3 to 6 months, while continuous optimisation delivers long-term growth."
      }
    },
    {
      "@type": "Question",
      "name": "What is Local SEO, and why is it important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local SEO helps your business appear in Google Search and Google Maps when customers search for services near them. It improves local visibility, attracts nearby customers, and increases enquiries."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help improve my Google Business Profile ranking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We optimize your Google Business Profile by improving business information, local citations, reviews, keywords, geo-tagging, and local SEO strategies to enhance your Google Maps visibility."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide customised digital marketing packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer Basic, Premium, and Ecommerce Packages, and we can also create customised digital marketing solutions based on your business objectives, industry, and budget."
      }
    },
    {
      "@type": "Question",
      "name": "How do you measure the success of a digital marketing campaign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We track important performance metrics such as website traffic, keyword rankings, lead generation, conversions, user engagement, and return on investment (ROI) to measure campaign success."
      }
    },
    {
      "@type": "Question",
      "name": "Why is digital marketing important for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital marketing helps your business increase online visibility, reach the right audience, build brand credibility, generate qualified leads, improve customer engagement, and grow revenue in today's competitive digital landscape."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with Inymart Labs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting started is simple. Contact our team for a free consultation, discuss your business goals, receive a customized digital marketing strategy, and let our experts help you achieve measurable growth in your business online."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqSchema]) }}
      />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Portfolio />
        <Brands />
        <Industries />
        <WhyDigitalMarketing />
        <PopupTrigger />
        <Faqs />
        <FinalCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
