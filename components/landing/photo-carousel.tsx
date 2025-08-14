"use client";

import { useState, useRef, useEffect, useId } from "react";
import Image from "next/image";
import { motion, useAnimation } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { PhotoSlideData } from "@/lib/types";

interface SlideProps {
  slide: PhotoSlideData;
  index: number;
  current: number;
  onButtonClick: (index: number) => void;
}

const Slide = ({ slide, index, current, onButtonClick }: SlideProps) => {
  return (
    <li
      className='relative z-10 mx-[4vmin] flex h-[70vmin] w-[70vmin] flex-shrink-0 flex-col items-center justify-center text-center text-white opacity-100 transition-transform duration-300 ease-in-out'
      style={{
        transform:
          current === index
            ? "scale(1) rotateX(0deg)"
            : "scale(0.98) rotateX(8deg)",
        transformOrigin: "bottom",
      }}
    >
      <div className='absolute top-0 left-0 size-full overflow-hidden rounded-[1%] bg-[#1D1F2F] transition-all duration-150 ease-out'>
        <Image
          src={slide.src || "/placeholder.svg"}
          alt={slide.title || "Carousel Image"}
          fill
          className='absolute inset-0 object-cover'
          style={{
            opacity: current === index ? 1 : 0.5,
            pointerEvents: "none",
          }}
          priority={current === index}
        />
        {current === index && slide.status === "pending" && (
          <div className='absolute top-3 left-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
            <div className='mb-[1.5px] size-2 animate-pulse rounded-full bg-primary md:size-[8.5px] 2xl:size-2.5'></div>{" "}
            <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
              Pending
            </div>
          </div>
        )}
      </div>

      <article
        className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
          current === index ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ pointerEvents: "auto" }}
      >
        <h2 className='relative line-clamp-3 text-sm font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
          {slide.title}
        </h2>
        <div className='mt-2 flex justify-center'>
          <Button
            className='cursor-pointer bg-foreground/90 text-background/90 hover:bg-foreground hover:text-background'
            size='lg'
            variant='default'
            onClick={(e) => {
              e.stopPropagation();
              onButtonClick(index);
            }}
            aria-label={`Open photo: ${slide.title}`}
          >
            {slide.button}
          </Button>
        </div>
      </article>
    </li>
  );
};

interface CarouselProps {
  slides: PhotoSlideData[];
  onSlideClick?: (index: number) => void;
  prependSlide?: React.ReactNode;
}

export function Carousel({ slides, onSlideClick }: CarouselProps) {
  const filteredSlides = slides.filter(
    (slide) => slide.status === "pending" || slide.status === "approved"
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLUListElement>(null);
  const controls = useAnimation();

  const [slideWidth, setSlideWidth] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !slidesRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const slideEl = slidesRef.current.querySelector("li");

      if (!slideEl) return;

      const style = window.getComputedStyle(slideEl);
      const marginLeft = parseFloat(style.marginLeft) || 0;
      const marginRight = parseFloat(style.marginRight) || 0;

      const singleSlideWidth = slideEl.offsetWidth + marginLeft + marginRight;
      setSlideWidth(singleSlideWidth);

      const totalSlidesWidth = singleSlideWidth * filteredSlides.length;
      const maxDrag = totalSlidesWidth - containerWidth;

      setDragConstraints({ left: maxDrag > 0 ? -maxDrag : 0, right: 0 });

      controls.start({
        x: -current * singleSlideWidth,
        transition: { duration: 0.3 },
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [filteredSlides.length, current, controls]);

  const clampIndex = (index: number) =>
    Math.min(Math.max(index, 0), filteredSlides.length - 1);

  const setCurrentIndex = (index: number) => {
    const clamped = clampIndex(index);
    setCurrent(clamped);
    controls.start({
      x: -clamped * slideWidth,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const handlePreviousClick = () => setCurrentIndex(current - 1);
  const handleNextClick = () => setCurrentIndex(current + 1);

  const handleSlideClick = (index: number) => {
    if (index !== current) {
      setCurrentIndex(index);
    }
    onSlideClick?.(index);
  };

  const id = useId();

  return (
    <div
      ref={containerRef}
      className='relative mx-auto h-[70vmin] w-[70vmin]'
      aria-labelledby={`carousel-heading-${id}`}
      style={{ userSelect: isDragging ? "none" : "auto" }}
    >
      <motion.ul
        ref={slidesRef}
        drag='x'
        dragConstraints={dragConstraints}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(_, info) => {
          setIsDragging(false);
          const offsetX = info.offset.x;
          const velocityX = info.velocity.x;

          const movedSlides = -offsetX / slideWidth;
          let newIndex = Math.round(current + movedSlides);

          if (velocityX < -500) {
            newIndex = current + 1;
          } else if (velocityX > 500) {
            newIndex = current - 1;
          }

          newIndex = clampIndex(newIndex);
          setCurrent(newIndex);

          controls.start({
            x: -newIndex * slideWidth,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          });
        }}
        className='absolute mx-[-4vmin] flex'
        animate={controls}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {filteredSlides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            onButtonClick={handleSlideClick}
          />
        ))}
      </motion.ul>

      {/* Controls */}
      <div className='absolute top-[calc(100%+1rem)] flex w-full justify-center'>
        <button
          className='mx-2 flex size-10 rotate-180 items-center justify-center rounded-full border-3 border-transparent bg-card transition duration-200 hover:-translate-y-0.5 focus:border-primary focus:outline-none active:translate-y-0.5'
          name='Previous Slide'
          onClick={handlePreviousClick}
        >
          <ArrowRight className='tex-foreground' />
        </button>
        <button
          className='mx-2 flex size-10 items-center justify-center rounded-full border-3 border-transparent bg-card transition duration-200 hover:-translate-y-0.5 focus:border-primary focus:outline-none active:translate-y-0.5'
          name='Next Slide'
          onClick={handleNextClick}
        >
          <ArrowRight className='text-foreground' />
        </button>
      </div>
    </div>
  );
}
