import { Heart, Star } from "lucide-react";
import { timelineHeaderData } from "@/lib/data";

export default function TimelineHero() {
  return (
    <header className='relative mx-auto max-w-4xl px-4 pt-40 pb-28 text-center'>
      <div className='mb-6 flex justify-center'>
        <div className='rounded-full bg-white p-4 shadow-lg dark:bg-black'>
          <Heart className='size-8 fill-rose-400 text-rose-400' />
        </div>
      </div>
      <h1 className='text-foreground/90 mb-4 text-4xl font-light md:text-6xl'>
        {timelineHeaderData.header}
      </h1>
      <h2 className='text-foreground/80 mb-6 text-2xl md:text-3xl'>
        {timelineHeaderData.name}
      </h2>
      <p className='text-foreground/70 mx-auto max-w-2xl text-base font-light md:text-lg'>
        {timelineHeaderData.subheader}
      </p>
      <div className='mt-8 flex items-center justify-center space-x-2'>
        {[...Array(5)].map((_, i) => (
          <Star key={i} className='size-4 fill-amber-400 text-amber-400' />
        ))}
      </div>
    </header>
  );
}
