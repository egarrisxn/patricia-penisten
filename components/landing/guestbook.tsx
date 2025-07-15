"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import SectionHeader from "@/components/landing/section-header";
import EntryForm from "@/components/landing/entry-form";
import EntryList from "@/components/landing/entry-list";
import type { Entry } from "@/lib/types";

export default function Guestbook() {
  const [userEntries, setUserEntries] = useState<Entry[]>([]);
  const [approvedEntries, setApprovedEntries] = useState<Entry[]>([]);
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

  const handleEntrySubmitted = (entry: Entry) => {
    setUserEntries((prev) => [entry, ...prev]);
  };

  return (
    <div
      id='guestbook'
      className='bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 pt-24 pb-40 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='space-y-6'>
          <SectionHeader
            header='Guestbook'
            subheader='Share your thoughts and stories.'
          />
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12'>
            <section className='order-2 lg:order-1'>
              <EntryList
                approvedEntries={approvedEntries}
                userEntries={userEntries}
              />
            </section>
            <section className='order-1 lg:order-2'>
              <EntryForm onEntrySubmitted={handleEntrySubmitted} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
