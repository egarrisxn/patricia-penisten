import { Heart } from "lucide-react";
import { sharedFooterData } from "@/lib/data";

export default function SharedFooter() {
  return (
    <footer className='bg-background border-border/30 w-full border-t-2'>
      <div className='mx-auto px-4 pt-20 pb-14 text-center'>
        <div className='mb-6 lg:mb-8'>
          <h3 className='tracking-snug xs:text-xl mb-2 text-lg font-bold sm:text-2xl'>
            {sharedFooterData.text}
          </h3>
          <p className='tracking-snug text-sm sm:text-base'>
            {sharedFooterData.date}
          </p>
        </div>
        <div className='tracking-snug group flex items-center justify-center space-x-1 text-sm font-semibold text-black sm:text-base dark:text-white'>
          <span>Made with</span>
          <Heart className='size-4 text-rose-400/90 group-hover:fill-rose-400 group-hover:text-rose-400' />
          <span>by</span>
          <a
            href='https://egxo.dev'
            target='_blank'
            rel='noopener noreferrer'
            className='group-hover:text-primary relative cursor-pointer transition-colors'
          >
            egxo.dev
            <span className='bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
