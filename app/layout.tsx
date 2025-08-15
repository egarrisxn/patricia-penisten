import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_DATA } from "@/lib/config";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/app/_components/theme-provider";

const fontSans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.url),
  title: SITE_DATA.title,
  description: SITE_DATA.description,
  applicationName: SITE_DATA.title,
  creator: SITE_DATA.website,
  referrer: "origin-when-cross-origin",
  keywords: [
    "memories",
    "memorial",
    "tribute",
    "gallery",
    "timeline",
    "teacher",
    "life",
    "remembered",
    "farewell",
    "tour",
    "patricia",
    "penisten",
    "pat penisten",
    "patricia penisten",
    "patricia g penisten",
    "patsy geraldine",
    "a life remembered",
    "the farewell tour",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    url: SITE_DATA.url,
    siteName: SITE_DATA.title,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    creator: SITE_DATA.socialHandle,
    site: SITE_DATA.socialHandle,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ebeff0" },
    { media: "(prefers-color-scheme: dark)", color: "#1c2433" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      // data-scroll-behavior='smooth'
      // className='scroll-smooth'
    >
      <head>
        <meta name='apple-mobile-web-app-title' content={SITE_DATA.title} />
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} overflow-x-contain font-sans antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
