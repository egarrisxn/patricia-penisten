import ScrollProgress from "@/components/shared/scroll-progress";

import FarewellNavbar from "@/components/farewell/farewell-navbar";
import FarewellHero from "@/components/farewell/farewell-hero";
import FarewellTimeline from "@/components/farewell/farewell-timeline";

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
