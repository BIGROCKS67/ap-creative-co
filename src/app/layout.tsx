import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { ScrollToTopOnLoad } from "@/components/ScrollToTopOnLoad";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060807",
};

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AP Creative Co",
    "Anthony Parry",
    "social media management",
    "content creation",
    "branding",
    "print",
    "merchandise",
    "websites",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteOrigin,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: "/media/hero/09.webp", width: 1200, height: 630, alt: "Anthony Parry, AP Creative Co" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <SmoothScrollProvider>
          <ScrollToTopOnLoad />
          <SiteChrome>{children}</SiteChrome>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
