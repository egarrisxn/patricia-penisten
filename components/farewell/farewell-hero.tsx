import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { ScrollDown } from "@/components/shared/scroll-down";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";
import { farewellHeroData } from "@/lib/data/farewell";

export default function FarewellHero() {
  return (
    <motion.div
      variants={CONTAINER_FADE_SCALE_N_STAGGER}
      initial='hidden'
      animate='visible'
      className='grid w-full px-4 pt-24 sm:px-6 md:px-8 xl:pt-32'
    >
      <motion.article
        variants={ITEM_FADE}
        className='mx-auto flex w-full flex-col items-center justify-center gap-1 pb-12 text-center'
      >
        <div className='xs:text-xl text-lg leading-none font-medium sm:text-[1.35rem] md:text-xl lg:text-2xl'>
          {farewellHeroData.pretitle}
        </div>

        <h1 className='text-foreground/90 xs:text-[3.1rem] font-serif text-5xl leading-none font-extrabold text-shadow-lg/20 sm:text-[3.6rem] md:text-[3.1rem] lg:text-[4.9rem] xl:text-[5.35rem]'>
          {farewellHeroData.title}
        </h1>

        <div className='mt-2 mb-8 flex items-center gap-2'>
          <Heart className='size-3 fill-rose-400 text-rose-400 lg:size-4' />
          <h2 className='xs:text-xl text-lg leading-none font-medium sm:text-[1.35rem] md:text-xl lg:text-2xl'>
            {farewellHeroData.subtitle}
          </h2>
          <Heart className='size-3 fill-rose-400 text-rose-400 lg:size-4' />
        </div>

        <p className='text-foreground/95 xs:text-lg xs:max-w-[32rem] mx-auto w-full text-[1.15rem] leading-normal text-pretty sm:max-w-lg sm:text-[1.2rem] md:text-[1.1rem] md:leading-[1.2] lg:text-xl xl:max-w-4xl xl:px-24 xl:text-[1.3rem] xl:leading-[1.3]'>
          {farewellHeroData.description} The song{" "}
          <span className='text-primary px-[1px]'>{farewellHeroData.song}</span>{" "}
          by{" "}
          <span className='pl-[1px] text-black dark:text-white'>
            {farewellHeroData.artist}
          </span>{" "}
          was chosen to accompany this moment.
        </p>
      </motion.article>

      <motion.span
        variants={ITEM_FADE}
        className='mx-auto flex w-full items-center justify-center'
      >
        <ScrollDown targetId='farewell-timeline' />
      </motion.span>
    </motion.div>
  );
}
