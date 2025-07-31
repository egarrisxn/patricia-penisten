import * as motion from "motion/react-client";
import { CONTAINER_VARIANT_SCALE, ITEM_VARIANT } from "@/lib/motion";
import { landingAboutTextBlurb } from "@/lib/data";

export default function LandingAbout() {
  return (
    <motion.div
      variants={CONTAINER_VARIANT_SCALE}
      initial='hidden'
      whileInView='visible'
    >
      <motion.aside variants={ITEM_VARIANT}>
        <div className='lg:bg-card/90 rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-xl xl:py-10'>
          <div className='px-2 lg:px-4 xl:px-6'>
            <h4 className='xs:text-lg flex items-center text-xl leading-none font-semibold md:text-2xl'>
              {landingAboutTextBlurb.title}
            </h4>
          </div>
          <div className='px-2 lg:px-4 xl:px-6'>
            <p className='text-base md:text-lg'>{landingAboutTextBlurb.body}</p>
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}
