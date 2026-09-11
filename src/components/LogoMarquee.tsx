import Image from "next/image";
import { SlideIn } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";
import { clientLogos } from "@/lib/media";

export function LogoMarquee() {
  const loop = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="cv-auto overflow-hidden border-y border-white/[0.06] bg-flow-black py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SlideIn className="mb-10 text-center">
          <p className="mm-eyebrow mb-3">{siteCopy.logos.eyebrow}</p>
          <h2 className="mm-section-title">{siteCopy.logos.title}</h2>
        </SlideIn>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-cards flex w-max items-center gap-10 px-5">
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-20 w-36 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="144px"
                className="object-contain p-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
