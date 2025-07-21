import SharedNavbar from "@/components/shared/navbar";
import TimelineHero from "@/components/timeline/timeline-hero";
import TimelineContent from "@/components/timeline/timeline-content";
import SharedFooter from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";

export default function TimelinePage() {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <SharedNavbar />

      <main className='dark:via-background via-background bg-linear-to-b from-rose-50 to-blue-50 dark:from-slate-800 dark:to-slate-900'>
        <section id='hero' className='5xl:py-32 py-24'>
          <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
            <TimelineHero />
          </div>
        </section>

        <section id='timeline'>
          <TimelineContent />
        </section>
      </main>

      <SharedFooter />
      <ScrollToTopButton />
    </div>
  );
}
