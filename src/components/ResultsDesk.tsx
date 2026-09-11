import Image from "next/image";
import { ClipReveal, SlideIn } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";

export function ResultsDesk() {
  const { eyebrow, title, body, items } = siteCopy.results;

  return (
    <section id="results" className="cv-auto mm-section scroll-mt-24 bg-flow-black">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SlideIn className="mx-auto max-w-3xl text-center">
          <p className="mm-eyebrow mb-4">{eyebrow}</p>
          <h2 className="mm-section-title">{title}</h2>
          <p className="mt-6 text-lg text-flow-muted">{body}</p>
        </SlideIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <ClipReveal key={item.sector} delay={i * 70}>
              <article className="mm-card overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.sector}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-flow-black via-black/40 to-transparent" />
                  <p className="absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
                    {item.sector}
                  </p>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="font-display text-5xl font-bold tracking-tight text-white lg:text-6xl">
                    {item.headline}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-flow-green">
                    {item.headlineLabel}
                  </p>
                  <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                    {item.figures.map((fig) => (
                      <div key={fig.label}>
                        <dt className="text-[10px] uppercase tracking-wider text-flow-muted">
                          {fig.label}
                        </dt>
                        <dd className="mt-1 font-display text-lg font-semibold">{fig.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    {item.period}
                  </p>
                </div>
              </article>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
