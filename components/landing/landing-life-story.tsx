import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lifeStoryBlurbs, lifeStoryData } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export default function LandingLifeStory() {
  return (
    <motion.div
      className='grid items-start gap-12 lg:grid-cols-2 lg:gap-16'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className='space-y-12' variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <Card className='sm:border-border/20 sm:bg-card rounded-none border-none bg-transparent py-0 shadow-none backdrop-blur-sm sm:rounded-xl sm:border sm:p-4 sm:shadow-lg'>
            <CardContent className='px-2 sm:px-6'>
              {lifeStoryBlurbs.map((text, index) => (
                <p
                  key={index}
                  className='py-2 lg:py-2.5 lg:text-lg lg:leading-relaxed'
                >
                  {text}
                </p>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className='sm:border-border/20 sm:bg-card rounded-none border-none bg-transparent py-0 shadow-none backdrop-blur-sm sm:rounded-xl sm:border sm:p-4 sm:py-8 sm:shadow-lg'>
            <CardHeader className='px-2 sm:px-6'>
              <CardTitle className='xs:text-lg flex items-center text-base leading-none lg:text-2xl'>
                <Star className='xs:size-6 xs:mr-3 mr-2.5 size-5 text-yellow-500' />
                Legacy of Teaching
              </CardTitle>
            </CardHeader>
            <CardContent className='px-2 sm:px-6'>
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
      </motion.div>
      <motion.div className='space-y-6' variants={containerVariants}>
        <motion.h3
          variants={itemVariants}
          className='text-foreground/90 mb-8 text-2xl font-bold lg:text-3xl'
        >
          Timeline
        </motion.h3>
        <div className='space-y-7 lg:space-y-6'>
          {lifeStoryData.map((event, index) => (
            <motion.div
              key={index}
              className='flex items-start space-x-3.5 lg:space-x-4'
              variants={itemVariants}
            >
              <motion.div
                className='flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg sm:size-16 lg:size-20'
                variants={itemVariants}
              >
                <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white sm:text-sm'>
                  {event.year}
                </span>
              </motion.div>
              <div className='flex-1'>
                <h4 className='text-accent-foreground mb-2 text-lg font-bold tracking-tight lg:text-xl lg:tracking-normal'>
                  {event.title}
                </h4>
                <p className='text-accent-foreground/90 xs:text-base text-[0.9rem] font-medium tracking-tight lg:text-[1.15rem] lg:tracking-normal'>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
