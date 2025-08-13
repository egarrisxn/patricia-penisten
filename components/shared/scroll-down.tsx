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
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`${className} text-foreground bg-card hover:bg-muted border-border z-50 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border transition-all duration-200 hover:scale-105 active:scale-95 md:size-10`}
    >
      <ArrowDown size={20} />
    </button>
  );
}
