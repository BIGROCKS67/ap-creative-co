import type { Metadata } from "next";
import { IntroTrio } from "@/components/IntroTrio";
import { FounderSection } from "@/components/FounderSection";
import { SectorsSection } from "@/components/SectorsSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "AP Creative Co brings social, content, design, print, websites and events under one roof. You talk to Anthony.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <IntroTrio />
      <SectorsSection />
      <FounderSection />
    </div>
  );
}
