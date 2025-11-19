"use client";

import useSmoothScroll from "@/hooks/use-smooth-scroll";

export default function ScrollUpButton({ targetId }: { targetId: string }) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type="button"
      onClick={() => scrollTo(targetId)}
      className="fixed right-4 bottom-4 z-10 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 md:size-10"
      aria-label="Scroll up"
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6 text-foreground"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
