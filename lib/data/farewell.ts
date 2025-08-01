import { FarewellHeroData, FarewellTimelineItems, NavLinks } from "@/lib/types";

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
