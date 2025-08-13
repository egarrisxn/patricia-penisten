import Image from "next/image";
import * as motion from "motion/react-client";
import { WordRotate } from "@/components/ui/word-rotate";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

import { LandingAboutCardData } from "@/lib/types";

const landingAboutCard: LandingAboutCardData = {
  blurbs: [
    `Was born in the heart of Oklahoma and lived a life defined by unwavering love, gentle wisdom, and quiet strength. For 34 years, she shaped young minds as a beloved elementary school teacher, yet her greatest joy was always her family.`,
    `She cherished life's simple pleasures, such as completing the daily crossword, playing Yahtzee with her husband and grandchildren, tending the garden, or catching up on her favorite daytime soap operas.`,
    `Her legacy lives on not only in the lessons she taught, but in the unconditional love she shared, leaving a lasting warmth in the hearts of all who knew her.`,
  ],
};

export default function LandingAboutCard() {
  return (
    <motion.div
      variants={CONTAINER_FADE_SCALE_N_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className='lg:bg-card xs:px-4 mx-auto flex w-fit max-w-7xl flex-col gap-y-8 px-2 py-8 lg:grid lg:w-full lg:max-w-5xl lg:grid-cols-[1fr_auto] lg:items-start lg:gap-x-8 lg:gap-y-0 lg:rounded-lg lg:shadow-lg xl:max-w-none xl:px-12 xl:py-16 lg:dark:border'
    >
      <motion.div
        variants={ITEM_FADE}
        className='w-full max-w-[32rem] px-2 lg:mx-auto lg:max-w-none lg:px-4'
      >
        <h3 className='text-foreground xs:text-[1.25rem] xs:tracking-tight text-[1.05rem] font-bold tracking-tighter sm:text-[1.45rem] lg:text-[1.35rem] xl:text-[1.65rem] 2xl:text-[1.75rem]'>
          <div className='flex flex-row'>
            <span>Pat, or commonly known as </span>
            <div className='text-accent-foreground justify-center overflow-hidden pl-1 font-medium lg:pl-2'>
              <WordRotate
                words={[
                  "Patricia",
                  "Mrs Penisten",
                  "Patsy",
                  "Patsy Geraldine",
                  "Grandma",
                  "Grandma Pat",
                ]}
              />
            </div>
          </div>
        </h3>
      </motion.div>

      <motion.aside
        variants={ITEM_FADE}
        className='flex px-2 lg:row-span-2 lg:mx-auto lg:px-4'
      >
        <Image
          src='/landing/peace.png'
          alt='Patricia throwing up a peace sign.'
          height={500}
          width={500}
          className='bg-foreground border-accent-foreground aspect-square rounded-lg border-2 object-cover shadow-lg lg:w-[400px] xl:w-[500px]'
        />
      </motion.aside>

      <motion.article
        variants={ITEM_FADE}
        className='w-full max-w-[32rem] px-2 lg:mx-auto lg:max-w-none lg:px-4 lg:pt-4 xl:pt-0'
      >
        <div className='text-foreground/90 xs:text-lg xs:text-[1.1rem] space-y-4 text-[0.95rem] tracking-tight sm:text-xl lg:space-y-3 lg:text-[1.15rem] xl:space-y-4 xl:text-[1.35rem] 2xl:text-[1.45rem]'>
          {landingAboutCard.blurbs.map((blurb, i) => (
            <p key={i}>{blurb}</p>
          ))}
        </div>
      </motion.article>
    </motion.div>
  );
}
