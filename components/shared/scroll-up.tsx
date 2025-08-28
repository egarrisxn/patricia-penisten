"use client";

import useSmoothScroll from "@/hooks/use-smooth-scroll";

export default function ScrollUpButton({ targetId }: { targetId: string }) {
  const scrollTo = useSmoothScroll();

  //  className='pointer-events-none fixed right-4 bottom-4 z-50 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground opacity-0 transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 md:size-10'

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      // className='fixed right-4 bottom-4 z-10 cursor-pointer rounded-full bg-white p-3 text-foreground shadow-lg transition-transform hover:scale-110 dark:bg-black dark:shadow-none'
      className='fixed right-4 bottom-4 z-10 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 md:size-10'
      aria-label='Scroll up'
    >
      <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
        className='size-6 text-foreground'
      >
        <path d='M5 15l7-7 7 7' />
      </svg>
    </button>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import { ArrowUp } from "lucide-react";

// interface ScrollUpProps {
//   className?: string;
//   ariaLabel?: string;
// }

// export default function ScrollUp({
//   className = "",
//   ariaLabel = "Scroll Up",
// }: ScrollUpProps) {
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (!buttonRef.current) return;
//       if (window.scrollY > 500) {
//         buttonRef.current.classList.replace("opacity-0", "opacity-100");
//         buttonRef.current.classList.remove("pointer-events-none");
//       } else {
//         buttonRef.current.classList.replace("opacity-100", "opacity-0");
//         buttonRef.current.classList.add("pointer-events-none");
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     toggleVisibility();
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   // const scrollToTop = () => {
//   //   const heroElement = document.getElementById("landing-hero");
//   //   if (heroElement) {
//   //     heroElement.scrollIntoView({ behavior: "smooth" });
//   //   } else {
//   //     const navbarHeight = 76;
//   //     window.scrollTo({ top: navbarHeight * -1, behavior: "smooth" });
//   //   }
//   // };
//   // const scrollToTop = () => {
//   //   document.getElementById("landing-hero")?.scrollIntoView({
//   //     behavior: "smooth",
//   //     block: "start",
//   //   });
//   // };

//   return (
//     <button
//       ref={buttonRef}
//       id='toggle-button'
//       onClick={scrollToTop}
//       aria-label={ariaLabel}
//       className={`${className} pointer-events-none fixed right-4 bottom-4 z-50 inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-card text-foreground opacity-0 transition-all duration-200 hover:scale-105 hover:bg-muted active:scale-95 md:size-10`}
//     >
//       <ArrowUp size={20} />
//     </button>
//   );
// }
