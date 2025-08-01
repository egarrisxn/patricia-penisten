import {
  LandingAboutCard,
  LandingTimelineCards,
  LandingTimelineData,
  NavLinks,
} from "@/lib/types";

export const landingNavigation: NavLinks[] = [
  { name: "About", href: "#landing-about" },
  { name: "Timeline", href: "#landing-timeline" },
  { name: "Photo Gallery", href: "#landing-photogallery" },
  { name: "Guestbook", href: "#landing-guestbook" },
  { name: "Farewell Page", href: "/farewell" },
];

export const landingAboutCard: LandingAboutCard = {
  title: "Born in the heart of Oklahoma,",
  blurbs: [
    `Patricia lived a life defined by unwavering love, gentle wisdom, and quiet strength.`,
    ` While she dedicated 34 years to shaping young minds as a beloved elementary school teacher, her truest passion was her family.`,
    ` She found immense joy in the simple moments, whether it was doting on her grandchildren or spending a day of shopping.`,
    `Her legacy is not just in the lessons she taught, but in the unconditional love she gave, leaving a warmth that will forever remain in the hearts of all who knew her.`,
  ],
};

export const landingTimelineCards: LandingTimelineCards[] = [
  {
    icon: "Star",
    title: "Legacy of a Teacher",
    body: `For one-third of her life, Pat dedicated her life to teaching at Douglas Elementary School. She touched the lives of hundreds of students, always believing in their potential and inspiring them to achieve their dreams. Her classroom was a place of wonder, learning, and unconditional support.`,
  },
  {
    icon: "HeartHandshake",
    title: "Grandma to All",
    body: "She lived to be a grandma in every sense of the word. With an open-door policy and a heart full of love, she raised countless children and was a beloved figure to friends, relatives, and even her own kids. While she was a great mother, she truly excelled at being a grandma, and her memory lives on as the most amazing woman to so many.",
  },
  {
    icon: "BookMarked",
    title: "A Life Remembered",
    body: "The timeline here is a year-by-year look at the milestones that defined Patricia's journey. For more details on her life, you can view her",
    textOne: "courtesy of the Lawton Ritter Gray Funeral Home.",
    link: {
      href: "https://www.grayfuneral.com/obituaries/Patricia-G-Penisten?obId=42802528",
      name: "Official Obituary",
    },
  },
];

export const landingTimelineData: LandingTimelineData[] = [
  {
    year: "1935",
    title: "Born in Oklahoma",
    description:
      "Born on December 22nd to Hugh and Ettie Irene (Tisdale) Blevins on the family farm near Connerville and Mill Creek.",
  },
  {
    year: "1940s",
    title: "Childhood in Connerville",
    description:
      "Grew up in Connerville, attending Tishomingo Schools and helping on the family farm.",
  },
  {
    year: "1956",
    title: "Married John Penisten",
    description:
      "Married in Ada, Oklahoma and began a life together that would span decades and states.",
  },
  {
    year: "1950s - 1970s",
    title: "Early Family Life",
    description:
      "Lived in Ada, moved to Douglas, Wyoming, and eventually settled in Lawton, Oklahoma by 1967.",
  },
  {
    year: "1970s",
    title: "Pursued Higher Education",
    description:
      "Earned her Bachelor's Degree in Elementary Education from Cameron University while raising her family.",
  },
  {
    year: "1970s - 2000s",
    title: "Teaching Career at Douglas Elementary",
    description:
      "Devoted 34 years to educating young minds with love, patience, and dedication.",
  },
  {
    year: "2000s",
    title: "Retirement",
    description:
      "Retired after decades of service, leaving behind a lasting legacy of learning and care.",
  },
  {
    year: "2000s - 2020s",
    title: "Time with Family",
    description:
      "Loved shopping, spending time with family, and especially doting on her grandchildren.",
  },
];
