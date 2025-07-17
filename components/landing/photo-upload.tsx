"use client";

import { useState } from "react";
import { toast } from "sonner";
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
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const supabase = createClient();

  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      toast.error("Please upload a valid image file.");
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    try {
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
      toast.success("Photo submitted! Pending approval.");

      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setCaption("");
        setSelectedFile(null);
      }, 3000);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Error uploading photo. Please try again.");
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
          <ImageIcon className='size-5 text-blue-500' />
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
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`hover:border-ring hover:ring-ring/50 border-input flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-all hover:bg-purple-50/20 hover:ring-1 dark:hover:bg-purple-950/5 ${
                  dragActive ? "bg-purple-100/30 dark:bg-purple-950/10" : ""
                }`}
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
                      Click or drag to upload photo
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor='name' className='text-muted-foreground'>
              Your Name (Optional)
            </Label>
            <Input
              id='name'
              aria-label='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Jane Doe'
              className='mt-1'
            />
          </div>

          <div>
            <Label htmlFor='caption' className='text-muted-foreground'>
              Caption (Optional)
            </Label>
            <Textarea
              id='caption'
              aria-label='captionname'
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder='Hanging out by the fire during thanksgiving...'
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
