import TimelineItem from "@/components/timeline/2/timeline-item";
import { timelineData } from "@/lib/data";

export default function TimelineSection() {
  return (
    <section className='container mx-auto px-4 pt-12 pb-6'>
      <div className='mx-auto max-w-4xl'>
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-1/2 h-full w-0.5 -translate-x-px transform bg-gradient-to-b from-rose-200 via-blue-200 to-indigo-200'></div>

          {/* Timeline items */}
          <div className='space-y-12'>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
