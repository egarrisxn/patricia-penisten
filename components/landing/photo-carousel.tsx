"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel } from "@/components/ui/carousel";
import type { PhotoEntry } from "@/lib/types";

interface PhotoCarouselProps {
  photos: PhotoEntry[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const slides = photos.map((photo) => ({
    src: photo.image_url,
    title: photo.caption || photo.name || "Untitled",
    button: photo.status === "pending" ? "Pending Approval" : "View Photo",
    status: photo.status,
  }));

  const openDialogAt = (index: number) => setSelectedIndex(index);
  const closeDialog = () => setSelectedIndex(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      <Carousel slides={slides} onSlideClick={openDialogAt} />

      <Dialog open={selectedIndex !== null} onOpenChange={closeDialog}>
        <DialogContent className='max-w-4xl p-0'>
          {selectedPhoto && (
            <>
              <Image
                src={selectedPhoto.image_url}
                alt={selectedPhoto.caption || selectedPhoto.name || "Photo"}
                width={1200}
                height={800}
                className='size-auto max-h-[60vh] w-full rounded-t-lg object-cover'
              />
              <div className='px-4 pt-1 pb-4'>
                <DialogHeader>
                  <DialogTitle className='text-accent-foreground mb-0.5 truncate text-start text-lg font-medium md:mb-1.5 md:text-xl'>
                    {selectedPhoto.caption || "Untitled"}
                  </DialogTitle>
                </DialogHeader>
                <div className='text-accent-foreground/90 flex items-center justify-between text-sm'>
                  <div className='flex items-center gap-4'>
                    {selectedPhoto.name && (
                      <div className='flex items-center gap-1'>
                        <Clock className='size-4' />
                        <span>{selectedPhoto.name}</span>
                      </div>
                    )}
                    <div className='flex items-center gap-1'>
                      <Clock className='size-4' />
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
                    <div className='flex items-center gap-1 rounded-full bg-amber-400 px-2 py-1 text-xs text-slate-950'>
                      <Clock className='inline-block size-3' /> Pending
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
