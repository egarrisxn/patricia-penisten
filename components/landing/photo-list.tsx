"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, MessageCircle, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel } from "@/components/landing/photo-carousel";
import FlagAdmin from "@/components/shared/flag-admin";

import type { PhotoEntry } from "@/lib/types";

interface PhotoListProps {
  userPhotos: PhotoEntry[];
  approvedPhotos: PhotoEntry[];
}

export default function PhotoList({
  userPhotos,
  approvedPhotos,
}: PhotoListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allPhotos = [
    ...userPhotos.filter((photo) => photo.status !== "denied"),
    ...approvedPhotos.filter(
      (photo) =>
        photo.status === "approved" &&
        !userPhotos.some((userPhoto) => userPhoto.id === photo.id)
    ),
  ];

  const slides = allPhotos.map((photo) => ({
    src: photo.image_url,
    title: photo.caption || photo.name || "Untitled",
    button: photo.status === "pending" ? "Pending Approval" : "View Photo",
    status: photo.status,
  }));

  const openDialogAt = (index: number) => setSelectedIndex(index);
  const closeDialog = () => setSelectedIndex(null);

  const selectedPhoto =
    selectedIndex !== null ? allPhotos[selectedIndex] : null;

  if (allPhotos.length === 0) {
    return (
      <div className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex items-center justify-center'>
          <MessageCircle className='size-6 md:size-12' />
        </div>
        <div className='mb-2 text-base font-semibold text-foreground/90 md:text-lg'>
          No Photos Gallery photos
        </div>
        <div className='text-sm tracking-tight text-muted-foreground/90 md:text-base'>
          Be the first to add a photo memory
        </div>
      </div>
    );
  }

  return (
    <>
      <Carousel slides={slides} onSlideClick={openDialogAt} />

      {selectedPhoto && (
        <Dialog open={selectedIndex !== null} onOpenChange={closeDialog}>
          <DialogContent className='max-w-4xl bg-card p-0'>
            <div className='relative flex max-h-[70vh] min-h-[50vh] w-full items-center justify-center rounded-t-lg'>
              <Image
                src={selectedPhoto.image_url}
                alt={
                  selectedPhoto.caption ||
                  selectedPhoto.name ||
                  "Uploaded Photo"
                }
                fill
                sizes='(max-width: 768px) 100vw, 75vw'
                className='rounded-t-lg object-cover'
              />
            </div>

            <div className='max-h-[20vh] overflow-y-auto px-4 pt-0.5 pb-4'>
              <DialogHeader className='mb-3.5'>
                <DialogTitle className='text-start text-base leading-[1.4] font-medium text-wrap text-foreground'>
                  {selectedPhoto.caption || "In loving memory."}
                </DialogTitle>
              </DialogHeader>

              <div className='flex flex-col gap-1 text-sm'>
                {selectedPhoto.name && (
                  <div className='flex items-center gap-1'>
                    <User size={16} className='text-accent-foreground' />
                    <p className='w-[80%] text-wrap'>{selectedPhoto.name}</p>
                  </div>
                )}
                <div className='flex items-center gap-1'>
                  <Clock size={16} className='text-accent-foreground' />
                  <span>
                    {new Date(selectedPhoto.created_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
              {selectedPhoto.status === "pending" && (
                <div className='absolute right-3 bottom-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
                  <div className='mb-[1.5px] size-2 animate-pulse rounded-full bg-primary md:size-[8.5px] 2xl:size-2.5'></div>{" "}
                  <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
                    Pending
                  </div>
                </div>
              )}
              {selectedPhoto.status === "approved" && (
                <div className='absolute right-3 bottom-3'>
                  <FlagAdmin
                    itemId={selectedPhoto.id}
                    table='photos'
                    initiallyFlagged={selectedPhoto.flagged}
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
