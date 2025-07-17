import TimelineNavbar from "@/components/timeline/navbar";
import TimelineHeader from "@/components/timeline/header";
import TimelineContent from "@/components/timeline/timeline-content";
import Footer from "@/components/footer";

export default function TimelinePage() {
  return (
    <main className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <TimelineNavbar />
      <div>
        <TimelineHeader />
        <TimelineContent />
      </div>
      <Footer />
    </main>
  );
}
