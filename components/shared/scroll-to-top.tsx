"use client";

import { useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTopButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (!buttonRef.current) return;
      if (window.scrollY > 500) {
        buttonRef.current.classList.remove("opacity-0", "pointer-events-none");
        buttonRef.current.classList.add("opacity-100");
      } else {
        buttonRef.current.classList.remove("opacity-100");
        buttonRef.current.classList.add("opacity-0", "pointer-events-none");
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    document.querySelector("#hero")?.scrollIntoView();
  };

  return (
    <Button
      ref={buttonRef}
      onClick={scrollToTop}
      size='icon'
      variant='basic'
      className='text-foreground/80 hover:text-foreground pointer-events-none fixed right-4 bottom-4 z-50 cursor-pointer opacity-0 transition-opacity duration-300'
    >
      <ChevronUp className='size-6 lg:size-8' />
    </Button>
  );
}
