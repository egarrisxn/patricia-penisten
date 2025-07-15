import { Heart, Star } from "lucide-react";
import { headerData } from "@/lib/data";

export default function Header() {
  return (
    <header className='relative px-4 py-20 text-center'>
      <div className='absolute inset-0 bg-linear-to-b from-white/80 to-transparent'></div>
      <div className='relative mx-auto max-w-4xl'>
        <div className='mb-6 flex justify-center'>
          <div className='rounded-full bg-white p-4 shadow-lg'>
            <Heart className='h-8 w-8 fill-rose-500 text-rose-500' />
          </div>
        </div>
        <h1 className='mb-4 text-4xl font-light text-gray-800 md:text-6xl'>
          {headerData.header}
        </h1>
        <h2 className='mb-6 text-2xl font-light text-gray-600 md:text-3xl'>
          {headerData.name}
        </h2>
        <p className='mx-auto max-w-2xl text-lg leading-relaxed text-gray-500'>
          {headerData.subheader}
        </p>
        <div className='mt-8 flex items-center justify-center space-x-2'>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className='h-4 w-4 fill-amber-400 text-amber-400' />
          ))}
        </div>
      </div>
    </header>
  );
}
