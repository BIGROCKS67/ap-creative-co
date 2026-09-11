import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ClipReveal, SlideIn } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";
import { siteConfig } from "@/lib/site";

function ProductVideo() {
  return (
    <video
      className="aspect-video w-full bg-black object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/scalpx-terminal-poster.jpg"
      aria-label="ScalpX Terminal product film"
    >
      <source src="/videos/scalpx-terminal.mp4" type="video/mp4" />
    </video>
  );
}

export function TerminalSection() {
  const { eyebrow, title, body, primaryCta } = siteCopy.platform;

  return (
    <section
      id="terminal"
      className="cv-auto relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-black py-24 lg:py-40"
    >
      <div className="mx-auto px-5 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SlideIn>
            <p className="mb-7 text-sm font-semibold tracking-[-0.01em] text-flow-green">
              {eyebrow}
            </p>
          </SlideIn>
          <SlideIn delay={60}>
            <h2 className="font-display text-[clamp(3.25rem,8vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
              {title}
            </h2>
          </SlideIn>
          <SlideIn delay={120}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/55 sm:text-xl">
              {body}
            </p>
          </SlideIn>
          <SlideIn delay={180}>
            <div className="mt-9 flex justify-center">
              <Link
                href={siteConfig.links.terminal}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-base font-semibold text-flow-green transition-opacity duration-200 [transition-timing-function:var(--ease-out)] hover:opacity-75"
              >
                {primaryCta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 [transition-timing-function:var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </SlideIn>
        </div>

        <div className="mx-auto mt-20 max-w-[1440px] lg:mt-28">
          <ClipReveal delay={100}>
            <ProductVideo />
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}
