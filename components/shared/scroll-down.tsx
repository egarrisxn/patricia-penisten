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
      className={`text-foreground bg-card hover:bg-muted border-border z-50 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 lg:size-10 ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      <ArrowDown className='size-5 lg:size-6' />
    </button>
  );
}
