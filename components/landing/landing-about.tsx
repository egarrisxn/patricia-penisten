import Image from "next/image";
import * as motion from "motion/react-client";
import { Heart } from "lucide-react";
import { ITEM_FADE } from "@/lib/motion";
import { landingAboutCard } from "@/lib/data/landing";

export default function LandingAboutCard() {
  return (
    <motion.article
      variants={ITEM_FADE}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      className='py-8'
    >
      <div className='bg-accent mx-auto grid grid-cols-1 items-center gap-4 rounded-xl border-2 px-4 md:grid-cols-2 lg:items-start lg:gap-8 xl:grid-cols-5 xl:gap-5 xl:px-6 xl:py-5'>
        <div className='relative p-1 md:order-2 lg:ml-auto xl:col-span-2'>
          <div className='text-accent-foreground absolute -top-4 -left-5 transform'>
            <Heart
              strokeWidth={1}
              className='text-accent-foreground size-14 fill-pink-700'
            />
          </div>
          <Image
            src='/landing/glasses.png'
            alt='Patricia in fun pink glasses'
            height={640}
            width={480}
            className='bg-foreground border-accent-foreground obejct-cover rounded-lg border-4 shadow-lg'
          />
          <div className='text-accent-foreground absolute -right-5 -bottom-4 transform'>
            <Heart
              strokeWidth={1}
              className='text-accent-foreground size-14 fill-pink-700'
            />
          </div>
        </div>
        <div className='mx-auto grid space-y-4 p-1 md:order-1 lg:mt-12 lg:space-y-6 xl:col-span-3'>
          <h3 className='mb-4 px-4 text-xl font-bold md:text-[1.35rem] md:tracking-[-0.015em] lg:mb-5 lg:pl-1 lg:text-[1.65rem] lg:leading-normal xl:mb-6 xl:pr-8 xl:text-[2.15rem] xl:leading-[1.3] 2xl:pr-12 2xl:text-[2.7rem]'>
            {landingAboutCard.title}
          </h3>

          <div className='space-y-4 px-4 text-lg md:text-[1.1rem] md:leading-[1.35] lg:space-y-6 lg:pl-1 lg:text-[1.25rem] lg:leading-[1.4] xl:pr-8 xl:text-[1.35rem] xl:leading-[1.4] xl:tracking-[0.015em] 2xl:pr-12 2xl:text-[1.4rem]'>
            {landingAboutCard.blurbs.map((blurb, index) => (
              <p key={index}>{blurb}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
