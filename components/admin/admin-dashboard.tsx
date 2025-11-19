"use client";

import { useState, useEffect } from "react";
import { Clock, FileWarning, Heart, Image as ImageIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/admin/stat-card";
import EmptyState from "@/components/admin/empty-state";
import PendingSection from "@/components/admin/pending";
import AllSubmissionsSection from "@/components/admin/all-submissions";
import FlaggedSection from "@/components/admin/flagged";

import { PhotoEntry, GuestbookEntry } from "@/lib/types";

export default function Dashboard() {
  const [pendingPhotos, setPendingPhotos] = useState<PhotoEntry[]>([]);
  const [pendingEntries, setPendingEntries] = useState<GuestbookEntry[]>([]);
  const [allPhotos, setAllPhotos] = useState<PhotoEntry[]>([]);
  const [allEntries, setAllEntries] = useState<GuestbookEntry[]>([]);
  const [flaggedPhotos, setFlaggedPhotos] = useState<PhotoEntry[]>([]);
  const [flaggedEntries, setFlaggedEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();

  // ✅ Effect owns the async logic; no helper that calls setState
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      setIsLoading(true);

      const [
        pendingPhotosResult,
        pendingEntriesResult,
        allPhotosResult,
        allEntriesResult,
        flaggedPhotosResult,
        flaggedEntriesResult,
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
        supabase
          .from("photos")
          .select("*")
          .eq("flagged", true)
          .order("created_at", { ascending: false }),
        supabase
          .from("entries")
          .select("*")
          .eq("flagged", true)
          .order("created_at", { ascending: false }),
      ]);

      if (cancelled) {
        return;
      }

      if (pendingPhotosResult.error) {
        console.error(
          "Error fetching pending photos:",
          pendingPhotosResult.error
        );
      } else if (pendingPhotosResult.data) {
        setPendingPhotos(pendingPhotosResult.data);
      }

      if (pendingEntriesResult.error) {
        console.error(
          "Error fetching pending entries:",
          pendingEntriesResult.error
        );
      } else if (pendingEntriesResult.data) {
        setPendingEntries(pendingEntriesResult.data);
      }

      if (allPhotosResult.error) {
        console.error("Error fetching all photos:", allPhotosResult.error);
      } else if (allPhotosResult.data) {
        setAllPhotos(allPhotosResult.data);
      }

      if (allEntriesResult.error) {
        console.error("Error fetching all entries:", allEntriesResult.error);
      } else if (allEntriesResult.data) {
        setAllEntries(allEntriesResult.data);
      }

      if (flaggedPhotosResult.error) {
        console.error(
          "Error fetching flagged photos:",
          flaggedPhotosResult.error
        );
      } else if (flaggedPhotosResult.data) {
        setFlaggedPhotos(flaggedPhotosResult.data);
      }

      if (flaggedEntriesResult.error) {
        console.error(
          "Error fetching flagged entries:",
          flaggedEntriesResult.error
        );
      } else if (flaggedEntriesResult.data) {
        setFlaggedEntries(flaggedEntriesResult.data);
      }

      setIsLoading(false);
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const handlePhotoAction = async (
    photoId: string,
    action: "approve" | "deny" | "delete"
  ) => {
    if (action === "delete") {
      const { error } = await supabase
        .from("photos")
        .delete()
        .eq("id", photoId);

      if (error) {
        console.error("Error deleting photo:", error);
        return;
      }

      setPendingPhotos((prev) => prev.filter((p) => p.id !== photoId));
      setAllPhotos((prev) => prev.filter((p) => p.id !== photoId));
      return;
    }

    const newStatus = action === "approve" ? "approved" : "denied";

    const { error } = await supabase
      .from("photos")
      .update({ status: newStatus })
      .eq("id", photoId);

    if (error) {
      console.error("Error updating photo:", error);
      return;
    }

    setPendingPhotos((prev) => prev.filter((p) => p.id !== photoId));
    setAllPhotos((prev) =>
      prev.map((p) => (p.id === photoId ? { ...p, status: newStatus } : p))
    );
  };

  const handleEntryAction = async (
    entryId: string,
    action: "approve" | "deny" | "delete"
  ) => {
    if (action === "delete") {
      const { error } = await supabase
        .from("entries")
        .delete()
        .eq("id", entryId);

      if (error) {
        console.error("Error deleting entry:", error);
        return;
      }

      setPendingEntries((prev) => prev.filter((e) => e.id !== entryId));
      setAllEntries((prev) => prev.filter((e) => e.id !== entryId));
      return;
    }

    const newStatus = action === "approve" ? "approved" : "denied";

    const { error } = await supabase
      .from("entries")
      .update({ status: newStatus })
      .eq("id", entryId);

    if (error) {
      console.error("Error updating entry:", error);
      return;
    }

    setPendingEntries((prev) => prev.filter((e) => e.id !== entryId));
    setAllEntries((prev) =>
      prev.map((e) => (e.id === entryId ? { ...e, status: newStatus } : e))
    );
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Clock className="mx-auto mb-4 size-8 animate-spin text-blue-600" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-6 grid grid-cols-2 gap-4 md:mb-8 md:grid-cols-3 md:gap-6 xl:grid-cols-6">
        <StatCard
          icon={<Clock />}
          className="text-yellow-500"
          label="Pending Photos"
          count={pendingPhotos.length}
        />
        <StatCard
          icon={<Clock />}
          className="text-yellow-500"
          label="Pending Entries"
          count={pendingEntries.length}
        />
        <StatCard
          icon={<FileWarning />}
          className="text-red-500"
          label="Flagged Photos"
          count={flaggedPhotos.length}
        />
        <StatCard
          icon={<FileWarning />}
          className="text-red-500"
          label="Flagged Entries"
          count={flaggedEntries.length}
        />
        <StatCard
          icon={<ImageIcon />}
          className="text-blue-500"
          label="Total Photos"
          count={allPhotos.length}
        />
        <StatCard
          icon={<Heart />}
          className="text-blue-500"
          label="Total Entries"
          count={allEntries.length}
        />
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="pending">
            Pending ({pendingPhotos.length + pendingEntries.length})
          </TabsTrigger>
          <TabsTrigger value="flagged">
            Flagged ({flaggedPhotos.length + flaggedEntries.length})
          </TabsTrigger>
          <TabsTrigger value="all">
            All ({allPhotos.length + allEntries.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
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

        <TabsContent value="flagged">
          <FlaggedSection
            flaggedPhotos={flaggedPhotos}
            flaggedEntries={flaggedEntries}
            onPhotoAction={handlePhotoAction}
            onEntryAction={handleEntryAction}
          />
        </TabsContent>

        <TabsContent value="all">
          <AllSubmissionsSection
            photos={allPhotos}
            entries={allEntries}
            onPhotoAction={handlePhotoAction}
            onEntryAction={handleEntryAction}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
