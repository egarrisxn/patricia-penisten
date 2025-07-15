"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { timelineData } from "@/lib/data";

export default function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

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
    <div className='relative mx-auto max-w-6xl px-4 pb-20'>
      {/* Timeline line */}
      <div className='absolute left-1/2 hidden h-full w-0.5 -translate-x-px transform bg-linear-to-b from-rose-200 via-blue-200 to-rose-200 md:block'></div>

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
          <div className='absolute left-1/2 hidden -translate-x-1/2 -translate-y-2 transform md:block'>
            <div className='h-4 w-4 rounded-full border-4 border-rose-300 bg-white shadow-lg'></div>
          </div>

          {/* Content */}
          <div
            className={`md:flex md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div
              className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
            >
              <div className='group relative'>
                <div className='absolute inset-0 rotate-1 transform rounded-2xl bg-linear-to-br from-rose-200/20 to-blue-200/20 transition-transform duration-300 group-hover:rotate-2'></div>
                <div className='relative rounded-2xl bg-white p-2 shadow-xl'>
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className='h-64 w-full rounded-xl object-cover md:h-80'
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div
              className={`mt-6 md:mt-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
            >
              <div className='rounded-2xl border border-white/20 bg-white/80 p-8 shadow-lg backdrop-blur-xs'>
                <div className='mb-4 flex items-center'>
                  <div className='rounded-full bg-linear-to-r from-rose-500 to-blue-500 px-4 py-2 text-sm font-medium text-white'>
                    {item.time}
                  </div>
                </div>
                <h3 className='mb-4 text-2xl font-light text-gray-800'>
                  {item.title}
                </h3>
                <p className='text-lg leading-relaxed text-gray-600'>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
