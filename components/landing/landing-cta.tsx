import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingCTAData } from "@/lib/data/landing";

export default function LandingCTA() {
  return (
    <div className='mx-auto grid min-h-screen w-full place-items-center py-16 xl:py-24'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 xl:px-12'>
        <div className='mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-8 px-2 text-center xs:px-4 lg:flex-row lg:gap-4 2xl:max-w-none'>
          <motion.aside
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className='flex px-2 xs:px-4 md:px-4 lg:mx-auto'
          >
            <div className='relative'>
              <Image
                src='/landing/map.png'
                alt='Map'
                width={500}
                height={500}
                className='aspect-square size-96 rounded-lg border-2 border-accent-foreground bg-foreground object-cover shadow-lg 2xl:size-full'
              />
              <div className='absolute -right-4 -bottom-4 -rotate-4 transform rounded-lg border-2 border-accent-foreground bg-accent px-4 py-2 text-[0.9rem] leading-[1.4] font-semibold tracking-wide text-accent-foreground uppercase shadow-lg'>
                1935-2025
              </div>
            </div>
          </motion.aside>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='flex w-full flex-1 flex-col gap-4 px-2 xs:max-w-100 xs:px-4 md:max-w-md md:px-4 md:pb-8 lg:max-w-none lg:text-start 2xl:gap-5'
          >
            <h6 className='font-serif text-[1.65rem] leading-[1.2] font-black text-shadow-lg/10 xs:text-[1.95rem] sm:text-[2.5rem] md:text-[2.35rem] md:leading-[1.15] lg:text-[3.75rem] lg:leading-[1.05] xl:text-[4rem] 2xl:text-[4.55rem]'>
              {landingCTAData.title}
            </h6>

            <p className='mb-4 text-[0.925rem] leading-normal font-medium text-foreground/90 xs:text-base sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.25rem]'>
              {landingCTAData.body}
            </p>

            <Link href='/farewell'>
              <Button className='2xl:text[1.1rem] group h-9 cursor-pointer px-6 text-sm transition-all lg:h-10 lg:text-base xl:h-10.5 xl:text-[1.05rem] 2xl:h-11 2xl:text-[1.1rem]'>
                {landingCTAData.button}
                <ArrowRight className='size-4 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 xl:size-4.5 2xl:size-5' />
              </Button>
            </Link>
          </motion.article>
        </div>
      </div>
    </div>
  );
}
