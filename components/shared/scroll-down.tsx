"use client";

import { ArrowDown } from "lucide-react";

interface ScrollDownProps {
  targetId: string;
  className?: string;
  ariaLabel?: string;
}

export default function ScrollDown({
  targetId,
  className = "",
  ariaLabel = "Scroll Down",
}: ScrollDownProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  // const handleClick = () => {
  //   document
  //     .querySelector(`#${targetId}`)
  //     ?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`${className} z-50 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 md:size-10`}
    >
      <ArrowDown size={20} />
    </button>
  );
}

// "use client";

// import { ArrowDown } from "lucide-react";
// import { smoothScrollTo } from "@/lib/utils";

// interface ScrollDownProps {
//   targetId: string;
//   className?: string;
//   ariaLabel?: string;
// }

// export default function ScrollDown({
//   targetId,
//   className = "",
//   ariaLabel = "Scroll Down",
// }: ScrollDownProps) {
//   const handleClick = () => {
//     const el = document.getElementById(targetId);
//     if (!el) return;

//     const top = el.getBoundingClientRect().top + window.scrollY;
//     smoothScrollTo(top, 800); // slower than native
//   };

//   return (
//     <button
//       onClick={handleClick}
//       aria-label={ariaLabel}
//       className={`${className} z-50 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 md:size-10`}
//     >
//       <ArrowDown size={20} />
//     </button>
//   );
// }
