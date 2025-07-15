"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Check,
  X,
  Trash2,
  Image as ImageIcon,
  Heart,
  Clock,
  Users,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Photo, Entry } from "@/lib/types";

export default function AdminDashboard() {
  const [pendingPhotos, setPendingPhotos] = useState<Photo[]>([]);
  const [pendingEntries, setPendingEntries] = useState<Entry[]>([]);
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
  const [allEntries, setAllEntries] = useState<Entry[]>([]);
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
  }, [supabase]); // ← safe dependency

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
              ? ({
                  ...p,
                  status: action === "approve" ? "approved" : "denied",
                } as Photo)
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
              ? ({
                  ...e,
                  status: action === "approve" ? "approved" : "denied",
                } as Entry)
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
    <div className='container mx-auto px-4 py-8'>
      {/* Stats */}
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-4'>
        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center gap-3'>
              <Clock className='size-8 text-orange-500' />
              <div>
                <p className='text-muted-foreground/90 text-sm'>
                  Pending Photos
                </p>
                <p className='text-accent-foreground text-2xl font-bold'>
                  {pendingPhotos.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center gap-3'>
              <Clock className='size-8 text-orange-500' />
              <div>
                <p className='text-muted-foreground/90 text-sm'>
                  Pending Entries
                </p>
                <p className='text-accent-foreground text-2xl font-bold'>
                  {pendingEntries.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center gap-3'>
              <ImageIcon className='size-8 text-blue-500' />
              <div>
                <p className='text-muted-foreground/90 text-sm'>Total Photos</p>
                <p className='text-accent-foreground text-2xl font-bold'>
                  {allPhotos.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='flex items-center gap-3'>
              <Heart className='size-8 text-red-500' />
              <div>
                <p className='text-muted-foreground/90 text-sm'>
                  Total Entries
                </p>
                <p className='text-accent-foreground text-2xl font-bold'>
                  {allEntries.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Management Tabs */}
      <Tabs defaultValue='pending' className='w-full'>
        <TabsList className='mb-8 grid w-full grid-cols-2'>
          <TabsTrigger value='pending'>
            Pending Approval ({pendingPhotos.length + pendingEntries.length})
          </TabsTrigger>
          <TabsTrigger value='all'>All Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value='pending'>
          <div className='space-y-8'>
            {/* Pending Photos */}
            {pendingPhotos.length > 0 && (
              <div>
                <h3 className='text-accent-foreground mb-4 text-lg font-semibold'>
                  Pending Photos
                </h3>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                  {pendingPhotos.map((photo) => (
                    <Card key={photo.id} className='overflow-hidden'>
                      <div className='relative aspect-video'>
                        <Image
                          src={photo.image_url}
                          alt={photo.caption || "Uploaded photo"}
                          fill
                          className='size-full object-cover'
                          sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                        />
                      </div>
                      <CardContent className='p-4'>
                        {photo.name && (
                          <p className='text-accent-foreground mb-1 font-medium'>
                            By {photo.name}
                          </p>
                        )}
                        {photo.caption && (
                          <p className='text-accent-foreground/90 mb-3 text-sm'>
                            {photo.caption}
                          </p>
                        )}
                        <p className='mb-3 text-xs text-gray-500'>
                          {new Date(photo.created_at).toLocaleDateString()} •
                          IP: {photo.submitted_by_ip}
                        </p>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={() =>
                              handlePhotoAction(photo.id, "approve")
                            }
                            className='flex-1 bg-green-600 text-white hover:bg-green-700'
                          >
                            <Check className='mr-1 size-4' />
                            Approve
                          </Button>
                          <Button
                            size='sm'
                            variant='outline'
                            onClick={() => handlePhotoAction(photo.id, "deny")}
                            className='flex-1'
                          >
                            <X className='mr-1 size-4' />
                            Deny
                          </Button>
                          <Button
                            size='sm'
                            variant='destructive'
                            onClick={() =>
                              handlePhotoAction(photo.id, "delete")
                            }
                          >
                            <Trash2 className='size-4' />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Pending Entries */}
            {pendingEntries.length > 0 && (
              <div>
                <h3 className='text-accent-foreground mb-4 text-lg font-semibold'>
                  Pending Entries
                </h3>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                  {pendingEntries.map((entry) => (
                    <Card key={entry.id}>
                      <CardContent className='p-4'>
                        {entry.name && (
                          <p className='text-accent-foreground mb-1 font-medium'>
                            {entry.name}
                            {entry.relationship && (
                              <span className='text-muted-foreground/90 font-normal'>
                                {" "}
                                ({entry.relationship})
                              </span>
                            )}
                          </p>
                        )}
                        <p className='text-accent-foreground/90 mb-3'>
                          {entry.message}
                        </p>
                        <p className='text-muted-foreground/80 mb-3 text-xs'>
                          {new Date(entry.created_at).toLocaleDateString()} •
                          IP: {entry.submitted_by_ip}
                        </p>
                        <div className='flex gap-2'>
                          <Button
                            size='sm'
                            onClick={() =>
                              handleEntryAction(entry.id, "approve")
                            }
                            className='flex-1 bg-green-600 text-white hover:bg-green-700'
                          >
                            <Check className='mr-1 size-4' />
                            Approve
                          </Button>
                          <Button
                            size='sm'
                            variant='outline'
                            onClick={() => handleEntryAction(entry.id, "deny")}
                            className='flex-1'
                          >
                            <X className='mr-1 size-4' />
                            Deny
                          </Button>
                          <Button
                            size='sm'
                            variant='destructive'
                            onClick={() =>
                              handleEntryAction(entry.id, "delete")
                            }
                          >
                            <Trash2 className='size-4' />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {pendingPhotos.length === 0 && pendingEntries.length === 0 && (
              <div className='py-12 text-center'>
                <Users className='text-muted-foreground/70 mx-auto mb-4 size-16' />
                <h3 className='text-accent-foreground mb-2 text-lg font-semibold'>
                  No pending submissions
                </h3>
                <p className='text-muted-foreground/90'>
                  All submissions have been reviewed!
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value='all'>
          <div className='space-y-8'>
            {/* All Photos */}
            {allPhotos.length > 0 && (
              <div>
                <h3 className='text-accent-foreground mb-4 text-lg font-semibold'>
                  All Photos
                </h3>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                  {allPhotos.map((photo) => (
                    <Card key={photo.id} className='overflow-hidden'>
                      <div className='relative aspect-square'>
                        <Image
                          src={photo.image_url}
                          alt={photo.caption || "Photo"}
                          fill
                          className='size-full object-cover'
                          sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                        />
                      </div>
                      <CardContent className='p-3'>
                        <div className='mb-2 flex items-center justify-between'>
                          <Badge
                            variant={
                              photo.status === "approved"
                                ? "default"
                                : photo.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {photo.status}
                          </Badge>
                          {photo.status !== "pending" && (
                            <Button
                              size='sm'
                              variant='ghost'
                              onClick={() =>
                                handlePhotoAction(photo.id, "delete")
                              }
                              className='p-1 text-red-600 hover:text-red-700'
                            >
                              <Trash2 className='size-4' />
                            </Button>
                          )}
                        </div>
                        <p className='text-xs text-gray-500'>
                          {new Date(photo.created_at).toLocaleDateString()}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Entries */}
            {allEntries.length > 0 && (
              <div>
                <h3 className='text-accent-foreground mb-4 text-lg font-semibold'>
                  All Entries
                </h3>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                  {allEntries.map((entry) => (
                    <Card key={entry.id}>
                      <CardContent className='p-4'>
                        <div className='mb-2 flex items-center justify-between'>
                          <Badge
                            variant={
                              entry.status === "approved"
                                ? "default"
                                : entry.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {entry.status}
                          </Badge>
                          {entry.status !== "pending" && (
                            <Button
                              size='sm'
                              variant='ghost'
                              onClick={() =>
                                handleEntryAction(entry.id, "delete")
                              }
                              className='p-1 text-red-600 hover:text-red-700'
                            >
                              <Trash2 className='size-4' />
                            </Button>
                          )}
                        </div>
                        {entry.name && (
                          <p className='text-accent-foreground mb-1 text-sm font-medium'>
                            {entry.name}
                          </p>
                        )}
                        <p className='text-accent-foreground/90 mb-2 line-clamp-3 text-sm'>
                          {entry.message}
                        </p>
                        <p className='text-xs text-gray-500'>
                          {new Date(entry.created_at).toLocaleDateString()}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
