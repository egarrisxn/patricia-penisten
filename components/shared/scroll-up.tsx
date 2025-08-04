"use client";

import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollUp() {
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
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      id='toggle-button'
      className='text-foreground xs:size-10 bg-card hover:bg-muted border-border pointer-events-none fixed right-4 bottom-4 z-50 mx-auto hidden size-9 cursor-pointer items-center justify-center rounded-lg border opacity-0 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 lg:flex'
      aria-label='Scroll to top'
    >
      <ArrowUp className='xs:size-6 size-5' />
    </button>
  );
}
