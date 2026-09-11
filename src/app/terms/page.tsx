import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pb-24 pt-32 lg:px-8">
      <h1 className="font-display text-5xl font-bold tracking-tight">Terms</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-flow-muted">
        <p>
          Work is scoped and priced after we’ve looked at the job. Nothing on this site is an
          offer to contract until we’ve agreed it in writing.
        </p>
        <p>
          {siteConfig.company} ({siteConfig.companyNumber}). Questions: {siteConfig.email}.
        </p>
      </div>
    </div>
  );
}
