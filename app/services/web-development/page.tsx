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

export default function WebDevelopmentServicePage() {
  return (
    <>
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