"use client";

import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollUpProps {
  className?: string;
  ariaLabel?: string;
}

export default function ScrollUp({
  className = "",
  ariaLabel = "Scroll Up",
}: ScrollUpProps) {
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
    const heroElement = document.getElementById("landing-hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    } else {
      const navbarHeight = 76;
      window.scrollTo({ top: navbarHeight * -1, behavior: "smooth" });
    }
  };

  return (
    <button
      ref={buttonRef}
      id='toggle-button'
      onClick={scrollToTop}
      aria-label={ariaLabel}
      className={`${className} pointer-events-none fixed right-4 bottom-4 z-50 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground opacity-0 transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 md:size-10`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
