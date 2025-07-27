"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import GuestbookForm from "@/components/landing/guestbook-form";
import GuestbookList from "@/components/landing/guestbook-list";
import type { GuestbookEntry } from "@/lib/types";

export default function LandingGuestbook() {
  const [userEntries, setUserEntries] = useState<GuestbookEntry[]>([]);
  const [approvedEntries, setApprovedEntries] = useState<GuestbookEntry[]>([]);
  const [userIP, setUserIP] = useState<string>("");

  const supabase = createClient();

  const fetchApprovedContent = useCallback(async () => {
    try {
      const [entriesResult] = await Promise.all([
        supabase
          .from("entries")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false }),
      ]);

      if (entriesResult.data) setApprovedEntries(entriesResult.data);
    } catch (error) {
      console.error("Error fetching approved content:", error);
    }
  }, [supabase]);

  const fetchUserSubmissions = useCallback(async () => {
    if (!userIP) return;

    try {
      const [entriesResult] = await Promise.all([
        supabase
          .from("entries")
          .select("*")
          .eq("submitted_by_ip", userIP)
          .order("created_at", { ascending: false }),
      ]);

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

  const handleEntrySubmitted = (entry: GuestbookEntry) => {
    setUserEntries((prev) => [entry, ...prev]);
  };

  return (
    <div className='4xl:gap-16 grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14'>
      <GuestbookList
        approvedEntries={approvedEntries}
        userEntries={userEntries}
      />
      <GuestbookForm onEntrySubmitted={handleEntrySubmitted} />
    </div>
  );
}
