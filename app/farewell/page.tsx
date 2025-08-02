import type { Metadata } from "next";
import { SITE_DATA } from "@/lib/config";
import FarewellNavbar from "@/components/farewell/farewell-navbar";
import FarewellHero from "@/components/farewell/farewell-hero";
import FarewellTimeline from "@/components/farewell/farewell-timeline";
import ScrollUp from "@/components/shared/scroll-up";
import Footer from "@/components/shared/footer";
import { farewellQuoteText } from "@/lib/data/farewell";

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
    <div className='mx-auto grid w-full'>
      <FarewellNavbar />
      <main className='to-background bg-linear-to-t from-blue-100 dark:from-slate-800'>
        <section id='farewell-hero'>
          <div className='relative min-h-screen w-full'>
            <FarewellHero />
          </div>
        </section>
        <section
          id='farewell-timeline'
          className='4xl:pt-36 4xl:pb-40 pt-24 pb-32'
        >
          <FarewellTimeline />
          <div className='w-full px-8 md:mx-auto md:max-w-xs md:pt-4 lg:max-w-sm'>
            <p className='text-2xl italic md:mx-auto md:text-center lg:text-3xl'>
              <q>{farewellQuoteText}</q>
            </p>
          </div>
        </section>
      </main>
      <ScrollUp />
      <Footer />
    </div>
  );
}
