"use client";

import { ArrowDown } from "lucide-react";

interface ScrollDownProps {
  targetId: string;
  className?: string;
  ariaLabel?: string;
}

export function ScrollDown({
  targetId,
  className = "",
  ariaLabel = "Scroll Down",
}: ScrollDownProps) {
  const handleClick = () => {
    document
      .querySelector(`#${targetId}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className={`dark:bg-input/90 dark:hover:bg-input text-accent-foreground/90 hover:text-accent-foreground xs:size-10 z-50 mx-auto flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border-0 bg-white/90 shadow-lg transition-all hover:bg-white hover:shadow-xl ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <ArrowDown className='xs:size-6 size-5' />
    </button>
  );
}
