import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WebAnalyticsHeroBanner } from '@/components/web-analytics/WebAnalyticsHeroBanner';
import { WebAnalyticsQuickAnswer } from '@/components/web-analytics/WebAnalyticsQuickAnswer';
import { WebAnalyticsWhatIs } from '@/components/web-analytics/WebAnalyticsWhatIs';
import { WebAnalyticsWhatWeDo } from '@/components/web-analytics/WebAnalyticsWhatWeDo';
import { WebAnalyticsWhyChoose } from '@/components/web-analytics/WebAnalyticsWhyChoose';
import { WebAnalyticsComparison } from '@/components/web-analytics/WebAnalyticsComparison';
import { WebAnalyticsKeyFacts } from '@/components/web-analytics/WebAnalyticsKeyFacts';
import { WebAnalyticsProcess } from '@/components/web-analytics/WebAnalyticsProcess';
import { WebAnalyticsWhoThisIsFor } from '@/components/web-analytics/WebAnalyticsWhoThisIsFor';
import { WebAnalyticsExpectations } from '@/components/web-analytics/WebAnalyticsExpectations';
import { WebAnalyticsTrust } from '@/components/web-analytics/WebAnalyticsTrust';
import { WebAnalyticsFaq } from '@/components/web-analytics/WebAnalyticsFaq';
import { WebAnalyticsCta } from '@/components/web-analytics/WebAnalyticsCta';

export const metadata = {
  title: 'Web Analytics Service in Tamil Nadu — Inymart Labs',
  description: 'Inymart Labs is a Web Analytics Service in Trichy Tamil Nadu that audits, fixes, and interprets website tracking data.',
};

export default function WebAnalyticsServicePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col overflow-hidden">
        <WebAnalyticsHeroBanner />
        <WebAnalyticsQuickAnswer />
        <WebAnalyticsWhatIs />
        <WebAnalyticsWhatWeDo />
        <WebAnalyticsWhyChoose />
        <WebAnalyticsComparison />
        <WebAnalyticsKeyFacts />
        <WebAnalyticsProcess />
        <WebAnalyticsWhoThisIsFor />
        <WebAnalyticsExpectations />
        <WebAnalyticsTrust />
        <WebAnalyticsFaq />
        <WebAnalyticsCta />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}