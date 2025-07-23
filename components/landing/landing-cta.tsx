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
          className='mb-6 flex justify-center md:mb-8'
        >
          <MapPin className='size-12 text-green-400 md:size-14' />
        </motion.div>

        <motion.h1
          variants={ITEM_VARIANT}
          className='text-accent-foreground/90 text-shadow-accent-foreground/10 mb-4 font-serif text-4xl font-bold text-shadow-lg md:px-10 md:text-6xl xl:text-[5rem]'
        >
          Patricia did embark on one final voyage...
        </motion.h1>

        <motion.p
          variants={ITEM_VARIANT}
          className='text-accent-foreground/90 mb-8 tracking-tight italic md:mb-10 md:text-xl xl:mb-12 xl:text-2xl'
        >
          Click below to see for yourself
        </motion.p>

        <motion.div variants={ITEM_VARIANT}>
          <Link href='/farewell'>
            <Button
              size='lg'
              className='cursor-pointer bg-rose-400/90 font-medium text-white hover:bg-rose-400 md:h-11 md:text-xl xl:h-13 xl:text-2xl dark:bg-rose-400/90 dark:hover:bg-rose-400'
            >
              Farewell Tour
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
