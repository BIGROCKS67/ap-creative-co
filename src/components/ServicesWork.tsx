"use client";

import { useState } from "react";
import Image from "next/image";
import { siteCopy } from "@/lib/content";
import { WorkGallery } from "@/components/WorkGallery";
import type { GalleryKind } from "@/lib/galleries";

const ARROW = (
  <svg viewBox="0 0 111.42 110.66" aria-hidden="true" className="h-full w-full">
    <polygon
      points="13.65 102.66 109.53 6.67 103.87 1.02 8 97 8 0 0 0 0 110.66 111.42 110.66 111.42 102.66 13.65 102.66"
      fill="currentColor"
    />
  </svg>
);

const CTA_ARROW = (
  <svg viewBox="0 0 17.1 15.17" aria-hidden="true" className="h-3.5 w-4">
    <path
      d="m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z"
      fill="currentColor"
    />
  </svg>
);

export function ServicesWork() {
  const { items } = siteCopy.services;
  const [open, setOpen] = useState<GalleryKind | null>(null);

  return (
    <section id="services" className="relative bg-flow-black pb-8 pt-[6.5rem] lg:pt-[9.5rem]">
      <div className="px-5 lg:px-[5%]">
        <h2 className="font-display flex flex-col text-[clamp(3.75rem,12vw,10rem)] font-normal uppercase leading-[0.9] tracking-[-0.02em] text-[#f4f6f3]">
          <span>What</span>
          <span className="flex items-end justify-between gap-6">
            <span>We Do</span>
            <span className="mb-[0.08em] hidden h-[0.52em] w-[0.52em] shrink-0 sm:block">
              {ARROW}
            </span>
          </span>
        </h2>
      </div>

      <div className="mt-8 flex flex-col px-5 md:mt-[4.5rem] lg:px-[5%]">
        {items.map((item, i) => (
          <div
            key={item.name}
            className="sticky top-[4.5rem] flex h-[calc(100svh-5.4rem)] items-stretch pb-[0.85rem] [contain:layout] lg:top-[5.25rem] lg:h-[calc(100svh-6.25rem)] lg:pb-5"
            style={{ zIndex: i + 1 }}
          >
            <article className="relative flex h-full w-full flex-col-reverse overflow-hidden rounded-[0.625rem] bg-[#f4f6f3] text-[#111814] [transform:translateZ(0)] md:flex-row md:items-center md:justify-between md:gap-16 md:px-14 md:py-12 md:pl-16 lg:rounded-[4rem] lg:py-[3.125rem]">
              <div className="z-[2] flex min-h-0 flex-1 flex-col items-start gap-3.5 px-[1.2rem] pb-5 pt-4 md:w-1/2 md:gap-6 md:p-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111814]/45">
                  {item.name}
                </p>
                <h3 className="font-display text-[clamp(2.4rem,5.4vw,6.75rem)] font-normal leading-[0.9] tracking-[-0.02em]">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-x-1.5 gap-y-2.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border-2 border-[#111814]/30 px-3 py-[5px] text-sm leading-snug text-[#111814] md:text-base"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="max-w-[32rem] text-[0.95rem] leading-[1.4] text-[#060807]/62 md:text-lg md:leading-[1.4]">
                  {item.body}
                </p>
                {item.jab ? (
                  <p className="max-w-[32rem] text-[0.95rem] leading-[1.4] text-[#111814]/80 md:text-lg md:leading-[1.4]">
                    {item.jab}
                  </p>
                ) : null}
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(item.gallery)}
                    className="inline-flex items-center gap-2.5 rounded-[2.0625rem] bg-[#111814] px-[1.35rem] py-3 text-[1.0625rem] leading-none text-[#f4f6f3] transition-colors hover:bg-black active:scale-[0.97]"
                  >
                    <span>See the work</span>
                    {CTA_ARROW}
                  </button>
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2.5 rounded-[2.0625rem] border-2 border-[#111814]/35 px-[1.35rem] py-3 text-[1.0625rem] leading-none text-[#111814] transition-colors hover:border-[#111814] hover:bg-[#111814] hover:text-[#f4f6f3] active:scale-[0.97]"
                  >
                    <span>Talk to us</span>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(item.gallery)}
                className="relative z-[2] aspect-[16/10] max-h-[34vh] w-full overflow-hidden rounded-t-[0.625rem] bg-[#0e1410] md:aspect-auto md:h-full md:max-h-none md:w-[45%] md:rounded-none md:rounded-tr-[12.5rem]"
                aria-label={`Open ${item.title} gallery`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover object-left"
                />
              </button>
            </article>
          </div>
        ))}
      </div>

      {open ? <WorkGallery kind={open} onClose={() => setOpen(null)} /> : null}
    </section>
  );
}
