"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import PhotoCarousel from "@/components/landing/photo-carousel";
import PhotoUpload from "@/components/landing/photo-upload";
import type { PhotoEntry } from "@/lib/types";

export default function LandingPhotoGallery() {
  const [userPhotos, setUserPhotos] = useState<PhotoEntry[]>([]);
  const [approvedPhotos, setApprovedPhotos] = useState<PhotoEntry[]>([]);
  const [userIP, setUserIP] = useState<string>("");
  const supabase = createClient();

  const fetchApprovedContent = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setApprovedPhotos(data);
    } catch (error) {
      console.error("Error fetching approved content:", error);
    }
  }, [supabase]);

  const fetchUserSubmissions = useCallback(async () => {
    if (!userIP) return;

    try {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .eq("submitted_by_ip", userIP)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setUserPhotos(data);
    } catch (error) {
      console.error("Error fetching user submissions:", error);
    }
  }, [userIP, supabase]);

  const fetchUserIP = async () => {
    try {
      const response = await fetch("/api/get-ip");
      const { ip } = await response.json();
      setUserIP(ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchUserIP();
    fetchApprovedContent();
  }, [fetchApprovedContent]);

  useEffect(() => {
    if (userIP) {
      fetchUserSubmissions();
    }
  }, [userIP, fetchUserSubmissions]);

  const handlePhotoSubmitted = (photo: PhotoEntry) => {
    setUserPhotos((prev) => [photo, ...prev]);
  };

  return (
    <div className='flex flex-col items-center gap-12 px-4 py-8'>
      <PhotoCarousel
        photos={[
          ...userPhotos,
          ...approvedPhotos.filter(
            (approved) => !userPhotos.some((user) => user.id === approved.id)
          ),
        ]}
      />
      <div className='mt-8 w-full max-w-xl'>
        <h2 className='text-foreground mb-4 text-center text-xl font-semibold'>
          Share Your Photo
        </h2>
        <PhotoUpload onPhotoSubmitted={handlePhotoSubmitted} />
      </div>
    </div>
  );
}

// import PhotoGrid from "@/components/landing/photo-grid";
// import PhotoSwiper from "@/components/landing/photo-Swiper";
// import PhotoTestimonial from "@/components/landing/photo-testimonial";

{
  /* <PhotoGrid
        approvedPhotos={approvedPhotos}
        userPhotos={userPhotos}
        onPhotoSubmitted={handlePhotoSubmitted}
      /> */
}
{
  /* <PhotoSwiper
        approvedPhotos={approvedPhotos}
        userPhotos={userPhotos}
        onPhotoSubmitted={handlePhotoSubmitted}
      /> */
}
{
  /* <PhotoTestimonial
        approvedPhotos={approvedPhotos}
        userPhotos={userPhotos}
        onPhotoSubmitted={handlePhotoSubmitted}
      /> */
}
