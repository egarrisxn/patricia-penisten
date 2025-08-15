import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function smoothScrollTo(targetY: number, duration: number) {
//   const startY = window.scrollY;
//   const diff = targetY - startY;
//   let start: number | null = null;

//   const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

//   function step(timestamp: number) {
//     if (start === null) start = timestamp;
//     const time = timestamp - start;
//     const percent = easeOutCubic(Math.min(time / duration, 1));
//     window.scrollTo(0, startY + diff * percent);
//     if (time < duration) {
//       requestAnimationFrame(step);
//     }
//   }

//   requestAnimationFrame(step);
// }
