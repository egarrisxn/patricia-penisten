import { Heart } from "lucide-react";
import { headerData } from "@/lib/data";

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-sm'>
      <div className='container mx-auto px-4 py-6'>
        <div className='text-center'>
          <div className='mb-2 flex items-center justify-center gap-3'>
            <Heart className='size-6 fill-rose-400 text-rose-400' />
            <h1 className='font-serif text-3xl font-semibold text-gray-800 md:text-4xl'>
              {headerData.header}
            </h1>
            <Heart className='size-6 fill-rose-400 text-rose-400' />
          </div>
          <p className='text-lg font-light text-gray-600'>
            {headerData.subheader}
          </p>
        </div>
      </div>
    </header>
  );
}
