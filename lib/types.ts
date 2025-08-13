import { BookMarked, Star, HeartHandshake } from "lucide-react";

// Themes
export type Theme = "light" | "dark" | "system";
export type ThemeToggleSize = "sm" | "md" | "lg";

// Icon Map
export const iconMap = {
  BookMarked: BookMarked,
  Star: Star,
  HeartHandshake: HeartHandshake,
};

export type IconName = keyof typeof iconMap;

// General Purpose Interfaces
export interface NavLinks {
  name: string;
  href: string;
}

export interface CardData {
  title: string;
  body: string;
  textOne?: string;
  textTwo?: string;
}

// Landing Page Interfaces
export interface LandingHeroData {
  name: string;
  lifespan: string;
  backgroundSrc: string;
}
export interface LandingAboutCardData {
  blurbs: string[];
}

export interface LandingTimelineCards extends CardData {
  icon?: IconName;
  link?: {
    href: string;
    name: string;
  };
}

export interface LandingTimelineData {
  year: string;
  title: string;
  description: string;
}

export interface LandingCTAData extends CardData {
  button: string;
}

// Farewell Page Interfaces
export interface FarewellHeroData {
  pretitle: string;
  title: string;
  subtitle: string;
  song: string;
  artist: string;
  description: string;
}

export interface FarewellTimelineItems {
  id: number;
  time: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}

// Shared Interfaces
export interface FooterCard extends CardData {
  link: {
    href: string;
    name: string;
  };
}

// Photo Gallery
export interface PhotoEntry {
  id: string;
  created_at: string;
  name?: string;
  caption?: string;
  image_url: string;
  status: "pending" | "approved" | "denied";
  submitted_by_ip: string;
}

// Guestbook
export interface GuestbookEntry {
  id: string;
  created_at: string;
  name?: string;
  relationship?: string;
  message: string;
  status: "pending" | "approved" | "denied";
  submitted_by_ip: string;
}
