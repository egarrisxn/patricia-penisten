import type {
  NavLinks,
  LandingAboutTextBlurb,
  LandingTimelineTeacherCard,
  LandingTimelineData,
  FarewellHeroData,
  FarewellTimelineItems,
  FooterData,
} from "@/lib/types";

//! LANDING PAGE

export const landingNavigation: NavLinks[] = [
  { name: "About", href: "#landing-about" },
  { name: "Timeline", href: "#landing-timeline" },
  { name: "Photo Gallery", href: "#landing-photogallery" },
  { name: "Guestbook", href: "#landing-guestbook" },
  { name: "Farewell Page", href: "/farewell" },
];

export const landingAboutTextBlurb = `Nullam non vulputate arcu. Suspendisse potenti. Etiam sit amet magna nibh. Aliquam consectetur, velit at auctor feugiat, mauris libero congue orci, id aliquam massa elit quis arcu. Integer fringilla ornare feugiat. Sed fermentum tortor nisl, posuere tempus libero venenatis nec. Duis faucibus dapibus ornare. Fusce fermentum arcu eu malesuada condimentum. Vestibulum consectetur porta arcu et dignissim. Fusce pharetra fringilla diam, eget eleifend diam feugiat eget. Duis nisi ante, faucibus vitae aliquam sed, bibendum vel nisl. Donec venenatis auctor velit eu tempor. Curabitur blandit molestie vestibulum. Aliquam quis auctor diam, at dignissim massa. Cras id vehicula felis. Vestibulum finibus enim mauris, id condimentum orci tempor ut.`;

export const landingTimelineTextBlurbs = `Born in Oklahoma, Patricia spent her early life on the family farm, where she learned the values of hard work and love. After marrying John Penisten, they built a life together, eventually settling in Lawton, Oklahoma, where she earned her Bachelor's Degree in Elementary Education from Cameron University. For 34 years, Pat dedicated her life to teaching at Douglas Elementary School, touching the lives of hundreds of students. Her legacy is one of unwavering dedication, unconditional support, and a profound love for her family, especially her grandchildren, with whom she cherished every moment.`;

export const landingTimelineTeacherCard: LandingTimelineTeacherCard = {
  title: "Legacy of Teaching",
  body: " For 34 years, Pat dedicated her life to teaching at Douglas Elementary School. She touched the lives of hundreds of students, always believing in their potential and inspiring them to achieve their dreams. Her classroom was a place of wonder, learning, and unconditional support.",
};

export const landingTimelineData: LandingTimelineData[] = [
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

//! FAREWELL PAGE

export const farewellNavigation: NavLinks = {
  name: "Memorial Page",
  href: "/",
};

export const farewellHeroData: FarewellHeroData = {
  pretitle: "The",
  title: "Farewell Tour",
  subtitle: "With Pat & Judi",
  song: `"How Do I Say Goodbye"`,
  artist: "Dean Lewis",
  description: `Join us on Patricia's heartfelt “Farewell Tour,” a final journey filled with love and remembrance. Her daughter, Judi, carried her ashes to visit cherished family members, honoring Pat's deep connections one last time. As you browse the photos, tap the speaker icon above to play a handpicked song and enrich the experience.`,
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
  { name: "Home Page", href: "/" },
  { name: "Farewell Tour", href: "/farewell" },
];

//! SHARED PAGES

export const footerData: FooterData = {
  text: "In Loving Memory of Patricia G. Penisten",
  date: "December 22nd, 1935 - June 5th, 2025",
};
