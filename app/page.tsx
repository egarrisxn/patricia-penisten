import LandingNavbar from "@/components/landing/landing-navbar";
import LandingHero from "@/components/landing/landing-hero";
import LandingHeader from "@/components/landing/landing-header";
import LandingLifeStory from "@/components/landing/landing-life-story";
import LandingPhotoGallery from "@/components/landing/landing-photo-gallery";
import LandingGuestbook from "@/components/landing/landing-guestbook";
import LandingCTA from "@/components/landing/landing-cta";
import SharedFooter from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";

export default function LandingPage() {
  return (
    <div className='grid min-h-dvh w-full grid-rows-[auto_1fr_auto]'>
      <LandingNavbar />

      <main className='to-background bg-radial from-blue-100 from-40% dark:from-slate-800'>
        <section id='hero'>
          <div className='relative min-h-screen w-full overflow-hidden'>
            <LandingHero />
          </div>
        </section>

        <section
          id='lifestory'
          className='4xl:pb-32 4xl:pt-34 py-24 sm:py-22 lg:py-24'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <LandingHeader
              header='Life Story'
              subheader='A remarkable journey full of joy.'
            />
            <LandingLifeStory />
          </div>
        </section>

        <section
          id='photogallery'
          className='4xl:pb-32 4xl:pt-34 py-24 sm:py-22 lg:py-24'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <LandingHeader
              header='Photo Gallery'
              subheader='Share your cherished memories in photos.'
            />
            <LandingPhotoGallery />
          </div>
        </section>

        <section
          id='guestbook'
          className='4xl:pb-32 4xl:pt-34 py-24 sm:py-22 lg:py-24'
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <LandingHeader
              header='Guestbook'
              subheader='Share your thoughts and stories.'
            />
            <LandingGuestbook />
          </div>
        </section>

        <section
          id='cta'
          className='pt-24 pb-52 md:pt-24 md:pb-64 xl:pt-36 xl:pb-68'
        >
          <div className='mx-auto max-w-md px-4 sm:px-6 md:max-w-2xl lg:max-w-3xl lg:px-8 xl:max-w-7xl 2xl:max-w-[84rem]'>
            <LandingCTA />
          </div>
        </section>
      </main>

      <SharedFooter />
      <ScrollToTopButton />
    </div>
  );
}
