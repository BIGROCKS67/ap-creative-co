"use client";

import Script from "next/script";
import { useEffect } from "react";
import { SlideIn } from "@/components/ScrollAnim";
import { siteConfig } from "@/lib/site";
import { siteCopy } from "@/lib/content";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processEmbed() {
  window.instgrm?.Embeds.process();
}

export function InstagramSection() {
  const { eyebrow, title, body, cta } = siteCopy.instagram;

  useEffect(() => {
    processEmbed();
    const t = window.setTimeout(processEmbed, 800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="cv-auto mm-section border-t border-white/[0.06] bg-flow-black">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1fr_540px] lg:gap-16 lg:px-8">
        <SlideIn className="lg:sticky lg:top-28">
          <p className="mm-eyebrow mb-4">{eyebrow}</p>
          <h2 className="mm-section-title max-w-[16ch]">{title}</h2>
          <p className="mt-6 max-w-md text-lg text-flow-muted">{body}</p>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="btn-mm mt-8">
            {cta}
          </a>
        </SlideIn>
        <div className="min-w-0">
          <div className="mx-auto w-full max-w-[540px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white lg:mx-0">
            <blockquote
              className="instagram-media ig-embed"
              data-instgrm-permalink="https://www.instagram.com/apcreativeco_/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
            >
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-8 text-center text-sm font-semibold text-black"
              >
                View {siteConfig.instagramHandle} on Instagram
              </a>
            </blockquote>
          </div>
        </div>
      </div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={processEmbed} />
    </section>
  );
}
