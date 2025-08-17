import ScrollProgress from "@/components/shared/scroll-progress";
import LandingNavbar from "@/components/landing/landing-navbar";
import LandingHero from "@/components/landing/landing-hero";
import Section from "@/components/ui/section";
import LandingAbout from "@/components/landing/landing-about";
import LandingTimeline from "@/components/landing/landing-timeline";
import LandingPhotoGallery from "@/components/landing/landing-photo-gallery";
import LandingGuestbook from "@/components/landing/landing-guestbook";
import LandingCTA from "@/components/landing/landing-cta";

export default function LandingPage() {
  return (
    <>
      <ScrollProgress className='top-0' />
      <LandingNavbar />

      <section id='landing-hero' className='rounded-b-lg'>
        <LandingHero />
      </section>

      <Section
        id='landing-about'
        title='About Patricia'
        heading='Her Life, Love, & Legacy'
        description={`A tribute to a life beautifully lived, filled with family, faith, and a passion for teaching. We remember the warmth she brought to every life she touched.`}
      >
        <LandingAbout />
      </Section>

      <Section
        id='landing-timeline'
        title='Her Story'
        heading='A Little About The Journey'
        description={`A timeline walking you through the life of Patricia. From the beginning of her schooling, the life lessons learned in the mix, and so much more.`}
      >
        <LandingTimeline />
      </Section>

      <Section
        id='landing-photogallery'
        title='Photo Gallery'
        heading='Your Memories in Pictures'
        description={`A place to share your treasured photos of Patricia. Whether it's a candid moment, a celebration, or a simple smile, your photos help us remember her.`}
      >
        <LandingPhotoGallery />
      </Section>

      <Section
        id='landing-guestbook'
        title='Guestbook'
        heading='Share a Story or Memory'
        description={`Please sign the guestbook below. Share a favorite story, a message of remembrance, or a moment that stands out in your memory of Patricia.`}
        className='lg:max-w-[92rem] 3xl:max-w-[104rem]'
      >
        <LandingGuestbook />
      </Section>

      <section id='landing-cta' className='mt-24 bg-accent dark:bg-background'>
        <LandingCTA />
      </section>
    </>
  );
}
