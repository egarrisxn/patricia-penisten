import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Raleway, Geist_Mono, Bitter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./_components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SITE_DATA } from "@/lib/config";

const fontSans = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fontSerif = Bitter({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.rootUrl),
  title: SITE_DATA.rootTitle,
  description: SITE_DATA.description,
  applicationName: SITE_DATA.rootTitle,
  creator: SITE_DATA.website,
  referrer: "origin-when-cross-origin",
  keywords: [
    "memories",
    "memorial",
    "farewell",
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
    title: SITE_DATA.rootTitle,
    description: SITE_DATA.description,
    url: SITE_DATA.rootUrl,
    siteName: SITE_DATA.rootTitle,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.rootTitle,
    description: SITE_DATA.description,
    creator: SITE_DATA.socialHandle,
    site: SITE_DATA.socialHandle,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
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
        <meta name='apple-mobile-web-app-title' content={SITE_DATA.rootTitle} />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable} overscroll-x-contain font-sans antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
