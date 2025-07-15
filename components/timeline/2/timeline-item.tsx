import { Clock } from "lucide-react";
import Image from "next/image";
import type { TimelineData } from "@/lib/types";

interface TimelineItemProps {
  item: TimelineData;
  index: number;
  isLeft: boolean;
}

export default function TimelineItem({
  item,
  // index,
  isLeft,
}: TimelineItemProps) {
  const containerClass = `timeline-item relative flex flex-col md:flex-row items-center ${
    isLeft ? "md:flex-row" : "md:flex-row-reverse"
  }`;

  const contentClass = `w-full md:w-5/12 ${
    isLeft ? "md:pr-8 text-right" : "md:pl-8 text-left"
  }`;

  const datetimeClass = `mb-4 flex items-center gap-4 text-sm text-gray-500 ${
    isLeft ? "justify-end" : "justify-start"
  }`;

  return (
    <section className={containerClass}>
      <div className='absolute left-1/2 z-10 size-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-gradient-to-br from-rose-400 to-indigo-400 shadow-lg'></div>

      <div className={contentClass}>
        <div className='rounded-2xl border border-gray-100/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl'>
          <div className={datetimeClass}>
            <div className='flex items-center gap-1'>
              <Clock className='size-4' />
              <span>{item.time}</span>
            </div>
          </div>

          <h3 className='mb-3 font-serif text-xl font-semibold text-gray-800'>
            {item.title}
          </h3>
          <p className='mb-4 leading-relaxed text-gray-600'>
            {item.description}
          </p>

          <div className='overflow-hidden rounded-xl shadow-md'>
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={300}
              className='h-48 w-full object-cover'
            />
          </div>
        </div>
      </div>

      <div className='hidden md:block md:w-5/12'></div>
    </section>
  );
}
