export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "https://memories-of-patricia.vercel.app");

export const SITE_DATA: {
  rootTitle: string;
  farewellTitle: string;
  description: string;
  rootUrl: string;
  farewellUrl: string;
  ogImage: string;
  twitterImage: string;
  alt: string;
  socialHandle: string;
  website: string;
} = {
  rootTitle: "Memories of Patricia",
  farewellTitle: "The Farewell Tour",
  description: "Celebrating the life of Patricia G. Penisten (1935-2025).",
  rootUrl: SITE_URL,
  farewellUrl: `${SITE_URL}/opengraph-image.png`,
  ogImage: `${SITE_URL}/opengraph-image.png`,
  twitterImage: `${SITE_URL}/twitter-image.png`,
  alt: "A beautiful image commemorating Patricia Penisten's life.",
  socialHandle: "@eg__xo",
  website: "https://egxo.dev",
};
