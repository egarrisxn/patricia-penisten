import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CONTAINER_VARIANT_STAGGER, ITEM_VARIANT } from "@/lib/motion";
import {
  aboutTextBlurbs,
  aboutTeachingCardData,
  aboutTimelineData,
} from "@/lib/data";

export default function About() {
  return (
    <div className='pt-6 pb-8 md:px-4 md:pt-8'>
      <motion.div
        className='grid items-start gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-16'
        variants={CONTAINER_VARIANT_STAGGER}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: "some" }}
      >
        <div className='space-y-12'>
          <motion.div variants={ITEM_VARIANT}>
            <Card className='lg:bg-card rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-xl lg:backdrop-blur-xs xl:py-10'>
              <CardContent className='px-2 lg:px-4 xl:px-6'>
                {aboutTextBlurbs.map((text, index) => (
                  <p key={index} className='py-2 md:text-lg'>
                    {text}
                  </p>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={ITEM_VARIANT}>
            <Card className='lg:bg-card rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-xl lg:backdrop-blur-xs xl:py-10'>
              <div className='px-2 lg:px-4 xl:px-6'>
                <h4 className='xs:text-lg flex items-center text-xl leading-none font-semibold md:text-2xl'>
                  <Star className='xs:size-6 text-primary dark:fill-primary/70 fill-primary/30 mr-2.5 size-5 md:size-7' />
                  {aboutTeachingCardData.title}
                </h4>
              </div>
              <CardContent className='px-2 lg:px-4 xl:px-6'>
                <p className='text-base md:text-lg'>
                  {aboutTeachingCardData.body}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className='space-y-6 px-2 lg:px-0'>
          <motion.h4
            variants={ITEM_VARIANT}
            className='mb-6 text-lg font-bold md:text-3xl'
          >
            Timeline
          </motion.h4>
          <div className='space-y-6 lg:space-y-7'>
            {aboutTimelineData.map((event, index) => (
              <motion.div
                key={index}
                className='flex items-start space-x-3 md:space-x-4'
                variants={ITEM_VARIANT}
              >
                <div className='from-primary flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-amber-500 shadow-lg md:size-20'>
                  <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white md:text-sm'>
                    {event.year}
                  </span>
                </div>
                <div className='flex-1'>
                  <h5 className='text-accent-foreground text-[1rem] font-medium tracking-tight md:text-xl md:leading-snug md:tracking-normal'>
                    {event.title}
                  </h5>
                  <p className='text-[0.85rem] tracking-tight md:text-lg md:leading-snug md:tracking-normal'>
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
