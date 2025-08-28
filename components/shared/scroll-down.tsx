"use client";

import useSmoothScroll from "@/hooks/use-smooth-scroll";

export default function ScrollDownButton({ targetId }: { targetId: string }) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className='absolute bottom-5 left-1/2 z-50 -translate-x-1/2 animate-bounce rounded-full p-3 transition-transform hover:scale-110'
      aria-label='Scroll down'
    >
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        xmlns='http://www.w3.org/2000/svg'
        className='size-8 text-white drop-shadow-lg'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
      </svg>
    </button>
  );
}

// "use client";

// import { ArrowDown } from "lucide-react";

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
//     document.getElementById(targetId)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };
//   // const handleClick = () => {
//   //   document
//   //     .querySelector(`#${targetId}`)
//   //     ?.scrollIntoView({ behavior: "smooth" });
//   // };

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
