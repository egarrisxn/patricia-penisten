"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, ImageIcon, X } from "lucide-react";
import SectionHeader from "@/components/landing/section-header";
import PhotoUpload from "@/components/landing/photo-upload";
import type { Photo } from "@/lib/types";

interface PhotoGalleryProps {
  approvedPhotos: Photo[];
  userPhotos: Photo[];
  onPhotoSubmitted: (photo: Photo) => void;
}

export default function PhotoGallery({
  approvedPhotos,
  userPhotos,
  onPhotoSubmitted,
}: PhotoGalleryProps) {
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
    <div
      id='photos'
      className='bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          <SectionHeader
            header='Photo Gallery'
            subheader='Share your cherished memories with photos.'
          />
          <div className='grid grid-cols-1 gap-6 lg:gap-12'>
            {allPhotos.length > 0 ? (
              <section className='order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-1 lg:grid-cols-3'>
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
                        <Clock className='mr-1 inline-block size-3' /> Pending
                        (only you)
                      </div>
                    )}
                  </div>
                ))}
              </section>
            ) : (
              <section className='py-12 text-center'>
                <div className='bg-accent mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
                  <ImageIcon className='text-muted-foreground/70 size-12' />
                </div>
                <p className='text-muted-foreground/90 text-lg'>
                  No photos shared yet
                </p>
                <p className='text-muted-foreground/80 text-sm'>
                  Be the first to share a cherished memory
                </p>
              </section>
            )}

            {/* Photo Upload Form */}
            <section className='order-1 lg:order-2'>
              <PhotoUpload onPhotoSubmitted={onPhotoSubmitted} />
            </section>
          </div>

          {/* Photo Modal */}
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
                      alt={
                        selectedPhoto.caption || selectedPhoto.name || "Photo"
                      }
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
                            {new Date(
                              selectedPhoto.created_at
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
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
        </div>
      </div>
    </div>
  );
}
