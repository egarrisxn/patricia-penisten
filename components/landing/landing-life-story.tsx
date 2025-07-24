"use client";

import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTAINER_VARIANT_STAGGER, ITEM_VARIANT } from "@/lib/motion";
import { lifeStoryBlurbs, lifeStoryData } from "@/lib/data";

export default function LandingLifeStory() {
  return (
    <motion.div
      className='grid items-start gap-16 md:px-16 lg:grid-cols-2 lg:px-0'
      variants={CONTAINER_VARIANT_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: "some" }}
    >
      <div className='space-y-12'>
        <motion.div variants={ITEM_VARIANT}>
          <Card className='lg:border-border/20 lg:bg-card rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:border lg:px-4 lg:py-8 lg:shadow-lg lg:backdrop-blur-sm'>
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
          <Card className='lg:border-border/20 lg:bg-card rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:border lg:px-4 lg:py-8 lg:shadow-lg lg:backdrop-blur-sm'>
            <CardHeader className='px-2 lg:px-6'>
              <CardTitle className='xs:text-lg flex items-center text-xl leading-none lg:text-2xl'>
                <Star className='xs:size-6 mr-2.5 size-5 text-yellow-500 lg:size-7' />
                Legacy of Teaching
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
        <motion.h3
          variants={ITEM_VARIANT}
          className='text-foreground/90 mb-8 text-lg font-bold md:text-2xl lg:text-3xl'
        >
          Timeline
        </motion.h3>
        <div className='space-y-6 lg:space-y-7'>
          {lifeStoryData.map((event, index) => (
            <motion.div
              key={index}
              className='flex items-start space-x-3 md:space-x-3.5 lg:space-x-4'
              variants={ITEM_VARIANT}
            >
              <div className='flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg lg:size-20'>
                <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white lg:text-sm'>
                  {event.year}
                </span>
              </div>
              <div className='flex-1'>
                <h4 className='text-accent-foreground mb-0.5 font-bold tracking-tight md:text-lg md:leading-snug md:tracking-normal lg:text-xl'>
                  {event.title}
                </h4>
                <p className='text-accent-foreground/90 text-[0.85rem] font-medium tracking-tight md:text-base md:leading-snug md:tracking-normal lg:text-[1.15rem]'>
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
