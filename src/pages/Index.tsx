import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import LogoStrip from "@/components/site/LogoStrip";
import ExitIntentPopup from "@/components/site/ExitIntentPopup";
import Problem from "@/components/site/Problem";
import Solution from "@/components/site/Solution";
import Demo from "@/components/site/Demo";
import ROICalculator from "@/components/site/ROICalculator";
import AIAudit from "@/components/site/AIAudit";
import BeforeAfter from "@/components/site/BeforeAfter";
import Pricing from "@/components/site/Pricing";
import Testimonials from "@/components/site/Testimonials";
import FinalCTA from "@/components/site/FinalCTA";
import ChatbotWidget from "@/components/site/ChatbotWidget";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Problem />
      <Solution />
      <Demo />
      <ROICalculator />
      <AIAudit />
      <BeforeAfter />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <ChatbotWidget />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
