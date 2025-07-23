import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { farewellHero } from "@/lib/data";

export default function FarewellHero() {
  return (
    <section className='relative z-10 pt-32 pb-16 sm:pb-20 md:pb-24 lg:pt-36 lg:pb-28 xl:pt-44 xl:pb-32'>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "none" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className='mx-auto flex w-full max-w-md flex-col gap-14 px-4 text-center sm:max-w-xl sm:px-6 md:gap-16 lg:max-w-2xl lg:px-8 xl:max-w-4xl xl:gap-20 xl:px-24'
      >
        <header className='flex flex-col items-center'>
          <span className='text-accent-foreground mb-1 text-[1.25rem] tracking-tight sm:text-[1.5rem] md:text-[1.65rem] lg:text-[1.8rem] xl:text-[2rem]'>
            The
          </span>

          <h1 className='text-accent-foreground/90 text-shadow-accent-foreground/10 mb-2 font-serif text-[2.75rem] leading-none font-bold text-shadow-lg sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-[5.5rem]'>
            {farewellHero.title}
          </h1>

          <div className='mt-2 mb-6 flex flex-row items-center gap-2 lg:mb-8'>
            <Heart className='size-4 fill-rose-400 text-rose-400 md:size-5 lg:size-6 xl:size-7' />
            <h2 className='text-accent-foreground text-[1.25rem] tracking-tight sm:text-[1.45rem] md:text-[1.6rem] lg:text-[1.75rem] xl:text-[2rem]'>
              {farewellHero.subtitle}
            </h2>
            <Heart className='size-4 fill-rose-400 text-rose-400 md:size-5 lg:size-6 xl:size-7' />
          </div>

          <p className='text-accent-foreground/90 mx-auto max-w-xl text-[0.9rem] leading-relaxed italic sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.25rem]'>
            <q>{farewellHero.quote}</q>
          </p>
        </header>

        <article>
          <p className='mx-auto max-w-2xl text-[1rem] leading-relaxed text-black sm:text-[1.1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.35rem] dark:text-white'>
            {farewellHero.about}
          </p>
        </article>

        <div className='bg-muted/40 mx-auto mt-10 h-px w-24 md:mt-16 lg:mt-20'></div>
      </motion.div>
    </section>
  );
}
