import { siteCopy } from "@/lib/content";
import { BrandMark } from "@/components/BrandMark";

export function HeroNav() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <div className="pointer-events-auto">
          <BrandMark />
        </div>
        <nav className="pointer-events-auto hidden items-center gap-7 lg:flex" aria-label="Hero">
          {siteCopy.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="ch-join pointer-events-auto inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold text-black">
          Start a project
        </a>
      </div>
    </header>
  );
}
