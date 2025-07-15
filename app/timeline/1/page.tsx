import Header from "@/components/timeline/1/header";
import TimelineSection from "@/components/timeline/1/timeline-section";

import Footer from "@/components/timeline/1/footer";

export default function Timeline1Page() {
  return (
    <div className='min-h-screen bg-linear-to-br from-rose-50 via-white to-blue-50'>
      <Header />
      <TimelineSection />
      <Footer />
    </div>
  );
}
