"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollDownButton() {
  const scrollDown = () => {
    document
      .querySelector("#lifestory")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      size='icon'
      variant='basic'
      className='z-50 animate-bounce cursor-pointer text-slate-100/70 transition-colors duration-200 hover:text-white'
      onClick={scrollDown}
    >
      <ChevronDown className='size-6 lg:size-8' />
    </Button>
  );
}
