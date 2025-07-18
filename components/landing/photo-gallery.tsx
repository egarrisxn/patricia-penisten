"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import SectionHeader from "@/components/landing/section-header";
import PhotoUpload from "@/components/landing/photo-upload";
import PhotoGrid from "@/components/landing/photo-grid";
import type { Photo } from "@/lib/types";

export default function PhotoGallery() {
  const [userPhotos, setUserPhotos] = useState<Photo[]>([]);
  const [approvedPhotos, setApprovedPhotos] = useState<Photo[]>([]);
  const [userIP, setUserIP] = useState<string>("");
  const supabase = createClient();

  const fetchApprovedContent = useCallback(async () => {
    try {
      const [photosResult] = await Promise.all([
        supabase
          .from("photos")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false }),
      ]);

      if (photosResult.data) setApprovedPhotos(photosResult.data);
    } catch (error) {
      console.error("Error fetching approved content:", error);
    }
  }, [supabase]);

  const fetchUserSubmissions = useCallback(async () => {
    if (!userIP) return;

    try {
      const [photosResult] = await Promise.all([
        supabase
          .from("photos")
          .select("*")
          .eq("submitted_by_ip", userIP)
          .order("created_at", { ascending: false }),
      ]);

      if (photosResult.data) setUserPhotos(photosResult.data);
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

  const handlePhotoSubmitted = (photo: Photo) => {
    setUserPhotos((prev) => [photo, ...prev]);
  };

  return (
    <div
      id='photogallery'
      className='5xl:py-32 bg-gradient-to-t from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-950/80 dark:via-slate-950/90 dark:to-slate-950'
    >
      <div className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'>
        <div className='space-y-6'>
          <SectionHeader
            header='Photo Gallery'
            subheader='Share your cherished memories with photos.'
          />
          <div className='5xl:gap-16 grid grid-cols-1 gap-6 lg:gap-12'>
            <section>
              <PhotoGrid
                approvedPhotos={approvedPhotos}
                userPhotos={userPhotos}
              />
            </section>
            <section>
              <PhotoUpload onPhotoSubmitted={handlePhotoSubmitted} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
