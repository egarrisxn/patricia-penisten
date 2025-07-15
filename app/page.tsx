import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import MainContent from "@/components/landing/main-content";
import LifeStory from "@/components/landing/life-story";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <LifeStory />
      <MainContent />
      <Footer />
    </div>
  );
}
