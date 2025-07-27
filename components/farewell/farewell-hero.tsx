import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { farewellHeroData } from "@/lib/data";

export default function FarewellHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <header className='xs:px-6 mx-auto flex w-full max-w-md flex-col items-center px-8 text-center sm:max-w-xl sm:px-10 md:max-w-2xl md:px-12 lg:max-w-3xl lg:px-18 xl:max-w-5xl xl:px-36 2xl:max-w-6xl 2xl:px-40'>
        <span className='xs:text-xl 4xl:text-5xl mb-1 text-lg sm:text-[1.35rem] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.3rem]'>
          {farewellHeroData.pretitle}
        </span>
        <h1 className='text-foreground/90 xs:text-5xl 4xl:text-[7rem] mb-1 font-serif text-[2.7rem] leading-[1.1] font-bold text-shadow-lg/20 sm:text-[3.6rem] sm:leading-[1] md:mb-1.5 md:text-[4rem] lg:text-7xl xl:text-[5.5rem] 2xl:text-[5.7rem]'>
          {farewellHeroData.title}
        </h1>
        <div className='mb-8 flex flex-row items-center gap-2 xl:mb-10'>
          <Heart className='size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
          <h2 className='xl:text-4 xs:text-xl 4xl:text-5xl text-lg sm:text-[1.35rem] md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.3rem]'>
            {farewellHeroData.subtitle}
          </h2>
          <Heart className='size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
        </div>

        <p className='md:text-md xs:text-[0.8rem] 4xl:text-[1.25rem] mb-12 text-center text-xs font-bold tracking-tighter sm:text-sm lg:text-base xl:mb-14 xl:text-[1.05rem] 2xl:text-lg'>
          Song playing is{" "}
          <span className='text-primary px-[1px]'>
            {farewellHeroData.song}{" "}
          </span>{" "}
          by <span className='pl-[1px]'>{farewellHeroData.artist}</span>.
        </p>

        <p className='xs:text-base 4xl:text-[2.1rem] text-[0.9rem] leading-[1.5] font-[450] sm:text-[1.175rem] md:text-xl lg:text-[1.3rem] xl:text-2xl 2xl:text-[1.6rem] 2xl:leading-[1.25]'>
          {farewellHeroData.description}
        </p>
      </header>
    </motion.div>
  );
}
