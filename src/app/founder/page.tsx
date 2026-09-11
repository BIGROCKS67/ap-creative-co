import type { Metadata } from "next";
import { FounderSection } from "@/components/FounderSection";

export const metadata: Metadata = {
  title: "Founder",
  description: "Anthony Parry is AP Creative Co. Founder-led. Properly hands-on.",
};

export default function FounderPage() {
  return (
    <div className="pt-16">
      <FounderSection />
    </div>
  );
}
