import type { Metadata } from "next";
import { CharitySection } from "@/components/CharitySection";

export const metadata: Metadata = {
  title: "Charity",
  description: "Local clubs and charity work from AP Creative Co.",
};

export default function CharityPage() {
  return (
    <div className="pt-16">
      <CharitySection />
    </div>
  );
}
