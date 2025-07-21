import Link from "next/link";
import * as motion from "motion/react-client";
import { type Easing } from "motion/react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1] as Easing,
    },
  },
};

export default function LandingCTA() {
  return (
    <motion.div
      className='mx-auto max-w-5xl text-center'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className='md:pt-8 md:pb-2'>
        <motion.div
          variants={itemVariants}
          className='mb-6 flex justify-center md:mb-8'
        >
          <MapPin className='size-12 text-green-400 md:size-14' />
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className='text-accent-foreground/90 text-shadow-accent-foreground/10 mb-4 font-serif text-4xl font-bold text-shadow-md md:px-10 md:text-6xl xl:text-[5rem]'
        >
          Patricia embarked on one final voyage...
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-accent-foreground/90 mb-8 tracking-tight italic md:mb-10 md:text-xl xl:mb-16 xl:text-2xl'
        >
          Click below to see her last great adventure.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href='/timeline'>
            <Button
              size='lg'
              className='bg-rose-400/90 font-medium text-white hover:bg-rose-400 md:h-11 md:text-xl xl:h-13 xl:text-2xl dark:bg-rose-400/90 dark:hover:bg-rose-400'
            >
              The Road Trip
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
