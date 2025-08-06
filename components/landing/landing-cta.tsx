import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

export default function LandingCTA() {
  return (
    <motion.div
      variants={CONTAINER_FADE_SCALE_N_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
      className='4xl:mb-16 mx-auto mb-8 flex flex-col items-center justify-center gap-8.5 text-center md:flex-row md:gap-10 xl:mb-12'
    >
      <motion.aside
        variants={ITEM_FADE}
        className='4xl:max-w-125 flex w-full max-w-80 px-4 md:px-0 lg:max-w-96 lg:min-w-80 2xl:max-w-110 2xl:min-w-96'
      >
        <div className='relative'>
          <Image
            src='/landing/map.png'
            alt='Map'
            width={500}
            height={500}
            className='bg-foreground border-accent-foreground aspect-square rounded-lg border-4 object-cover shadow-lg'
          />
          <div className='bg-accent border-accent-foreground text-accent-foreground absolute -right-4 -bottom-4 -rotate-4 transform rounded-lg border-3 px-4 py-2 text-[0.9rem] leading-[1.4] font-semibold tracking-wide uppercase shadow-lg'>
            1935-2025
          </div>
        </div>
      </motion.aside>
      <motion.article
        variants={ITEM_FADE}
        className='flex w-full max-w-100 flex-1 flex-col gap-3.5 px-6 md:max-w-xl md:px-0 md:pb-8 md:text-start lg:max-w-4xl lg:pb-4 2xl:max-w-none 2xl:pb-8'
      >
        <h6 className='px-2 font-serif text-[1.95rem] leading-[1.2] font-black text-shadow-lg/10 sm:px-0 sm:text-[2.5rem] md:text-4xl lg:text-[2.75rem] xl:text-[2.8rem] 2xl:text-[3.85rem]'>
          Pat got the chance to go on one final road trip..
        </h6>
        <p className='text-foreground/90 mb-4 text-sm md:mb-6 md:ml-0.5 md:text-base lg:mb-3.5 lg:text-lg xl:text-[1.1rem] 2xl:mb-6 2xl:text-xl'>
          Go take a look for yourself!
        </p>
        <Link href='/farewell'>
          <Button className='2xl:text[1.1rem] group h-9 cursor-pointer px-6 text-sm transition-all lg:h-10 lg:text-base 2xl:h-11'>
            The Farewell Tour{" "}
            <ArrowRight className='size-4 transition-all duration-200 ease-in-out group-hover:translate-x-0.5' />
          </Button>
        </Link>
      </motion.article>
    </motion.div>
  );
}
