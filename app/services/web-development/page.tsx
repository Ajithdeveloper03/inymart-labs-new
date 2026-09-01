import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WebDevHeroBanner } from '@/components/web-development/WebDevHeroBanner';
import { WebDevQuickAnswer } from '@/components/web-development/WebDevQuickAnswer';
import { WebDevWhatIs } from '@/components/web-development/WebDevWhatIs';
import { WebDevWhatWeDo } from '@/components/web-development/WebDevWhatWeDo';
import { WebDevWhyChoose } from '@/components/web-development/WebDevWhyChoose';
import { WebDevComparison } from '@/components/web-development/WebDevComparison';
import { WebDevKeyFacts } from '@/components/web-development/WebDevKeyFacts';
import { WebDevProcess } from '@/components/web-development/WebDevProcess';
import { WebDevServices } from '@/components/web-development/WebDevServices';
import { WebDevWhoThisIsFor } from '@/components/web-development/WebDevWhoThisIsFor';
import { WebDevExpectations } from '@/components/web-development/WebDevExpectations';
import { WebDevTrust } from '@/components/web-development/WebDevTrust';
import { WebDevFaq } from '@/components/web-development/WebDevFaq';
import { WebDevCta } from '@/components/web-development/WebDevCta';

export const metadata = {
  alternates: {
    canonical: '/services/web-development/',
  },
  title: 'Web Development Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Web Development Service in Trichy, Tamil Nadu that builds fast mobile-friendly, SEO-ready websites.',
  keywords: ['Web development Service in Tamil Nadu', 'Web Development Service in Trichy'],
};

const webDevSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://inymartlabs.com/services/web-development/#service",
  "name": "Web Development Services",
  "url": "https://inymartlabs.com/services/web-development/",
  "description": "Inymart Labs provides professional web development services to help businesses build responsive, user-friendly, and high-performing websites that support online visibility, customer engagement, and business growth.",
  "serviceType": "Web Development",
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
  "@id": "https://inymartlabs.com/services/web-development/#breadcrumb",
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
      "name": "Web Development Services",
      "item": "https://inymartlabs.com/services/web-development/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Web Development Service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Web Development Service involves designing, developing, testing, and maintaining websites to help businesses build a professional online presence. It can include website development, responsive design, functionality, performance optimisation, and ongoing support."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a new website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time required to build a website depends on its size, design, functionality, content, and project requirements. A simple business website may take less time, while complex websites with advanced features may require several weeks or more."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign my existing website instead of building a new one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs can redesign existing websites to improve their visual appearance, user experience, mobile responsiveness, performance, navigation, and overall functionality without necessarily building an entirely new website."
      }
    },
    {
      "@type": "Question",
      "name": "Will my website work well on mobile phones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs develops responsive websites designed to provide a smooth and user-friendly experience across mobile phones, tablets, laptops, and desktop devices."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Inymart Labs the right Web Development Service in Tamil Nadu and Web Development Service in Trichy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inymart Labs focuses on building professional, responsive, user-friendly, and performance-oriented websites based on each business's goals, brand identity, target audience, and functional requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide support after the website is launched?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Inymart Labs can provide post-launch website support to help with updates, maintenance, troubleshooting, performance improvements, and other website-related requirements."
      }
    }
  ]
};

export default function WebDevelopmentServicePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevSchema) }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <WebDevHeroBanner />
        <WebDevQuickAnswer />
        <WebDevWhatIs />
        <WebDevWhatWeDo />
        <WebDevWhyChoose />
        <WebDevComparison />
        <WebDevKeyFacts />
        <WebDevProcess />
        <WebDevServices />
        <WebDevWhoThisIsFor />
        <WebDevExpectations />
        <WebDevTrust />
        <WebDevFaq />
        <WebDevCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}