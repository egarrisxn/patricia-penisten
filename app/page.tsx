import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import LifeStory from "@/components/landing/life-story";
import PhotoGallery from "@/components/landing/photo-gallery";
import Guestbook from "@/components/landing/guestbook";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LifeStory />
      <PhotoGallery />
      <Guestbook />
      <CTA />
      <Footer />
    </div>
  );
}
