export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "https://memories-of-patricia.vercel.app");

export const SITE_DATA: {
  title: string;
  farewellTitle: string;
  description: string;
  url: string;
  farewellUrl: string;
  farewellOG: string;
  altText: string;
  socialHandle: string;
  website: string;
} = {
  title: "Patricia Penisten: A Life Remembered",
  farewellTitle: "Patricia Penisten: The Farewell Tour",
  description:
    "Celebrating the life and legacy of Patricia G. Penisten (1935-2025).",
  url: SITE_URL,
  farewellUrl: `${SITE_URL}/farewell`,
  farewellOG: `${SITE_URL}/og.png`,
  altText: "A beautiful image commemorating Patricia G. Penisten's life.",
  socialHandle: "@eg__xo",
  website: "https://egxo.dev",
};
