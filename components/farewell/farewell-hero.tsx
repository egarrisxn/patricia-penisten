import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { ScrollDown } from "@/components/shared/scroll-down";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

import { FarewellHeroData } from "@/lib/types";

const farewellHeroData: FarewellHeroData = {
  pretitle: "The",
  title: "Farewell Tour",
  subtitle: "with Pat & Judi",
  song: `"How Do I Say Goodbye"`,
  artist: "Dean Lewis",
  description: `Join us on Patricia's heartfelt “Farewell Tour,” a final journey filled with love and remembrance. Her daughter, Judi, carried her ashes to visit cherished family members, honoring Pat's deep connections one last time. As you browse the photos, tap the speaker icon above to play a handpicked song and enrich the experience.`,
};

export default function FarewellHero() {
  return (
    <motion.div
      variants={CONTAINER_FADE_SCALE_N_STAGGER}
      initial='hidden'
      animate='visible'
      className='grid min-h-screen w-full grid-rows-[1fr_10%]'
    >
      <div className='xs:pt-6 mx-auto flex w-fit px-4 pt-12 sm:px-6 md:px-8 md:pt-0'>
        <motion.article
          variants={ITEM_FADE}
          className='mx-auto flex flex-col items-center justify-center gap-1 text-center'
        >
          <span className='xs:text-[1.1rem] text-[1rem] leading-none font-medium sm:text-[1.25rem] md:text-[1.35rem] lg:text-[1.4rem] 2xl:text-[1.65rem]'>
            {farewellHeroData.pretitle}
          </span>

          <h1 className='text-foreground/90 xs:text-[3.65rem] font-serif text-5xl leading-none font-extrabold text-shadow-lg/20 sm:text-[4.2rem] md:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.2rem] 2xl:text-[6rem]'>
            {farewellHeroData.title}
          </h1>

          <h2 className='mt-2 mb-8 flex items-center gap-2 xl:mb-10 2xl:mb-12'>
            <Heart className='text-primary fill-primary/50 size-3 lg:size-4' />
            <span className='xs:text-[1.25rem] text-lg leading-none font-medium sm:text-[1.35rem] md:text-[1.45rem] lg:text-[1.5rem] 2xl:text-[1.75rem]'>
              {farewellHeroData.subtitle}
            </span>
            <Heart className='text-primary fill-primary/50 size-3 lg:size-4' />
          </h2>

          <p className='text-foreground/95 xs:text-[1.15rem] xs:max-w-[32rem] mx-auto w-full px-4 text-[1.1rem] leading-[1.4] tracking-normal text-pretty sm:max-w-lg sm:px-2 sm:text-[1.2rem] sm:leading-[1.4] md:px-0 md:text-[1.25rem] lg:text-[1.3rem] xl:max-w-3xl xl:px-12 xl:text-[1.4rem] xl:leading-[1.3] 2xl:px-2 2xl:text-[1.4rem] 2xl:leading-[1.35]'>
            {farewellHeroData.description} The song{" "}
            <span className='text-primary px-[1px]'>
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
        variants={ITEM_FADE}
        className='z-20 mx-auto flex w-full items-center justify-center px-4'
      >
        <ScrollDown targetId='farewell-timeline' />
      </motion.span>
    </motion.div>
  );
}
