"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, ImageIcon, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PhotoUpload from "@/components/landing/photo-upload";
import type { Photo } from "@/lib/types";

interface PhotoGridProps {
  approvedPhotos: Photo[];
  userPhotos: Photo[];
  onPhotoSubmitted: (photo: Photo) => void;
}

export default function PhotoGrid({
  approvedPhotos,
  userPhotos,
  onPhotoSubmitted,
}: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const allPhotos = [
    ...approvedPhotos,
    ...userPhotos.filter(
      (p) =>
        p.status === "pending" && !approvedPhotos.some((ap) => ap.id === p.id)
    ),
  ];

  const isPending = (status: string) => status === "pending";

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhoto]);

  if (allPhotos.length === 0) {
    return (
      <div className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800'>
          <MessageCircle className='text-foreground/80 size-12' />
        </div>
        <p className='text-foreground/80 text-lg'>No Photos Gallery photos</p>
        <p className='text-foreground/70 text-sm'>
          Be the first to add a photo memory
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {allPhotos.map((photo) => (
          <div
            key={photo.id}
            className='group relative m-0 aspect-square cursor-pointer overflow-hidden rounded-lg border-white bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-slate-950'
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.image_url || "/placeholder.svg"}
              alt={photo.caption || photo.name || "Photo Gallery Photo"}
              className='size-auto cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'
              width={1200}
              height={800}
            />
            <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20'></div>
            {photo.caption && (
              <div className='absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <p className='truncate text-sm font-medium text-white'>
                  {photo.caption}
                </p>
              </div>
            )}
            {isPending(photo.status) && (
              <div className='absolute top-2 right-2 rounded-full bg-amber-400 px-2 py-1 text-xs text-slate-950'>
                <Clock className='mr-[1px] mb-[1px] inline-block size-3' />{" "}
                Pending
              </div>
            )}
          </div>
        ))}
        <PhotoUpload onPhotoSubmitted={onPhotoSubmitted} />
      </div>

      {/* Photo Dialog */}
      <Dialog
        open={!!selectedPhoto}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedPhoto(null);
          }
        }}
      >
        <DialogContent className='max-w-4xl p-0'>
          {selectedPhoto && (
            <>
              <Image
                src={selectedPhoto.image_url}
                alt={selectedPhoto.caption || selectedPhoto.name || "Photo"}
                width={1200}
                height={800}
                className='size-auto max-h-[80vh] rounded-t-lg object-contain'
              />
              <div className='p-4'>
                <DialogHeader>
                  <DialogTitle className='text-accent-foreground mb-2 truncate text-lg font-medium md:text-xl'>
                    {selectedPhoto.caption || "Untitled"}
                  </DialogTitle>
                </DialogHeader>
                <div className='text-accent-foreground/90 flex items-center justify-between text-sm'>
                  <div className='flex items-center gap-4'>
                    {selectedPhoto.name && (
                      <div className='flex items-center gap-1'>
                        <ImageIcon className='size-4' />
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
                    <div className='rounded-full bg-amber-400 px-2 py-1 text-xs text-slate-950'>
                      <Clock className='mr-[1px] mb-[1px] inline-block size-3' />{" "}
                      Pending
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
