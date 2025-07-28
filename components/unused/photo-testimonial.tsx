// import { useState } from "react";
// import Image from "next/image";
// import { Clock, ImageIcon, MessageCircle } from "lucide-react";
// import PhotoUpload from "@/components/landing/photo-upload";
// import { AnimatedTestimonials } from "@/components/unused/ui/image-testimonial";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import type { PhotoEntry } from "@/lib/types";

// interface PhotoTestimonialProps {
//   approvedPhotos: PhotoEntry[];
//   userPhotos: PhotoEntry[];
//   onPhotoSubmitted: (photo: PhotoEntry) => void;
// }

// export default function PhotoTestimonial({
//   approvedPhotos,
//   userPhotos,
//   onPhotoSubmitted,
// }: PhotoTestimonialProps) {
//   const [selectedPhoto, setSelectedPhoto] = useState<PhotoEntry | null>(null);

//   const allPhotos = [
//     ...approvedPhotos,
//     ...userPhotos.filter(
//       (p) =>
//         p.status === "pending" && !approvedPhotos.some((ap) => ap.id === p.id)
//     ),
//   ];

//   const testimonials = allPhotos.map((photo) => ({
//     quote: photo.caption || "A beautiful memory captured.",
//     name: photo.name || "Anonymous",
//     designation: photo.status === "pending" ? "Pending Approval" : "Approved",
//     src: photo.image_url || "/placeholder.svg",
//     raw: photo,
//   }));

//   return (
//     <>
//       {testimonials.length > 0 ? (
//         <AnimatedTestimonials
//           testimonials={testimonials}
//           autoplay
//           interval={7000}
//           onImageClick={(testimonial) => setSelectedPhoto(testimonial.raw)}
//         />
//       ) : (
//         <div className='pt-20 pb-24 text-center'>
//           <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
//             <MessageCircle className='text-foreground/80 size-12' />
//           </div>
//           <p className='text-foreground/80 text-lg'>No Photo Gallery photos</p>
//           <p className='text-foreground/70 text-sm'>
//             Be the first to add a photo memory
//           </p>
//         </div>
//       )}

//       <div className='mt-8'>
//         <PhotoUpload onPhotoSubmitted={onPhotoSubmitted} />
//       </div>

//       {/* Modal dialog on image click */}
//       <Dialog
//         open={!!selectedPhoto}
//         onOpenChange={(open) => !open && setSelectedPhoto(null)}
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
//                 <DialogHeader>
//                   <DialogTitle className='text-accent-foreground mb-0.5 truncate text-start text-lg font-medium'>
//                     {selectedPhoto.caption || "Untitled"}
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className='text-accent-foreground/90 flex items-center justify-between text-sm'>
//                   {selectedPhoto.name && (
//                     <div className='flex items-center gap-1'>
//                       <ImageIcon className='size-4' />
//                       <span>{selectedPhoto.name}</span>
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
//                   {selectedPhoto.status === "pending" && (
//                     <div className='rounded-full bg-amber-400 px-2 py-1 text-xs text-slate-950'>
//                       <Clock className='mr-[1px] mb-[1px] inline-block size-3' />
//                       Pending
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
