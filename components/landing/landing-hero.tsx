import Image from "next/image";
import * as motion from "motion/react-client";
import { PhotoFlip } from "@/components/ui/photo-flip";
import ScrollDown from "@/components/shared/scroll-down";
import { landingHeroData } from "@/lib/data/landing";

export default function LandingHero() {
  return (
    <>
      <div className='absolute inset-0 z-10 min-h-dvh'>
        <Image
          src={landingHeroData.src}
          alt="Background of Patricia Penisten's memorial page"
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 dark:from-black/70 dark:via-black/80 dark:to-black/90' />
      </div>

      <div className='relative z-20 flex min-h-screen flex-col justify-evenly px-4 md:justify-between [@media(min-width:600px)_and_(max-height:540px)]:pt-20'>
        <div className='flex flex-col items-center justify-center gap-0 text-center xs:gap-6 md:flex-1 lg:flex-col lg:items-center lg:text-center [@media(min-width:600px)_and_(max-height:540px)]:flex-row [@media(min-width:600px)_and_(max-height:540px)]:items-start [@media(min-width:600px)_and_(max-height:540px)]:gap-0 [@media(min-width:600px)_and_(max-height:540px)]:text-start'>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PhotoFlip className='max-w-[16rem] xs:max-w-[19rem] [@media(min-width:600px)_and_(max-height:540px)]:max-w-[12.5rem]' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className='mt-[-24] mb-2 font-serif text-[2.45rem] leading-[1.1] font-bold tracking-tight text-accent-foreground xs:mt-0 sm:text-5xl xl:text-[3.1em] [@media(min-width:600px)_and_(max-height:540px)]:mt-4 [@media(min-width:600px)_and_(max-height:540px)]:ml-[-24] [@media(min-width:600px)_and_(max-height:540px)]:text-[2.8rem]'>
              {landingHeroData.title}
            </h1>
            <h2 className='mb-8 font-normal text-white xs:mb-6 sm:text-lg xl:mb-7 xl:text-[1.2rem] xl:leading-[1.45] [@media(min-width:600px)_and_(max-height:540px)]:mb-4 [@media(min-width:600px)_and_(max-height:540px)]:ml-[-24] [@media(min-width:600px)_and_(max-height:540px)]:text-[1.1rem]'>
              <time dateTime='1935-12-22'>December 22nd, 1935</time> -{" "}
              <time dateTime='2025-06-05'>June 5th, 2025</time>
            </h2>
            <p className='mx-auto max-w-80 text-[1.6rem] leading-tight text-white sm:text-2xl xl:max-w-96 xl:text-[1.9rem] [@media(min-width:600px)_and_(max-height:540px)]:mx-0 [@media(min-width:600px)_and_(max-height:540px)]:ml-[-24] [@media(min-width:600px)_and_(max-height:540px)]:max-w-96 [@media(min-width:600px)_and_(max-height:540px)]:text-[1.8rem]'>
              Beloved{" "}
              <span className='font-semibold text-primary'>Teacher</span>,{" "}
              <span className='font-semibold text-primary'>Mother</span>,{" "}
              <span className='font-semibold text-primary'>Grandmother</span>, &{" "}
              <span className='font-semibold text-primary'>Wife</span>.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mx-auto md:pb-8'
        >
          <ScrollDown targetId='landing-about' />
        </motion.div>
      </div>
    </>
  );
}
