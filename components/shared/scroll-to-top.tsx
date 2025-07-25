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
        buttonRef.current.classList.replace("opacity-0", "opacity-100");
        buttonRef.current.classList.remove("pointer-events-none");
      } else {
        buttonRef.current.classList.replace("opacity-100", "opacity-0");
        buttonRef.current.classList.add("pointer-events-none");
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Button
      ref={buttonRef}
      onClick={scrollToTop}
      id='toggle-button'
      size='icon'
      variant='basic'
      className='text-foreground/80 hover:text-foreground pointer-events-none fixed right-4 bottom-4 z-50 hidden cursor-pointer opacity-0 transition-opacity duration-300 lg:block'
      aria-label='Scroll to top'
    >
      <ChevronUp className='size-6 lg:size-8' />
    </Button>
  );
}
