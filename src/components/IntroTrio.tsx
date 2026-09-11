import { SlideIn } from "@/components/ScrollAnim";
import { siteCopy } from "@/lib/content";

export function IntroTrio() {
  return (
    <section id="about" className="cv-auto mm-section scroll-mt-24 bg-flow-black">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">
          {siteCopy.intro.map((item, i) => (
            <SlideIn key={item.num} delay={i * 90}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-flow-green">
                {item.num}
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
                {item.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-flow-muted">{item.body}</p>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
