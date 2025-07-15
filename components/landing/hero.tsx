"use client";

import Image from "next/image";
import { ChevronDown, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-center justify-center'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900/20 to-slate-800/40'></div>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      ></div>

      <div className='relative z-10 mx-auto max-w-4xl px-4 text-center text-white'>
        <div className='mb-8'>
          <div className='mx-auto mb-6 size-48 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl'>
            <Image
              src='/images/gma-icon.png'
              alt='gma icon'
              height={400}
              width={400}
              className='size-full object-cover'
            />
          </div>
          <h1 className='mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
            Patricia G. Penisten
          </h1>
          <div className='mb-6 flex items-center justify-center space-x-4 text-xl text-white md:text-2xl'>
            <span>December 22nd, 1935</span>
            <Heart className='size-6 text-amber-300' />
            <span>June 5th, 2025</span>
          </div>
          <p className='mb-8 text-xl font-light text-white md:text-2xl'>
            Beloved Mother, Grandmother, Wife, & Teacher
          </p>
          <div className='flex flex-wrap justify-center gap-3'>
            <Badge
              variant='secondary'
              className='border-white/40 bg-white/30 px-4 py-2 text-sm text-black dark:bg-black/30 dark:text-white'
            >
              Educator for 25+ years
            </Badge>
            <Badge
              variant='secondary'
              className='border-white/40 bg-white/30 px-4 py-2 text-sm text-black dark:bg-black/30 dark:text-white'
            >
              Devoted family woman
            </Badge>
            <Badge
              variant='secondary'
              className='border-white/40 bg-white/30 px-4 py-2 text-sm text-black dark:bg-black/30 dark:text-white'
            >
              Biggest lover of life
            </Badge>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("#biography")}
          className='animate-bounce'
        >
          <ChevronDown className='size-8 text-white/70 transition-colors hover:text-white dark:text-black/70 hover:dark:text-black' />
        </button>
      </div>
    </section>
  );
}
