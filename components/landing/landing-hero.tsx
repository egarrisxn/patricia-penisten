import Image from "next/image";
import * as motion from "motion/react-client";
import { PhotoFlip } from "@/components/ui/photo-flip";
import { ScrollDown } from "@/components/shared/scroll-down";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

import { LandingHeroData } from "@/lib/types";

const landingHeroData: LandingHeroData = {
  name: "Patricia G. Penisten",
  lifespan: "December 22nd, 1935 - June 5th, 2025",
  backgroundSrc: "/bg.avif",
};

export default function LandingHero() {
  return (
    <>
      <div className='absolute inset-0 z-10 min-h-screen w-full'>
        <Image
          src={landingHeroData.backgroundSrc}
          alt=''
          sizes='100vw'
          fill
          priority
          className='object-cover blur-sm brightness-[.3]'
        />
      </div>

      <motion.div
        variants={CONTAINER_FADE_SCALE_N_STAGGER}
        initial='hidden'
        animate='visible'
        className='grid min-h-screen w-full grid-rows-[1fr_10%]'
      >
        <div className='z-20 mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 pt-12 2xl:gap-6'>
          <motion.aside variants={ITEM_FADE}>
            <PhotoFlip className='mt-10 size-[85%] md:mt-5 lg:mt-0 lg:size-full' />
          </motion.aside>

          <motion.article
            variants={ITEM_FADE}
            className='xs:max-w-md flex w-fit max-w-xs flex-col items-center text-center sm:max-w-lg lg:max-w-none'
          >
            <h1 className='xs:text-[2.4rem] mb-2.5 font-serif text-[2.15rem] leading-none font-bold tracking-tight text-[#25c9f9] sm:text-[2.65rem] md:mb-1.5 md:text-[2.9rem] md:leading-[1.1] lg:text-[3.15rem] xl:text-[3.5rem] xl:leading-none xl:tracking-normal 2xl:mb-2 2xl:text-[3.75rem]'>
              {landingHeroData.name}
            </h1>
            <h2 className='xs:text-[1rem] mb-9 text-[0.9rem] leading-none tracking-tight text-white/95 sm:text-[1.05rem] md:mb-6 md:ml-0.5 md:text-[1.15rem] md:leading-snug lg:mb-8 lg:text-[1.25rem] xl:text-[1.35rem] xl:leading-tight xl:tracking-normal 2xl:text-[1.45rem]'>
              {landingHeroData.lifespan}
            </h2>
            <p className='xs:text-[1.65rem] max-w-sm text-[1.55rem] leading-snug tracking-tight text-white sm:text-[1.75rem] md:ml-0.5 md:text-[1.95rem] md:leading-tight lg:text-[2.15rem] lg:leading-[1.4] lg:tracking-normal xl:max-w-xl xl:text-[2.35rem] xl:leading-tight 2xl:text-[2.55rem]'>
              Beloved{" "}
              <span className='font-semibold text-amber-500'>Teacher</span>,{" "}
              <span className='font-semibold text-amber-500'>Mother</span>,{" "}
              <span className='font-semibold text-amber-500'>Grandmother</span>,
              & <span className='font-semibold text-amber-500'>Wife</span>.
            </p>
          </motion.article>
        </div>

        <motion.span
          variants={ITEM_FADE}
          className='z-20 mx-auto flex w-full items-center justify-center px-4'
        >
          <ScrollDown targetId='landing-about' />
        </motion.span>
      </motion.div>
    </>
  );
}
