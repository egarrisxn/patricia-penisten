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
import { farewellTimelineItems, farewellQuote } from "@/lib/data/farewell";

import { FarewellTimelineItems } from "@/lib/types";

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
    <div className='mx-auto px-4 pb-4 xl:px-12 xl:pb-12'>
      <div className='relative'>
        {/* Timeline line */}
        <div className='absolute left-0 h-full w-0.5 bg-gradient-to-b from-rose-200 via-blue-200 to-rose-200 md:left-1/2 md:-translate-x-1/2' />

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
                      className='relative aspect-[4/3] w-full overflow-hidden rounded-t-lg transition-shadow duration-300 group-hover:shadow-lg md:rounded-lg md:shadow-lg dark:bg-card'
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt || "Farewell Tour Photo"}
                        fill
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='rounded-lg object-cover p-2 md:p-0'
                      />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <div
                    className={`mt-0 ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className='rounded-b-lg bg-card p-6 shadow-lg transition-shadow duration-300 group-hover:shadow-lg md:rounded-lg md:hover:shadow-lg lg:dark:border'>
                      <div className='mb-4 flex items-center'>
                        <div className='rounded-md bg-gradient-to-br from-blue-500/80 to-purple-700/80 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg md:px-2 md:py-1 lg:px-2.5 lg:py-1.5'>
                          {item.time}
                        </div>
                      </div>
                      <h3 className='text-xl font-medium text-accent-foreground md:text-lg lg:text-2xl'>
                        {item.title}
                      </h3>
                      <p className='mb-3 line-clamp-2 w-full pt-2 pr-4 text-base text-accent-foreground/90 xs:pr-12 sm:pr-24 md:pr-0 md:text-sm lg:text-lg'>
                        {item.body}
                      </p>
                      <Button
                        variant='basic'
                        className='cursor-pointer px-0 pt-2 text-sm text-primary/90 hover:text-primary md:pt-0 lg:pt-2'
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
        <div className='absolute left-[1px] -translate-x-1/2 -translate-y-2 transform md:left-1/2'>
          <div className='size-3.5 rounded-full border-2 border-white bg-indigo-400 shadow-lg md:size-4 md:border-3'></div>
        </div>
      </div>

      {/* Farewell Quote */}
      <div className='w-full px-4 md:mx-auto md:max-w-xs md:pt-4 lg:max-w-sm'>
        <p className='text-2xl italic md:mx-auto md:text-center lg:text-3xl'>
          {farewellQuote}
        </p>
      </div>

      {/* Dialog Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className='max-w-4xl bg-card p-0'>
          {selectedItem && (
            <>
              <div className='relative flex max-h-[75vh] min-h-[50vh] w-full items-center justify-center rounded-t-lg'>
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt || "Farewell Tour Photo"}
                  fill
                  sizes='(max-width: 768px) 100vw, 75vw'
                  className='rounded-t-lg object-cover'
                />
              </div>

              <div className='px-4 pt-1 pb-4'>
                <DialogHeader className='mb-3'>
                  <DialogTitle className='text-start text-base leading-[1.4] font-medium text-wrap text-foreground md:text-lg'>
                    {selectedItem.title || "Farewell Tour"}
                  </DialogTitle>
                  <DialogDescription className='ml-[1px] text-start text-xs leading-tight text-accent-foreground md:text-sm'>
                    {selectedItem.time}
                  </DialogDescription>
                </DialogHeader>
                <div className='mt-4 ml-[1px] line-clamp-3 pr-4 text-start text-sm leading-[1.4] font-medium text-wrap text-foreground md:text-base'>
                  <p>{selectedItem.body || "with Patricia & Judi"}</p>
                </div>

                <div className='mt-6 flex justify-between gap-4 md:mt-5'>
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
    </div>
  );
}
