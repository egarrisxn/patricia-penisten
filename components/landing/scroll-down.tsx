"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollDownButton() {
  const scrollDown = () => {
    document.querySelector("#lifestory")?.scrollIntoView();
  };

  return (
    <button
      className='z-50 animate-bounce rounded-full p-2 text-slate-100/70 transition-colors duration-200 outline-none hover:text-white'
      onClick={scrollDown}
    >
      <ChevronDown className='size-8' />
    </button>
  );
}
