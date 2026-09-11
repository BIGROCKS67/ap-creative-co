import type { Metadata } from "next";
import { ResultsDesk } from "@/components/ResultsDesk";
import { ReportCard } from "@/components/ReportCard";
import { designedReports } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Results",
  description: "Views, reach and the numbers behind the work.",
};

export default function ResultsPage() {
  return (
    <div className="pt-16">
      <ResultsDesk />
      <section className="bg-flow-black pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designedReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
