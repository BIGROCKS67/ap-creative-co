"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { designedReports } from "@/lib/reports";
import { serviceGalleries, type GalleryKind } from "@/lib/galleries";
import { ReportCard } from "@/components/ReportCard";

export function WorkGallery({
  kind,
  onClose,
}: {
  kind: GalleryKind;
  onClose: () => void;
}) {
  const gallery = serviceGalleries[kind];
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (active) setActive(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, onClose]);

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-[#060807]/96 backdrop-blur-md">
      <div className="mx-auto flex min-h-full max-w-7xl flex-col px-5 py-8 lg:px-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="mm-eyebrow mb-2">The work</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {gallery.title}
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/55">{gallery.body}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white hover:text-black"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {gallery.reports ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designedReports.map((report) => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {gallery.images.map((src, i) => {
              const link = gallery.links?.[i];
              const thumb = (
                <>
                  <Image
                    src={src}
                    alt={link?.label ?? ""}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover object-top transition duration-300 group-hover:scale-[1.04]"
                  />
                  {link ? (
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-left text-xs font-medium text-white">
                      {link.label}
                      <span className="mt-0.5 block text-[10px] uppercase tracking-[0.14em] text-white/60">
                        Visit site
                      </span>
                    </span>
                  ) : null}
                </>
              );

              if (link) {
                return (
                  <a
                    key={src}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-white/5 sm:rounded-2xl"
                  >
                    {thumb}
                  </a>
                );
              }

              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(src)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-white/5 sm:rounded-2xl"
                >
                  {thumb}
                </button>
              );
            })}
          </div>
        )}
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
    </div>
  );
}
