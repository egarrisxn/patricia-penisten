import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { ScrollDown } from "@/components/shared/scroll-down";
import { farewellHeroData } from "@/lib/data/farewell";

export default function FarewellHer0() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className='xs:px-4 xs:pt-8 x:pb-24 absolute inset-0 z-30 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-2 pb-48 text-center sm:max-w-xl md:max-w-2xl md:pb-24 lg:max-w-3xl lg:pb-16 xl:max-w-5xl 2xl:max-w-6xl'
    >
      <div className='xs:text-xl xs:mb-1 mb-0 text-lg sm:text-[1.35rem] md:mb-0 md:text-xl md:leading-none lg:text-3xl lg:leading-tight xl:text-[1.88rem] xl:leading-none 2xl:mb-1 2xl:text-[1.7rem] 2xl:leading-[1.05]'>
        {farewellHeroData.pretitle}
      </div>

      <h1 className='text-foreground/90 xs:text-[3.1rem] xs:mb-1 mb-0 font-serif text-5xl leading-[1.1] font-bold text-shadow-lg/20 sm:text-[3.6rem] sm:leading-none md:text-[3.1rem] lg:text-[4.9rem] xl:text-[5.35rem] 2xl:mb-3 2xl:text-[6.15rem]'>
        {farewellHeroData.title}
      </h1>

      <div className='xs:mb-10 mb-8 flex items-center gap-2 md:mb-6 lg:mb-10'>
        <Heart className='xs:size-4 size-3 fill-rose-400 text-rose-400 md:size-4 lg:size-5' />
        <h2 className='xs:text-xl ms:leading-none text-lg sm:text-[1.35rem] md:text-xl lg:text-3xl xl:text-[1.88rem] 2xl:text-[1.7rem] 2xl:leading-[1.05]'>
          {farewellHeroData.subtitle}
        </h2>
        <Heart className='xs:size-4 size-3 fill-rose-400 text-rose-400 md:size-4 lg:size-5' />
      </div>

      <p className='text-foreground/95 xs:text-lg mx-auto w-full text-[1.15rem] leading-normal text-pretty sm:text-[1.2rem] md:text-[1.15rem] md:leading-[1.2] lg:text-xl xl:max-w-4xl xl:px-24 xl:pb-8 xl:text-[1.3rem] xl:leading-[1.3] 2xl:px-12 2xl:text-[1.5rem]'>
        {farewellHeroData.description} The song{" "}
        <span className='text-primary px-[1px]'>{farewellHeroData.song}</span>{" "}
        by{" "}
        <span className='pl-[1px] text-black dark:text-white'>
          {farewellHeroData.artist}
        </span>{" "}
        was chosen to accompany this moment.
      </p>

      <div className='absolute bottom-30 z-30 flex w-full justify-center md:bottom-3 lg:bottom-7.5'>
        <ScrollDown targetId='farewell-timeline' />
      </div>
    </motion.header>
  );
}
