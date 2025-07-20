import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section
      id='cta'
      className='5xl:pt-40 5xl:pb-72 bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 pt-24 pb-52 md:pt-24 md:pb-64 xl:pt-36 xl:pb-68 dark:from-slate-900/80 dark:via-slate-950/80 dark:to-slate-950'
    >
      <div className='5xl:max-w-[88rem] mx-auto max-w-md px-4 md:max-w-2xl lg:max-w-3xl lg:px-8 xl:max-w-7xl 2xl:max-w-[84rem]'>
        <div className='mx-auto max-w-5xl text-center'>
          <div className='5xl:pt-12 5xl:pb-4 md:px-10 xl:pt-8 xl:pb-2'>
            <div className='5xl:mb-9 mb-6 flex justify-center xl:mb-7.5'>
              <MapPin className='5xl:size-16 size-12 text-green-400 md:size-14' />
            </div>
            <h2 className='5xl:text-[5.5rem] 5xl:mb-6 text-foreground/90 mb-4 font-serif text-4xl font-bold text-shadow-lg md:text-5xl lg:text-6xl xl:mb-5 xl:text-[5rem]'>
              Patricia embarked on one final voyage...
            </h2>
            <p className='text-accent-foreground/90 5xl:text-3xl 5xl:mb-13 mb-6 tracking-tight italic md:mb-9 md:text-lg lg:mb-11 lg:text-xl xl:mb-12 xl:text-2xl'>
              Click below to see her last great adventure.
            </p>
            <Link href='/timeline'>
              <Button
                size='lg'
                className='5xl:text-3xl 5xl:h-15 bg-rose-400/90 font-medium text-white hover:bg-rose-400 md:h-11 md:text-xl xl:h-13 xl:text-2xl dark:bg-rose-400/90 dark:hover:bg-rose-400'
              >
                The Road Trip
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
