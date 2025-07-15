"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import PhotoGallery from "@/components/landing/photo-gallery";
import Guestbook from "@/components/landing/guestbook";
import type { Photo, Entry } from "@/lib/types";

export default function MainContent() {
  const [userPhotos, setUserPhotos] = useState<Photo[]>([]);
  const [userEntries, setUserEntries] = useState<Entry[]>([]);
  const [approvedPhotos, setApprovedPhotos] = useState<Photo[]>([]);
  const [approvedEntries, setApprovedEntries] = useState<Entry[]>([]);
  const [userIP, setUserIP] = useState<string>("");

  const supabase = createClient();

  const fetchApprovedContent = useCallback(async () => {
    try {
      const [photosResult, entriesResult] = await Promise.all([
        supabase
          .from("photos")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false }),
        supabase
          .from("entries")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false }),
      ]);

      if (photosResult.data) setApprovedPhotos(photosResult.data);
      if (entriesResult.data) setApprovedEntries(entriesResult.data);
    } catch (error) {
      console.error("Error fetching approved content:", error);
    }
  }, [supabase]);

  const fetchUserSubmissions = useCallback(async () => {
    if (!userIP) return;

    try {
      const [photosResult, entriesResult] = await Promise.all([
        supabase
          .from("photos")
          .select("*")
          .eq("submitted_by_ip", userIP)
          .order("created_at", { ascending: false }),
        supabase
          .from("entries")
          .select("*")
          .eq("submitted_by_ip", userIP)
          .order("created_at", { ascending: false }),
      ]);

      if (photosResult.data) setUserPhotos(photosResult.data);
      if (entriesResult.data) setUserEntries(entriesResult.data);
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

  const handleEntrySubmitted = (entry: Entry) => {
    setUserEntries((prev) => [entry, ...prev]);
  };

  return (
    <>
      <PhotoGallery
        approvedPhotos={approvedPhotos}
        userPhotos={userPhotos}
        onPhotoSubmitted={handlePhotoSubmitted}
      />
      <Guestbook
        approvedEntries={approvedEntries}
        userEntries={userEntries}
        onEntrySubmitted={handleEntrySubmitted}
      />
    </>
  );
}
