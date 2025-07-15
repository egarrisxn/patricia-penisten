"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { timelineData } from "@/lib/data";

export default function TimelineContent() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [altText, setAltText] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(
              entry.target.getAttribute("data-id") || "0"
            );
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll("[data-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='min-h-screen bg-linear-to-br from-rose-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'>
      <div className='relative mx-auto max-w-6xl px-4'>
        {/* Timeline line */}
        <div className='absolute left-4 h-full w-0.5 bg-gradient-to-b from-rose-200 via-blue-200 to-rose-200 md:left-1/2 md:-translate-x-1/2'></div>
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            className={`relative mb-16 transition-all duration-1000 md:mb-24 ${
              visibleItems.includes(item.id)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Timeline dot */}
            <div className='absolute left-0 -translate-x-1/2 -translate-y-2 transform md:left-1/2'>
              <div className='size-3.5 rounded-full border-2 border-white bg-indigo-400 shadow-lg md:size-4 md:border-3'></div>
            </div>

            {/* Content */}
            <div
              className={`pl-3 md:flex md:items-center md:pl-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
              >
                <div className='dark:bg-card relative rounded-t-xl bg-white p-2.5 md:rounded-2xl md:p-0.5 md:shadow-lg md:hover:shadow-xl'>
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className='h-64 w-full cursor-pointer rounded-xl object-cover md:h-80'
                    onClick={() => {
                      setEnlargedImage(item.src || "/placeholder.svg");
                      setAltText(item.alt);
                    }}
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`mt-0 md:mt-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <div className='dark:bg-card dark:md:border-border text-card-foreground rounded-b-2xl bg-white p-6 shadow-xl backdrop-blur-xs hover:shadow-2xl md:rounded-2xl md:border md:border-white/20 md:shadow-lg md:hover:shadow-lg'>
                  <div className='mb-4 flex items-center'>
                    <div className='mb-4 rounded-2xl bg-linear-to-r from-rose-500 to-blue-500 px-3 py-1.5 text-xs font-medium text-white'>
                      {item.time}
                    </div>
                  </div>
                  <h3 className='text-foreground mb-3 pl-2 text-3xl'>
                    {item.title}
                  </h3>
                  <p className='text-foreground/70 mb-3 pl-2 text-lg'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='h-16 md:h-24'></div>
      </div>

      {enlargedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
          onClick={() => setEnlargedImage(null)}
        >
          <div className='relative max-h-[90vh] w-full max-w-4xl'>
            <button
              onClick={() => setEnlargedImage(null)}
              className='absolute -top-12 right-0 text-white transition-colors hover:text-gray-300'
            >
              <X className='size-8' />
            </button>
            <Image
              src={enlargedImage}
              alt={altText}
              width={1200}
              height={800}
              className='h-auto max-h-[90vh] w-auto rounded-xl object-contain'
            />
          </div>
        </div>
      )}
    </div>
  );
}
