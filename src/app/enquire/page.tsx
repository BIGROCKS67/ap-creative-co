import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Enquire",
  description: "Tell Anthony what you’re working on.",
};

export default function EnquirePage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
