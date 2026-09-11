import { SlideIn } from "@/components/ScrollAnim";
import { FounderCarousel } from "@/components/FounderCarousel";
import { siteConfig } from "@/lib/site";
import { siteCopy } from "@/lib/content";

export function FounderSection() {
  const { eyebrow, kicker, title, p1, p2, p3, images } = siteCopy.founder;

  return (
    <section id="founder" className="mm-section scroll-mt-24 bg-flow-black">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <FounderCarousel images={images} />
        </div>
        <SlideIn from="right">
          <p className="mm-eyebrow mb-3">{eyebrow}</p>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
            {kicker}
          </p>
          <h2 className="mm-section-title mt-4">{title}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-flow-muted lg:text-lg">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-flow-green">
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteConfig.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            {siteConfig.linkedin ? (
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : null}
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
