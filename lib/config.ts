export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "https://memories-of-patricia.vercel.app");

export const SITE_DATA: {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  twitterImage: string;
  socialHandle: string;
  website: string;
} = {
  title: "Memories of Patricia",
  description: "Celebrating the life of Patricia G. Penisten (1935-2025).",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image.png`,
  twitterImage: `${SITE_URL}/twitter-image.png`,
  socialHandle: "@eg__xo",
  website: "https://egxo.dev",
};
