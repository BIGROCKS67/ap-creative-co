"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type FounderImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export function FounderCarousel({ images }: { images: readonly FounderImage[] }) {
  const [index, setIndex] = useState(0);
  const n = images.length;

  const go = useCallback(
    (next: number) => {
      if (n < 2) return;
      setIndex(((next % n) + n) % n);
    },
    [n],
  );

  useEffect(() => {
    if (n < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % n);
    }, 3500);
    return () => window.clearInterval(id);
  }, [n]);

  if (!n) return null;

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-flow-graphite">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(${(i - index) * 100}%, 0, 0)` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: img.objectPosition ?? "center" }}
              priority={i === 0}
            />
          </div>
        ))}

        {n > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous founder photo"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
            >
              <span aria-hidden className="text-lg leading-none">
                ‹
              </span>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next founder photo"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
            >
              <span aria-hidden className="text-lg leading-none">
                ›
              </span>
            </button>
          </>
        ) : null}
      </div>

      {n > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show founder photo ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-7 bg-white" : "w-1.5 bg-white/30 hover:bg-white/55",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
