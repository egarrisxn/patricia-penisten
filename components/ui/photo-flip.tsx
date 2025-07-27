"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoFlipProps {
  frontSrc: string;
  backSrc: string;
  alt?: string;
  width?: number;
  height?: number;
  quality?: number;
}

export default function PhotoFlip({
  frontSrc,
  backSrc,
  alt = "Photo",
  width = 300,
  height = 300,
  quality = 100,
}: PhotoFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hoverQuery = window.matchMedia("(hover: hover)");
      setSupportsHover(hoverQuery.matches);
    }
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
        perspective: "1200px",
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
          className={cn(
            "absolute inset-0 mx-auto mt-14 size-[80%] object-cover md:mt-9.5 md:mr-1 md:size-[75%] lg:mt-0 lg:mr-0 lg:size-full",
            "[backface-visibility:hidden]"
          )}
        />

        {/* Back Image */}
        <Image
          src={backSrc}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "absolute inset-0 mx-auto mt-14 size-[80%] object-cover md:mt-9.5 md:ml-1 md:size-[75%] lg:mt-0 lg:ml-0 lg:size-full",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]"
          )}
        />
      </div>
    </div>
  );
}
