import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import ScrollDown from "@/components/shared/scroll-down";
import { farewellHeroData } from "@/lib/data/farewell";

export default function FarewellHero() {
  return (
    <div className='flex min-h-screen flex-col justify-evenly px-4 md:justify-between [@media(min-width:600px)_and_(max-height:540px)]:pt-6'>
      <motion.article
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='mx-auto flex flex-col items-center justify-center gap-1 text-center md:flex-1'
      >
        <span className='mt-6 text-[1rem] leading-none font-medium xs:mt-4 xs:text-[1.1rem] sm:text-[1.25rem] md:mt-0 md:text-[1.35rem] lg:text-[1.4rem] 2xl:text-[1.65rem] [@media(min-width:600px)_and_(max-height:540px)]:mt-0 [@media(min-width:600px)_and_(max-height:540px)]:text-sm'>
          {farewellHeroData.pretitle}
        </span>
        <h1 className='font-serif text-[3rem] leading-none font-extrabold text-foreground text-shadow-lg/20 xs:text-[3.65rem] sm:text-[4.2rem] md:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.2rem] 2xl:text-[6.2rem] [@media(min-width:600px)_and_(max-height:540px)]:text-[2.5rem]'>
          {farewellHeroData.title}
        </h1>
        <h2 className='mt-1.5 mb-8 flex items-center gap-2 xl:mb-10 2xl:mb-12 [@media(min-width:600px)_and_(max-height:540px)]:mb-4'>
          <Heart className='size-3 fill-primary/50 text-primary lg:size-4 [@media(min-width:600px)_and_(max-height:540px)]:size-2.5' />
          <span className='text-[1.05rem] leading-none font-medium xs:text-[1.15rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.45rem] 2xl:text-[1.7rem] [@media(min-width:600px)_and_(max-height:540px)]:text-sm'>
            {farewellHeroData.subtitle}
          </span>
          <Heart className='size-3 fill-primary/50 text-primary lg:size-4 [@media(min-width:600px)_and_(max-height:540px)]:size-2.5' />
        </h2>
        <p className='mx-auto mt-4 w-full px-4 text-[1rem] leading-[1.5] tracking-normal text-pretty text-foreground xs:mt-2 xs:max-w-[32rem] xs:text-[1.2rem] sm:max-w-lg sm:px-2 sm:text-[1.35rem] sm:leading-[1.4] md:mt-0 md:px-0 md:text-[1.4rem] lg:text-[1.45rem] xl:max-w-3xl xl:px-12 xl:text-[1.5rem] xl:leading-[1.3] 2xl:px-2 2xl:text-[1.55rem] 2xl:leading-[1.35] [@media(min-width:600px)_and_(max-height:540px)]:text-[1.1rem]'>
          {farewellHeroData.body} The song{" "}
          <span className='px-[1px] text-primary'>{farewellHeroData.song}</span>{" "}
          by{" "}
          <span className='pl-[1px] text-black dark:text-white'>
            {farewellHeroData.artist}
          </span>{" "}
          was chosen to accompany this moment.
        </p>
      </motion.article>

      <div className='mx-auto md:pb-8'>
        <ScrollDown targetId='farewell-timeline' />
      </div>
    </div>
  );
}
