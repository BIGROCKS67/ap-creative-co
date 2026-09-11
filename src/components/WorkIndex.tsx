"use client";

import { useState } from "react";
import Image from "next/image";
import { siteCopy } from "@/lib/content";
import { galleryImages, serviceGalleries, type GalleryKind } from "@/lib/galleries";
import { WorkGallery } from "@/components/WorkGallery";

const doors: { kind: GalleryKind; image: string; count: string }[] = [
  { kind: "social", image: "/media/services/social.jpg", count: "Reports" },
  { kind: "photo", image: "/media/services/photo.jpg", count: `${galleryImages.photo.length} stills` },
  { kind: "print", image: "/media/services/print.jpg", count: `${galleryImages.print.length} pieces` },
  { kind: "web", image: "/media/services/web.jpg", count: `${galleryImages.web.length} sites` },
];

export function WorkIndex() {
  const [open, setOpen] = useState<GalleryKind | null>(null);
  const preview = galleryImages.print.slice(0, 18);

  return (
    <section className="bg-flow-black pb-24 pt-28 lg:pt-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mm-eyebrow mb-4">{siteCopy.platform.eyebrow}</p>
        <h1 className="font-display max-w-[10ch] text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.88] tracking-[-0.05em] text-white">
          {siteCopy.platform.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-flow-muted">{siteCopy.platform.body}</p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {doors.map((door) => {
            const gallery = serviceGalleries[door.kind];
            return (
              <button
                key={door.kind}
                type="button"
                onClick={() => setOpen(door.kind)}
                className="group relative overflow-hidden rounded-[1.75rem] bg-flow-graphite text-left"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={door.image}
                    alt={gallery.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                    {door.count}
                  </p>
                  <h2 className="font-display mt-2 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                    {gallery.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm text-white/60">{gallery.body}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {preview.map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpen("print")}
              className="mb-4 block w-full overflow-hidden rounded-[1.25rem] bg-white/5"
            >
              <Image
                src={src}
                alt=""
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {open ? <WorkGallery kind={open} onClose={() => setOpen(null)} /> : null}
    </section>
  );
}
