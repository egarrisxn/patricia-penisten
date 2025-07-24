"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Entry } from "@/lib/types";

interface GuestbookFormProps {
  onEntrySubmitted: (entry: Entry) => void;
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
      alert("Error submitting entry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className='mx-auto w-full max-w-7xl bg-white py-4 lg:py-5 dark:bg-slate-950/90'>
        <CardContent className='px-4 text-center lg:px-5'>
          <div className='mx-auto mb-4 flex size-12 items-center justify-center rounded-full md:size-14 xl:size-16'>
            <Check className='size-6 text-green-600 md:size-7 xl:size-8' />
          </div>
          <h3 className='text-muted-foreground mb-2 font-semibold'>
            Entry Submitted!
          </h3>
          <p className='text-muted-foreground/90 text-sm tracking-tight'>
            Your message is pending approval and will be visible to others once
            reviewed.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='mx-auto w-full max-w-7xl rounded-lg bg-white py-4 lg:py-5 dark:bg-slate-950/90'>
      <CardContent className='px-4 lg:px-5'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='name' className='text-muted-foreground'>
              Name (Optional)
            </Label>
            <Input
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              className='mt-1'
              placeholder='Old family friend'
            />
          </div>
          <div>
            <Label htmlFor='message' className='text-muted-foreground'>
              Your Memory or Message *
            </Label>
            <Textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='mt-1 min-h-40'
              required
              placeholder='You and your light will be missed.'
            />
          </div>
          <Button
            type='submit'
            disabled={!message.trim() || isSubmitting}
            className='w-full cursor-pointer bg-gradient-to-r from-purple-500/90 to-rose-500/90 text-white/90 hover:from-purple-500 hover:to-rose-500 hover:text-white'
          >
            {isSubmitting ? "Submitting..." : "Share Memory"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
