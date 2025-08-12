import Image from "next/image";
import * as motion from "motion/react-client";
import { PhotoFlip } from "@/components/ui/photo-flip";
import { ScrollDown } from "@/components/shared/scroll-down";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";
import { landingHeroData } from "@/lib/data/landing";

export default function LandingHero() {
  return (
    <>
      <div className='absolute inset-0 z-10 min-h-screen w-full'>
        <Image
          src={landingHeroData.backgroundSrc}
          alt=''
          fill
          sizes='100vw'
          className='object-cover blur-sm brightness-[.4]'
          priority
        />
      </div>

      <motion.div
        variants={CONTAINER_FADE_SCALE_N_STAGGER}
        initial='hidden'
        animate='visible'
        className='relative grid min-h-screen w-full grid-rows-[1fr_30%] md:grid-rows-[1fr_15%] lg:grid-rows-[1fr_10%]'
      >
        <div className='z-20 mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 pt-12 md:flex-row md:gap-0 md:pt-0 lg:gap-4 2xl:gap-6'>
          <motion.aside variants={ITEM_FADE}>
            <PhotoFlip
              frontSrc={landingHeroData.frontSrc}
              backSrc={landingHeroData.backSrc}
              width={300}
              height={300}
              quality={100}
            />
          </motion.aside>

          <motion.article
            variants={ITEM_FADE}
            className='xs:max-w-md flex w-fit max-w-xs flex-col items-center text-center sm:max-w-lg md:items-start md:text-start lg:max-w-none 2xl:pb-2'
          >
            <h1 className='xs:text-[2.4rem] mb-2.5 font-serif text-[2.3rem] leading-none font-bold tracking-tight text-[#25c9f9] sm:text-[2.65rem] md:mb-1.5 md:text-[2.7rem] lg:text-[3.45rem] lg:leading-[1.1] xl:text-[3.9rem] xl:leading-none xl:tracking-normal 2xl:text-[4.3rem]'>
              {landingHeroData.name}
            </h1>
            <h2 className='xs:text-[1rem] mb-9 text-[0.95rem] leading-none tracking-tight text-white/95 sm:text-[1.1rem] md:mb-6 md:ml-0.5 md:text-[1.2rem] md:leading-snug lg:mb-8.5 lg:text-[1.5rem] xl:text-[1.6rem] xl:leading-tight xl:tracking-normal 2xl:mb-8.5 2xl:text-[1.8rem]'>
              {landingHeroData.lifespan}
            </h2>
            <p className='xs:text-[1.7rem] max-w-sm text-[1.6rem] leading-snug tracking-tight text-white sm:text-[1.75rem] md:ml-0.5 md:text-[2rem] md:leading-tight lg:text-[2.1rem] lg:leading-[1.4] lg:tracking-normal xl:max-w-xl xl:text-[2.5rem] xl:leading-snug 2xl:text-[3rem] 2xl:leading-tight'>
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
