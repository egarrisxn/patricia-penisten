"use client";

import { ArrowDown } from "lucide-react";

export function ScrollDownHero() {
  const scrollDownHero = () => {
    document.querySelector("#herstory")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className='animate-slow-bounce xs:size-10 z-50 mx-auto flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border-0 bg-[#3d435450] text-[#bfdbfe] shadow-lg hover:bg-[#3d435485] hover:text-[#bfdbfe] hover:shadow-xl dark:bg-[#3d435450] dark:text-[#bfdbfe] dark:hover:bg-[#3d435485] dark:hover:text-[#bfdbfe]'
      onClick={scrollDownHero}
      aria-label='Scroll down'
    >
      <ArrowDown className='xs:size-6 size-5' />
    </button>
  );
}

export function ScrollDownFarewell() {
  const scrollDownFarewell = () => {
    document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className='dark:bg-input/30 animate-slow-bounce dark:hover:bg-input/50 text-accent-foreground/90 hover:text-accent-foreground xs:size-10 z-50 mx-auto flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border-0 bg-white/95 shadow-lg transition-all hover:bg-white hover:shadow-xl'
      onClick={scrollDownFarewell}
      aria-label='Scroll down'
    >
      <ArrowDown className='xs:size-6 size-5' />
    </button>
  );
}
