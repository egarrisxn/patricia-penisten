import LandingNavbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import SectionHeader from "@/components/landing/section-header";
import LifeStory from "@/components/landing/life-story";
import PhotoGallery from "@/components/landing/photo-gallery";
import Guestbook from "@/components/landing/guestbook";
import CTA from "@/components/landing/cta";
import Footer from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";

export default function LandingPage() {
  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <LandingNavbar />

      <main>
        <section id='home' className='relative h-screen w-full overflow-hidden'>
          <Hero />
        </section>

        <section
          id='lifestory'
          className='5xl:py-32 to-background dark:to-background bg-gradient-to-b from-slate-200 via-slate-100 py-24 dark:from-slate-950/80 dark:via-slate-950/90'
        >
          <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
            <SectionHeader
              header='Life Story'
              subheader='A remarkable journey full of joy.'
            />
            <LifeStory />
          </div>
        </section>

        <section id='photogallery' className='5xl:py-32 py-24'>
          <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
            <SectionHeader
              header='Photo Gallery'
              subheader='Share your cherished memories with photos.'
            />
            <PhotoGallery />
          </div>
        </section>

        <section id='guestbook' className='5xl:py-32 py-24'>
          <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
            <SectionHeader
              header='Guestbook'
              subheader='Share your thoughts and stories.'
            />
            <Guestbook />
          </div>
        </section>

        <section
          id='cta'
          className='5xl:pt-40 5xl:pb-72 to-background dark:to-background bg-gradient-to-t from-slate-200 via-slate-100 pt-24 pb-52 md:pt-24 md:pb-64 xl:pt-36 xl:pb-68 dark:from-slate-900/80 dark:via-slate-950/80'
        >
          <div className='5xl:max-w-[88rem] mx-auto max-w-md px-4 sm:px-6 md:max-w-2xl lg:max-w-3xl lg:px-8 xl:max-w-7xl 2xl:max-w-[84rem]'>
            <CTA />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
