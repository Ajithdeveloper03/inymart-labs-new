import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ServicesPageCards } from '@/components/services/ServicesPageCards';
import { ServicesHeroBanner } from '@/components/services/ServicesHeroBanner';

export const metadata = {
  title: 'Our Digital Marketing Services — Inymart Labs',
  description: 'Explore our wide range of digital marketing services tailored to grow your business online. From SEO to Web Development, Inymart Labs has you covered.',
  alternates: {
    canonical: '/services/',
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
          })
        }}
      />
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <ServicesHeroBanner />
        <ServicesPageCards />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
