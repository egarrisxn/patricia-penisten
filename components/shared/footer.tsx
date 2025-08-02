import { Heart } from "lucide-react";
import { footerData } from "@/lib/data/shared";

export default function Footer() {
  return (
    <footer className='bg-card/90 border-border/30 w-full border-t-2'>
      <div className='mx-auto px-4 pt-18 pb-14 text-center md:pt-20 md:pb-16'>
        <div className='mb-6 lg:mb-8'>
          <h3 className='xs:text-xl mb-2 text-lg font-bold tracking-tight sm:text-2xl'>
            {footerData.title}
          </h3>
          <p className='text-foreground/90 text-sm font-medium tracking-tight sm:text-base'>
            {footerData.body}
          </p>
        </div>
        <div className='group flex items-center justify-center space-x-1 text-sm font-semibold tracking-tight text-black sm:text-base dark:text-white'>
          <span>{footerData.textOne}</span>
          <Heart className='size-4 text-rose-400/90 group-hover:fill-rose-400 group-hover:text-rose-400' />
          <span>{footerData.textTwo}</span>
          <a
            href={footerData.link.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group-hover:text-primary relative cursor-pointer transition-colors'
          >
            {footerData.link.name}
            <span className='bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
