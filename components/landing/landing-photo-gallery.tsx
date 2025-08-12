"use client";

import ImageCarousel from "@/components/landing/image-carousel";
import ImageUpload from "@/components/landing/image-upload";
import { useUserContent } from "@/hooks/use-user-content";
import type { PhotoEntry } from "@/lib/types";

export default function LandingPhotoGallery() {
  const { userItems, approvedItems, setUserItems } =
    useUserContent<PhotoEntry>("photos");

  const handlePhotoSubmitted = (photo: PhotoEntry) => {
    setUserItems((prev) => [photo, ...prev]);
  };

  return (
    <div className='xs:px-4 flex flex-col items-center gap-12 px-2 py-8'>
      <ImageCarousel userPhotos={userItems} approvedPhotos={approvedItems} />
      <div className='mt-10 w-full max-w-xl'>
        <ImageUpload onPhotoSubmitted={handlePhotoSubmitted} />
      </div>
    </div>
  );
}
