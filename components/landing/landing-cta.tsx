import Link from "next/link";
import Image from "next/image";
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
    >
      <div className='4xl:mb-16 mx-auto mb-8 flex flex-col items-center justify-center gap-8 text-center md:flex-row md:gap-10 xl:mb-12'>
        <motion.aside variants={ITEM_FADE}>
          <div className='4xl:max-w-125 flex w-full max-w-80 px-4 md:px-0 lg:max-w-110 lg:min-w-96'>
            <div className='relative'>
              <Image
                src='/landing/map-1.png'
                alt='placeholder'
                width={500}
                height={500}
                className='bg-foreground border-accent-foreground aspect-square rounded-lg border-2 object-cover shadow-lg dark:border-4'
              />
              <div className='bg-accent border-accent-foreground text-accent-foreground absolute -right-4 -bottom-4 -rotate-4 transform rounded-lg border-2 px-4 py-2 text-[0.9rem] leading-[1.4] font-semibold tracking-wide uppercase shadow-lg'>
                1935-2025
              </div>
            </div>
          </div>
        </motion.aside>

        <motion.article variants={ITEM_FADE}>
          <div className='flex w-full max-w-100 flex-1 flex-col gap-4 px-6 md:max-w-xl md:px-0 md:pb-8 md:text-start 2xl:max-w-none'>
            <h6 className='px-2 font-serif text-[1.95rem] leading-[1.2] font-black text-shadow-lg/10 sm:px-0 sm:text-[2.5rem] md:text-4xl lg:text-5xl xl:text-6xl'>
              She did get the chance to go out for one final road trip..
            </h6>
            <p className='text-foreground/90 mb-4 text-sm italic md:mb-8 md:ml-0.5 md:text-base lg:text-lg xl:text-xl'>
              Go ahead and see for yourself!
            </p>
            <Link href='/farewell'>
              <Button className='h-10 cursor-pointer bg-gradient-to-r from-purple-500/90 to-rose-500/90 px-6 text-sm text-white transition-all hover:from-purple-500 hover:to-rose-500 sm:h-11 sm:text-base md:h-12 md:text-lg lg:h-13 lg:text-xl xl:h-14'>
                The Farewell Tour
              </Button>
            </Link>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
