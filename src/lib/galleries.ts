export type GalleryKind = "social" | "photo" | "print" | "web";

const printCount = 111;
const photoCount = 3;
const webCount = 5;
const charityCount = 12;

function numbered(prefix: string, count: number, folder: string) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/media/gallery/${folder}/${prefix}-${n}.jpg`;
  });
}

export const galleryImages = {
  print: numbered("print", printCount, "print"),
  photo: [
    ...numbered("photo", photoCount, "photo"),
    "/media/hero/01.jpg",
    "/media/hero/02.jpg",
    "/media/hero/03.jpg",
    "/media/hero/09.webp",
    "/media/hero/10.webp",
    "/media/services/photo.jpg",
    "/media/services/photo-alt.webp",
    "/media/founder/shoot.webp",
  ],
  web: numbered("web", webCount, "web"),
  charity: numbered("charity", charityCount, "charity"),
} as const;

export type GalleryLink = { href: string; label: string };

export const serviceGalleries: Record<
  GalleryKind,
  {
    title: string;
    body: string;
    images: readonly string[];
    reports?: boolean;
    links?: readonly GalleryLink[];
  }
> = {
  social: {
    title: "Social",
    body: "The numbers behind the accounts. Reach, views and what the work actually did.",
    images: [],
    reports: true,
  },
  photo: {
    title: "Photo & video",
    body: "Stills and frames from shoots. Photography, video, reels and drone.",
    images: galleryImages.photo,
  },
  print: {
    title: "Design & print",
    body: "Cards, flyers, kits, vans, menus, boards. If it has a logo on it, it’s in here.",
    images: galleryImages.print,
  },
  web: {
    title: "Websites",
    body: "Sites, campaigns and the bigger jobs around a launch. Click through to the live one.",
    images: galleryImages.web,
    links: [
      { href: "https://theredcowchesterton.co.uk", label: "The Red Cow" },
      { href: "https://www.ljplumbheat.co.uk", label: "LJ Plumbing & Heating" },
      { href: "https://aanddroofingsolutions.com", label: "A&D Roofing & Construction" },
      { href: "https://www.smh-gas-specialist.co.uk", label: "SMH Gas Specialist" },
      { href: "https://ap-creative.vercel.app", label: "AP Creative Co" },
    ],
  },
};
