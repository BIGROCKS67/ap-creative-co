import { SlideIn } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";

export function SectorsSection() {
  const { eyebrow, title, body, aside, items } = siteCopy.sectors;
  const loop = [...items, ...items, ...items];

  return (
    <section id="work" className="cv-auto mm-surface-light mm-section scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SlideIn className="mx-auto max-w-3xl text-center">
          <p className="mm-eyebrow-dark mb-4">{eyebrow}</p>
          <h2 className="mm-section-title-dark">{title}</h2>
          <p className="mt-6 text-lg text-flow-black/60">{body}</p>
          <p className="mt-4 text-base text-flow-black/50">{aside}</p>
        </SlideIn>
      </div>
      <div className="marquee-mask mt-14 overflow-hidden">
        <div className="marquee-line flex w-max gap-10 whitespace-nowrap px-5">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="font-display text-5xl font-bold tracking-tight text-flow-black lg:text-7xl">
                {item}
              </span>
              <span className="h-2 w-2 rounded-full bg-flow-green-dim" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
