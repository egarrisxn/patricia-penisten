import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/landing/section-header";
import { lifeStoryBlurbs, lifeStoryData } from "@/lib/data";

export default function LifeStory() {
  return (
    <section
      id='lifestory'
      className='5xl:py-32 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-950/80 dark:via-slate-950/90 dark:to-slate-950'
    >
      <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
        <SectionHeader
          header='Life Story'
          subheader='A remarkable journey full of joy.'
        />
        <div className='grid items-start gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='space-y-12'>
            <Card className='sm:border-border/20 sm:bg-card k rounded-none border-none bg-transparent py-0 shadow-none backdrop-blur-sm sm:rounded-xl sm:border sm:p-4 sm:shadow-lg'>
              <CardContent className='mt-0 px-2 sm:px-6'>
                {lifeStoryBlurbs.map((text, index) => (
                  <p
                    key={index}
                    className='mb-6 text-base leading-relaxed sm:text-lg sm:leading-relaxed'
                  >
                    {text}
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className='sm:border-border/20 sm:bg-card rounded-none border-none bg-transparent py-0 shadow-none backdrop-blur-sm sm:rounded-xl sm:border sm:p-4 sm:py-8 sm:shadow-lg'>
              <CardHeader className='mt-0 px-2 sm:px-6'>
                <CardTitle className='flex items-center text-lg sm:text-2xl'>
                  <Star className='mr-3 size-6 text-yellow-500' />
                  Legacy of Teaching
                </CardTitle>
              </CardHeader>
              <CardContent className='mt-0 px-2 sm:px-6'>
                <p className='mb-6 text-base sm:mb-0 sm:text-lg sm:leading-relaxed'>
                  For 34 years, Pat dedicated her life to teaching at Douglas
                  Elementary School. She touched the lives of hundreds of
                  students, always believing in their potential and inspiring
                  them to achieve their dreams. Her classroom was a place of
                  wonder, learning, and unconditional support.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className='space-y-6'>
            <h3 className='text-foreground/90 mb-8 text-3xl font-bold'>
              Timeline
            </h3>
            <div className='space-y-6'>
              {lifeStoryData.map((event, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  <div className='flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg sm:size-20'>
                    <span className='mx-auto flex text-center text-xs font-bold text-wrap text-white sm:text-sm'>
                      {event.year}
                    </span>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-accent-foreground mb-2 text-xl font-bold tracking-tight sm:tracking-normal'>
                      {event.title}
                    </h4>
                    <p className='text-accent-foreground/90 font-medium tracking-tight sm:tracking-normal'>
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
