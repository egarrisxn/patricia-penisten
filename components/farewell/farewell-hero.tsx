import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { timelineHeroData } from "@/lib/data";

export default function FarewellHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className='mx-auto max-w-3xl text-center'
    >
      <header className='pb-4 lg:py-8'>
        <div className='xs:mb-6 mb-4 flex justify-center xl:mb-6'>
          <Heart className='xs:size-10 size-8 fill-rose-400 text-rose-400 xl:size-12' />
        </div>

        <h1 className='text-accent-foreground/90 text-shadow-accent-foreground/10 xs:mb-2 xs:leading-none xs:text-[2.5rem] mb-0.5 font-serif text-4xl font-bold text-shadow-lg lg:text-[4rem] xl:text-[5.25rem]'>
          {timelineHeroData.title}
        </h1>
        <h2 className='text-accent-foreground xs:text-xl xs:font-light xs:leading-none xs:tracking-tight xs:mb-8 mb-6 text-lg lg:mb-8 lg:text-3xl xl:text-4xl'>
          {timelineHeroData.subtitle}
        </h2>

        <p className='text-accent-foreground/90 xs:text-base mx-auto max-w-sm px-4 text-sm tracking-tight italic lg:max-w-lg lg:text-lg'>
          <q>{timelineHeroData.quote}</q>
        </p>
      </header>
    </motion.div>
  );
}
