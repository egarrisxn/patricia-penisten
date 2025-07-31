import LandingNavbar from "@/components/landing/landing-navbar";
import LandingHero from "@/components/landing/landing-hero";
import LandingAbout from "@/components/landing/landing-about";
import LandingTimeline from "@/components/landing/landing-timeline";
// import LandingPhotoGallery from "@/components/landing/landing-photo-gallery";
// import LandingGuestbook from "@/components/landing/landing-guestbook";
import LandingCTA from "@/components/landing/landing-cta";
import Header from "@/components/shared/header";
import ScrollUp from "@/components/shared/scroll-up";
import Footer from "@/components/shared/footer";

export default function LandingPage() {
  return (
    <div className='mx-auto grid w-full overflow-x-hidden'>
      <LandingNavbar />
      <main className='to-background bg-radial from-blue-100 from-40% dark:from-slate-800'>
        <section id='landing-hero' className='rounded-b-lg'>
          <div className='relative min-h-screen w-full overflow-hidden'>
            <LandingHero />
          </div>
        </section>
        <section
          id='landing-about'
          className='4xl:py-32 border-b-border/10 min-h-screen py-24 shadow-md xl:py-28'
        >
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <Header
              title={"About Patricia"}
              heading={"Her Life, Her Love, Her Legacy"}
              description={
                "A tribute to a life beautifully lived, filled with family, faith, and a passion for teaching. We remember the warmth she brought to every life she touched."
              }
            />
            <LandingAbout />
          </div>
        </section>
        <section
          id='landing-timeline'
          className='4xl:py-32 border-b-border/10 min-h-screen py-24 shadow-md xl:py-28'
        >
          <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 2xl:max-w-[84rem]'>
            <Header
              title={"Her Story"}
              heading={"A Little Bit About The Journey"}
              description={
                "A timeline walking you through the life of Patricia Penisten. From the beginning of her schooling, the life lessons learned in the mix, and so much more."
              }
            />
            <LandingTimeline />
          </div>
        </section>
        <section
          id='landing-photogallery'
          className='4xl:py-32 border-b-border/10 min-h-screen py-24 shadow-md xl:py-28'
        >
          <div className='mx-auto w-full max-w-[92rem] px-4 sm:px-6 md:px-8 2xl:max-w-[96rem]'>
            <Header
              title={"Photo Gallery"}
              heading={"Submit Your Memorable Photos"}
              description={
                "A space for you to post one, or many of your favorite photos you have of or with Patricia. She was not one for photos, so any that you have would be amazing."
              }
            />
            {/* <LandingPhotoGallery /> */}
          </div>
        </section>
        <section
          id='landing-guestbook'
          className='4xl:py-32 border-b-border/10 min-h-screen py-24 shadow-md xl:py-28'
        >
          <div className='mx-auto w-full max-w-[92rem] px-4 sm:px-6 md:px-8 2xl:max-w-[96rem]'>
            <Header
              title={"Guestbook"}
              heading={"Share Your Favorite Stories"}
              description={
                "As you would at an in-person gathering to celebrate the life of a loved one, a guestbook is avaiable for you to sign and leave a nugget of joy for us to read."
              }
            />
            {/* <LandingGuestbook /> */}
          </div>
        </section>
        <section
          id='landing-cta'
          className='4xl:py-32 min-h-screen py-24 shadow-md xl:py-28'
        >
          <div className='mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 2xl:max-w-[74rem]'>
            <LandingCTA />
          </div>
        </section>
      </main>
      <ScrollUp />
      <Footer />
    </div>
  );
}
