import type { NavLink, RoasteryHighlight, SocialItem } from "@/types";

export const BRAND = {
  name: "Kape Lokal",
  tagline: "Coffee & Roastery",
  legalName: "Kape Lokal Roasters Inc.",
  cta: "Visit a Bar",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "Roastery", href: "#story" },
  { label: "Location", href: "#locations" },
];

export const SOCIAL_ITEMS: SocialItem[] = [
  { platform: "facebook", label: "Facebook" },
  { platform: "instagram", label: "Instagram" },
  { platform: "x", label: "X" },
  { platform: "tiktok", label: "TikTok" },
];

export const HERO_CONTENT = {
  eyebrow: "Philippine Coffee · Roasted Daily",
  headline: "Honest local coffee, brewed slow and served simply.",
  description:
    "Small-batch beans from Benguet, Batangas, and Mt. Apo — crafted into balanced espresso, muscovado lattes, and warm pastries across our neighborhood coffee bars.",
  primaryCta: { label: "Explore Menu", href: "#menu" },
  secondaryCta: { label: "Find a Café", href: "#locations" },
} as const;

export const ROASTERY_HIGHLIGHTS: RoasteryHighlight[] = [
  {
    id: "philippine-highlands",
    number: "01",
    title: "Philippine Highlands",
    description:
      "Single-origin Arabica and Liberica harvested directly with partner growers in Benguet, Sagada, Lipa, and Mt. Apo.",
  },
  {
    id: "small-batch-roasted",
    number: "02",
    title: "Small-Batch Roasted",
    description:
      "Roasted weekly in Manila to highlight clean natural sweetness, bright calamansi acidity, and warm Davao cacao notes.",
  },
  {
    id: "quiet-spaces",
    number: "03",
    title: "Spaces for Slow Mornings",
    description:
      "Calm, sunlit coffee bars designed for morning rituals, focused workdays, and unhurried kwentuhan over a good cup.",
  },
];
