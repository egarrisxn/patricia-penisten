import LandingNavbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import LifeStory from "@/components/landing/life-story";
import PhotoGallery from "@/components/landing/photo-gallery";
import Guestbook from "@/components/landing/guestbook";
import CTA from "@/components/landing/cta";
import ScrollToTopButton from "@/components/scroll-to-top";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <LandingNavbar />
      <main>
        <Hero />
        <LifeStory />
        <PhotoGallery />
        <Guestbook />
        <CTA />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
