import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

export const landingCTAData = {
  title: "Pat got out there for one final road trip!",
  subtitle: `They're calling it "The Farewell Tour".`,
  button: "Check It Out",
};

export default function LandingCTA() {
  return (
    <motion.div
      variants={CONTAINER_FADE_SCALE_N_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
      className='lg:bg-card mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-8 text-center md:gap-10 lg:flex-row lg:rounded-lg lg:shadow-lg xl:mb-12 xl:max-w-none xl:px-12 xl:py-16'
    >
      <motion.aside
        variants={ITEM_FADE}
        className='xs:px-4 flex px-2 md:px-4 lg:mx-auto'
      >
        <div className='relative'>
          <Image
            src='/landing/map.png'
            alt='Map'
            width={500}
            height={500}
            className='bg-foreground border-accent-foreground aspect-square rounded-lg border-2 object-cover shadow-lg'
          />
          <div className='bg-accent border-accent-foreground text-accent-foreground absolute -right-4 -bottom-4 -rotate-4 transform rounded-lg border-2 px-4 py-2 text-[0.9rem] leading-[1.4] font-semibold tracking-wide uppercase shadow-lg'>
            1935-2025
          </div>
        </div>
      </motion.aside>
      <motion.article
        variants={ITEM_FADE}
        className='xs:max-w-100 flex w-full flex-1 flex-col gap-4 md:max-w-md md:pb-8 lg:max-w-none lg:pb-4 lg:text-start xl:gap-6 2xl:pb-8'
      >
        <h6 className='xs:text-[1.95rem] px-4 font-serif text-[1.65rem] leading-[1.2] font-black text-shadow-lg/10 sm:px-0 sm:text-[2.5rem] md:text-[2.35rem] md:leading-[1.15] lg:text-[2.75rem] xl:text-[3.4rem] 2xl:text-[3.85rem]'>
          {landingCTAData.title}
        </h6>
        <p className='text-foreground/80 xs:text-base mb-4 px-4 text-[0.925rem] leading-normal font-medium sm:px-0 sm:text-[1.05rem] md:text-[1.2rem] lg:ml-0.5 lg:text-lg xl:text-[1.35rem] 2xl:mb-6 2xl:text-xl'>
          {landingCTAData.subtitle}
        </p>
        <Link href='/farewell'>
          <Button className='2xl:text[1.1rem] group h-9 cursor-pointer px-6 text-sm transition-all lg:h-10 lg:text-base xl:h-10.5 xl:text-[1.05rem]'>
            {landingCTAData.button}
            <ArrowRight className='size-4 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 xl:size-4.5' />
          </Button>
        </Link>
      </motion.article>
    </motion.div>
  );
}
