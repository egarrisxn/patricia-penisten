import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Memories of Patricia",
    short_name: "PGP",
    description: "Celebrating the life of Patricia G. Penisten (1935-2025).",
    id: "/",
    start_url: "/",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    orientation: "any",
    display: "standalone",
    icons: [
      {
        src: "/manifest-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/manifest-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    // screenshots: [
    //   {
    //     src: "/desktop.png",
    //     sizes: "1920x1080",
    //     type: "image/png",
    //     form_factor: "wide",
    //   },
    //   {
    //     src: "/mobile.png",
    //     sizes: "750x1334",
    //     type: "image/png",
    //   },
    // ],
  };
}
