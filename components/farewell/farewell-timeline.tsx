"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { farewellTimelineItem } from "@/lib/data";
import type { FarewellTimelineItem } from "@/lib/types";

export default function FarewellTimeline() {
  const [selectedItem, setSelectedItem] = useState<FarewellTimelineItem | null>(
    null
  );

  const handleImageClick = (item: FarewellTimelineItem) => {
    setSelectedItem(item);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <div>
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        {/* Timeline line */}
        <div className='absolute left-4 h-full w-0.5 bg-gradient-to-b from-rose-200 via-blue-200 to-rose-200 md:left-1/2 md:-translate-x-1/2'></div>

        {farewellTimelineItem.map((item, index) => (
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

            {/* Timeline content */}
            <div
              className={`pl-3 md:flex md:items-center md:pl-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                }`}
              >
                <motion.div
                  layoutId={item.src}
                  className='dark:bg-card md:dark:border-border relative rounded-t-xl bg-white p-2 md:rounded-xl md:border md:border-white/20 md:p-0 md:shadow-lg md:hover:shadow-xl'
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt || "Farewell Tour Photo"}
                    width={600}
                    height={400}
                    className='h-64 w-full cursor-pointer rounded-lg object-cover md:h-80'
                    onClick={() => handleImageClick(item)}
                  />
                </motion.div>
              </div>
              <div
                className={`mt-0 md:mt-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className='dark:bg-card md:dark:border-border text-card-foreground rounded-b-xl bg-white p-6 shadow-lg backdrop-blur-xs hover:shadow-xl md:rounded-xl md:hover:shadow-lg'>
                  <div className='mb-4 flex items-center'>
                    <div className='mb-4 rounded-xl bg-gradient-to-br from-blue-500/80 to-purple-700/80 px-2.5 py-1.5 text-xs font-medium text-white'>
                      {item.time}
                    </div>
                  </div>
                  <h3 className='text-accent-foreground text-xl font-medium lg:text-2xl'>
                    {item.title}
                  </h3>
                  <p className='text-accent-foreground/90 mb-3 w-full max-w-xs pt-2 text-base lg:max-w-md lg:text-lg'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className='h-16 md:h-24'></div>
      </div>

      {/* Photo Dialog */}
      <Dialog
        open={!!selectedItem}
        onOpenChange={(open) => {
          if (!open) {
            handleCloseDialog();
          }
        }}
      >
        <DialogContent className='max-w-4xl p-0'>
          {selectedItem && (
            <>
              <div>
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt || "Farewell Tour Photo"}
                  width={1200}
                  height={800}
                  className='size-auto max-h-[80vh] rounded-t-lg object-contain'
                />
              </div>
              <div className='p-4'>
                <DialogHeader>
                  <DialogTitle className='text-accent-foreground mb-2 truncate text-lg font-medium md:text-xl'>
                    {selectedItem.title || "Farewell Tour"}
                  </DialogTitle>
                </DialogHeader>
                <div className='text-accent-foreground/90 text-sm md:text-base'>
                  <p>{selectedItem.description || "With Patricia & Judi"}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
