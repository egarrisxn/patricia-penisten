"use client";

import { useState, useEffect, useCallback } from "react";
import { Clock, Heart, Image as ImageIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/admin/stat-card";
import EmptyState from "@/components/admin/empty-state";
import PendingSection from "@/components/admin/pending";
import AllSubmissionsSection from "@/components/admin/all-submissions";
import { PhotoEntry, GuestbookEntry } from "@/lib/types";

export default function AdminDashboard() {
  const [pendingPhotos, setPendingPhotos] = useState<PhotoEntry[]>([]);
  const [pendingEntries, setPendingEntries] = useState<GuestbookEntry[]>([]);
  const [allPhotos, setAllPhotos] = useState<PhotoEntry[]>([]);
  const [allEntries, setAllEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  const fetchData = useCallback(async () => {
    try {
      const [
        pendingPhotosResult,
        pendingEntriesResult,
        allPhotosResult,
        allEntriesResult,
      ] = await Promise.all([
        supabase
          .from("photos")
          .select("*")
          .eq("status", "pending")
          .order("created_at", { ascending: false }),
        supabase
          .from("entries")
          .select("*")
          .eq("status", "pending")
          .order("created_at", { ascending: false }),
        supabase
          .from("photos")
          .select("*")
          .order("created_at", { ascending: false }),
        supabase
          .from("entries")
          .select("*")
          .order("created_at", { ascending: false }),
      ]);

      if (pendingPhotosResult.data) setPendingPhotos(pendingPhotosResult.data);
      if (pendingEntriesResult.data)
        setPendingEntries(pendingEntriesResult.data);
      if (allPhotosResult.data) setAllPhotos(allPhotosResult.data);
      if (allEntriesResult.data) setAllEntries(allEntriesResult.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePhotoAction = async (
    photoId: string,
    action: "approve" | "deny" | "delete"
  ) => {
    try {
      if (action === "delete") {
        const { error } = await supabase
          .from("photos")
          .delete()
          .eq("id", photoId);
        if (error) throw error;
        setPendingPhotos((prev) => prev.filter((p) => p.id !== photoId));
        setAllPhotos((prev) => prev.filter((p) => p.id !== photoId));
      } else {
        const { error } = await supabase
          .from("photos")
          .update({ status: action === "approve" ? "approved" : "denied" })
          .eq("id", photoId);
        if (error) throw error;
        setPendingPhotos((prev) => prev.filter((p) => p.id !== photoId));
        setAllPhotos((prev) =>
          prev.map((p) =>
            p.id === photoId
              ? { ...p, status: action === "approve" ? "approved" : "denied" }
              : p
          )
        );
      }
    } catch (error) {
      console.error("Error updating photo:", error);
    }
  };

  const handleEntryAction = async (
    entryId: string,
    action: "approve" | "deny" | "delete"
  ) => {
    try {
      if (action === "delete") {
        const { error } = await supabase
          .from("entries")
          .delete()
          .eq("id", entryId);
        if (error) throw error;
        setPendingEntries((prev) => prev.filter((e) => e.id !== entryId));
        setAllEntries((prev) => prev.filter((e) => e.id !== entryId));
      } else {
        const { error } = await supabase
          .from("entries")
          .update({ status: action === "approve" ? "approved" : "denied" })
          .eq("id", entryId);
        if (error) throw error;
        setPendingEntries((prev) => prev.filter((e) => e.id !== entryId));
        setAllEntries((prev) =>
          prev.map((e) =>
            e.id === entryId
              ? { ...e, status: action === "approve" ? "approved" : "denied" }
              : e
          )
        );
      }
    } catch (error) {
      console.error("Error updating entry:", error);
    }
  };

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <Clock className='mx-auto mb-4 size-8 animate-spin text-blue-600' />
          <p className='text-muted-foreground/90'>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='mb-6 grid grid-cols-2 gap-4 md:mb-8 md:grid-cols-4 md:gap-6'>
        <StatCard
          icon={<Clock />}
          className='text-yellow-500'
          label='Pending Photos'
          count={pendingPhotos.length}
        />
        <StatCard
          icon={<Clock />}
          className='text-yellow-500'
          label='Pending Entries'
          count={pendingEntries.length}
        />
        <StatCard
          icon={<ImageIcon />}
          className='text-blue-500'
          label='Total Photos'
          count={allPhotos.length}
        />
        <StatCard
          icon={<Heart />}
          className='text-red-500'
          label='Total Entries'
          count={allEntries.length}
        />
      </div>

      <Tabs defaultValue='pending' className='w-full'>
        <TabsList className='mb-8 grid w-full grid-cols-2'>
          <TabsTrigger value='pending'>
            Pending Approval ({pendingPhotos.length + pendingEntries.length})
          </TabsTrigger>
          <TabsTrigger value='all'>All Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value='pending'>
          {pendingPhotos.length === 0 && pendingEntries.length === 0 ? (
            <EmptyState />
          ) : (
            <PendingSection
              pendingPhotos={pendingPhotos}
              pendingEntries={pendingEntries}
              onPhotoAction={handlePhotoAction}
              onEntryAction={handleEntryAction}
            />
          )}
        </TabsContent>

        <TabsContent value='all'>
          <AllSubmissionsSection
            photos={allPhotos}
            entries={allEntries}
            onPhotoAction={handlePhotoAction}
            onEntryAction={handleEntryAction}
          />
        </TabsContent>
      </Tabs>
    </>
  );
}
