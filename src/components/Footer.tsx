import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { siteCopy } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-flow-black">
      <div className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-24">
        <BrandMark />
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-display mt-8 block text-[clamp(1.8rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.05em] text-white transition hover:text-white/70"
        >
          {siteConfig.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-6 font-mono text-[12px] uppercase tracking-[0.16em] text-white/55">
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
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
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-6 lg:px-8">
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} {siteConfig.company} · {siteConfig.companyNumber}
        </p>
        <div className="flex gap-6 text-xs text-white/45">
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/terms/">Terms</Link>
        </div>
        <p className="w-full text-xs uppercase tracking-[0.18em] text-white/35 lg:w-auto">
          {siteCopy.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
