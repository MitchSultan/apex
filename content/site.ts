export const site = {
  brandName: "[Academy]",
  shortName: "[Academy] Drift School",
  tagline: "Car control, taught properly.",
  phone: "+254 700 000 000",
  whatsappNumber: "254700000000",
  email: "hello@[academy].co.ke",
  address: "[Venue Address], Nakuru, Kenya",
  reportConcernPhone: "+254 700 000 001",
  dslName: "[DSL Name]",
  dslRole: "Designated Safeguarding Lead",
  facebook: "https://facebook.com/[academy]",
  instagram: "https://instagram.com/[academy]",
  tiktok: "https://tiktok.com/@[academy]",
  youtube: "https://youtube.com/@[academy]",
  bookingLink: "/book",
  whatsappMessage:
    "Hi [Academy], I would like to learn more about your drift and car-control courses for young drivers.",
} as const;

export const primaryNav = [
  { label: "Programs", href: "/programs" },
  { label: "For Schools", href: "/schools" },
  { label: "Safety", href: "/safety" },
  { label: "Parents", href: "/parents" },
  { label: "About", href: "/about" },
] as const;

export const buildWhatsAppLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
