"use client";

import { useEffect, useRef } from "react";
import { ChevronUp } from "lucide-react";

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
    document.querySelector("#home")?.scrollIntoView();
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className='pointer-events-none fixed right-5 bottom-4 z-50 rounded-full p-2 text-slate-950/70 opacity-0 transition-opacity duration-300 outline-none hover:text-black dark:text-slate-100/70 dark:hover:text-white'
    >
      <ChevronUp className='size-8' />
    </button>
  );
}
