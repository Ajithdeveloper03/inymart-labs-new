import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactBanner } from '@/components/contact/ContactBanner';
import { ContactInfoAndForm } from '@/components/contact/ContactInfoAndForm';
import { ContactMap } from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact/',
  },
  title: 'Contact Us | Inymart Labs - Digital Marketing Agency',
  description: 'Get in touch with Inymart Labs. We are here to help you with your digital marketing, SEO, web development, and more.',
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://inymartlabs.com/contact/#contactpage",
  "url": "https://inymartlabs.com/contact/",
  "name": "Contact Inymart Labs",
  "description": "Contact Inymart Labs for digital marketing services including SEO, Local SEO, AEO, GEO, social media marketing, web development, PPC, and AI SEO services.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://inymartlabs.com/contact/#breadcrumb",
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
      "name": "Contact",
      "item": "https://inymartlabs.com/contact/"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />
      <main className="flex flex-col min-h-screen bg-[#f8f9fa]">
        <ContactBanner />
        <ContactInfoAndForm />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
