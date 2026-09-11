export const previewLinks = {
  isPreview: false,
  joinCommunity: "/contact/",
  explorePlatform: "/services/",
  viewTerminal: "/work/",
  viewCommunity: "/about/",
  viewEducation: "/founder/",
  viewTestimonials: "/#testimonials",
  discord: "https://www.instagram.com/apcreativeco_/",
  discordInvite: "/contact/",
  twitter: "https://www.instagram.com/apcreativeco_/",
  telegram: "https://wa.me/447809291625",
  docs: "/privacy/",
  app: "/work/",
  terminal: "/work/",
  contact: "/contact/",
} as const;

export type PreviewLinkKey = keyof typeof previewLinks;
