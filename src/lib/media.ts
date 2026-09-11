export const flowXMedia = {
  heroVideo: { src: "", poster: "/media/hero/01.jpg" },
  sponsorshipRadarVideo: { src: "", poster: "/media/hero/02.jpg" },
  problemAttentionVideo: { src: "", poster: "/media/hero/03.jpg" },
} as const;

export const heroMontage = [
  "/media/hero/01.jpg",
  "/media/hero/09.webp",
  "/media/hero/02.jpg",
  "/media/hero/10.webp",
  "/media/hero/03.jpg",
  "/media/hero/05.webp",
  "/media/hero/06.jpg",
  "/media/hero/04.jpg",
  "/media/hero/07.jpg",
  "/media/hero/08.jpg",
] as const;

export const scalpXImages = {
  lounge: {
    src: "/media/flow/understand.jpg",
    mobileSrc: "/media/flow/understand.jpg",
    alt: "Getting to know the business",
    objectPosition: "center",
    mobileObjectPosition: "center",
  },
  traders: {
    src: "/media/flow/plan-4.jpg",
    mobileSrc: "/media/flow/plan-4.jpg",
    alt: "Planning the work",
    objectPosition: "center 52%",
    mobileObjectPosition: "center 52%",
  },
  showcase: {
    src: "/media/flow/create.jpg",
    mobileSrc: "/media/flow/create.jpg",
    alt: "Making the work",
    objectPosition: "center",
    mobileObjectPosition: "center",
  },
  platform: {
    src: "/media/flow/grow-2.jpg",
    mobileSrc: "/media/flow/grow-2.jpg",
    alt: "Getting it out there",
    objectPosition: "center 42%",
    mobileObjectPosition: "center 42%",
  },
} as const;

export const flowStepImages = [
  scalpXImages.lounge,
  scalpXImages.traders,
  scalpXImages.showcase,
  scalpXImages.platform,
] as const;

export const clientLogos = [
  "/media/logos/logo-01.jpg",
  "/media/logos/logo-02.jpg",
  "/media/logos/logo-03.jpg",
  "/media/logos/logo-04.jpg",
  "/media/logos/logo-05.jpg",
  "/media/logos/logo-06.jpg",
  "/media/logos/logo-07.jpg",
  "/media/logos/logo-08.jpg",
  "/media/logos/logo-09.jpg",
  "/media/logos/logo-10.jpg",
] as const;
