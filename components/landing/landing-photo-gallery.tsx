"use client";

import { useUserContent } from "@/hooks/use-user-content";
import PhotoList from "@/components/landing/photo-list";
import PhotoUpload from "@/components/landing/photo-upload";

import type { PhotoEntry } from "@/lib/types";

export default function LandingPhotoGallery() {
  const { userItems, approvedItems, setUserItems } =
    useUserContent<PhotoEntry>("photos");

  const handlePhotoSubmitted = (photo: PhotoEntry) => {
    setUserItems((prev) => [photo, ...prev]);
  };

  return (
    <div className='flex flex-col items-center gap-12 px-2 pt-8 pb-2 xs:px-4'>
      <PhotoList userPhotos={userItems} approvedPhotos={approvedItems} />
      <div className='mt-10 w-full max-w-lg 2xl:max-w-xl'>
        <PhotoUpload onPhotoSubmitted={handlePhotoSubmitted} />
      </div>
    </div>
  );
}
