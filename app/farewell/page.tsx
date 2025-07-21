import type { Metadata } from "next";
import SharedNavbar from "@/components/shared/navbar";
import FarewellHero from "@/components/farewell/farewell-hero";
import FarewellTimeline from "@/components/farewell/farewell-timeline";
import SharedFooter from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";
import { SITE_DATA } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DATA.rootUrl),
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
        url: SITE_DATA.ogImage,
        alt: SITE_DATA.alt,
        // url: "https://memories-of-patricia.vercel.app/opengraph-image.png",
        // alt: "A beautiful image commemorating Patricia Penisten's life",
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
        url: SITE_DATA.twitterImage,
        alt: SITE_DATA.alt,
        // url: "https://memories-of-patricia.vercel.app/opengraph-image.png",
        // alt: "A beautiful image commemorating Patricia Penisten's life.",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function FarewellPage() {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <SharedNavbar />

      <main className='dark:via-background via-background bg-linear-to-b from-rose-50 to-blue-50 dark:from-slate-800 dark:to-slate-900'>
        <section id='hero' className='5xl:py-32 pt-36 pb-24'>
          <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
            <FarewellHero />
          </div>
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
