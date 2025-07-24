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
      <header className='mx-auto flex w-full max-w-md flex-col items-center px-4 text-center sm:max-w-xl sm:px-6 md:max-w-2xl md:px-8 lg:max-w-3xl lg:px-14 xl:max-w-5xl xl:px-32 2xl:max-w-6xl 2xl:px-28'>
        <span className='mb-1 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl'>
          {farewellHeroData.pre}
        </span>
        <h1 className='text-foreground/90 mb-1.5 font-serif text-4xl font-bold text-shadow-lg/20 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-8xl'>
          {farewellHeroData.title}
        </h1>
        <div className='mb-8 flex flex-row items-center gap-2'>
          <Heart className='size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
          <h2 className='xl:text-4 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            {farewellHeroData.subtitle}
          </h2>
          <Heart className='size-4 fill-rose-400 text-rose-400 md:size-5 xl:size-6' />
        </div>

        <p className='md:text-md mb-10 text-center text-xs font-medium tracking-tighter text-green-500 md:text-sm lg:text-base dark:text-green-300'>
          Song playing is
          <q className='pr-1 pl-0.5 italic'>How Do I Say Goodbye</q>by Dean
          Lewis.
        </p>

        <p className='text-base sm:text-lg md:text-xl lg:text-[1.3rem] xl:text-2xl 2xl:text-[1.75rem]'>
          {farewellHeroData.description}
        </p>
      </header>
    </motion.div>
  );
}
