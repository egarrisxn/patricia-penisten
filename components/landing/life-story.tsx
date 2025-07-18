import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/landing/section-header";
import { lifeStoryBlurbs, lifeStoryData } from "@/lib/data";

export default function LifeStory() {
  return (
    <section
      id='lifestory'
      className='5xl:pt-48 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 pt-40 pb-24 xl:pt-44 dark:from-slate-950/80 dark:via-slate-950/90 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          header='Life Story'
          subheader='A remarkable journey full of joy.'
        />
        <div className='grid items-start gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='space-y-6 lg:space-y-12'>
            <Card className='sm:border-border/20 rounded-none border-none bg-transparent py-0 shadow-none backdrop-blur-sm sm:rounded-xl sm:border sm:bg-white sm:p-4 sm:shadow-lg sm:dark:bg-black'>
              <CardContent className='mt-6 p-3'>
                {lifeStoryBlurbs.map((text, index) => (
                  <p key={index} className='mb-6 text-lg leading-relaxed'>
                    {text}
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card className='sm:border-border/20 rounded-none border-none bg-transparent py-0 shadow-none backdrop-blur-sm sm:rounded-xl sm:border sm:bg-white sm:p-4 sm:py-6 sm:shadow-lg sm:dark:bg-black'>
              <CardHeader>
                <CardTitle className='hidden items-center text-2xl sm:flex'>
                  <Star className='mr-3 size-6 text-yellow-600' />
                  Legacy of Teaching
                </CardTitle>
              </CardHeader>
              <CardContent className='mt-6 p-3 sm:mt-0 sm:p-0 sm:px-6 sm:pt-0'>
                <p className='mb-6 text-lg leading-relaxed sm:mb-0'>
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
            <h3 className='text-foreground/80 mb-8 text-3xl font-bold'>
              Timeline
            </h3>
            <div className='space-y-6'>
              {lifeStoryData.map((event, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  <div className='flex size-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg'>
                    <span className='mx-auto flex text-center text-sm font-bold text-wrap text-white'>
                      {event.year}
                    </span>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-accent-foreground mb-2 text-xl font-semibold'>
                      {event.title}
                    </h4>
                    <p className='text-accent-foreground/90'>
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
