"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteCopy } from "@/lib/content";
import { heroMontage } from "@/lib/media";

export function ApHero() {
  const [active, setActive] = useState(0);
  const { line1, line2, line3, body, aside, primaryCta, secondaryCta, scrollLabel } =
    siteCopy.hero;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % heroMontage.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-flow-black">
      <div className="absolute inset-0">
        {heroMontage.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i < 2}
              sizes="100vw"
              className="object-cover grayscale contrast-110 ken-ap"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:justify-center lg:pb-20">
        <h1 className="font-display max-w-[14ch] text-[clamp(3rem,9vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.05em] text-white">
          <span className="block">{line1}</span>
          <span className="block">{line2}</span>
          <span className="block text-flow-green">{line3}</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          {body}
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
          {aside}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="/services/" className="btn-mm">
            {primaryCta}
          </a>
          <a href="/work/" className="btn-mm-ghost">
            {secondaryCta}
          </a>
        </div>
        <div className="mt-14 hidden items-center gap-3 lg:flex" aria-hidden>
          <span className="text-[11px] uppercase tracking-[0.28em] text-white/40">
            {scrollLabel}
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-flow-green to-transparent" />
        </div>
      </div>
    </section>
  );
}
