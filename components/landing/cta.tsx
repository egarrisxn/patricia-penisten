import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section
      id='cta'
      className='bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 pt-10 pb-40 md:pt-28 md:pb-64 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='pt-14 pb-16 md:rounded-2xl md:bg-white md:px-10 md:shadow-xl md:backdrop-blur-sm md:dark:bg-black'>
            <div className='mb-6 flex justify-center'>
              <MapPin className='size-12 text-green-500' />
            </div>
            <h2 className='text-accent-foreground mb-4 font-serif text-3xl md:text-4xl'>
              Patricia embarked on one final voyage...
            </h2>
            <p className='text-muted-foreground/80 mb-6 text-base italic md:text-lg lg:mb-10 lg:text-xl'>
              Click below to follow her last great adventure.
            </p>
            <Link href='/timeline'>
              <Button
                size='lg'
                className='bg-indigo-500/90 font-medium text-white hover:bg-indigo-500 md:text-lg lg:text-xl dark:bg-rose-400 hover:dark:bg-rose-400/90'
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
