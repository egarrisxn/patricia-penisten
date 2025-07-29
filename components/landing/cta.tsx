import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight, MapPin } from "lucide-react";
import { CONTAINER_VARIANT, ITEM_VARIANT } from "@/lib/motion";

export default function CTA() {
  return (
    <div className='4xl:pt-44 from-accent/80 to-accent/70 border-foreground/10 mx-auto rounded-t-md border-x-2 border-t-2 bg-gradient-to-br px-4 py-32 sm:px-6 lg:px-8 xl:py-40'>
      <motion.div
        variants={CONTAINER_VARIANT}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className='4xl:mb-16 mx-auto mb-8 max-w-4xl text-center xl:mb-12'>
          <motion.div
            variants={ITEM_VARIANT}
            className='mb-7 flex justify-center md:mb-8'
          >
            <MapPin className='text-accent-foreground dark:fill-accent-foreground/40 fill-accent-foreground/20 size-8 md:size-10' />
          </motion.div>
          <motion.span
            variants={ITEM_VARIANT}
            className='text-foreground px-8 text-sm font-medium italic md:text-lg'
          >
            Before moving onto bigger things..
          </motion.span>
          <motion.h6
            variants={ITEM_VARIANT}
            className='text-foreground xs:text-[2.4rem] mx-4 mt-3 mb-9 font-serif text-[2.3rem] leading-[1.15] font-black text-shadow-lg/20 sm:text-[2.5rem] md:mb-11 md:text-5xl lg:mx-0 lg:text-[3.7rem] lg:leading-[1.1] xl:text-[5.3rem]'
          >
            Pat went out for one final road trip.
          </motion.h6>

          <Link href='/farewell'>
            <motion.button
              className="group focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive xl:text-2xl' inline-flex h-10 shrink-0 transform cursor-pointer items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-500/90 to-rose-500/90 px-6 text-sm font-medium whitespace-nowrap text-white transition-all outline-none hover:from-purple-500 hover:to-rose-500 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-4 sm:h-11 sm:text-base md:h-12 md:text-lg lg:h-13 lg:text-xl xl:h-14 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              variants={ITEM_VARIANT}
            >
              <span>The Farewell Tour</span>{" "}
              <ArrowRight className='size-5 group-hover:translate-x-[1.5px]' />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
