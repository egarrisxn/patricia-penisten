import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vuujyecidggecwhirala.supabase.co",
      },
    ],
  },
  //! This will be needed in future versions
  // Disable smooth scrolling during route transitions
  // This will optimize navigation and performance
  // <html lang="en" data-scroll-behavior="smooth" />
  experimental: {
    optimizeRouterScrolling: true,
  },
  //! This will be needed in future versions
  // For cross-origin requests during development
  // Example: checking development on moble device
  // allowedDevOrigins: ["xxx.xxx.x.xxx", "*xxxxx-xxxxx.xxx"],

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.youtube.com https://www.youtube.com/iframe_api https://s.ytimg.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https://i.ytimg.com https://s.ytimg.com;
              font-src 'self' data:;
              media-src 'self';
              connect-src 'self' https://vuujyecidggecwhirala.supabase.co https://www.youtube.com https://s.ytimg.com https://www.youtube-nocookie.com;
              frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
            `
              .replace(/\s+/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
