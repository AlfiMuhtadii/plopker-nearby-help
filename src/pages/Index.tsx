import { Navbar } from "@/components/plopker/Navbar";
import { Hero } from "@/components/plopker/Hero";
import { TrustHighlights } from "@/components/plopker/TrustHighlights";
import { ServiceCategories } from "@/components/plopker/ServiceCategories";
import { HowItWorks } from "@/components/plopker/HowItWorks";
import { SmartMatching } from "@/components/plopker/SmartMatching";
import { AddOnJob } from "@/components/plopker/AddOnJob";
import { Safety } from "@/components/plopker/Safety";
import { WorkerSection } from "@/components/plopker/WorkerSection";
import { FinalCTA } from "@/components/plopker/FinalCTA";
import { Footer } from "@/components/plopker/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustHighlights />
        <ServiceCategories />
        <HowItWorks />
        <SmartMatching />
        <AddOnJob />
        <Safety />
        <WorkerSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
