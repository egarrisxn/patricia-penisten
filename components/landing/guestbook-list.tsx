"use client";

import { User, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { GuestbookEntry } from "@/lib/types";

interface GuestbookListProps {
  approvedEntries: GuestbookEntry[];
  userEntries: GuestbookEntry[];
}

export default function GuestbookList({
  approvedEntries,
  userEntries,
}: GuestbookListProps) {
  const allEntries = [
    ...approvedEntries,
    ...userEntries.filter(
      (e) =>
        e.status === "pending" && !approvedEntries.some((ae) => ae.id === e.id)
    ),
  ];

  if (allEntries.length === 0) {
    return (
      <div className='pt-20 pb-24 text-center'>
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800'>
          <MessageCircle className='text-foreground/80 size-12' />
        </div>
        <p className='text-foreground/80 text-lg'>No Guestbook entries</p>
        <p className='text-foreground/70 text-sm'>
          Be the first to add to our guestbook
        </p>
      </div>
    );
  }

  const isPending = (status: string) => status === "pending";

  return (
    <div className='grid grid-cols-1 gap-6 md:gap-8'>
      {allEntries.map((entry) => (
        <Card
          key={`entry-${entry.id}`}
          className='dark:border-border/20 dark:bg-card h-full border border-white/20 bg-white shadow-xl backdrop-blur-xs'
        >
          <CardContent className='flex h-full flex-col p-6 md:p-8'>
            <div className='flex items-start space-x-4'>
              <div className='min-w-0 flex-1 flex-col'>
                <div className='mb-4 flex items-start justify-between md:mb-6'>
                  {isPending(entry.status) && (
                    <div className='absolute top-2 right-2 rounded-full bg-amber-400 px-2 py-1 text-xs text-slate-950'>
                      <User className='mr-[1px] mb-[1px] inline-block size-3' />{" "}
                      Pending
                    </div>
                  )}
                  <div>
                    <h4 className='mb-0.5 text-xl font-medium md:text-2xl'>
                      {entry.name || "Anonymous"}
                    </h4>
                    <p className='text-sm text-purple-700 md:text-base dark:text-purple-300'>
                      {entry.relationship || "Unknown"}
                    </p>
                  </div>
                  <time className='text-accent-foreground/80 text-sm md:text-base'>
                    {new Date(entry.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className='text-foreground/90 grow pt-4 text-sm italic md:text-base'>
                  <q>{entry.message}</q>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
