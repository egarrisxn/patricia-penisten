"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import type { GuestbookEntry } from "@/lib/types";

interface GuestbookFormProps {
  onEntrySubmitted: (entry: GuestbookEntry) => void;
}

export default function GuestbookForm({
  onEntrySubmitted,
}: GuestbookFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [message, setMessage] = useState("");

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/get-ip");
      const { ip } = await response.json();

      const { data, error } = await supabase
        .from("entries")
        .insert({
          name: name || null,
          relationship: relationship || null,
          message: message.trim(),
          status: "pending",
          submitted_by_ip: ip,
        })
        .select()
        .single();

      if (error) throw error;

      setIsSubmitted(true);
      onEntrySubmitted(data);

      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setRelationship("");
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting entry:", error);
      toast.error("Error uploading entry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
          <Check className='size-6 text-green-600 md:size-12' />
        </div>
        <div className='text-foreground/90 mb-2 text-base font-semibold md:text-lg'>
          Entry Submitted!
        </div>
        <div className='text-muted-foreground/90 text-sm tracking-tight'>
          Your message is pending approval and will be visible to others once
          reviewed.
        </div>
      </div>
    );
  }

  return (
    <Card className='xs:aspect-quare xs:py-4 lg:py-8'>
      <CardContent className='flex-1'>
        <form
          onSubmit={handleSubmit}
          className='flex h-full flex-col gap-2 xl:gap-4'
        >
          <div className='flex flex-shrink-0 flex-col gap-2 xl:gap-4'>
            <div>
              <Label htmlFor='name' className='text-muted-foreground'>
                Name (Optional)
              </Label>
              <Input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                className='mt-1'
                placeholder='Jane Doe'
              />
            </div>
            <div>
              <Label htmlFor='relationship' className='text-muted-foreground'>
                Relationship (Optional)
              </Label>
              <Input
                id='relationship'
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                maxLength={50}
                className='mt-1'
                placeholder='Old Friend'
              />
            </div>
          </div>
          <div className='flex-1'>
            <div>
              <Label htmlFor='message' className='text-muted-foreground'>
                Your Memory or Message *
              </Label>
              <Textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                className='mt-1 min-h-40'
                placeholder='You and your light will be missed.'
                required
              />
              <div className='text-muted-foreground text-right text-xs'>
                {message.length}/500
              </div>
            </div>
          </div>
          <Button
            type='submit'
            disabled={!message.trim() || isSubmitting}
            className='w-full cursor-pointer'
          >
            {isSubmitting ? "Submitting..." : "Share Memory"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
