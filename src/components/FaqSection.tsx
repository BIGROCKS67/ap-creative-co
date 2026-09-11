import { SlideIn } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="cv-auto mm-section scroll-mt-24 border-t border-white/[0.06] bg-flow-black">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SlideIn>
          <p className="mm-eyebrow mb-4">FAQ</p>
          <h2 className="mm-section-title">Questions.</h2>
        </SlideIn>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {siteCopy.faqs.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="cursor-pointer list-none font-display text-2xl tracking-tight [&::-webkit-details-marker]:hidden lg:text-3xl">
                <span className="flex items-start justify-between gap-6">
                  {item.q}
                  <span className="mt-1 text-flow-green transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-flow-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
