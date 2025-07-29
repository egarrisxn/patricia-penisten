// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Clock, User, MessageCircle } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import PhotoUpload from "@/components/landing/image-upload";
// import type { PhotoEntry } from "@/lib/types";

// interface PhotoGridProps {
//   approvedPhotos: PhotoEntry[];
//   userPhotos: PhotoEntry[];
//   onPhotoSubmitted: (photo: PhotoEntry) => void;
// }

// export default function PhotoGrid({
//   approvedPhotos,
//   userPhotos,
//   onPhotoSubmitted,
// }: PhotoGridProps) {
//   const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);

//   const allPhotos = [
//     ...approvedPhotos,
//     ...userPhotos.filter(
//       (p) =>
//         p.status === "pending" && !approvedPhotos.some((ap) => ap.id === p.id)
//     ),
//   ];

//   const isPending = (status: string) => status === "pending";

//   useEffect(() => {
//     if (selectedPhoto) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [selectedPhoto]);

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
//     <>
//       <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
//         {allPhotos.map((photo) => (
//           <div
//             key={photo.id}
//             className='group relative mx-auto aspect-square w-full cursor-pointer overflow-hidden rounded-lg shadow-lg backdrop-blur-xs transition-all duration-300 hover:shadow-xl'
//             onClick={() => setSelectedPhoto(photo)}
//           >
//             <Image
//               src={photo.image_url || "/placeholder.svg"}
//               alt={photo.caption || photo.name || "Photo Gallery Photo"}
//               width={1200}
//               height={800}
//               className='h-auto w-full cursor-pointer rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'
//             />
//             <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20'></div>
//             {photo.caption && (
//               <div className='absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
//                 <p className='truncate text-sm font-medium text-white'>
//                   {photo.caption}
//                 </p>
//               </div>
//             )}
//             {isPending(photo.status) && (
//               <div className='absolute top-2 right-2 rounded-full bg-amber-400 px-2 py-1 text-xs text-slate-950'>
//                 <Clock className='mr-[1px] mb-[1px] inline-block size-3' />{" "}
//                 Pending
//               </div>
//             )}
//           </div>
//         ))}
//         <PhotoUpload onPhotoSubmitted={onPhotoSubmitted} />
//       </div>

//       <Dialog
//         open={!!selectedPhoto}
//         onOpenChange={(open) => {
//           if (!open) {
//             setSelectedPhoto(null);
//           }
//         }}
//       >
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
//     </>
//   );
// }
