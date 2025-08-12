import type { Metadata } from "next";
import { SITE_DATA } from "@/lib/config";
import ScrollProgress from "@/components/shared/scroll-progress";
import PageSection from "@/components/shared/page-section";

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
      <main className='to-background bg-radial from-blue-100 from-40% dark:from-slate-800'>
        <section id='farewell-hero'>
          <FarewellHero />
        </section>

        <PageSection id='farewell-timeline'>
          <FarewellTimeline />
        </PageSection>
      </main>
    </>
  );
}
