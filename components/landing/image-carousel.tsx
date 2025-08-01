import { useState } from "react";
import Image from "next/image";
import { Clock, MessageCircle, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Carousel } from "@/components/ui/carousel";
import type { PhotoEntry } from "@/lib/types";

interface ImageCarouselProps {
  userPhotos: PhotoEntry[];
  approvedPhotos: PhotoEntry[];
}

export default function ImageCarousel({
  userPhotos,
  approvedPhotos,
}: ImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allPhotos = [
    ...userPhotos,
    ...approvedPhotos.filter(
      (approved) => !userPhotos.some((user) => user.id === approved.id)
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
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
          <MessageCircle className='size-6 md:size-12' />
        </div>
        <div className='text-foreground/90 mb-2 text-base font-semibold md:text-lg'>
          No Photos Gallery photos
        </div>
        <div className='text-muted-foreground/90 text-sm tracking-tight'>
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
          <DialogContent className='max-w-4xl p-0'>
            <div className='relative flex max-h-[85vh] min-h-[50vh] w-full items-center justify-center rounded-t-lg md:max-h-[80vh]'>
              <Image
                src={selectedPhoto.image_url}
                alt={selectedPhoto.caption || selectedPhoto.name || "Photo"}
                fill
                className='rounded-t-lg object-contain'
              />
            </div>
            <div className='max-h-[15vh] overflow-y-auto px-4 pt-1 pb-4'>
              <DialogHeader className='mb-2'>
                <DialogTitle className='text-foreground text-start text-base leading-[1.4] font-medium text-wrap md:mb-1.5 md:text-lg'>
                  {selectedPhoto.caption || "Untitled"}
                </DialogTitle>
              </DialogHeader>

              <div className='flex flex-col gap-1 text-sm'>
                {selectedPhoto.name && (
                  <div className='flex items-center gap-1'>
                    <User className='size-4' />
                    <p className='w-[80%] text-wrap'>{selectedPhoto.name}</p>
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
                <div className='absolute right-3 bottom-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
                  <div className='bg-primary mb-[1.5px] size-2 animate-pulse rounded-full md:size-[8.5px] 2xl:size-2.5'></div>{" "}
                  <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
                    Pending
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
