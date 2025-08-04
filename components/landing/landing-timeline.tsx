import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { CONTAINER_FADE_N_STAGGER, ITEM_FADE } from "@/lib/motion";
import { landingTimelineCards, landingTimelineData } from "@/lib/data/landing";
import { iconMap } from "@/lib/types";

export default function LandingTimeline() {
  return (
    <motion.div
      variants={CONTAINER_FADE_N_STAGGER}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: "some" }}
      className='xs:px-4 grid items-start gap-16 px-2 py-8 lg:grid-cols-2 lg:gap-12 xl:gap-16'
    >
      <div className='space-y-12'>
        {landingTimelineCards.map((card, index) => {
          const IconComponent = card.icon ? iconMap[card.icon] : null;
          return (
            <motion.div variants={ITEM_FADE} key={index}>
              <Card className='lg:bg-card/90 rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:px-4 lg:py-8 lg:shadow-lg xl:py-12'>
                <div className='xs:px-4 px-2 xl:px-6'>
                  <h3 className='flex items-center text-lg leading-none font-extrabold md:text-xl 2xl:text-2xl'>
                    {IconComponent && (
                      <IconComponent className='xs:size-6 text-primary fill-primary/50 mr-2.5 size-5 md:size-7' />
                    )}
                    {card.title}
                  </h3>
                </div>
                <CardContent className='xs:px-4 space-y-6 px-2 xl:px-6'>
                  <p className='text-base md:text-[1.1rem] 2xl:text-lg'>
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
                <h5 className='text-card-foreground text-[1rem] font-medium tracking-tight md:text-xl md:leading-snug md:tracking-normal'>
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
