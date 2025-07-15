import Header from "@/components/timeline/2/header";
import TimelineSection from "@/components/timeline/2/timeline-section";
import Footer from "@/components/timeline/2/footer";

export default function Timeline2Page() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
      <Header />
      <TimelineSection />
      <Footer />
    </div>
  );
}
