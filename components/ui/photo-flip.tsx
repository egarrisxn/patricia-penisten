//! SCROLL & HOVER FLIP

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoFlipProps {
  frontSrc?: string;
  backSrc?: string;
  alt?: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  className?: string;
}

export const PhotoFlip = ({
  frontSrc = "/landing/flip-front.png",
  backSrc = "/landing/flip-back.png",
  alt = "Photo Flip",
  width = 300,
  height = 300,
  quality = 100,
  priority = false,
  className = "",
}: PhotoFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hoverQuery = window.matchMedia("(hover: hover)");
      setSupportsHover(hoverQuery.matches);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
      }
    };

    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const handleClick = () => {
    if (!supportsHover) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className='relative'
      style={{
        width,
        height,
        perspective: "2000px",
      }}
      onClick={handleClick}
      onMouseEnter={() => supportsHover && setIsFlipped(true)}
      onMouseLeave={() => supportsHover && setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative size-full cursor-pointer",
          "[transform-style:preserve-3d]",
          "transition-transform duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front Image */}
        <Image
          src={frontSrc}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          className={cn(
            "absolute inset-0 mx-auto object-cover [backface-visibility:hidden]",
            className
          )}
        />

        {/* Back Image */}
        <Image
          src={backSrc}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          className={cn(
            "absolute inset-0 mx-auto [transform:rotateY(180deg)] object-cover [backface-visibility:hidden]",
            className
          )}
        />
      </div>
    </div>
  );
};

//! HOVER & AUTOMATIC FLIP

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// interface PhotoFlipProps {
//   frontSrc: string;
//   backSrc: string;
//   alt?: string;
//   width?: number;
//   height?: number;
//   quality?: number;
//   autoFlipIntervalMs?: number;
// }

// export const PhotoFlip = ({
//   frontSrc,
//   backSrc,
//   alt = "Photo",
//   width = 300,
//   height = 300,
//   quality = 100,
//   autoFlipIntervalMs = 5000,
// }: PhotoFlipProps) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [supportsHover, setSupportsHover] = useState(true);
//   const intervalRef = useRef<number | null>(null);
//   const hoverRef = useRef(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const hoverQuery = window.matchMedia("(hover: hover)");
//       setSupportsHover(hoverQuery.matches);
//     }
//   }, []);

//   useEffect(() => {
//     const prefersReduced =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReduced) return;

//     const startInterval = () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//       intervalRef.current = window.setInterval(() => {
//         if (!hoverRef.current) {
//           setIsFlipped((prev) => !prev);
//         }
//       }, autoFlipIntervalMs);
//     };

//     startInterval();
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [autoFlipIntervalMs]);

//   const handleClick = () => {
//     if (!supportsHover) {
//       setIsFlipped((prev) => !prev);
//     }
//   };

//   return (
//     <div
//       className='relative'
//       style={{
//         width,
//         height,
//         perspective: "1200px",
//       }}
//       onClick={handleClick}
//       onMouseEnter={() => {
//         hoverRef.current = true;
//         supportsHover && setIsFlipped(true);
//       }}
//       onMouseLeave={() => {
//         hoverRef.current = false;
//         supportsHover && setIsFlipped(false);
//       }}
//     >
//       <div
//         className={cn(
//           "relative size-full cursor-pointer",
//           "[transform-style:preserve-3d]",
//           "transition-transform duration-700",
//           isFlipped
//             ? "[transform:rotateY(180deg)]"
//             : "[transform:rotateY(0deg)]"
//         )}
//       >
//         {/* Front Image */}
//         <Image
//           src={frontSrc}
//           alt={alt}
//           width={width}
//           height={height}
//           quality={quality}
//           className={cn(
//             "absolute inset-0 mx-auto mt-14 size-[80%] object-cover md:mt-9.5 md:mr-1 md:size-[75%] lg:mt-0 lg:mr-0 ",
//             "[backface-visibility:hidden]"
//           )}
//         />

//         {/* Back Image */}
//         <Image
//           src={backSrc}
//           alt={alt}
//           width={width}
//           height={height}
//           className={cn(
//             "absolute inset-0 mx-auto mt-14 size-[80%] object-cover md:mt-9.5 md:ml-1 md:size-[75%] lg:mt-0 lg:ml-0 ",
//             "[transform:rotateY(180deg)] [backface-visibility:hidden]"
//           )}
//         />
//       </div>
//     </div>
//   );
// };

//! HOVER FLIP
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// interface PhotoFlipProps {
//   frontSrc: string;
//   backSrc: string;
//   alt?: string;
//   width?: number;
//   height?: number;
//   quality?: number;
// }

// export const PhotoFlip = ({
//   frontSrc,
//   backSrc,
//   alt = "Photo",
//   width = 300,
//   height = 300,
//   quality = 100,
// }: PhotoFlipProps) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [supportsHover, setSupportsHover] = useState(true);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const hoverQuery = window.matchMedia("(hover: hover)");
//       setSupportsHover(hoverQuery.matches);
//     }
//   }, []);

//   const handleClick = () => {
//     if (!supportsHover) {
//       setIsFlipped((prev) => !prev);
//     }
//   };

//   return (
//     <div
//       className='relative'
//       style={{
//         width,
//         height,
//         perspective: "1200px",
//       }}
//       onClick={handleClick}
//       onMouseEnter={() => supportsHover && setIsFlipped(true)}
//       onMouseLeave={() => supportsHover && setIsFlipped(false)}
//     >
//       <div
//         className={cn(
//           "relative size-full cursor-pointer",
//           "[transform-style:preserve-3d]",
//           "transition-transform duration-700",
//           isFlipped
//             ? "[transform:rotateY(180deg)]"
//             : "[transform:rotateY(0deg)]"
//         )}
//       >
//         {/* Front Image */}
//         <Image
//           src={frontSrc}
//           alt={alt}
//           width={width}
//           height={height}
//           quality={quality}
//           className={cn(
//             "absolute inset-0 mx-auto mt-14 size-[80%] object-cover md:mt-9.5 md:mr-1 md:size-[75%] lg:mt-0 lg:mr-0 ",
//             "[backface-visibility:hidden]"
//           )}
//         />

//         {/* Back Image */}
//         <Image
//           src={backSrc}
//           alt={alt}
//           width={width}
//           height={height}
//           className={cn(
//             "absolute inset-0 mx-auto mt-14 size-[80%] object-cover md:mt-9.5 md:ml-1 md:size-[75%] lg:mt-0 lg:ml-0 ",
//             "[transform:rotateY(180deg)] [backface-visibility:hidden]"
//           )}
//         />
//       </div>
//     </div>
//   );
// };
