import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className='w-full bg-white/90 dark:bg-black/90'>
      <div className='mx-auto max-w-7xl px-4 pt-20 pb-12 text-center sm:px-6 lg:px-8'>
        <div className='mb-6'>
          <h3 className='mb-2 text-2xl font-bold'>
            In Loving Memory of Patricia G. Penisten
          </h3>
          <p className=''>December 22nd, 1935 - June 5th, 2025</p>
        </div>
        <div className='text-accent-foreground/80 flex items-center justify-center space-x-2'>
          <Heart className='size-4 text-amber-500' />
          <span>Forever in our hearts</span>
          <Heart className='size-4 text-amber-500' />
        </div>
      </div>
    </footer>
  );
}
