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
    <div className="flex flex-col items-center gap-24 px-2 pt-8 pb-2">
      <PhotoList userPhotos={userItems} approvedPhotos={approvedItems} />
      <div className="mx-auto w-full max-w-sm xs:max-w-md md:max-w-xl lg:max-w-2xl 3xl:max-w-3xl [@media(min-width:600px)_and_(max-height:540px)]:max-w-sm">
        <PhotoUpload onPhotoSubmitted={handlePhotoSubmitted} />
      </div>
    </div>
  );
}
