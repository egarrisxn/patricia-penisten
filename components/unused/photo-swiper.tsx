// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Clock, ImageIcon, MessageCircle } from "lucide-react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { ImageSwiper } from "@/components/unused/image-swiper";
// import PhotoUpload from "@/components/landing/photo-upload";
// import type { PhotoEntry } from "@/lib/types";

// interface PhotoSwiperProps {
//   approvedPhotos: PhotoEntry[];
//   userPhotos: PhotoEntry[];
//   onPhotoSubmitted: (photo: PhotoEntry) => void;
// }

// export default function PhotoSwiper({
//   approvedPhotos,
//   userPhotos,
//   onPhotoSubmitted,
// }: PhotoSwiperProps) {
//   const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);
//   const [imgIndex, setImgIndex] = useState(0);

//   const allPhotos = [
//     ...approvedPhotos,
//     ...userPhotos.filter(
//       (p) =>
//         p.status === "pending" && !approvedPhotos.some((ap) => ap.id === p.id)
//     ),
//   ];

//   const currentPhoto = allPhotos[imgIndex];

//   if (allPhotos.length === 0) {
//     return (
//       <div className='pt-20 pb-24 text-center'>
//         <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
//           <MessageCircle className='text-foreground/80 size-12' />
//         </div>
//         <p className='text-foreground/80 text-lg'>No Photo Gallery photos</p>
//         <p className='text-foreground/70 text-sm'>
//           Be the first to add a photo memory
//         </p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className='relative mx-auto max-w-2xl'>
//         <div className='relative'>
//           <Dialog
//             open={!!selectedPhoto}
//             onOpenChange={(open) => !open && setSelectedPhoto(null)}
//           >
//             <div className='relative mx-auto max-w-2xl'>
//               <div className='relative'>
//                 <ImageSwiper
//                   images={allPhotos.map(
//                     (p) => p.image_url || "/placeholder.svg"
//                   )}
//                   className='rounded-lg'
//                   imgIndex={imgIndex}
//                   setImgIndex={setImgIndex}
//                 />

//                 <DialogTrigger asChild>
//                   <button
//                     onClick={() => setSelectedPhoto(currentPhoto)}
//                     onPointerDown={(e) => e.stopPropagation()}
//                     className='absolute right-2 bottom-2 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80'
//                   >
//                     <ImageIcon className='size-4' />
//                   </button>
//                 </DialogTrigger>
//               </div>

//               {currentPhoto?.caption && (
//                 <p className='text-muted-foreground mt-2 text-center text-sm'>
//                   {currentPhoto.caption}
//                 </p>
//               )}

//               {currentPhoto?.status === "pending" && (
//                 <div className='mt-1 text-center text-xs font-medium text-amber-600'>
//                   <Clock className='mr-1 mb-[2px] inline-block size-3' />
//                   Pending
//                 </div>
//               )}

//               <div className='mt-4'>
//                 <PhotoUpload onPhotoSubmitted={onPhotoSubmitted} />
//               </div>
//             </div>

//             <DialogContent className='max-w-4xl p-0'>
//               {selectedPhoto && (
//                 <>
//                   <Image
//                     src={selectedPhoto.image_url}
//                     alt={selectedPhoto.caption || selectedPhoto.name || "Photo"}
//                     width={1200}
//                     height={800}
//                     className='size-auto max-h-[60vh] w-full rounded-t-lg object-cover'
//                   />
//                   <div className='px-4 pt-1 pb-4'>
//                     <DialogHeader>
//                       <DialogTitle className='text-accent-foreground mb-0.5 truncate text-start text-lg font-medium'>
//                         {selectedPhoto.caption || "Untitled"}
//                       </DialogTitle>
//                     </DialogHeader>
//                     <div className='text-accent-foreground/90 flex items-center justify-between text-sm'>
//                       {selectedPhoto.name && (
//                         <div className='flex items-center gap-1'>
//                           <ImageIcon className='size-4' />
//                           <span>{selectedPhoto.name}</span>
//                         </div>
//                       )}
//                       <div className='flex items-center gap-1'>
//                         <Clock className='size-4' />
//                         <span>
//                           {new Date(
//                             selectedPhoto.created_at
//                           ).toLocaleDateString("en-US", {
//                             year: "numeric",
//                             month: "long",
//                             day: "numeric",
//                           })}
//                         </span>
//                       </div>
//                       {selectedPhoto.status === "pending" && (
//                         <div className='rounded-full bg-amber-400 px-2 py-1 text-xs text-slate-950'>
//                           <Clock className='mr-[1px] mb-[1px] inline-block size-3' />
//                           Pending
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </>
//   );
// }
