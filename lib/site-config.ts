import { Sparkles, Star, Search, Handshake, Smartphone, Link, Palette } from "lucide-react";

export const siteName = "NovaLume";

export const siteConfig = {
  name: siteName,
  description:
    "Digitalni medijski portal i influencer hub posvećen zdravlju, lepoti i pametnom životnom stilu",
  tagline: "Osvetlimo najbolje iz sveta zdravlja, nege i svakodnevnog života",
  hero: {
    title: "Digitalni medijski portal za zdravlje, lepotu i pametan život",
    subtitle:
      "Kroz autentičan sadržaj i pažljivo brane brendove, stvaramo inspiraciju koja pokreće zajednicu",
    cta: "Započni saradnju",
    stats: [
      { value: "18K+", label: "Pratilaca" },
      { value: "5%", label: "Engagement rate" },
      { value: "500+", label: "Uspešnih kampanja" },
    ],
  },
  features: [
    {
      title: "Autentičnost",
      description: "Svaka preporuka je pažljivo odabrana i testirana",
      icon: Sparkles,
    },
    {
      title: "Kvalitet",
      description: "Sarađujemo samo sa brendovima u koje verujemo",
      icon: Star,
    },
    {
      title: "Transparentnost",
      description: "Svaka sponzorisana objava je jasno označena",
      icon: Search,
    },
    {
      title: "Zajednica",
      description: "Gradimo poverenje sa publikom, ne brojke",
      icon: Handshake,
    },
  ],
  services: [
    {
      id: "instagram",
      name: "Instagram kampanje",
      price: "Od 50€",
      description: "Story, reels i post promocije",
      icon: Smartphone,
      features: [
        "Story promocije",
        "Reels sadržaj",
        "Feed postovi",
        "Hashtag strategija",
      ],
    },
    {
      id: "affiliate",
      name: "Affiliate promocije",
      price: "Od 30€",
      description: "Direktni linkovi i kodovi",
      icon: Link,
      features: [
        "Direktni linkovi",
        "Affiliate kodovi",
        "Tracking performansi",
        "Konverzije",
      ],
    },
    {
      id: "custom",
      name: "Custom sadržaj",
      price: "Po dogovoru",
      description: "AI-generisani video, carousel, tekstovi",
      icon: Palette,
      features: [
        "AI video sadržaj",
        "Carousel dizajn",
        "Kreativno pisanje",
        "Brand storytelling",
      ],
    },
  ],
  additionalServices: [
    {
      id: "pr",
      name: "PR objave i recenzije",
      description: "Detaljne recenzije proizvoda i PR sadržaj",
    },
    {
      id: "giveaway",
      name: "Nagradne igre",
      description: "Giveaway kampanje i nagradne igre",
    },
  ],
  targetAudience: {
    demographics: "60% žene, 40% muškarci",
    ageGroup: "18-34 godina",
    region: "Srbija i Ex-Yu region",
    interests: "Zdravlje, lepota, wellness, hrana, self-care",
  },
  contact: {
    email: "info@novalume.rs",
    instagram: "@novalume.rs",
    phone: "+381 60 123 4567",
  },
};
