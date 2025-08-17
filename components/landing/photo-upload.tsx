"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Upload, Check, HardDrive } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import type { PhotoEntry } from "@/lib/types";

interface PhotoUploadProps {
  onPhotoSubmitted: (photo: PhotoEntry) => void;
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
      console.error("Error submitting photo:", error);
      toast.error("Error uploading photo. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-card/50 shadow-lg dark:border'>
          <Check className='size-6 text-green-600 md:size-12' />
        </div>
        <div className='mb-2 text-base font-semibold text-foreground md:text-lg'>
          Photo Submitted!
        </div>
        <div className='text-sm tracking-tight text-muted-foreground md:text-base'>
          Your image is pending approval and will be visible to others once
          reviewed.
        </div>
      </div>
    );
  }

  return (
    <Card className='bg-white py-2 xs:aspect-square lg:py-4 dark:bg-background'>
      <CardContent className='flex-1 px-2 lg:px-4'>
        <form onSubmit={handleSubmit} className='flex h-full flex-col gap-2'>
          <div className='flex-1'>
            <Label htmlFor='photo-upload' className='sr-only'>
              Choose Photo *
            </Label>
            <div className='h-full min-h-52'>
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
                className={`flex size-full min-h-52 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-input transition-all hover:border-ring hover:bg-slate-50 hover:ring-1 hover:ring-ring dark:hover:bg-card ${
                  dragActive ? "bg-slate-50 dark:bg-card" : ""
                }`}
              >
                {selectedFile ? (
                  <div className='flex flex-col items-center justify-center gap-1 md:gap-1.5'>
                    <Check className='size-6 text-green-600 md:size-7 xl:size-8' />
                    <p className='text-sm font-medium tracking-tight text-green-700'>
                      Photo ready to upload
                    </p>
                    <p className='text-xs text-foreground'>
                      {selectedFile.name}
                    </p>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center gap-1 pt-5 pb-6 text-center md:gap-1.5'>
                    <Upload className='size-6 text-muted-foreground md:size-7 xl:size-8' />
                    <p className='text-sm font-medium tracking-tight text-foreground'>
                      <span className='font-extrabold'>Click to upload</span> or
                      drag and drop
                    </p>

                    <div className='flex items-center gap-1 text-xs tracking-tight text-muted-foreground'>
                      <HardDrive className='size-3' />
                      <span>Max file size: 5MB</span>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div className='flex flex-shrink-0 flex-col gap-2 lg:gap-4'>
            <div>
              <Label htmlFor='name' className='sr-only'>
                Name (optional)
              </Label>
              <Input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
                placeholder='Name (optional)'
              />
            </div>
            <div>
              <Label htmlFor='caption' className='sr-only'>
                Caption (optional)
              </Label>
              <Textarea
                id='caption'
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                maxLength={80}
                className='min-h-20'
                placeholder='Caption (optional)'
              />
            </div>
          </div>
          <Button
            type='submit'
            disabled={!selectedFile || isUploading}
            className='w-full cursor-pointer'
          >
            {isUploading ? "Uploading..." : "Share Photo"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
