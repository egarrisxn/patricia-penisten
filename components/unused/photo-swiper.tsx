// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Clock, ImageIcon, User, MessageCircle } from "lucide-react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { ImageSwiper } from "@/components/unused/ui/image-swiper";
// import type { PhotoEntry } from "@/lib/types";

// interface PhotoSwiperProps {
//   approvedPhotos: PhotoEntry[];
//   userPhotos: PhotoEntry[];
// }

// export default function PhotoSwiper({
//   approvedPhotos,
//   userPhotos,
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
//           <MessageCircle className='size-6 md:size-12' />
//         </div>
//         <div className='text-foreground/90 mb-2 text-base font-semibold md:text-lg'>
//           No Photos Gallery photos
//         </div>
//         <div className='text-muted-foreground/90 text-sm tracking-tight'>
//           Be the first to add a photo memory
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className='relative'>
//       <Dialog
//         open={!!selectedPhoto}
//         onOpenChange={(open) => !open && setSelectedPhoto(null)}
//       >
//         <div className='relative mx-auto max-w-2xl'>
//           <div className='relative'>
//             <ImageSwiper
//               images={allPhotos.map((p) => p.image_url || "/placeholder.svg")}
//               className='rounded-lg'
//               imgIndex={imgIndex}
//               setImgIndex={setImgIndex}
//             />

//             <DialogTrigger asChild>
//               <button
//                 onClick={() => setSelectedPhoto(currentPhoto)}
//                 onPointerDown={(e) => e.stopPropagation()}
//                 className='absolute right-2 bottom-2 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur hover:bg-black/80'
//               >
//                 <ImageIcon className='size-4' />
//               </button>
//             </DialogTrigger>
//           </div>

//           {currentPhoto?.caption && (
//             <p className='text-muted-foreground mt-2 text-center text-sm'>
//               {currentPhoto.caption}
//             </p>
//           )}

//           {currentPhoto?.status === "pending" && (
//             <div className='absolute top-3 left-3 mx-auto flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
//               <div className='bg-primary mb-[1.5px] size-2 animate-pulse rounded-full md:size-[8.5px] 2xl:size-2.5'></div>
//               <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
//                 Pending
//               </div>
//             </div>
//           )}
//         </div>

//         <DialogContent className='max-w-4xl p-0'>
//           {selectedPhoto && (
//             <>
//               <Image
//                 src={selectedPhoto.image_url}
//                 alt={selectedPhoto.caption || selectedPhoto.name || "Photo"}
//                 width={1200}
//                 height={800}
//                 className='size-auto max-h-[60vh] w-full rounded-t-lg object-cover'
//               />
//               <div className='px-4 pt-1 pb-4'>
//                 <DialogHeader className='mb-2'>
//                   <DialogTitle className='text-foreground text-start text-base leading-[1.4] font-medium text-wrap md:mb-1.5 md:text-lg'>
//                     {selectedPhoto.caption || "Untitled"}
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className='flex flex-col gap-1 text-sm'>
//                   {selectedPhoto.name && (
//                     <div className='flex items-center gap-1'>
//                       <User className='size-4' />
//                       <p className='w-[80%] text-wrap'>{selectedPhoto.name}</p>
//                     </div>
//                   )}
//                   <div className='flex items-center gap-1'>
//                     <Clock className='size-4' />
//                     <span>
//                       {new Date(selectedPhoto.created_at).toLocaleDateString(
//                         "en-US",
//                         {
//                           year: "numeric",
//                           month: "long",
//                           day: "numeric",
//                         }
//                       )}
//                     </span>
//                   </div>
//                 </div>
//                 {selectedPhoto.status === "pending" && (
//                   <div className='absolute right-3 bottom-3 flex w-fit flex-row items-center justify-center gap-[2.5px] md:gap-[3px] 2xl:gap-[3.5px]'>
//                     <div className='bg-primary mb-[1.5px] size-2 animate-pulse rounded-full md:size-[8.5px] 2xl:size-2.5'></div>{" "}
//                     <div className='text-xs font-semibold tracking-tight md:text-[0.825rem] 2xl:text-sm'>
//                       Pending
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
