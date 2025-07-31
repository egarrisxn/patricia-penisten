import Image from "next/image";
import * as motion from "motion/react-client";
import { PhotoFlip } from "@/components/ui/photo-flip";
import { ScrollDownHero } from "@/components/shared/scroll-down";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

export default function LandingHero() {
  return (
    <>
      <motion.div
        className='absolute inset-0 z-10 min-h-screen w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src='/bg/2.avif'
          alt='Beuatiful flower background'
          fill
          priority
          className='object-cover blur-sm brightness-[.4]'
        />
      </motion.div>

      <motion.div
        className='5xl:max-w-7xl xs:px-4 xs:pt-8 absolute inset-0 z-30 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-4 px-2 pb-48 md:flex-row md:pb-24 lg:pb-16'
        variants={CONTAINER_FADE_SCALE_N_STAGGER}
        initial='hidden'
        animate='visible'
      >
        <motion.aside
          variants={ITEM_FADE}
          className='flex w-fit items-center md:items-end'
        >
          <PhotoFlip
            frontSrc='/landing/flip-1.png'
            backSrc='/landing/flip-2.png'
            width={300}
            height={300}
            quality={100}
          />
        </motion.aside>
        <motion.header
          variants={ITEM_FADE}
          className='xs:max-w-md flex w-fit max-w-xs flex-col items-center text-center sm:max-w-lg md:items-start md:text-start lg:max-w-none'
        >
          <h1 className='5xl:text-[4.8rem] 4xl:text-[4.6rem] xs:text-[2.4rem] mb-2.5 font-serif text-[2.3rem] leading-none font-bold tracking-tight text-[#25c9f9] text-shadow-lg/20 sm:text-[2.65rem] md:mb-1.5 md:text-[2.6rem] lg:text-[3.45rem] lg:leading-[1.1] xl:text-[3.9rem] xl:leading-none xl:tracking-normal 2xl:text-[4.45rem]'>
            Patricia G. Penisten
          </h1>
          <h2 className='5xl:text-[1.85rem] 4xl:text-[1.65rem] xs:text-[0.95rem] mb-10 text-[0.9rem] leading-none tracking-tight text-white/95 sm:text-[1.1rem] md:mb-6 md:ml-0.5 md:text-[1.2rem] md:leading-snug lg:mb-8.5 lg:text-[1.5rem] xl:text-[1.6rem] xl:leading-tight xl:tracking-normal 2xl:mb-8.5 2xl:text-[1.8rem]'>
            December 22nd, 1935 - June 5th, 2025
          </h2>
          <h3 className='5xl:text-[3rem] 4xl:text-[2.65rem] max-w-sm text-2xl leading-snug tracking-tight text-white sm:text-[1.7rem] md:ml-0.5 md:text-[1.8rem] lg:text-[2.1rem] lg:leading-[1.4] lg:tracking-normal xl:max-w-xl xl:text-[2.5rem] xl:leading-snug 2xl:text-[2.95rem] 2xl:leading-tight'>
            Beloved{" "}
            <span className='font-semibold text-amber-500 text-shadow-lg/20'>
              Teacher
            </span>
            ,{" "}
            <span className='font-semibold text-amber-500 text-shadow-lg/20'>
              Mother
            </span>
            ,{" "}
            <span className='font-semibold text-amber-500 text-shadow-lg/20'>
              Grandmother
            </span>
            , &{" "}
            <span className='font-semibold text-amber-500 text-shadow-lg/20'>
              Wife
            </span>
            .
          </h3>
        </motion.header>
        <motion.span
          variants={ITEM_FADE}
          className='absolute bottom-30 z-30 flex w-full justify-center md:bottom-3 lg:bottom-7.5'
        >
          <ScrollDownHero />
        </motion.span>
      </motion.div>
    </>
  );
}
