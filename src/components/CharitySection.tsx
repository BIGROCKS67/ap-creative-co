"use client";

import { useState } from "react";
import Image from "next/image";
import { ClipReveal, SlideIn } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";
import { galleryImages } from "@/lib/galleries";

const charityPhotos = galleryImages.charity;
const featured = charityPhotos[0];
const tiles = charityPhotos.slice(1);

const names = [
  "Woodford United",
  "Woodford Lionesses",
  "Fire Fighters Charity",
  "Mental Health Friends",
  "A Night for Martyn",
  "Prost8",
];

export function CharitySection() {
  const { eyebrow, title, body, aside } = siteCopy.charity;
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="charity" className="cv-auto mm-section scroll-mt-24 bg-flow-black">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <SlideIn>
            <p className="mm-eyebrow mb-4">{eyebrow}</p>
            <h2 className="mm-section-title max-w-[12ch]">{title}</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-flow-muted">{body}</p>
            {aside ? <p className="mt-4 max-w-md text-base text-white/45">{aside}</p> : null}
            <div className="mt-8 flex flex-wrap gap-2">
              {names.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-white/12 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-white/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </SlideIn>

          <ClipReveal>
            <button
              type="button"
              onClick={() => setActive(featured)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-flow-graphite sm:aspect-[5/4] lg:aspect-[4/5] lg:rounded-[2rem]"
            >
              <Image
                src={featured}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_20%]"
              />
            </button>
          </ClipReveal>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {tiles.map((src, i) => (
            <ClipReveal key={src} delay={i * 35} className="min-h-0">
              <button
                type="button"
                onClick={() => setActive(src)}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-flow-graphite md:rounded-[1.75rem]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </button>
            </ClipReveal>
          ))}
        </div>
      </div>

      {active ? (
        <button
          type="button"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setActive(null)}
          aria-label="Close image"
        >
          <Image
            src={active}
            alt=""
            width={1400}
            height={1400}
            className="max-h-[90vh] w-auto max-w-full object-contain"
          />
        </button>
      ) : null}
    </section>
  );
}
