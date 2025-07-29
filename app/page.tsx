import LandingNavbar from "@/components/landing/landing-navbar";
import Hero from "@/components/landing/hero";
import Header from "@/components/shared/header";
import About from "@/components/landing/about";
import PhotoGallery from "@/components/landing/photo-gallery";
import Guestbook from "@/components/landing/guestbook";
import CTA from "@/components/landing/cta";
import SharedFooter from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";

export default function LandingPage() {
  return (
    <div className='mx-auto grid'>
      <LandingNavbar />

      <main className='to-background bg-radial from-blue-100 from-40% dark:from-slate-800'>
        <section id='hero' className='rounded-b-lg'>
          <div className='relative min-h-screen w-full overflow-hidden'>
            <Hero />
          </div>
        </section>

        <section id='herstory' className='4xl:py-32 py-24 xl:py-28'>
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <Header
              title={"Her Story"}
              heading={"A Remarkable Journey Full of Joy."}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, to her teaching life and the joy that came of it."
              }
            />
            <About />
          </div>
        </section>

        <hr className='mx-auto max-w-lg' />

        <section id='photogallery' className='4xl:py-32 py-24 xl:py-28'>
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <Header
              title={"Photo Gallery"}
              heading={"Submit Your Memorable Photos"}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, to her teaching life and the joy that came of it."
              }
            />
            <PhotoGallery />
          </div>
        </section>

        <hr className='mx-auto max-w-lg' />

        <section id='guestbook' className='4xl:py-32 py-24 xl:py-28'>
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[96rem]'>
            <Header
              title={"Guestbook"}
              heading={"Share Your Favorite Stories"}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, to her teaching life and the joy that came of it."
              }
            />
            <Guestbook />
          </div>
        </section>

        <section id='cta' className='4xl:pt-16 pt-12 xl:pt-14'>
          <div className='px-2 backdrop-blur-md xl:px-4'>
            <CTA />
          </div>
        </section>
      </main>

      <SharedFooter />
      <ScrollToTopButton />
    </div>
  );
}
