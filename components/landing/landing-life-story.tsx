import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTAINER_VARIANT_STAGGER, ITEM_VARIANT } from "@/lib/motion";
import { lifeStoryBlurbs, lifeStoryData } from "@/lib/data";

export default function LandingLifeStory() {
  return (
    <motion.div
      className='grid items-start gap-16 lg:grid-cols-2'
      variants={CONTAINER_VARIANT_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: "some" }}
    >
      <div className='space-y-12'>
        <motion.div variants={ITEM_VARIANT}>
          <Card className='lg:bg-card rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-10 lg:shadow-xl lg:backdrop-blur-xs'>
            <CardContent className='px-2 lg:px-6'>
              {lifeStoryBlurbs.map((text, index) => (
                <p key={index} className='py-2 lg:text-lg lg:leading-relaxed'>
                  {text}
                </p>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={ITEM_VARIANT}>
          <Card className='lg:bg-card rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-10 lg:shadow-xl lg:backdrop-blur-xs'>
            <CardHeader className='px-2 lg:px-6'>
              <CardTitle>
                <h4 className='xs:text-lg flex items-center text-xl lg:text-2xl'>
                  <Star className='xs:size-6 text-primary dark:fill-primary/70 fill-primary/30 mr-2.5 size-5 lg:size-7' />
                  Legacy of Teaching
                </h4>
              </CardTitle>
            </CardHeader>
            <CardContent className='px-2 lg:px-6'>
              <p className='lg:text-lg lg:leading-relaxed'>
                For 34 years, Pat dedicated her life to teaching at Douglas
                Elementary School. She touched the lives of hundreds of
                students, always believing in their potential and inspiring them
                to achieve their dreams. Her classroom was a place of wonder,
                learning, and unconditional support.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <div className='space-y-6'>
        <motion.h4
          variants={ITEM_VARIANT}
          className='mb-8 text-lg font-bold md:text-2xl lg:text-3xl'
        >
          Timeline
        </motion.h4>
        <div className='space-y-6 lg:space-y-7'>
          {lifeStoryData.map((event, index) => (
            <motion.div
              key={index}
              className='flex items-start space-x-3 md:space-x-4'
              variants={ITEM_VARIANT}
            >
              <div className='from-primary flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-amber-500 shadow-lg lg:size-20'>
                <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white lg:text-sm'>
                  {event.year}
                </span>
              </div>
              <div className='flex-1'>
                <h5 className='text-accent-foreground text-[1rem] font-medium tracking-tight md:text-lg md:leading-snug md:tracking-normal lg:text-xl'>
                  {event.title}
                </h5>
                <p className='text-[0.85rem] tracking-tight md:text-base md:leading-snug md:tracking-normal lg:text-lg'>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
