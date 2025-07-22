import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Raleway, Bitter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./_components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SITE_DATA } from "@/lib/config";

const fontSans = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Bitter({
  variable: "--font-serif",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
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
    "root",
    "tribute",
    "memories",
    "gallery",
    "timeline",
    "teacher",
    "patricia",
    "penisten",
    "rememberance",
    "Patricia Penisten",
  ],
  openGraph: {
    title: SITE_DATA.title,
    description: SITE_DATA.description,
    url: SITE_DATA.url,
    siteName: SITE_DATA.title,
    type: "website",
    locale: "en_US",
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
    { media: "(prefers-color-scheme: light)", color: "#f7f7f7" },
    { media: "(prefers-color-scheme: dark)", color: "#020618" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className='scroll-smooth' lang='en'>
      <head>
        <meta name='apple-mobile-web-app-title' content={SITE_DATA.title} />
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} overscroll-x-contain font-sans antialiased`}
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
