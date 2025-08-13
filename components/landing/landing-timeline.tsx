import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { CONTAINER_FADE_N_STAGGER, ITEM_FADE } from "@/lib/motion";

import {
  iconMap,
  LandingTimelineCards,
  LandingTimelineData,
} from "@/lib/types";

const landingTimelineCards: LandingTimelineCards[] = [
  {
    icon: "Star",
    title: "Legacy of a Teacher",
    body: `For one-third of her life, Pat dedicated her life to teaching at Douglass Elementary School. She touched the lives of hundreds of students, always believing in their potential and inspiring them to achieve their dreams. Her classroom was a place of wonder, learning, and unconditional support.`,
  },
  {
    icon: "HeartHandshake",
    title: "Grandma to All",
    body: "She lived to be a grandma in every sense of the word. With an open-door policy and a heart full of love, she raised countless children and was a beloved figure to friends, relatives, and even her own kids. While she was a great mother, she truly excelled at being a grandma, and her memory lives on as the most amazing woman to so many.",
  },
  {
    icon: "BookMarked",
    title: "A Life Remembered",
    body: "The timeline here is a year-by-year look at the milestones that defined Patricia's journey. For more details on her life, you can view her",
    textOne: "courtesy of the Lawton Ritter Gray Funeral Home.",
    link: {
      href: "https://www.grayfuneral.com/obituaries/Patricia-G-Penisten?obId=42802528",
      name: "Official Obituary",
    },
  },
];

const landingTimelineData: LandingTimelineData[] = [
  {
    year: "1935",
    title: "Born in Oklahoma",
    description:
      "Born on December 22nd to Hugh and Ettie Irene (Tisdale) Blevins on the family farm near Connerville and Mill Creek.",
  },
  {
    year: "1940s",
    title: "Childhood in Connerville",
    description:
      "Grew up in Connerville, attending Tishomingo Schools and helping on the family farm.",
  },
  {
    year: "1956",
    title: "Married John Penisten",
    description:
      "Married in Ada, Oklahoma and began a life together that would span decades and states.",
  },
  {
    year: "1950s - 1970s",
    title: "Early Family Life",
    description:
      "Lived in Ada, moved to Douglass, Wyoming, and eventually settled in Lawton, Oklahoma by 1967.",
  },
  {
    year: "1970s",
    title: "Pursued Higher Education",
    description:
      "Earned her Bachelor's Degree in Elementary Education from Cameron University while raising her family.",
  },
  {
    year: "1970s - 2000s",
    title: "Teaching Career at Douglass Elementary",
    description:
      "Devoted 34 years to educating young minds with love, patience, and dedication.",
  },
  {
    year: "2000s",
    title: "Retirement",
    description:
      "Retired after decades of service, leaving behind a lasting legacy of learning and care.",
  },
  {
    year: "2000s - 2020s",
    title: "Time with Family",
    description:
      "Loved shopping, spending time with family, and especially doting on her grandchildren.",
  },
];

export default function LandingTimeline() {
  return (
    <motion.div
      variants={CONTAINER_FADE_N_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: "some" }}
      className='xs:px-4 mx-auto grid w-full max-w-[36rem] items-start gap-16 px-2 py-8 lg:max-w-none lg:grid-cols-2 lg:gap-12 xl:gap-16'
    >
      <div className='space-y-12'>
        {landingTimelineCards.map((card, index) => {
          const IconComponent = card.icon ? iconMap[card.icon] : null;
          return (
            <motion.div variants={ITEM_FADE} key={index}>
              <Card className='lg:bg-card rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-lg xl:py-12 lg:dark:border'>
                <div className='px-2 lg:px-4 xl:px-6'>
                  <h3 className='flex items-center text-lg leading-none font-extrabold md:text-xl 2xl:text-2xl'>
                    {IconComponent && (
                      <IconComponent className='xs:size-6 text-primary fill-primary/50 mr-2.5 size-5 md:size-7' />
                    )}
                    {card.title}
                  </h3>
                </div>
                <CardContent className='space-y-6 px-2 lg:px-4 xl:px-6'>
                  <p className='xs:text-base text-[0.95rem] md:text-[1.1rem] 2xl:text-lg'>
                    {card.body}
                    {card.link && (
                      <>
                        <a
                          href={card.link.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group hover:text-primary relative mx-1 cursor-pointer font-medium whitespace-nowrap transition-colors'
                        >
                          {card.link.name}
                          <span className='bg-primary absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
                        </a>{" "}
                        {card.textOne}
                      </>
                    )}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
      <div className='space-y-6 px-2 lg:px-0'>
        <motion.h4
          variants={ITEM_FADE}
          className='mb-6 text-lg font-extrabold md:text-3xl'
        >
          Timeline
        </motion.h4>
        <div className='space-y-6 lg:space-y-7'>
          {landingTimelineData.map((event, index) => (
            <motion.div
              key={index}
              className='flex items-start space-x-3 md:space-x-4'
              variants={ITEM_FADE}
            >
              <div className='from-primary flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br to-amber-500 shadow-lg md:size-20'>
                <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white md:text-sm'>
                  {event.year}
                </span>
              </div>
              <div className='flex-1'>
                <h5 className='text-card-foreground text-[0.95rem] leading-snug font-medium tracking-tight md:text-xl md:tracking-normal'>
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
  );
}
