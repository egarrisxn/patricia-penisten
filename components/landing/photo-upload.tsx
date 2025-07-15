"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Photo } from "@/lib/types";

interface PhotoUploadProps {
  onPhotoSubmitted: (photo: Photo) => void;
}

export default function PhotoUpload({ onPhotoSubmitted }: PhotoUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const supabase = createClient();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // const url = URL.createObjectURL(file);
      // setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      // Upload file to Supabase Storage
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("photos")
        .upload(fileName, selectedFile);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("photos")
        .getPublicUrl(fileName);

      const response = await fetch("/api/get-ip");
      const { ip } = await response.json();

      // Insert photo record
      const { data, error } = await supabase
        .from("photos")
        .insert({
          name: name || null,
          caption: caption || null,
          image_url: urlData.publicUrl,
          status: "pending",
          submitted_by_ip: ip,
        })
        .select()
        .single();

      if (error) throw error;

      setIsSubmitted(true);
      onPhotoSubmitted(data);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setCaption("");
        setSelectedFile(null);
        // setPreviewUrl(null);
      }, 3000);
    } catch (error) {
      console.error("Error uploading photo:", error);
      alert("Error uploading photo. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className='mx-auto w-full max-w-7xl rounded-xl bg-white px-4 py-8 shadow-lg backdrop-blur-sm dark:bg-slate-950'>
        <CardContent className='pt-6'>
          <div className='text-center'>
            <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100'>
              <Check className='size-8 text-green-600' />
            </div>
            <h3 className='text-accent-foreground mb-2 text-lg font-semibold'>
              Photo Submitted!
            </h3>
            <p className='text-gray-600'>
              Your photo is pending approval and will be visible to others once
              reviewed.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='mx-auto w-full max-w-7xl rounded-xl bg-white px-4 py-8 shadow-lg backdrop-blur-sm dark:bg-slate-950'>
      <CardHeader>
        <CardTitle className='text-accent-foreground flex items-center gap-2'>
          <ImageIcon className='size-5' />
          Share a Photo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='photo-upload' className='text-muted-foreground'>
              Choose Photo *
            </Label>
            <div className='mt-1'>
              <input
                id='photo-upload'
                type='file'
                accept='image/*'
                onChange={handleFileSelect}
                className='hidden'
                required
              />
              <label
                htmlFor='photo-upload'
                className='hover:border-ring hover:ring-ring/50 border-input flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-all hover:bg-purple-50/20 hover:ring-1 dark:hover:bg-purple-950/5'
              >
                {selectedFile ? (
                  <div className='flex flex-col items-center justify-center gap-2'>
                    <Check className='size-8 text-green-600' />
                    <p className='font-medium text-green-700'>
                      Photo ready to upload
                    </p>
                    <p className='text-muted-foreground text-xs'>
                      {selectedFile.name}
                    </p>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload className='text-muted-foreground mb-2 size-8' />
                    <p className='text-muted-foreground/90 text-sm'>
                      Click to upload photo
                    </p>
                  </div>
                )}
                {/* {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt='Preview'
                    className='size-full rounded-md object-cover'
                  />
                ) : (
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload className='text-muted-foreground mb-2 size-8' />
                    <p className='text-muted-foreground/90 text-sm'>
                      Click to upload photo
                    </p>
                  </div>
                )} */}
              </label>
            </div>
          </div>
          <div>
            <Label htmlFor='name' className='text-muted-foreground'>
              Your Name (Optional)
            </Label>
            <Input
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='mt-1'
            />
          </div>
          <div>
            <Label htmlFor='caption' className='text-muted-foreground'>
              Caption (Optional)
            </Label>
            <Textarea
              id='caption'
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder='Share a memory or describe this photo...'
              className='mt-1 min-h-16'
            />
          </div>
          <Button
            type='submit'
            disabled={!selectedFile || isUploading}
            className='w-full bg-gradient-to-r from-purple-500/90 to-rose-500/90 text-white/90 shadow-lg hover:from-purple-500 hover:to-rose-500 hover:text-white'
          >
            {isUploading ? "Uploading..." : "Share Photo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
