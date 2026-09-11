"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ApMark } from "@/components/BrandMark";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/** Routes that render their own nav/footer and should skip the global chrome. */
const BARE_ROUTES = ["/crypto-hero", "/game"];

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.some((r) => pathname === r || pathname?.startsWith(`${r}/`));

  return (
    <>
      {!bare && <Navbar />}
      {!bare && (
        <div
          className="pointer-events-none fixed bottom-5 left-4 z-40 hidden mix-blend-difference sm:block lg:bottom-8 lg:left-6"
          aria-hidden
        >
          <ApMark className="h-10 w-auto lg:h-12" />
        </div>
      )}
      <main>{children}</main>
      {!bare && <Footer />}
    </>
  );
}
