import { ApHero } from "@/components/ApHero";
import { IntroTrio } from "@/components/IntroTrio";
import { ServicesWork } from "@/components/ServicesWork";
import { SectorsSection } from "@/components/SectorsSection";
import { StickyFlow } from "@/components/StickyFlow";
import { StatsSection } from "@/components/StatsSection";
import { ResultsDesk } from "@/components/ResultsDesk";
import { LogoMarquee } from "@/components/LogoMarquee";
import { CharitySection } from "@/components/CharitySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FounderSection } from "@/components/FounderSection";
import { InstagramSection } from "@/components/InstagramSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <ApHero />
      <IntroTrio />
      <ServicesWork />
      <SectorsSection />
      <StickyFlow />
      <StatsSection />
      <ResultsDesk />
      <LogoMarquee />
      <CharitySection />
      <TestimonialsSection />
      <FounderSection />
      <InstagramSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
