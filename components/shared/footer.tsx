import { Heart } from "lucide-react";

import { FooterCard } from "@/lib/types";

const footerData: FooterCard = {
  title: "In Loving Memory of Patricia G. Penisten",
  body: "December 22nd, 1935 - June 5th, 2025",
  textOne: "Made with",
  textTwo: "by",
  link: {
    href: "https://egxo.dev",
    name: " egxo.dev",
  },
};

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
          <Heart className='text-primary group-hover:fill-primary/50 group-hover:text-primary size-4' />
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
