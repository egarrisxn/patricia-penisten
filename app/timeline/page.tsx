import TimelineNavbar from "@/components/timeline/navbar";
import TimelineHeader from "@/components/timeline/header";
import TimelineContent from "@/components/timeline/timeline-content";
import Footer from "@/components/footer";

export default function TimelinePage() {
  return (
    <div>
      <TimelineNavbar />
      <TimelineHeader />
      <TimelineContent />
      <Footer />
    </div>
  );
}
