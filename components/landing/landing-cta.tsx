import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingCTA() {
  return (
    <div className='mx-auto max-w-5xl text-center'>
      <div className='md:pt-8 md:pb-2'>
        <div className='mb-6 flex justify-center md:mb-8'>
          <MapPin className='size-12 text-green-400 md:size-14' />
        </div>
        <h1 className='text-accent-foreground/90 text-shadow-accent-foreground/10 mb-4 font-serif text-4xl font-bold text-shadow-md md:px-10 md:text-6xl xl:text-[5rem]'>
          Patricia embarked on one final voyage...
        </h1>
        <p className='text-accent-foreground/90 mb-8 tracking-tight italic md:mb-10 md:text-xl xl:mb-16 xl:text-2xl'>
          Click below to see her last great adventure.
        </p>
        <div>
          <Link href='/farewell'>
            <Button
              size='lg'
              className='cursor-pointer bg-rose-400/90 font-medium text-white hover:bg-rose-400 md:h-11 md:text-xl xl:h-13 xl:text-2xl dark:bg-rose-400/90 dark:hover:bg-rose-400'
            >
              The Road Trip
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
