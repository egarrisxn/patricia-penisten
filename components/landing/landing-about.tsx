import Image from "next/image";
import * as motion from "motion/react-client";
import { WordRotate } from "@/components/ui/word-rotate";

import { LandingAboutCardData } from "@/lib/types";

const landingAboutCard: LandingAboutCardData = {
  blurbs: [
    `...was born in the heart of Oklahoma and lived a life defined by unwavering love, gentle wisdom, and quiet strength. For 34 years, she shaped young minds as a beloved elementary school teacher, yet her greatest joy was always her family.`,
    `She cherished life's simple pleasures, such as completing the daily crossword, playing Yahtzee with her husband and grandchildren, tending the garden, or catching up on her favorite daytime soap operas.`,
    `Her legacy lives on not only in the lessons she taught, but in the unconditional love she shared, leaving a lasting warmth in the hearts of all who knew her.`,
  ],
};

export default function LandingAboutCard() {
  return (
    <div className='lg:bg-card xs:w-112 xs:px-4 mx-auto flex w-fit flex-col gap-y-8 px-2 py-8 sm:w-full lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-x-8 lg:gap-y-0 lg:rounded-lg lg:px-2 lg:shadow-lg xl:px-12 xl:py-16 lg:dark:border'>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className='w-full max-w-[32rem] px-2 sm:mx-auto lg:max-w-none lg:space-y-4 lg:pt-2 lg:pl-4 xl:pr-4'
      >
        <h3 className='text-foreground xs:text-lg text-base font-bold tracking-tighter sm:text-2xl lg:text-xl xl:text-[1.6rem] 2xl:text-[1.65rem]'>
          <div className='flex flex-row flex-wrap items-baseline'>
            <span>Pat, or maybe you know her as&nbsp;</span>
            <div className='text-accent-foreground justify-center overflow-hidden font-medium'>
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
        <div className='text-foreground/90 hidden space-y-3 pt-2 tracking-tight lg:block lg:text-[1.125rem] lg:leading-[1.4] xl:space-y-4 xl:pt-0 xl:text-[1.3rem] xl:leading-normal'>
          {landingAboutCard.blurbs.map((blurb, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
            >
              {blurb}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <motion.aside
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='flex px-2 sm:mx-auto lg:row-span-2 lg:pr-4 xl:pl-4'
      >
        <Image
          src='/landing/peace.png'
          alt='Patricia throwing up a peace sign.'
          height={500}
          width={500}
          className='border-accent-foreground bg-foreground aspect-square rounded-lg border-2 object-cover shadow-lg lg:max-w-[28rem] xl:max-w-full'
        />
      </motion.aside>

      {/* Text Blurbs */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className='w-full max-w-[32rem] px-2 sm:mx-auto lg:hidden'
      >
        <div className='text-foreground/90 space-y-4 text-[0.95rem] tracking-tight sm:text-[1.15rem]'>
          {landingAboutCard.blurbs.map((blurb, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
            >
              {blurb}
            </motion.p>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
