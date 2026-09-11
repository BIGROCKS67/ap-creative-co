import { designedReports, type DesignedReport } from "@/lib/reports";
import { cn } from "@/lib/utils";

export function ReportCard({
  report,
  className,
}: {
  report: DesignedReport;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full min-h-[280px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#0c100e] p-6",
        className,
      )}
    >
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
          Client report
        </p>
        <p className="font-display mt-4 text-5xl font-bold tracking-tight text-white">
          {report.headline}
        </p>
        <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#c4b48a]">
          {report.headlineLabel}
        </p>
        <p className="mt-3 inline-flex rounded-full bg-[#c4b48a]/15 px-3 py-1 text-xs font-semibold text-[#e8d7a8]">
          {report.lift}
        </p>
      </div>
      <div>
        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          {report.figures.map((fig) => (
            <div key={fig.label}>
              <dt className="text-[10px] uppercase tracking-wider text-white/35">{fig.label}</dt>
              <dd className="mt-1 font-display text-sm font-semibold text-white">{fig.value}</dd>
            </div>
          ))}
        </dl>
        {report.period ? (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
            {report.period}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function ReportCardById({ id, className }: { id: string; className?: string }) {
  const report = designedReports.find((item) => item.id === id);
  if (!report) return null;
  return <ReportCard report={report} className={className} />;
}
