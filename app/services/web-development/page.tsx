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
      "name": "Services",
      "item": "https://inymartlabs.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Development",
      "item": "https://inymartlabs.com/services/web-development/"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://inymartlabs.com/services/web-development/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What exactly does a web developer do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A web developer plans, builds, tests, and maintains a website, covering everything from layout and features to speed and security."
      }
    },
    {
      "@type": "Question",
      "name": "Do you build websites for businesses in Trichy and Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Inymart Labs builds websites for businesses across Trichy and Tamil Nadu, from small local businesses to growing companies."
      }
    },
    {
      "@type": "Question",
      "name": "Will my site look right on phones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Every site we deliver reshapes itself automatically for phones, tablets, and desktops."
      }
    },
    {
      "@type": "Question",
      "name": "Can I request specific features for my site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we build around what your business actually needs, whether that's forms, booking tools, a blog, or payment integration."
      }
    },
    {
      "@type": "Question",
      "name": "Will my new website be easy to find on Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We lay the groundwork for search visibility during the build, including clean URLs, proper headings, and metadata, though ongoing SEO work helps further."
      }
    },
    {
      "@type": "Question",
      "name": "Can I edit the website myself after it's live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases yes, we hand it over on a beginner-friendly platform so you can update text and images without calling a developer."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need changes after the site launches?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer ongoing support for updates, fixes, and new features as your business needs change."
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
        <WebDevProcess />
        <WebDevComparison />
        <WebDevWhyChoose />
        {/* <WebDevServices /> */}
        {/* <WebDevWhoThisIsFor /> */}
        {/* <WebDevExpectations /> */}
        {/* <WebDevTrust /> */}
        {/* <WebDevKeyFacts /> */}
        <WebDevFaq />
        <WebDevCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}