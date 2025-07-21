export interface Photo {
  id: string;
  created_at: string;
  name?: string;
  caption?: string;
  image_url: string;
  status: "pending" | "approved" | "denied";
  submitted_by_ip: string;
}

export interface Entry {
  id: string;
  created_at: string;
  name?: string;
  relationship?: string;
  message: string;
  status: "pending" | "approved" | "denied";
  submitted_by_ip: string;
}

export interface LifeStoryData {
  year: string;
  title: string;
  description: string;
}

export interface FarewellHero {
  title: string;
  subtitle: string;
  quote: string;
}

export interface FarewellTimelineItem {
  id: number;
  time: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}

export interface FooterData {
  header: string;
  date: string;
  subheader: string;
}
