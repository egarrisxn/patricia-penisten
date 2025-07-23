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
      <header className='5xl:max-w-6xl 5xl:px-32 xs:px-5 mx-auto flex w-full max-w-md flex-col items-center px-4 text-center sm:max-w-xl sm:px-6 md:max-w-2xl md:px-8 lg:max-w-3xl lg:px-12 xl:max-w-4xl xl:px-24'>
        <span className='text-accent-foreground 5xl:text-[2.1rem] xs:text-[1.35rem] mb-1.5 text-[1.25rem] tracking-tight sm:text-[1.55rem] md:text-[1.75rem] lg:text-[1.85rem] xl:text-[2rem]'>
          {farewellHeroData.pre}
        </span>
        <h1 className='text-accent-foreground/90 text-shadow-accent-foreground/10 5xl:text-[5.7rem] xs:text-[3rem] mb-1.5 font-serif text-[2.75rem] leading-none font-bold text-shadow-lg sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-[5.5rem]'>
          {farewellHeroData.title}
        </h1>
        <div className='5xl:gap-3.5 5xl:mb-20 mb-12 flex flex-row items-center gap-2 md:gap-2.5 lg:mb-16 xl:gap-3'>
          <Heart className='5xl:size-7 size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
          <h2 className='text-accent-foreground 5xl:text-[2.05rem] xs:text-[1.30rem] text-[1.2rem] tracking-tight sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.95rem]'>
            {farewellHeroData.subtitle}
          </h2>
          <Heart className='5xl:size-7 size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
        </div>

        <p className='5xl:text-[1.5rem] xs:text-[1.1rem] text-[1rem] leading-relaxed text-black sm:text-[1.15rem] md:text-[1.2rem] lg:text-[1.25rem] xl:text-[1.35rem] dark:text-white'>
          {farewellHeroData.description}
        </p>
      </header>
    </motion.div>
  );
}
