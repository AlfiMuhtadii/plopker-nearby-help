import { Navbar } from "@/components/plopker/Navbar";
import { Hero } from "@/components/plopker/Hero";
import { StatsBar } from "@/components/plopker/StatsBar";
import { TrustHighlights } from "@/components/plopker/TrustHighlights";
import { ServiceCategories } from "@/components/plopker/ServiceCategories";
import { HowItWorks } from "@/components/plopker/HowItWorks";
import { SmartMatching } from "@/components/plopker/SmartMatching";
import { PricingPreview } from "@/components/plopker/PricingPreview";
import { AddOnJob } from "@/components/plopker/AddOnJob";
import { Safety } from "@/components/plopker/Safety";
import { Testimonials } from "@/components/plopker/Testimonials";
import { WorkerSection } from "@/components/plopker/WorkerSection";
import { FAQ } from "@/components/plopker/FAQ";
import { FinalCTA } from "@/components/plopker/FinalCTA";
import { Footer } from "@/components/plopker/Footer";
import { SectionWrap } from "@/components/plopker/SectionWrap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SectionWrap><StatsBar /></SectionWrap>
        <SectionWrap><TrustHighlights /></SectionWrap>
        <ServiceCategories />
        <HowItWorks />
        <SectionWrap><SmartMatching /></SectionWrap>
        <SectionWrap><PricingPreview /></SectionWrap>
        <SectionWrap><AddOnJob /></SectionWrap>
        <SectionWrap><Safety /></SectionWrap>
        <SectionWrap><Testimonials /></SectionWrap>
        <SectionWrap><WorkerSection /></SectionWrap>
        <SectionWrap><FAQ /></SectionWrap>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
