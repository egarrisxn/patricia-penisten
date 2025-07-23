import type { Metadata } from "next";
import FarewellNav from "@/components/farewell/farewell-navbar";
import FarewellHero from "@/components/farewell/farewell-hero";
import FarewellTimeline from "@/components/farewell/farewell-timeline";
import SharedFooter from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";
import { SITE_DATA } from "@/lib/config";

export const metadata: Metadata = {
  title: SITE_DATA.farewellTitle,
  description: SITE_DATA.description,
  openGraph: {
    title: SITE_DATA.farewellTitle,
    description: SITE_DATA.description,
    url: SITE_DATA.farewellUrl,
    siteName: SITE_DATA.farewellTitle,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SITE_DATA.farewellOG,
        alt: SITE_DATA.altText,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_DATA.farewellTitle,
    description: SITE_DATA.description,
    creator: SITE_DATA.socialHandle,
    site: SITE_DATA.socialHandle,
    images: [
      {
        url: SITE_DATA.farewellOG,
        alt: SITE_DATA.altText,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function FarewellPage() {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <FarewellNav />

      <main className='dark:via-background via-background bg-linear-to-b from-rose-50 to-blue-50 dark:from-slate-800 dark:to-slate-900'>
        <section id='hero'>
          <FarewellHero />
        </section>

        <section id='timeline'>
          <FarewellTimeline />
        </section>
      </main>

      <SharedFooter />
      <ScrollToTopButton />
    </div>
  );
}
