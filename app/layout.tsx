// import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Raleway, Geist_Mono, Bitter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  metadataBase: new URL(SITE_DATA.url),
  title: {
    default: SITE_DATA.title,
    template: `%s | ${SITE_DATA.title}`,
  },
  description: SITE_DATA.description,
  applicationName: SITE_DATA.title,
  referrer: "origin-when-cross-origin",
  creator: SITE_DATA.website,
  keywords: [
    "memories",
    "memorial",
    "tribute",
    "obituary",
    "funeral",
    "rip",
    "grandma",
    "mother",
    "teacher",
    "patricia",
    "penisten",
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
  verification: {},
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
        <meta name='apple-mobile-web-app-title' content={SITE_DATA.title} />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
        {/* <Analytics/> */}
      </body>
    </html>
  );
}
