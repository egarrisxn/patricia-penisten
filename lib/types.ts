export interface PhotoEntry {
  id: string;
  created_at: string;
  name?: string;
  caption?: string;
  image_url: string;
  status: "pending" | "approved" | "denied";
  submitted_by_ip: string;
}

export interface GuestbookEntry {
  id: string;
  created_at: string;
  name?: string;
  relationship?: string;
  message: string;
  status: "pending" | "approved" | "denied";
  submitted_by_ip: string;
}

export interface NavLinks {
  name: string;
  href: string;
}

export interface LifeStoryData {
  year: string;
  title: string;
  description: string;
}

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

export interface SharedFooterData {
  text: string;
  date: string;
}
