import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { landingTimelineCards, landingTimelineData } from "@/lib/data/landing";

import { iconMap } from "@/lib/types";

export default function LandingTimeline() {
  return (
    <div className="mx-auto grid w-full max-w-xl items-start gap-16 pt-12 pb-2 lg:max-w-none lg:grid-cols-2 lg:gap-12 xl:gap-16">
      <div className="space-y-12">
        {landingTimelineCards.map((card, i) => {
          const IconComponent = card.icon ? iconMap[card.icon] : null;
          return (
            <div key={i}>
              <Card className="group rounded-none border-none bg-transparent p-0 shadow-none lg:rounded-lg lg:bg-card lg:px-4 lg:py-8 lg:shadow-lg xl:py-12 lg:dark:border">
                <div className="px-2 lg:px-4 xl:px-6">
                  <h3 className="flex items-center text-lg leading-none font-extrabold md:text-xl 2xl:text-2xl">
                    {IconComponent && (
                      <IconComponent className="mr-2.5 size-5 fill-primary/50 text-primary group-hover:fill-primary/80 xs:size-6 md:size-7" />
                    )}
                    {card.title}
                  </h3>
                </div>
                <CardContent className="space-y-6 px-2 lg:px-4 xl:px-6">
                  <p className="text-[0.95rem] xs:text-base md:text-[1.1rem] 2xl:text-lg">
                    {card.body}
                    {card.link && (
                      <>
                        <a
                          href={card.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative mr-0.5 ml-1 cursor-pointer font-medium whitespace-nowrap transition-colors group-hover:text-primary"
                        >
                          {card.link.name}
                          <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>{" "}
                        {card.text}
                      </>
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="space-y-6 px-2 lg:px-0">
        <h4 className="mb-6 text-lg font-extrabold md:text-3xl">Timeline</h4>

        <div className="space-y-6 lg:space-y-7">
          {landingTimelineData.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="flex items-start space-x-3 md:space-x-4"
            >
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-amber-500 shadow-lg md:size-20">
                <span className="mx-auto flex text-center text-xs font-bold text-white md:text-sm">
                  {event.year}
                </span>
              </div>
              <div className="flex-1">
                <h5 className="text-[0.95rem] leading-snug font-medium tracking-tight text-card-foreground md:text-xl md:tracking-normal">
                  {event.title}
                </h5>
                <p className="text-[0.85rem] tracking-tight md:text-lg md:leading-snug md:tracking-normal">
                  {event.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
