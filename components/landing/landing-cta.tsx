import Link from "next/link";
import * as motion from "motion/react-client";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTAINER_VARIANT, ITEM_VARIANT } from "@/lib/motion";

export default function LandingCTA() {
  return (
    <motion.div
      className='mx-auto max-w-5xl text-center'
      variants={CONTAINER_VARIANT}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className='md:pt-8 md:pb-2'>
        <motion.div
          variants={ITEM_VARIANT}
          className='mb-4 flex justify-center md:mb-6 xl:mb-8'
        >
          <MapPin className='size-10 text-green-400 md:size-12 xl:size-14' />
        </motion.div>

        <motion.h1
          variants={ITEM_VARIANT}
          className='text-accent-foreground/90 text-shadow-accent-foreground/10 mb-4 px-4 font-serif text-[2rem] leading-tight font-bold tracking-[-0.015em] text-shadow-lg sm:text-[2.2rem] md:px-8 md:text-[3.3rem] md:leading-[1.15] lg:px-12 lg:text-[3.5rem] xl:px-20 xl:text-[4.5rem] xl:leading-none'
        >
          Patricia did get to head out for one final trip...
        </motion.h1>

        <motion.p
          variants={ITEM_VARIANT}
          className='text-accent-foreground/90 mb-6 text-base leading-tight italic sm:text-[1.1rem] md:mb-8 md:text-[1.2rem] md:leading-[1.15] lg:text-[1.3rem] xl:mb-10 xl:text-[1.4rem]'
        >
          Click the link below to see for yourself!
        </motion.p>

        <motion.div variants={ITEM_VARIANT}>
          <Link href='/farewell'>
            <Button
              size='lg'
              className='cursor-pointer bg-gradient-to-r from-purple-500/90 to-rose-500/90 text-base text-white hover:from-purple-500 hover:to-rose-500 md:h-10.5 md:text-lg lg:h-11 lg:text-xl xl:h-11.5 xl:text-2xl'
            >
              Farewell Tour
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
