import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import ScrollDown from "@/components/shared/scroll-down";
import { farewellHeroData } from "@/lib/data/farewell";

export default function FarewellHero() {
  return (
    <div className='grid min-h-screen w-full grid-rows-[1fr_10%]'>
      <div className='mx-auto flex w-fit px-4'>
        <motion.article
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mx-auto flex flex-col items-center justify-center gap-1 text-center'
        >
          <span className='text-[1rem] leading-none font-medium xs:text-[1.1rem] sm:text-[1.25rem] md:text-[1.35rem] lg:text-[1.4rem] 2xl:text-[1.65rem]'>
            {farewellHeroData.pretitle}
          </span>

          <h1 className='font-serif text-[2.9rem] leading-none font-extrabold text-foreground/90 text-shadow-lg/20 xs:text-[3.65rem] sm:text-[4.2rem] md:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.2rem] 2xl:text-[6rem]'>
            {farewellHeroData.title}
          </h1>

          <h2 className='mt-2 mb-8 flex items-center gap-2 xl:mb-10 2xl:mb-12'>
            <Heart className='size-3 fill-primary/50 text-primary lg:size-4' />
            <span className='text-[1.1rem] leading-none font-medium xs:text-[1.2rem] sm:text-[1.35rem] md:text-[1.45rem] lg:text-[1.5rem] 2xl:text-[1.75rem]'>
              {farewellHeroData.subtitle}
            </span>
            <Heart className='size-3 fill-primary/50 text-primary lg:size-4' />
          </h2>

          <p className='mx-auto w-full px-4 text-[1.1rem] leading-[1.4] tracking-normal text-pretty text-foreground/95 xs:max-w-[32rem] xs:text-[1.2rem] sm:max-w-lg sm:px-2 sm:text-[1.35rem] sm:leading-[1.4] md:px-0 md:text-[1.4rem] lg:text-[1.45rem] xl:max-w-3xl xl:px-12 xl:text-[1.5rem] xl:leading-[1.3] 2xl:px-2 2xl:text-[1.55rem] 2xl:leading-[1.35]'>
            {farewellHeroData.body} The song{" "}
            <span className='px-[1px] text-primary'>
              {farewellHeroData.song}
            </span>{" "}
            by{" "}
            <span className='pl-[1px] text-black dark:text-white'>
              {farewellHeroData.artist}
            </span>{" "}
            was chosen to accompany this moment.
          </p>
        </motion.article>
      </div>

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className='z-20 mx-auto flex w-full items-center justify-center px-4'
      >
        <ScrollDown targetId='farewell-timeline' />
      </motion.span>
    </div>
  );
}
