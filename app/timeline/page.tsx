import SharedNavbar from "@/components/shared/navbar";
import TimelineHero from "@/components/timeline/timeline-hero";
import TimelineContent from "@/components/timeline/timeline-content";
import Footer from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";

export default function TimelinePage() {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <SharedNavbar />

      <main>
        <section
          id='hero'
          className='bg-linear-to-tr from-rose-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
        >
          <TimelineHero />
        </section>

        <section
          id='timeline'
          className='min-h-screen bg-linear-to-br from-rose-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
        >
          <TimelineContent />
        </section>
      </main>

      <Footer />

      <ScrollToTopButton />
    </div>
  );
}
