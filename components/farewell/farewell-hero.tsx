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
      <header className='mx-auto flex w-full flex-col items-center text-center'>
        <span className='text-accent-foreground 5xl:text-[2.1rem] xs:text-[1.3rem] mb-0.5 text-[1.25rem] tracking-tight sm:text-[1.55rem] md:text-[1.85rem] lg:mb-1 lg:text-[2.1rem] xl:text-[2.2rem]'>
          {farewellHeroData.pre}
        </span>
        <h1 className='text-accent-foreground/90 text-shadow-accent-foreground/10 5xl:text-[5.7rem] xs:text-[2.9rem] mb-1 font-serif text-[2.8rem] leading-none font-bold text-shadow-lg sm:text-[3.5rem] md:text-[4.75rem] lg:text-[5.5rem] xl:text-[5.75rem]'>
          {farewellHeroData.title}
        </h1>
        <div className='5xl:gap-3.5 5xl:mb-20 xs:mb-10 mb-9 flex flex-row items-center gap-2 sm:mb-12 md:mb-14 md:gap-2.5 lg:mb-16 xl:mb-18 xl:gap-3'>
          <Heart className='5xl:size-7 size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
          <h2 className='text-accent-foreground 5xl:text-[2.05rem] xs:text-[1.25rem] text-[1.2rem] tracking-tight sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.05rem] xl:text-[2.1rem]'>
            {farewellHeroData.subtitle}
          </h2>
          <Heart className='5xl:size-7 size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
        </div>

        <p className='5xl:text-[1.5rem] 5xl:max-w-6xl 5xl:px-32 xs:text-[1.1rem] xs:mb-4 xs:px-8 mb-6 w-full max-w-md px-7 text-[0.95rem] leading-normal text-black sm:mb-6 sm:max-w-xl sm:text-[1.2rem] sm:leading-[1.55] md:mb-8 md:max-w-2xl md:px-9 md:text-[1.5rem] lg:mb-9 lg:max-w-4xl lg:px-16 lg:text-[1.6rem] xl:mb-10 xl:max-w-5xl xl:px-11 xl:text-[1.75rem] xl:leading-relaxed dark:text-white'>
          {farewellHeroData.description}
        </p>

        <p className='xs:text-sm mx-auto text-center text-xs font-semibold sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem]'>
          Song playing is <q className='italic'>How Do I Say Goodbye</q>
          <br />
          by Dean Lewis.
        </p>
      </header>
    </motion.div>
  );
}
