import LandingNavbar from "@/components/landing/landing-navbar";
import Hero from "@/components/landing/hero";
import Header from "@/components/shared/header";
import About from "@/components/landing/about";
import PhotoGalleryTwo from "@/components/landing/photo-gallery-two";
import Guestbook from "@/components/landing/guestbook";
import CTATwo from "@/components/landing/cta-two";
import SharedFooter from "@/components/shared/footer";
import ScrollToTopButton from "@/components/shared/scroll-to-top";

export default function LandingPage() {
  return (
    <div className='mx-auto grid w-full overflow-x-hidden'>
      <LandingNavbar />

      <main className='to-background bg-radial from-blue-100 from-40% dark:from-slate-800'>
        <section id='hero' className='rounded-b-lg'>
          <div className='relative min-h-screen w-full overflow-hidden'>
            <Hero />
          </div>
        </section>

        <section
          id='herstory'
          className='4xl:py-32 border-b-border/10 py-24 shadow-md xl:py-28'
        >
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <Header
              title={"Her Story"}
              heading={"A Little Bit About The Journey"}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, and so much more."
              }
            />
            <About />
          </div>
        </section>

        <section
          id='photogallerytwo'
          className='4xl:py-32 border-b-border/10 py-24 shadow-md xl:py-28'
        >
          <div className='mx-auto w-full max-w-[92rem] px-4 sm:px-6 md:px-8 2xl:max-w-[96rem]'>
            <Header
              title={"Photo Gallery"}
              heading={"Submit Your Memorable Photos"}
              description={
                "A space for you to post one, or many of your favorite photos you have of or with Patricia. She was not one for photos, so any that you have would be amazing."
              }
            />
            <PhotoGalleryTwo />
          </div>
        </section>

        <section id='guestbook' className='4xl:py-32 py-24 xl:py-28'>
          <div className='mx-auto w-full max-w-[92rem] px-4 sm:px-6 md:px-8 2xl:max-w-[96rem]'>
            <Header
              title={"Guestbook"}
              heading={"Share Your Favorite Stories"}
              description={
                "As you would at an in-person gathering to celebrate the life of a loved one, a guestbook is avaiable for you to sign and leave a nugget of joy for us to read."
              }
            />
            <Guestbook />
          </div>
        </section>

        <section id='ctatwo' className='4xl:py-16 py-8 xl:py-12'>
          <div className='mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 2xl:max-w-[74rem]'>
            <CTATwo />
          </div>
        </section>
      </main>

      <SharedFooter />
      <ScrollToTopButton />
    </div>
  );
}
