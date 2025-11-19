import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vuujyecidggecwhirala.supabase.co",
      },
    ],
  },

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
