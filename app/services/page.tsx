import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ServicesHeroBanner } from '@/components/services/ServicesHeroBanner';
import { ServicesPageCards } from '@/components/services/ServicesPageCards';
import { ServicesFramework } from '@/components/services/ServicesFramework';
import { Industries } from '@/components/sections/Industries';
import { ServicesFaqs } from '@/components/services/ServicesFaqs';
import { SERVICES_PAGE_FAQS } from '@/data/servicesData';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Tamil Nadu | Inymart Labs',
  description:
    'Explore comprehensive digital marketing services in Tamil Nadu & Trichy: SEO, Advance Local SEO, AI SEO, Web Development, PPC, Social Media, and Web Analytics engineered to drive qualified leads and revenue.',
  keywords: [
    'Digital Marketing Services in Tamil Nadu',
    'SEO Services Tamil Nadu',
    'Local SEO Agency Trichy',
    'AI SEO Services',
    'Web Development Tamil Nadu',
    'PPC Service Tamil Nadu',
    'Social Media Marketing Trichy',
    'Web Analytics Services',
    'Digital Marketing Consulting'
  ],
  alternates: {
    canonical: 'https://inymartlabs.com/services/',
  },
  openGraph: {
    title: 'Digital Marketing Services in Tamil Nadu | Inymart Labs',
    description:
      'Explore comprehensive digital marketing services in Tamil Nadu & Trichy: SEO, Advance Local SEO, AI SEO, Web Development, PPC, and Social Media Marketing.',
    url: 'https://inymartlabs.com/services/',
    siteName: 'Inymart Labs',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://inymartlabs.com/logo.webp',
        width: 800,
        height: 600,
        alt: 'Inymart Labs Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services in Tamil Nadu | Inymart Labs',
    description:
      'Explore comprehensive digital marketing services in Tamil Nadu & Trichy: SEO, Advance Local SEO, AI SEO, Web Development, PPC, and Social Media Marketing.',
    images: ['https://inymartlabs.com/logo.webp'],
    creator: '@inymartlabs',
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://inymartlabs.com/services/#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "CollectionPage",
      "@id": "https://inymartlabs.com/services/#collectionpage",
      "url": "https://inymartlabs.com/services/",
      "name": "Digital Marketing Services in Tamil Nadu",
      "description": "Comprehensive suite of digital marketing services by Inymart Labs, including SEO, Advance Local SEO, AI Search Optimization, Web Development, PPC Advertising, and Social Media Marketing.",
      "isPartOf": {
        "@id": "https://inymartlabs.com/#website"
      },
      "about": {
        "@id": "https://inymartlabs.com/#organization"
      },
      "hasPart": [
        {
          "@type": "Service",
          "name": "SEO",
          "url": "https://inymartlabs.com/services/seo/"
        },
        {
          "@type": "Service",
          "name": "Advance Local SEO",
          "url": "https://inymartlabs.com/services/advance-local-seo/"
        },
        {
          "@type": "Service",
          "name": "SMO",
          "url": "https://inymartlabs.com/services/smo/"
        },
        {
          "@type": "Service",
          "name": "SMM",
          "url": "https://inymartlabs.com/services/smm/"
        },
        {
          "@type": "Service",
          "name": "Web Analytics",
          "url": "https://inymartlabs.com/services/web-analytics/"
        },
        {
          "@type": "Service",
          "name": "Web Development",
          "url": "https://inymartlabs.com/services/web-development/"
        },
        {
          "@type": "Service",
          "name": "Digital Marketing Consulting",
          "url": "https://inymartlabs.com/services/digital-marketing-consulting/"
        },
        {
          "@type": "Service",
          "name": "Digital Marketing Agency",
          "url": "https://inymartlabs.com/services/digital-marketing-agency/"
        },
        {
          "@type": "Service",
          "name": "PPC Service",
          "url": "https://inymartlabs.com/services/ppc-service/"
        },
        {
          "@type": "Service",
          "name": "AI SEO Services",
          "url": "https://inymartlabs.com/services/ai-seo-services/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://inymartlabs.com/services/#itemlist",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "SEO (Search Engine Optimization)",
          "url": "https://inymartlabs.com/services/seo/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Advance Local SEO",
          "url": "https://inymartlabs.com/services/advance-local-seo/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "SMO (Social Media Optimization)",
          "url": "https://inymartlabs.com/services/smo/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "SMM (Social Media Marketing)",
          "url": "https://inymartlabs.com/services/smm/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Web Analytics",
          "url": "https://inymartlabs.com/services/web-analytics/"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Web Development",
          "url": "https://inymartlabs.com/services/web-development/"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Digital Marketing Consulting",
          "url": "https://inymartlabs.com/services/digital-marketing-consulting/"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Digital Marketing Agency",
          "url": "https://inymartlabs.com/services/digital-marketing-agency/"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "PPC Service (Pay-Per-Click)",
          "url": "https://inymartlabs.com/services/ppc-service/"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "AI SEO Services",
          "url": "https://inymartlabs.com/services/ai-seo-services/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://inymartlabs.com/services/#faq",
      "mainEntity": SERVICES_PAGE_FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
      <Header />
      <main className="flex min-h-screen flex-col bg-background">
        <ServicesHeroBanner />
        <ServicesPageCards />
        <ServicesFramework />
        <Industries />
        <ServicesFaqs />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
