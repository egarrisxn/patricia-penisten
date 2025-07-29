import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight, MapPin } from "lucide-react";
import { CONTAINER_VARIANT, ITEM_VARIANT } from "@/lib/motion";

export default function CTA() {
  return (
    <div className='4xl:pt-44 from-muted/70 via-muted/40 to-muted/10 mx-auto rounded-t-lg border-x-2 border-t-2 bg-gradient-to-b px-4 py-36 sm:px-6 lg:px-8'>
      <motion.div
        variants={CONTAINER_VARIANT}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className='mx-auto max-w-screen-md text-center'>
          <motion.div
            variants={ITEM_VARIANT}
            className='mb-8 flex justify-center'
          >
            <MapPin className='text-accent-foreground dark:fill-accent-foreground/40 fill-accent-foreground/20 size-10 md:size-12' />
          </motion.div>
          <motion.h6
            variants={ITEM_VARIANT}
            className='text-foreground mx-4 mb-6 font-serif text-3xl font-black text-shadow-lg/10 sm:text-[2.5rem] md:text-5xl md:leading-tight lg:mx-0 lg:text-[3.7rem] xl:text-7xl xl:leading-[1.15]'
          >
            She did get the chance to go out for one final road trip..
          </motion.h6>

          <motion.p
            variants={ITEM_VARIANT}
            className='text-foreground/90 mb-10 w-full max-w-3xl px-8 text-sm italic md:text-xl'
          >
            Go ahead and see for yourself!
          </motion.p>
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
