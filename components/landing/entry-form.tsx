"use client";

import { useState } from "react";
import { Heart, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Entry } from "@/lib/types";

interface EntryFormProps {
  onEntrySubmitted: (entry: Entry) => void;
}

export default function EntryForm({ onEntrySubmitted }: EntryFormProps) {
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
      // Get users IP address (simplified)
      const response = await fetch("/api/get-ip");
      const { ip } = await response.json();

      // Insert entry record
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

      // Reset form after 3 seconds
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
      <Card className='mx-auto w-full max-w-xl bg-white px-4 py-8 shadow-lg backdrop-blur-sm dark:bg-slate-950'>
        <CardContent className='pt-6'>
          <div className='text-center'>
            <div className='mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100'>
              <Check className='size-8 text-green-600' />
            </div>
            <h3 className='text-accent-foreground mb-2 text-lg font-semibold'>
              Entry Submitted!
            </h3>
            <p className='text-gray-600'>
              Your message is pending approval and will be visible to others
              once reviewed.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='mx-auto w-full max-w-xl bg-white px-4 py-8 shadow-lg backdrop-blur-sm dark:bg-slate-950'>
      <CardHeader>
        <CardTitle className='text-accent-foreground flex items-center gap-2'>
          <Heart className='size-5 text-red-500' />
          Share a Memory
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='name' className='text-muted-foreground'>
              Name (Optional)
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
            <Label htmlFor='relationship' className='text-muted-foreground'>
              Relationship (Optional)
            </Label>
            <Input
              id='relationship'
              aria-label='relationship'
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              placeholder='Former Colleague'
              className='mt-1'
            />
          </div>
          <div>
            <Label htmlFor='message' className='text-muted-foreground'>
              Your Memory or Message *
            </Label>
            <Textarea
              id='message'
              aria-label='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='It was a beautiful day in the summer of 1990...'
              className='mt-1 min-h-32'
              required
            />
          </div>
          <Button
            type='submit'
            disabled={!message.trim() || isSubmitting}
            className='w-full bg-gradient-to-r from-purple-500/90 to-rose-500/90 text-white/90 shadow-lg hover:from-purple-500 hover:to-rose-500 hover:text-white'
          >
            {isSubmitting ? "Submitting..." : "Share Memory"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
