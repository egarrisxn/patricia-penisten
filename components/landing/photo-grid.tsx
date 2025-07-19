"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, ImageIcon, X } from "lucide-react";
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

  return (
    <>
      <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {allPhotos.map((photo) => (
          <div
            key={photo.id}
            className='group bg-accent relative aspect-square cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg'
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.image_url}
              alt={photo.caption || photo.name || "Photo"}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
              sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
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
              <div className='absolute top-2 right-2 rounded-full bg-yellow-200 px-2 py-0.5 text-xs text-yellow-800'>
                <Clock className='mr-1 inline-block size-3' /> Pending (only
                you)
              </div>
            )}
          </div>
        ))}
        <PhotoUpload onPhotoSubmitted={onPhotoSubmitted} />
      </section>

      {selectedPhoto && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'>
          <div className='relative max-h-[90vh] w-full max-w-4xl'>
            <button
              onClick={() => setSelectedPhoto(null)}
              className='absolute -top-12 right-0 text-white transition-colors hover:text-gray-300'
            >
              <X className='size-8' />
            </button>

            <div className='overflow-hidden rounded-2xl bg-white shadow-2xl'>
              <div className='relative aspect-video max-h-[60vh]'>
                <Image
                  src={selectedPhoto.image_url}
                  alt={selectedPhoto.caption || selectedPhoto.name || "Photo"}
                  fill
                  className='object-contain'
                  sizes='(max-width: 1024px) 100vw, 80vw'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-accent-foreground mb-2 text-xl font-medium'>
                  {selectedPhoto.caption || "..."}
                </h3>
                <div className='text-muted-foreground/80 flex items-center justify-between text-sm'>
                  <div className='flex items-center gap-4'>
                    {selectedPhoto.name && (
                      <div className='flex items-center gap-1'>
                        <ImageIcon className='size-4' />
                        <span>{selectedPhoto.name || "Anonymous"}</span>
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
                    <span className='text-xs text-yellow-600'>
                      Pending (only you)
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
