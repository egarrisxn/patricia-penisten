import Link from "next/link";
import * as motion from "motion/react-client";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTAINER_VARIANT, ITEM_VARIANT } from "@/lib/motion";

export default function LandingCTA() {
  return (
    <motion.div
      variants={CONTAINER_VARIANT}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className='mx-auto max-w-5xl px-4 text-center lg:px-6 xl:px-16'>
        <motion.div
          variants={ITEM_VARIANT}
          className='mb-4 flex justify-center sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8'
        >
          <MapPin className='size-10 text-green-500 sm:size-11 md:size-12 lg:size-13 xl:size-14 dark:text-green-300' />
        </motion.div>

        <motion.h1
          variants={ITEM_VARIANT}
          className='text-accent-foreground/90 mb-4 font-serif text-3xl font-bold text-shadow-lg/20 sm:text-[2.5rem] md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl'
        >
          Patricia did get to head out for one final trip...
        </motion.h1>

        <motion.p
          variants={ITEM_VARIANT}
          className='text-accent-foreground/90 mb-6 text-sm italic sm:mb-7 sm:text-base md:mb-8 md:text-lg lg:mb-9 lg:text-xl xl:mb-10 xl:text-2xl'
        >
          Click the link below to see for yourself!
        </motion.p>

        <motion.div variants={ITEM_VARIANT}>
          <Link href='/farewell'>
            <Button
              size='lg'
              className='cursor-pointer bg-gradient-to-r from-purple-500/90 to-rose-500/90 text-white hover:from-purple-500 hover:to-rose-500 sm:h-11 sm:text-base md:h-12 md:text-lg lg:h-13 lg:text-xl xl:h-14 xl:text-2xl'
            >
              The Farewell Tour
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
