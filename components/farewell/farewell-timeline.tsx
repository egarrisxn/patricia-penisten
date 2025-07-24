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
import { farewellTimelineItems } from "@/lib/data";
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
        <div className='absolute left-4 h-full w-0.5 bg-gradient-to-b from-rose-200 via-blue-200 to-rose-200 md:left-1/2 md:-translate-x-1/2'></div>

        {farewellTimelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className='relative mb-16 md:mb-24'
          >
            {/* Timeline dot */}
            <div className='absolute left-0 -translate-x-1/2 -translate-y-2 transform md:left-1/2'>
              <div className='size-3.5 rounded-full border-2 border-white bg-indigo-400 shadow-lg md:size-4 md:border-3'></div>
            </div>

            <div
              className={`group cursor-pointer pl-3 md:flex md:items-center md:pl-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}
              >
                <motion.div
                  layoutId={item.src}
                  className='dark:bg-card relative rounded-t-lg border-0 bg-white p-2 transition-shadow duration-300 group-hover:shadow-xl md:rounded-lg md:p-0.5 md:shadow-lg'
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt || "Farewell Tour Photo"}
                    width={800}
                    height={800}
                    className='h-full w-auto rounded-md object-cover'
                  />
                </motion.div>
              </div>
              <div
                className={`mt-0 md:mt-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className='text-card-foreground dark:bg-card rounded-b-lg bg-white p-6 shadow-lg backdrop-blur-xs transition-shadow duration-300 group-hover:shadow-xl md:rounded-lg md:hover:shadow-lg'>
                  <div className='mb-4 flex items-center'>
                    <div className='mb-4 rounded-md bg-gradient-to-br from-blue-500/80 to-purple-700/80 px-2.5 py-1.5 text-xs font-medium text-white shadow-md'>
                      {item.time}
                    </div>
                  </div>
                  <h3 className='text-accent-foreground text-xl font-medium lg:text-2xl'>
                    {item.title}
                  </h3>

                  <p className='text-accent-foreground/90 mb-3 line-clamp-2 w-full max-w-xs pt-2 text-base lg:max-w-md lg:text-lg'>
                    {item.description}
                  </p>
                  <Button
                    variant='link'
                    className='text-primary px-0 pt-2 text-sm'
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className='h-16 md:h-24'></div>
        {/* Timeline dot */}
        <div className='absolute left-4 -translate-x-1/2 -translate-y-2 transform md:left-1/2'>
          <div className='size-3.5 rounded-full border-2 border-white bg-indigo-400 shadow-lg md:size-4 md:border-3'></div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className='max-w-4xl p-0'>
          {selectedItem && (
            <>
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt || "Farewell Tour Photo"}
                width={1200}
                height={800}
                className='size-auto max-h-[60vh] w-full rounded-t-lg object-cover'
              />

              <div className='px-4 pt-1 pb-4'>
                <DialogHeader>
                  <DialogTitle className='text-accent-foreground mb-1 truncate text-lg font-medium md:mb-2 md:text-xl'>
                    {selectedItem.title || "Farewell Tour"}
                  </DialogTitle>
                  <DialogDescription className='text-accent-foreground/90 text-sm md:text-base'>
                    {selectedItem.time}
                  </DialogDescription>
                </DialogHeader>
                <div className='text-accent-foreground/90 mt-2 line-clamp-3 text-center text-sm md:text-base'>
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
