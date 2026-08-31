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

export default function WebDevelopmentServicePage() {
  return (
    <>
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