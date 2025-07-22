import Image from "next/image";
import * as motion from "motion/react-client";
import ScrollDownButton from "@/components/landing/scroll-down";
import { CONTAINER_VARIANT_SCALE, ITEM_VARIANT } from "@/lib/motion";

export default function LandingHero() {
  return (
    <>
      <motion.div
        className='absolute inset-0 z-10 size-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src='/bg/bg-00.avif'
          alt='Patricia G Penisten Background'
          fill
          priority
          className='object-cover blur-sm brightness-[.4]'
        />
      </motion.div>
      <motion.div
        className='absolute inset-0 z-20 size-full bg-black/20 dark:bg-black/30'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.div
        className='5xl:max-w-7xl absolute inset-0 z-30 mx-auto flex size-full max-w-6xl flex-col items-center justify-center gap-4 px-4 pt-8 pb-48 md:pt-24 md:pb-36 lg:flex-row lg:pb-24'
        variants={CONTAINER_VARIANT_SCALE}
        initial='hidden'
        animate='visible'
      >
        <motion.aside
          variants={ITEM_VARIANT}
          className='flex w-fit items-center lg:items-end'
        >
          <figure className='5xl:size-116 4xl:size-108 size-48 overflow-hidden lg:size-72 xl:size-84 2xl:size-96'>
            <Image
              src='/icon/7.png'
              alt='Patricia G Penisten Icon'
              height={500}
              width={500}
              className='size-full object-cover'
            />
            <figcaption>
              <p className='sr-only'>Patricia G Penisten Icon</p>
            </figcaption>
          </figure>
        </motion.aside>
        <motion.header
          variants={ITEM_VARIANT}
          className='flex w-fit max-w-xs flex-col items-center text-center lg:max-w-none lg:items-start lg:text-start'
        >
          <h1 className='5xl:text-[4.8rem] 4xl:text-[4.6rem] mb-1 bg-gradient-to-bl from-yellow-50 via-red-300 to-rose-300 bg-clip-text font-serif text-[2.1rem] leading-tight font-bold text-transparent text-shadow-lg md:leading-none lg:text-[3.20rem] xl:text-[4.1rem] xl:tracking-[-0.015em] 2xl:text-[4.5rem]'>
            Patricia G. Penisten
          </h1>
          <h2 className='5xl:text-[1.80rem] 4xl:text-[1.65rem] mb-8 text-[0.9rem] leading-tight font-light text-white/90 md:mb-4 md:pl-0.5 md:leading-snug lg:text-[1.2rem] xl:pl-1 xl:text-[1.45rem] xl:tracking-[-0.015em] 2xl:mb-6 2xl:text-[1.55rem]'>
            December 22nd, 1935 - June 5th, 2025
          </h2>
          <h3 className='5xl:text-[2.85rem] 4xl:text-[2.65rem] max-w-sm text-2xl text-white text-shadow-lg md:pl-0.5 md:leading-tight lg:text-[1.95rem] xl:max-w-xl xl:pl-1 xl:text-[2.35rem] xl:tracking-[0.015em] 2xl:text-[2.55rem]'>
            Beloved{" "}
            <span className='font-semibold text-yellow-100'>Teacher</span>,{" "}
            <span className='font-semibold text-yellow-100'>Mother</span>,{" "}
            <span className='font-semibold text-yellow-100'>Grandmother</span>,
            & <span className='font-semibold text-yellow-100'>Wife</span>.
          </h3>
        </motion.header>
      </motion.div>

      <motion.div
        className='absolute bottom-30 z-30 flex w-full justify-center md:bottom-2.5 lg:bottom-20'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <ScrollDownButton />
      </motion.div>
    </>
  );
}
