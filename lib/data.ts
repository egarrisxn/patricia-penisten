import type {
  NavLinks,
  LifeStoryData,
  FarewellHeroData,
  FarewellTimelineItems,
  SharedFooterData,
} from "@/lib/types";

//! LANDING PAGE

export const landingNavigation: NavLinks[] = [
  { name: "Life Story", href: "#lifestory" },
  { name: "Photo Gallery", href: "#photogallery" },
  { name: "Guestbook", href: "#guestbook" },
  { name: "Farewell Tour", href: "/farewell" },
];

export const lifeStoryData: LifeStoryData[] = [
  {
    year: "1935",
    title: "Born in Oklahoma",
    description:
      "Born on December 22nd to Hugh and Ettie Irene (Tisdale) Blevins on the family farm near Connerville and Mills Creek.",
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

export const lifeStoryBlurbs = [
  `Patricia was born on the family farm between Connerville and Mills Creek, Oklahoma on December 22nd, 1935 to Hugh and Ettie Irene (Tisdale) Blevins. She grew up in Connerville and attended Tishomingo Schools.`,
  `She married John Penisten on November 26, 1956 in Ada, Oklahoma where they lived, later moving to Douglas, Wyoming and returning to Oklahoma, living in Bray until 1967 when they moved to Lawton.`,
  `Patricia finished her education with a Bachelors Degree in Elementary Education from Cameron University and worked at Douglas Elementary for 34 years before retiring.`,
  `She enjoyed shopping and loved being with her family and taking care of the grandchildren.`,
];

//! FAREWELL PAGE

export const farewellHeroData: FarewellHeroData = {
  pretitle: "The",
  title: "Farewell Tour",
  subtitle: "With Pat & Judi",
  song: `"How Do I Say Goodbye"`,
  artist: "Dean Lewis",
  description: `Join us on Patricia's final, heartwarming "Farewell Tour." Her daughter, Judi, lovingly carried her mother's ashes on a special journey to visit cherished relatives, bringing Pat to those she held dear one last time. This page is a tribute to their extraordinary bond and the enduring connections of family.`,
};

export const farewellTimelineItems: FarewellTimelineItems[] = [
  {
    id: 1,
    time: "Pre Trip",
    title: "Pat & Judi",
    description:
      "Pat spent time with Judi just a few days before her final journey began together with family.",
    src: "/farewell/gma-judi.png",
    alt: "Pat & Judi",
  },
  {
    id: 2,
    time: "The Beginning",
    title: "Pat Solo",
    description:
      "She settled in with Judi by her side, ready to begin her final road trip with peace and grace.",
    src: "/farewell/gma-solo.png",
    alt: "Pat Solo",
  },
  {
    id: 3,
    time: "First Stop",
    title: "Pat & Ettie",
    description:
      "Her first visit was with her mother Ettie, where they shared a sweet and quiet morning moment.",
    src: "/farewell/gma-ettie.png",
    alt: "Pat & Ettie",
  },
  {
    id: 4,
    time: "Second Stop",
    title: "Pat & Hugh",
    description:
      "Next, she visited her father Hugh, who no doubt welcomed her with pride and warmth in spirit.",
    src: "/farewell/gma-hugh.png",
    alt: "Pat & Hugh",
  },

  {
    id: 5,
    time: "Third Stop",
    title: "Pat, Jimmy, & Randi",
    description:
      "She made a stop to visited her children Jimmy and Randi for hugs, laughter, and reflection.",
    src: "/farewell/gma-jimmy.png",
    alt: "Pat, Jimmy, & Randi",
  },
  {
    id: 6,
    time: "Fourth Stop",
    title: "Pat & Chuck",
    description:
      "Just a few feet over was her brother-in-law Chuck, thankful for the time they had to talk and connect.",
    src: "/farewell/gma-chuck.png",
    alt: "Pat & Chuck",
  },
  {
    id: 7,
    time: "Final Goodbye",
    title: "Pat, Chuck, Jimmy, & Randi",
    description:
      "Her final visit brought time with Chuck, Jimmy, and Randi. Her journey could now come to rest.",
    src: "/farewell/gma-jimmy-n-chuck.png",
    alt: "Pat, Chuck, Jimmy, & Randi",
  },
  {
    id: 8,
    time: "The End",
    title: "Cheryl & Judi",
    description:
      "Cheryl could not join the trip, so Judi gave her a kiss for Pat, a final act of sisterly love.",
    src: "/farewell/gma-judi-n-cheryl.png",
    alt: "Cheryl & Judi",
  },
];

export const farewellQuoteText =
  "A life beautifully lived, and a legacy of love that will forever remain in our hearts.";

//! ADMIN PAGE

export const adminNavigation: NavLinks[] = [
  { name: "Home", href: "/" },
  { name: "Farewell Tour", href: "/farewell" },
];

//! SHARED PAGES

export const sharedFooterData: SharedFooterData = {
  text: "In Loving Memory of Patricia G. Penisten",
  date: "December 22nd, 1935 - June 5th, 2025",
};
