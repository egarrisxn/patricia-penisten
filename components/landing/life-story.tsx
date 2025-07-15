import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "@/components/landing/section-header";
import { lifeEvents } from "@/lib/data";

export default function LifeStory() {
  return (
    <section
      id='lifestory'
      className='bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 pt-40 pb-24 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          header='Life Story'
          subheader='A remarkable journey of love and dedication.'
        />
        <div className='grid items-start gap-12 lg:grid-cols-2'>
          <div className='space-y-6'>
            <Card className='shadow-lg'>
              <CardContent className='p-8'>
                <p className='mb-6 text-lg leading-relaxed'>
                  Patricia was born on the family farm between Connerville and
                  Mills Creek, Oklahoma on December 22nd, 1935 to Hugh and Ettie
                  Irene (Tisdale) Blevins. She grew up in Connerville and
                  attended Tishomingo Schools.
                </p>
                <p className='mb-6 text-lg leading-relaxed'>
                  She married John Penisten on November 26, 1956 in Ada,
                  Oklahoma where they lived, later moving to Douglas, Wyoming
                  and returning to Oklahoma, living in Bray until 1967 when they
                  moved to Lawton.
                </p>
                <p className='mb-6 text-lg leading-relaxed'>
                  Patricia finished her education with a Bachelors Degree in
                  Elementary Education from Cameron University and worked at
                  Douglas Elementary for 34 years before retiring.
                </p>
                <p className='text-lg leading-relaxed'>
                  She enjoyed shopping and loved being with her family and
                  taking care of the grandchildren.
                </p>
              </CardContent>
            </Card>
            <Card className='shadow-lg'>
              <CardHeader>
                <CardTitle className='flex items-center text-2xl'>
                  <Star className='mr-3 size-6 text-amber-500' />
                  Legacy of Teaching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-lg leading-relaxed'>
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
              {lifeEvents.map((event, index) => (
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
