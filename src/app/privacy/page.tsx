import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-24 pt-32 lg:px-8">
      <h1 className="font-display text-5xl font-bold tracking-tight">Privacy Policy</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-flow-muted">
        <p>
          {siteConfig.company} ({siteConfig.companyNumber}) is a limited company registered in
          England and Wales.
        </p>
        <p>
          If you send an enquiry, I keep your name, business, phone, email and message so I can
          reply and do the work. I don’t sell that information.
        </p>
        <p>Email {siteConfig.email} if you want anything deleted.</p>
      </div>
    </div>
  );
}
