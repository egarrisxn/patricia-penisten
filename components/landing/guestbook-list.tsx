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
        <div className='mx-auto mb-4 flex size-24 items-center justify-center rounded-full'>
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
          className='bg-card h-full rounded-lg border-none shadow-xl backdrop-blur-xs'
        >
          <CardContent className='flex h-full flex-col px-6 pt-4 pb-6 md:px-8 md:pt-6 md:pb-8'>
            <div className='flex items-start space-x-4'>
              <div className='min-w-0 flex-1 flex-col'>
                <div className='mb-4 flex items-start justify-between md:mb-6'>
                  {isPending(entry.status) && (
                    <div className='absolute top-2 right-2 rounded-full bg-yellow-400/90 px-2 py-1 text-xs text-slate-950'>
                      <User className='mr-[1px] mb-[1px] inline-block size-3' />{" "}
                      Pending
                    </div>
                  )}
                  <div>
                    <h4 className='mb-0.5 text-lg font-semibold md:text-xl xl:text-2xl'>
                      {entry.name || "Anonymous"}
                    </h4>
                    <p className='text-xs text-yellow-400/90 md:text-sm xl:text-base'>
                      {entry.relationship || "Unknown"}
                    </p>
                  </div>
                  <time className='text-muted-foreground text-xs font-medium md:text-[0.8rem] xl:text-sm'>
                    {new Date(entry.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className='text-accent-foreground grow pt-4 font-serif text-sm italic md:text-base xl:text-lg'>
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
