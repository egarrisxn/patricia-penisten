import type { Metadata } from "next";
import { SITE_DATA } from "@/lib/config";
import ScrollProgress from "@/components/shared/scroll-progress";
import FarewellNavbar from "@/components/farewell/farewell-navbar";
import FarewellHero from "@/components/farewell/farewell-hero";
import FarewellTimeline from "@/components/farewell/farewell-timeline";

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
    <>
      <ScrollProgress className='top-0' />
      <FarewellNavbar />

      <section id='farewell-hero'>
        <FarewellHero />
      </section>

      <section
        id='farewell-timeline'
        className='mx-auto grid min-h-screen w-full place-items-center py-24 xl:pt-32 xl:pb-28'
      >
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8'>
          <FarewellTimeline />
        </div>
      </section>
    </>
  );
}
