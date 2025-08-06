import Image from "next/image";
import * as motion from "motion/react-client";
import { WordRotate } from "@/components/shared/word-rotate";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";
// import { landingAboutCard } from "@/lib/data/landing";
import type { LandingAboutCard } from "@/lib/types";

export const landingAboutCard: LandingAboutCard = {
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
      className='bg-card mx-auto flex w-fit max-w-7xl flex-col gap-8 rounded-lg px-4 py-8 shadow-lg md:flex-row md:items-start md:gap-8 lg:w-auto lg:py-8 xl:gap-12 xl:py-16 2xl:gap-16 2xl:px-12'
    >
      <motion.article
        variants={ITEM_FADE}
        className='xs:px-4 w-full max-w-[32rem] flex-1 space-y-4 px-2 md:mx-auto md:max-w-112 lg:max-w-none lg:px-4'
      >
        <h3 className='text-foreground xs:text-base text-sm font-bold tracking-tight sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl'>
          <div className='flex flex-row'>
            <span>Pat, or commonly known as </span>
            <div className='text-accent-foreground justify-center overflow-hidden pl-2 font-medium'>
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

        <div className='text-foreground/90 xs:text-[0.8rem] space-y-4 text-xs tracking-tight sm:text-sm md:space-y-2 lg:text-lg xl:text-xl 2xl:space-y-4 2xl:text-[1.4rem]'>
          {landingAboutCard.blurbs.map((blurb, i) => (
            <p key={i}>{blurb}</p>
          ))}
        </div>
      </motion.article>

      <motion.aside
        variants={ITEM_FADE}
        className='xs:px-4 flex px-2 md:mx-auto md:w-[300px] lg:w-[500px] lg:px-4'
      >
        <Image
          src='/landing/peace.png'
          alt='Patricia throwing up a peace sign.'
          height={500}
          width={500}
          className='bg-foreground border-accent-foreground rounded-lg border-2 object-cover shadow-lg'
        />
      </motion.aside>
    </motion.div>
  );
}
