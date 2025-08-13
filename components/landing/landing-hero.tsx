import Image from "next/image";
import * as motion from "motion/react-client";
import { PhotoFlip } from "@/components/ui/photo-flip";
import ScrollDown from "@/components/shared/scroll-down";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

import { LandingHeroData } from "@/lib/types";

const landingHeroData: LandingHeroData = {
  src: "/bg.avif",
  title: "Patricia G. Penisten",
  body: "December 22nd, 1935 - June 5th, 2025",
};

export default function LandingHero() {
  return (
    <>
      <div className='absolute inset-0 z-10 min-h-screen w-full'>
        <Image
          src={landingHeroData.src}
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
        <div className='z-20 mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 lg:gap-4.5'>
          <motion.aside variants={ITEM_FADE}>
            <PhotoFlip className='mt-10 size-[85%] md:mt-5 lg:mt-0 lg:size-full' />
          </motion.aside>

          <motion.article
            variants={ITEM_FADE}
            className='xs:max-w-md flex w-fit max-w-xs flex-col items-center text-center sm:max-w-lg lg:max-w-none'
          >
            <h1 className='xs:text-[2.4rem] mb-2.5 font-serif text-[2.15rem] leading-none font-bold tracking-tight text-[#25c9f9] sm:text-[2.65rem] md:mb-1.5 md:text-[2.9rem] lg:mb-2.5 lg:text-[3.25rem]'>
              {landingHeroData.title}
            </h1>
            <h2 className='xs:text-[1rem] mb-6 text-[0.9rem] leading-none tracking-tight text-white/95 sm:text-[1.05rem] md:text-[1.15rem] lg:mb-8 lg:text-[1.25rem]'>
              {landingHeroData.body}
            </h2>
            <p className='xs:text-[1.65rem] max-w-sm text-[1.55rem] leading-tight tracking-normal text-white sm:text-[1.75rem] md:text-[1.95rem] lg:max-w-xl lg:text-[2.1rem]'>
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
