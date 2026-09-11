import { ResultsCarousel } from "@/components/ResultsCarousel";
import { StatNumber } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";

export function StatsSection() {
  const { eyebrow, title, body, items } = siteCopy.stats;

  return (
    <section className="mm-section scroll-mt-24 border-y border-white/[0.06] bg-flow-black">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mm-eyebrow mb-4">{eyebrow}</p>
            <h2 className="mm-section-title">{title}</h2>
            <p className="mt-4 max-w-md text-flow-muted">{body}</p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {items.map((s) => (
                <div key={s.label}>
                  <StatNumber
                    value={s.value}
                    className="block font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                  />
                  <p className="mt-2 text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <ResultsCarousel />
        </div>
      </div>
    </section>
  );
}
