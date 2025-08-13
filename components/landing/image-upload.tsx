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

interface ImageUploadProps {
  onPhotoSubmitted: (photo: PhotoEntry) => void;
}

export default function ImageUpload({ onPhotoSubmitted }: ImageUploadProps) {
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
        <div className='bg-card/50 mx-auto mb-4 flex size-24 items-center justify-center rounded-full shadow-lg dark:border'>
          <Check className='size-6 text-green-600 md:size-12' />
        </div>
        <div className='text-foreground/90 mb-2 text-base font-semibold md:text-lg'>
          Photo Submitted!
        </div>
        <div className='text-muted-foreground/90 text-sm tracking-tight md:text-base'>
          Your image is pending approval and will be visible to others once
          reviewed.
        </div>
      </div>
    );
  }

  return (
    <Card className='dark:bg-background xs:aspect-square bg-white py-2 lg:py-4'>
      <CardContent className='flex-1 px-2 lg:px-4'>
        <form onSubmit={handleSubmit} className='flex h-full flex-col gap-2'>
          <div className='flex-1'>
            <Label htmlFor='photo-upload' className='sr-only'>
              Choose Photo *
            </Label>
            <div className='h-full'>
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
                className={`hover:border-ring hover:ring-ring/50 border-input flex size-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-all hover:bg-purple-50/20 hover:ring-1 dark:hover:bg-purple-950/5 ${
                  dragActive ? "bg-purple-100/30 dark:bg-purple-950/10" : ""
                }`}
              >
                {selectedFile ? (
                  <div className='flex flex-col items-center justify-center gap-1 md:gap-1.5'>
                    <Check className='size-6 text-green-600 md:size-7 xl:size-8' />
                    <p className='text-sm font-medium tracking-tight text-green-700'>
                      Photo ready to upload
                    </p>
                    <p className='text-muted-foreground text-xs'>
                      {selectedFile.name}
                    </p>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center gap-1 pt-5 pb-6 text-center md:gap-1.5'>
                    <Upload className='text-muted-foreground size-6 md:size-7 xl:size-8' />
                    <p className='text-muted-foreground/95 text-sm font-medium tracking-tight'>
                      <span className='font-extrabold'>Click to upload</span> or
                      drag and drop
                    </p>

                    <div className='text-muted-foreground/90 flex items-center gap-1 text-xs tracking-tight'>
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
