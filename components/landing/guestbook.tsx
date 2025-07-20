"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
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
      className='5xl:py-32 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-50 py-24 dark:from-slate-950/80 dark:via-slate-950/90 dark:to-slate-950'
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className='5xl:max-w-[88rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[84rem]'
      >
        <div className='space-y-6'>
          <SectionHeader
            header='Guestbook'
            subheader='Share your thoughts and stories.'
          />
          <div className='5xl:gap-16 grid grid-cols-1 gap-6 lg:gap-12'>
            <section>
              <EntryList
                approvedEntries={approvedEntries}
                userEntries={userEntries}
              />
            </section>
            <section>
              <EntryForm onEntrySubmitted={handleEntrySubmitted} />
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
