import { Heart } from "lucide-react";
import { footerData } from "@/lib/data";

export default function SharedFooter() {
  return (
    <footer className='from-background dark:from-background w-full bg-gradient-to-t to-white/80 dark:to-black/80 lg:dark:from-black/80'>
      <div className='mx-auto px-4 pt-18 pb-14 text-center sm:px-6 sm:pt-20 sm:pb-16'>
        <div className='5xl:mb-12 mb-6 lg:mb-8 2xl:mb-10'>
          <h3 className='tracking-snug mb-2 text-xl font-bold sm:text-2xl'>
            {footerData.header}
          </h3>
          <p className='tracking-snug'>{footerData.date}</p>
        </div>
        <div className='tracking-snug group flex items-center justify-center space-x-1 font-semibold text-black dark:text-white'>
          <span>Made with</span>
          <Heart className='size-4 text-rose-400/90 group-hover:fill-rose-400 group-hover:text-rose-400' />
          <span>by</span>
          <a
            href='https://egxo.dev'
            className='text-primary underline-offset-4 group-hover:underline'
          >
            egxo.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
