"use client";

import { useUserContent } from "@/hooks/use-user-content";
import ImageCarousel from "@/components/landing/image-carousel";
import ImageUpload from "@/components/landing/image-upload";
import type { PhotoEntry } from "@/lib/types";

export default function PhotoGallery() {
  const { userItems, approvedItems, setUserItems } =
    useUserContent<PhotoEntry>("photos");

  const handlePhotoSubmitted = (photo: PhotoEntry) => {
    setUserItems((prev) => [photo, ...prev]);
  };

  return (
    <div className='flex flex-col items-center gap-12 px-4 py-8'>
      <ImageCarousel userPhotos={userItems} approvedPhotos={approvedItems} />
      <div className='mt-10 w-full max-w-xl'>
        <ImageUpload onPhotoSubmitted={handlePhotoSubmitted} />
      </div>
    </div>
  );
}

// import PhotoSwiper from "@/components/unused/photo-swiper";
// import PhotoTestimonial from "@/components/unused/photo-testimonial";
// import PhotoGrid from "@/components/unused/photo-grid";

{
  /* <PhotoSwiper approvedPhotos={approvedItems} userPhotos={userItems} /> */
}
{
  /* <PhotoTestimonial approvedPhotos={approvedItems} userPhotos={userItems} /> */
}
{
  /* <PhotoGrid
  approvedPhotos={approvedItems}
  userPhotos={userItems}
  onPhotoSubmitted={handlePhotoSubmitted}
/> */
}
