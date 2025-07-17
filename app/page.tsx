import LandingNavbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import LifeStory from "@/components/landing/life-story";
import PhotoGallery from "@/components/landing/photo-gallery";
import Guestbook from "@/components/landing/guestbook";
import CTA from "@/components/landing/cta";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";

export default function LandingPage() {
  return (
    <main className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <LandingNavbar />
      <div>
        <Hero />
        <LifeStory />
        <PhotoGallery />
        <Guestbook />
        <CTA />
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
