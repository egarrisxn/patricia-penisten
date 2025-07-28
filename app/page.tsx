import LandingNavbar from "@/components/landing/landing-navbar";
import LandingHero from "@/components/landing/landing-hero";
import LandingLifeStory from "@/components/landing/landing-life-story";
import LandingPhotoGallery from "@/components/landing/landing-photo-gallery";
import LandingGuestbook from "@/components/landing/landing-guestbook";
import LandingCTA from "@/components/landing/landing-cta";
import PageHeader from "@/components/shared/page-header";
import SharedFooter from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";

export default function LandingPage() {
  return (
    <div className='mx-auto grid'>
      <LandingNavbar />

      <main className='to-background bg-radial from-blue-100 from-40% dark:from-slate-800'>
        <section id='hero' className='rounded-b-lg'>
          <div className='relative min-h-screen w-full overflow-hidden'>
            <LandingHero />
          </div>
        </section>

        <section id='herstory' className='4xl:py-32 py-24 xl:py-28'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <PageHeader
              title={"Her Story"}
              heading={"A Remarkable Journey Full of Joy."}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, to her teaching life and the joy that came of it."
              }
            />
            <LandingLifeStory />
          </div>
        </section>

        <section id='photogallery' className='4xl:py-32 py-24 xl:py-28'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <PageHeader
              title={"Photo Gallery"}
              heading={"Share With Us Your Cherished Photos"}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, to her teaching life and the joy that came of it."
              }
            />
            <LandingPhotoGallery />
          </div>
        </section>

        <section id='guestbook' className='4xl:py-32 py-24 xl:py-28'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <PageHeader
              title={"Guestbook"}
              heading={"Submit All Your Thoughts or Stories"}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, to her teaching life and the joy that came of it."
              }
            />

            <LandingGuestbook />
          </div>
        </section>

        <section id='cta' className='mx-8 mb-8 rounded-lg border-2'>
          <div className='4xl:py-40 mx-auto max-w-md px-4 py-24 sm:px-6 md:max-w-2xl lg:max-w-3xl lg:px-8 xl:max-w-7xl xl:py-32 2xl:max-w-[84rem]'>
            <LandingCTA />
          </div>
        </section>
      </main>

      <SharedFooter />
      <ScrollToTopButton />
    </div>
  );
}
