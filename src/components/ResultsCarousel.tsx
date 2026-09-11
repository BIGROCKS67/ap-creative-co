"use client";

import { designedReports } from "@/lib/reports";
import { ReportCard } from "@/components/ReportCard";

export function ResultsCarousel() {
  const loop = [...designedReports, ...designedReports];

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-[#060807] p-2">
      <div className="marquee-mask overflow-hidden rounded-[1.5rem]">
        <div className="results-track flex w-max gap-4 px-2 py-2">
          {loop.map((report, i) => (
            <div
              key={`${report.id}-${i}`}
              className="w-[260px] shrink-0 sm:w-[280px]"
              aria-hidden={i >= designedReports.length}
            >
              <ReportCard report={report} className="min-h-[320px]" />
            </div>
          ))}
        </div>
      </div>
      <p className="px-4 pb-3 pt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
        Laid out from the analytics. Not the screenshots.
      </p>
    </div>
  );
}
