import * as motion from "motion/react-client";
import { ITEM_FADE } from "@/lib/motion";
import { landingAboutTextBlurb } from "@/lib/data";

export default function LandingAbout() {
  return (
    <motion.article
      variants={ITEM_FADE}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      className='xs:px-4 px-2 py-8'
    >
      <div className='mx-auto w-full max-w-4xl sm:px-6 md:px-8 lg:px-4 xl:py-10 2xl:max-w-[74rem]'>
        <div className='xs:px-4 px-2 xl:px-6'>
          <p className='text-base md:text-lg 2xl:text-xl'>
            {landingAboutTextBlurb}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
