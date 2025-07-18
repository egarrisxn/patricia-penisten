import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section
      id='cta'
      className='5xl:pt-40 5xl:pb-72 bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 pt-10 pb-40 md:pt-28 md:pb-64 xl:pt-32 xl:pb-68 dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='5xl:max-w-7xl mx-auto max-w-4xl text-center'>
          <div className='5xl:pt-22 5xl:pb-24 pt-14 pb-16 md:rounded-2xl md:bg-white md:px-10 md:shadow-xl md:backdrop-blur-sm md:dark:bg-black'>
            <div className='5xl:mb-8 mb-6 flex justify-center'>
              <MapPin className='5xl:size-16 size-12 text-green-400/80' />
            </div>
            <h2 className='text-accent-foreground 5xl:text-5xl 5xl:mb-6 mb-4 font-serif text-3xl md:text-4xl'>
              Patricia embarked on one final voyage...
            </h2>
            <p className='text-muted-foreground 5xl:mb-12 5xl:text-2xl mb-6 text-base italic md:text-lg lg:mb-10 lg:text-xl'>
              Click below to follow her last great adventure.
            </p>
            <Link href='/timeline'>
              <Button
                size='lg'
                className='bg-rose-400/90 font-medium text-white hover:bg-rose-400 md:text-lg lg:text-xl dark:bg-rose-400/90 dark:hover:bg-rose-400'
              >
                Final Road Trip
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
