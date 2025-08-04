import Image from "next/image";
import * as motion from "motion/react-client";
import { Badge } from "@/components/ui/badge";
import TextRotate from "@/components/landing/text-rotate";
import { CONTAINER_FADE_SCALE_N_STAGGER, ITEM_FADE } from "@/lib/motion";
import { landingAboutCard } from "@/lib/data/landing";

export default function LandingAboutCard() {
  return (
    <motion.div
      variants={CONTAINER_FADE_SCALE_N_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      className='xs:px-4 10 mx-auto flex max-w-7xl flex-col gap-16 px-2 py-8 md:flex-row md:items-start md:gap-8 lg:gap-12 lg:py-8 xl:gap-16 xl:py-16 2xl:px-12'
    >
      <motion.article
        variants={ITEM_FADE}
        className='xs:px-4 w-full max-w-[32rem] flex-1 space-y-4 px-2 sm:ml-2 sm:px-0 md:mx-auto md:max-w-112 md:pt-2 lg:ml-0 lg:max-w-none lg:px-4 xl:space-y-6 xl:pt-8'
      >
        <div>
          <h3 className='text-foreground btw:text-[1.6rem] xs:text-[1.6rem] text-[1.35rem] leading-none font-extrabold tracking-tight sm:text-[1.85rem] sm:leading-[1.1] md:text-[1.25rem] md:tracking-[-0.03em] lg:text-[1.7rem] lg:leading-[1.1] xl:text-[2.45rem] xl:leading-[1.05] xl:tracking-tight 2xl:text-[2.6rem] 2xl:leading-none'>
            {landingAboutCard.title}
          </h3>

          <div className='xs:text-[1rem] flex text-[0.9rem] leading-none font-medium tracking-tight whitespace-pre sm:text-[1.15rem] sm:leading-[1.1] md:text-[0.85rem] md:tracking-[-0.03em] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.5rem]'>
            <TextRotate />
          </div>
        </div>

        <div className='text-foreground/90 btw:text-[1.1rem] btw:leading-[1.4] space-y-4 text-[1.05rem] leading-normal sm:space-y-5 sm:text-lg md:space-y-2 md:text-[0.95rem] md:leading-[1.25] md:tracking-[-0.02em] lg:space-y-4 lg:text-[1.1rem] lg:leading-[1.45] lg:tracking-normal xl:text-[1.35rem] xl:leading-[1.3] 2xl:space-y-5 2xl:text-[1.4em] 2xl:leading-[1.35]'>
          {landingAboutCard.blurbs.map((blurb, i) => (
            <p key={i}>{blurb}</p>
          ))}
        </div>

        <div className='flex pt-3'>
          <Badge className='"border-border bg-card text-foreground border shadow-lg lg:text-[0.825rem] xl:text-[0.85rem] xl:leading-normal 2xl:text-base'>
            {landingAboutCard.callout}
          </Badge>
        </div>
      </motion.article>

      <motion.aside
        variants={ITEM_FADE}
        className='xs:px-4 flex px-2 sm:ml-2 sm:w-[480px] sm:px-0 md:mx-auto md:w-[350px] lg:ml-0 lg:w-[480px] lg:px-4'
      >
        <Image
          src='/landing/glasses.png'
          alt='Patricia in fun pink glasses'
          height={640}
          width={480}
          className='bg-foreground border-accent-foreground rounded-lg border-2 object-cover shadow-lg'
        />
      </motion.aside>
    </motion.div>
  );
}
