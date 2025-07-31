import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { ScrollDownFarewell } from "@/components/shared/scroll-down";
import { farewellHeroData } from "@/lib/data";

export default function FarewellHer0() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className='xs:px-6 absolute inset-0 z-30 mx-auto flex min-h-screen w-full flex-col items-center justify-center px-8 pb-24 text-center sm:max-w-xl sm:px-10 md:max-w-2xl md:px-12 md:pb-0 lg:max-w-3xl lg:px-18 xl:max-w-5xl xl:px-36 2xl:max-w-6xl 2xl:px-40 2xl:pt-8'
    >
      <span className='xs:text-xl xs:mb-1 mb-0 text-lg sm:text-[1.35rem] md:mb-0 md:text-xl md:leading-none lg:mb-1 lg:text-3xl lg:leading-tight xl:text-[1.9rem] 2xl:text-[1.9rem] 2xl:leading-[1.05]'>
        {farewellHeroData.pretitle}
      </span>

      <h1 className='text-foreground/90 xs:text-[3.1rem] xs:mb-1 mb-0 font-serif text-5xl leading-[1.1] font-bold text-shadow-lg/20 sm:text-[3.6rem] sm:leading-none md:text-[3.1rem] lg:mb-3 lg:text-[4.9rem] xl:text-[5.95rem] 2xl:text-[6.55rem]'>
        {farewellHeroData.title}
      </h1>

      <div className='xs:mb-10 mb-8 flex items-center gap-2 md:mb-6 lg:mb-10 xl:mb-12'>
        <Heart className='xs:size-4 size-3 fill-rose-400 text-rose-400 md:size-4 lg:size-5' />
        <h2 className='xs:text-xl xl:[1.9rem] text-lg sm:text-[1.35rem] md:text-xl lg:text-3xl 2xl:text-[1.9rem] 2xl:leading-[1.05]'>
          {farewellHeroData.subtitle}
        </h2>
        <Heart className='xs:size-4 size-3 fill-rose-400 text-rose-400 md:size-4 lg:size-5' />
      </div>

      <p className='text-foreground/95 xs:text-lg text-[1.12rem] leading-normal tracking-wide sm:text-[1.2rem] md:text-[1.12rem] md:leading-[1.2] lg:text-xl lg:leading-snug xl:text-2xl 2xl:text-[1.9rem] 2xl:leading-[1.25]'>
        {farewellHeroData.description} The song{" "}
        <span className='text-primary px-[1px]'>{farewellHeroData.song}</span>{" "}
        by{" "}
        <span className='pl-[1px] text-black dark:text-white'>
          {farewellHeroData.artist}
        </span>{" "}
        was chosen to accompany this moment.
      </p>

      <div className='mt-12 flex justify-center md:mt-2 lg:mt-20'>
        <ScrollDownFarewell />
      </div>
    </motion.header>
  );
}
