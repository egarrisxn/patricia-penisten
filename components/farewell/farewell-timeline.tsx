"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { farewellTimelineItems } from "@/lib/data/farewell";
import type { FarewellTimelineItems } from "@/lib/types";

export default function FarewellTimeline() {
  const [selectedItem, setSelectedItem] =
    useState<FarewellTimelineItems | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleItemClick = (item: FarewellTimelineItems) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const navigateTimeline = (direction: "prev" | "next") => {
    if (!selectedItem) return;

    const currentIndex = farewellTimelineItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    let nextIndex;
    if (direction === "next") {
      nextIndex = (currentIndex + 1) % farewellTimelineItems.length;
    } else {
      nextIndex =
        (currentIndex - 1 + farewellTimelineItems.length) %
        farewellTimelineItems.length;
    }

    setSelectedItem(farewellTimelineItems[nextIndex]);
  };

  return (
    <>
      <div className='relative mx-auto max-w-6xl px-4 lg:px-8'>
        {/* Timeline line */}
        <div className='absolute left-4 h-full w-0.5 bg-gradient-to-b from-rose-200 via-blue-200 to-rose-200 md:left-1/2 md:-translate-x-1/2' />

        {farewellTimelineItems.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.id} className='relative mb-16 md:mb-24'>
              {/* Timeline dot */}
              <div className='absolute left-0 -translate-x-1/2 -translate-y-2 transform md:left-1/2'>
                <div className='size-3.5 rounded-full border-2 border-white bg-indigo-400 shadow-lg md:size-4 md:border-3'></div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className='relative'
              >
                <div
                  onClick={() => handleItemClick(item)}
                  className='group cursor-pointer pl-3 md:grid md:grid-cols-2 md:gap-12 md:pl-0'
                >
                  {/* Image */}
                  <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
                    <motion.div
                      layoutId={item.src}
                      className='dark:bg-card relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-white transition-shadow duration-300 group-hover:shadow-xl md:rounded-lg md:shadow-lg'
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt || "Farewell Tour Photo"}
                        fill
                        className='rounded-lg object-cover p-2 md:p-0'
                      />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div
                    className={`mt-0 ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className='text-card-foreground dark:bg-card rounded-b-lg bg-white p-6 shadow-lg transition-shadow duration-300 group-hover:shadow-xl md:rounded-lg md:hover:shadow-lg'>
                      <div className='mb-4 flex items-center'>
                        <div className='rounded-md bg-gradient-to-br from-blue-500/80 to-purple-700/80 px-2.5 py-1.5 text-xs font-medium text-white shadow-md'>
                          {item.time}
                        </div>
                      </div>
                      <h3 className='text-accent-foreground text-xl font-medium lg:text-2xl'>
                        {item.title}
                      </h3>
                      <p className='text-accent-foreground/90 mb-3 line-clamp-2 w-full pt-2 text-base lg:text-lg'>
                        {item.description}
                      </p>
                      <Button
                        variant='basic'
                        className='text-primary/90 hover:text-primary cursor-pointer px-0 pt-2 text-sm'
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}

        <div className='h-16 md:h-24'></div>

        {/* Final dot */}
        <div className='absolute left-4 -translate-x-1/2 -translate-y-2 transform md:left-1/2'>
          <div className='size-3.5 rounded-full border-2 border-white bg-indigo-400 shadow-lg md:size-4 md:border-3'></div>
        </div>
      </div>

      {/* Dialog Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className='max-w-4xl p-0'>
          {selectedItem && (
            <>
              <div className='relative aspect-[4/3] w-full overflow-hidden rounded-t-lg'>
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt || "Farewell Tour Photo"}
                  fill
                  className='object-cover'
                />
              </div>

              <div className='px-4 pt-1 pb-4'>
                <DialogHeader>
                  <DialogTitle className='text-accent-foreground truncate text-lg font-medium md:text-xl'>
                    {selectedItem.title || "Farewell Tour"}
                  </DialogTitle>
                  <DialogDescription className='text-accent-foreground/90 text-sm md:text-base'>
                    {selectedItem.time}
                  </DialogDescription>
                </DialogHeader>
                <div className='text-accent-foreground/80 mt-4 line-clamp-3 text-sm md:text-base'>
                  <p>{selectedItem.description || "With Patricia & Judi"}</p>
                </div>

                <div className='mt-6 flex justify-between gap-4 md:mt-4'>
                  <Button
                    onClick={() => navigateTimeline("prev")}
                    disabled={selectedItem.id === farewellTimelineItems[0].id}
                    variant='outline'
                    className='flex-1'
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => navigateTimeline("next")}
                    disabled={
                      selectedItem.id ===
                      farewellTimelineItems[farewellTimelineItems.length - 1].id
                    }
                    variant='outline'
                    className='flex-1'
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
