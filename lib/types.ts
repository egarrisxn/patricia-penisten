import { BookMarked, Star, HeartHandshake } from "lucide-react";

// Shared
export interface HeadingData {
  title: string;
  body: string;
}
export interface NavLinks {
  name: string;
  href: string;
}
export interface AppError {
  error: Error;
  reset: () => void;
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

// Icon Map
export const iconMap = {
  BookMarked: BookMarked,
  Star: Star,
  HeartHandshake: HeartHandshake,
};
export type IconName = keyof typeof iconMap;

// Landing Page
export interface LandingHeroData extends HeadingData {
  src: string;
}
export interface LandingAboutCardData {
  blurbs: string[];
}
export interface LandingTimelineCards extends HeadingData {
  icon: IconName;
  text?: string;
  link?: {
    href: string;
    name: string;
  };
}
export interface LandingTimelineData extends HeadingData {
  year: string;
}
export interface LandingCTAData extends HeadingData {
  button: string;
}

// Farewell Page
export interface FarewellHeroData extends HeadingData {
  pretitle: string;
  subtitle: string;
  song: string;
  artist: string;
}
export interface FarewellTimelineItems extends HeadingData {
  id: number;
  time: string;
  src: string;
  alt: string;
}
